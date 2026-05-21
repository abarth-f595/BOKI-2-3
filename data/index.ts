import { grade3Curriculum } from "./grade3";
import { grade2Curriculum } from "./grade2";
import { grade3ExtraCh0105 } from "./grade3-extra-ch01-05";
import { grade3ExtraCh0610 } from "./grade3-extra-ch06-10";
import { grade3ExtraV2 } from "./grade3-extra-v2";
import { grade3DifficultyExtra } from "./grade3-difficulty-extra";
import { grade3BulkCh0105 } from "./grade3-bulk-ch01-05";
import { grade3BulkCh0610 } from "./grade3-bulk-ch06-10";
import { grade2Extra } from "./grade2-extra";
import { grade2BulkCh0103 } from "./grade2-bulk-ch01-03";
import { grade2BulkCh0406 } from "./grade2-bulk-ch04-06";
import { mergeCurriculum } from "@/lib/mergeCurriculum";
import { pastExamGrade3 } from "./past-exam-grade3";
import { pastExamGrade2 } from "./past-exam-grade2";

const grade3AllExtra = {
  ...grade3ExtraCh0105,
  ...grade3ExtraCh0610,
  ...grade3ExtraV2,
  ...grade3DifficultyExtra,
  ...grade3BulkCh0105,
  ...grade3BulkCh0610,
};

// 同一レッスンへの追加問題をマージ（キーが重複した場合は配列結合）
const mergedGrade3Extra: Record<string, import("@/types").Quiz[]> = {};
for (const [lessonId, quizzes] of Object.entries(grade3AllExtra)) {
  mergedGrade3Extra[lessonId] = [
    ...(mergedGrade3Extra[lessonId] ?? []),
    ...quizzes,
  ];
}

const grade2AllExtra: Record<string, import("@/types").Quiz[]> = {};
for (const [lessonId, quizzes] of Object.entries({ ...grade2Extra, ...grade2BulkCh0103, ...grade2BulkCh0406 })) {
  grade2AllExtra[lessonId] = [
    ...(grade2AllExtra[lessonId] ?? []),
    ...quizzes,
  ];
}

export const grade3 = mergeCurriculum(grade3Curriculum, mergedGrade3Extra);
export const grade2 = mergeCurriculum(grade2Curriculum, grade2AllExtra);
export { pastExamGrade3, pastExamGrade2 };
