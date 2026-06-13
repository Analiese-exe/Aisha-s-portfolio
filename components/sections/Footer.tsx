"use client";

import { usePathname } from "next/navigation";
import { useScrollTo } from "@/components/providers/SmoothScroll";
import Icon, { type IconName } from "@/components/ui/Icon";
import { contact, footerColumns } from "@/lib/data";

const SOCIAL_ICONS: Record<string, IconName> = {
  Instagram: "instagram",
  WhatsApp: "whatsapp",
  Email: "mail",
};

export default function Footer() {
  const scrollTo = useScrollTo();
  const pathname = usePathname();
  const onHome = pathname === "/";
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-surface/40">
      <div className="container-x py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr_1fr] md:gap-12">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <p className="font-display text-xl font-bold tracking-tight">
              Aisha Awaisu<span className="text-accent">©</span>
            </p>
            <p className="max-w-xs text-sm leading-relaxed text-faint">
              Copy that turns casual scrollers into loyal, paying clients —
              written in Abuja, read everywhere.
            </p>
            <p className="font-mono text-xs tracking-[0.15em] text-faint">
              {contact.instagramHandle}
            </p>
          </div>

          {/* Link columns — 2-up grid on mobile, inline columns on desktop */}
          <div className="grid grid-cols-2 gap-8 md:contents">
            {footerColumns.map((column) => {
              const isSocial = column.label === "Socials";
              return (
                <nav key={column.label} aria-label={column.label}>
                  <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-accent">
                    {column.label}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {column.links.map((link) => {
                      const isAnchor =
                        !link.external &&
                        link.href.startsWith("#") &&
                        link.href !== "#";
                      const isMail = link.href.startsWith("mailto:");
                      const href =
                        link.external || isMail
                          ? link.href
                          : isAnchor && !onHome
                            ? `/${link.href}`
                            : link.href;
                      const icon = isSocial ? SOCIAL_ICONS[link.label] : undefined;
                      return (
                        <li key={link.label}>
                          <a
                            href={href}
                            {...(link.external && !isMail
                              ? { target: "_blank", rel: "noopener noreferrer" }
                              : {})}
                            {...(!link.external
                              ? {
                                  onClick: (e: React.MouseEvent) => {
                                    if (isAnchor && onHome) {
                                      e.preventDefault();
                                      scrollTo(link.href);
                                    }
                                  },
                                }
                              : {})}
                            className="inline-flex items-center gap-2.5 text-sm text-faint transition-colors hover:text-cream"
                          >
                            {icon && <Icon name={icon} size={14} />}
                            {link.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              );
            })}
          </div>
        </div>
      </div>

      {/* Giant closing wordmark */}
      <div className="overflow-hidden px-2" aria-hidden>
        <p className="select-none whitespace-nowrap text-center font-display text-[clamp(2.8rem,11.5vw,11rem)] font-bold leading-[0.85] tracking-tighter text-cream/[0.06] transition-colors duration-700 hover:text-accent/15">
          AISHA AWAISU©
        </p>
      </div>

      <div className="border-t border-line">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 font-mono text-[11px] uppercase tracking-[0.2em] text-faint sm:flex-row">
          <p>© {year} Aisha Awaisu. All rights reserved.</p>
          <p className="inline-flex items-center gap-2">
            Abuja <Icon name="arrow-right" size={13} className="text-accent" />{" "}
            Worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
