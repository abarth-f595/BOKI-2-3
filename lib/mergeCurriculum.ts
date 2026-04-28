import { GradeCurriculum, Quiz } from "@/types";

export function mergeCurriculum(
  base: GradeCurriculum,
  extra: Record<string, Quiz[]>
): GradeCurriculum {
  return {
    ...base,
    chapters: base.chapters.map((ch) => ({
      ...ch,
      lessons: ch.lessons.map((l) => ({
        ...l,
        quizzes: [...l.quizzes, ...(extra[l.id] ?? [])],
      })),
    })),
  };
}
