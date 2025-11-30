// app/auth/register/page.tsx

export default function RegisterPage() {
  return (
    <section className="max-w-md mx-auto space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl sm:text-3xl font-semibold">
          Konto erstellen
        </h1>
        <p className="text-sm sm:text-base text-slate-300">
          Erstelle dein Prime-Health-Konto, um Kurse zu starten,
          Fortschritte zu speichern und Zertifikate zu erhalten.
        </p>
      </div>

      <form className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-sm shadow-slate-950/40">
        <div className="space-y-1">
          <label
            htmlFor="name"
            className="text-sm font-medium text-slate-200"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            placeholder="Dein Name"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="email"
            className="text-sm font-medium text-slate-200"
          >
            E-Mail
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            placeholder="du@example.com"
          />
        </div>

        <div className="space-y-1">
          <label
            htmlFor="password"
            className="text-sm font-medium text-slate-200"
          >
            Passwort
          </label>
          <input
            id="password"
            type="password"
            className="w-full rounded-lg border border-slate-700 bg-slate-950/70 px-3 py-2 text-sm text-slate-100 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            placeholder="••••••••"
          />
        </div>

        <button
          type="button"
          className="w-full rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950 shadow-md shadow-cyan-500/40 hover:bg-cyan-400 transition-colors"
        >
          Konto erstellen
        </button>

        <p className="pt-1 text-xs text-center text-slate-400">
          Registrierung ist aktuell nur als Demo-Layout angelegt.
          Die echte Registrierung folgt mit Supabase Auth.
        </p>
      </form>
    </section>
  );
}
