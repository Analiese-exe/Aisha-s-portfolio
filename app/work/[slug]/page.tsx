import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import CTABand from "@/components/sections/CTABand";
import Reveal from "@/components/ui/Reveal";
import { caseStudies, getCaseStudy, nextCaseStudy } from "@/lib/data";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case study not found — Aisha Awaisu" };
  return {
    title: `${study.title} — Aisha Awaisu`,
    description: study.hook,
  };
}

export default async function WorkDetailPage({ params }: Params) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const next = nextCaseStudy(slug);

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
                href="/#work"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-faint transition-colors hover:text-accent"
              >
                <span aria-hidden>←</span> All case studies
              </Link>
            </Reveal>
            <Reveal delay={0.06}>
              <span className="pill">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-accent" />
                {study.tag}
              </span>
            </Reveal>
            <Reveal delay={0.12}>
              <h1 className="max-w-4xl font-display text-[clamp(2.25rem,6vw,4.5rem)] font-bold leading-[1.03] tracking-tight text-balance">
                {study.title}
              </h1>
            </Reveal>
            <Reveal delay={0.18}>
              <p className="max-w-2xl text-lg leading-relaxed text-faint">
                {study.hook}
              </p>
            </Reveal>
          </div>
        </section>

        {/* Pull stat band */}
        <section className="border-y border-line bg-surface/50 py-16 md:py-20">
          <div className="container-x">
            <Reveal>
              <p className="font-display text-[clamp(2.5rem,7vw,5.5rem)] font-bold leading-[1] tracking-tight text-balance">
                {study.pull}
                <span className="text-accent">.</span>
              </p>
            </Reveal>
          </div>
        </section>

        {/* Body: approach + result, with deliverables sidebar */}
        <section className="py-20 md:py-28">
          <div className="container-x grid gap-14 lg:grid-cols-3 lg:gap-20">
            <div className="flex flex-col gap-12 lg:col-span-2">
              <Reveal>
                <div className="flex flex-col gap-4">
                  <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                    The approach
                  </h2>
                  <p className="text-xl leading-relaxed text-cream/90 md:text-2xl">
                    {study.approach}
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.08}>
                <div className="flex flex-col gap-4">
                  <h2 className="font-mono text-xs uppercase tracking-[0.25em] text-accent">
                    The result
                  </h2>
                  <p className="border-l-2 border-accent pl-5 text-lg leading-relaxed text-faint">
                    {study.result}
                  </p>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.12}>
              <aside className="lg:sticky lg:top-28">
                <h2 className="mb-5 font-mono text-xs uppercase tracking-[0.25em] text-accent">
                  What I delivered
                </h2>
                <ul className="flex flex-col gap-3.5">
                  {study.deliverables.map((item) => (
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

        {/* Next case study */}
        <section className="border-t border-line py-14">
          <div className="container-x">
            <Link
              href={`/work/${next.slug}`}
              className="group flex flex-col gap-2"
            >
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
                Next case study
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

        <CTABand />
      </main>
      <Footer />
    </>
  );
}
