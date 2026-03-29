"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const showImmediately = () => {
      element.classList.remove("reveal-enabled");
      element.classList.add("is-visible");
    };

    if (mediaQuery.matches) {
      showImmediately();
      return;
    }

    const rect = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const alreadyInView = rect.top < viewportHeight && rect.bottom > 0;

    if (alreadyInView) {
      showImmediately();
      return;
    }

    element.classList.add("reveal-enabled");
    element.classList.remove("is-visible");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            element.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(element);

    const handleMotionChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        observer.disconnect();
        showImmediately();
      }
    };

    mediaQuery.addEventListener("change", handleMotionChange);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  const style = {
    transitionDelay: `${delay}s`,
  } satisfies CSSProperties;

  return (
    <div
      ref={ref}
      style={style}
      className={`reveal is-visible ${className}`.trim()}
    >
      {children}
    </div>
  );
}
