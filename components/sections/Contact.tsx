"use client";

import Reveal from "@/components/ui/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import Icon, { type IconName } from "@/components/ui/Icon";
import { contact } from "@/lib/data";

const quickLinks: { label: string; href: string; icon: IconName; mail?: boolean }[] =
  [
    { label: "WhatsApp", href: contact.whatsapp, icon: "whatsapp" },
    { label: "Email", href: contact.email, icon: "mail", mail: true },
    { label: "Instagram", href: contact.instagram, icon: "instagram" },
  ];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 md:py-44">
      <div aria-hidden className="glow absolute inset-0 rotate-180" />

      <div className="container-x relative flex flex-col items-center gap-8 text-center">
        <Reveal>
          <span className="pill">
            <Icon name="mail" size={13} className="text-accent" />
            Get In Touch
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="max-w-4xl font-display text-[clamp(2.75rem,8vw,6rem)] font-bold leading-[1.02] tracking-tight text-balance">
            Let&apos;s Work Together<span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mx-auto max-w-2xl leading-relaxed text-faint md:text-lg">
            Whether you&apos;re launching a new offer, growing your list, or need
            copy that finally sounds like <em>you</em> — I&apos;d love to hear
            about it. I&apos;ll get back to you within 24 hours.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <MagneticButton href={contact.calendly} external size="lg">
            Book a Discovery Call
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.3}>
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

        <Reveal delay={0.36}>
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-faint">
            replies within 24 hours · abuja → worldwide
          </p>
        </Reveal>
      </div>
    </section>
  );
}
