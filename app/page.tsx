import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "../components/contact-form";
import { CookieBanner } from "../components/cookie-banner";
import { MapCard } from "../components/map-card";
import { Reveal } from "../components/reveal";
import { ShowcaseSlider } from "../components/showcase-slider";
import { SiteHeader } from "../components/site-header";

const heroStats = [
  { value: "4.9/5", label: "na Google" },
  { value: "15 min", label: "oddzwaniamy zwykle" },
  { value: "24/7", label: "serwis awaryjny" },
];

const stripStats = [
  { value: "20", unit: "+", label: "lat doświadczenia\nw instalacjach" },
  { value: "45", unit: "min", label: "średni czas reakcji\nw Krakowie" },
  { value: "4.9", unit: "/5", label: "średnia ocen\nod klientów" },
  { value: "10", unit: "lat", label: "gwarancji na\nwybrane realizacje" },
];

const benefits = [
  {
    title: "20 Lat Doświadczenia",
    description:
      "Dwie dekady praktyki w montażu, modernizacji i serwisie instalacji grzewczych w Krakowie.",
    icon: "shield",
  },
  {
    title: "Ekspresowy Serwis",
    description:
      "Szybko reagujemy na zgłoszenia i pomagamy także w nagłych awariach poza standardowym grafikiem.",
    icon: "lightning",
  },
  {
    title: "Gwarancja 10 Lat",
    description:
      "Pracujemy na sprawdzonych rozwiązaniach i dobieramy urządzenia tak, aby służyły bezproblemowo przez lata.",
    icon: "medal",
  },
  {
    title: "Czysty Montaż",
    description:
      "Dbamy o estetykę wykonania, porządek po pracy i przejrzysty układ całej kotłowni.",
    icon: "check",
  },
];

const services = [
  {
    category: "Montaż",
    title: "Montaż kotła gazowego",
    description: "Kompleksowa instalacja, próba szczelności i pierwsze uruchomienie urządzenia.",
    price: "1 800 PLN",
    href: "/usluga",
  },
  {
    category: "Serwis",
    title: "Przegląd okresowy",
    description: "Diagnostyka, czyszczenie i regulacja pracy kotła dla bezpiecznej eksploatacji.",
    price: "350 PLN",
    href: "/usluga",
  },
  {
    category: "OZE",
    title: "Instalacja pompy ciepła",
    description:
      "Dobór systemu, montaż i wsparcie przy przygotowaniu inwestycji oraz formalności.",
    price: "14 000 PLN",
    href: "/usluga",
  },
  {
    category: "Serwis awaryjny",
    title: "Pogotowie gazowe 24/7",
    description:
      "Natychmiastowa reakcja przy awarii, wycieku lub nagłym zatrzymaniu instalacji grzewczej.",
    price: "250 PLN",
    emergency: true,
    href: "/usluga",
  },
];

const showcases = [
  {
    title: "Nowa kotłownia dla domu jednorodzinnego",
    meta: "2026 · Kraków, Podgórze",
    timeline: "Realizacja: 3 dni robocze",
    before:
      "Stara kotłownia była ciasna, chaotyczna i utrudniała bezpieczny dostęp do urządzeń podczas codziennego użytkowania oraz serwisu.",
    after:
      "Nowy układ instalacji uporządkował przestrzeń, poprawił estetykę i pozwolił na wygodny dostęp serwisowy bez zbędnego bałaganu.",
    beforeImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=900&q=80",
    href: "/realizacja",
  },
];

const reviews = [
  {
    text:
      "Szybka reakcja, fachowe wykonanie i pełna czystość po robocie. Kotłownia wygląda jak z katalogu. Polecam bez zastrzeżeń.",
    author: "Marek W.",
    area: "Kraków, Nowa Huta",
    source: "Google Maps",
  },
  {
    text:
      "Awaria w piątek wieczorem — technik był u nas w 40 minut. Problem rozwiązany tego samego dnia. Rozsądna cena za pogotowie.",
    author: "Agnieszka K.",
    area: "Kraków, Podgórze",
    source: "Google Maps",
  },
  {
    text:
      "Wymiana kotła na pompę ciepła zrealizowana w 3 dni, bez chaosu i niespodzianek. Dofinansowanie dopięte razem z ekipą.",
    author: "Piotr i Monika R.",
    area: "Kraków, Bieżanów",
    source: "Google Maps",
  },
];

const footerLinks = [
  { label: "Zalety", href: "#zalety" },
  { label: "Usługi", href: "#uslugi" },
  { label: "Realizacje", href: "#realizacje" },
  { label: "Kontakt", href: "#kontakt" },
];

function BenefitIcon({ type }: { type: string }) {
  if (type === "shield") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <path
          d="M12 2 5 5v6c0 4.7 2.8 8.2 7 10 4.2-1.8 7-5.3 7-10V5l-7-3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  if (type === "lightning") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
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

  if (type === "medal") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
        <circle cx="12" cy="9" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
        <path
          d="M9 13.5 7.5 21l4.5-2.5 4.5 2.5-1.5-7.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="m8.5 12 2.2 2.2 4.8-4.8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactInfoIcon({ type }: { type: "clock" | "service" | "location" | "phone" | "mail" }) {
  if (type === "clock") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[var(--color-accent)]" aria-hidden="true">
        <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="1.8" />
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

  if (type === "service") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[var(--color-orange)]" aria-hidden="true">
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

  if (type === "location") {
    return (
      <svg viewBox="0 0 24 24" className="h-5 w-5 text-[var(--color-accent)]" aria-hidden="true">
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

export default function HomePage() {
  return (
    <main className="bg-[var(--color-bg)]">
      <SiteHeader />

      <section className="bg-[var(--color-bg)] pb-[72px] pt-[24px]">
        <div className="site-container grid items-center gap-10 lg:grid-cols-[55fr_45fr]">
          <Reveal className="max-w-[620px]">
            <h1 className="font-[var(--font-heading)] text-[60px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-text)] max-md:text-[42px]">
              Inteligentne ciepło dla Twojego domu
            </h1>
            <p className="mt-4 max-w-[460px] text-[16px] font-light leading-[1.7] text-[var(--color-text-muted)]">
              Profesjonalny montaż i serwis kotłów w Krakowie — ponad 20 lat doświadczenia.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#kontakt" className="button-base button-primary px-7 py-[14px]">
                Bezpłatna wycena w 2 godz. →
              </a>
              <a href="tel:+48123456789" className="button-base button-secondary px-6 py-[14px]">
                Zadzwoń teraz
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-2">
              {heroStats.map((stat, index) => (
                <div key={stat.label} className="flex items-center gap-2">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[13px] font-medium leading-[1.5] text-[var(--color-accent)]">
                      {stat.value}
                    </span>
                    <span className="text-[13px] font-light leading-[1.5] text-[var(--color-text-muted)]">
                      {stat.label}
                    </span>
                  </div>
                  {index < heroStats.length - 1 ? (
                    <span className="text-[13px] leading-[1.5] text-[var(--color-border)]">·</span>
                  ) : null}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="overflow-hidden rounded-[8px] border border-[var(--color-border)] bg-[var(--color-bg-card)]">
              <div className="relative aspect-[16/9] min-h-[460px] max-md:min-h-0">
                <Image
                  src="/images/hero-technician.jpg"
                  alt="Technik Wodny Standart przy instalacji grzewczej"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-bg-dark)] py-12">
        <div className="site-container">
          <div className="grid grid-cols-2 overflow-hidden rounded-[8px] border border-[rgba(255,255,255,0.08)] md:grid-cols-4">
            {stripStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex flex-col items-center justify-center px-5 py-7 text-center ${
                  index === 1
                    ? "border-l border-[rgba(255,255,255,0.1)] md:border-l"
                    : index === 2
                      ? "border-t border-[rgba(255,255,255,0.1)] md:border-l md:border-t-0"
                      : index === 3
                        ? "border-l border-t border-[rgba(255,255,255,0.1)] md:border-l md:border-t-0"
                        : ""
                }`}
              >
                <div className="flex items-end gap-1">
                  <span className="font-[var(--font-heading)] text-[56px] font-bold leading-none text-white">
                    {stat.value}
                  </span>
                  <span className="pb-2 font-[var(--font-heading)] text-[20px] font-light leading-none text-[rgba(255,255,255,0.5)]">
                    {stat.unit}
                  </span>
                </div>
                <p className="mt-2 max-w-[140px] whitespace-pre-line text-[13px] font-light leading-[1.5] text-[rgba(255,255,255,0.55)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="zalety" className="bg-[var(--color-bg-alt)] pb-[72px] pt-[56px]">
        <div className="site-container">
          <Reveal className="max-w-[680px]">
            <h2 className="section-title">Dlaczego klienci nam ufają</h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={0.08 * index}>
                <div className="card-surface h-full p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                    <BenefitIcon type={benefit.icon} />
                  </div>
                  <h3 className="card-title mt-4">{benefit.title}</h3>
                  <p className="card-copy mt-2">{benefit.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg)] py-6">
        <div className="site-container flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <p className="text-[11px] uppercase tracking-[0.07em] text-[var(--color-text-muted)]">
            Autoryzowany partner:
          </p>
          <div className="flex flex-wrap items-center gap-4 text-[var(--color-text)]">
            <span className="font-[var(--font-heading)] text-[20px] font-bold tracking-[0.04em] opacity-45 transition duration-200 ease-in-out hover:opacity-80">
              VIESSMANN
            </span>
            <span className="text-[var(--color-border)]">/</span>
            <span className="font-[var(--font-heading)] text-[20px] font-bold tracking-[0.04em] opacity-45 transition duration-200 ease-in-out hover:opacity-80">
              VAILLANT
            </span>
            <span className="text-[var(--color-border)]">/</span>
            <span className="font-[var(--font-heading)] text-[16px] font-bold tracking-[0.04em] opacity-45 transition duration-200 ease-in-out hover:opacity-80">
              WORCESTER BOSCH
            </span>
          </div>
        </div>
      </section>

      <section id="uslugi" className="bg-[var(--color-bg)] pb-14 pt-14">
        <div className="site-container">
          <Reveal className="max-w-[720px]">
            <h2 className="section-title">Usługi i ceny</h2>
            <p className="section-subtitle">
              Przejrzyste stawki startowe — bez ukrytych kosztów. Dokładna wycena po bezpłatnej
              konsultacji.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={0.08 * index}>
                <div
                  className={`card-surface card-hover flex h-full flex-col p-6 ${
                    service.emergency ? "border-l-[3px] border-l-[var(--color-orange)]" : ""
                  }`}
                >
                  <span
                    className={`inline-block rounded-[4px] px-[10px] py-[3px] text-[10px] uppercase tracking-[0.07em] ${
                      service.emergency
                        ? "bg-[rgba(224,106,27,0.1)] text-[var(--color-orange)]"
                        : "bg-[var(--color-accent-light)] text-[var(--color-accent)]"
                    }`}
                  >
                    {service.category}
                  </span>
                  <h3 className="card-title mt-3">
                    <Link
                      href={service.href}
                      className="transition duration-200 ease-in-out hover:text-[var(--color-accent)]"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="card-copy mt-2">{service.description}</p>

                  <div className="my-5 border-t border-[var(--color-border)]" />

                  <div className="mt-auto flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="price-label">Cena od</p>
                      <p
                        className={`price-value ${
                          service.emergency ? "text-[var(--color-orange)]" : ""
                        }`}
                      >
                        {service.price}
                      </p>
                    </div>
                    <Link
                      href={service.href}
                      className="button-base button-secondary px-4 py-[10px] text-[12px]"
                    >
                      Zobacz usługę
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="realizacje" className="bg-[var(--color-bg-alt)] pb-[72px] pt-[56px]">
        <div className="site-container">
          <Reveal>
            <ShowcaseSlider items={showcases} />
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-bg-dark)] pb-16 pt-12">
        <div className="site-container">
          <Reveal className="max-w-[720px]">
            <h2 className="section-title section-title-dark">Co mówią nasi klienci</h2>
            <p className="mt-3 text-[14px] leading-[1.5] text-[rgba(255,255,255,0.55)]">
              Ponad 280 opinii na Google. Średnia 4.9/5.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <Reveal key={review.author} delay={0.08 * index}>
                <div className="flex h-full flex-col rounded-[8px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.06)] p-6">
                  <p className="text-[16px] leading-none text-[#F59E0B]">★★★★★</p>
                  <p className="mt-3 text-[15px] font-light leading-[1.65] text-[rgba(255,255,255,0.8)]">
                    “{review.text}”
                  </p>
                  <div className="my-4 border-t border-[rgba(255,255,255,0.08)]" />
                  <div className="mt-auto">
                    <p className="text-[14px] font-medium leading-[1.5] text-white">{review.author}</p>
                    <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[12px] leading-[1.5] text-[rgba(255,255,255,0.42)]">
                      <span>{review.area}</span>
                      <span>{review.source}</span>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <a
            href="https://maps.google.com/"
            target="_blank"
            rel="noreferrer"
            className="button-base button-secondary-dark mx-auto mt-10 flex w-fit"
          >
            Zobacz wszystkie opinie na Google Maps →
          </a>
        </div>
      </section>

      <section id="kontakt" className="site-section bg-[var(--color-bg-alt)]">
        <div className="site-container">
          <div className="grid gap-6 lg:grid-cols-[40fr_60fr] lg:items-start">
            <Reveal>
              <div className="max-w-[420px]">
                <h2 className="font-[var(--font-heading)] text-[28px] font-bold leading-[1.2] text-[var(--color-text)]">
                  Odpowiemy szybko i konkretnie
                </h2>
                <p className="mt-4 text-[15px] font-light leading-[1.7] text-[var(--color-text-muted)]">
                  Zostaw numer — oddzwaniamy zwykle jeszcze tego samego dnia w godzinach pracy.
                </p>

                <div className="mt-7 space-y-5">
                  <div className="flex items-start gap-3">
                    <ContactInfoIcon type="clock" />
                    <p className="text-[14px] leading-[1.6] text-[var(--color-text)]">
                      Pon–Pt, 8:00–20:00
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ContactInfoIcon type="service" />
                    <p className="text-[14px] leading-[1.6] text-[var(--color-text)]">
                      Awaria? Serwis całą dobę, 7 dni w tygodniu
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <ContactInfoIcon type="location" />
                    <p className="text-[14px] leading-[1.6] text-[var(--color-text)]">
                      ul. Wielicka 92, 30-552 Kraków
                    </p>
                  </div>
                </div>

                <a
                  href="tel:+48123456789"
                  className="mt-6 inline-block font-[var(--font-heading)] text-[24px] font-bold leading-[1.2] text-[var(--color-accent)]"
                >
                  +48 12 345 67 89
                </a>
              </div>
            </Reveal>

            <div className="space-y-5">
              <Reveal delay={0.08}>
                <ContactForm />
              </Reveal>
              <Reveal delay={0.16}>
                <MapCard />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

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
                  <a key={link.href} href={link.href} className="footer-link">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.07em] text-[rgba(255,255,255,0.35)]">
                Kontakt
              </p>
              <div className="space-y-3 text-[rgba(255,255,255,0.6)]">
                <div className="flex items-center gap-3 text-[14px]">
                  <ContactInfoIcon type="phone" />
                  <a
                    href="tel:+48123456789"
                    className="transition duration-150 ease-in-out hover:text-white"
                  >
                    +48 12 345 67 89
                  </a>
                </div>
                <div className="flex items-center gap-3 text-[14px]">
                  <ContactInfoIcon type="mail" />
                  <a
                    href="mailto:biuro@wodnystandart.pl"
                    className="transition duration-150 ease-in-out hover:text-white"
                  >
                    biuro@wodnystandart.pl
                  </a>
                </div>
                <div className="flex items-center gap-3 text-[14px]">
                  <ContactInfoIcon type="location" />
                  <span>ul. Wielicka 92, Kraków</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 border-t border-[rgba(255,255,255,0.08)] pt-6 text-[12px] text-[rgba(255,255,255,0.3)] md:flex-row md:items-center md:justify-between">
            <p>© 2026 Wodny Standart. Wszelkie prawa zastrzeżone.</p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/polityka-prywatnosci"
                className="transition duration-150 ease-in-out hover:text-white"
              >
                Polityka prywatności
              </Link>
              <Link href="/regulamin" className="transition duration-150 ease-in-out hover:text-white">
                Regulamin
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <CookieBanner />
    </main>
  );
}
