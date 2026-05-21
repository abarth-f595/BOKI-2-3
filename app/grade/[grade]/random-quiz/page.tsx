import { grade3 as g3Data, grade2 as g2Data } from "@/data/index";
import { notFound } from "next/navigation";
import Link from "next/link";
import RandomQuizClient from "@/components/RandomQuizClient";
import { Quiz } from "@/types";

export default async function RandomQuizPage({
  params,
}: {
  params: Promise<{ grade: string }>;
}) {
  const { grade } = await params;
  const curriculum =
    grade === "3" ? g3Data : grade === "2" ? g2Data : null;
  if (!curriculum) notFound();

  type QuizWithMeta = Quiz & { lessonTitle: string };

  const chapters =
    grade === "2"
      ? curriculum.chapters.filter((c) => c.section !== "manufacturing")
      : curriculum.chapters;

  const allQuizzes: QuizWithMeta[] = chapters.flatMap((ch) =>
    ch.lessons.flatMap((l) =>
      l.quizzes.map((q) => ({ ...q, lessonTitle: `${ch.title} › ${l.title}` }))
    )
  );

  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-slate-400 mb-6 flex-wrap">
        <Link href="/" className="hover:text-blue-400">ホーム</Link>
        <span>/</span>
        <Link href={`/grade/${grade}`} className="hover:text-blue-400">
          {curriculum.title}
        </Link>
        <span>/</span>
        <span>ランダム100問チャレンジ</span>
      </div>

      <div className="mb-6">
        <h1 className="text-2xl font-bold text-slate-100">
          🎲 ランダム100問チャレンジ
        </h1>
        <p className="text-slate-400 mt-1 text-sm">
          {curriculum.title}の全{allQuizzes.length}問からランダムに100問を出題します。
          問題の選択肢もシャッフルされます。
        </p>
      </div>

      <div className="bg-slate-800 rounded-2xl border border-slate-700 p-6 shadow-sm shadow-black/20">
        <RandomQuizClient quizzes={allQuizzes} grade={grade} />
      </div>
    </div>
  );
}
