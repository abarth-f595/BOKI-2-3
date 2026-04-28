"use client";
import { UserProgress } from "@/types";

const KEY = "boki_progress";

export function getProgress(): UserProgress {
  if (typeof window === "undefined") {
    return { completedLessons: [], quizResults: {}, lastAccessed: {} };
  }
  try {
    const raw = localStorage.getItem(KEY);
    return raw
      ? JSON.parse(raw)
      : { completedLessons: [], quizResults: {}, lastAccessed: {} };
  } catch {
    return { completedLessons: [], quizResults: {}, lastAccessed: {} };
  }
}

export function saveProgress(progress: UserProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY, JSON.stringify(progress));
}

export function markLessonComplete(lessonId: string): void {
  const p = getProgress();
  if (!p.completedLessons.includes(lessonId)) {
    p.completedLessons.push(lessonId);
  }
  p.lastAccessed[lessonId] = new Date().toISOString();
  saveProgress(p);
}

export function saveQuizResult(
  lessonId: string,
  correct: number,
  total: number
): void {
  const p = getProgress();
  const prev = p.quizResults[lessonId];
  if (!prev || correct / total >= prev.correct / prev.total) {
    p.quizResults[lessonId] = { correct, total };
  }
  saveProgress(p);
}

export function getLessonProgress(lessonId: string): {
  completed: boolean;
  quizResult?: { correct: number; total: number };
} {
  const p = getProgress();
  return {
    completed: p.completedLessons.includes(lessonId),
    quizResult: p.quizResults[lessonId],
  };
}

export function getChapterProgress(
  lessonIds: string[]
): { completed: number; total: number } {
  const p = getProgress();
  const completed = lessonIds.filter((id) =>
    p.completedLessons.includes(id)
  ).length;
  return { completed, total: lessonIds.length };
}
