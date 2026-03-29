import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "../components/contact-form";
import { CookieBanner } from "../components/cookie-banner";
import { MapCard } from "../components/map-card";
import { Reveal } from "../components/reveal";
import { ShowcaseSlider } from "../components/showcase-slider";
import { SiteFooter } from "../components/site-footer";
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
    title: "20 lat doświadczenia",
    description:
      "Dwie dekady praktyki w montażu, modernizacji i serwisie instalacji grzewczych w Krakowie.",
    icon: "shield",
  },
  {
    title: "Ekspresowy serwis",
    description:
      "Szybko reagujemy na zgłoszenia i pomagamy także w nagłych awariach poza standardowym grafikiem.",
    icon: "lightning",
  },
  {
    title: "Gwarancja 10 lat",
    description:
      "Pracujemy na sprawdzonych rozwiązaniach i dobieramy urządzenia tak, aby służyły bezproblemowo przez lata.",
    icon: "medal",
  },
  {
    title: "Czysty montaż",
    description:
      "Dbamy o estetykę wykonania, porządek po pracy i przejrzysty układ całej kotłowni.",
    icon: "check",
  },
];

const services = [
  {
    title: "Montaż kotła gazowego",
    description:
      "Kompleksowa instalacja, próba szczelności i pierwsze uruchomienie urządzenia.",
    audience:
      "Dla domu po wymianie starego źródła ciepła lub nowej instalacji.",
    highlights: [
      "Dobór miejsca montażu i podłączeń",
      "Próba szczelności oraz uruchomienie",
      "Instrukcja obsługi i dokumentacja dla klienta",
    ],
    note: "Najlepszy wybór, jeśli chcesz zamknąć temat montażu w jednym terminie.",
    price: "1 800 PLN",
    href: "/usluga",
    ctaLabel: "Umów wycenę montażu",
  },
  {
    title: "Przegląd okresowy",
    description:
      "Diagnostyka, czyszczenie i regulacja pracy kotła dla bezpiecznej eksploatacji.",
    audience:
      "Dla właścicieli kotłów, którzy chcą uniknąć awarii w sezonie grzewczym.",
    highlights: [
      "Czyszczenie i kontrola podzespołów",
      "Sprawdzenie parametrów pracy urządzenia",
      "Wskazanie usterek i zaleceń serwisowych",
    ],
    note: "Regularny przegląd zwykle kosztuje mniej niż jeden nieplanowany wyjazd awaryjny.",
    price: "350 PLN",
    href: "/usluga",
    ctaLabel: "Zarezerwuj przegląd",
  },
  {
    title: "Instalacja pompy ciepła",
    description:
      "Dobór systemu, montaż i wsparcie przy przygotowaniu inwestycji oraz formalności.",
    audience:
      "Dla domów modernizowanych lub nowych inwestycji nastawionych na niższe koszty eksploatacji.",
    highlights: [
      "Dobór mocy do realnego zapotrzebowania",
      "Montaż i konfiguracja całego układu",
      "Wsparcie przy przygotowaniu inwestycji",
    ],
    note: "Dobra opcja, jeśli chcesz połączyć komfort obsługi z niższym zużyciem energii.",
    price: "14 000 PLN",
    href: "/usluga",
    ctaLabel: "Sprawdź pompę ciepła",
  },
  {
    title: "Pogotowie gazowe 24/7",
    description:
      "Natychmiastowa reakcja przy awarii, wycieku lub nagłym zatrzymaniu instalacji grzewczej.",
    audience:
      "Dla sytuacji, w których nie można czekać do kolejnego dnia roboczego.",
    highlights: [
      "Kontakt telefoniczny bez pośredników",
      "Szybka diagnostyka i zabezpieczenie instalacji",
      "Możliwość naprawy na miejscu lub plan dalszych działań",
    ],
    note: "W przypadku awarii liczy się czas reakcji i konkretna diagnoza już przy pierwszym kontakcie.",
    price: "250 PLN",
    emergency: true,
    href: "/usluga",
    ctaLabel: "Zobacz tryb awaryjny",
  },
];

const showcases = [
  {
    title: "Nowa kotłownia dla domu jednorodzinnego",
    meta: "2026 • Kraków, Podgórze",
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
    text: "Szybka reakcja, fachowe wykonanie i pełna czystość po robocie. Kotłownia wygląda jak z katalogu. Polecam bez zastrzeżeń.",
    author: "Marek W.",
    area: "Kraków, Nowa Huta",
    source: "Google Maps",
  },
  {
    text: "Awaria w piątek wieczorem - technik był u nas w 40 minut. Problem rozwiązany tego samego dnia. Rozsądna cena za pogotowie.",
    author: "Agnieszka K.",
    area: "Kraków, Podgórze",
    source: "Google Maps",
  },
  {
    text: "Wymiana kotła na pompę ciepła zrealizowana w 3 dni, bez chaosu i niespodzianek. Dofinansowanie dopięte razem z ekipą.",
    author: "Piotr i Monika R.",
    area: "Kraków, Bieżanów",
    source: "Google Maps",
  },
];

const reviewHighlights = [
  { value: "280+", label: "opinii na Google" },
  { value: "4.9/5", label: "średnia ocen klientów" },
  { value: "24/7", label: "wyjazdy awaryjne" },
];

const contactDetails = [
  {
    type: "clock" as const,
    title: "Oddzwaniamy zwykle tego samego dnia",
    copy: "W godzinach pracy szybko wracamy z informacją o terminie, zakresie i wstępnej wycenie.",
  },
  {
    type: "service" as const,
    title: "Awaria? Działamy całodobowo",
    copy: "W trybie pilnym przyjmujemy zgłoszenia 24/7 na terenie Krakowa i najbliższych okolic.",
  },
  {
    type: "location" as const,
    title: "Biuro i obsługa w Krakowie",
    copy: "Pracujemy lokalnie, dlatego łatwiej umawiamy wizję, serwis i późniejszą opiekę nad instalacją.",
  },
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
        <circle
          cx="12"
          cy="9"
          r="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
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
      <circle
        cx="12"
        cy="12"
        r="8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
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

function ServiceFeatureIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
      <path
        d="m6.5 12.5 3.1 3.1L17.5 8"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ContactInfoIcon({
  type,
}: {
  type: "clock" | "service" | "location" | "phone" | "mail";
}) {
  if (type === "clock") {
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

  if (type === "service") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-[var(--color-orange)]"
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

  if (type === "location") {
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

  if (type === "mail") {
    return (
      <svg
        viewBox="0 0 24 24"
        className="h-[14px] w-[14px] text-[var(--color-accent)]"
        aria-hidden="true"
      >
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
    <svg
      viewBox="0 0 24 24"
      className="h-[14px] w-[14px] text-[var(--color-accent)]"
      aria-hidden="true"
    >
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

      <section className="hero-section">
        <div className="site-container">
          <div className="hero-shell">
            <Reveal className="hero-copy">
              <div className="hero-kicker">
                Kraków i okolice
                <span className="h-1 w-1 rounded-full bg-[var(--color-accent)]" />
                Montaż i serwis instalacji grzewczych
              </div>
              <h1 className="hero-title">
                Montaż i serwis kotłów oraz pomp ciepła w Krakowie
              </h1>
              <p className="hero-lead mt-5">
                Projektujemy, montujemy i serwisujemy instalacje grzewcze dla
                domów i modernizowanych kotłowni. Bez przypadkowych wycen, bez
                chaosu na budowie i z szybkim kontaktem, gdy liczy się czas.
              </p>

              <div className="hero-actions">
                <a
                  href="#kontakt"
                  className="button-base button-primary px-7 py-[15px]"
                >
                  Umów bezpłatną wycenę
                </a>
                <a
                  href="tel:+48123456789"
                  className="button-base button-urgent px-6 py-[15px]"
                >
                  Awaria? Zadzwoń 24/7
                </a>
              </div>

              <div className="hero-meta">
                <span>Pon-Pt 8:00-20:00</span>
                <span className="text-[var(--color-border)]">•</span>
                <span>Obsługa Krakowa i okolic</span>
                <span className="text-[var(--color-border)]">•</span>
                <span>Autoryzowane marki i pełna dokumentacja</span>
              </div>

              <div className="hero-proof-row mt-8">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="hero-proof-inline">
                    <p className="hero-proof-inline-value">{stat.value}</p>
                    <p className="hero-proof-inline-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal className="hero-visual" delay={0.08}>
              <div className="hero-media-frame">
                <div className="hero-media-art">
                  <Image
                    src="/images/hero-technician.jpg"
                    alt="Technik Wodny Standart przy instalacji grzewczej"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="hero-media-overlay" />
                  <div className="hero-media-badge">
                    <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-orange)]" />
                    Szybki dojazd na terenie Krakowa
                  </div>
                  <div className="hero-media-caption">
                    <p className="hero-media-caption-title">
                      Od pierwszego telefonu do uruchomienia instalacji
                    </p>
                    <p className="hero-media-caption-copy">
                      Montaż, serwis i interwencje awaryjne organizujemy bez
                      pośredników i bez przeciągania kontaktu.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
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

      <section
        id="zalety"
        className="bg-[var(--color-bg-alt)] pb-[72px] pt-[56px]"
      >
        <div className="site-container">
          <Reveal className="max-w-[680px]">
            <h2 className="section-title section-title-surface">
              Dlaczego klienci nam ufają
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit, index) => (
              <Reveal key={benefit.title} delay={0.08 * index}>
                <div className="benefit-card h-full p-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[var(--color-accent-light)] text-[var(--color-accent)]">
                    <BenefitIcon type={benefit.icon} />
                  </div>
                  <h3 className="benefit-card-title mt-4">{benefit.title}</h3>
                  <p className="benefit-card-copy mt-2">
                    {benefit.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-bg)] py-6">
        <div className="site-container partner-strip">
          <p className="partner-label">Autoryzowany partner:</p>
          <div className="partner-brands">
            <span className="partner-brand">VIESSMANN</span>
            <span className="partner-separator">/</span>
            <span className="partner-brand">VAILLANT</span>
            <span className="partner-separator">/</span>
            <span className="partner-brand partner-brand-compact">
              WORCESTER BOSCH
            </span>
          </div>
        </div>
      </section>

      <section id="uslugi" className="bg-[var(--color-bg)] pb-14 pt-14">
        <div className="site-container">
          <Reveal className="max-w-[720px]">
            <h2 className="section-title section-title-surface">
              Usługi i ceny
            </h2>
            <p className="section-subtitle">
              Każda karta pokazuje nie tylko cenę startową, ale też kiedy dana
              usługa ma sens, co zwykle wchodzi w zakres i jak najlepiej zacząć
              kontakt.
            </p>
          </Reveal>

          <Reveal delay={0.04}>
            <div className="service-conversion-note mt-6">
              <p className="service-conversion-copy">
                Nie wiesz, którą usługę wybrać? Zostaw numer w formularzu albo
                zadzwoń. Po krótkiej rozmowie wskażemy właściwy zakres prac i
                przygotujemy realną wycenę.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {services.map((service, index) => (
              <Reveal key={service.title} delay={0.08 * index}>
                <div
                  className={`service-card flex h-full flex-col p-6 ${
                    service.emergency
                      ? "border-l-[3px] border-l-[var(--color-orange)]"
                      : ""
                  }`}
                >
                  <h3 className="service-card-title">
                    <Link
                      href={service.href}
                      className="transition duration-200 ease-in-out hover:text-[var(--color-accent)]"
                    >
                      {service.title}
                    </Link>
                  </h3>
                  <p className="service-card-copy mt-2">
                    {service.description}
                  </p>
                  <p className="service-card-audience mt-4">
                    {service.audience}
                  </p>

                  <div className="service-feature-list mt-5">
                    {service.highlights.map((highlight) => (
                      <div key={highlight} className="service-feature-item">
                        <span className="service-feature-icon">
                          <ServiceFeatureIcon />
                        </span>
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  <p className="service-card-note mt-5">{service.note}</p>

                  <div className="my-5 border-t border-[var(--color-border)]" />

                  <div className="mt-auto flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="service-price-label">Cena od</p>
                      <p
                        className={`service-price-value ${
                          service.emergency ? "text-[var(--color-orange)]" : ""
                        }`}
                      >
                        {service.price}
                      </p>
                    </div>
                    <Link
                      href={service.href}
                      className={`button-base px-4 py-[10px] text-[12px] ${
                        service.emergency ? "button-urgent" : "button-secondary"
                      }`}
                    >
                      {service.ctaLabel}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="realizacje"
        className="bg-[var(--color-bg-alt)] pb-[72px] pt-[56px]"
      >
        <div className="site-container">
          <Reveal>
            <ShowcaseSlider items={showcases} />
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-bg-dark)] pb-16 pt-12">
        <div className="site-container">
          <div className="reviews-shell">
            <Reveal className="max-w-[720px]">
              <h2 className="section-title section-title-dark section-title-surface section-title-surface-dark">
                Co mówią nasi klienci
              </h2>
              <p className="dark-subtitle mt-4 max-w-[560px] text-[15px] leading-[1.7]">
                Opinie pokazują to samo, co widać w naszej pracy: szybki
                kontakt, porządek na montażu i konkretną reakcję wtedy, gdy
                instalacja przestaje działać.
              </p>
            </Reveal>

            <Reveal delay={0.06}>
              <div className="review-highlight-grid">
                {reviewHighlights.map((item) => (
                  <div key={item.label} className="review-highlight-card">
                    <p className="review-highlight-value">{item.value}</p>
                    <p className="review-highlight-label">{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {reviews.map((review, index) => (
              <Reveal key={review.author} delay={0.08 * index}>
                <article className="review-card">
                  <div className="review-card-top">
                    <p className="review-stars">★★★★★</p>
                    <span className="review-source">{review.source}</span>
                  </div>
                  <p className="review-copy">&quot;{review.text}&quot;</p>
                  <div className="review-divider" />
                  <div className="review-meta">
                    <p className="review-author">{review.author}</p>
                    <div className="review-location-row">
                      <span>{review.area}</span>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <a
            href="https://maps.google.com/"
            target="_blank"
            rel="noreferrer"
            className="button-base button-secondary-dark mx-auto mt-10 flex w-fit"
          >
            Zobacz wszystkie opinie na Google Maps -&gt;
          </a>
        </div>
      </section>

      <section id="kontakt" className="site-section bg-[var(--color-bg-alt)]">
        <div className="site-container">
          <div className="contact-shell">
            <Reveal>
              <div className="contact-intro">
                <h2 className="section-title section-title-surface">
                  Odpowiemy szybko i konkretnie
                </h2>
                <p className="section-subtitle mt-4 max-w-[560px]">
                  Wystarczy numer telefonu i krótka informacja o problemie.
                  Oddzwaniamy bez przeciągania kontaktu i od razu ustalamy
                  sensowny następny krok.
                </p>

                <div className="contact-detail-grid">
                  {contactDetails.map((item) => (
                    <div key={item.title} className="contact-detail-card">
                      <span className="contact-detail-icon">
                        <ContactInfoIcon type={item.type} />
                      </span>
                      <div>
                        <p className="contact-detail-title">{item.title}</p>
                        <p className="contact-detail-copy">{item.copy}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="contact-direct-panel">
                  <div>
                    <p className="contact-direct-label">
                      Telefon do biura i serwisu
                    </p>
                    <a href="tel:+48123456789" className="contact-direct-phone">
                      +48 12 345 67 89
                    </a>
                  </div>
                  <a
                    href="tel:+48123456789"
                    className="button-base button-urgent px-6 py-[15px]"
                  >
                    Zadzwoń teraz
                  </a>
                </div>
              </div>
            </Reveal>

            <div className="contact-stack">
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

      <SiteFooter />
      <CookieBanner />
    </main>
  );
}
