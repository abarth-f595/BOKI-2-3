"use client";
import { useState } from "react";
import { CalculatorProblem } from "@/data/calculator";
import Link from "next/link";
import FinancialStatementsGuide from "@/components/FinancialStatementsGuide";

export default function CalculatorClient({ problem }: { problem: CalculatorProblem }) {
  const [currentStepIndex, setCurrentStepIndex] = useState(-1);
  const [answers, setAnswers] = useState<Record<string, { debit: string; credit: string }>>({});
  const [isChecking, setIsChecking] = useState(false);

  // Accounts are derived from expectedAnswers
  const accounts = Object.keys(problem.expectedAnswers);

  const handleInputChange = (account: string, field: "debit" | "credit", value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [account]: {
        ...prev[account],
        [field]: value,
      },
    }));
    setIsChecking(false);
  };

  const calculateTotal = (field: "debit" | "credit") => {
    return accounts.reduce((sum, acc) => {
      const val = parseInt(answers[acc]?.[field] || "0", 10);
      return sum + (isNaN(val) ? 0 : val);
    }, 0);
  };

  const isCorrect = (account: string, field: "debit" | "credit") => {
    if (!isChecking) return null;
    const expected = problem.expectedAnswers[account]?.[field];
    const userVal = parseInt(answers[account]?.[field] || "0", 10);
    
    if (expected === undefined && userVal === 0) return true; // Empty string/0 is correct if expected is nothing
    if (expected === undefined && userVal !== 0) return false;
    return userVal === expected;
  };

  const checkAnswers = () => {
    setIsChecking(true);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-2 text-sm text-slate-400">
        <Link href="/" className="hover:text-blue-600">ホーム</Link>
        <span>/</span>
        <Link href="/calculator" className="hover:text-blue-600">実践！電卓問題</Link>
        <span>/</span>
        <span>{problem.title}</span>
      </div>

      <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-100">{problem.title}</h1>
            <p className="text-slate-400 mt-2">{problem.description}</p>
          </div>
          <span className="bg-emerald-900/40 text-emerald-400 text-sm font-bold px-3 py-1 rounded-md">
            {problem.level}
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Pane: Transactions and Explanation */}
        <div className="flex flex-col gap-6">
          <FinancialStatementsGuide accounts={Object.keys(problem.expectedAnswers)} />
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
            <h2 className="text-lg font-bold text-slate-100 mb-4 border-b border-slate-700 pb-2">
              取引一覧
            </h2>
            <div className="space-y-4">
              {problem.transactions.map((t, idx) => (
                <div key={t.id} className="flex gap-4 text-sm">
                  <div className="font-bold text-slate-400 w-12 flex-shrink-0">{t.date}</div>
                  <div className="text-slate-300">
                    {t.text}
                    {currentStepIndex >= 0 && (
                      <div className="mt-2 bg-slate-900 rounded p-3 text-xs border border-slate-700">
                        {t.answer.map((ans, i) => (
                          <div key={i} className="flex justify-between max-w-xs">
                            <span className="text-blue-400">({ans.debit}) {ans.debitAmount.toLocaleString()}</span>
                            <span className="text-slate-500 mx-2">|</span>
                            <span className="text-emerald-400">({ans.credit}) {ans.creditAmount.toLocaleString()}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-blue-950/30 rounded-xl border border-blue-900/50 p-6">
            <h2 className="text-lg font-bold text-blue-400 mb-4 flex items-center gap-2">
              <span>💡</span> ステップ解説
            </h2>
            
            {currentStepIndex === -1 ? (
              <div className="text-center py-6">
                <p className="text-slate-400 text-sm mb-4">
                  どのように解けばいいか分からない場合は、解説を見ながら進めることができます。
                </p>
                <button
                  onClick={() => setCurrentStepIndex(0)}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-2 rounded-lg text-sm font-bold transition-colors"
                >
                  解説をスタートする
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-blue-500 bg-blue-900/30 px-2 py-1 rounded">
                    STEP {currentStepIndex + 1} / {problem.explanationSteps.length}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-100">
                  {problem.explanationSteps[currentStepIndex].title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {problem.explanationSteps[currentStepIndex].description}
                </p>
                
                <div className="flex gap-2 mt-6 pt-4 border-t border-blue-900/50">
                  <button
                    onClick={() => setCurrentStepIndex(c => Math.max(0, c - 1))}
                    disabled={currentStepIndex === 0}
                    className="flex-1 bg-slate-800 hover:bg-slate-700 disabled:opacity-50 text-slate-300 py-2 rounded-lg text-sm transition-colors"
                  >
                    ◀ 前のステップ
                  </button>
                  <button
                    onClick={() => setCurrentStepIndex(c => Math.min(problem.explanationSteps.length - 1, c + 1))}
                    disabled={currentStepIndex === problem.explanationSteps.length - 1}
                    className="flex-1 bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white py-2 rounded-lg text-sm transition-colors font-bold"
                  >
                    次のステップ ▶
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Pane: Trial Balance Input */}
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 flex flex-col">
          <h2 className="text-lg font-bold text-slate-100 mb-4 border-b border-slate-700 pb-2 flex justify-between">
            解答用紙 ({problem.type})
            <button 
              onClick={checkAnswers}
              className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm px-4 py-1 rounded-md transition-colors"
            >
              採点する
            </button>
          </h2>

          <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm border border-slate-700 flex-1">
            <div className="grid grid-cols-3 gap-2 mb-2 pb-2 border-b border-slate-700 font-bold text-slate-400 text-center">
              <div>借方</div>
              <div>勘定科目</div>
              <div>貸方</div>
            </div>
            
            <div className="space-y-2">
              {accounts.map(acc => (
                <div key={acc} className="grid grid-cols-3 gap-2 items-center">
                  <input
                    type="number"
                    value={answers[acc]?.debit || ""}
                    onChange={(e) => handleInputChange(acc, "debit", e.target.value)}
                    className={`w-full bg-slate-800 border p-2 rounded text-right text-slate-200 focus:outline-none focus:border-blue-500 ${
                      isCorrect(acc, "debit") === false ? 'border-red-500 bg-red-900/20' : 
                      isCorrect(acc, "debit") === true ? 'border-emerald-500 bg-emerald-900/20' : 'border-slate-700'
                    }`}
                  />
                  <div className="text-center font-bold text-slate-300">{acc}</div>
                  <input
                    type="number"
                    value={answers[acc]?.credit || ""}
                    onChange={(e) => handleInputChange(acc, "credit", e.target.value)}
                    className={`w-full bg-slate-800 border p-2 rounded text-right text-slate-200 focus:outline-none focus:border-blue-500 ${
                      isCorrect(acc, "credit") === false ? 'border-red-500 bg-red-900/20' : 
                      isCorrect(acc, "credit") === true ? 'border-emerald-500 bg-emerald-900/20' : 'border-slate-700'
                    }`}
                  />
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-2 mt-4 pt-4 border-t-2 border-slate-700 items-center">
              <div className="text-right text-slate-300 font-bold p-2 bg-slate-800 rounded">
                {calculateTotal("debit").toLocaleString()}
              </div>
              <div className="text-center font-bold text-slate-400">合計</div>
              <div className="text-right text-slate-300 font-bold p-2 bg-slate-800 rounded">
                {calculateTotal("credit").toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
