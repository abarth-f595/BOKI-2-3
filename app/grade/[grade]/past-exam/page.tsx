import { pastExamGrade3, pastExamGrade2 } from "@/data/index";
import { notFound } from "next/navigation";
import Link from "next/link";
import PastExamClient from "@/components/PastExamClient";

export default async function PastExamPage({
  params,
}: {
  params: Promise<{ grade: string }>;
}) {
  const { grade } = await params;
  const questions =
    grade === "3" ? pastExamGrade3 : grade === "2" ? pastExamGrade2 : null;
  if (!questions) notFound();

  const gradeTitle = grade === "3" ? "日商簿記3級" : "日商簿記2級";

  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
        <Link href="/" className="hover:text-blue-400">
          ホーム
        </Link>
        <span>/</span>
        <Link href={`/grade/${grade}`} className="hover:text-blue-400">
          {gradeTitle}
        </Link>
        <span>/</span>
        <span>過去問演習</span>
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-100">
          {gradeTitle} 過去問演習
        </h1>
        <p className="text-slate-400 mt-1 text-sm">
          2023〜2024年度の本試験問題を中学生でもわかる解説付きで演習できます
        </p>
      </div>

      <PastExamClient questions={questions} grade={grade} />
    </div>
  );
}
