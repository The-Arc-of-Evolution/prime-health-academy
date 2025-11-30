// components/home/LongevityIntro.tsx

export default function LongevityIntro() {
  return (
    <section className="w-full bg-slate-50">
      <div className="pha-container grid gap-8 py-10 md:grid-cols-2 md:py-14">
        <div>
          <h2 className="text-xl font-semibold text-[var(--pha-blue)] md:text-2xl">
            Longevity – mehr als nur „alt werden“
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--pha-muted)]">
            Im Fokus steht die <strong>Gesundheitsspanne</strong>: Jahre, in
            denen du klar, leistungsfähig und frei leben kannst. Longevity
            kombiniert Medizin, Training, Ernährung und mentale Gesundheit.
          </p>
        </div>

        <div className="pha-card p-5 text-sm text-[var(--pha-muted)]">
          <h3 className="text-sm font-semibold text-[var(--pha-blue)]">
            Deine wichtigsten Hebel
          </h3>
          <ul className="mt-3 space-y-1 text-xs">
            <li>• Schlaf & Regeneration intelligent nutzen</li>
            <li>• Muskeln erhalten & aufbauen</li>
            <li>• Metabolische Gesundheit stabilisieren</li>
            <li>• Stress & mentale Belastung reduzieren</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
