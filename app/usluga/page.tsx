import Link from "next/link";
import { SiteHeader } from "../../components/site-header";

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      <SiteHeader />

      <section className="pb-20 pt-12">
        <div className="site-container">
          <div className="card-surface max-w-[760px] p-8 md:p-10">
            <p className="section-eyebrow">Usługa</p>
            <h1 className="section-title">Strona usługi w przygotowaniu</h1>
            <p className="section-subtitle">
              Ta podstrona jest już podłączona i działa poprawnie. W następnym kroku możemy
              uzupełnić ją o pełny opis usługi, zakres prac, ceny i formularz kontaktowy.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/" className="button-base button-primary">
                Wróć na główną
              </Link>
              <Link href="/#kontakt" className="button-base button-secondary">
                Przejdź do kontaktu
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
