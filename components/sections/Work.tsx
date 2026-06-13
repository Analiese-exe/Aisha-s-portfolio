"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { caseStudies, type CaseStudy } from "@/lib/data";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

function CaseStudyCard({ study, index }: { study: CaseStudy; index: number }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-accent/50"
    >
      {/* Typographic "visual" — pull-line over a ghost index number */}
      <div className="relative flex min-h-[220px] items-end overflow-hidden px-7 pb-8 pt-12 md:min-h-[250px]">
        <span
          aria-hidden
          className="absolute -top-7 right-3 select-none font-display text-[8rem] font-bold leading-none text-raised transition-colors duration-500 group-hover:text-accent/15"
        >
          {String(index + 1).padStart(2, "0")}
        </span>
        <p className="relative max-w-[16ch] font-display text-3xl font-bold leading-[1.05] tracking-tight transition-transform duration-300 group-hover:-translate-y-1 md:text-4xl">
          {study.pull}
          <span className="text-accent">.</span>
        </p>
      </div>

      <div className="flex flex-1 flex-col gap-3 border-t border-line px-7 py-6">
        <span className="pill self-start">{study.tag}</span>
        <h3 className="font-display text-lg font-semibold leading-snug md:text-xl">
          {study.title}
        </h3>
        <p className="text-sm leading-relaxed text-faint">{study.hook}</p>

        <span className="mt-auto inline-flex items-center gap-2 pt-2 font-mono text-[11px] uppercase tracking-[0.2em] text-cream/80 transition-colors group-hover:text-accent">
          Read case study
          <span
            aria-hidden
            className="text-base text-accent transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>

      {/* Stretched link makes the whole card clickable */}
      <Link
        href={`/work/${study.slug}`}
        aria-label={`Read case study: ${study.title}`}
        className="absolute inset-0 z-10"
      />
    </motion.article>
  );
}

export default function Work() {
  return (
    <section id="work" className="py-24 md:py-36">
      <div className="container-x flex flex-col gap-14">
        <SectionHeading
          label="Featured Work"
          icon="pen"
          title="Selected Case Studies"
          intro="A curated look at copy built to do one job: move the reader from “just looking” to “where do I sign.” Every project below started with a business problem, not a blank page."
        />
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-6 md:grid-cols-2"
        >
          {caseStudies.map((study, i) => (
            <CaseStudyCard key={study.slug} study={study} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
