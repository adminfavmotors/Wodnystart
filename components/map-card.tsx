export function MapCard() {
  return (
    <div className="section-shell map-pattern relative overflow-hidden rounded-[28px] p-6 sm:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.08),transparent_45%)]" />
      <div className="relative flex h-full min-h-[360px] flex-col justify-between">
        <div className="max-w-md">
          <p className="mb-2 text-sm uppercase tracking-[0.24em] text-sky-300/80">Lokalizacja</p>
          <h3 className="font-[var(--font-heading)] text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Jesteśmy blisko i reagujemy szybko
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300 sm:text-base">
            Obsługujemy Kraków i okolice. Dojazd, szybka diagnoza i uporządkowana realizacja to nasz
            standard pracy.
          </p>
        </div>

        <div className="relative mt-12 rounded-[28px] border border-white/10 bg-slate-950/45 p-5 backdrop-blur">
          <div className="absolute left-[58%] top-[42%] flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-sky-500/25">
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-sky-400 shadow-[0_0_30px_rgba(56,189,248,0.75)]" />
          </div>
          <div className="grid gap-3 text-sm text-slate-300">
            <p className="font-semibold text-white">ul. Wielicka 92, 30-552 Kraków</p>
            <p>Pon – Pt: 8:00 – 20:00</p>
            <p>Serwis awaryjny: 24/7</p>
            <a
              href="https://maps.google.com/?q=ul.+Wielicka+92,+30-552+Krak%C3%B3w"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-fit rounded-full border border-white/10 px-4 py-2 text-white transition hover:border-sky-400/40"
            >
              Otwórz trasę w Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
