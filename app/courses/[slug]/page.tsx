// app/courses/[slug]/page.tsx

type CoursePageProps = {
  params: {
    slug: string;
  };
};

export default function CoursePage({ params }: CoursePageProps) {
  const { slug } = params;

  return (
    <section className="space-y-4">
      <h1 className="text-2xl sm:text-3xl font-semibold">
        Kurs: {slug}
      </h1>
      <p className="text-base text-slate-300 leading-relaxed">
        Dies ist eine Platzhalter-Seite für die Kursdetailansicht. 
        Später werden hier Titel, Beschreibung, Module, Lektionen, 
        Dauer, Level und ein Start-Button angezeigt – alles dynamisch
        aus der Datenbank.
      </p>
      <p className="text-sm text-slate-400">
        Außerdem werden hier später dein Fortschritt, Quiz-Status und
        Zertifikate eingebunden.
      </p>
    </section>
  );
}
