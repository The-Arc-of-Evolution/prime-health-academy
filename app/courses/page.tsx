// app/courses/page.tsx

export default function CoursesPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl sm:text-3xl font-semibold">
        Alle Kurse
      </h1>
      <p className="text-base text-slate-300 leading-relaxed">
        Hier findest du eine Übersicht über alle Kurse der Prime Health Academy.
        Später werden diese Inhalte dynamisch aus der Datenbank geladen und nach
        Themen wie Longevity, Schlaf, Ernährung und Training gefiltert.
      </p>
      <p className="text-sm text-slate-400">
        Aktuell ist dies eine Platzhalter-Seite, damit das Layout und die Routen
        stehen. Die echte Kursliste mit Filtern, Tags und Detail-Links folgt,
        sobald Supabase angebunden ist.
      </p>
    </section>
  );
}
