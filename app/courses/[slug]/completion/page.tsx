// app/courses/[slug]/completion/page.tsx

type CompletionPageProps = {
  params: {
    slug: string;
  };
};

export default function CourseCompletionPage({ params }: CompletionPageProps) {
  const { slug } = params;

  return (
    <section className="max-w-xl space-y-4">
      <h1 className="text-2xl sm:text-3xl font-semibold">
        Glückwunsch zum Kursabschluss!
      </h1>
      <p className="text-base text-slate-300 leading-relaxed">
        Du hast den Kurs <span className="font-semibold">{slug}</span> 
        erfolgreich abgeschlossen. Hier wirst du später deinen 
        finalen Fortschritt, eine Zusammenfassung und den Link zum 
        Zertifikat sehen.
      </p>
      <p className="text-sm text-slate-400">
        Aktuell ist dies eine Demo-Seite, um die Kursabschluss-Route 
        zu testen. Die echte Logik (Abfrage, ob Quiz bestanden, 
        Kurs gelesen usw.) bauen wir ein, wenn Supabase & RLS stehen.
      </p>
    </section>
  );
}
