import { grade3Curriculum } from "./grade3";
import { grade2Curriculum } from "./grade2";
import { grade3ExtraCh0105 } from "./grade3-extra-ch01-05";
import { grade3ExtraCh0610 } from "./grade3-extra-ch06-10";
import { grade2Extra } from "./grade2-extra";
import { mergeCurriculum } from "@/lib/mergeCurriculum";
import { pastExamGrade3 } from "./past-exam-grade3";
import { pastExamGrade2 } from "./past-exam-grade2";

const grade3Extra = { ...grade3ExtraCh0105, ...grade3ExtraCh0610 };

export const grade3 = mergeCurriculum(grade3Curriculum, grade3Extra);
export const grade2 = mergeCurriculum(grade2Curriculum, grade2Extra);
export { pastExamGrade3, pastExamGrade2 };
