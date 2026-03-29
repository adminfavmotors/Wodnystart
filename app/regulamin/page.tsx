import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      <SiteHeader />

      <section className="py-20">
        <div className="site-container max-w-[920px]">
          <div className="legal-panel p-8 md:p-12">
            <Link
              href="/"
              className="text-[13px] uppercase tracking-[0.06em] text-[var(--color-accent)] transition duration-200 ease-in-out hover:text-[var(--color-accent-hover)]"
            >
              &lt;- Wróć na stronę główną
            </Link>
            <h1 className="mt-6 font-[var(--font-heading)] text-[38px] font-bold leading-[1.2] tracking-[-0.01em] text-[var(--color-text)]">
              Regulamin
            </h1>
            <div className="mt-6 space-y-5 text-[16px] font-light leading-[1.7] text-[var(--color-text-muted)]">
              <p>
                To jest szkic regulaminu dla wersji MVP. Finalna wersja powinna zostać uzupełniona o
                szczegóły świadczenia usług, zasady odpowiedzialności i procedury reklamacyjne.
              </p>
              <p>
                Serwis prezentuje ofertę usług montażu i serwisu instalacji grzewczych na terenie
                Krakowa i okolic.
              </p>
              <p>
                Ceny podane na stronie mają charakter orientacyjny i stanowią punkt wyjścia do
                indywidualnej wyceny.
              </p>
              <p>
                Wysłanie formularza nie oznacza automatycznego zawarcia umowy, a jedynie rozpoczęcie
                kontaktu handlowego.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
