"use client";

/**
 * QuizDiagram — 問題・解答に自動で図を生成するコンポーネント
 * 説明文・問題文を解析して最適な図を描画する
 */

// ─────────────────────────────────────────────
// 型定義
// ─────────────────────────────────────────────
interface JournalEntry {
  debit: string[];    // 借方の勘定科目・金額
  credit: string[];   // 貸方の勘定科目・金額
}

interface CalcStep {
  label: string;
  value: string;
  op?: string; // +, -, ×, ÷, =
}

// ─────────────────────────────────────────────
// 解析関数
// ─────────────────────────────────────────────

/** 説明文から仕訳データを抽出 */
function parseJournalEntry(text: string): JournalEntry | null {
  // パターン: 借方：A / 貸方：B  または  借方:A/貸方:B
  const m = text.match(/借方[：:]\s*(.+?)\s*[\/／]\s*貸方[：:]\s*(.+?)(?:[。\n]|$)/);
  if (m) {
    return {
      debit: m[1].trim().split(/[・、]/).map(s => s.trim()).filter(Boolean),
      credit: m[2].trim().split(/[・、]/).map(s => s.trim()).filter(Boolean),
    };
  }
  // パターン: 「借方：A100 貸方：B100」のケース
  const m2 = text.match(/借方[：:]\s*([^\s貸]+)\s+貸方[：:]\s*([^\s。]+)/);
  if (m2) {
    return {
      debit: [m2[1].trim()],
      credit: [m2[2].trim()],
    };
  }
  return null;
}

/** 説明文から計算式ステップを抽出 */
function parseCalcSteps(text: string): CalcStep[] {
  const steps: CalcStep[] = [];

  // パターン: 純資産＝資産－負債＝500万円－200万円＝300万円
  const eqPattern = /([^＝=\n。]+)[＝=]([^＝=\n。]+)/g;
  let m: RegExpExecArray | null;
  let found = false;
  const seen = new Set<string>();

  while ((m = eqPattern.exec(text)) !== null) {
    const label = m[1].trim().replace(/^[\s・]+/, "");
    const value = m[2].trim();
    const key = label + value;
    if (!seen.has(key) && label.length < 40 && value.length < 40) {
      seen.add(key);
      steps.push({ label, value, op: "=" });
      found = true;
    }
  }

  // 減価償却費の公式
  if (!found && text.includes("取得") && text.includes("耐用")) {
    steps.push({ label: "減価償却費", value: "(取得価額 − 残存価額) ÷ 耐用年数", op: "=" });
  }
  // 売上原価の公式
  if (!found && text.includes("売上原価")) {
    steps.push({ label: "売上原価", value: "期首商品 ＋ 当期仕入 − 期末商品", op: "=" });
  }
  // 利益の公式
  if (!found && text.includes("収益") && text.includes("費用") && text.includes("利益")) {
    steps.push({ label: "当期純利益", value: "収益 − 費用", op: "=" });
  }

  return steps;
}

/** 問題文から「概念図」タイプを判定 */
type ConceptType =
  | "five_elements"   // 5要素分類表
  | "bs_structure"    // B/S構造
  | "pl_structure"    // P/L構造
  | "tform"           // T字勘定
  | "debit_credit_rule" // 増減ルール表
  | "none";

function detectConceptType(question: string): ConceptType {
  const q = question;
  if (/(資産|負債|純資産|収益|費用).*(分類|どれ|いずれ|何)/.test(q)) return "five_elements";
  if (/(貸借対照表|B\/S|BS)/.test(q)) return "bs_structure";
  if (/(損益計算書|P\/L|PL)/.test(q)) return "pl_structure";
  if (/(仕訳|借方|貸方).*(どれ|正しい|科目|記録)/.test(q)) return "tform";
  if (/(増加|減少).*(借方|貸方|どちら)/.test(q)) return "debit_credit_rule";
  return "none";
}

// ─────────────────────────────────────────────
// サブ図コンポーネント
// ─────────────────────────────────────────────

/** 仕訳図（借方・貸方ボックス） */
function JournalEntryBox({ entry, isCorrect }: { entry: JournalEntry; isCorrect?: boolean }) {
  const border = isCorrect === undefined ? "#475569" : isCorrect ? "#4ade80" : "#f87171";
  const bg = isCorrect === undefined ? "rgba(71,85,105,0.2)" : isCorrect ? "rgba(74,222,128,0.1)" : "rgba(248,113,113,0.1)";

  return (
    <div style={{
      border: `2px solid ${border}`,
      borderRadius: 12,
      overflow: "hidden",
      background: bg,
      marginBottom: 12,
    }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        {/* 借方 */}
        <div style={{ padding: "10px 14px", borderRight: `2px solid ${border}` }}>
          <p style={{ fontSize: 10, fontWeight: "bold", color: "#93c5fd", marginBottom: 4, letterSpacing: "0.05em" }}>
            借方（左）
          </p>
          {entry.debit.map((d, i) => (
            <p key={i} style={{ fontSize: 13, color: "#e2e8f0", fontWeight: "bold", margin: "2px 0" }}>{d}</p>
          ))}
        </div>
        {/* 貸方 */}
        <div style={{ padding: "10px 14px" }}>
          <p style={{ fontSize: 10, fontWeight: "bold", color: "#86efac", marginBottom: 4, letterSpacing: "0.05em" }}>
            貸方（右）
          </p>
          {entry.credit.map((c, i) => (
            <p key={i} style={{ fontSize: 13, color: "#e2e8f0", fontWeight: "bold", margin: "2px 0" }}>{c}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

/** 計算ステップ図 */
function CalcDiagram({ steps }: { steps: CalcStep[] }) {
  if (steps.length === 0) return null;
  return (
    <div style={{
      background: "rgba(99,102,241,0.1)",
      border: "1.5px solid #6366f1",
      borderRadius: 12,
      padding: "10px 14px",
      marginBottom: 12,
    }}>
      <p style={{ fontSize: 10, fontWeight: "bold", color: "#a5b4fc", marginBottom: 6 }}>📐 計算式</p>
      {steps.map((s, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", gap: 6, margin: "4px 0" }}>
          <span style={{ fontSize: 12, color: "#cbd5e1", flex: 1 }}>{s.label}</span>
          <span style={{ fontSize: 14, color: "#a5b4fc", fontWeight: "bold" }}>{s.op}</span>
          <span style={{ fontSize: 13, color: "#e2e8f0", fontWeight: "bold" }}>{s.value}</span>
        </div>
      ))}
    </div>
  );
}

/** 5要素分類図 */
function FiveElementsDiagram({ highlight }: { highlight?: string }) {
  const elements = [
    { name: "資産", side: "借方↑", color: "#3b82f6", examples: "現金・売掛金・建物" },
    { name: "負債", side: "貸方↑", color: "#ef4444", examples: "借入金・買掛金" },
    { name: "純資産", side: "貸方↑", color: "#8b5cf6", examples: "資本金・繰越利益剰余金" },
    { name: "収益", side: "貸方↑", color: "#10b981", examples: "売上・受取利息" },
    { name: "費用", side: "借方↑", color: "#f59e0b", examples: "仕入・給料・減価償却費" },
  ];
  return (
    <div style={{ marginBottom: 12 }}>
      <p style={{ fontSize: 10, fontWeight: "bold", color: "#94a3b8", marginBottom: 6 }}>📊 5大要素の分類</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
        {elements.map(el => {
          const isHl = highlight && (el.name === highlight || el.examples.includes(highlight));
          return (
            <div key={el.name} style={{
              display: "flex", alignItems: "center", gap: 8,
              background: isHl ? `${el.color}33` : "rgba(255,255,255,0.04)",
              border: `1.5px solid ${isHl ? el.color : "rgba(255,255,255,0.08)"}`,
              borderRadius: 8, padding: "6px 10px",
            }}>
              <span style={{ fontWeight: "bold", color: el.color, width: 48, fontSize: 13 }}>{el.name}</span>
              <span style={{ fontSize: 10, color: "#64748b", width: 40 }}>{el.side}</span>
              <span style={{ fontSize: 11, color: "#94a3b8" }}>{el.examples}</span>
              {isHl && <span style={{ fontSize: 11, color: el.color, marginLeft: "auto" }}>← ここ！</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/** 借方・貸方の増減ルール表 */
function DebitCreditRuleTable() {
  return (
    <div style={{ marginBottom: 12, overflowX: "auto" }}>
      <p style={{ fontSize: 10, fontWeight: "bold", color: "#94a3b8", marginBottom: 6 }}>📋 増減ルール</p>
      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
        <thead>
          <tr>
            <th style={{ padding: "4px 8px", background: "rgba(255,255,255,0.06)", color: "#94a3b8", textAlign: "left", border: "1px solid #334155" }}>要素</th>
            <th style={{ padding: "4px 8px", background: "rgba(59,130,246,0.15)", color: "#93c5fd", border: "1px solid #334155" }}>借方（左）</th>
            <th style={{ padding: "4px 8px", background: "rgba(16,185,129,0.15)", color: "#6ee7b7", border: "1px solid #334155" }}>貸方（右）</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["資産", "増加 ＋", "減少 −"],
            ["負債", "減少 −", "増加 ＋"],
            ["純資産", "減少 −", "増加 ＋"],
            ["費用", "増加 ＋", "減少 −"],
            ["収益", "減少 −", "増加 ＋"],
          ].map(([el, dr, cr]) => (
            <tr key={el}>
              <td style={{ padding: "4px 8px", color: "#e2e8f0", border: "1px solid #334155" }}>{el}</td>
              <td style={{ padding: "4px 8px", color: "#93c5fd", textAlign: "center", border: "1px solid #334155" }}>{dr}</td>
              <td style={{ padding: "4px 8px", color: "#6ee7b7", textAlign: "center", border: "1px solid #334155" }}>{cr}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/** T字勘定のヒント図 */
function TFormHint() {
  return (
    <div style={{
      background: "rgba(71,85,105,0.2)", border: "1.5px solid #475569",
      borderRadius: 12, padding: "10px 14px", marginBottom: 12,
    }}>
      <p style={{ fontSize: 10, fontWeight: "bold", color: "#94a3b8", marginBottom: 6 }}>📒 仕訳のルール</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr", gap: 8, alignItems: "center" }}>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 11, color: "#93c5fd", fontWeight: "bold" }}>借方（左）</p>
          <p style={{ fontSize: 11, color: "#94a3b8" }}>資産↑ / 費用↑</p>
          <p style={{ fontSize: 11, color: "#94a3b8" }}>負債↓ / 純資産↓ / 収益↓</p>
        </div>
        <div style={{ fontSize: 20, color: "#475569", fontWeight: "bold" }}>｜</div>
        <div style={{ textAlign: "center" }}>
          <p style={{ fontSize: 11, color: "#86efac", fontWeight: "bold" }}>貸方（右）</p>
          <p style={{ fontSize: 11, color: "#94a3b8" }}>負債↑ / 純資産↑ / 収益↑</p>
          <p style={{ fontSize: 11, color: "#94a3b8" }}>資産↓ / 費用↓</p>
        </div>
      </div>
    </div>
  );
}

/** B/S構造図 */
function BSStructure() {
  return (
    <div style={{ marginBottom: 12 }}>
      <p style={{ fontSize: 10, fontWeight: "bold", color: "#94a3b8", marginBottom: 6 }}>🗂️ 貸借対照表（B/S）の構造</p>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", border: "1.5px solid #334155", borderRadius: 10, overflow: "hidden" }}>
        <div style={{ padding: "8px 12px", background: "rgba(59,130,246,0.1)", borderRight: "1px solid #334155" }}>
          <p style={{ fontSize: 10, color: "#93c5fd", fontWeight: "bold", marginBottom: 4 }}>借方（資産の部）</p>
          <p style={{ fontSize: 11, color: "#94a3b8" }}>流動資産</p>
          <p style={{ fontSize: 11, color: "#94a3b8", paddingLeft: 8 }}>現金・売掛金・商品</p>
          <p style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>固定資産</p>
          <p style={{ fontSize: 11, color: "#94a3b8", paddingLeft: 8 }}>建物・土地・備品</p>
        </div>
        <div style={{ padding: "8px 12px", background: "rgba(239,68,68,0.08)" }}>
          <p style={{ fontSize: 10, color: "#fca5a5", fontWeight: "bold", marginBottom: 4 }}>貸方（負債・純資産の部）</p>
          <p style={{ fontSize: 11, color: "#94a3b8" }}>流動負債</p>
          <p style={{ fontSize: 11, color: "#94a3b8", paddingLeft: 8 }}>買掛金・未払金</p>
          <p style={{ fontSize: 11, color: "#94a3b8", marginTop: 4 }}>純資産</p>
          <p style={{ fontSize: 11, color: "#94a3b8", paddingLeft: 8 }}>資本金・繰越利益剰余金</p>
        </div>
      </div>
      <p style={{ fontSize: 10, color: "#64748b", textAlign: "center", marginTop: 4 }}>
        資産 ＝ 負債 ＋ 純資産（常に成立）
      </p>
    </div>
  );
}

/** P/L構造図 */
function PLStructure() {
  return (
    <div style={{ marginBottom: 12 }}>
      <p style={{ fontSize: 10, fontWeight: "bold", color: "#94a3b8", marginBottom: 6 }}>📈 損益計算書（P/L）の構造</p>
      <div style={{ border: "1.5px solid #334155", borderRadius: 10, overflow: "hidden" }}>
        {[
          { label: "売上高", sub: "収益", color: "#10b981" },
          { label: "− 売上原価", sub: "費用", color: "#f59e0b" },
          { label: "＝ 売上総利益（粗利益）", sub: "", color: "#6366f1" },
          { label: "− 販売費・一般管理費", sub: "費用", color: "#f59e0b" },
          { label: "＝ 営業利益", sub: "", color: "#6366f1" },
          { label: "± 営業外収益・費用", sub: "", color: "#94a3b8" },
          { label: "＝ 当期純利益", sub: "", color: "#4ade80" },
        ].map((r, i) => (
          <div key={i} style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            padding: "5px 12px",
            background: i % 2 === 0 ? "rgba(255,255,255,0.03)" : "transparent",
            borderBottom: i < 6 ? "1px solid #1e293b" : "none",
          }}>
            <span style={{ fontSize: 12, color: r.color, fontWeight: r.label.startsWith("＝") ? "bold" : "normal" }}>
              {r.label}
            </span>
            {r.sub && <span style={{ fontSize: 10, color: "#64748b" }}>{r.sub}</span>}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// メイン QuizDiagram コンポーネント
// ─────────────────────────────────────────────

interface QuizDiagramProps {
  question: string;
  explanation: string;
  /** 回答前はundefined、回答後はtrue/false */
  isAnswered?: boolean;
  isCorrect?: boolean;
  correctLabel?: string;
}

export default function QuizDiagram({
  question,
  explanation,
  isAnswered,
  isCorrect,
  correctLabel,
}: QuizDiagramProps) {
  const journalEntry = parseJournalEntry(explanation);
  const calcSteps = parseCalcSteps(explanation);
  const conceptType = detectConceptType(question);

  // ── 回答前：問題文に応じた概念図を表示 ──
  if (!isAnswered) {
    return (
      <div style={{ marginBottom: 8 }}>
        {conceptType === "five_elements" && <FiveElementsDiagram />}
        {conceptType === "bs_structure" && <BSStructure />}
        {conceptType === "pl_structure" && <PLStructure />}
        {conceptType === "tform" && <TFormHint />}
        {conceptType === "debit_credit_rule" && <DebitCreditRuleTable />}
        {conceptType === "none" && journalEntry && (
          <div style={{
            background: "rgba(71,85,105,0.15)", border: "1px dashed #475569",
            borderRadius: 10, padding: "8px 12px", marginBottom: 8,
          }}>
            <p style={{ fontSize: 11, color: "#64748b" }}>💡 仕訳のヒント：借方（左）と貸方（右）の増減を考えよう</p>
          </div>
        )}
      </div>
    );
  }

  // ── 回答後：解答解説図を表示 ──
  return (
    <div style={{ marginTop: 8, marginBottom: 8 }}>
      {/* 正解の選択肢ラベル */}
      {correctLabel && (
        <div style={{
          background: "rgba(74,222,128,0.08)",
          border: "1px solid #4ade80",
          borderRadius: 8, padding: "6px 12px", marginBottom: 8,
          display: "flex", alignItems: "center", gap: 8,
        }}>
          <span style={{ fontSize: 13, color: "#4ade80", fontWeight: "bold" }}>✓ 正解：</span>
          <span style={{ fontSize: 13, color: "#e2e8f0" }}>{correctLabel}</span>
        </div>
      )}

      {/* 仕訳図 */}
      {journalEntry && (
        <>
          <p style={{ fontSize: 10, color: "#64748b", marginBottom: 4 }}>📒 正しい仕訳</p>
          <JournalEntryBox entry={journalEntry} isCorrect={isCorrect} />
        </>
      )}

      {/* 計算式図 */}
      {calcSteps.length > 0 && <CalcDiagram steps={calcSteps} />}

      {/* 概念補足図 */}
      {!journalEntry && calcSteps.length === 0 && (
        <>
          {conceptType === "five_elements" && <FiveElementsDiagram highlight={correctLabel} />}
          {conceptType === "bs_structure" && <BSStructure />}
          {conceptType === "pl_structure" && <PLStructure />}
          {conceptType === "tform" && <TFormHint />}
          {conceptType === "debit_credit_rule" && <DebitCreditRuleTable />}
          {conceptType === "none" && <DebitCreditRuleTable />}
        </>
      )}
    </div>
  );
}
