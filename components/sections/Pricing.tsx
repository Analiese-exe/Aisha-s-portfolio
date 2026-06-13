"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import {
  contact,
  pricingNote,
  pricingPlans,
  type Currency,
} from "@/lib/data";
import { EASE, fadeUp, stagger, viewportOnce } from "@/lib/motion";

export default function Pricing() {
  const [currency, setCurrency] = useState<Currency>("usd");
  const isLocal = currency === "ngn";

  return (
    <section id="pricing" className="py-24 md:py-36">
      <div className="container-x flex flex-col gap-12">
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            label="Pricing"
            icon="tag"
            title="Simple, Honest Pricing"
            intro="Transparent starting points for every service — switch between international and local rates."
          />

          {/* Currency toggle */}
          <div className="flex shrink-0 items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] sm:gap-4">
            <button
              type="button"
              onClick={() => setCurrency("usd")}
              className={`transition-colors ${
                !isLocal ? "text-cream" : "text-faint hover:text-cream/70"
              }`}
            >
              International<span className="hidden sm:inline"> · USD</span>
            </button>

            <button
              type="button"
              role="switch"
              aria-checked={isLocal}
              aria-label="Switch between international (USD) and local (NGN) pricing"
              onClick={() => setCurrency(isLocal ? "usd" : "ngn")}
              className={`relative inline-flex h-7 w-[3.25rem] shrink-0 items-center rounded-full border px-1 transition-colors duration-300 ${
                isLocal ? "border-accent/50 bg-accent/15" : "border-line bg-surface"
              }`}
            >
              <motion.span
                animate={{ x: isLocal ? 24 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 34 }}
                className="h-5 w-5 rounded-full bg-accent shadow-sm"
              />
            </button>

            <button
              type="button"
              onClick={() => setCurrency("ngn")}
              className={`transition-colors ${
                isLocal ? "text-cream" : "text-faint hover:text-cream/70"
              }`}
            >
              Local<span className="hidden sm:inline"> · NGN</span>
            </button>
          </div>
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {pricingPlans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className="flex flex-col gap-4 rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-accent/50"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-display text-lg font-semibold leading-snug">
                  {plan.name}
                </h3>
                <Icon name="tag" size={16} className="mt-1 shrink-0 text-accent" />
              </div>
              <p className="flex-1 text-sm leading-relaxed text-faint">
                {plan.blurb}
              </p>
              <div className="flex flex-col gap-1 border-t border-line pt-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
                  Starting at
                </span>
                <div className="flex items-baseline gap-1">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={currency}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25, ease: EASE }}
                      className="font-display text-4xl font-bold tracking-tight"
                    >
                      {currency === "usd" ? plan.usd : plan.ngn}
                    </motion.span>
                  </AnimatePresence>
                  {plan.unit && (
                    <span className="text-sm text-faint">{plan.unit}</span>
                  )}
                </div>
              </div>
              <a
                href={contact.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-1 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/80 transition-colors hover:text-accent"
              >
                Book a call
                <Icon
                  name="arrow-up-right"
                  size={14}
                  className="text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </motion.div>
          ))}
        </motion.div>

        <p className="max-w-2xl text-sm leading-relaxed text-faint">{pricingNote}</p>
      </div>
    </section>
  );
}
