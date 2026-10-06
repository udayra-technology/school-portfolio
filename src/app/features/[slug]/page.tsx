import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
  ArrowUpRight,
  GraduationCap,
  Users,
  Building,
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CTASection } from "@/components/shared/CTASection";
import { FAQSection } from "@/components/shared/FAQSection";
import { Reveal } from "@/components/landing/Reveal";
import {
  FEATURES,
  getFeatureBySlug,
  FeatureItem,
} from "@/data/features";

export async function generateStaticParams() {
  return FEATURES.map((feature) => ({
    slug: feature.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    return {
      title: "Feature Not Found — Scholarix OS",
    };
  }

  return {
    title: feature.seoTitle,
    description: feature.seoDescription,
    keywords: `${feature.targetKeyword}, school ERP, school management software, Scholarix OS`,
    alternates: {
      canonical: `https://scholarix-os.com/features/${feature.slug}`,
    },
    openGraph: {
      title: feature.seoTitle,
      description: feature.seoDescription,
      url: `https://scholarix-os.com/features/${feature.slug}`,
      type: "website",
      siteName: "Scholarix OS",
    },
    twitter: {
      card: "summary_large_image",
      title: feature.seoTitle,
      description: feature.seoDescription,
    },
  };
}

export default async function FeatureDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const feature = getFeatureBySlug(slug);

  if (!feature) {
    notFound();
  }

  const relatedFeatures = feature.relatedSlugs
    .map((s) => getFeatureBySlug(s))
    .filter((f): f is FeatureItem => Boolean(f));

  // JSON-LD SoftwareApplication schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${feature.title} — Scholarix OS`,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web, iOS, Android",
    description: feature.seoDescription,
    offers: {
      "@type": "Offer",
      price: "299",
      priceCurrency: "USD",
    },
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FBF9F5] text-[#0B1320] selection:bg-[#D95338] selection:text-[#FBF9F5]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 sm:pt-16 pb-16 sm:pb-24">
          <div className="pointer-events-none absolute -top-32 right-[-5%] h-[400px] w-[400px] rounded-full bg-[#D95338]/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-[-5%] h-[350px] w-[350px] rounded-full bg-[#2D5A4C]/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Breadcrumbs
              items={[
                { label: "Features", href: "/features" },
                { label: feature.title },
              ]}
            />

            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <Reveal>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D95338]/20 bg-[#D95338]/5 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#D95338]">
                    <Sparkles className="h-3.5 w-3.5" />
                    {feature.badge}
                  </span>
                  <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0B1320] sm:text-5xl lg:text-6xl">
                    {feature.heroHeadline}
                  </h1>
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#7A8899]">
                    {feature.heroSubheadline}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      href="/demo"
                      className="inline-flex items-center gap-2 rounded-full bg-[#D95338] px-7 py-3.5 text-base font-semibold text-[#FBF9F5] shadow-md transition-all duration-200 hover:bg-[#C04325] hover:shadow-lg active:scale-95"
                    >
                      <span>Book a Demo</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href="#how-it-works"
                      className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 py-3.5 text-base font-semibold text-[#0B1320] backdrop-blur transition-all duration-200 hover:bg-white"
                    >
                      See How It Works
                    </Link>
                  </div>

                  <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-[#7A8899]">
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-[#2D5A4C]" />
                      Part of Core Scholarix OS
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-[#2D5A4C]" />
                      CBSE &amp; ICSE Compliant
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="h-4 w-4 text-[#2D5A4C]" />
                      Zero Data Re-entry
                    </span>
                  </div>
                </Reveal>
              </div>

              {/* Product Screenshot */}
              <div className="lg:col-span-5">
                <Reveal delay={0.15}>
                  <div className="relative rounded-[28px] border border-black/5 bg-[#F3ECE2] p-3 shadow-xl">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px]">
                      <Image
                        src={feature.image}
                        alt={feature.imageAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 500px"
                        className="object-cover"
                        priority
                      />
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement vs Resolution */}
        <section className="bg-[#F3ECE2] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <div className="max-w-2xl">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D95338]">
                  The Challenge
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0B1320] sm:text-4xl">
                  {feature.problemStatement.headline}
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {feature.problemStatement.points.map((pt, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="flex h-full flex-col justify-between rounded-[24px] border border-black/5 bg-white p-7 shadow-sm">
                    <div>
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-red-600">
                        <AlertCircle className="h-4 w-4" />
                        <span>The Pain Point</span>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-[#0B1320]">
                        {pt.problem}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-black/5 pt-5">
                      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#2D5A4C]">
                        <CheckCircle2 className="h-4 w-4" />
                        <span>Scholarix Solution</span>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-[#7A8899]">
                        {pt.resolution}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Workflow */}
        <section
          id="how-it-works"
          className="scroll-mt-24 py-20 sm:py-28"
          aria-labelledby="workflow-title"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <div className="text-center">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D95338]">
                  Workflow
                </p>
                <h2
                  id="workflow-title"
                  className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0B1320] sm:text-4xl"
                >
                  How {feature.title} Works
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-base text-[#7A8899]">
                  {feature.overview}
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {feature.workflow.map((item, i) => (
                <Reveal key={item.step} delay={i * 0.08}>
                  <div className="relative rounded-[24px] border border-black/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <span className="font-mono text-3xl font-bold text-[#D95338]">
                      {item.step}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold text-[#0B1320]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#7A8899]">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Key Capabilities */}
        <section className="bg-[#0B1320] py-20 sm:py-28 text-[#FBF9F5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <div className="max-w-2xl">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#C09E3E]">
                  Capabilities
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                  Engineered for Institutional Precision
                </h2>
                <p className="mt-3 text-base text-[#FBF9F5]/70">
                  Every tool designed to handle the scale, nuances, and speed of modern school administration.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {feature.capabilities.map((cap, i) => (
                <Reveal key={cap.title} delay={i * 0.06}>
                  <div className="rounded-[24px] border border-white/10 bg-white/5 p-7 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/10">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D95338]/20 text-[#D95338]">
                      <Layers className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-[#FBF9F5]">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#FBF9F5]/70">
                      {cap.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Role-based Benefits */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <div className="text-center">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D95338]">
                  Outcomes
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0B1320] sm:text-4xl">
                  Who Benefits from {feature.title}?
                </h2>
                <p className="mt-2 text-base text-[#7A8899]">
                  Designed to make life easier for every stakeholder on campus.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {/* School Leadership */}
              <Reveal delay={0.05}>
                <div className="rounded-[28px] border border-black/5 bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D95338]/10 text-[#D95338]">
                      <Building className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#0B1320]">
                        For School &amp; Principals
                      </h3>
                      <p className="text-xs text-[#7A8899]">Governance &amp; Growth</p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {feature.roleBenefits.school.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#0B1320]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2D5A4C]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Teachers */}
              <Reveal delay={0.1}>
                <div className="rounded-[28px] border border-black/5 bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#2D5A4C]/10 text-[#2D5A4C]">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#0B1320]">
                        For Teachers &amp; Staff
                      </h3>
                      <p className="text-xs text-[#7A8899]">Instructional Freedom</p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {feature.roleBenefits.teachers.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#0B1320]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2D5A4C]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Parents */}
              <Reveal delay={0.15}>
                <div className="rounded-[28px] border border-black/5 bg-white p-8 shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C09E3E]/10 text-[#C09E3E]">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-[#0B1320]">
                        For Parents &amp; Students
                      </h3>
                      <p className="text-xs text-[#7A8899]">Clarity &amp; Peace of Mind</p>
                    </div>
                  </div>
                  <ul className="mt-6 space-y-3">
                    {feature.roleBenefits.parents.map((b, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#0B1320]">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#2D5A4C]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Related Features */}
        {relatedFeatures.length > 0 && (
          <section className="bg-[#F3ECE2] py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <Reveal>
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                  <div>
                    <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D95338]">
                      Ecosystem
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0B1320]">
                      Frequently Paired Modules
                    </h2>
                  </div>
                  <Link
                    href="/features"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#D95338] hover:underline"
                  >
                    <span>View all modules</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedFeatures.map((rf, i) => (
                  <Reveal key={rf.slug} delay={i * 0.08}>
                    <Link
                      href={`/features/${rf.slug}`}
                      className="group flex h-full flex-col justify-between rounded-[24px] border border-black/5 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                    >
                      <div>
                        <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#D95338]">
                          {rf.category}
                        </span>
                        <h3 className="mt-2 font-display text-xl font-bold text-[#0B1320] group-hover:text-[#D95338]">
                          {rf.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#7A8899]">
                          {rf.shortDescription}
                        </p>
                      </div>
                      <div className="mt-6 flex items-center gap-1 text-sm font-semibold text-[#0B1320] group-hover:text-[#D95338]">
                        <span>Explore {rf.title}</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </div>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQs */}
        <FAQSection
          title={`${feature.title} FAQs`}
          subtitle={`Frequently asked questions about ${feature.title.toLowerCase()} in Scholarix OS.`}
          faqs={feature.faq}
        />

        {/* High Conversion CTA */}
        <CTASection
          badge={feature.title}
          headline={`See ${feature.title} Live in Your School.`}
          subheadline={`Schedule a customized 20-minute demonstration tailored to your school's enrollment size, academic board, and administrative workflows.`}
          primaryCtaText="Book Guided Demo"
          primaryCtaHref="/demo"
          secondaryCtaText="Compare Pricing"
          secondaryCtaHref="/pricing"
        />
      </main>

      <Footer />
    </div>
  );
}
