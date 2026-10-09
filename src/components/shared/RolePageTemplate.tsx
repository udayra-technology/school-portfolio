import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CTASection } from "@/components/shared/CTASection";
import { FAQSection } from "@/components/shared/FAQSection";
import { Reveal } from "@/components/landing/Reveal";
import { RoleItem, ROLES } from "@/data/roles";

export function RolePageTemplate({ role }: { role: RoleItem }) {
  const otherRoles = ROLES.filter((r) => r.slug !== role.slug);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: role.roleTitle,
    description: role.seoDescription,
    url: `https://scholarix-os.com/${role.slug}`,
    isPartOf: {
      "@type": "WebSite",
      name: "Scholarix OS",
      url: "https://scholarix-os.com",
    },
  };

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
          <div className="pointer-events-none absolute -top-32 right-[-5%] h-[400px] w-[400px] rounded-full bg-[#D95338]/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-[-5%] h-[350px] w-[350px] rounded-full bg-[#2D5A4C]/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Breadcrumbs
              items={[
                { label: "Solutions", href: "/solutions" },
                { label: role.roleTitle },
              ]}
            />

            <div className="mx-auto max-w-4xl text-center">
              <Reveal>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#2D5A4C]/20 bg-[#2D5A4C]/5 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#2D5A4C]">
                  <Sparkles className="h-3.5 w-3.5" />
                  {role.roleBadge}
                </span>

                <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0B1320] sm:text-5xl lg:text-6xl">
                  {role.heroHeadline}
                </h1>

                <p className="mt-6 text-lg leading-relaxed text-[#7A8899] sm:text-xl">
                  {role.heroSubheadline}
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 rounded-full bg-[#D95338] px-8 py-4 text-base font-semibold text-[#FBF9F5] shadow-md transition-all duration-200 hover:bg-[#C04325] hover:shadow-lg active:scale-95"
                  >
                    <span>Schedule 1-on-1 Walkthrough</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/product"
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-7 py-4 text-base font-semibold text-[#0B1320] backdrop-blur transition-all duration-200 hover:bg-white"
                  >
                    Explore Product Overview
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 2. A Day in the Life: Daily Routine Timeline */}
        <section className="py-16 sm:py-24 bg-[#F3ECE2]/40 border-y border-black/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#D95338]">
                Daily Cadence
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0B1320] sm:text-4xl">
                A Day in the Life with Scholarix OS
              </h2>
              <p className="mt-3 text-base text-[#7A8899]">
                {role.dailyCockpitSummary}
              </p>
            </div>

            <div className="mt-12 max-w-3xl mx-auto space-y-4">
              {role.dailyRoutine.map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-black/5 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#2D5A4C]/10 px-3 py-1 font-mono text-xs font-semibold text-[#2D5A4C]">
                      <Clock className="h-3 w-3" />
                      {item.time}
                    </span>
                    <h3 className="font-display text-base font-bold text-[#0B1320]">
                      {item.activity}
                    </h3>
                  </div>
                  <p className="text-xs text-[#7A8899] sm:text-right max-w-md">
                    {item.impact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Core Capabilities */}
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#2D5A4C]">
                Workspace Superpowers
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0B1320] sm:text-4xl">
                Designed Specifically for {role.roleTitle}
              </h2>
              <p className="mt-3 text-base text-[#7A8899]">
                Tools built to simplify your daily work, prevent bottlenecks, and keep communication clear.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {role.capabilities.map((cap, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-black/5 bg-white p-7 shadow-sm flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:border-[#2D5A4C]/30 hover:shadow-md"
                >
                  <div>
                    <span className="inline-flex rounded-full border border-[#2D5A4C]/20 bg-[#2D5A4C]/5 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#2D5A4C]">
                      {cap.tag}
                    </span>
                    <h3 className="mt-4 font-display text-xl font-bold text-[#0B1320]">
                      {cap.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#7A8899]">
                      {cap.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Before vs After Transformation */}
        <section className="py-16 sm:py-24 bg-[#0B1320] text-[#FBF9F5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#C09E3E]">
                The Transformation
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                Before & After Scholarix OS
              </h2>
              <p className="mt-3 text-base text-[#FBF9F5]/70">
                The stark contrast between manual, paper-heavy friction and modern digital ease.
              </p>
            </div>

            <div className="mt-12 space-y-4 max-w-4xl mx-auto">
              {role.beforeAfter.map((item, idx) => (
                <div
                  key={idx}
                  className="grid gap-4 md:grid-cols-2 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                >
                  <div className="rounded-2xl bg-white/[0.04] p-5 border border-white/5">
                    <p className="font-mono text-xs font-semibold text-rose-400 uppercase tracking-wider">
                      Without Scholarix OS
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-[#FBF9F5]/70 leading-relaxed">
                      {item.before}
                    </p>
                  </div>
                  <div className="rounded-2xl bg-[#2D5A4C]/30 p-5 border border-[#2D5A4C]/50">
                    <p className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-wider">
                      With Scholarix OS
                    </p>
                    <p className="mt-2 text-xs sm:text-sm text-[#FBF9F5] leading-relaxed font-medium">
                      {item.after}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related modules */}
        <section className="py-16 sm:py-24 bg-[#F3ECE2]/40 border-t border-black/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#2D5A4C]">
                  Integrated Stack
                </span>
                <h2 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-[#0B1320]">
                  Essential Modules for {role.roleTitle}
                </h2>
              </div>
              <Link
                href="/features"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2D5A4C] hover:underline"
              >
                <span>View all features</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {role.relatedModules.map((mod) => (
                <Link
                  key={mod.slug}
                  href={`/features/${mod.slug}`}
                  className="group rounded-3xl border border-black/5 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#2D5A4C]/30 hover:shadow-md"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#2D5A4C]">
                      Module
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#7A8899] group-hover:text-[#2D5A4C] transition-colors" />
                  </div>
                  <h3 className="mt-3 font-display text-lg font-bold text-[#0B1320] group-hover:text-[#2D5A4C] transition-colors">
                    {mod.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#7A8899]">
                    {mod.desc}
                  </p>
                </Link>
              ))}
            </div>

            {/* Other Roles Switcher */}
            <div className="mt-14 pt-10 border-t border-black/5">
              <h3 className="text-sm font-semibold text-[#7A8899] uppercase tracking-wider font-mono">
                Explore Workspaces for Other Roles:
              </h3>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {otherRoles.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/${other.slug}`}
                    className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white px-4 py-2 text-xs font-medium text-[#0B1320] transition-colors hover:border-[#2D5A4C] hover:text-[#2D5A4C]"
                  >
                    <span>{other.roleTitle}</span>
                    <ChevronRight className="h-3 w-3 text-[#7A8899]" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. FAQs */}
        <FAQSection
          title={`Frequently Asked Questions — ${role.roleTitle}`}
          subtitle={`Everything you need to know about how Scholarix OS transforms your everyday routine.`}
          faqs={role.faq}
        />

        {/* 8. CTA Section */}
        <CTASection
          badge={role.roleBadge}
          headline={`Experience the ${role.roleTitle} Workspace`}
          subheadline={`See how Scholarix OS makes your daily school life simpler, faster, and more rewarding. Book a personalized interactive walkthrough.`}
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
