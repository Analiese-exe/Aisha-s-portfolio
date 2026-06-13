"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import MagneticButton from "@/components/ui/MagneticButton";
import { useScrollTo } from "@/components/providers/SmoothScroll";
import { hero } from "@/lib/data";
import { EASE } from "@/lib/motion";

/** Live clock in Abuja time (WAT). Nigeria uses a single zone: Africa/Lagos. */
function AbujaClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-GB", {
      timeZone: "Africa/Lagos",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(formatter.format(new Date()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return <span className="tabular-nums">{time || "00:00:00"}</span>;
}

export default function Hero() {
  const scrollTo = useScrollTo();
  const words = hero.headline.split(" ");

  return (
    <section
      id="home"
      className="relative flex min-h-svh flex-col justify-center overflow-hidden pt-28 pb-24"
    >
      {/* Ambient glow + oversized watermark */}
      <div aria-hidden className="glow absolute inset-0" />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[22vw] font-bold leading-none tracking-tighter text-cream/[0.025]"
      >
        RADIEESHA
      </div>

      <div className="container-x relative grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
        {/* Text column */}
        <div className="flex flex-col items-start gap-6 sm:gap-7 lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE, delay: 0.15 }}
            className="flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[11px] uppercase tracking-[0.18em] text-faint sm:text-sm sm:tracking-[0.22em]"
          >
            <span className="inline-flex items-center gap-2">
              <span
                aria-hidden
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent"
              />
              <AbujaClock />
            </span>
            <span aria-hidden className="text-accent">·</span>
            <span>{hero.location}</span>
          </motion.p>

          <h1 className="font-display text-[clamp(2.5rem,8.5vw,5.75rem)] font-bold leading-[1.0] tracking-tight sm:leading-[0.98]">
            {words.map((word, i) => (
              <span
                key={`${word}-${i}`}
                className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom"
              >
                <motion.span
                  className={`inline-block ${
                    i < words.length - 1 ? "mr-[0.24em]" : ""
                  } ${word.includes(hero.highlightWord) ? "text-accent" : ""}`}
                  initial={{ y: "115%" }}
                  animate={{ y: 0 }}
                  transition={{
                    duration: 0.85,
                    ease: EASE,
                    delay: 0.3 + i * 0.09,
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
            <span className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em] align-bottom">
              <motion.span
                className="inline-block text-accent"
                initial={{ y: "115%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.85,
                  ease: EASE,
                  delay: 0.3 + words.length * 0.09,
                }}
              >
                .
              </motion.span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.75 }}
            className="max-w-xl text-[15px] leading-relaxed text-faint sm:text-base md:text-lg"
          >
            {hero.subheading}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.9 }}
            className="flex w-full flex-col gap-3 pt-1 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-4"
          >
            <MagneticButton
              onClick={() => scrollTo("#work")}
              size="lg"
              wrapperClassName="w-full sm:w-auto"
              className="w-full justify-center sm:w-auto"
            >
              View My Work
            </MagneticButton>
            <MagneticButton
              onClick={() => scrollTo("#services")}
              variant="outline"
              size="lg"
              wrapperClassName="w-full sm:w-auto"
              className="w-full justify-center sm:w-auto"
            >
              View Services
            </MagneticButton>
          </motion.div>
        </div>

        {/* Portrait column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.45 }}
          className="relative mx-auto w-full max-w-[16rem] sm:max-w-sm lg:col-span-5 lg:max-w-none"
        >
          {/* glow halo */}
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-[2rem] bg-accent/20 blur-3xl"
          />
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
            className="relative overflow-hidden rounded-3xl border border-line bg-raised"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={hero.portrait.src}
                alt={hero.portrait.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 40vw"
                className="object-cover object-top"
              />
              {/* gradient floor for the chip */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/80 to-transparent"
              />
            </div>

            {/* floating availability chip */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full border border-line/80 bg-ink/70 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-cream backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Open for projects
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-faint">
          {hero.scrollCue}
        </span>
        <motion.span
          aria-hidden
          className="h-10 w-px bg-gradient-to-b from-accent to-transparent"
          style={{ transformOrigin: "top" }}
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1.9, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
