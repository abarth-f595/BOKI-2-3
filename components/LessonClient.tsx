"use client";
import { useState, useEffect, useMemo } from "react";
import { Lesson } from "@/types";
import { markLessonComplete, saveQuizResult, getLessonProgress } from "@/lib/progress";
import { simpleMarkdown } from "@/lib/markdown";
import EizoukenGuide from "@/components/EizoukenGuide";
import MemoryHookCard from "@/components/MemoryHookCard";
import {
  EizoukenCharacter,
  getCharacterForChapter,
  pickLine,
} from "@/data/characterDialogue";
import { memoryHooks } from "@/data/memoryHooks";
import QuizDiagram from "@/components/QuizDiagram";
import AccountTitlesTable from "@/components/AccountTitlesTable";

function ContentView({ content }: { content: string }) {
  return (
    <div
      className="prose-boki"
      dangerouslySetInnerHTML={{ __html: simpleMarkdown(content) }}
    />
  );
}

function QuizSection({
  lesson,
  onComplete,
  grade,
  chapterId,
  character,
}: {
  lesson: Lesson;
  onComplete: () => void;
  grade: string;
  chapterId: string;
  character: EizoukenCharacter;
}) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [scores, setScores] = useState<Record<number, boolean>>({});
  const [finished, setFinished] = useState(false);
  const [feedbackLine, setFeedbackLine] = useState("");

  const quiz = lesson.quizzes[current];

  const shuffledQuiz = useMemo(() => {
    if (!quiz?.options) return quiz;
    const shuffled = [...quiz.options].sort(() => Math.random() - 0.5);
    const newOptions = shuffled.map((opt, i) => ({
      ...opt,
      id: String.fromCharCode(97 + i),
    }));
    const originalCorrectLabel = quiz.options.find((o) => o.id === quiz.correctAnswer)?.label;
    const newCorrectId = newOptions.find((o) => o.label === originalCorrectLabel)?.id ?? quiz.correctAnswer;
    return { ...quiz, options: newOptions, correctAnswer: newCorrectId };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const isCorrect = selected === shuffledQuiz?.correctAnswer;

  function handleSubmit() {
    if (!selected) return;
    setScores(prev => ({ ...prev, [current]: isCorrect }));
    setSubmitted(true);
    setFeedbackLine(
      pickLine(isCorrect ? character.correctLines : character.wrongLines)
    );
  }

  function handleNext() {
    if (current + 1 < lesson.quizzes.length) {
      setCurrent((c) => c + 1);
      setSelected(null);
      setSubmitted(false);
      setFeedbackLine("");
    } else {
      const total = lesson.quizzes.length;
      const correct = Object.values({ ...scores, [current]: isCorrect }).filter(Boolean).length;
      saveQuizResult(lesson.id, correct, total);
      if (correct === total) markLessonComplete(lesson.id);
      setFinished(true);
      onComplete();
    }
  }

  function handlePrev() {
    if (current > 0) {
      setCurrent((c) => c - 1);
      setSelected(null);
      setSubmitted(false);
      setFeedbackLine("");
    }
  }

  if (finished) {
    const total = lesson.quizzes.length;
    const correct = Object.values(scores).filter(Boolean).length;
    return (
      <div className="text-center py-10">
        <p className="text-4xl mb-3">{correct === total ? "🎉" : "📝"}</p>
        <p className="text-xl font-bold text-slate-100 mb-1">
          {correct} / {total} 正解
        </p>
        <p className="text-slate-400 text-sm mb-6">
          {correct === total
            ? "全問正解！このレッスンをクリアしました"
            : "復習してもう一度挑戦してみよう"}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => {
              setCurrent(0);
              setScores({});
              setFinished(false);
              setSelected(null);
              setSubmitted(false);
              setFeedbackLine("");
            }}
            className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-2 rounded-xl transition-colors font-medium"
          >
            もう一度解く
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm font-semibold text-slate-400 whitespace-nowrap">
          問題 {current + 1} / {lesson.quizzes.length}
        </p>
        <div className="h-2 bg-slate-700 rounded-full flex-1 mx-4">
          <div
            className="h-2 bg-blue-500 rounded-full transition-all"
            style={{ width: `${((current) / lesson.quizzes.length) * 100}%` }}
          />
        </div>
        <a
          href="/"
          className="text-xs bg-slate-800 text-slate-300 hover:text-white border border-slate-600 px-3 py-1.5 rounded-lg transition-colors whitespace-nowrap font-medium flex items-center gap-1"
        >
          <span>🏠</span> ホーム
        </a>
      </div>

      <AccountTitlesTable />

      {shuffledQuiz && !submitted && (
        <QuizDiagram
          question={shuffledQuiz.question}
          explanation={shuffledQuiz.explanation}
        />
      )}

      <div className="bg-slate-700/50 rounded-xl p-5 mb-4">
        <p className="font-semibold text-slate-100 text-base leading-relaxed">
          {shuffledQuiz?.question}
        </p>
      </div>

      <div className="flex flex-col gap-3 mb-5">
        {shuffledQuiz?.options?.map((opt) => {
          let cls =
            "rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all cursor-pointer ";
          if (!submitted) {
            cls +=
              selected === opt.id
                ? "border-blue-500 bg-blue-900/40 text-blue-300"
                : "border-slate-600 bg-slate-700/50 text-slate-200 hover:border-blue-500/60";
          } else {
            if (opt.id === shuffledQuiz.correctAnswer) {
              cls += "border-green-500 bg-green-900/40 text-green-300";
            } else if (opt.id === selected) {
              cls += "border-red-500 bg-red-900/40 text-red-300";
            } else {
              cls += "border-slate-700 bg-slate-800 text-slate-500";
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

      {/* 回答後: キャラクターの解説コメント */}
      {submitted && feedbackLine && (
        <EizoukenGuide
          character={character}
          text={feedbackLine}
          mode={isCorrect ? "correct" : "wrong"}
        />
      )}

      {/* 回答後の図解 */}
      {submitted && shuffledQuiz && (
        <QuizDiagram
          question={shuffledQuiz.question}
          explanation={shuffledQuiz.explanation}
          isAnswered={true}
          isCorrect={isCorrect}
          correctLabel={shuffledQuiz.options?.find(o => o.id === shuffledQuiz.correctAnswer)?.label}
        />
      )}

      {/* 既存の解説テキスト */}
      {submitted && (
        <div
          className={`rounded-xl p-4 mb-4 text-sm ${
            isCorrect
              ? "bg-green-900/40 border border-green-700 text-green-300"
              : "bg-red-900/40 border border-red-700 text-red-300"
          }`}
        >
          <p className="font-bold mb-1">{isCorrect ? "正解！" : "不正解"}</p>
          <p className="leading-relaxed">{shuffledQuiz?.explanation}</p>
        </div>
      )}

      <div className="flex gap-3">
        {current > 0 && (
          <button
            onClick={handlePrev}
            className="bg-slate-700 text-slate-300 rounded-xl px-5 font-bold text-sm hover:bg-slate-600 transition-colors"
          >
            ◀ 前へ
          </button>
        )}
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!selected}
            className="flex-1 bg-blue-600 text-white rounded-xl py-3 font-bold text-sm disabled:opacity-30 hover:bg-blue-500 transition-colors"
          >
            回答する
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="flex-1 bg-slate-600 text-white rounded-xl py-3 font-bold text-sm hover:bg-slate-500 transition-colors"
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

  const character = getCharacterForChapter(chapterId);
  const lectureLine = useMemo(() => pickLine(character.lectureLines), [character]);

  useEffect(() => {
    const prog = getLessonProgress(lesson.id);
    setCompleted(prog.completed);
    if (prog.completed) setQuizDone(true);
  }, [lesson.id]);

  return (
    <div>
      <div className="flex gap-1 mb-6 bg-slate-700/50 rounded-xl p-1">
        <button
          onClick={() => setTab("learn")}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
            tab === "learn"
              ? "bg-slate-600 text-blue-300 shadow-sm"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          解説を読む
        </button>
        <button
          onClick={() => setTab("quiz")}
          className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
            tab === "quiz"
              ? "bg-slate-600 text-blue-300 shadow-sm"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          確認問題 {completed && "✓"}
        </button>
      </div>

      {tab === "learn" && (
        <div>
          {/* キャラクター講義 */}
          <EizoukenGuide
            character={character}
            text={lectureLine}
            mode="lecture"
          />

          <ContentView content={lesson.content} />

          {lesson.keyPoints.length > 0 && (
            <div className="mt-6 bg-blue-950/50 border border-blue-800 rounded-xl p-4">
              <p className="text-sm font-bold text-blue-400 mb-2">ポイント</p>
              <ul className="space-y-1">
                {lesson.keyPoints.map((kp, i) => (
                  <li key={i} className="text-sm text-blue-300 flex gap-2">
                    <span className="text-blue-500 flex-shrink-0">•</span>
                    {kp}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {lesson.examples.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-bold text-slate-400 mb-2">仕訳例</p>
              <div className="flex flex-col gap-3">
                {lesson.examples.map((ex, i) => (
                  <div key={i} className="bg-slate-700/50 border border-slate-600 rounded-xl p-4">
                    <p className="text-sm text-slate-400 mb-2">{ex.description}</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div className="bg-blue-900/40 rounded-lg p-2">
                        <p className="text-xs font-bold text-blue-400 mb-1">借方</p>
                        <p className="text-slate-100 font-medium">{ex.debit}</p>
                      </div>
                      <div className="bg-slate-700 rounded-lg p-2">
                        <p className="text-xs font-bold text-slate-400 mb-1">貸方</p>
                        <p className="text-slate-100 font-medium">{ex.credit}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 記憶術カード */}
          {(memoryHooks[lesson.id] ?? []).length > 0 && (
            <div className="mt-6">
              <p className="text-sm font-bold text-yellow-400 mb-3">🧠 脳が「面白い！」と感じる記憶術</p>
              {(memoryHooks[lesson.id] ?? []).map((hook, i) => (
                <MemoryHookCard key={i} hook={hook} />
              ))}
            </div>
          )}

          <button
            onClick={() => setTab("quiz")}
            className="mt-8 w-full bg-blue-600 text-white rounded-xl py-3 font-bold text-sm hover:bg-blue-500 transition-colors"
          >
            確認問題を解く →
          </button>
        </div>
      )}

      {tab === "quiz" && (
        <QuizSection
          lesson={lesson}
          grade={grade}
          chapterId={chapterId}
          character={character}
          onComplete={() => {
            setQuizDone(true);
            setCompleted(true);
          }}
        />
      )}

      <div className="mt-8 pt-6 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
        {prevLessonId ? (
          <a
            href={`/grade/${grade}/chapter/${chapterId}/lesson/${prevLessonId}`}
            className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex-1 text-center sm:text-left"
          >
            ← 前のレッスン
          </a>
        ) : (
          <div className="flex-1 hidden sm:block" />
        )}

        <div className="flex gap-3 justify-center">
          <a
            href={`/grade/${grade}/chapter/${chapterId}`}
            className="text-sm text-slate-300 font-semibold hover:text-white bg-slate-700 px-4 py-2 rounded-lg transition-colors"
          >
            章一覧に戻る
          </a>
          <a
            href="/"
            className="text-sm text-slate-300 font-semibold hover:text-white bg-slate-800 border border-slate-600 px-4 py-2 rounded-lg transition-colors"
          >
            ホーム
          </a>
        </div>

        {nextLessonId ? (
          <a
            href={`/grade/${grade}/chapter/${chapterId}/lesson/${nextLessonId}`}
            className="text-sm text-slate-400 hover:text-blue-400 transition-colors flex-1 text-center sm:text-right"
          >
            次のレッスン →
          </a>
        ) : (
          <div className="flex-1 hidden sm:block" />
        )}
      </div>
    </div>
  );
}
