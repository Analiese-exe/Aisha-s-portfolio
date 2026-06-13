"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { services } from "@/lib/data";
import { EASE, fadeUp, stagger, viewportOnce } from "@/lib/motion";

export default function Services() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 md:py-36">
      <div className="container-x flex flex-col gap-14">
        <SectionHeading
          label="What I Offer"
          icon="zap"
          title="My Services"
          intro="A focused set of copywriting services designed to help coaches, founders, and growing brands turn attention into inquiries — and inquiries into income."
        />

        {/* Desktop: full linking rows */}
        <motion.ul
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="hidden border-t border-line lg:block"
        >
          {services.map((service, i) => (
            <motion.li key={service.slug} variants={fadeUp}>
              <Link
                href={`/services/${service.slug}`}
                className="group grid gap-3 border-b border-line py-8 transition-colors duration-300 hover:bg-surface/70 md:grid-cols-12 md:items-baseline md:gap-8 md:px-4"
              >
                <span className="font-mono text-xs text-faint md:col-span-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-mono text-lg font-medium uppercase tracking-[0.12em] transition-colors duration-300 group-hover:text-accent md:col-span-5 md:text-xl">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-faint md:col-span-5 md:text-base">
                  {service.description}
                </p>
                <span
                  aria-hidden
                  className="flex justify-end text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent md:col-span-1 md:opacity-0 md:group-hover:opacity-100"
                >
                  <Icon name="arrow-up-right" size={20} />
                </span>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile: collapsible accordion */}
        <div className="border-t border-line lg:hidden">
          {services.map((service, i) => {
            const isOpen = open === i;
            const panelId = `service-panel-${i}`;
            return (
              <div key={service.slug} className="border-b border-line">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="flex w-full items-center gap-4 py-5 text-left"
                >
                  <span className="font-mono text-xs text-faint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`flex-1 font-mono text-base font-medium uppercase tracking-[0.12em] transition-colors ${
                      isOpen ? "text-accent" : ""
                    }`}
                  >
                    {service.title}
                  </span>
                  <motion.span
                    aria-hidden
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-xl text-accent"
                  >
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm leading-relaxed text-faint">
                        {service.description}
                      </p>
                      <Link
                        href={`/services/${service.slug}`}
                        className="mt-3 mb-5 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/80 transition-colors hover:text-accent"
                      >
                        View details
                        <Icon name="arrow-up-right" size={14} className="text-accent" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
