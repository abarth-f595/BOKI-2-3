"use client";
import { useState } from "react";

type FSCategory = "資産" | "負債" | "純資産" | "収益" | "費用" | "その他";

const ASSET_KW     = ["現金", "預金", "受取手形", "売掛金", "商品", "前払", "未収", "建物", "備品", "土地", "貸付", "有価証券", "のれん", "ソフトウェア", "投資", "繰延税金資産", "仮払"];
const LIABILITY_KW = ["支払手形", "買掛金", "借入金", "前受", "未払", "社債", "引当金", "繰延税金負債", "仮受"];
const EQUITY_KW    = ["資本金", "準備金", "剰余金", "評価差額"];
const REVENUE_KW   = ["売上", "受取手数料", "受取利息", "受取家賃", "受取配当", "売却益"];
const EXPENSE_KW   = ["仕入", "給料", "旅費", "通信費", "水道", "支払家賃", "保険料", "広告", "消耗", "支払利息", "売却損", "貸倒", "減価償却", "退職給付", "のれん償却", "法人税"];

function classify(name: string): FSCategory {
  if (ASSET_KW.some((k) => name.includes(k)))     return "資産";
  if (LIABILITY_KW.some((k) => name.includes(k))) return "負債";
  if (EQUITY_KW.some((k) => name.includes(k)))    return "純資産";
  if (REVENUE_KW.some((k) => name.includes(k)))   return "収益";
  if (EXPENSE_KW.some((k) => name.includes(k)))   return "費用";
  return "その他";
}

function AccountList({
  items,
  placeholder,
  textColor,
}: {
  items: string[];
  placeholder: string;
  textColor: string;
}) {
  if (items.length === 0) {
    return <p className={`text-xs opacity-40 ${textColor}`}>{placeholder}</p>;
  }
  return (
    <div className="space-y-0.5">
      {items.map((a) => (
        <p key={a} className={`text-xs ${textColor}`}>
          {a}
        </p>
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
                <AccountList
                  items={cat["資産"]}
                  placeholder="（流動資産）/（固定資産）"
                  textColor="text-blue-200"
                />
              </div>
              <div className="space-y-2">
                <div className="bg-red-900/30 border border-red-700 rounded-lg p-3">
                  <p className="text-xs font-bold text-red-300 mb-2">貸方（負債）</p>
                  <AccountList
                    items={cat["負債"]}
                    placeholder="（流動負債）/（固定負債）"
                    textColor="text-red-200"
                  />
                </div>
                <div className="bg-emerald-900/30 border border-emerald-700 rounded-lg p-3">
                  <p className="text-xs font-bold text-emerald-300 mb-2">貸方（純資産）</p>
                  <AccountList
                    items={cat["純資産"]}
                    placeholder="（純資産合計）"
                    textColor="text-emerald-200"
                  />
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
                <AccountList
                  items={cat["費用"]}
                  placeholder="（売上原価）/（販管費）"
                  textColor="text-slate-200"
                />
              </div>
              <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-3">
                <p className="text-xs font-bold text-yellow-300 mb-2">貸方（収益）</p>
                <AccountList
                  items={cat["収益"]}
                  placeholder="（売上）/（営業外収益）"
                  textColor="text-yellow-200"
                />
              </div>
            </div>
          </div>

          {cat["その他"].length > 0 && (
            <div className="bg-slate-800 rounded-lg p-3">
              <p className="text-xs font-bold text-slate-400 mb-1">分類不明</p>
              <div className="flex flex-wrap gap-1">
                {cat["その他"].map((a) => (
                  <span key={a} className="text-xs text-slate-300 bg-slate-700 px-1.5 py-0.5 rounded">
                    {a}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
