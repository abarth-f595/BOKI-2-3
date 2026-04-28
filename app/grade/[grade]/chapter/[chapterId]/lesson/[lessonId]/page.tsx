import { grade3 as g3Data, grade2 as g2Data } from "@/data/index";
import { notFound } from "next/navigation";
import Link from "next/link";
import LessonClient from "@/components/LessonClient";

export default async function LessonPage({
  params,
}: {
  params: Promise<{ grade: string; chapterId: string; lessonId: string }>;
}) {
  const { grade, chapterId, lessonId } = await params;
  const curriculum =
    grade === "3" ? g3Data : grade === "2" ? g2Data : null;
  if (!curriculum) notFound();

  const chapter = curriculum.chapters.find((c) => c.id === chapterId);
  if (!chapter) notFound();

  const lessonIndex = chapter.lessons.findIndex((l) => l.id === lessonId);
  if (lessonIndex === -1) notFound();

  const lesson = chapter.lessons[lessonIndex];
  const prevLesson = chapter.lessons[lessonIndex - 1];
  const nextLesson = chapter.lessons[lessonIndex + 1];

  return (
    <div>
      <div className="flex items-center gap-2 text-sm text-slate-400 mb-4 flex-wrap">
        <Link href="/" className="hover:text-blue-600">ホーム</Link>
        <span>/</span>
        <Link href={`/grade/${grade}`} className="hover:text-blue-600">
          {curriculum.title}
        </Link>
        <span>/</span>
        <Link href={`/grade/${grade}/chapter/${chapterId}`} className="hover:text-blue-600">
          {chapter.title}
        </Link>
        <span>/</span>
        <span>{lesson.title}</span>
      </div>

      <div className="mb-6">
        <p className="text-xs font-bold text-slate-400 mb-1">
          Ch.{chapter.number} — レッスン {lessonIndex + 1}
        </p>
        <h1 className="text-xl font-bold text-slate-800">{lesson.title}</h1>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
        <LessonClient
          lesson={lesson}
          prevLessonId={prevLesson?.id}
          nextLessonId={nextLesson?.id}
          grade={grade}
          chapterId={chapterId}
        />
      </div>
    </div>
  );
}
