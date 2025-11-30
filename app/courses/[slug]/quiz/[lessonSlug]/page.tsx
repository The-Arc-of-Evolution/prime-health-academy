// app/courses/[slug]/quiz/[lessonSlug]/page.tsx

type QuizPageProps = {
  params: {
    slug: string;
    lessonSlug: string;
  };
};

export default function CourseQuizPage({ params }: QuizPageProps) {
  const { slug, lessonSlug } = params;

  return (
    <section className="space-y-4">
      <h1 className="text-2xl sm:text-3xl font-semibold">
        Quiz zu: {lessonSlug}
      </h1>
      <p className="text-base text-slate-300 leading-relaxed">
        Dies ist eine Platzhalter-Seite für das Quiz innerhalb des Kurses{" "}
        <span className="font-semibold">{slug}</span>. Später werden hier 
        Fragen, Antwortmöglichkeiten, Auswertung und „bestanden / nicht bestanden“-Status angezeigt.
      </p>
      <p className="text-sm text-slate-400">
        Die Logik für Quizversuche, Speicherungen und Zertifikatsfreigabe 
        kommt, sobald die Supabase-Tabellen für Quiz & Attempts dran sind.
      </p>
    </section>
  );
}
