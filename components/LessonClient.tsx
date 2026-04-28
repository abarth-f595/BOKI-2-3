"use client";
import { useState, useEffect } from "react";
import { Lesson } from "@/types";
import { markLessonComplete, saveQuizResult, getLessonProgress } from "@/lib/progress";
import { simpleMarkdown } from "@/lib/markdown";

function ContentView({ content }: { content: string }) {
  return (
    <div
      className="prose-boki"
      dangerouslySetInnerHTML={{ __html: simpleMarkdown(content) }}
    />
  );
}

function QuizSection({ lesson, onComplete }: { lesson: Lesson; onComplete: () => void }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const quiz = lesson.quizzes[current];
  const isCorrect = selected === quiz?.correctAnswer;

  function handleSubmit() {
    if (!selected) return;
    if (isCorrect) setScore((s) => s + 1);
    setSubmitted(true);
  }

  function handleNext() {
    if (current + 1 < lesson.quizzes.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setSubmitted(false);
    } else {
      const total = lesson.quizzes.length;
      const correct = score + (isCorrect ? 1 : 0);
      saveQuizResult(lesson.id, correct, total);
      if (correct === total) markLessonComplete(lesson.id);
      setFinished(true);
      onComplete();
    }
  }

  if (finished) {
    const total = lesson.quizzes.length;
    const correct = score + (isCorrect ? 1 : 0);
    return (
      <div className="text-center py-10">
        <p className="text-4xl mb-3">{correct === total ? "🎉" : "📝"}</p>
        <p className="text-xl font-bold text-slate-800 mb-1">
          {correct} / {total} 正解
        </p>
        <p className="text-slate-500 text-sm">
          {correct === total
            ? "全問正解！このレッスンをクリアしました"
            : "復習してもう一度挑戦してみよう"}
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-semibold text-slate-500">
          問題 {current + 1} / {lesson.quizzes.length}
        </p>
        <div className="h-2 bg-slate-100 rounded-full flex-1 mx-4">
          <div
            className="h-2 bg-blue-400 rounded-full transition-all"
            style={{ width: `${((current) / lesson.quizzes.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-slate-50 rounded-xl p-5 mb-4">
        <p className="font-semibold text-slate-800 text-base leading-relaxed">
          {quiz.question}
        </p>
      </div>

      <div className="flex flex-col gap-3 mb-5">
        {quiz.options?.map((opt) => {
          let cls =
            "rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all cursor-pointer ";
          if (!submitted) {
            cls +=
              selected === opt.id
                ? "border-blue-500 bg-blue-50 text-blue-800"
                : "border-slate-200 bg-white text-slate-700 hover:border-blue-300";
          } else {
            if (opt.id === quiz.correctAnswer) {
              cls += "border-green-500 bg-green-50 text-green-800";
            } else if (opt.id === selected) {
              cls += "border-red-400 bg-red-50 text-red-800";
            } else {
              cls += "border-slate-100 bg-white text-slate-400";
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

      {submitted && (
        <div
          className={`rounded-xl p-4 mb-4 text-sm ${
            isCorrect
              ? "bg-green-50 border border-green-200 text-green-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          <p className="font-bold mb-1">{isCorrect ? "正解！" : "不正解"}</p>
          <p className="leading-relaxed">{quiz.explanation}</p>
        </div>
      )}

      <div className="flex gap-3">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!selected}
            className="flex-1 bg-blue-600 text-white rounded-xl py-3 font-bold text-sm disabled:opacity-40 hover:bg-blue-700 transition-colors"
          >
            回答する
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex-1 bg-slate-800 text-white rounded-xl py-3 font-bold text-sm hover:bg-slate-700 transition-colors"
          >
            {current + 1 < lesson.quizzes.length ? "次の問題 →" : "結果を見る"}
          </button>
        )}
      </div>
    </div>
  );
}

export default function LessonClient({
  lesson,
  prevLessonId,
  nextLessonId,
  grade,
  chapterId,
}: {
  lesson: Lesson;
  prevLessonId?: string;
  nextLessonId?: string;
  grade: string;
  chapterId: string;
}) {
  const [tab, setTab] = useState<"learn" | "quiz">("learn");
  const [quizDone, setQuizDone] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    const prog = getLessonProgress(lesson.id);
    setCompleted(prog.completed);
    if (prog.completed) setQuizDone(true);
  }, [lesson.id]);

  return (
    <div>
      <div className="flex gap-1 mb-6 bg-slate-100 rounded-xl p-1">
        <button
          onClick={() => setTab("learn")}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
            tab === "learn"
              ? "bg-white text-blue-700 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          解説を読む
        </button>
        <button
          onClick={() => setTab("quiz")}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
            tab === "quiz"
              ? "bg-white text-blue-700 shadow-sm"
              : "text-slate-500 hover:text-slate-700"
          }`}
        >
          確認問題 {completed && "✓"}
        </button>
      </div>

      {tab === "learn" && (
        <div>
          <ContentView content={lesson.content} />

          {lesson.keyPoints.length > 0 && (
            <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
              <p className="text-sm font-bold text-blue-800 mb-2">ポイント</p>
              <ul className="space-y-1">
                {lesson.keyPoints.map((kp, i) => (
                  <li key={i} className="text-sm text-blue-700 flex gap-2">
                    <span className="text-blue-400 flex-shrink-0">•</span>
                    {kp}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {lesson.examples.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-bold text-slate-600 mb-2">仕訳例</p>
              <div className="flex flex-col gap-3">
                {lesson.examples.map((ex, i) => (
                  <div key={i} className="bg-white border border-slate-200 rounded-xl p-4">
                    <p className="text-sm text-slate-600 mb-2">{ex.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-blue-50 rounded-lg p-2">
                        <p className="text-xs font-bold text-blue-500 mb-1">借方</p>
                        <p className="text-slate-800 font-medium">{ex.debit}</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-2">
                        <p className="text-xs font-bold text-slate-400 mb-1">貸方</p>
                        <p className="text-slate-800 font-medium">{ex.credit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <button
            onClick={() => setTab("quiz")}
            className="mt-8 w-full bg-blue-600 text-white rounded-xl py-3 font-bold text-sm hover:bg-blue-700 transition-colors"
          >
            確認問題を解く →
          </button>
        </div>
      )}

      {tab === "quiz" && (
        <QuizSection
          lesson={lesson}
          onComplete={() => {
            setQuizDone(true);
            setCompleted(true);
          }}
        />
      )}

      <div className="mt-8 pt-6 border-t border-slate-200 flex justify-between">
        {prevLessonId ? (
          <a
            href={`/grade/${grade}/chapter/${chapterId}/lesson/${prevLessonId}`}
            className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
          >
            ← 前のレッスン
          </a>
        ) : (
          <span />
        )}
        {nextLessonId ? (
          <a
            href={`/grade/${grade}/chapter/${chapterId}/lesson/${nextLessonId}`}
            className="text-sm text-slate-500 hover:text-blue-600 transition-colors"
          >
            次のレッスン →
          </a>
        ) : (
          <a
            href={`/grade/${grade}/chapter/${chapterId}`}
            className="text-sm text-blue-600 font-semibold hover:text-blue-800 transition-colors"
          >
            章一覧に戻る
          </a>
        )}
      </div>
    </div>
  );
}
