"use client";

import Reveal from "@/components/ui/Reveal";
import Icon, { type IconName } from "@/components/ui/Icon";

type SectionHeadingProps = {
  label: string;
  title: string;
  icon?: IconName;
  intro?: string;
  align?: "left" | "center";
};

/** Label pill (with icon) + display heading + intro copy, shared by every section. */
export default function SectionHeading({
  label,
  title,
  icon,
  intro,
  align = "left",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`flex flex-col gap-5 ${
        centered ? "items-center text-center" : "items-start"
      }`}
    >
      <Reveal>
        <span className="pill">
          {icon ? (
            <Icon name={icon} size={13} className="text-accent" />
          ) : (
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
          )}
          {label}
        </span>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
          {title}
          <span className="text-accent">.</span>
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.16}>
          <p
            className={`max-w-2xl text-base leading-relaxed text-faint md:text-lg ${
              centered ? "mx-auto" : ""
            }`}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
