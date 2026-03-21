import Link from "next/link";
import { SiteHeader } from "../../components/site-header";

const marketTrends = [
  {
    title: "Eko-modernizacja",
    text:
      "Kotły gazowe nadal są popularne, ale w 2026 roku coraz większe znaczenie mają pompy ciepła i układy hybrydowe.",
  },
  {
    title: "Usługa pod klucz",
    text:
      "Klienci w Krakowie oczekują jednego partnera: od audytu i doboru urządzeń po montaż, serwis i pomoc przy formalnościach.",
  },
  {
    title: "Rynek 2026",
    text:
      "Koszt pracy wykwalifikowanych instalatorów wzrósł, dlatego liczy się szybka diagnoza, przejrzysta wycena i realna dostępność 24/7.",
  },
];

const priceRows = [
  {
    name: "Montaż kotła gazowego",
    description:
      "Profesjonalna instalacja nowoczesnych kotłów kondensacyjnych Viessmann, Vaillant i Bosch.",
    price: "od 1 800 PLN",
  },
  {
    name: "Instalacja pompy ciepła",
    description:
      "Dobór i montaż systemów powietrze-woda z integracją z fotowoltaiką i przygotowaniem do programu Czyste Powietrze.",
    price: "od 14 000 PLN",
  },
  {
    name: "Serwis i konserwacja",
    description:
      "Coroczny przegląd techniczny, czyszczenie i optymalizacja parametrów pracy urządzenia.",
    price: "350 – 550 PLN",
  },
  {
    name: "Ogrzewanie podłogowe",
    description:
      "Projektowanie i układanie systemów wodnego ogrzewania płaszczyznowego dla domów i nowych modernizacji.",
    price: "140 – 260 PLN / m²",
  },
  {
    name: "Pogotowie cieplne 24/7",
    description: "Ekspresowa diagnoza i naprawa usterek w sytuacjach awaryjnych.",
    price: "od 250 PLN",
  },
];

const featuredServices = [
  {
    title: "Nowoczesne Kotły Gazowe – Wydajność i Bezpieczeństwo",
    text:
      "Instalujemy energooszczędne kotły kondensacyjne, które pozwalają obniżyć rachunki za gaz nawet o 30%. Jako autoryzowany instalator w Krakowie, zapewniamy pełną dokumentację do kominiarza i gazowni.",
    benefit: "Montaż w 1 dzień roboczy",
  },
  {
    title: "Pompy Ciepła – Przyszłość Ogrzewania Twego Domu",
    text:
      "Przejdź na zieloną energię. Pomagamy w uzyskaniu dofinansowania z programu „Czyste Powietrze”, nawet do 100% zwrotu kosztów. Montujemy jednostki dopasowane do małopolskiego klimatu.",
    benefit: "Niezależność energetyczna i zerowa emisja",
  },
  {
    title: "Regularny Serwis – Dłuższa Żywotność Urządzeń",
    text:
      "Nie czekaj na awarię w środku zimy. Nasz certyfikowany serwisant sprawdzi szczelność instalacji, wyczyści wymiennik ciepła i zoptymalizuje spalanie, co przełoży się na niższe zużycie paliwa.",
    benefit: "Podtrzymanie gwarancji producenta",
  },
  {
    title: "Komfort Cieplny na Każdym Kroku",
    text:
      "Projektujemy systemy ogrzewania podłogowego zapewniające idealny rozkład temperatury w pomieszczeniach. Używamy wyłącznie sprawdzonych rur PEX/AL/PEX z 30-letnią gwarancją materiałową.",
    benefit: "Idealne rozwiązanie dla alergików",
  },
];

const pricingNotes = [
  {
    title: "Kraków i 8% VAT",
    text:
      "Ceny pokazują realia krakowskiego rynku usług w 2026 roku i uwzględniają stawkę 8% VAT dla budownictwa mieszkaniowego.",
  },
  {
    title: "Praca + materiały bazowe",
    text:
      "W cenach montażu zawieramy robociznę oraz podstawowe materiały instalacyjne. Samo urządzenie wyceniamy po bezpłatnym audycie.",
  },
  {
    title: "Urządzenia z listy ZUM",
    text:
      "Pracujemy wyłącznie na urządzeniach spełniających wymogi programu i znajdujących się na Liście Zielonych Urządzeń i Materiałów.",
  },
];

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      <SiteHeader />

      <section className="bg-[var(--color-bg)] pb-14 pt-12">
        <div className="site-container">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-[760px]">
              <p className="section-eyebrow">Usługi Wodny Standart</p>
              <h1 className="font-[var(--font-heading)] text-[46px] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-text)] max-md:text-[34px]">
                Kompleksowe instalacje grzewcze i serwis w Krakowie
              </h1>
              <p className="mt-4 max-w-[620px] text-[16px] font-light leading-[1.7] text-[var(--color-text-muted)]">
                W 2026 roku klienci oczekują nie tylko montażu, ale pełnego wsparcia: audytu,
                doboru urządzeń, pomocy przy dotacjach i niezawodnego serwisu po realizacji.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/#kontakt" className="button-base button-primary">
                  Zamów bezpłatną konsultację
                </Link>
                <Link href="/" className="button-base button-secondary">
                  Wróć na główną
                </Link>
              </div>
            </div>

            <div className="card-surface p-6">
              <p className="section-eyebrow">Dlaczego teraz</p>
              <p className="text-[16px] font-light leading-[1.7] text-[var(--color-text-muted)]">
                Rosnące koszty pracy, ekologiczne modernizacje oraz wymagania programu
                „Czyste Powietrze” sprawiają, że liczy się jakość wykonania i poprawny dobór
                urządzeń już na etapie pierwszej wyceny.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-alt)] py-14">
        <div className="site-container">
          <div className="mb-8 max-w-[720px]">
            <h2 className="section-title">Analiza rynku i usług w Krakowie 2026</h2>
            <p className="section-subtitle">
              Wybór systemu ogrzewania to dziś połączenie kosztów inwestycji, eksploatacji i
              zgodności z aktualnymi programami dotacyjnymi.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {marketTrends.map((item) => (
              <div key={item.title} className="card-surface h-full p-6">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-copy mt-3">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] py-14">
        <div className="site-container">
          <div className="mb-8 max-w-[760px]">
            <h2 className="section-title">Cennik usług 2026</h2>
            <p className="section-subtitle">
              Poniższe ceny są orientacyjne i pokazują realne widełki brutto dla Krakowa. Dokładną
              wycenę przygotowujemy po bezpłatnym audycie lub konsultacji telefonicznej.
            </p>
          </div>

          <div className="overflow-hidden rounded-[8px] border border-[var(--color-border)] bg-[var(--color-bg-card)]">
            <div className="hidden grid-cols-[1.1fr_2fr_0.9fr] gap-4 border-b border-[var(--color-border)] bg-[var(--color-accent-light)] px-6 py-4 md:grid">
              <p className="text-[11px] uppercase tracking-[0.07em] text-[var(--color-accent)]">
                Nazwa usługi
              </p>
              <p className="text-[11px] uppercase tracking-[0.07em] text-[var(--color-accent)]">
                Opis dla klienta
              </p>
              <p className="text-[11px] uppercase tracking-[0.07em] text-[var(--color-accent)]">
                Cena brutto
              </p>
            </div>

            <div className="divide-y divide-[var(--color-border)]">
              {priceRows.map((row) => (
                <div key={row.name} className="grid gap-3 px-6 py-5 md:grid-cols-[1.1fr_2fr_0.9fr] md:gap-4">
                  <p className="text-[16px] font-medium leading-[1.5] text-[var(--color-text)]">{row.name}</p>
                  <p className="card-copy">{row.description}</p>
                  <p className="font-[var(--font-heading)] text-[24px] font-bold leading-[1.2] text-[var(--color-text)]">
                    {row.price}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-alt)] py-14">
        <div className="site-container">
          <div className="mb-8 max-w-[760px]">
            <h2 className="section-title">Najważniejsze kierunki usług</h2>
            <p className="section-subtitle">
              Skupiamy się na rozwiązaniach, które są dziś najbardziej poszukiwane przez klientów w
              Krakowie i okolicach.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {featuredServices.map((service) => (
              <div key={service.title} className="card-surface flex h-full flex-col p-6">
                <span className="badge badge-accent w-fit">Zaleta</span>
                <h3 className="card-title mt-4">{service.title}</h3>
                <p className="card-copy mt-3">{service.text}</p>
                <div className="mt-5 border-t border-[var(--color-border)] pt-4">
                  <p className="text-[13px] font-medium leading-[1.5] text-[var(--color-accent)]">
                    {service.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-[8px] border border-[rgba(224,106,27,0.18)] bg-[rgba(224,106,27,0.08)] p-6">
            <p className="text-[11px] uppercase tracking-[0.07em] text-[var(--color-orange)]">
              Pogotowie cieplne 24/7
            </p>
            <h3 className="card-title mt-3">Ekspresowa reakcja w sytuacjach awaryjnych</h3>
            <p className="card-copy mt-3">
              Awaria instalacji grzewczej w sezonie zimowym wymaga natychmiastowej reakcji. Dlatego
              utrzymujemy usługę interwencyjną dla pilnych zgłoszeń na terenie Krakowa i okolic.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg)] py-14">
        <div className="site-container">
          <div className="mb-8 max-w-[760px]">
            <h2 className="section-title">Dlaczego te ceny są aktualne dla Krakowa</h2>
            <p className="section-subtitle">
              Transparentna komunikacja cen jest dziś elementem przewagi konkurencyjnej, szczególnie
              przy usługach instalacyjnych i modernizacyjnych.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {pricingNotes.map((note, index) => (
              <div key={note.title} className="card-surface h-full p-6">
                <p className="text-[11px] uppercase tracking-[0.07em] text-[var(--color-accent)]">
                  0{index + 1}
                </p>
                <h3 className="card-title mt-3">{note.title}</h3>
                <p className="card-copy mt-3">{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-bg-dark)] py-14">
        <div className="site-container">
          <div className="rounded-[8px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.05)] p-8">
            <p className="section-eyebrow text-[rgba(255,255,255,0.55)]">Kolejny krok</p>
            <h2 className="section-title section-title-dark">Dobierzemy rozwiązanie do domu i budżetu</h2>
            <p className="mt-4 max-w-[700px] text-[15px] font-light leading-[1.7] text-[rgba(255,255,255,0.7)]">
              Jeśli chcesz, następnym krokiem możemy przygotować pełną sekcję „O nas”, rozwinąć
              poszczególne usługi na osobne podstrony albo dodać formularz dedykowany tylko dla
              inwestycji z programu Czyste Powietrze.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/#kontakt" className="button-base button-primary">
                Skontaktuj się z nami
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
