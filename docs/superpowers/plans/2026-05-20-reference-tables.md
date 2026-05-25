# 参照テーブル表示機能 実装プラン

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 2級・3級の確認問題に勘定科目表、実践！電卓問題に財務諸表ガイドをアコーディオン形式で表示する

**Architecture:** 新規コンポーネント2つ（AccountTitlesTable, FinancialStatementsGuide）を作成し、既存の LessonClient・CalculatorClient に差し込む。useState で開閉状態を管理。外部ライブラリなし。

**Tech Stack:** Next.js (App Router), React, TypeScript, Tailwind CSS

---

## ファイル構成

| 操作 | パス |
|---|---|
| 新規作成 | `components/AccountTitlesTable.tsx` |
| 新規作成 | `components/FinancialStatementsGuide.tsx` |
| 修正 | `components/LessonClient.tsx` |
| 修正 | `components/CalculatorClient.tsx` |

---

### Task 1: AccountTitlesTable コンポーネントを作成

**Files:**
- Create: `components/AccountTitlesTable.tsx`

- [ ] **Step 1: ファイルを作成する**

`components/AccountTitlesTable.tsx` を以下の内容で作成する：

```tsx
"use client";
import { useState } from "react";

const ACCOUNTS: Record<string, string[]> = {
  資産: [
    "現金", "当座預金", "普通預金", "受取手形", "売掛金", "繰越商品",
    "前払費用", "未収収益", "建物", "備品", "土地", "貸付金",
    "売買目的有価証券", "満期保有目的債券", "子会社株式", "その他有価証券",
    "投資有価証券", "のれん", "建設仮勘定", "繰延税金資産", "ソフトウェア",
  ],
  負債: [
    "支払手形", "買掛金", "借入金", "前受金", "未払費用", "前受収益",
    "社債", "退職給付引当金", "修繕引当金", "繰延税金負債",
  ],
  純資産: [
    "資本金", "繰越利益剰余金",
    "資本準備金", "利益準備金", "その他有価証券評価差額金",
  ],
  収益: [
    "売上", "受取手数料", "受取利息", "受取家賃", "固定資産売却益",
    "受取配当金", "有価証券売却益",
  ],
  費用: [
    "仕入", "給料", "旅費交通費", "通信費", "水道光熱費", "支払家賃",
    "支払保険料", "広告宣伝費", "消耗品費", "支払利息", "固定資産売却損",
    "貸倒損失", "減価償却費", "貸倒引当金繰入",
    "退職給付費用", "のれん償却", "法人税等", "法人税等調整額",
  ],
};

const COLORS: Record<string, { bg: string; text: string; border: string }> = {
  資産:   { bg: "bg-blue-900/30",    text: "text-blue-300",    border: "border-blue-700" },
  負債:   { bg: "bg-red-900/30",     text: "text-red-300",     border: "border-red-700" },
  純資産: { bg: "bg-emerald-900/30", text: "text-emerald-300", border: "border-emerald-700" },
  収益:   { bg: "bg-yellow-900/30",  text: "text-yellow-300",  border: "border-yellow-700" },
  費用:   { bg: "bg-slate-700/50",   text: "text-slate-300",   border: "border-slate-600" },
};

export default function AccountTitlesTable() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 rounded-xl border border-slate-700 overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 bg-slate-800 hover:bg-slate-700 text-sm font-semibold text-slate-300 transition-colors"
      >
        <span>📋 勘定科目表（参照）</span>
        <span className="text-slate-500 text-xs">{open ? "▲ 閉じる" : "▼ 開く"}</span>
      </button>
      {open && (
        <div className="bg-slate-900 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {Object.entries(ACCOUNTS).map(([cat, accounts]) => {
            const c = COLORS[cat];
            return (
              <div key={cat} className={`rounded-lg border ${c.border} ${c.bg} p-3`}>
                <p className={`text-xs font-bold mb-2 ${c.text}`}>{cat}</p>
                <div className="flex flex-wrap gap-1">
                  {accounts.map((acc) => (
                    <span
                      key={acc}
                      className={`text-xs px-1.5 py-0.5 rounded bg-slate-800/80 ${c.text}`}
                    >
                      {acc}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: コミット**

```bash
git add components/AccountTitlesTable.tsx
git commit -m "feat: add AccountTitlesTable accordion component"
```

---

### Task 2: LessonClient に AccountTitlesTable を組み込む

**Files:**
- Modify: `components/LessonClient.tsx`

- [ ] **Step 1: import を追加する**

`components/LessonClient.tsx` の既存 import 群の末尾に追加する：

```tsx
import AccountTitlesTable from "@/components/AccountTitlesTable";
```

- [ ] **Step 2: QuizSection の問題文直上に組み込む**

`components/LessonClient.tsx` の `QuizSection` 関数内、`{shuffledQuiz && !submitted && (` の直前（return 内の進捗バーの直下）に挿入する。

変更前（`LessonClient.tsx` L149〜154 付近）：
```tsx
      {shuffledQuiz && !submitted && (
        <QuizDiagram
          question={shuffledQuiz.question}
          explanation={shuffledQuiz.explanation}
        />
      )}
```

変更後：
```tsx
      <AccountTitlesTable />

      {shuffledQuiz && !submitted && (
        <QuizDiagram
          question={shuffledQuiz.question}
          explanation={shuffledQuiz.explanation}
        />
      )}
```

- [ ] **Step 3: ブラウザで動作確認する**

1. `npm run dev` でサーバー起動（既に起動中なら不要）
2. 任意のレッスン（例: `/grade/3/chapter/g3-ch01/lesson/g3-ch01-l01`）を開く
3. 「確認問題」タブに切り替える
4. 「📋 勘定科目表（参照）▼ 開く」ボタンが表示されていることを確認
5. クリックして開き、5カテゴリが色分けで表示されることを確認
6. もう一度クリックして閉じることを確認

- [ ] **Step 4: コミット**

```bash
git add components/LessonClient.tsx
git commit -m "feat: show AccountTitlesTable accordion in quiz section"
```

---

### Task 3: FinancialStatementsGuide コンポーネントを作成

**Files:**
- Create: `components/FinancialStatementsGuide.tsx`

- [ ] **Step 1: ファイルを作成する**

`components/FinancialStatementsGuide.tsx` を以下の内容で作成する：

```tsx
"use client";
import { useState } from "react";

type FSCategory = "資産" | "負債" | "純資産" | "収益" | "費用" | "その他";

const ASSET_KW    = ["現金", "預金", "受取手形", "売掛金", "商品", "前払", "未収", "建物", "備品", "土地", "貸付", "有価証券", "のれん", "ソフトウェア", "投資", "繰延税金資産", "仮払"];
const LIABILITY_KW= ["支払手形", "買掛金", "借入金", "前受", "未払", "社債", "引当金", "繰延税金負債", "仮受"];
const EQUITY_KW   = ["資本金", "準備金", "剰余金", "評価差額"];
const REVENUE_KW  = ["売上", "受取手数料", "受取利息", "受取家賃", "受取配当", "売却益"];
const EXPENSE_KW  = ["仕入", "給料", "旅費", "通信費", "水道", "支払家賃", "保険料", "広告", "消耗", "支払利息", "売却損", "貸倒", "減価償却", "退職給付", "のれん償却", "法人税"];

function classify(name: string): FSCategory {
  if (ASSET_KW.some((k) => name.includes(k)))    return "資産";
  if (LIABILITY_KW.some((k) => name.includes(k))) return "負債";
  if (EQUITY_KW.some((k) => name.includes(k)))   return "純資産";
  if (REVENUE_KW.some((k) => name.includes(k)))  return "収益";
  if (EXPENSE_KW.some((k) => name.includes(k)))  return "費用";
  return "その他";
}

function AccountList({ items, placeholder, textColor }: { items: string[]; placeholder: string; textColor: string }) {
  if (items.length === 0) {
    return <p className={`text-xs opacity-40 ${textColor}`}>{placeholder}</p>;
  }
  return (
    <div className="space-y-0.5">
      {items.map((a) => (
        <p key={a} className={`text-xs ${textColor}`}>{a}</p>
      ))}
    </div>
  );
}

export default function FinancialStatementsGuide({ accounts }: { accounts: string[] }) {
  const [open, setOpen] = useState(false);

  const cat: Record<FSCategory, string[]> = {
    資産: [], 負債: [], 純資産: [], 収益: [], 費用: [], その他: [],
  };
  for (const acc of accounts) cat[classify(acc)].push(acc);

  return (
    <div className="mb-4 rounded-xl border border-slate-700 overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 bg-slate-800 hover:bg-slate-700 text-sm font-semibold text-slate-300 transition-colors"
      >
        <span>📊 財務諸表ガイド（参照）</span>
        <span className="text-slate-500 text-xs">{open ? "▲ 閉じる" : "▼ 開く"}</span>
      </button>
      {open && (
        <div className="bg-slate-900 p-4 space-y-4">
          {/* 貸借対照表 */}
          <div>
            <p className="text-xs font-bold text-slate-400 mb-2">貸借対照表（B/S）</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-3">
                <p className="text-xs font-bold text-blue-300 mb-2">借方（資産）</p>
                <AccountList items={cat["資産"]} placeholder="（流動資産）&#10;（固定資産）" textColor="text-blue-200" />
              </div>
              <div className="space-y-2">
                <div className="bg-red-900/30 border border-red-700 rounded-lg p-3">
                  <p className="text-xs font-bold text-red-300 mb-2">貸方（負債）</p>
                  <AccountList items={cat["負債"]} placeholder="（流動負債）&#10;（固定負債）" textColor="text-red-200" />
                </div>
                <div className="bg-emerald-900/30 border border-emerald-700 rounded-lg p-3">
                  <p className="text-xs font-bold text-emerald-300 mb-2">貸方（純資産）</p>
                  <AccountList items={cat["純資産"]} placeholder="（純資産合計）" textColor="text-emerald-200" />
                </div>
              </div>
            </div>
          </div>

          {/* 損益計算書 */}
          <div>
            <p className="text-xs font-bold text-slate-400 mb-2">損益計算書（P/L）</p>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-700/50 border border-slate-600 rounded-lg p-3">
                <p className="text-xs font-bold text-slate-300 mb-2">借方（費用）</p>
                <AccountList items={cat["費用"]} placeholder="（売上原価）&#10;（販管費）" textColor="text-slate-200" />
              </div>
              <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-3">
                <p className="text-xs font-bold text-yellow-300 mb-2">貸方（収益）</p>
                <AccountList items={cat["収益"]} placeholder="（売上）&#10;（営業外収益）" textColor="text-yellow-200" />
              </div>
            </div>
          </div>

          {cat["その他"].length > 0 && (
            <div className="bg-slate-800 rounded-lg p-3">
              <p className="text-xs font-bold text-slate-400 mb-1">分類不明</p>
              <div className="flex flex-wrap gap-1">
                {cat["その他"].map((a) => (
                  <span key={a} className="text-xs text-slate-300 bg-slate-700 px-1.5 py-0.5 rounded">{a}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
```

- [ ] **Step 2: コミット**

```bash
git add components/FinancialStatementsGuide.tsx
git commit -m "feat: add FinancialStatementsGuide accordion component"
```

---

### Task 4: CalculatorClient に FinancialStatementsGuide を組み込む

**Files:**
- Modify: `components/CalculatorClient.tsx`

- [ ] **Step 1: import を追加する**

`components/CalculatorClient.tsx` の先頭 import 群の末尾に追加する：

```tsx
import FinancialStatementsGuide from "@/components/FinancialStatementsGuide";
```

- [ ] **Step 2: 左ペインの取引一覧の上に挿入する**

`components/CalculatorClient.tsx` の左ペイン（`{/* Left Pane */}` の中）、`<div className="bg-slate-800 rounded-xl border border-slate-700 p-6">` の直前に挿入する。

変更前（CalculatorClient.tsx L70〜71 付近）：
```tsx
        <div className="flex flex-col gap-6">
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
```

変更後：
```tsx
        <div className="flex flex-col gap-6">
          <FinancialStatementsGuide accounts={Object.keys(problem.expectedAnswers)} />
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
```

- [ ] **Step 3: ブラウザで動作確認する**

1. `/calculator` を開いて任意の問題（例: `trial-balance-01`）に進む
2. 「📊 財務諸表ガイド（参照）▼ 開く」ボタンが取引一覧の上に表示されていることを確認
3. クリックして開き、B/S と P/L のセクションが表示されることを確認
4. その問題の勘定科目（現金・仕入・買掛金など）が正しいカテゴリに分類されていることを確認
5. 閉じるボタンで閉じることを確認

- [ ] **Step 4: コミット**

```bash
git add components/CalculatorClient.tsx
git commit -m "feat: show FinancialStatementsGuide accordion in calculator problems"
```
