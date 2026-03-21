import Link from "next/link";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-[var(--color-bg)]">
      <SiteHeader />

      <section className="py-20">
        <div className="site-container max-w-[920px]">
          <div className="card-surface p-8 md:p-12">
            <Link
              href="/"
              className="text-[13px] uppercase tracking-[0.06em] text-[var(--color-accent)] transition duration-200 ease-in-out hover:text-[var(--color-accent-hover)]"
            >
              ← Wróć na stronę główną
            </Link>
            <h1 className="mt-6 font-[var(--font-heading)] text-[38px] font-bold leading-[1.2] tracking-[-0.01em] text-[var(--color-text)]">
              Polityka prywatności
            </h1>
            <div className="mt-6 space-y-5 text-[16px] font-light leading-[1.7] text-[var(--color-text-muted)]">
              <p>
                To jest wersja startowa dokumentu. Finalna treść powinna zostać dopracowana i
                zweryfikowana prawnie przed publikacją produkcyjną.
              </p>
              <p>
                Administratorem danych jest Wodny Standart, ul. Wielicka 92, 30-552 Kraków,
                biuro@wodnystandart.pl.
              </p>
              <p>
                Dane z formularza kontaktowego przetwarzamy wyłącznie w celu przedstawienia oferty,
                obsługi zapytania i kontaktu z klientem.
              </p>
              <p>
                Użytkownik ma prawo dostępu do danych, ich poprawiania, usunięcia, ograniczenia
                przetwarzania oraz wniesienia sprzeciwu.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
