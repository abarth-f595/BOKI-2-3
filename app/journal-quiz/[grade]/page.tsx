import { notFound } from "next/navigation";
import JournalQuizClient from "@/components/JournalQuizClient";
import { grade3JournalProblems } from "@/data/journal-quiz-grade3";
import { grade2CommercialJournalProblems } from "@/data/journal-quiz-grade2-commercial";
import { grade2IndustrialJournalProblems } from "@/data/journal-quiz-grade2-industrial";
import Link from "next/link";

const GRADE_MAP = {
  grade3: {
    label: "3級",
    problems: grade3JournalProblems,
  },
  "grade2-commercial": {
    label: "2級 商業簿記",
    problems: grade2CommercialJournalProblems,
  },
  "grade2-industrial": {
    label: "2級 工業簿記",
    problems: grade2IndustrialJournalProblems,
  },
} as const;

type GradeKey = keyof typeof GRADE_MAP;

export function generateStaticParams() {
  return Object.keys(GRADE_MAP).map((grade) => ({ grade }));
}

export default async function JournalQuizPage({
  params,
}: {
  params: Promise<{ grade: string }>;
}) {
  const { grade } = await params;
  const config = GRADE_MAP[grade as GradeKey];
  if (!config) notFound();

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href="/journal-quiz"
          className="text-sm text-slate-500 hover:text-slate-300 transition-colors"
        >
          ← 級選択
        </Link>
        <span className="text-slate-600">›</span>
        <h1 className="text-lg font-bold text-slate-100">
          {config.label} 仕訳問題
        </h1>
      </div>

      <JournalQuizClient
        problems={config.problems}
        gradeLabel={config.label}
      />
    </div>
  );
}
