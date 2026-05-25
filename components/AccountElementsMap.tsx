"use client";
import { useState, useEffect } from "react";

// --- 代表科目（常時表示） ---
const REP: Record<string, string[]> = {
  assets:      ["現金", "売掛金", "建物", "土地", "備品"],
  liabilities: ["買掛金", "借入金", "未払金"],
  equity:      ["資本金", "繰越利益剰余金"],
  expenses:    ["仕入", "給料", "減価償却費"],
  revenues:    ["売上", "受取利息", "受取家賃"],
};

// --- 3級 全科目 ---
const G3: Record<string, string[]> = {
  assets: [
    "現金", "小口現金", "当座預金", "普通預金", "定期預金",
    "受取手形", "売掛金", "クレジット売掛金", "電子記録債権",
    "貸倒引当金", "繰越商品",
    "貸付金", "手形貸付金", "従業員貸付金", "役員貸付金",
    "立替金", "従業員立替金", "前払金", "未収入金", "仮払金",
    "受取商品券", "差入保証金", "貯蔵品",
    "仮払消費税", "仮払法人税等", "前払費用", "未収収益",
    "建物", "建物減価償却累計額",
    "備品", "備品減価償却累計額",
    "車両運搬具", "車両運搬具減価償却累計額",
    "土地",
  ],
  liabilities: [
    "支払手形", "買掛金", "電子記録債務",
    "前受金", "借入金", "役員借入金", "手形借入金", "当座借越",
    "未払金", "仮受金", "未払費用", "前受収益",
    "預り金", "従業員預り金", "所得税預り金", "社会保険料預り金",
    "仮受消費税", "未払消費税", "未払法人税等", "未払配当金",
  ],
  equity: [
    "資本金", "利益準備金", "繰越利益剰余金",
  ],
  expenses: [
    "仕入", "売上原価", "発送費",
    "給料", "法定福利費",
    "広告宣伝費", "支払手数料", "支払利息",
    "旅費交通費",
    "貸倒引当金繰入", "貸倒損失", "減価償却費",
    "通信費", "消耗品費", "水道光熱費",
    "支払家賃", "支払地代", "保険料", "租税公課",
    "修繕費", "雑費", "雑損", "固定資産売却損",
    "保管費", "諸会費",
    "法人税、住民税及び事業税",
  ],
  revenues: [
    "売上",
    "受取家賃", "受取地代", "受取手数料", "受取利息",
    "雑益", "貸倒引当金戻入", "償却債権取立益", "固定資産売却益",
  ],
};

// --- 2級追加科目 ---
const G2_EXTRA: Record<string, string[]> = {
  assets: [
    "契約資産", "短期貸付金",
    "未収還付法人税等", "未収還付消費税",
    "商品", "仕掛品",
    "繰延税金資産", "リース資産",
    "工具器具", "機械装置", "構築物", "建設仮勘定",
    "のれん", "特許権", "商標権", "借地権",
    "ソフトウェア", "ソフトウェア仮勘定",
    "売買目的有価証券", "満期保有目的債券",
    "子会社株式", "その他有価証券",
    "長期前払費用", "長期貸付金",
    "不渡手形", "別段預金",
    "前払年金費用",
    "営業外受取手形", "営業外電子記録債権",
  ],
  liabilities: [
    "返金負債", "契約負債",
    "営業外支払手形", "営業外電子記録債務",
    "短期借入金", "長期借入金", "長期未払金",
    "未払固定資産税", "未払賞与",
    "修繕引当金", "商品保証引当金", "賞与引当金",
    "繰延税金負債",
    "役員預り金", "預り保証金",
    "リース債務", "退職給付引当金",
  ],
  equity: [
    "株式申込証拠金",
    "資本準備金", "その他資本剰余金",
    "配当平均積立金", "別途積立金",
    "その他有価証券評価差額金",
    "資本剰余金", "利益剰余金",
    "非支配株主持分",
  ],
  expenses: [
    "役務原価", "棚卸減耗損", "商品評価損",
    "役員賞与", "退職給付費用",
    "修繕引当金繰入", "賞与引当金繰入", "商品保証引当金繰入",
    "研究開発費",
    "のれん償却", "ソフトウェア償却", "特許権償却",
    "支払リース料",
    "創立費", "株式交付費", "開業費", "開発費",
    "手形売却損", "有価証券売却損", "有価証券評価損",
    "投資有価証券売却損",
    "火災損失", "固定資産除却損",
    "為替差損", "法人税等調整額",
  ],
  revenues: [
    "役務収益",
    "受取配当金", "有価証券利息",
    "有価証券売却益", "有価証券評価益",
    "投資有価証券売却益",
    "保険差益", "負ののれん発生益",
    "修繕引当金戻入", "商品保証引当金戻入",
    "固定資産受贈益", "国庫補助金受贈益",
    "為替差益",
  ],
};

// --- ブロック設定 ---
const CFG: Record<string, { label: string; color: string }> = {
  assets:      { label: "資産",   color: "#E8A87C" },
  liabilities: { label: "負債",   color: "#E74C3C" },
  equity:      { label: "純資産", color: "#D88AAB" },
  expenses:    { label: "費用",   color: "#7DC4C4" },
  revenues:    { label: "収益",   color: "#95C699" },
};

const BLOCK_IDS = ["assets", "liabilities", "equity", "expenses", "revenues"] as const;

// --- localStorage ヘルパー ---
const LS_OPEN  = "acct-map-open";
const lsBlock  = (id: string) => `acct-map-block-${id}`;

// --- ElementBlock コンポーネント ---
function ElementBlock({
  id, grade, expanded, onToggle,
}: {
  id: string;
  grade?: string;
  expanded: boolean;
  onToggle: () => void;
}) {
  const { label, color } = CFG[id];
  const rep = REP[id];
  const all = [...G3[id], ...(grade === "2" ? (G2_EXTRA[id] ?? []) : [])];
  const extra = all.filter((a) => !rep.includes(a));

  return (
    <div
      className="flex flex-col h-full rounded-xl p-3"
      style={{ background: `${color}18`, border: `2px solid ${color}` }}
    >
      <p className="font-bold text-base text-center mb-2" style={{ color }}>
        {label}
      </p>

      {/* 代表科目（常時表示） */}
      <div className="flex flex-wrap gap-1">
        {rep.map((acc) => (
          <span
            key={acc}
            className="text-xs px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-200"
          >
            {acc}
          </span>
        ))}
      </div>

      {/* 追加科目（展開時表示） */}
      {expanded && extra.length > 0 && (
        <>
          <div className="border-t border-slate-600 my-2" />
          <div className="flex flex-wrap gap-1">
            {extra.map((acc) => (
              <span
                key={acc}
                className="text-xs px-1.5 py-0.5 rounded bg-slate-800/80 text-slate-400"
              >
                {acc}
              </span>
            ))}
          </div>
        </>
      )}

      {/* 展開トグル */}
      {extra.length > 0 && (
        <button
          onClick={onToggle}
          className="mt-auto pt-2 text-xs transition-colors hover:opacity-80 text-center"
          style={{ color: `${color}cc` }}
        >
          {expanded ? "▲ 閉じる" : `▼ 全${all.length}科目を見る`}
        </button>
      )}
    </div>
  );
}

// --- メインコンポーネント ---
export default function AccountElementsMap({ grade }: { grade?: string }) {
  const [open, setOpen] = useState(true);
  const [expanded, setExpanded] = useState<Record<string, boolean>>(
    Object.fromEntries(BLOCK_IDS.map((id) => [id, false]))
  );

  // localStorage から復元
  useEffect(() => {
    const savedOpen = localStorage.getItem(LS_OPEN);
    if (savedOpen !== null) setOpen(savedOpen === "true");

    const updates: Record<string, boolean> = {};
    for (const id of BLOCK_IDS) {
      const saved = localStorage.getItem(lsBlock(id));
      if (saved !== null) updates[id] = saved === "true";
    }
    if (Object.keys(updates).length > 0) {
      setExpanded((prev) => ({ ...prev, ...updates }));
    }
  }, []);

  const toggleOpen = () => {
    const next = !open;
    setOpen(next);
    localStorage.setItem(LS_OPEN, String(next));
  };

  const toggleBlock = (id: string) => {
    setExpanded((prev) => {
      const next = { ...prev, [id]: !prev[id] };
      localStorage.setItem(lsBlock(id), String(next[id]));
      return next;
    });
  };

  return (
    <div className="mb-4 rounded-xl border border-slate-700 overflow-hidden">
      {/* アコーディオンヘッダー */}
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between px-4 py-3 bg-slate-800 hover:bg-slate-700 text-sm font-semibold text-slate-300 transition-colors"
      >
        <span>📊 簿記の5要素マップ</span>
        <span className="text-slate-500 text-xs">{open ? "▲ 閉じる" : "▼ 開く"}</span>
      </button>

      {open && (
        <div className="bg-slate-900 p-4">
          <div className="flex flex-col sm:flex-row gap-4">

            {/* 貸借対照表 B/S */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-slate-400 mb-2 text-center">
                貸借対照表 B/S
              </p>
              <div
                className="grid grid-cols-2 gap-2"
                style={{ gridTemplateRows: "1fr 1fr", minHeight: "220px" }}
              >
                {/* 資産: 左列全体 */}
                <div className="row-span-2">
                  <ElementBlock
                    id="assets"
                    grade={grade}
                    expanded={expanded.assets}
                    onToggle={() => toggleBlock("assets")}
                  />
                </div>
                {/* 負債: 右上 */}
                <div>
                  <ElementBlock
                    id="liabilities"
                    grade={grade}
                    expanded={expanded.liabilities}
                    onToggle={() => toggleBlock("liabilities")}
                  />
                </div>
                {/* 純資産: 右下 */}
                <div>
                  <ElementBlock
                    id="equity"
                    grade={grade}
                    expanded={expanded.equity}
                    onToggle={() => toggleBlock("equity")}
                  />
                </div>
              </div>
              <p className="text-xs text-center mt-2 font-semibold" style={{ color: "#E8A87C" }}>
                ↓ 財政状態を把握
              </p>
            </div>

            {/* 損益計算書 P/L */}
            <div className="flex-1 min-w-0">
              <p className="text-xs font-bold text-slate-400 mb-2 text-center">
                損益計算書 P/L
              </p>
              <div
                className="grid grid-cols-2 gap-2"
                style={{ minHeight: "220px" }}
              >
                <ElementBlock
                  id="expenses"
                  grade={grade}
                  expanded={expanded.expenses}
                  onToggle={() => toggleBlock("expenses")}
                />
                <ElementBlock
                  id="revenues"
                  grade={grade}
                  expanded={expanded.revenues}
                  onToggle={() => toggleBlock("revenues")}
                />
              </div>
              <p className="text-xs text-center mt-2 font-semibold" style={{ color: "#95C699" }}>
                ↓ 経営成績を把握
              </p>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
