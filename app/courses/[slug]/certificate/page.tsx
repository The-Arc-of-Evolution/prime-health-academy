// app/courses/[slug]/certificate/page.tsx

type CertificatePageProps = {
  params: {
    slug: string;
  };
};

export default function CourseCertificatePage({ params }: CertificatePageProps) {
  const { slug } = params;

  return (
    <section className="max-w-xl space-y-4">
      <h1 className="text-2xl sm:text-3xl font-semibold">
        Zertifikat für {slug}
      </h1>
      <p className="text-base text-slate-300 leading-relaxed">
        Hier wird später dein persönliches Kurs-Zertifikat angezeigt 
        und als PDF zum Download bereitgestellt. 
        Die Seite ist dafür gedacht, nach abgeschlossenem Kurs & 
        bestandenem Quiz automatisch erreichbar zu sein.
      </p>
      <p className="text-sm text-slate-400">
        Aktuell ist dies eine Platzhalter-Seite, damit die Route 
        funktioniert und der Build sauber durchläuft.
      </p>
    </section>
  );
}
