"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { aboutBio, aboutColumns, aboutImages, type AboutImage } from "@/lib/data";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

/** A small corner "screw" dot, four of which pin each photo. */
function Screw({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`absolute h-1.5 w-1.5 rounded-full bg-cream/30 ring-1 ring-ink/40 ${className}`}
    />
  );
}

const TILT = ["-rotate-3", "rotate-2", "-rotate-2", "rotate-3"];

function PinnedPhoto({ image, index }: { image: AboutImage; index: number }) {
  return (
    <motion.div
      variants={fadeUp}
      className="w-[64%] shrink-0 snap-center sm:w-[44%] md:w-auto"
    >
      <div
        className={`group relative rounded-2xl border border-line bg-raised p-2.5 shadow-2xl shadow-ink/60 transition-transform duration-500 ${
          TILT[index % TILT.length]
        } hover:z-10 hover:-translate-y-2 hover:rotate-0`}
      >
        <Screw className="left-2 top-2" />
        <Screw className="right-2 top-2" />
        <Screw className="bottom-2 left-2" />
        <Screw className="bottom-2 right-2" />
        <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 768px) 64vw, 30vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="border-y border-line bg-surface/40 py-24 md:py-36"
    >
      <div className="container-x flex flex-col gap-14">
        <SectionHeading
          label="About Me"
          icon="user"
          title="Who I Am"
          intro="A closer look at the strategy, curiosity, and craft behind every word I write."
        />

        {/* Pinned photo gallery */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 py-4 sm:gap-5 md:mx-0 md:grid md:grid-cols-3 md:gap-7 md:overflow-visible md:px-0"
        >
          {aboutImages.map((image, i) => (
            <PinnedPhoto key={image.src} image={image} index={i} />
          ))}
        </motion.div>

        {/* Bio + credentials */}
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Bio — sticky on desktop while credentials scroll */}
          <div className="flex flex-col gap-6 self-start lg:sticky lg:top-28">
            {aboutBio.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p
                  className={
                    i === 0
                      ? "font-display text-xl font-medium leading-relaxed text-cream md:text-2xl"
                      : "leading-relaxed text-faint"
                  }
                >
                  {paragraph}
                </p>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <p className="border-l-2 border-accent pl-5 font-mono text-sm uppercase tracking-[0.2em] text-faint">
                Aisha Awaisu <span className="text-accent">·</span> Radieesha
              </p>
            </Reveal>
          </div>

          {/* Credentials */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col"
          >
            {aboutColumns.map((column) => (
              <motion.div
                key={column.label}
                variants={fadeUp}
                className="border-t border-line py-8 first:border-t-0 first:pt-0"
              >
                <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-accent">
                  {column.label}
                </h3>
                <ul className="flex flex-col gap-3.5">
                  {column.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 leading-relaxed text-cream/85"
                    >
                      <span
                        aria-hidden
                        className="mt-2.5 h-px w-5 shrink-0 bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
