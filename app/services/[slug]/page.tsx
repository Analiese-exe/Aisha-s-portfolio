import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTABand from "@/components/sections/CTABand";
import Reveal from "@/components/ui/Reveal";
import {
  getService,
  nextService,
  serviceProcess,
  services,
} from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service not found — Aisha Awaisu" };
  return {
    title: `${service.title} — Aisha Awaisu`,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const index = services.findIndex((s) => s.slug === slug);
  const next = nextService(slug);

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-20">
          <div aria-hidden className="glow absolute inset-0" />
          <div className="container-x relative flex flex-col gap-8">
            <Reveal>
              <Link
                href="/#services"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-faint transition-colors hover:text-accent"
              >
                <span aria-hidden>←</span> All services
              </Link>
            </Reveal>
            <Reveal delay={0.06}>
              <span className="pill">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                Service {String(index + 1).padStart(2, "0")}
              </span>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="max-w-4xl font-display text-[clamp(2.5rem,7vw,5rem)] font-bold leading-[1.02] tracking-tight text-balance">
                {service.title}
                <span className="text-accent">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="max-w-2xl text-lg leading-relaxed text-faint">
                {service.tagline}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Overview + includes */}
        <section className="border-t border-line py-20 md:py-28">
          <div className="container-x grid gap-14 lg:grid-cols-3 lg:gap-20">
            <div className="lg:col-span-2">
              <Reveal>
                <h2 className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-accent">
                  Overview
                </h2>
                <p className="text-xl leading-relaxed text-cream/90 md:text-2xl">
                  {service.description}
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <aside className="lg:sticky lg:top-28">
                <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-accent">
                  What&apos;s included
                </h2>
                <ul className="flex flex-col gap-3.5">
                  {service.includes.map((item) => (
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
              </aside>
            </Reveal>
          </div>
        </section>

        {/* Process */}
        <section className="border-t border-line py-20 md:py-28">
          <div className="container-x flex flex-col gap-12">
            <Reveal>
              <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
                How it works<span className="text-accent">.</span>
              </h2>
            </Reveal>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {serviceProcess.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.08}>
                  <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface p-6">
                    <span className="font-display text-3xl font-bold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-lg font-semibold">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-faint">
                      {step.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Next service */}
        <section className="border-t border-line py-14">
          <div className="container-x">
            <Link
              href={`/services/${next.slug}`}
              className="group flex flex-col gap-2"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                Next service
              </span>
              <span className="flex items-center gap-3 font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-accent md:text-3xl">
                {next.title}
                <span
                  aria-hidden
                  className="text-accent transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </span>
            </Link>
          </div>
        </section>

        <CTABand
          heading={`Ready for ${service.title.toLowerCase()} that converts`}
          body="Book a free discovery call and let's turn your offer into copy that does the selling for you."
        />
      </main>
      <Footer />
    </>
  );
}
