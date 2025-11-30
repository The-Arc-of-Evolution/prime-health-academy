// components/home/MissionPreview.tsx

export default function MissionPreview() {
  return (
    <section className="w-full bg-white">
      <div className="pha-container py-10 md:py-14">
        <div className="max-w-3xl text-center mx-auto">
          <h2 className="text-xl font-semibold text-[var(--pha-blue)] md:text-2xl">
            Unsere Mission
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-[var(--pha-muted)]">
            Wir wollen, dass du deine Gesundheit verstehst – und zwar so gut,
            dass du selbstbewusste Entscheidungen für heute und für die nächsten
            Jahrzehnte triffst.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[var(--pha-muted)]">
            Statt schneller Hacks setzen wir auf klare Strukturen, evidenzbasierte
            Inhalte und Praxis. Longevity, die man wirklich leben kann.
          </p>
        </div>
      </div>
    </section>
  );
}
