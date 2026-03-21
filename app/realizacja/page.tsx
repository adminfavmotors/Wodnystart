import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      <SiteHeader />

      <section className="pb-20 pt-12">
        <div className="site-container">
          <div className="card-surface max-w-[760px] p-8 md:p-10">
            <p className="section-eyebrow">Realizacja</p>
            <h1 className="section-title">Strona realizacji w przygotowaniu</h1>
            <p className="section-subtitle">
              Podstrona realizacji jest już aktywna i gotowa do rozbudowy. Możemy później dodać
              pełny opis case study, galerię zdjęć, zakres prac i efekty przed oraz po montażu.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/" className="button-base button-primary">
                Wróć na główną
              </Link>
              <Link href="/#realizacje" className="button-base button-secondary">
                Wróć do realizacji
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
