// app/page.tsx

export default function HomePage() {
  return (
    <>
      {/* SECTION 1 – HERO */}
      <section className="grid items-center gap-12 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        {/* Text-Spalte */}
        <div className="space-y-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Longevity · Strength · Performance
          </p>

          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Live longer.
            <span className="block text-cyan-400">Train stronger.</span>
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
            Prime Health Academy verbindet evidenzbasierte Longevity mit
            intelligentem Training. Klare Programme statt Fitness-Mythen – für
            Menschen, die gesund alt werden und heute stärker leben wollen.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href="/courses"
              className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 hover:bg-cyan-400 transition-colors"
            >
              Kurse ansehen
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-slate-600 px-6 py-2 text-sm font-medium text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
            >
              Unsere Mission
            </a>
          </div>

          {/* Nur drei kleine „Chips“ statt Text-Blöcke */}
          <div className="flex flex-wrap gap-2 pt-3 text-xs text-slate-300">
            <span className="rounded-full border border-slate-700 px-3 py-1">
              Fokus: Gesundheitsspanne
            </span>
            <span className="rounded-full border border-slate-700 px-3 py-1">
              Science x Gym
            </span>
            <span className="rounded-full border border-slate-700 px-3 py-1">
              Umsetzbare Routinen
            </span>
          </div>
        </div>

        {/* Rechte Spalte – Metrics-Karte etwas ruhiger */}
        <div className="relative h-64 sm:h-72 md:h-80">
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-cyan-500/30 via-transparent to-violet-500/25 blur-3xl" />
          <div className="absolute inset-0 overflow-hidden rounded-[1.7rem] border border-slate-800/80 bg-slate-900/80 shadow-xl shadow-slate-950/70">
            <div className="relative flex h-full flex-col justify-between p-6">
              <div className="flex items-center justify-between text-[11px] text-slate-200">
                <span className="font-medium uppercase tracking-[0.25em] text-slate-300">
                  Daily metrics
                </span>
                <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold tracking-[0.18em] text-emerald-300">
                  Online
                </span>
              </div>

              <div className="space-y-4 pt-3 text-[11px] text-slate-100">
                <MetricRow label="Schlaf-Qualität" value="86%" barClass="bg-cyan-400" width="w-[86%]" />
                <MetricRow
                  label="Muskel-Training / Woche"
                  value="4x"
                  barClass="bg-violet-400"
                  width="w-3/4"
                />
                <MetricRow
                  label="Metabolische Balance"
                  value="72%"
                  barClass="bg-emerald-400"
                  width="w-[72%]"
                />
              </div>

              <p className="mt-3 text-[11px] text-slate-300">
                „Trainiere nicht nur für heute – trainiere für die nächsten 30 Jahre.“
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 – Programme (ruhiger, mehr Luft) */}
      <section className="border-t border-slate-800/60 pt-10">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-semibold">Programme</h2>
            <p className="mt-2 max-w-xl text-sm text-slate-300">
              Step-by-Step-Kurse – von Longevity-Grundlagen über Schlaf &
              Regeneration bis zu Stoffwechsel & Muskelaufbau.
            </p>
          </div>
          <a
            href="/courses"
            className="text-xs font-semibold tracking-[0.18em] text-cyan-300 hover:text-cyan-200"
          >
            Alle Programme →
          </a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <ProgramCard
            tag="Einstieg"
            title="Longevity Fundamentals"
            description="Die wichtigsten Basics für ein langes, gesundes Leben – Schlaf, Ernährung, Bewegung & Lab-Werte."
            meta="4 Module · 20+ Lektionen · Workbook"
          />
          <ProgramCard
            tag="Schlaf-Fokus"
            title="Schlaf & Regeneration"
            description="Tiefschlaf, Abendroutinen, Regeneration – wie du deinen Schlaf als Longevity-Hebel nutzt."
            meta="3 Module · Abendroutinen · Recovery-Protokolle"
          />
          <ProgramCard
            tag="Metabolismus"
            title="Metabolische Gesundheit"
            description="Insulin, Blutzucker, Körperfett & Muskelmasse – verstehe deinen Stoffwechsel und optimiere ihn."
            meta="4 Module · Lab-Werte · Ernährung & Training"
          />
        </div>
      </section>

      {/* SECTION 3 – Für wen? + Q&A kompakter */}
      <section className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2.5fr)] pt-4">
        <div className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Für wen ist die Prime Health Academy?
          </h2>
          <p className="text-sm text-slate-300">
            Für Menschen, die mehr wollen als „ein bisschen fitter werden“ – und
            verstehen möchten, wie sie ihre nächsten Jahrzehnte aktiv gestalten.
          </p>
          <div className="space-y-3 text-sm text-slate-300">
            <Bullet text="Du willst Körper & Gehirn auch mit 50, 60, 70+ noch leistungsfähig halten." />
            <Bullet text="Du magst klare Strukturen, Trainingspläne & Evidenz statt Social-Media-Hacks." />
            <Bullet text="Du willst Training, Ernährung, Schlaf & Mindset als System verstehen – nicht isoliert." />
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 text-sm text-slate-300">
          <h3 className="text-base font-semibold text-slate-50">
            Fragen zu Longevity, Blutwerten oder Training?
          </h3>
          <p className="mt-2">
            Im Q&amp;A-Bereich kannst du konkrete Fragen stellen, Antworten
            nachlesen und von anderen lernen – ohne Fitness-Bullshit-Bingo.
          </p>
          <ul className="mt-4 space-y-1 text-xs">
            <li>• „Welche Blutwerte sollte ich ab 40 regelmäßig prüfen?“</li>
            <li>• „Wie kombiniere ich Krafttraining mit Longevity-Zielen?“</li>
            <li>• „Wie erkenne ich, ob mein Schlaf wirklich erholsam ist?“</li>
          </ul>
          <a
            href="/qa"
            className="mt-4 inline-flex text-xs font-semibold tracking-[0.18em] text-cyan-300 hover:text-cyan-200"
          >
            Zum Q&amp;A-Bereich →
          </a>
        </div>
      </section>
    </>
  );
}

/* Kleine Hilfs-Komponenten unten in der gleichen Datei */

function MetricRow({
  label,
  value,
  barClass,
  width,
}: {
  label: string;
  value: string;
  barClass: string;
  width: string;
}) {
  return (
    <div>
      <div className="flex justify-between">
        <span>{label}</span>
        <span className="font-mono text-cyan-300">{value}</span>
      </div>
      <div className="mt-1 h-1.5 rounded-full bg-slate-800">
        <div className={`h-1.5 rounded-full ${barClass} ${width}`} />
      </div>
    </div>
  );
}

function ProgramCard({
  tag,
  title,
  description,
  meta,
}: {
  tag: string;
  title: string;
  description: string;
  meta: string;
}) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/70 p-5 shadow-sm shadow-slate-950/40">
      <p className="text-[11px] font-semibold tracking-[0.18em] text-cyan-300 uppercase">
        {tag}
      </p>
      <h3 className="mt-2 text-sm font-semibold text-slate-50">{title}</h3>
      <p className="mt-2 text-xs text-slate-300">{description}</p>
      <p className="mt-3 text-[11px] text-slate-400">{meta}</p>
    </article>
  );
}

function Bullet({ text }: { text: string }) {
  return (
    <div className="flex gap-3">
      <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
      <p>{text}</p>
    </div>
  );
}
