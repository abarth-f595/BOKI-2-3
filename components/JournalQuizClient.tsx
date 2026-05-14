"use client";
import { useState, useMemo, useCallback, useEffect } from "react";
import Link from "next/link";
import { JournalProblem } from "@/types";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface ShuffledProblem {
  original: JournalProblem;
  displayOptions: { text: string; isCorrect: boolean }[];
}

function buildShuffled(p: JournalProblem): ShuffledProblem {
  const opts = p.options.map((text, i) => ({ text, isCorrect: i === p.correct }));
  return { original: p, displayOptions: shuffle(opts) };
}

const CATEGORY_COLORS: Record<string, string> = {
  商品売買: "bg-blue-900/50 text-blue-300 border-blue-700",
  現金預金: "bg-teal-900/50 text-teal-300 border-teal-700",
  手形: "bg-violet-900/50 text-violet-300 border-violet-700",
  固定資産: "bg-amber-900/50 text-amber-300 border-amber-700",
  費用収益: "bg-orange-900/50 text-orange-300 border-orange-700",
  貸倒れ: "bg-red-900/50 text-red-300 border-red-700",
  決算整理: "bg-emerald-900/50 text-emerald-300 border-emerald-700",
  資本: "bg-pink-900/50 text-pink-300 border-pink-700",
  有価証券: "bg-cyan-900/50 text-cyan-300 border-cyan-700",
  引当金: "bg-lime-900/50 text-lime-300 border-lime-700",
  税金: "bg-yellow-900/50 text-yellow-300 border-yellow-700",
  株式社債: "bg-indigo-900/50 text-indigo-300 border-indigo-700",
  本支店: "bg-purple-900/50 text-purple-300 border-purple-700",
  材料費: "bg-green-900/50 text-green-300 border-green-700",
  労務費: "bg-sky-900/50 text-sky-300 border-sky-700",
  製造間接費: "bg-rose-900/50 text-rose-300 border-rose-700",
  原価計算: "bg-fuchsia-900/50 text-fuchsia-300 border-fuchsia-700",
};

function categoryColor(cat: string): string {
  return CATEGORY_COLORS[cat] ?? "bg-slate-700/50 text-slate-300 border-slate-600";
}

interface SavedProgress {
  ids: string[];
  current: number;
  score: number;
}

export default function JournalQuizClient({
  problems,
  gradeLabel,
}: {
  problems: JournalProblem[];
  gradeLabel: string;
}) {
  const storageKey = `jq-${gradeLabel}`;

  const [started, setStarted] = useState(false);
  const [shuffled, setShuffled] = useState<ShuffledProblem[]>([]);
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [savedProgress, setSavedProgress] = useState<SavedProgress | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      if (!raw) return;
      const p: SavedProgress = JSON.parse(raw);
      if (p.current > 0 && p.current < p.ids.length) {
        setSavedProgress(p);
      } else {
        localStorage.removeItem(storageKey);
      }
    } catch {
      // ignore
    }
  }, [storageKey]);

  const problemMap = useMemo(
    () => new Map(problems.map((p) => [p.id, p])),
    [problems]
  );

  const categories = useMemo(
    () => [...new Set(problems.map((p) => p.category))].sort(),
    [problems]
  );

  const start = useCallback(
    (resume: boolean) => {
      let newShuffled: ShuffledProblem[];
      let startIdx = 0;
      let startScore = 0;

      if (resume && savedProgress) {
        const ordered = savedProgress.ids
          .map((id) => problemMap.get(id))
          .filter((p): p is JournalProblem => !!p);
        newShuffled = ordered.map(buildShuffled);
        startIdx = savedProgress.current;
        startScore = savedProgress.score;
      } else {
        newShuffled = shuffle(problems).map(buildShuffled);
        try {
          const ids = newShuffled.map((s) => s.original.id);
          localStorage.setItem(storageKey, JSON.stringify({ ids, current: 0, score: 0 }));
        } catch {}
      }

      setShuffled(newShuffled);
      setCurrent(startIdx);
      setSelected(null);
      setSubmitted(false);
      setScore(startScore);
      setFinished(false);
      setShowExplanation(false);
      setStarted(true);
    },
    [problems, savedProgress, problemMap, storageKey]
  );

  function handleSelect(i: number) {
    if (!submitted) setSelected(i);
  }

  function handleSubmit() {
    if (selected === null) return;
    const isCorrect = shuffled[current].displayOptions[selected].isCorrect;
    if (isCorrect) setScore((s) => s + 1);
    setSubmitted(true);
    setShowExplanation(false);
  }

  function handleNext() {
    const nextIdx = current + 1;
    if (nextIdx < shuffled.length) {
      try {
        const ids = shuffled.map((s) => s.original.id);
        localStorage.setItem(storageKey, JSON.stringify({ ids, current: nextIdx, score }));
      } catch {}
      setCurrent(nextIdx);
      setSelected(null);
      setSubmitted(false);
      setShowExplanation(false);
    } else {
      try { localStorage.removeItem(storageKey); } catch {}
      setSavedProgress(null);
      setFinished(true);
    }
  }

  // ── スタート画面 ──────────────────────────────────────────────────────────
  if (!started) {
    return (
      <div>
        <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl">✏️</span>
            <div>
              <p className="font-bold text-slate-100 text-xl">{gradeLabel} 仕訳問題</p>
              <p className="text-slate-400 text-sm">全 {problems.length} 問（ランダム出題）</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-5">
            {categories.map((c) => (
              <span
                key={c}
                className={`text-xs font-bold px-2 py-0.5 rounded-full border ${categoryColor(c)}`}
              >
                {c}
              </span>
            ))}
          </div>
          <ul className="text-sm text-slate-400 space-y-1 mb-6 list-disc list-inside">
            <li>仕訳の借方・貸方を4択で選ぶ形式です</li>
            <li>問題・選択肢はランダムにシャッフルされます</li>
            <li>回答前でも解説を確認できます</li>
          </ul>

          {savedProgress && (
            <button
              onClick={() => start(true)}
              className="w-full bg-emerald-700 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl transition-colors mb-3"
            >
              続きから（{savedProgress.current}問目 / 正解 {savedProgress.score}問）
            </button>
          )}
          <button
            onClick={() => start(false)}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl transition-colors"
          >
            {savedProgress ? "最初から" : "演習スタート →"}
          </button>
        </div>
        <Link
          href="/journal-quiz"
          className="block text-center text-sm text-slate-500 hover:text-slate-300 transition-colors"
        >
          ← 級を選び直す
        </Link>
      </div>
    );
  }

  // ── 結果画面 ──────────────────────────────────────────────────────────────
  if (finished) {
    const total = shuffled.length;
    const pct = Math.round((score / total) * 100);
    return (
      <div className="text-center py-10">
        <p className="text-5xl mb-4">{pct >= 80 ? "🎉" : pct >= 60 ? "📝" : "💪"}</p>
        <p className="text-3xl font-bold text-slate-100 mb-2">
          {score} / {total} 正解
        </p>
        <p className="text-2xl font-semibold text-blue-400 mb-2">{pct}点</p>
        <p className="text-slate-400 mb-8 text-sm">
          {pct >= 80
            ? "すばらしい！仕訳の実力はバッチリです"
            : pct >= 60
            ? "もう少し！苦手な仕訳パターンを復習しよう"
            : "解説を読みながら、基本パターンを確認しよう"}
        </p>
        <div className="flex flex-col gap-3 items-center">
          <button
            onClick={() => start(false)}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-colors w-64"
          >
            もう一度（シャッフル）
          </button>
          <Link
            href="/journal-quiz"
            className="px-8 py-3 bg-slate-700 hover:bg-slate-600 text-slate-200 font-bold rounded-xl transition-colors w-64 text-center"
          >
            級を選び直す
          </Link>
          <Link
            href="/"
            className="text-sm text-slate-500 hover:text-slate-300 transition-colors mt-2"
          >
            ホームへ戻る
          </Link>
        </div>
      </div>
    );
  }

  // ── 問題画面 ──────────────────────────────────────────────────────────────
  const item = shuffled[current];
  const correctIdx = item.displayOptions.findIndex((o) => o.isCorrect);
  const isCorrect = submitted && selected === correctIdx;

  return (
    <div>
      {/* progress bar */}
      <div className="flex items-center gap-3 mb-4">
        <p className="text-sm text-slate-400 font-semibold whitespace-nowrap">
          {current + 1} / {shuffled.length}
        </p>
        <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 rounded-full transition-all"
            style={{ width: `${(current / shuffled.length) * 100}%` }}
          />
        </div>
        <p className="text-sm text-slate-500 whitespace-nowrap">正解 {score}問</p>
      </div>

      {/* category badge */}
      <div className="mb-3">
        <span
          className={`text-xs font-bold px-2 py-0.5 rounded-full border ${categoryColor(item.original.category)}`}
        >
          {item.original.category}
        </span>
      </div>

      {/* question */}
      <div className="bg-slate-700/50 rounded-xl p-5 mb-4">
        <p className="font-semibold text-slate-100 leading-relaxed text-base">
          {item.original.question}
        </p>
      </div>

      {/* options */}
      <div className="flex flex-col gap-3 mb-4">
        {item.displayOptions.map((opt, i) => {
          const letter = String.fromCharCode(65 + i);
          let cls =
            "rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all cursor-pointer ";
          if (!submitted) {
            cls +=
              selected === i
                ? "border-blue-500 bg-blue-900/40 text-blue-200"
                : "border-slate-600 bg-slate-700/50 text-slate-200 hover:border-blue-500/60";
          } else {
            if (opt.isCorrect) {
              cls += "border-green-500 bg-green-900/40 text-green-200";
            } else if (i === selected) {
              cls += "border-red-500 bg-red-900/40 text-red-200";
            } else {
              cls += "border-slate-700 bg-slate-800/60 text-slate-500";
            }
          }
          return (
            <button
              key={i}
              className={cls}
              onClick={() => handleSelect(i)}
              disabled={submitted}
            >
              <span className="font-bold mr-2">{letter}.</span>
              <span className="font-mono text-xs sm:text-sm">{opt.text}</span>
            </button>
          );
        })}
      </div>

      {/* explanation toggle (before submitting) */}
      {!submitted && (
        <button
          onClick={() => setShowExplanation((v) => !v)}
          className="text-xs text-slate-500 hover:text-slate-300 transition-colors mb-3 underline underline-offset-2"
        >
          {showExplanation ? "解説を隠す" : "解説を確認する"}
        </button>
      )}

      {/* explanation */}
      {(submitted || showExplanation) && (
        <div
          className={`rounded-xl p-5 mb-4 border ${
            submitted
              ? isCorrect
                ? "bg-green-900/30 border-green-700"
                : "bg-red-900/30 border-red-700"
              : "bg-slate-700/40 border-slate-600"
          }`}
        >
          {submitted && (
            <p className={`font-bold text-base mb-2 ${isCorrect ? "text-green-300" : "text-red-300"}`}>
              {isCorrect ? "✓ 正解！" : "✗ 不正解"}
            </p>
          )}
          <p className="text-sm text-slate-300 leading-relaxed">{item.original.explanation}</p>
        </div>
      )}

      {/* action button */}
      {!submitted ? (
        <button
          onClick={handleSubmit}
          disabled={selected === null}
          className="w-full bg-blue-600 text-white rounded-xl py-3 font-bold text-sm disabled:opacity-30 hover:bg-blue-500 transition-colors"
        >
          回答する
        </button>
      ) : (
        <button
          onClick={handleNext}
          className="w-full bg-slate-600 hover:bg-slate-500 text-white rounded-xl py-3 font-bold text-sm transition-colors"
        >
          {current + 1 < shuffled.length ? "次の問題 →" : "結果を見る"}
        </button>
      )}
    </div>
  );
}
