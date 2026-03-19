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
    <div className="fixed inset-x-4 bottom-4 z-50 sm:left-6 sm:right-6 lg:left-auto lg:right-8 lg:max-w-md">
      <div className="glass-panel rounded-[24px] p-5">
        <p className="mb-2 text-sm font-semibold text-white">Używamy cookies w rozsądny sposób</p>
        <p className="text-sm leading-6 text-slate-300">
          Tylko po to, by poprawić działanie strony, analizować ruch i obsłużyć formularz zgodnie z
          RODO.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            onClick={() => {
              window.localStorage.setItem(STORAGE_KEY, "accepted");
              window.dispatchEvent(new Event(EVENT_NAME));
            }}
            className="cta-primary inline-flex rounded-full px-4 py-2.5 text-sm font-semibold transition"
          >
            Akceptuję
          </button>
          <Link
            href="/polityka-prywatnosci"
            className="cta-secondary inline-flex rounded-full px-4 py-2.5 text-sm text-slate-200 transition"
          >
            Polityka prywatności
          </Link>
        </div>
      </div>
    </div>
  );
}
