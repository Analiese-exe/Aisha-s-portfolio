"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import Icon from "@/components/ui/Icon";
import { framework } from "@/lib/data";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

export default function Framework() {
  return (
    <section id="approach" className="py-24 md:py-36">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-line bg-surface/40 p-8 md:p-14 lg:p-16">
          <div aria-hidden className="glow absolute inset-0 opacity-60" />

          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            {/* Heading + lead */}
            <div className="flex flex-col gap-5 lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <span className="pill">
                  <Icon name="zap" size={13} className="text-accent" />
                  {framework.label}
                </span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl">
                  {framework.title}
                  <span className="text-accent">.</span>
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="max-w-md text-lg leading-relaxed text-faint">
                  {framework.lead}
                </p>
              </Reveal>
            </div>

            {/* Steps */}
            <motion.ol
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col"
            >
              {framework.steps.map((step) => (
                <motion.li
                  key={step.no}
                  variants={fadeUp}
                  className="flex gap-5 border-t border-line py-7 first:border-t-0 first:pt-0 sm:gap-7"
                >
                  <span className="font-display text-2xl font-bold text-accent sm:text-3xl">
                    {step.no}
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-xl font-semibold tracking-tight">
                      {step.title}
                    </h3>
                    <p className="leading-relaxed text-faint">{step.body}</p>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </div>
      </div>
    </section>
  );
}
