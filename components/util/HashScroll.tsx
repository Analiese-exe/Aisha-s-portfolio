"use client";

import { useEffect } from "react";
import { useScrollTo } from "@/components/providers/SmoothScroll";

/**
 * When the homepage loads with a hash (e.g. arriving at "/#work" from a
 * detail page), smooth-scroll to that section once layout settles.
 */
export default function HashScroll() {
  const scrollTo = useScrollTo();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash === "#home") return;
    const id = setTimeout(() => scrollTo(hash), 250);
    return () => clearTimeout(id);
  }, [scrollTo]);

  return null;
}
