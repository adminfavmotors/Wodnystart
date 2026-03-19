"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
};

const initialState: FormState = {
  name: "",
  phone: "",
  service: "Montaż kotła gazowego",
  message: "",
  consent: false,
};

function formatPolishPhone(input: string) {
  let digits = input.replace(/\D/g, "");

  if (digits.startsWith("48")) {
    digits = digits.slice(2);
  }

  digits = digits.slice(0, 9);
  const groups = digits.match(/.{1,3}/g) ?? [];

  return digits.length ? `+48 ${groups.join(" ")}`.trim() : "";
}

function isValidPolishPhone(input: string) {
  const digits = input.replace(/\D/g, "");
  return digits.length === 9 || (digits.length === 11 && digits.startsWith("48"));
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [attempted, setAttempted] = useState(false);

  const phoneValid = useMemo(() => isValidPolishPhone(form.phone), [form.phone]);
  const canSubmit = phoneValid && form.name.trim().length > 1 && form.consent;

  return (
    <div className="glass-panel rounded-[28px] p-5 sm:p-7">
      <div className="mb-6">
        <p className="mb-2 text-sm uppercase tracking-[0.24em] text-sky-300/80">Kontakt</p>
        <h3 className="font-[var(--font-heading)] text-2xl font-bold tracking-tight text-white sm:text-3xl">
          Odpowiemy szybko i konkretnie
        </h3>
        <p className="mt-3 max-w-xl text-sm leading-6 text-[var(--muted)] sm:text-base">
          Zostaw numer telefonu, a oddzwonimy z bezpłatną wstępną wyceną i dobierzemy
          najlepsze rozwiązanie dla Twojej instalacji.
        </p>
      </div>

      <form
        className="space-y-4"
        onSubmit={(event) => {
          event.preventDefault();
          setAttempted(true);

          if (!canSubmit) {
            return;
          }

          setSubmitted(true);
          setForm(initialState);
          setAttempted(false);
        }}
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm text-slate-200">Imię</span>
            <input
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
              placeholder="Np. Michał"
              className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50"
            />
          </label>

          <label className="block">
            <span className="mb-2 block text-sm text-slate-200">Telefon</span>
            <input
              value={form.phone}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  phone: formatPolishPhone(event.target.value),
                }))
              }
              inputMode="tel"
              placeholder="+48 500 600 700"
              className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50"
            />
            <span
              className={`mt-2 block text-xs ${
                !form.phone.length
                  ? "text-slate-500"
                  : phoneValid
                    ? "text-emerald-400"
                    : "text-amber-300"
              }`}
            >
              {!form.phone.length
                ? "Numer sprawdzamy w czasie rzeczywistym."
                : phoneValid
                  ? "Numer telefonu wygląda poprawnie."
                  : "Wpisz polski numer telefonu w formacie 9 cyfr."}
            </span>
          </label>
        </div>

        <label className="block">
          <span className="mb-2 block text-sm text-slate-200">Typ usługi</span>
          <select
            value={form.service}
            onChange={(event) =>
              setForm((current) => ({ ...current, service: event.target.value }))
            }
            className="w-full rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition focus:border-sky-400/50"
          >
            <option className="bg-slate-900">Montaż kotła gazowego</option>
            <option className="bg-slate-900">Przegląd okresowy</option>
            <option className="bg-slate-900">Instalacja pompy ciepła</option>
            <option className="bg-slate-900">Pogotowie gazowe 24/7</option>
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-slate-200">Krótka wiadomość</span>
          <textarea
            value={form.message}
            onChange={(event) =>
              setForm((current) => ({ ...current, message: event.target.value }))
            }
            placeholder="Opisz krótko, czego potrzebujesz."
            rows={4}
            className="w-full resize-none rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-sky-400/50"
          />
        </label>

        <label className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/5 p-4">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(event) =>
              setForm((current) => ({ ...current, consent: event.target.checked }))
            }
            className="mt-1 h-4 w-4 rounded border-white/20 bg-transparent text-sky-500"
          />
          <span className="text-sm leading-6 text-slate-300">
            Wyrażam zgodę na kontakt telefoniczny i mailowy w celu przedstawienia oferty.
          </span>
        </label>

        {attempted && !canSubmit ? (
          <p className="text-sm text-amber-300">
            Uzupełnij imię, poprawny numer telefonu i zaznacz zgodę marketingową.
          </p>
        ) : null}

        {submitted ? (
          <p className="rounded-2xl border border-emerald-500/25 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
            Dziękujemy. W wersji produkcyjnej ten formularz wyśle zgłoszenie do biura.
          </p>
        ) : null}

        <button
          type="submit"
          className="cta-primary inline-flex w-full items-center justify-center rounded-full px-5 py-3.5 text-sm font-semibold transition sm:w-auto"
        >
          Bezpłatna wycena w 2 minuty
        </button>
      </form>
    </div>
  );
}
