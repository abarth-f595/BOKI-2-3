import Link from "next/link";

export default function JournalQuizHome() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-2xl font-bold text-slate-100 mb-2">仕訳問題演習</h1>
        <p className="text-slate-400 text-sm">
          級を選んで、仕訳の選択問題を練習しよう
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5">
        <Link
          href="/journal-quiz/grade3"
          className="group bg-slate-800 rounded-2xl border border-slate-700 p-7 flex items-center gap-5 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-900/30 transition-all"
        >
          <span className="text-4xl">📗</span>
          <div className="flex-1">
            <p className="text-lg font-bold text-slate-100 group-hover:text-blue-400">
              3級 仕訳問題
            </p>
            <p className="text-sm text-slate-400 mt-1">
              現金・手形・固定資産・決算整理など
            </p>
          </div>
          <span className="text-xs text-slate-500 whitespace-nowrap">500問+</span>
        </Link>

        <Link
          href="/journal-quiz/grade2-commercial"
          className="group bg-slate-800 rounded-2xl border border-slate-700 p-7 flex items-center gap-5 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-900/30 transition-all"
        >
          <span className="text-4xl">📘</span>
          <div className="flex-1">
            <p className="text-lg font-bold text-slate-100 group-hover:text-indigo-400">
              2級 商業簿記 仕訳問題
            </p>
            <p className="text-sm text-slate-400 mt-1">
              有価証券・引当金・税金・本支店・連結など
            </p>
          </div>
          <span className="text-xs text-slate-500 whitespace-nowrap">500問+</span>
        </Link>

        <Link
          href="/journal-quiz/grade2-industrial"
          className="group bg-slate-800 rounded-2xl border border-slate-700 p-7 flex items-center gap-5 hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-900/30 transition-all"
        >
          <span className="text-4xl">🏭</span>
          <div className="flex-1">
            <p className="text-lg font-bold text-slate-100 group-hover:text-emerald-400">
              2級 工業簿記 仕訳問題
            </p>
            <p className="text-sm text-slate-400 mt-1">
              材料費・労務費・製造間接費・原価計算など
            </p>
          </div>
          <span className="text-xs text-slate-500 whitespace-nowrap">500問+</span>
        </Link>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
        >
          ← ホームへ戻る
        </Link>
      </div>
    </div>
  );
}
