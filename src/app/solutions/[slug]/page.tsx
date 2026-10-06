import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  Building,
  School,
  ArrowUpRight,
  BookOpen,
  CalendarCheck,
  CreditCard,
  FileSpreadsheet,
  Users,
  Layers,
  Sliders,
  BarChart3,
  Zap,
  Info,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CTASection } from "@/components/shared/CTASection";
import { FAQSection } from "@/components/shared/FAQSection";
import { Reveal } from "@/components/landing/Reveal";
import {
  SOLUTIONS,
  getSolutionBySlug,
  SolutionItem,
} from "@/data/solutions";

const ICON_MAP: Record<string, React.ElementType> = {
  Zap,
  CreditCard,
  CalendarCheck,
  BookOpen,
  Sparkles,
  FileSpreadsheet,
  Layers,
  FileCheck2: BookOpen,
  Sliders,
  MessageSquare: Sparkles,
  ShieldCheck,
  BarChart3,
  ShieldAlert: ShieldCheck,
  Users,
};

export async function generateStaticParams() {
  return SOLUTIONS.map((sol) => ({
    slug: sol.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return {
      title: "Solution Not Found — Scholarix OS",
    };
  }

  return {
    title: solution.seoTitle,
    description: solution.seoDescription,
    keywords: `${solution.targetKeyword}, school ERP, school management system, Scholarix OS`,
    alternates: {
      canonical: `https://scholarix-os.com/solutions/${solution.slug}`,
    },
    openGraph: {
      title: solution.seoTitle,
      description: solution.seoDescription,
      url: `https://scholarix-os.com/solutions/${solution.slug}`,
      type: "website",
      siteName: "Scholarix OS",
    },
    twitter: {
      card: "summary_large_image",
      title: solution.seoTitle,
      description: solution.seoDescription,
    },
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${solution.title} — Scholarix OS`,
    serviceType: "School ERP & Management Software",
    description: solution.seoDescription,
    provider: {
      "@type": "Organization",
      name: "Scholarix OS",
      url: "https://scholarix-os.com",
    },
    areaServed: "IN",
  };

  const otherSolutions = SOLUTIONS.filter((s) => s.slug !== solution.slug);

  return (
    <div className="flex min-h-screen flex-col bg-[#FBF9F5] text-[#0B1320] selection:bg-[#D95338] selection:text-[#FBF9F5]">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden pt-12 sm:pt-16 pb-16 sm:pb-24">
          <div className="pointer-events-none absolute -top-32 right-[-5%] h-[420px] w-[420px] rounded-full bg-[#D95338]/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-[-5%] h-[360px] w-[360px] rounded-full bg-[#2D5A4C]/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Breadcrumbs
              items={[
                { label: "Solutions", href: "/solutions" },
                { label: solution.navLabel },
              ]}
            />

            <div className="mx-auto max-w-4xl text-center">
              <Reveal>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D95338]/20 bg-[#D95338]/5 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#D95338]">
                  <Sparkles className="h-3.5 w-3.5" />
                  {solution.badge}
                </span>

                <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0B1320] sm:text-5xl lg:text-6xl">
                  {solution.heroHeadline}
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-[#7A8899] sm:text-xl">
                  {solution.heroSubheadline}
                </p>

                {/* Optional compliance/disclaimer banner (crucial for CBSE) */}
                {solution.complianceNote && (
                  <div className="mt-6 mx-auto max-w-2xl rounded-2xl border border-amber-500/20 bg-amber-500/5 p-4 text-left text-xs leading-relaxed text-amber-900">
                    <div className="flex items-start gap-2.5">
                      <Info className="h-4 w-4 shrink-0 text-amber-700 mt-0.5" />
                      <span>{solution.complianceNote}</span>
                    </div>
                  </div>
                )}

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 rounded-full bg-[#D95338] px-8 py-4 text-base font-semibold text-[#FBF9F5] shadow-md transition-all duration-200 hover:bg-[#C04325] hover:shadow-lg active:scale-95"
                  >
                    <span>Book a Demo</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-7 py-4 text-base font-semibold text-[#0B1320] backdrop-blur transition-all duration-200 hover:bg-white"
                  >
                    View Transparent Pricing
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Metrics Ribbon */}
            <div className="mt-14 sm:mt-20 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {solution.metrics.map((metric, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm text-center"
                >
                  <p className="font-mono text-3xl sm:text-4xl font-bold tracking-tight text-[#D95338]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm font-semibold text-[#0B1320]">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-xs text-[#7A8899]">
                    {metric.subtext}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 2. Positioning Quote */}
        <section className="py-12 bg-[#F3ECE2]/50 border-y border-black/5">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-[#2D5A4C] font-semibold">
              Tailored Value Proposition
            </p>
            <blockquote className="mt-4 font-display text-xl sm:text-2xl font-medium italic text-[#0B1320] leading-snug">
              &ldquo;{solution.positioningQuote}&rdquo;
            </blockquote>
            <p className="mt-3 text-xs text-[#7A8899]">
              Targeted for: {solution.targetAudience}
            </p>
          </div>
        </section>

        {/* 3. Operational Friction vs Scholarix OS Solution */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#D95338]">
                Addressing Operational Realities
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0B1320] sm:text-4xl">
                Common Pain Points Solved
              </h2>
              <p className="mt-3 text-base text-[#7A8899]">
                Why generic, one-size-fits-all ERPs fail for {solution.navLabel}—and how Scholarix OS fixes it.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {solution.challenges.map((ch, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-7 shadow-sm"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-rose-600">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>Traditional Hurdle</span>
                    </div>
                    <p className="mt-3 text-sm font-medium leading-relaxed text-[#0B1320]">
                      {ch.problem}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-black/5 pt-5">
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#2D5A4C]">
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                      <span>The Scholarix OS Fix</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-[#7A8899]">
                      {ch.resolution}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Core Pillars */}
        <section className="py-16 sm:py-24 bg-[#0B1320] text-[#FBF9F5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#C09E3E]">
                Pillar Capabilities
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Built Around Your Specific Workflows
              </h2>
              <p className="mt-3 text-base text-[#FBF9F5]/70">
                Each capability is crafted to match the exact regulatory and administrative rhythm of your institution.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {solution.pillars.map((pillar, idx) => {
                const IconComponent = ICON_MAP[pillar.iconName] || Sparkles;
                return (
                  <div
                    key={idx}
                    className="relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-all duration-200 hover:border-[#D95338]/40 hover:bg-white/[0.08]"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D95338]/20 text-[#D95338]">
                          <IconComponent className="h-5 w-5" />
                        </div>
                        {pillar.stat && (
                          <span className="font-mono text-[11px] font-semibold text-[#C09E3E]">
                            {pillar.stat}
                          </span>
                        )}
                      </div>
                      <h3 className="mt-5 font-display text-lg font-bold text-[#FBF9F5]">
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-[#FBF9F5]/70">
                        {pillar.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. End-to-End Workflow */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#D95338]">
                Lifecycle Architecture
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0B1320] sm:text-4xl">
                How It Works from Day 1
              </h2>
              <p className="mt-3 text-base text-[#7A8899]">
                A predictable, proven journey designed for zero disruption to your daily operations.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-4">
              {solution.workflow.map((item) => (
                <div
                  key={item.step}
                  className="relative rounded-3xl border border-black/5 bg-white p-6 shadow-sm"
                >
                  <span className="font-mono text-2xl font-black text-[#D95338]/30">
                    {item.step}
                  </span>
                  <h3 className="mt-2 font-display text-base font-bold text-[#0B1320]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#7A8899]">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Stakeholder Perspectives */}
        <section className="py-16 sm:py-24 bg-[#F3ECE2]/40 border-t border-black/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#2D5A4C]">
                Institutional Impact
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0B1320] sm:text-4xl">
                What Leadership & Staff Say
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {solution.roleBenefits.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2D5A4C]">
                      {item.role}
                    </span>
                    <blockquote className="mt-4 text-sm font-medium italic text-[#0B1320] leading-relaxed">
                      &ldquo;{item.quote}&rdquo;
                    </blockquote>
                  </div>
                  <div className="mt-6 border-t border-black/5 pt-4 text-xs text-[#7A8899]">
                    <span className="font-semibold text-[#0B1320]">Outcome: </span>
                    {item.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Interconnected Modules & Internal Linking */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#D95338]">
                  Interconnected System
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#0B1320]">
                  Core Modules Supporting {solution.navLabel}
                </h2>
              </div>
              <Link
                href="/features"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D95338] hover:underline"
              >
                <span>View all 13 modules</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {solution.relatedFeatures.map((feat) => (
                <Link
                  key={feat.slug}
                  href={`/features/${feat.slug}`}
                  className="group rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#D95338]/30 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#2D5A4C]">
                      Module
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#7A8899] group-hover:text-[#D95338] transition-colors" />
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-[#0B1320] group-hover:text-[#D95338] transition-colors">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#7A8899]">
                    {feat.reason}
                  </p>
                </Link>
              ))}
            </div>

            {/* Other Solutions switcher */}
            <div className="mt-14 pt-10 border-t border-black/5">
              <h3 className="text-sm font-semibold text-[#7A8899] uppercase tracking-wider font-mono">
                Explore Other School Profiles:
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {otherSolutions.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/solutions/${other.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium text-[#0B1320] transition-colors hover:border-[#D95338] hover:text-[#D95338]"
                  >
                    <span>{other.navLabel}</span>
                    <ChevronRight className="h-3 w-3 text-[#7A8899]" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 8. FAQs */}
        <FAQSection
          title={`Frequently Asked Questions — ${solution.navLabel}`}
          subtitle={`Everything you need to know about implementing Scholarix OS for ${solution.navLabel}.`}
          faqs={solution.faq}
        />

        {/* 9. CTA Section */}
        <CTASection
          badge={solution.badge}
          headline={`Ready to Upgrade Your ${solution.navLabel}?`}
          subheadline={`See how Scholarix OS gives your leadership team clarity and operational control. Book a 25-minute live demo customized for ${solution.navLabel}.`}
          primaryCtaText="Book a Demo"
          primaryCtaHref="/demo"
          secondaryCtaText="Contact Our Team"
          secondaryCtaHref="/contact"
        />
      </main>

      <Footer />
    </div>
  );
}
