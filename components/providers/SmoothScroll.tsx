"use client";

import Lenis from "lenis";
import { MotionConfig } from "framer-motion";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  type ReactNode,
  type RefObject,
} from "react";

const LenisContext = createContext<RefObject<Lenis | null> | null>(null);

/** Access the live Lenis instance (null when reduced motion is on). */
export function useLenis() {
  return useContext(LenisContext);
}

/** Smooth-scroll to an in-page anchor, falling back to native scrolling. */
export function useScrollTo() {
  const lenisRef = useLenis();

  return useCallback(
    (hash: string) => {
      const el = document.querySelector<HTMLElement>(hash);
      if (!el) return;
      if (lenisRef?.current) {
        lenisRef.current.scrollTo(el, { offset: -72, duration: 1.2 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
    [lenisRef]
  );
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;
    if (process.env.NODE_ENV !== "production") {
      (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    }

    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LenisContext.Provider>
  );
}
