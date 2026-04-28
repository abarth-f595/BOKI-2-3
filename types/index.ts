export type Grade = "3" | "2";
export type Section = "commercial" | "manufacturing";

export interface QuizOption {
  id: string;
  label: string;
}

export interface JournalEntry {
  debit: { account: string; amount: number };
  credit: { account: string; amount: number };
}

export interface Quiz {
  id: string;
  question: string;
  type: "multiple" | "journal" | "truefalse";
  options?: QuizOption[];
  correctAnswer: string;
  explanation: string;
  journalAnswer?: JournalEntry;
}

export interface Lesson {
  id: string;
  title: string;
  content: string;
  keyPoints: string[];
  examples: {
    description: string;
    debit: string;
    credit: string;
    amount?: number;
  }[];
  quizzes: Quiz[];
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  description: string;
  section?: Section;
  lessons: Lesson[];
}

export interface GradeCurriculum {
  grade: Grade;
  title: string;
  description: string;
  chapters: Chapter[];
}

export interface UserProgress {
  completedLessons: string[];
  quizResults: Record<string, { correct: number; total: number }>;
  lastAccessed: Record<string, string>;
}
