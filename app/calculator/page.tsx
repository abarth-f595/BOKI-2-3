import { calculatorProblems } from "@/data/calculator";
import Link from "next/link";

export default function CalculatorIndexPage() {
  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
          <Link href="/" className="hover:text-blue-600">ホーム</Link>
          <span>/</span>
          <span>実践！電卓問題</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-100">実践！電卓問題（総合問題）</h1>
        <p className="text-slate-400 mt-2">
          実際の試験のように、電卓を叩いて表を埋めていく実践的なトレーニングです。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {calculatorProblems.map((prob) => (
          <Link
            key={prob.id}
            href={`/calculator/${prob.id}`}
            className="bg-slate-800 rounded-xl border border-slate-700 p-6 hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col"
          >
            <div className="flex items-start justify-between mb-2">
              <span className="bg-emerald-900/40 text-emerald-400 text-xs font-bold px-2 py-1 rounded-md">
                {prob.level}
              </span>
              <span className="text-xs text-slate-500 font-semibold">{prob.type}</span>
            </div>
            <h2 className="text-lg font-bold text-slate-100 mb-2">{prob.title}</h2>
            <p className="text-sm text-slate-400 mb-4 flex-1">{prob.description}</p>
            <div className="text-right text-emerald-400 text-sm font-bold flex items-center justify-end gap-1">
              挑戦する <span>→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
