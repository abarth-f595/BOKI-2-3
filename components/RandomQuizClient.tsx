"use client";
import { useState, useMemo, useEffect } from "react";
import { Quiz } from "@/types";
import {
  getQuizDifficulty,
  DIFFICULTY_CONFIG,
  type Difficulty,
} from "@/lib/difficulty";
import CharacterReaction from "@/components/CharacterReaction";
import AccountElementsMap from "@/components/AccountElementsMap";

const DEFAULT_QUIZ_COUNT = 20;
const QUIZ_COUNT_OPTIONS = [10, 20, 30, 50] as const;
type QuizCountOption = (typeof QUIZ_COUNT_OPTIONS)[number];
const LS_QUIZ_COUNT = "rq-quiz-count";

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type QuizWithMeta = Quiz & { lessonTitle: string };

function DifficultySelector({
  quizzes,
  onSelect,
  quizCount,
  onCountChange,
}: {
  quizzes: QuizWithMeta[];
  onSelect: (d: Difficulty) => void;
  quizCount: QuizCountOption;
  onCountChange: (n: QuizCountOption) => void;
}) {
  const countByDifficulty = useMemo(() => {
    const counts: Record<Difficulty, number> = {
      easy: 0,
      normal: 0,
      hard: 0,
      oni: 0,
    };
    for (const q of quizzes) {
      counts[getQuizDifficulty(q)]++;
    }
    return counts;
  }, [quizzes]);

  const order: Difficulty[] = ["easy", "normal", "hard", "oni"];

  return (
    <div className="space-y-6">
      {/* 出題数選択 */}
      <div>
        <p className="text-slate-300 text-sm font-semibold mb-3">
          出題数を選んでください
        </p>
        <div className="grid grid-cols-4 gap-2">
          {QUIZ_COUNT_OPTIONS.map((n) => {
            const isSelected = quizCount === n;
            return (
              <button
                key={n}
                onClick={() => onCountChange(n)}
                aria-label={`出題数 ${n}問を選択`}
                aria-pressed={isSelected}
                className={`rounded-xl py-2.5 text-sm font-bold border-2 transition-all ${
                  isSelected
                    ? "bg-blue-600 border-blue-400 text-white shadow-lg shadow-blue-900/40 scale-[1.03]"
                    : "bg-slate-800 border-slate-600 text-slate-300 hover:border-slate-400 hover:text-slate-100"
                }`}
              >
                {isSelected && <span className="mr-1">✓</span>}
                {n}問
              </button>
            );
          })}
        </div>
      </div>

      {/* 難易度選択 */}
      <div>
        <p className="text-slate-300 text-sm font-semibold mb-3">
          難易度を選んでスタート
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {order.map((d) => {
            const cfg = DIFFICULTY_CONFIG[d];
            const count = countByDifficulty[d];
            const available = Math.min(count, quizCount);
            return (
              <button
                key={d}
                onClick={() => onSelect(d)}
                disabled={count === 0}
                aria-label={`難易度 ${cfg.label} ${available}問でスタート`}
                className={`${cfg.bg} border-2 ${cfg.border} rounded-2xl p-5 text-left transition-all hover:scale-[1.02] hover:brightness-110 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-3xl">{cfg.emoji}</span>
                  <span className={`text-lg font-bold ${cfg.text}`}>
                    {cfg.label}
                  </span>
                </div>
                <p className="text-slate-400 text-xs leading-relaxed mb-3">
                  {cfg.desc}
                </p>
                <p className="text-slate-500 text-xs">
                  {count} 問中 {available} 問出題
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function RandomQuizClient({
  quizzes,
  grade,
}: {
  quizzes: QuizWithMeta[];
  grade: string;
}) {
  const [quizCount, setQuizCount] = useState<QuizCountOption>(DEFAULT_QUIZ_COUNT);
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  // localStorage から出題数を復元
  useEffect(() => {
    const saved = localStorage.getItem(LS_QUIZ_COUNT);
    const parsed = Number(saved);
    if ((QUIZ_COUNT_OPTIONS as readonly number[]).includes(parsed)) {
      setQuizCount(parsed as QuizCountOption);
    }
  }, []);

  function handleCountChange(n: QuizCountOption) {
    setQuizCount(n);
    localStorage.setItem(LS_QUIZ_COUNT, String(n));
  }

  const pool = useMemo(() => {
    if (!difficulty) return [];
    const filtered = quizzes.filter(
      (q) => getQuizDifficulty(q) === difficulty
    );
    return shuffle(filtered).slice(0, quizCount);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [difficulty, quizCount]);

  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [scores, setScores] = useState<Record<number, boolean>>({});
  const [finished, setFinished] = useState(false);

  function handleSelectDifficulty(d: Difficulty) {
    setDifficulty(d);
    setCurrent(0);
    setSelected(null);
    setSubmitted(false);
    setScores({});
    setFinished(false);
  }

  const quiz = pool[current];

  const shuffledQuiz = useMemo(() => {
    if (!quiz?.options) return quiz;
    const shuffledOpts = [...quiz.options].sort(() => Math.random() - 0.5);
    const newOptions = shuffledOpts.map((opt, i) => ({
      ...opt,
      id: String.fromCharCode(97 + i),
    }));
    const origLabel = quiz.options.find((o) => o.id === quiz.correctAnswer)?.label;
    const newCorrectId =
      newOptions.find((o) => o.label === origLabel)?.id ?? quiz.correctAnswer;
    return { ...quiz, options: newOptions, correctAnswer: newCorrectId };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, difficulty]);

  const isCorrect = selected === shuffledQuiz?.correctAnswer;

  function handleSubmit() {
    if (!selected) return;
    setScores((prev) => ({ ...prev, [current]: isCorrect }));
    setSubmitted(true);
  }

  function handleNext() {
    if (current + 1 < pool.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setSubmitted(false);
    } else {
      setFinished(true);
    }
  }

  function handleRestart() {
    setDifficulty(null);
    setCurrent(0);
    setSelected(null);
    setSubmitted(false);
    setScores({});
    setFinished(false);
  }

  const correctCount = Object.values(scores).filter(Boolean).length;

  if (!difficulty) {
    return (
      <DifficultySelector
        quizzes={quizzes}
        onSelect={handleSelectDifficulty}
        quizCount={quizCount}
        onCountChange={handleCountChange}
      />
    );
  }

  const cfg = DIFFICULTY_CONFIG[difficulty];

  if (finished) {
    const total = pool.length;
    const pct = Math.round((correctCount / total) * 100);
    return (
      <div className="text-center py-16 space-y-4">
        <p className="text-5xl">{pct >= 80 ? "🎉" : pct >= 60 ? "📝" : "💪"}</p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl">{cfg.emoji}</span>
          <p className="text-2xl font-bold text-slate-100">
            {correctCount} / {total} 正解（{pct}%）
          </p>
        </div>
        <p className={`font-semibold ${cfg.text}`}>{cfg.label}</p>
        <p className="text-slate-400">
          {pct >= 80
            ? "素晴らしい！合格レベルの実力です"
            : pct >= 60
            ? "もう少し！苦手分野を復習しよう"
            : "基礎からしっかり復習しよう"}
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <button
            onClick={handleRestart}
            className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            難易度を選び直す
          </button>
          <button
            onClick={() => handleSelectDifficulty(difficulty)}
            className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-xl font-bold transition-colors"
          >
            もう一度（別のランダム問題）
          </button>
          <a
            href={`/grade/${grade}`}
            className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-xl font-medium transition-colors"
          >
            チャプター一覧へ
          </a>
        </div>
      </div>
    );
  }

  if (pool.length === 0) {
    return (
      <div className="text-center py-16 space-y-4">
        <p className="text-4xl">😅</p>
        <p className="text-slate-300">この難易度の問題はまだありません</p>
        <button
          onClick={handleRestart}
          className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-colors"
        >
          難易度を選び直す
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">{cfg.emoji}</span>
          <span className={`text-sm font-bold ${cfg.text}`}>{cfg.label}</span>
          <span className="text-xs text-slate-500 bg-slate-800 rounded-md px-2 py-0.5">
            {quizCount}問
          </span>
        </div>
        <button
          onClick={handleRestart}
          className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
        >
          設定を変える
        </button>
      </div>

      {/* Progress */}
      <div className="flex items-center gap-4">
        <span className="text-sm text-slate-400 whitespace-nowrap font-semibold">
          {current + 1} / {pool.length}
        </span>
        <div className="flex-1 h-2 bg-slate-700 rounded-full">
          <div
            className={`h-2 rounded-full transition-all ${cfg.border.replace("border-", "bg-")}`}
            style={{ width: `${(current / pool.length) * 100}%` }}
          />
        </div>
        <span className="text-sm text-emerald-400 whitespace-nowrap">
          正解 {correctCount}
        </span>
      </div>

      {/* Lesson label */}
      <p className="text-xs text-slate-500 bg-slate-800 rounded-lg px-3 py-1 inline-block">
        📚 {quiz.lessonTitle}
      </p>

      {/* 5要素マップ */}
      <AccountElementsMap grade={grade} />

      {/* Question */}
      <div className={`bg-slate-800/80 rounded-xl p-5 border ${cfg.border} border-opacity-40`}>
        <p className="text-slate-100 font-semibold text-base leading-relaxed">
          {shuffledQuiz?.question}
        </p>
      </div>

      {/* Options */}
      {shuffledQuiz?.options && (
        <div className="flex flex-col gap-3">
          {shuffledQuiz.options.map((opt) => {
            let cls =
              "rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all ";
            if (!submitted) {
              cls +=
                selected === opt.id
                  ? "border-blue-500 bg-blue-900/30 text-slate-100 cursor-pointer"
                  : "border-slate-600 bg-slate-800 text-slate-300 hover:border-slate-400 hover:text-slate-100 cursor-pointer";
            } else {
              if (opt.id === shuffledQuiz.correctAnswer) {
                cls += "border-emerald-500 bg-emerald-900/30 text-emerald-200";
              } else if (opt.id === selected) {
                cls += "border-red-500 bg-red-900/30 text-red-200";
              } else {
                cls += "border-slate-700 bg-slate-800/50 text-slate-500";
              }
            }
            return (
              <button
                key={opt.id}
                className={cls}
                onClick={() => !submitted && setSelected(opt.id)}
                disabled={submitted}
              >
                <span className="font-bold mr-2 text-slate-500">
                  {opt.id.toUpperCase()}.
                </span>
                {opt.label}
              </button>
            );
          })}
        </div>
      )}

      {/* キャラクターリアクション */}
      {submitted && <CharacterReaction isCorrect={isCorrect} />}

      {/* Explanation */}
      {submitted && (
        <div
          className={`rounded-xl p-4 text-sm border ${
            isCorrect
              ? "bg-emerald-900/20 border-emerald-700 text-emerald-200"
              : "bg-red-900/20 border-red-700 text-red-200"
          }`}
        >
          <p className="font-bold mb-1">{isCorrect ? "✅ 正解！" : "❌ 不正解"}</p>
          <p className="text-slate-300 leading-relaxed">{quiz.explanation}</p>
        </div>
      )}

      {/* Buttons */}
      <div className="flex gap-3">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!selected}
            className="flex-1 bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:text-slate-500 text-white px-6 py-3 rounded-xl font-bold transition-colors"
          >
            答え合わせ
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex-1 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-colors"
          >
            {current + 1 < pool.length ? "次の問題 →" : "結果を見る 🎯"}
          </button>
        )}
      </div>
    </div>
  );
}
