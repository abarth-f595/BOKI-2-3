import { grade3 as g3Data, grade2 as g2Data } from "@/data/index";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function ChapterPage({
  params,
}: {
  params: Promise<{ grade: string; chapterId: string }>;
}) {
  const { grade, chapterId } = await params;
  const curriculum =
    grade === "3" ? g3Data : grade === "2" ? g2Data : null;
  if (!curriculum) notFound();

  const chapter = curriculum.chapters.find((c) => c.id === chapterId);
  if (!chapter) notFound();

  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-slate-400 mb-4">
        <Link href="/" className="hover:text-blue-600">ホーム</Link>
        <span>/</span>
        <Link href={`/grade/${grade}`} className="hover:text-blue-600">
          {curriculum.title}
        </Link>
        <span>/</span>
        <span>{chapter.title}</span>
      </div>

      <div className="mb-8">
        <p className="text-xs font-bold text-slate-400 mb-1">Chapter {chapter.number}</p>
        <h1 className="text-2xl font-bold text-slate-800">{chapter.title}</h1>
        <p className="text-slate-500 mt-1">{chapter.description}</p>
      </div>

      <div className="flex flex-col gap-4">
        {chapter.lessons.map((lesson, index) => {
          const quizCount = lesson.quizzes.length;
          return (
            <Link
              key={lesson.id}
              href={`/grade/${grade}/chapter/${chapterId}/lesson/${lesson.id}`}
              className="bg-white rounded-xl border border-slate-200 p-5 flex items-center justify-between hover:border-blue-400 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4">
                <span className="w-9 h-9 rounded-full bg-blue-50 text-blue-700 font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {index + 1}
                </span>
                <div>
                  <p className="font-semibold text-slate-800">{lesson.title}</p>
                  <p className="text-xs text-slate-400 mt-0.5">
                    確認問題 {quizCount}問
                  </p>
                </div>
              </div>
              <span className="text-slate-300 text-lg">›</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
