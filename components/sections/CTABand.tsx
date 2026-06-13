"use client";

import MagneticButton from "@/components/ui/MagneticButton";
import Reveal from "@/components/ui/Reveal";
import Icon, { type IconName } from "@/components/ui/Icon";
import { contact } from "@/lib/data";

const quickLinks: { label: string; href: string; icon: IconName; mail?: boolean }[] =
  [
    { label: "WhatsApp", href: contact.whatsapp, icon: "whatsapp" },
    { label: "Email", href: contact.email, icon: "mail", mail: true },
    { label: "Instagram", href: contact.instagram, icon: "instagram" },
  ];

type CTABandProps = {
  heading?: string;
  body?: string;
};

/** Reused at the bottom of every detail page to drive the discovery-call CTA. */
export default function CTABand({ heading, body }: CTABandProps) {
  return (
    <section className="relative overflow-hidden border-t border-line py-24 md:py-32">
      <div aria-hidden className="glow absolute inset-0 rotate-180" />
      <div className="container-x relative flex flex-col items-center gap-7 text-center">
        <Reveal>
          <h2 className="max-w-3xl font-display text-[clamp(2.25rem,5vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-balance">
            {heading ?? "Like what you see? Let's write yours"}
            <span className="text-accent">.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="max-w-xl leading-relaxed text-faint">
            {body ??
              "Book a free discovery call and let's map the copy that moves your readers from “just looking” to “where do I sign.”"}
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <MagneticButton href={contact.calendly} external size="lg">
            Book a Discovery Call
          </MagneticButton>
        </Reveal>
        <Reveal delay={0.26}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {quickLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.mail
                  ? {}
                  : { target: "_blank", rel: "noopener noreferrer" })}
                className="inline-flex items-center gap-2 rounded-full border border-line px-5 py-2.5 font-mono text-xs uppercase tracking-[0.18em] text-faint transition-colors hover:border-accent hover:text-accent"
              >
                <Icon name={link.icon} size={14} />
                {link.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
