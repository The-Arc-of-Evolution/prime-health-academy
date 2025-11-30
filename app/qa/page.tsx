// app/qa/page.tsx

export default function QAPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl sm:text-3xl font-semibold">Q&amp;A – Fragen & Antworten</h1>
      <p className="text-base text-slate-300 leading-relaxed">
        Im Q&amp;A-Bereich kannst du später konkrete Fragen zu Longevity, 
        Training, Blutwerten und Ernährung stellen und Antworten aus der 
        Community oder von Experten bekommen.
      </p>
      <p className="text-sm text-slate-400">
        Diese Seite ist vorerst ein Layout-Platzhalter. 
        Die echte Q&amp;A-Funktionalität (Fragen posten, Antworten, Votes) 
        koppeln wir später an Supabase und passende API-Routen.
      </p>
    </section>
  );
}
