"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLenis, useScrollTo } from "@/components/providers/SmoothScroll";
import Icon from "@/components/ui/Icon";
import { navLinks } from "@/lib/data";
import { EASE } from "@/lib/motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const scrollTo = useScrollTo();
  const lenisRef = useLenis();
  const pathname = usePathname();
  const onHome = pathname === "/";

  // On the homepage anchors smooth-scroll; elsewhere they route to "/#section".
  const hrefFor = (hash: string) => (onHome ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Freeze page scroll behind the mobile menu.
  useEffect(() => {
    const lenis = lenisRef?.current;
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [open, lenisRef]);

  const handleNav = (e: React.MouseEvent, hash: string) => {
    setOpen(false);
    if (onHome) {
      e.preventDefault();
      requestAnimationFrame(() => scrollTo(hash));
    }
    // Off the homepage we let the anchor navigate to "/#section".
  };

  return (
    <>
      <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-line bg-ink/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="container-x flex h-18 items-center justify-between py-4">
        <a
          href={onHome ? "#home" : "/"}
          onClick={(e) => {
            if (onHome) {
              e.preventDefault();
              handleNav(e, "#home");
            }
          }}
          className="font-display text-lg font-bold tracking-tight"
        >
          Aisha Awaisu<span className="text-accent">©</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={hrefFor(link.href)}
                onClick={(e) => handleNav(e, link.href)}
                className="group relative font-mono text-xs uppercase tracking-[0.18em] text-faint transition-colors hover:text-cream"
              >
                {link.label}
                <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <a
            href={hrefFor("#contact")}
            onClick={(e) => handleNav(e, "#contact")}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-accent-soft"
          >
            Let&apos;s Talk
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className="h-px w-6 bg-cream"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
            className="h-px w-6 bg-cream"
          />
        </button>
      </nav>
      </header>

      {/* Mobile menu — sibling of header so its fixed positioning is relative
          to the viewport (a backdrop-filter on the header would otherwise
          contain it and shrink the overlay to the header bar). */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-ink/95 backdrop-blur-2xl lg:hidden"
          >
            <div className="container-x flex flex-1 flex-col justify-center gap-1 pb-10 pt-24">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={hrefFor(link.href)}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 12 }}
                  transition={{ delay: 0.05 * i, duration: 0.5, ease: EASE }}
                  onClick={(e) => handleNav(e, link.href)}
                  className="flex items-center gap-4 border-b border-line py-3.5 font-display text-3xl font-bold tracking-tight transition-colors hover:text-accent"
                >
                  <span className="font-mono text-xs text-faint">0{i + 1}</span>
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.35, duration: 0.5, ease: EASE }}
                className="pt-8"
              >
                <a
                  href={hrefFor("#contact")}
                  onClick={(e) => handleNav(e, "#contact")}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 font-medium text-ink"
                >
                  Let&apos;s Talk
                  <Icon name="arrow-right" size={16} />
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
