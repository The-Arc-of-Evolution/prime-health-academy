// components/home/HomeHero.tsx

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* farbige Akzente */}
      <div className="pointer-events-none absolute inset-0 opacity-70">
        <div className="absolute -left-32 -top-32 h-72 w-72 rounded-full bg-[var(--pha-cyan)]/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-sky-500/20 blur-3xl" />
      </div>

      <div className="relative pha-container grid min-h-[70vh] items-center gap-12 py-16 md:grid-cols-2 md:py-24">
        {/* Text */}
        <div className="flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 self-start rounded-full bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-sky-100">
            Evidence-Based • Longevity • Performance
          </div>

          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
            Live Longer.{" "}
            <span className="text-[var(--pha-cyan)]">Perform Better.</span>
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-slate-200 sm:text-base">
            Prime Health Academy verbindet moderne Langlebigkeitsforschung mit
            sportlicher Performance. Klare Kurse statt Info-Overload – für
            Menschen, die heute besser leben und morgen gesünder älter werden
            wollen.
          </p>

          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <a
              href="/courses"
              className="inline-flex items-center justify-center rounded-full bg-[var(--pha-cyan)] px-7 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-950 shadow-md hover:bg-[#00a0b0] transition-colors"
            >
              Kurse entdecken
            </a>
            <a
              href="/longevity"
              className="inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/70 px-7 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 hover:border-slate-300 transition-colors"
            >
              Was ist Longevity?
            </a>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4 text-[11px] text-slate-300 sm:text-xs">
            <div>
              <div className="font-semibold text-white">+10 Jahre</div>
              <div className="opacity-80">Fokus auf Gesundheitsspanne</div>
            </div>
            <div>
              <div className="font-semibold text-white">Science first</div>
              <div className="opacity-80">Studien & Praxis kombiniert</div>
            </div>
            <div>
              <div className="font-semibold text-white">Umsetzbar</div>
              <div className="opacity-80">Workouts, Routinen, Pläne</div>
            </div>
          </div>
        </div>

        {/* Hero-Panel */}
        <div className="pha-card bg-slate-900/70 p-5 text-xs text-slate-100 sm:p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300">
              Longevity Snapshot
            </span>
            <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Beta
            </span>
          </div>

          <div className="space-y-3">
            <p>
              Stell dir dein Gesundheitsprofil vor wie ein Dashboard: Schlaf,
              Blutwerte, Aktivität, Body Composition, Stresslevel. Unsere Kurse
              helfen dir, diese Werte zu verstehen – und gezielt zu verbessern.
            </p>

            <div className="mt-3 grid grid-cols-2 gap-3 text-[11px] text-slate-100">
              <div className="rounded-lg border border-slate-700 bg-slate-900/80 p-3">
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  Core Pillars
                </div>
                <ul className="mt-1 space-y-1">
                  <li>• Schlaf & Regeneration</li>
                  <li>• Metabolische Gesundheit</li>
                  <li>• Muskelmasse & Bewegung</li>
                </ul>
              </div>
              <div className="rounded-lg border border-slate-700 bg-slate-900/80 p-3">
                <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400">
                  Kursformate
                </div>
                <ul className="mt-1 space-y-1">
                  <li>• Video-Lektionen</li>
                  <li>• PDF-Guides & Checks</li>
                  <li>• Q&amp;A & Community</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-4 rounded-md bg-slate-800/90 p-3 text-[11px] text-slate-200">
            „100 gesunde Lebensjahre sind kein Zufall – sondern die Summe
            smarter Entscheidungen.“
          </div>
        </div>
      </div>
    </section>
  );
}
