"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { faqs } from "@/lib/data";
import { EASE } from "@/lib/motion";

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faqs" className="py-24 md:py-36">
      <div className="container-x flex flex-col gap-14">
        <SectionHeading
          label="FAQs"
          icon="help"
          title="Common Questions"
          intro="Clear answers to the questions clients ask most — helping you know exactly what to expect before we start."
        />

        <div className="mx-auto w-full max-w-3xl">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            const panelId = `faq-panel-${i}`;
            return (
              <Reveal key={faq.question} delay={i * 0.05}>
                <div className="border-b border-line first:border-t">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="font-display text-lg font-medium tracking-tight md:text-xl">
                      {faq.question}
                    </span>
                    <motion.span
                      aria-hidden
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-xl text-accent"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        id={panelId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-7 leading-relaxed text-faint">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
