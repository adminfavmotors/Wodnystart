"use client";

import Image from "next/image";
import { useState } from "react";

type ShowcaseItem = {
  title: string;
  district: string;
  timeline: string;
  before: string;
  after: string;
  objectPosition: string;
};

type ShowcaseSliderProps = {
  items: ShowcaseItem[];
};

export function ShowcaseSlider({ items }: ShowcaseSliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-sky-300/80">Realizacje</p>
          <h2 className="mt-2 font-[var(--font-heading)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Zobacz, jak zmieniamy kotłownie naszych klientów w Krakowie.
          </h2>
        </div>

        <div className="flex gap-2">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full px-4 py-2 text-sm transition ${
                activeIndex === index
                  ? "bg-sky-500 text-white"
                  : "border border-white/10 bg-white/5 text-slate-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-panel relative overflow-hidden rounded-[32px] p-3">
          <div className="relative h-[380px] overflow-hidden rounded-[24px]">
            <div className="absolute inset-y-0 left-0 z-10 w-1/2 overflow-hidden rounded-l-[24px] border-r border-white/10">
              <div className="absolute inset-0 z-10 bg-slate-950/55" />
              <Image
                src="/images/hero-technician.jpg"
                alt={activeItem.title}
                fill
                className="object-cover opacity-80"
                style={{ objectPosition: activeItem.objectPosition }}
              />
              <span className="absolute left-4 top-4 z-20 rounded-full border border-white/12 bg-slate-950/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-200">
                Przed
              </span>
            </div>

            <div className="absolute inset-y-0 right-0 z-20 w-1/2 overflow-hidden rounded-r-[24px]">
              <Image
                src="/images/hero-technician.jpg"
                alt={activeItem.title}
                fill
                className="object-cover"
                style={{ objectPosition: activeItem.objectPosition }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,123,255,0.12),transparent_36%,rgba(11,17,32,0.12))]" />
              <span className="absolute right-4 top-4 rounded-full border border-sky-400/30 bg-sky-500/20 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white">
                Po
              </span>
            </div>

            <div className="absolute inset-y-0 left-1/2 z-30 w-px -translate-x-1/2 bg-white/30" />
            <div className="absolute left-1/2 top-1/2 z-30 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/12 bg-slate-950/65 text-xs font-semibold text-white">
              2026
            </div>
          </div>
        </div>

        <div className="section-shell rounded-[32px] p-6 sm:p-7">
          <p className="text-sm text-slate-400">{activeItem.district}</p>
          <h3 className="mt-2 font-[var(--font-heading)] text-2xl font-bold tracking-tight text-white">
            {activeItem.title}
          </h3>
          <p className="mt-2 text-sm text-sky-300">{activeItem.timeline}</p>

          <div className="mt-6 space-y-4">
            <div className="rounded-[24px] border border-white/8 bg-white/5 p-4">
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-slate-400">Przed</p>
              <p className="text-sm leading-6 text-slate-300">{activeItem.before}</p>
            </div>
            <div className="rounded-[24px] border border-sky-400/18 bg-sky-500/10 p-4">
              <p className="mb-2 text-xs uppercase tracking-[0.18em] text-sky-200">Po</p>
              <p className="text-sm leading-6 text-slate-100">{activeItem.after}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
