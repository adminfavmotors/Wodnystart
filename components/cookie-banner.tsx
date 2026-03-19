"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

const STORAGE_KEY = "wodny-standart-cookie-consent";
const EVENT_NAME = "wodny-standart-cookie-update";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  window.addEventListener(EVENT_NAME, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(EVENT_NAME, callback);
  };
}

function getSnapshot() {
  return !window.localStorage.getItem(STORAGE_KEY);
}

export function CookieBanner() {
  const visible = useSyncExternalStore(subscribe, getSnapshot, () => false);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-5 bottom-5 z-50 md:left-auto md:right-6 md:max-w-[380px]">
      <div className="card-surface p-6 shadow-[0_18px_48px_rgba(15,25,35,0.12)]">
        <p className="text-[14px] font-medium leading-[1.5] text-[var(--color-text)]">
          Używamy cookies w rozsądny sposób
        </p>
        <p className="mt-2 text-[13px] leading-[1.6] text-[var(--color-text-muted)]">
          Tylko po to, by poprawić działanie strony, analizować ruch i obsłużyć formularz zgodnie z
          RODO.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={() => {
              window.localStorage.setItem(STORAGE_KEY, "accepted");
              window.dispatchEvent(new Event(EVENT_NAME));
            }}
            className="button-base button-primary"
          >
            Akceptuję
          </button>
          <Link href="/polityka-prywatnosci" className="button-base button-secondary">
            Polityka prywatności
          </Link>
        </div>
      </div>
    </div>
  );
}
