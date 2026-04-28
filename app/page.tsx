import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-3xl font-bold text-slate-100 mb-2">簿記マスター</h1>
      <p className="text-slate-400 mb-10 text-base">
        スッキリわかる日商簿記に沿って、3級・2級を効率よく学ぼう
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl">
        <Link
          href="/grade/3"
          className="group bg-slate-800 rounded-2xl border border-slate-700 p-8 flex flex-col items-center hover:border-blue-500 hover:shadow-lg hover:shadow-blue-900/30 transition-all"
        >
          <span className="text-5xl mb-4">📗</span>
          <span className="text-xl font-bold text-slate-100 group-hover:text-blue-400">
            3級
          </span>
          <span className="text-sm text-slate-400 mt-2">
            簿記の基礎から決算まで
          </span>
          <span className="mt-4 text-xs text-slate-500">全10章 / 20レッスン</span>
        </Link>

        <Link
          href="/grade/2"
          className="group bg-slate-800 rounded-2xl border border-slate-700 p-8 flex flex-col items-center hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-900/30 transition-all"
        >
          <span className="text-5xl mb-4">📘</span>
          <span className="text-xl font-bold text-slate-100 group-hover:text-indigo-400">
            2級
          </span>
          <span className="text-sm text-slate-400 mt-2">
            商業簿記・工業簿記
          </span>
          <span className="mt-4 text-xs text-slate-500">全14章 / 24レッスン</span>
        </Link>
      </div>

      <p className="mt-10 text-xs text-slate-600">
        ※ TAC出版「スッキリわかる日商簿記」準拠
      </p>
    </div>
  );
}
