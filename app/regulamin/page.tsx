import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="mx-auto min-h-screen max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="section-shell rounded-[32px] p-8 sm:p-10">
        <Link href="/" className="text-sm text-sky-300 transition hover:text-white">
          ← Wróć na stronę główną
        </Link>
        <h1 className="mt-6 font-[var(--font-heading)] text-4xl font-bold tracking-tight text-white">
          Regulamin Serwisu
        </h1>
        <div className="mt-6 space-y-5 text-sm leading-7 text-slate-300 sm:text-base">
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
    </main>
  );
}
