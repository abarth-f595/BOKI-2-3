"use client";
import { useState, useMemo } from "react";
import { PastExamQuestion, PastExamCategory } from "@/types";
import { simpleMarkdown } from "@/lib/markdown";

const CATEGORY_COLORS: Record<PastExamCategory, string> = {
  仕訳: "bg-blue-900/50 text-blue-300 border-blue-700",
  補助簿: "bg-teal-900/50 text-teal-300 border-teal-700",
  勘定記入: "bg-violet-900/50 text-violet-300 border-violet-700",
  試算表: "bg-amber-900/50 text-amber-300 border-amber-700",
  精算表: "bg-orange-900/50 text-orange-300 border-orange-700",
  財務諸表: "bg-rose-900/50 text-rose-300 border-rose-700",
  工業簿記: "bg-emerald-900/50 text-emerald-300 border-emerald-700",
  連結会計: "bg-cyan-900/50 text-cyan-300 border-cyan-700",
  その他: "bg-slate-700/50 text-slate-300 border-slate-600",
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function ExplanationView({ text }: { text: string }) {
  return (
    <div
      className="text-sm leading-relaxed text-slate-300"
      dangerouslySetInnerHTML={{ __html: simpleMarkdown(text) }}
    />
  );
}

interface ShuffledQuestion {
  q: PastExamQuestion;
  options: { id: string; label: string }[];
  correctId: string;
}

function buildShuffled(q: PastExamQuestion): ShuffledQuestion {
  if (!q.options) return { q, options: [], correctId: q.correctAnswer };
  const originalCorrectLabel = q.options.find((o) => o.id === q.correctAnswer)?.label ?? "";
  const shuffled = shuffle(q.options).map((opt, i) => ({
    ...opt,
    id: String.fromCharCode(97 + i),
  }));
  const correctId = shuffled.find((o) => o.label === originalCorrectLabel)?.id ?? q.correctAnswer;
  return { q, options: shuffled, correctId };
}

export default function PastExamClient({
  questions,
  grade,
}: {
  questions: PastExamQuestion[];
  grade: string;
}) {
  const years = useMemo(
    () => [...new Set(questions.map((q) => q.year))].sort(),
    [questions]
  );

  const [selectedYear, setSelectedYear] = useState<number | "all">("all");
  const [started, setStarted] = useState(false);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const filteredQuestions = useMemo(
    () =>
      selectedYear === "all"
        ? questions
        : questions.filter((q) => q.year === selectedYear),
    [questions, selectedYear]
  );

  const [shuffledList, setShuffledList] = useState<ShuffledQuestion[]>([]);

  function startExam() {
    setShuffledList(shuffle(filteredQuestions).map(buildShuffled));
    setCurrent(0);
    setSelected(null);
    setSubmitted(false);
    setScore(0);
    setFinished(false);
    setStarted(true);
  }

  function restart() {
    setStarted(false);
    setFinished(false);
  }

  if (!started) {
    return (
      <div>
        <div className="mb-6">
          <p className="text-sm font-semibold text-slate-400 mb-2">年度を選ぶ</p>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedYear("all")}
              className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${
                selectedYear === "all"
                  ? "bg-blue-600 border-blue-500 text-white"
                  : "bg-slate-800 border-slate-600 text-slate-300 hover:border-blue-500"
              }`}
            >
              全年度
            </button>
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-all ${
                  selectedYear === y
                    ? "bg-blue-600 border-blue-500 text-white"
                    : "bg-slate-800 border-slate-600 text-slate-300 hover:border-blue-500"
                }`}
              >
                {y}年度
              </button>
            ))}
          </div>
        </div>

        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">📝</span>
            <div>
              <p className="font-bold text-slate-100 text-lg">
                {selectedYear === "all" ? "全年度" : `${selectedYear}年度`} 過去問
              </p>
              <p className="text-slate-400 text-sm">
                全 {filteredQuestions.length} 問（ランダム順で出題）
              </p>
            </div>
          </div>
          <ul className="text-sm text-slate-400 space-y-1 mb-6 list-disc list-inside">
            <li>問題・選択肢はランダムにシャッフルされます</li>
            <li>正解・不正解どちらの場合も詳しい解説が表示されます</li>
            <li>重要な用語は<span className="keyword-highlight">オレンジ色</span>でハイライトされます</li>
          </ul>
          <button
            onClick={startExam}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-colors"
          >
            演習スタート →
          </button>
        </div>
      </div>
    );
  }

  if (finished) {
    const total = shuffledList.length;
    const pct = Math.round((score / total) * 100);
    return (
      <div className="text-center py-10">
        <p className="text-5xl mb-4">{pct >= 80 ? "🎉" : pct >= 60 ? "📝" : "💪"}</p>
        <p className="text-3xl font-bold text-slate-100 mb-2">
          {score} / {total} 正解
        </p>
        <p className="text-xl font-semibold text-blue-400 mb-6">{pct}点</p>
        <p className="text-slate-400 mb-8 text-sm">
          {pct >= 80
            ? "すばらしい！このまま本番も合格できます"
            : pct >= 60
            ? "もう少し！苦手分野を復習しよう"
            : "基礎から丁寧に確認しよう。解説を見直してね"}
        </p>
        <div className="flex gap-3 justify-center">
          <button
            onClick={startExam}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors"
          >
            もう一度（シャッフル）
          </button>
          <button
            onClick={restart}
            className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold rounded-xl transition-colors"
          >
            年度を選び直す
          </button>
        </div>
      </div>
    );
  }

  const item = shuffledList[current];
  const isCorrect = selected === item.correctId;

  function handleSubmit() {
    if (!selected) return;
    if (isCorrect) setScore((s) => s + 1);
    setSubmitted(true);
  }

  function handleNext() {
    if (current + 1 < shuffledList.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setSubmitted(false);
    } else {
      setFinished(true);
    }
  }

  return (
    <div>
      {/* progress */}
      <div className="flex items-center gap-3 mb-4">
        <p className="text-sm text-slate-400 font-semibold whitespace-nowrap">
          {current + 1} / {shuffledList.length}
        </p>
        <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all"
            style={{ width: `${(current / shuffledList.length) * 100}%` }}
          />
        </div>
        <p className="text-sm text-slate-500 whitespace-nowrap">
          正解 {score}問
        </p>
      </div>

      {/* meta */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className={`text-xs font-bold px-2 py-0.5 rounded-full border ${CATEGORY_COLORS[item.q.category]}`}
        >
          {item.q.category}
        </span>
        <span className="text-xs text-slate-500">
          {item.q.year}年度 第{item.q.session}回
        </span>
      </div>

      {/* question */}
      <div className="bg-slate-700/50 rounded-xl p-5 mb-4">
        <p className="font-semibold text-slate-100 leading-relaxed">
          {item.q.question}
        </p>
      </div>

      {/* options */}
      <div className="flex flex-col gap-3 mb-5">
        {item.options.map((opt) => {
          let cls =
            "rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all cursor-pointer ";
          if (!submitted) {
            cls +=
              selected === opt.id
                ? "border-blue-500 bg-blue-900/40 text-blue-200"
                : "border-slate-600 bg-slate-700/50 text-slate-200 hover:border-blue-500/60";
          } else {
            if (opt.id === item.correctId) {
              cls += "border-green-500 bg-green-900/40 text-green-200";
            } else if (opt.id === selected) {
              cls += "border-red-500 bg-red-900/40 text-red-200";
            } else {
              cls += "border-slate-700 bg-slate-800/60 text-slate-500";
            }
          }
          return (
            <button
              key={opt.id}
              className={cls}
              onClick={() => !submitted && setSelected(opt.id)}
              disabled={submitted}
            >
              <span className="font-bold mr-2 uppercase">{opt.id}.</span>
              {opt.label}
            </button>
          );
        })}
      </div>

      {/* explanation */}
      {submitted && (
        <div
          className={`rounded-xl p-5 mb-4 border ${
            isCorrect
              ? "bg-green-900/30 border-green-700"
              : "bg-red-900/30 border-red-700"
          }`}
        >
          <p className={`font-bold text-base mb-3 ${isCorrect ? "text-green-300" : "text-red-300"}`}>
            {isCorrect ? "✓ 正解！" : "✗ 不正解"}
          </p>
          <ExplanationView text={item.q.explanation} />
        </div>
      )}

      {/* buttons */}
      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={!selected}
          className="w-full bg-blue-600 text-white rounded-xl py-3 font-bold text-sm disabled:opacity-30 hover:bg-blue-500 transition-colors"
        >
          回答する
        </button>
      ) : (
        <button
          onClick={handleNext}
          className="w-full bg-slate-600 hover:bg-slate-500 text-white rounded-xl py-3 font-bold text-sm transition-colors"
        >
          {current + 1 < shuffledList.length ? "次の問題 →" : "結果を見る"}
        </button>
      )}
    </div>
  );
}
