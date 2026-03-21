"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Zalety", href: "/#zalety" },
  { label: "Usługi", href: "/usluga" },
  { label: "Realizacje", href: "/realizacja" },
  { label: "Kontakt", href: "/#kontakt" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const closeMenu = () => setMobileOpen(false);
    window.addEventListener("resize", closeMenu);

    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 h-16 border-b border-[var(--color-border)] bg-[rgba(245,246,248,0.94)] backdrop-blur-[10px] ${
        scrolled ? "shadow-[0_10px_30px_rgba(15,25,35,0.08)]" : ""
      }`}
    >
      <div className="site-container relative flex h-full items-center justify-between gap-6">
        <Link href="/" className="shrink-0">
          <span className="block font-[var(--font-heading)] text-[18px] font-bold leading-none text-[var(--color-text)]">
            Wodny Standart
          </span>
          <span className="mt-[2px] block text-[10px] uppercase tracking-[0.04em] text-[var(--color-text-muted)]">
            Kraków • Montaż i serwis kotłów
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="tel:+48123456789"
            className="text-[14px] font-medium text-[var(--color-text)] transition-colors duration-200 ease-in-out hover:text-[var(--color-accent)]"
          >
            +48 12 345 67 89
          </a>
          <Link href="/#kontakt" className="button-base button-primary px-5">
            Bezpłatna wycena
          </Link>
        </div>

        <button
          type="button"
          aria-expanded={mobileOpen}
          aria-label="Otwórz menu"
          onClick={() => setMobileOpen((current) => !current)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-[var(--color-border)] bg-[var(--color-bg-card)] text-[var(--color-text)] transition-colors duration-200 ease-in-out hover:border-[var(--color-accent)] md:hidden"
        >
          <span className="sr-only">Menu</span>
          <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
            <path
              d={mobileOpen ? "M6 6l12 12M18 6 6 18" : "M4 7h16M4 12h16M4 17h16"}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
        </button>

        {mobileOpen ? (
          <div className="absolute left-5 right-5 top-[72px] rounded-[8px] border border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 shadow-[0_18px_48px_rgba(15,25,35,0.08)] md:hidden">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="nav-link"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <Link
              href="/#kontakt"
              onClick={() => setMobileOpen(false)}
              className="button-base button-primary mt-6 w-full"
            >
              Bezpłatna wycena
            </Link>
          </div>
        ) : null}
      </div>
    </header>
  );
}
