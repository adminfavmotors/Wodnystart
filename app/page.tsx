import Image from "next/image";
import Link from "next/link";
import { ContactForm } from "../components/contact-form";
import { CookieBanner } from "../components/cookie-banner";
import { MapCard } from "../components/map-card";
import { Reveal } from "../components/reveal";
import { ShowcaseSlider } from "../components/showcase-slider";
import { SiteHeader } from "../components/site-header";

const benefits = [
  {
    title: "20 Lat Doświadczenia",
    description: "Dwie dekady praktyki w najtrudniejszych instalacjach i modernizacjach kotłowni.",
    icon: "experience",
  },
  {
    title: "Ekspresowy Serwis",
    description: "Reagujemy nawet w 45 minut na terenie Krakowa i okolic przy pilnych zgłoszeniach.",
    icon: "speed",
  },
  {
    title: "Gwarancja 10 Lat",
    description: "Pracujemy tak, aby inwestycja była spokojna w użytkowaniu przez długie lata.",
    icon: "shield",
  },
  {
    title: "Czysty Montaż",
    description: "Dbamy o detale, porządek i estetykę kotłowni od pierwszego wejścia do odbioru.",
    icon: "spark",
  },
];

const services = [
  {
    title: "Montaż Kotła Gazowego",
    description: "Kompleksowa instalacja, test szczelności i pierwsze uruchomienie.",
    price: "1 800 PLN",
  },
  {
    title: "Przegląd Okresowy",
    description: "Diagnostyka, czyszczenie i optymalizacja spalania dla bezpiecznej pracy.",
    price: "350 PLN",
  },
  {
    title: "Instalacja Pompy Ciepła",
    description: "Nowoczesne rozwiązania OZE z doborem urządzenia i wsparciem przy dofinansowaniu.",
    price: "14 000 PLN",
  },
  {
    title: "Pogotowie Gazowe 24/7",
    description: "Natychmiastowa reakcja w przypadku awarii i zagrożenia bezpieczeństwa.",
    price: "250 PLN",
  },
];

const stats = [
  { label: "20+ lat", detail: "praktyki w instalacjach grzewczych" },
  { label: "45 min", detail: "średni czas reakcji w Krakowie" },
  { label: "4.9/5", detail: "ocena klientów w Google Maps" },
  { label: "10 lat", detail: "gwarancji na wybrane realizacje" },
];

const showcases = [
  {
    title: "Nowa kotłownia dla domu jednorodzinnego",
    district: "Kraków • Podgórze",
    timeline: "Realizacja: 3 dni robocze",
    before:
      "Mało ergonomiczny układ, utrudniony dostęp serwisowy i przestarzała armatura, która obniżała komfort użytkowania.",
    after:
      "Nowy układ przyłączy, czytelny porządek instalacyjny, lepsza estetyka i łatwy serwis bez niepotrzebnego chaosu.",
    objectPosition: "65% center",
  },
  {
    title: "Modernizacja kotła i osprzętu",
    district: "Kraków • Bronowice",
    timeline: "Realizacja: 2 dni robocze",
    before:
      "Stary system wymagał częstych interwencji, a użytkownik nie miał pewności co do bezpieczeństwa i sprawności urządzenia.",
    after:
      "Nowy osprzęt i uporządkowana instalacja poprawiły sprawność, wygląd kotłowni i komfort codziennego użytkowania.",
    objectPosition: "center center",
  },
  {
    title: "Przegląd i reorganizacja instalacji",
    district: "Kraków • Dębniki",
    timeline: "Realizacja: 1 dzień roboczy",
    before:
      "Przewody były prowadzone chaotycznie, a klient zgłaszał trudności przy przeglądach i obawy o awarię w sezonie.",
    after:
      "Po serwisie i uporządkowaniu przestrzeni kotłownia wygląda profesjonalnie i jest gotowa do spokojnej eksploatacji.",
    objectPosition: "58% center",
  },
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-3 text-sm uppercase tracking-[0.24em] text-sky-300/80">{children}</p>
  );
}

function Icon({ type }: { type: string }) {
  const common = "h-6 w-6 text-white";

  if (type === "experience") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path
          d="M12 2 4 6v6c0 5.3 3.2 8.6 8 10 4.8-1.4 8-4.7 8-10V6l-8-4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M9 12.5 11.2 15 15.5 10" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  if (type === "speed") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path
          d="M5 16a7 7 0 1 1 14 0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M12 9v4l3 2"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "shield") {
    return (
      <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
        <path
          d="M12 2 5 5v6c0 4.7 2.8 8.2 7 10 4.2-1.8 7-5.3 7-10V5l-7-3Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M9 12.4 11 14.5 15.6 10" fill="none" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={common} aria-hidden="true">
      <path
        d="m12 2 1.6 5.2H19l-4.4 3.2L16.3 16 12 12.8 7.7 16l1.7-5.6L5 7.2h5.4L12 2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <main className="pb-20">
      <SiteHeader />

      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-4 pt-8 sm:px-6 lg:px-8 lg:gap-24 lg:pt-12">
        <section className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <Reveal className="max-w-3xl">
            <div className="pill mb-6 inline-flex rounded-full px-4 py-2 text-sm text-slate-200">
              Kraków • Autoryzowany partner Viessmann &amp; Vaillant
            </div>
            <h1 className="font-[var(--font-heading)] text-5xl font-extrabold leading-none tracking-tight text-white sm:text-6xl lg:text-7xl">
              Inteligentne Ciepło dla Twojego Domu.{" "}
              <span className="gradient-text">Standard, Któremu Ufasz.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Profesjonalny montaż i serwis kotłów w Krakowie. Ponad 20 lat doświadczenia,
              które gwarantuje bezpieczeństwo Twojej rodziny.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#kontakt"
                className="cta-primary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-base font-semibold transition"
              >
                Bezpłatna wycena w 2 minuty
              </a>
              <a
                href="tel:+48123456789"
                className="cta-secondary inline-flex items-center justify-center rounded-full px-6 py-3.5 text-base text-slate-100 transition"
              >
                Zadzwoń teraz
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-slate-300">
              <span className="pill rounded-full px-4 py-2">4.9/5 na Google Maps</span>
              <span className="pill rounded-full px-4 py-2">Oddzwaniamy w 15 minut</span>
              <span className="pill rounded-full px-4 py-2">Serwis awaryjny 24/7</span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="glass-panel relative overflow-hidden rounded-[32px] p-3 sm:col-span-2">
                <div className="relative h-[420px] overflow-hidden rounded-[26px]">
                  <Image
                    src="/images/hero-technician.jpg"
                    alt="Technik Wodny Standart przy instalacji grzewczej"
                    fill
                    priority
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(6,11,22,0.16),rgba(11,17,32,0.72))]" />
                  <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-3">
                    <div className="glass-panel rounded-[22px] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-sky-200/80">Kraków</p>
                      <p className="mt-2 text-lg font-semibold text-white">Lokalny zespół</p>
                    </div>
                    <div className="glass-panel rounded-[22px] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-sky-200/80">Bezpieczeństwo</p>
                      <p className="mt-2 text-lg font-semibold text-white">Test szczelności i odbiór</p>
                    </div>
                    <div className="glass-panel rounded-[22px] p-4">
                      <p className="text-xs uppercase tracking-[0.2em] text-sky-200/80">Porządek</p>
                      <p className="mt-2 text-lg font-semibold text-white">Czysty montaż jak z katalogu</p>
                    </div>
                  </div>
                </div>
              </div>

              {stats.map((stat) => (
                <div key={stat.label} className="glass-panel rounded-[28px] p-5">
                  <p className="text-3xl font-bold tracking-tight text-white">{stat.label}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{stat.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        <Reveal>
          <section id="zalety" className="section-shell rounded-[36px] p-6 sm:p-8 lg:p-10">
            <SectionEyebrow>Dlaczego klienci nam ufają</SectionEyebrow>
            <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Premium service dla domu, który ma działać bez stresu.
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-300">
                  Łączymy szybkość reakcji, doświadczenie i estetykę wykonania. Strona ma
                  wyglądać nowocześnie, ale sama usługa nadal opiera się na zaufaniu i konkretach.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {benefits.map((benefit, index) => (
                  <Reveal key={benefit.title} delay={0.05 * index}>
                    <div className="glass-panel rounded-[28px] p-5">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/6">
                        <Icon type={benefit.icon} />
                      </div>
                      <h3 className="font-[var(--font-heading)] text-xl font-bold tracking-tight text-white">
                        {benefit.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{benefit.description}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="uslugi" className="grid gap-6 lg:grid-cols-[0.72fr_1.28fr]">
            <div className="section-shell rounded-[32px] p-6 sm:p-8">
              <SectionEyebrow>Usługi i ceny</SectionEyebrow>
              <h2 className="font-[var(--font-heading)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Jasna oferta dla klientów, którzy chcą działać od razu
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-300">
                Podajemy stawki startowe, żeby odsiać przypadkowe zapytania i szybciej przejść do
                konkretnej wyceny.
              </p>
              <div className="mt-8 rounded-[28px] border border-sky-400/14 bg-sky-500/8 p-5">
                <p className="text-sm leading-6 text-slate-200">
                  Każda wycena uwzględnia warunki na miejscu, typ urządzenia, zakres materiałów i
                  oczekiwany termin realizacji.
                </p>
              </div>
            </div>

            <div className="space-y-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="service-row glass-panel rounded-[28px] border border-white/10 p-5 sm:p-6"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="max-w-2xl">
                      <h3 className="font-[var(--font-heading)] text-xl font-bold tracking-tight text-white">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-slate-300">{service.description}</p>
                    </div>
                    <div className="shrink-0">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Cena od</p>
                      <p className="mt-2 text-3xl font-bold tracking-tight text-white">
                        {service.price}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <section id="realizacje">
          <ShowcaseSlider items={showcases} />
        </section>

        <section id="kontakt" className="grid gap-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-stretch">
          <Reveal>
            <ContactForm />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="space-y-6">
              <MapCard />
              <div className="section-shell rounded-[28px] p-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Telefon</p>
                    <a href="tel:+48123456789" className="mt-2 block text-lg font-semibold text-white">
                      +48 12 345 67 89
                    </a>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-slate-400">E-mail</p>
                    <a
                      href="mailto:biuro@wodnystandart.pl"
                      className="mt-2 block text-lg font-semibold text-white"
                    >
                      biuro@wodnystandart.pl
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </div>

      <footer className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="section-shell rounded-[32px] px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-[var(--font-heading)] text-2xl font-bold tracking-tight text-white">
                Wodny Standart
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Inteligentne ciepło dla domu w Krakowie. Montaż, serwis i nowoczesne instalacje
                grzewcze.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm text-slate-300">
              <Link href="/polityka-prywatnosci" className="transition hover:text-white">
                Polityka Prywatności
              </Link>
              <Link href="/regulamin" className="transition hover:text-white">
                Regulamin Serwisu
              </Link>
              <a href="#kontakt" className="transition hover:text-white">
                Zgody Marketingowe
              </a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-slate-950/88 px-4 py-3 backdrop-blur sm:hidden">
        <div className="mx-auto flex max-w-md gap-3">
          <a
            href="tel:+48123456789"
            className="cta-secondary inline-flex flex-1 items-center justify-center rounded-full px-4 py-3 text-sm text-white"
          >
            Zadzwoń
          </a>
          <a
            href="#kontakt"
            className="cta-primary inline-flex flex-1 items-center justify-center rounded-full px-4 py-3 text-sm font-semibold"
          >
            Wycena
          </a>
        </div>
      </div>

      <CookieBanner />
    </main>
  );
}
