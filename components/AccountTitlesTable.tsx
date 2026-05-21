"use client";
import { useState } from "react";

const ACCOUNTS_G3: Record<string, string[]> = {
  資産: [
    "現金", "小口現金",
    "当座預金", "当座預金○○銀行",
    "普通預金", "普通預金○○銀行",
    "定期預金", "定期預金○○銀行",
    "受取手形", "売掛金", "クレジット売掛金", "電子記録債権",
    "貸倒引当金",
    "繰越商品",
    "貸付金", "手形貸付金", "従業員貸付金", "役員貸付金",
    "立替金", "従業員立替金",
    "前払金", "未収入金", "仮払金",
    "受取商品券", "差入保証金", "貯蔵品",
    "仮払消費税", "仮払法人税等",
    "前払費用（前払保険料など）", "未収収益（未収家賃など）",
    "建物", "建物減価償却累計額",
    "備品", "備品減価償却累計額",
    "車両運搬具", "車両運搬具減価償却累計額",
    "土地",
  ],
  負債: [
    "支払手形", "買掛金", "電子記録債務",
    "前受金", "借入金", "役員借入金", "手形借入金", "当座借越",
    "未払金", "仮受金",
    "未払費用（未払利息など）", "前受収益（前受地代など）",
    "預り金", "従業員預り金", "所得税預り金", "社会保険料預り金",
    "仮受消費税", "未払消費税", "未払法人税等", "未払配当金",
  ],
  純資産: [
    "資本金", "利益準備金", "繰越利益剰余金",
  ],
  費用: [
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
  収益: [
    "売上",
    "受取家賃", "受取地代", "受取手数料", "受取利息",
    "雑益", "貸倒引当金戻入", "償却債権取立益", "固定資産売却益",
  ],
  "その他": [
    "現金過不足", "損益",
  ],
};

const ACCOUNTS_G2_EXTRA: Record<string, string[]> = {
  資産: [
    "契約資産", "短期貸付金",
    "未収還付法人税等", "未収還付消費税",
    "商品", "仕掛品",
    "繰延税金資産",
    "リース資産",
    "工具器具", "機械装置", "構築物", "建設仮勘定",
    "のれん", "特許権", "商標権", "借地権",
    "ソフトウェア", "ソフトウェア仮勘定",
    "売買目的有価証券", "満期保有目的債券",
    "子会社株式", "その他有価証券",
    "長期前払費用", "長期貸付金",
    "不渡手形", "別段預金",
    "前払年金費用", "退職給付に係る資産",
    "営業外受取手形", "営業外電子記録債権",
  ],
  負債: [
    "返金負債", "契約負債",
    "営業外支払手形", "営業外電子記録債務",
    "短期借入金", "長期借入金", "長期未払金",
    "未払固定資産税",
    "未払（役員）賞与",
    "修繕引当金", "商品（製品）保証引当金", "（役員）賞与引当金",
    "繰延税金負債",
    "役員預り金", "預り保証金",
    "リース債務",
    "退職給付引当金", "退職給付に係る負債",
  ],
  純資産: [
    "株式申込証拠金",
    "資本準備金", "その他資本剰余金",
    "配当平均積立金", "修繕積立金", "新築積立金", "別途積立金",
    "その他有価証券評価差額金",
    "資本剰余金", "利益剰余金",
    "非支配株主持分",
  ],
  費用: [
    "役務原価", "営業費用",
    "棚卸減耗損", "商品評価損",
    "（役員）賞与", "退職給付費用",
    "修繕引当金繰入", "（役員）賞与引当金繰入", "商品（製品）保証引当金繰入",
    "研究開発費",
    "のれん償却", "ソフトウェア償却", "特許権償却",
    "支払リース料",
    "創立費", "株式交付費", "開業費", "開発費",
    "手形売却損", "電子記録債権売却損", "債権売却損",
    "有価証券売却損", "有価証券評価損",
    "投資有価証券売却損",
    "火災損失", "固定資産除却損", "固定資産圧縮損",
    "追徴法人税等", "還付法人税等",
    "仕入割戻", "福利厚生費", "保守費",
    "為替差損", "法人税等調整額",
    "非支配株主に帰属する当期純損失",
  ],
  収益: [
    "役務収益", "営業収益",
    "受取配当金", "有価証券利息",
    "有価証券売却益", "有価証券評価益",
    "投資有価証券売却益",
    "保険差益", "負ののれん発生益",
    "修繕引当金戻入", "商品（製品）保証引当金戻入",
    "固定資産受贈益", "国庫補助金受贈益", "工事負担金受贈益",
    "売上割戻", "為替差益", "法人税等調整額",
    "非支配株主に帰属する当期純利益",
  ],
  "その他（2級）": [
    "未決算", "保証債務見返", "保証債務", "支店", "本店",
  ],
};

const CONTRA_ACCOUNTS = new Set([
  "貸倒引当金",
  "建物減価償却累計額",
  "備品減価償却累計額",
  "車両運搬具減価償却累計額",
]);

const COLORS: Record<string, { bg: string; text: string; border: string }> = {
  資産:         { bg: "bg-blue-900/30",    text: "text-blue-300",    border: "border-blue-700" },
  負債:         { bg: "bg-red-900/30",     text: "text-red-300",     border: "border-red-700" },
  純資産:       { bg: "bg-emerald-900/30", text: "text-emerald-300", border: "border-emerald-700" },
  収益:         { bg: "bg-yellow-900/30",  text: "text-yellow-300",  border: "border-yellow-700" },
  費用:         { bg: "bg-slate-700/50",   text: "text-slate-300",   border: "border-slate-600" },
  "その他":     { bg: "bg-purple-900/30",  text: "text-purple-300",  border: "border-purple-700" },
  "その他（2級）": { bg: "bg-indigo-900/30", text: "text-indigo-300", border: "border-indigo-700" },
};

function buildG2Accounts(): Record<string, string[]> {
  const result: Record<string, string[]> = {};
  for (const cat of Object.keys(ACCOUNTS_G3)) {
    result[cat] = [...ACCOUNTS_G3[cat], ...(ACCOUNTS_G2_EXTRA[cat] ?? [])];
  }
  for (const cat of Object.keys(ACCOUNTS_G2_EXTRA)) {
    if (!(cat in ACCOUNTS_G3)) result[cat] = ACCOUNTS_G2_EXTRA[cat];
  }
  return result;
}

const ACCOUNTS_G2 = buildG2Accounts();

export default function AccountTitlesTable({ grade }: { grade?: string }) {
  const [open, setOpen] = useState(false);
  const accounts = grade === "2" ? ACCOUNTS_G2 : ACCOUNTS_G3;
  const label = grade === "2" ? "2級" : "3級";

  return (
    <div className="mb-4 rounded-xl border border-slate-700 overflow-hidden">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between px-4 py-3 bg-slate-800 hover:bg-slate-700 text-sm font-semibold text-slate-300 transition-colors"
      >
        <span>📋 勘定科目表（{label}・参照）</span>
        <span className="text-slate-500 text-xs">{open ? "▲ 閉じる" : "▼ 開く"}</span>
      </button>
      {open && (
        <div className="bg-slate-900 p-4 space-y-3">
          <p className="text-xs text-slate-500">
            ※ <span className="text-orange-400 font-semibold">オレンジ色</span>は資産の控除科目（B/Sでは資産から差し引いて表示）
            {grade === "2" && <span className="ml-2 text-indigo-400">／ 薄紫：2級追加科目</span>}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {Object.entries(accounts).map(([cat, accs]) => {
              const c = COLORS[cat] ?? COLORS["その他"];
              const g2Extra = ACCOUNTS_G2_EXTRA[cat] ?? [];
              const g2ExtraSet = new Set(g2Extra);
              return (
                <div key={cat} className={`rounded-lg border ${c.border} ${c.bg} p-3`}>
                  <p className={`text-xs font-bold mb-2 ${c.text}`}>{cat}</p>
                  <div className="flex flex-wrap gap-1">
                    {accs.map((acc) => (
                      <span
                        key={acc}
                        className={`text-xs px-1.5 py-0.5 rounded bg-slate-800/80 ${
                          CONTRA_ACCOUNTS.has(acc)
                            ? "text-orange-400 ring-1 ring-orange-600/50"
                            : grade === "2" && g2ExtraSet.has(acc)
                            ? "text-indigo-300"
                            : c.text
                        }`}
                      >
                        {acc}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
