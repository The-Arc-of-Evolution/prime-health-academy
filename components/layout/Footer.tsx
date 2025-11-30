// components/layout/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <div className="font-semibold text-slate-200">
            Prime Health Academy
          </div>
          <p className="max-w-md text-[11px] leading-relaxed">
            Longevity- & Performance-Programme für Menschen, die gesund alt
            werden und heute stärker leben wollen.
          </p>
        </div>

        <div className="flex flex-col items-start gap-1 text-[11px] sm:items-end">
          <div className="flex flex-wrap gap-3">
            <Link href="/legal/impressum" className="hover:text-cyan-300">
              Impressum
            </Link>
            <Link href="/legal/datenschutz" className="hover:text-cyan-300">
              Datenschutz
            </Link>
            <Link href="/legal/agb" className="hover:text-cyan-300">
              AGB
            </Link>
            <Link href="/legal/widerruf" className="hover:text-cyan-300">
              Widerruf
            </Link>
          </div>
          <span>© {new Date().getFullYear()} Prime Health Academy.</span>
        </div>
      </div>
    </footer>
  );
}
