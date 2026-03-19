import Image from "next/image";

type ShowcaseItem = {
  title: string;
  meta: string;
  timeline: string;
  before: string;
  after: string;
  beforeImage: string;
  afterImage: string;
};

type ShowcaseSliderProps = {
  items: ShowcaseItem[];
};

export function ShowcaseSlider({ items }: ShowcaseSliderProps) {
  const activeItem = items[0];

  return (
    <div>
      <div className="mb-12">
        <p className="section-eyebrow">Realizacje</p>
        <h2 className="section-title">Przed i po nowoczesnej modernizacji kotłowni</h2>
      </div>

      <div className="overflow-hidden rounded-[8px] border border-[var(--color-border)] bg-[var(--color-bg-card)]">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[320px]">
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

          <div className="relative min-h-[320px] border-t border-[var(--color-border)] md:border-l md:border-t-0">
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

        <div className="border-t border-[var(--color-border)] bg-[var(--color-bg-card)] p-6 md:p-8">
          <span className="inline-flex rounded-[4px] bg-[var(--color-accent-light)] px-3 py-1 text-[11px] leading-[1.5] text-[var(--color-accent)]">
            {activeItem.meta}
          </span>
          <h3 className="mt-4 font-[var(--font-heading)] text-[20px] font-bold leading-[1.3] text-[var(--color-text)]">
            {activeItem.title}
          </h3>
          <p className="mt-3 text-[13px] leading-[1.5] text-[var(--color-text-muted)]">
            ⚡ {activeItem.timeline}
          </p>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <p className="text-[12px] uppercase tracking-[0.06em] text-[var(--color-text-muted)]">
                Przed
              </p>
              <p className="mt-2 text-[14px] font-light leading-[1.6] text-[var(--color-text-muted)]">
                {activeItem.before}
              </p>
            </div>
            <div>
              <p className="text-[12px] uppercase tracking-[0.06em] text-[var(--color-text-muted)]">
                Po
              </p>
              <p className="mt-2 text-[14px] font-light leading-[1.6] text-[var(--color-text-muted)]">
                {activeItem.after}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
