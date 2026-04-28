import { grade3Curriculum } from "@/data/grade3";
import { grade2Curriculum } from "@/data/grade2";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Chapter } from "@/types";

const SECTION_LABEL: Record<string, string> = {
  commercial: "商業簿記",
  manufacturing: "工業簿記",
};

function ChapterCard({
  chapter,
  grade,
  index,
}: {
  chapter: Chapter;
  grade: string;
  index: number;
}) {
  const lessonCount = chapter.lessons.length;
  const quizCount = chapter.lessons.reduce(
    (acc, l) => acc + l.quizzes.length,
    0
  );
  const colors = [
    "border-blue-200 hover:border-blue-400",
    "border-teal-200 hover:border-teal-400",
    "border-violet-200 hover:border-violet-400",
    "border-amber-200 hover:border-amber-400",
    "border-rose-200 hover:border-rose-400",
    "border-cyan-200 hover:border-cyan-400",
    "border-emerald-200 hover:border-emerald-400",
  ];
  const color = colors[index % colors.length];

  return (
    <Link
      href={`/grade/${grade}/chapter/${chapter.id}`}
      className={`bg-white rounded-xl border-2 ${color} p-5 flex flex-col gap-2 hover:shadow-md transition-all`}
    >
      <div className="flex items-center gap-2">
        <span className="text-xs font-bold text-slate-400 bg-slate-100 rounded-full px-2 py-0.5">
          Ch.{chapter.number}
        </span>
        {chapter.section && (
          <span className="text-xs font-medium text-white bg-slate-500 rounded-full px-2 py-0.5">
            {SECTION_LABEL[chapter.section]}
          </span>
        )}
      </div>
      <h3 className="font-bold text-slate-800 text-base">{chapter.title}</h3>
      <p className="text-sm text-slate-500 leading-relaxed">
        {chapter.description}
      </p>
      <div className="flex gap-3 mt-1 text-xs text-slate-400">
        <span>{lessonCount} レッスン</span>
        <span>{quizCount} 問題</span>
      </div>
    </Link>
  );
}

export default async function GradePage({
  params,
}: {
  params: Promise<{ grade: string }>;
}) {
  const { grade } = await params;
  const curriculum =
    grade === "3" ? grade3Curriculum : grade === "2" ? grade2Curriculum : null;
  if (!curriculum) notFound();

  const commercialChapters = curriculum.chapters.filter(
    (c) => !c.section || c.section === "commercial"
  );
  const manufacturingChapters = curriculum.chapters.filter(
    (c) => c.section === "manufacturing"
  );

  return (
    <div>
      <div className="mb-8">
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-2">
          <Link href="/" className="hover:text-blue-600">
            ホーム
          </Link>
          <span>/</span>
          <span>{curriculum.title}</span>
        </div>
        <h1 className="text-2xl font-bold text-slate-800">{curriculum.title}</h1>
        <p className="text-slate-500 mt-1">{curriculum.description}</p>
      </div>

      {grade === "2" ? (
        <>
          <section className="mb-8">
            <h2 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-blue-500 rounded-full inline-block" />
              商業簿記
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {commercialChapters.map((ch, i) => (
                <ChapterCard key={ch.id} chapter={ch} grade={grade} index={i} />
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-700 mb-4 flex items-center gap-2">
              <span className="w-1 h-5 bg-orange-500 rounded-full inline-block" />
              工業簿記
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {manufacturingChapters.map((ch, i) => (
                <ChapterCard key={ch.id} chapter={ch} grade={grade} index={i} />
              ))}
            </div>
          </section>
        </>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {curriculum.chapters.map((ch, i) => (
            <ChapterCard key={ch.id} chapter={ch} grade={grade} index={i} />
          ))}
        </div>
      )}
    </div>
  );
}
