import Link from "next/link";

function FooterIcon({ type }: { type: "phone" | "mail" | "location" }) {
  if (type === "mail") {
    return (
      <svg viewBox="0 0 24 24" className="h-[14px] w-[14px] text-[var(--color-accent)]" aria-hidden="true">
        <path
          d="M4 7h16v10H4V7Zm0 0 8 6 8-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "location") {
    return (
      <svg viewBox="0 0 24 24" className="h-[14px] w-[14px] text-[var(--color-accent)]" aria-hidden="true">
        <path
          d="M12 21s6-5.4 6-11a6 6 0 1 0-12 0c0 5.6 6 11 6 11Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <circle cx="12" cy="10" r="2.3" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-[14px] w-[14px] text-[var(--color-accent)]" aria-hidden="true">
      <path
        d="M7.5 4.5h3l1.5 3-2 1.8a13.4 13.4 0 0 0 4.7 4.7l1.8-2 3 1.5v3a2 2 0 0 1-2.2 2A15.8 15.8 0 0 1 5.5 6.7 2 2 0 0 1 7.5 4.5Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const footerLinks = [
  { label: "Zalety", href: "/#zalety" },
  { label: "Usługi", href: "/usluga" },
  { label: "Realizacje", href: "/realizacja" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function SiteFooter() {
  return (
    <footer className="bg-[var(--color-bg-dark)] pb-6 pt-14">
      <div className="site-container">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <p className="font-[var(--font-heading)] text-[20px] font-bold leading-[1.2] text-white">
              Wodny Standart
            </p>
            <p className="mt-4 max-w-[220px] text-[13px] leading-[1.6] text-[rgba(255,255,255,0.45)]">
              Inteligentne ciepło dla domu w Krakowie. Montaż, serwis i nowoczesne instalacje
              grzewcze.
            </p>
          </div>

          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.07em] text-[rgba(255,255,255,0.35)]">
              Na skróty
            </p>
            <div className="flex flex-col">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.07em] text-[rgba(255,255,255,0.35)]">
              Kontakt
            </p>
            <div className="space-y-3 text-[rgba(255,255,255,0.6)]">
              <div className="flex items-center gap-3 text-[14px]">
                <FooterIcon type="phone" />
                <a href="tel:+48123456789" className="transition duration-150 ease-in-out hover:text-white">
                  +48 12 345 67 89
                </a>
              </div>
              <div className="flex items-center gap-3 text-[14px]">
                <FooterIcon type="mail" />
                <a
                  href="mailto:biuro@wodnystandart.pl"
                  className="transition duration-150 ease-in-out hover:text-white"
                >
                  biuro@wodnystandart.pl
                </a>
              </div>
              <div className="flex items-center gap-3 text-[14px]">
                <FooterIcon type="location" />
                <span>ul. Wielicka 92, Kraków</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-4 border-t border-[rgba(255,255,255,0.08)] pt-6 text-[12px] text-[rgba(255,255,255,0.3)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 Wodny Standart. Wszelkie prawa zastrzeżone.</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/polityka-prywatnosci" className="transition duration-150 ease-in-out hover:text-white">
              Polityka prywatności
            </Link>
            <Link href="/regulamin" className="transition duration-150 ease-in-out hover:text-white">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
