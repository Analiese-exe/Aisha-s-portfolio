"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import { testimonials, type Testimonial } from "@/lib/data";
import { fadeUp, stagger, viewportOnce } from "@/lib/motion";

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <motion.article
      variants={fadeUp}
      className="flex w-[85vw] max-w-md shrink-0 snap-start flex-col gap-6 rounded-2xl border border-line bg-surface p-8"
    >
      <div
        aria-label="Rated 5 out of 5 stars"
        className="flex gap-1 text-accent"
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" size={15} />
        ))}
      </div>
      <blockquote className="flex-1 text-base leading-relaxed text-cream/90 md:text-lg">
        “{t.quote}”
      </blockquote>
      <footer className="flex items-center gap-4 border-t border-line pt-6">
        <span
          aria-hidden
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/15 font-display text-sm font-bold text-accent"
        >
          {initials(t.name)}
        </span>
        <div>
          <p className="font-display font-semibold">{t.name}</p>
          <p className="font-mono text-xs uppercase tracking-[0.15em] text-faint">
            {t.role}
          </p>
        </div>
      </footer>
    </motion.article>
  );
}

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const step = card ? card.clientWidth + 24 : 420;
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  return (
    <section id="testimonials" className="overflow-hidden py-24 md:py-36">
      <div className="container-x flex flex-col gap-14">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            label="Client Feedback"
            icon="chat"
            title="What Clients Say"
            intro="Real experiences from coaches and founders who trusted Aisha with their words — and saw the difference clear, strategic copy makes."
          />
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              aria-label="Previous testimonial"
              className="grid h-12 w-12 place-items-center rounded-full border border-line text-lg transition-colors hover:border-accent hover:text-accent"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              aria-label="Next testimonial"
              className="grid h-12 w-12 place-items-center rounded-full border border-line text-lg transition-colors hover:border-accent hover:text-accent"
            >
              →
            </button>
          </div>
        </div>

        <motion.div
          ref={trackRef}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          tabIndex={0}
          aria-label="Client testimonials, scroll horizontally"
          className="no-scrollbar -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-2 sm:-mx-8 sm:px-8"
        >
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
