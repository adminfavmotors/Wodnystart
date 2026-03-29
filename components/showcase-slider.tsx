import Image from "next/image";
import Link from "next/link";

type ShowcaseItem = {
  title: string;
  meta: string;
  timeline: string;
  before: string;
  after: string;
  beforeImage: string;
  afterImage: string;
  href: string;
};

type ShowcaseSliderProps = {
  items: ShowcaseItem[];
};

export function ShowcaseSlider({ items }: ShowcaseSliderProps) {
  const activeItem = items[0];

  return (
    <div>
      <div className="mb-10">
        <h2 className="section-title section-title-surface">
          Przed i po nowoczesnej modernizacji kotłowni
        </h2>
      </div>

      <div className="case-card overflow-hidden">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[300px]">
            <Image
              src={activeItem.beforeImage}
              alt="Stan kotłowni przed realizacją"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute left-4 top-4 z-10 rounded-[4px] bg-[rgba(0,0,0,0.55)] px-3 py-[6px] text-[12px] uppercase tracking-[0.06em] text-white">
              Przed
            </span>
          </div>

          <div className="relative min-h-[300px] border-t border-[var(--color-border)] md:border-l md:border-t-0">
            <Image
              src={activeItem.afterImage}
              alt="Stan kotłowni po realizacji"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
            <span className="absolute left-4 top-4 z-10 rounded-[4px] bg-[rgba(29,95,166,0.7)] px-3 py-[6px] text-[12px] uppercase tracking-[0.06em] text-white">
              Po
            </span>
          </div>
        </div>

        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-card)] p-6">
          <span className="inline-flex rounded-[4px] bg-[var(--color-accent-light)] px-3 py-1 text-[11px] leading-[1.5] text-[var(--color-accent)]">
            {activeItem.meta}
          </span>
          <h3 className="case-card-title mt-4">
            <Link
              href={activeItem.href}
              className="transition duration-200 ease-in-out hover:text-[var(--color-accent)]"
            >
              {activeItem.title}
            </Link>
          </h3>
          <p className="mt-3 text-[13px] leading-[1.5] text-[var(--color-text-muted)]">
            {activeItem.timeline}
          </p>

          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div>
              <p className="text-[12px] uppercase tracking-[0.06em] text-[var(--color-text-muted)]">
                Przed
              </p>
              <p className="case-card-copy mt-2">{activeItem.before}</p>
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-[0.06em] text-[var(--color-text-muted)]">
                Po
              </p>
              <p className="case-card-copy mt-2">{activeItem.after}</p>
            </div>
          </div>

          <div className="mt-5">
            <Link
              href={activeItem.href}
              className="button-base button-secondary px-4 py-[10px] text-[12px]"
            >
              Zobacz realizację
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
