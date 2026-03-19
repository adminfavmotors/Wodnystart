import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="section-shell rounded-[32px] p-8 sm:p-10">
        <Link href="/" className="text-sm text-sky-300 transition hover:text-white">
          ← Wróć na stronę główną
        </Link>
        <h1 className="mt-6 font-[var(--font-heading)] text-4xl font-bold tracking-tight text-white">
          Polityka Prywatności
        </h1>
        <div className="mt-6 space-y-5 text-sm leading-7 text-slate-300 sm:text-base">
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
    </main>
  );
}
