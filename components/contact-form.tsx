"use client";

import { useState } from "react";

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

  const phoneValid = isValidPolishPhone(form.phone);
  const canSubmit = phoneValid && form.name.trim().length > 1 && form.consent;

  return (
    <div className="contact-panel p-8 max-md:p-5">
      <form
        className="space-y-5"
        onSubmit={(event) => {
          event.preventDefault();
          setAttempted(true);

          if (!canSubmit) {
            return;
          }

          setSubmitted(true);
          setAttempted(false);
          setForm(initialState);
        }}
      >
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <p className="form-label">Imię</p>
            <input
              value={form.name}
              onChange={(event) =>
                setForm((current) => ({ ...current, name: event.target.value }))
              }
              placeholder="Np. Michał"
              className="form-field"
            />
          </label>

          <label className="block">
            <p className="form-label">Telefon</p>
            <input
              value={form.phone}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  phone: formatPolishPhone(event.target.value),
                }))
              }
              inputMode="tel"
              placeholder="+48 XXX XXX XXX"
              className="form-field"
            />
          </label>
        </div>

        <label className="block">
          <p className="form-label">Typ usługi</p>
          <select
            value={form.service}
            onChange={(event) =>
              setForm((current) => ({ ...current, service: event.target.value }))
            }
            className="form-field select-field"
          >
            <option>Montaż kotła gazowego</option>
            <option>Przegląd okresowy</option>
            <option>Instalacja pompy ciepła</option>
            <option>Pogotowie gazowe 24/7</option>
          </select>
        </label>

        <label className="block">
          <p className="form-label">Krótka wiadomość</p>
          <textarea
            value={form.message}
            onChange={(event) =>
              setForm((current) => ({ ...current, message: event.target.value }))
            }
            placeholder="Opisz krótko, czego potrzebujesz."
            className="form-field min-h-20 resize-y"
          />
        </label>

        <label className="flex items-start gap-3 rounded-[8px] border border-[var(--color-border)] bg-[var(--color-bg)] p-4">
          <input
            type="checkbox"
            checked={form.consent}
            onChange={(event) =>
              setForm((current) => ({ ...current, consent: event.target.checked }))
            }
            className="mt-[2px] h-4 w-4 accent-[var(--color-accent)]"
          />
          <span className="meta-text leading-6">
            Wyrażam zgodę na kontakt telefoniczny i mailowy w celu przedstawienia oferty.
          </span>
        </label>

        {attempted && !canSubmit ? (
          <p className="text-[13px] leading-[1.5] text-[var(--color-orange)]">
            Uzupełnij imię, poprawny numer telefonu i zaznacz zgodę na kontakt.
          </p>
        ) : null}

        {submitted ? (
          <p className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-accent-light)] px-4 py-3 text-[13px] leading-[1.5] text-[var(--color-accent)]">
            Dziękujemy. W wersji produkcyjnej formularz wyśle zgłoszenie bezpośrednio do biura.
          </p>
        ) : null}

        <button type="submit" className="button-base button-primary h-[52px] w-full">
          Zamów bezpłatną wycenę -&gt;
        </button>
      </form>
    </div>
  );
}
