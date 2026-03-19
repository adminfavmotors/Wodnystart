"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Zalety", href: "#zalety" },
  { label: "Usługi", href: "#uslugi" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Kontakt", href: "#kontakt" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "glass-panel border-white/12"
            : "border border-transparent bg-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/12 bg-white/6">
            <svg viewBox="0 0 40 40" className="h-6 w-6 text-white" aria-hidden="true">
              <path
                d="M20 3 8 8v10c0 9.7 5.8 15.7 12 19 6.2-3.3 12-9.3 12-19V8L20 3Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M22.8 10.8c-4.6 3.8-7.7 8.5-8.2 12.7-.4 3.2 1.4 5.7 4.5 5.7 4.1 0 7.8-3.6 7.8-8.2 0-2.8-1.3-4.5-2.8-5.8-.9-.8-1.5-2-1.3-4.4Z"
                fill="currentColor"
                opacity="0.95"
              />
            </svg>
          </div>
          <div className="leading-none">
            <p className="font-[var(--font-heading)] text-base font-bold tracking-tight text-white">
              Wodny Standart
            </p>
            <p className="text-xs text-[var(--muted)]">Kraków • Montaż i serwis kotłów</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-200 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="tel:+48123456789"
            className="hidden rounded-full px-4 py-2 text-sm text-slate-200 transition hover:text-white sm:inline-flex"
          >
            +48 12 345 67 89
          </a>
          <a
            href="#kontakt"
            className="cta-primary inline-flex rounded-full px-4 py-2.5 text-sm font-semibold transition"
          >
            Bezpłatna wycena
          </a>
        </div>
      </div>
    </header>
  );
}
