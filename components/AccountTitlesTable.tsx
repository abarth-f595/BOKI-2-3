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
