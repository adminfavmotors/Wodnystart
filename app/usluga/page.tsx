import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

const pricingCards = [
  {
    title: "Montaż kotłów gazowych",
    description:
      "Instalacja nowoczesnych kotłów kondensacyjnych (Viessmann, Vaillant, Bosch). Pełna konfiguracja automatyki i test szczelności.",
    price: "od 1 800 PLN",
  },
  {
    title: "Montaż pomp ciepła",
    description:
      "Kompleksowe systemy powietrze-woda. Pomoc w formalnościach i dotacjach z programu „Czyste Powietrze”.",
    price: "od 14 000 PLN",
  },
  {
    title: "Przeglądy i serwis",
    description:
      "Coroczna konserwacja: czyszczenie, analiza spalin i optymalizacja spalania. Przedłużamy życie Twojego kotła.",
    price: "350 – 550 PLN",
  },
  {
    title: "Ogrzewanie podłogowe",
    description:
      "Projekt i wykonanie systemów płaszczyznowych. Komfort ciepłych stóp i oszczędność energii do 20%.",
    price: "od 140 PLN / m²",
  },
  {
    title: "Serwis awaryjny 24/7",
    description:
      "Błyskawiczna pomoc w przypadku usterki na terenie Krakowa. Diagnoza i naprawa w dniu zgłoszenia.",
    price: "od 250 PLN",
    emergency: true,
  },
  {
    title: "Modernizacja kotłowni",
    description:
      "Wymiana starych urządzeń na ekologiczne źródła ciepła. Podniesienie klasy energetycznej budynku.",
    price: "Wycena indywidualna",
  },
];

const serviceDetails = [
  {
    title: "Montaż kotłów",
    description:
      "Zapewniamy profesjonalne podłączenie urządzeń grzewczych zgodnie z najnowszymi normami bezpieczeństwa. Jako autoryzowany instalator w Krakowie, oferujemy szybki termin realizacji i pełną dokumentację.",
  },
  {
    title: "Pompy ciepła",
    description:
      "Ekologiczne i najtańsze w eksploatacji źródło ciepła. Dobieramy moc urządzenia do realnego zapotrzebowania Twojego domu, dbając o maksymalną efektywność w małopolskim klimacie.",
  },
  {
    title: "Serwis i przeglądy",
    description:
      "Nie czekaj na mrozy. Regularny przegląd to mniejsze zużycie paliwa i pewność, że Twoja instalacja jest bezpieczna dla domowników.",
  },
  {
    title: "Pogotowie techniczne",
    description:
      "Awaria w nocy? Nasz zespół techników z ul. Wielickiej 92 jest w gotowości 24 godziny na dobę, 7 dni w tygodniu.",
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
              <h1 className="font-[var(--font-heading)] text-[46px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-text)] max-md:text-[34px]">
                Nasze Usługi – Cennik 2026
              </h1>
              <p className="mt-4 max-w-[620px] text-[16px] font-light leading-[1.7] text-[var(--color-text-muted)]">
                Poniżej znajdziesz orientacyjne ceny i najważniejsze kierunki usług, które
                realizujemy dla domów i modernizowanych kotłowni na terenie Krakowa.
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
              <p className="text-[15px] font-light leading-[1.7] text-[var(--color-text-muted)]">
                Realizujemy montaże, modernizacje i serwis z naciskiem na bezpieczeństwo,
                energooszczędność i szybki czas reakcji na terenie miasta i okolic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-alt)] py-14">
        <div className="site-container">
          <div className="mb-8 max-w-[760px]">
            <h2 className="section-title">Usługi i ceny orientacyjne</h2>
            <p className="section-subtitle">
              Ceny mają charakter orientacyjny i pomagają szybko ocenić budżet inwestycji. Dokładna
              wycena zależy od typu urządzenia, zakresu prac i warunków technicznych na miejscu.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {pricingCards.map((service) => (
              <div
                key={service.title}
                className={`card-surface flex h-full flex-col p-6 ${
                  service.emergency ? "border-l-[3px] border-l-[var(--color-orange)]" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="card-title">{service.title}</h3>
                  {service.emergency ? (
                    <span className="rounded-[4px] bg-[rgba(224,106,27,0.1)] px-3 py-1 text-[10px] uppercase tracking-[0.07em] text-[var(--color-orange)]">
                      24/7
                    </span>
                  ) : null}
                </div>

                <p className="card-copy mt-3">{service.description}</p>

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
            <h2 className="section-title">Najważniejsze kierunki prac</h2>
            <p className="section-subtitle">
              Poniższe bloki porządkują najczęściej wybierane usługi i pokazują, czego mogą
              spodziewać się klienci na etapie montażu, serwisu i interwencji awaryjnej.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {serviceDetails.map((item) => (
              <div
                key={item.title}
                className={`card-surface p-6 ${
                  item.emergency ? "border-l-[3px] border-l-[var(--color-orange)]" : ""
                }`}
              >
                <h3 className="card-title">{item.title}</h3>
                <p className="card-copy mt-3">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-dark)] py-14">
        <div className="site-container">
          <div className="rounded-[8px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-8">
            <h2 className="section-title section-title-dark">Potrzebujesz wyceny lub szybkiej konsultacji?</h2>
            <p className="mt-4 max-w-[720px] text-[15px] font-light leading-[1.7] text-[rgba(255,255,255,0.72)]">
              Napisz lub zadzwoń. Dobierzemy właściwe rozwiązanie do Twojego domu i przygotujemy
              zakres prac odpowiedni dla nowego montażu, modernizacji lub pilnego serwisu.
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

      <SiteFooter />
    </main>
  );
}
