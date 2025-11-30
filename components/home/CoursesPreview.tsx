// components/home/CoursesPreview.tsx

const mockCourses = [
  {
    title: "Longevity Fundamentals",
    tag: "Einsteiger",
    focus: "Schlaf • Ernährung • Bewegung",
    length: "4 Module · 20+ Lektionen",
  },
  {
    title: "Schlaf & Regeneration",
    tag: "Schlaf-Fokus",
    focus: "Tiefschlaf · Abendroutinen · Recovery",
    length: "3 Module · Praxisnah",
  },
  {
    title: "Metabolische Gesundheit",
    tag: "Stoffwechsel",
    focus: "Insulin · Blutzucker · Körperfett",
    length: "4 Module · inkl. Workbooks",
  },
];

export default function CoursesPreview() {
  return (
    <section className="w-full bg-white">
      <div className="pha-container py-10 md:py-14">
        <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-xl font-semibold text-[var(--pha-blue)] md:text-2xl">
              Unsere Longevity-Kurse
            </h2>
            <p className="mt-1 text-sm text-[var(--pha-muted)]">
              Klar strukturiert. Wissenschaftlich fundiert. Für deinen Alltag
              gemacht.
            </p>
          </div>
          <a
            href="/courses"
            className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--pha-cyan)] hover:underline"
          >
            Alle Kurse ansehen →
          </a>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {mockCourses.map((course) => (
            <article key={course.title} className="pha-card flex flex-col p-5">
              <span className="mb-2 inline-flex items-center rounded-full bg-[var(--pha-cyan)]/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--pha-cyan)]">
                {course.tag}
              </span>
              <h3 className="text-base font-semibold text-[var(--pha-blue)]">
                {course.title}
              </h3>
              <p className="mt-1 text-xs text-[var(--pha-muted)]">
                {course.focus}
              </p>
              <p className="mt-4 text-[11px] font-medium text-[var(--pha-muted)]">
                {course.length}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
