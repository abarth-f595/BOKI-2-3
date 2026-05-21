import { grade3Curriculum } from "./grade3";
import { grade2Curriculum } from "./grade2";
import { grade3ExtraCh0105 } from "./grade3-extra-ch01-05";
import { grade3ExtraCh0610 } from "./grade3-extra-ch06-10";
import { grade3ExtraV2 } from "./grade3-extra-v2";
import { grade3DifficultyExtra } from "./grade3-difficulty-extra";
import { grade2Extra } from "./grade2-extra";
import { mergeCurriculum } from "@/lib/mergeCurriculum";
import { pastExamGrade3 } from "./past-exam-grade3";
import { pastExamGrade2 } from "./past-exam-grade2";

const grade3Extra = { ...grade3ExtraCh0105, ...grade3ExtraCh0610, ...grade3ExtraV2, ...grade3DifficultyExtra };

// 同一レッスンへの追加問題をマージ（キーが重複した場合は配列結合）
const mergedGrade3Extra: Record<string, import("@/types").Quiz[]> = {};
for (const [lessonId, quizzes] of Object.entries(grade3Extra)) {
  mergedGrade3Extra[lessonId] = [
    ...(mergedGrade3Extra[lessonId] ?? []),
    ...quizzes,
  ];
}

export const grade3 = mergeCurriculum(grade3Curriculum, mergedGrade3Extra);
export const grade2 = mergeCurriculum(grade2Curriculum, grade2Extra);
export { pastExamGrade3, pastExamGrade2 };
