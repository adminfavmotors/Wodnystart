function InfoIcon({ type }: { type: "address" | "hours" | "service" }) {
  if (type === "address") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-[var(--color-accent)]"
        aria-hidden="true"
      >
        <path
          d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle
          cx="12"
          cy="10"
          r="2.3"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (type === "hours") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-[var(--color-accent)]"
        aria-hidden="true"
      >
        <circle
          cx="12"
          cy="12"
          r="8"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M12 8v4l2.5 2.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-[var(--color-accent)]"
      aria-hidden="true"
    >
      <path
        d="M13 2 6 13h5l-1 9 8-12h-5l0-8Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function MapCard() {
  return (
    <div className="contact-panel overflow-hidden p-6">
      <div className="mb-5">
        <h3 className="font-[var(--font-heading)] text-[24px] font-bold leading-[1.2] text-[var(--color-text)]">
          Jesteśmy blisko i reagujemy szybko
        </h3>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
          <div className="flex items-start gap-3">
            <InfoIcon type="address" />
            <div>
              <p className="text-[14px] leading-[1.5] text-[var(--color-text)]">
                ul. Wielicka 92, 30-552 Kraków
              </p>
              <p className="mt-1 text-[13px] leading-[1.5] text-[var(--color-text-muted)]">
                Nasze biuro i punkt obsługi klientów
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
          <div className="flex items-start gap-3">
            <InfoIcon type="hours" />
            <div>
              <p className="text-[14px] leading-[1.5] text-[var(--color-text)]">
                Pon-Pt, 8:00-20:00
              </p>
              <p className="mt-1 text-[13px] leading-[1.5] text-[var(--color-text-muted)]">
                Konsultacje i wyceny w godzinach pracy
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
          <div className="flex items-start gap-3">
            <InfoIcon type="service" />
            <div>
              <p className="text-[14px] leading-[1.5] text-[var(--color-text)]">
                Awaria? Serwis całą dobę, 7 dni w tygodniu
              </p>
              <p className="mt-1 text-[13px] leading-[1.5] text-[var(--color-text-muted)]">
                Wyjazdy awaryjne na terenie Krakowa i okolic
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="https://maps.google.com/?q=ul.+Wielicka+92,+30-552+Krak%C3%B3w"
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex text-[14px] leading-[1.5] text-[var(--color-accent)] underline transition duration-200 ease-in-out hover:text-[var(--color-accent-hover)]"
      >
        Otwórz trasę w Google Maps
      </a>
    </div>
  );
}
