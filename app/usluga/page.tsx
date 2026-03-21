import Link from "next/link";
import { SiteHeader } from "../../components/site-header";

const services = [
  {
    name: "Montaż kotłów gazowych",
    marketing:
      "Instalacja nowoczesnych kotłów kondensacyjnych (Viessmann, Vaillant, Bosch). Pełna konfiguracja automatyki i test szczelności.",
    price: "od 1 800 PLN",
  },
  {
    name: "Montaż pomp ciepła",
    marketing:
      "Kompleksowe systemy powietrze-woda. Pomoc w formalnościach i dotacjach z programu „Czyste Powietrze”.",
    price: "od 14 000 PLN",
  },
  {
    name: "Przeglądy i serwis",
    marketing:
      "Coroczna konserwacja: czyszczenie, analiza spalin i optymalizacja spalania. Przedłużamy życie Twojego kotła.",
    price: "350 – 550 PLN",
  },
  {
    name: "Ogrzewanie podłogowe",
    marketing:
      "Projekt i wykonanie systemów płaszczyznowych. Komfort ciepłych stóp i oszczędność energii do 20%.",
    price: "od 140 PLN / m²",
  },
  {
    name: "Serwis awaryjny 24/7",
    marketing:
      "Błyskawiczna pomoc w przypadku usterki na terenie Krakowa. Diagnoza i naprawa w dniu zgłoszenia.",
    price: "od 250 PLN",
    emergency: true,
  },
  {
    name: "Modernizacja kotłowni",
    marketing:
      "Wymiana starych urządzeń na ekologiczne źródła ciepła. Podniesienie klasy energetycznej budynku.",
    price: "Wycena indywidualna",
  },
];

const serviceCards = [
  {
    title: "Montaż kotłów",
    text:
      "Zapewniamy profesjonalne podłączenie urządzeń grzewczych zgodnie z najnowszymi normami bezpieczeństwa. Jako autoryzowany instalator w Krakowie, oferujemy szybki termin realizacji i pełną dokumentację.",
    accent: "Szybki termin i komplet dokumentów",
  },
  {
    title: "Pompy ciepła",
    text:
      "Ekologiczne i najtańsze w eksploatacji źródło ciepła. Dobieramy moc urządzenia do realnego zapotrzebowania Twojego domu, dbając o maksymalną efektywność w małopolskim klimacie.",
    accent: "Pomoc przy „Czystym Powietrzu”",
  },
  {
    title: "Serwis i przeglądy",
    text:
      "Nie czekaj na mrozy. Regularny przegląd to mniejsze zużycie paliwa i pewność, że Twoja instalacja jest bezpieczna dla domowników.",
    accent: "Bezpieczeństwo i dłuższa żywotność urządzeń",
  },
  {
    title: "Pogotowie techniczne",
    text:
      "Awaria w nocy? Nasz zespół techników z ul. Wielickiej 92 jest w gotowości 24 godziny na dobę, 7 dni w tygodniu.",
    accent: "Interwencje awaryjne na terenie Krakowa",
    emergency: true,
  },
];

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      <SiteHeader />

      <section className="bg-[var(--color-bg)] pb-14 pt-12">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-[760px]">
              <p className="section-eyebrow">Nasze usługi</p>
              <h1 className="font-[var(--font-heading)] text-[46px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-text)] max-md:text-[34px]">
                Instalacje grzewcze i serwis dla domów w Krakowie
              </h1>
              <p className="mt-4 max-w-[620px] text-[16px] font-light leading-[1.7] text-[var(--color-text-muted)]">
                Łączymy montaż, modernizacje i serwis w jednym miejscu. Pracujemy na sprawdzonych
                rozwiązaniach, szybko reagujemy na zgłoszenia i przygotowujemy wyceny dopasowane do
                realnych potrzeb budynku.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#kontakt" className="button-base button-primary">
                  Zamów bezpłatną wycenę
                </Link>
                <Link href="/" className="button-base button-secondary">
                  Wróć na główną
                </Link>
              </div>
            </div>

            <div className="card-surface p-6">
              <p className="section-eyebrow">Kraków 2026</p>
              <p className="text-[15px] font-light leading-[1.7] text-[var(--color-text-muted)]">
                Oferujemy montaż, serwis i modernizacje kotłowni z naciskiem na bezpieczeństwo,
                energooszczędność i pełne wsparcie przy inwestycjach w nowoczesne źródła ciepła.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-alt)] py-14">
        <div className="site-container">
          <div className="mb-8 max-w-[760px]">
            <p className="section-eyebrow">Cennik 2026</p>
            <h2 className="section-title">Nasze usługi i orientacyjne ceny</h2>
            <p className="section-subtitle">
              Przejrzyste widełki cenowe pomagają szybciej ocenić zakres inwestycji. Finalna wycena
              zależy od warunków na miejscu, typu urządzenia i zakresu prac.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.name}
                className={`card-surface flex h-full flex-col p-6 ${
                  service.emergency ? "border-l-[3px] border-l-[var(--color-orange)]" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="card-title">{service.name}</h3>
                  {service.emergency ? (
                    <span className="rounded-[4px] bg-[rgba(224,106,27,0.1)] px-3 py-1 text-[10px] uppercase tracking-[0.07em] text-[var(--color-orange)]">
                      24/7
                    </span>
                  ) : null}
                </div>

                <p className="card-copy mt-3">{service.marketing}</p>

                <div className="mt-5 border-t border-[var(--color-border)] pt-4">
                  <p className="price-label">Cena brutto</p>
                  <p
                    className={`price-value ${
                      service.emergency ? "text-[var(--color-orange)]" : ""
                    }`}
                  >
                    {service.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] py-14">
        <div className="site-container">
          <div className="mb-8 max-w-[760px]">
            <p className="section-eyebrow">Najczęściej wybierane</p>
            <h2 className="section-title">Usługi, o które klienci pytają najczęściej</h2>
            <p className="section-subtitle">
              Poniżej zebraliśmy najważniejsze kierunki prac, które realizujemy dla domów,
              mieszkań i modernizowanych kotłowni na terenie Krakowa.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className={`card-surface flex h-full flex-col p-6 ${
                  card.emergency ? "border-l-[3px] border-l-[var(--color-orange)]" : ""
                }`}
              >
                <h3 className="card-title">{card.title}</h3>
                <p className="card-copy mt-3">{card.text}</p>
                <div className="mt-5 border-t border-[var(--color-border)] pt-4">
                  <p
                    className={`text-[13px] font-medium leading-[1.5] ${
                      card.emergency ? "text-[var(--color-orange)]" : "text-[var(--color-accent)]"
                    }`}
                  >
                    {card.accent}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-dark)] py-14">
        <div className="site-container">
          <div className="rounded-[8px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-8">
            <p className="section-eyebrow text-[rgba(255,255,255,0.55)]">Konsultacja</p>
            <h2 className="section-title section-title-dark">Nie wiesz, od czego zacząć?</h2>
            <p className="mt-4 max-w-[720px] text-[15px] font-light leading-[1.7] text-[rgba(255,255,255,0.72)]">
              Powiedz nam, czy planujesz nowy montaż, modernizację kotłowni, czy tylko przegląd.
              Dobierzemy właściwe rozwiązanie i przygotujemy wycenę bez zbędnych etapów.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#kontakt" className="button-base button-primary">
                Przejdź do kontaktu
              </Link>
              <Link href="/realizacja" className="button-base button-secondary-dark">
                Zobacz realizację
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
