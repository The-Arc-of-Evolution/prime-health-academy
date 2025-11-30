// components/layout/TopBar.tsx
import Link from "next/link";

const mainNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Über uns" },
  { href: "/courses", label: "Kurse" },
  { href: "/longevity", label: "Longevity" },
  { href: "/qa", label: "Q&A" },
];

export default function TopBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-slate-950/85 backdrop-blur">
      <div className="page-container flex h-16 items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-400/40 bg-cyan-500/10">
            <span className="text-xs font-semibold tracking-[0.18em] text-cyan-300">
              PHA
            </span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight text-slate-50">
              Prime Health Academy
            </div>
            <div className="text-[11px] tracking-[0.18em] text-slate-400">
              Longevity & Performance
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-4 text-sm text-slate-300 md:flex">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-1 transition-colors hover:bg-slate-800/70 hover:text-cyan-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Auth Buttons */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="/auth/login"
            className="text-sm text-slate-300 hover:text-cyan-300"
          >
            Anmelden
          </Link>
          <Link
            href="/auth/register"
            className="rounded-full bg-cyan-500 px-4 py-1.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/30 hover:bg-cyan-400 transition-colors"
          >
            Kostenlos starten
          </Link>
        </div>

        {/* Mobile: nur kurzer Link */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/auth/login"
            className="text-sm font-medium text-slate-200"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  );
}
