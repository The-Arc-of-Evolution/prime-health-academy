// components/home/QAPreview.tsx

export default function QAPreview() {
  return (
    <section className="w-full bg-slate-50">
      <div className="pha-container py-10 md:py-14">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-xl font-semibold text-[var(--pha-blue)] md:text-2xl">
              Deine Fragen zu Longevity, Training & Gesundheit
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[var(--pha-muted)]">
              Im Q&amp;A-Bereich kannst du konkrete Fragen stellen,
              Antworten nachlesen und von anderen lernen. Kein Social-Media-Lärm
              – fokussierte Inhalte für Menschen, die es ernst meinen.
            </p>
          </div>

          <div className="pha-card p-5 text-xs text-[var(--pha-muted)]">
            <p className="mb-2 font-semibold text-[var(--pha-blue)]">
              Typische Fragen:
            </p>
            <ul className="space-y-1">
              <li>• Welche Blutwerte sind ab 40 wirklich relevant?</li>
              <li>• Wie starte ich sicher mit Krafttraining?</li>
              <li>• Wie erkenne ich, ob mein Schlaf ausreichend ist?</li>
            </ul>
            <a
              href="/qa"
              className="mt-3 inline-block text-[11px] font-semibold text-[var(--pha-cyan)] hover:underline"
            >
              Zum Q&amp;A-Bereich →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
