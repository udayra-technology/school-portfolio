import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CalendarCheck,
  CreditCard,
  FileSpreadsheet,
  Clock,
  MessageSquare,
  Bus,
  Users,
  Library,
  FileCheck2,
  BarChart3,
  UserCheck,
  ShieldAlert,
  Sparkles,
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CTASection } from "@/components/shared/CTASection";
import { Reveal } from "@/components/landing/Reveal";
import { FEATURES, FEATURE_CATEGORIES } from "@/data/features";

export const metadata: Metadata = {
  title: "School ERP Features & Modules Directory — Scholarix OS",
  description:
    "Explore the complete institutional suite of Scholarix OS: Admissions, Student Management, Attendance, Fees, Exams, Timetables, Parent App, Bus Tracking, and Reports.",
  keywords:
    "school ERP features, school management system modules, attendance software, fee management, AI timetable, parent communication app",
  alternates: {
    canonical: "https://scholarix-os.com/features",
  },
  openGraph: {
    title: "School ERP Features & Modules Directory — Scholarix OS",
    description:
      "Explore all capabilities of Scholarix OS. Everything your school needs to run seamlessly in one unified platform.",
    url: "https://scholarix-os.com/features",
    type: "website",
  },
};

const ICONS: Record<string, React.ElementType> = {
  admissions: FileSpreadsheet,
  attendance: CalendarCheck,
  fees: CreditCard,
  "exams-results": BookOpen,
  timetable: Clock,
  "parent-communication": MessageSquare,
  transport: Bus,
  "student-management": Users,
  library: Library,
  homework: FileCheck2,
  "reports-analytics": BarChart3,
  "hr-payroll": UserCheck,
  "visitor-management": ShieldAlert,
};

export default function FeaturesHubPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FBF9F5] text-[#0B1320] selection:bg-[#D95338] selection:text-[#FBF9F5]">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-12 sm:pt-16 pb-16 sm:pb-24">
          <div className="pointer-events-none absolute -top-32 right-[-5%] h-[400px] w-[400px] rounded-full bg-[#D95338]/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-[-5%] h-[350px] w-[350px] rounded-full bg-[#2D5A4C]/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Breadcrumbs items={[{ label: "Features" }]} />

            <div className="max-w-3xl">
              <Reveal>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D95338]/20 bg-[#D95338]/5 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#D95338]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Product Directory
                </span>
                <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0B1320] sm:text-5xl lg:text-6xl">
                  Everything your school needs.{" "}
                  <span className="text-[#D95338]">In one place.</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[#7A8899]">
                  Scholarix OS eliminates disconnected software silos. Browse our
                  comprehensive catalog of interconnected modules designed for
                  modern K-12 academies, international schools, and multi-campus
                  districts.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 rounded-full bg-[#D95338] px-7 py-3.5 text-base font-semibold text-[#FBF9F5] shadow-md transition-all duration-200 hover:bg-[#C04325] hover:shadow-lg active:scale-95"
                  >
                    <span>Book a Guided Demo</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 py-3.5 text-base font-semibold text-[#0B1320] backdrop-blur transition-all duration-200 hover:bg-white"
                  >
                    Compare Plans
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Feature Grid Categorized */}
        <section className="py-12 sm:py-20" aria-label="Feature Categories">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 space-y-20">
            {FEATURE_CATEGORIES.map((category) => {
              const categoryFeatures = FEATURES.filter(
                (f) => f.category === category
              );
              if (categoryFeatures.length === 0) return null;

              return (
                <div key={category} className="scroll-mt-24" id={category.toLowerCase()}>
                  <Reveal>
                    <div className="flex items-center gap-3 border-b border-black/5 pb-4">
                      <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D95338]">
                        Module Suite
                      </span>
                      <span className="text-[#A8B0B9]">&middot;</span>
                      <h2 className="font-display text-2xl font-bold tracking-tight text-[#0B1320] sm:text-3xl">
                        {category}
                      </h2>
                    </div>
                  </Reveal>

                  <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {categoryFeatures.map((feat, i) => {
                      const Icon = ICONS[feat.slug] || Sparkles;
                      return (
                        <Reveal key={feat.slug} delay={i * 0.05}>
                          <Link
                            href={`/features/${feat.slug}`}
                            className="group flex h-full flex-col justify-between rounded-[24px] border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D95338]/30 hover:shadow-xl"
                          >
                            <div>
                              <div className="flex items-center justify-between">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F3ECE2] text-[#D95338] transition-colors group-hover:bg-[#D95338] group-hover:text-white">
                                  <Icon className="h-6 w-6" />
                                </div>
                                <span className="font-mono text-[10px] uppercase tracking-wider text-[#A8B0B9]">
                                  {feat.badge}
                                </span>
                              </div>

                              <h3 className="mt-6 font-display text-xl font-bold text-[#0B1320] group-hover:text-[#D95338]">
                                {feat.title}
                              </h3>
                              <p className="mt-3 text-sm leading-relaxed text-[#7A8899]">
                                {feat.shortDescription}
                              </p>
                            </div>

                            <div className="mt-8 flex items-center justify-between border-t border-black/5 pt-5 text-sm font-semibold text-[#0B1320] group-hover:text-[#D95338]">
                              <span>Explore capability</span>
                              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                          </Link>
                        </Reveal>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Global CTA */}
        <CTASection
          badge="Unified Architecture"
          headline="Run Your School On One High-Performance Engine"
          subheadline="No more juggling four disparate logins, messy Excel sheets, or third-party sync errors. Scholarix OS connects attendance, grading, fees, and parent engagement seamlessly."
          primaryCtaText="Book a Guided Demo"
          primaryCtaHref="/demo"
          secondaryCtaText="View Pricing"
          secondaryCtaHref="/pricing"
        />
      </main>

      <Footer />
    </div>
  );
}
