import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Smartphone,
  ShieldCheck,
  Zap,
  BarChart4,
  RefreshCw,
  Users2,
  Sparkles,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CTASection } from "@/components/shared/CTASection";
import { Reveal } from "@/components/landing/Reveal";

export const metadata: Metadata = {
  title: "Scholarix OS Product Overview — One Platform to Run Your Entire School",
  description:
    "Discover how Scholarix OS connects admissions, attendance, AI timetables, exams, fees, bus tracking, and parent communication into one unified operating system.",
  keywords:
    "school ERP overview, school management software architecture, unified school platform, K-12 management OS",
  alternates: {
    canonical: "https://scholarix-os.com/product",
  },
  openGraph: {
    title: "Scholarix OS Product Overview — One Platform to Run Your Entire School",
    description:
      "Eliminate fragmented educational software. Scholarix OS gives school leaders a complete institutional command center.",
    url: "https://scholarix-os.com/product",
    type: "website",
  },
};

const MODULES = [
  { name: "Admissions CRM", desc: "Digital applications & automated merit lists", href: "/features/admissions" },
  { name: "Student SIS", desc: "360° student lifecycle and academic records", href: "/features/student-management" },
  { name: "Attendance Matrix", desc: "One-tap roll call with instant parent SMS alerts", href: "/features/attendance" },
  { name: "Fee Engine", desc: "Zero-reconciliation fee billing and UPI payments", href: "/features/fees" },
  { name: "Exams & Results", desc: "CBSE/ICSE report card builder and analytics", href: "/features/exams-results" },
  { name: "AI Timetabler", desc: "Zero-collision master schedules and teacher proxy", href: "/features/timetable" },
  { name: "Parent Mobile App", desc: "Real-time notices, bus tracking, and grade updates", href: "/features/parent-communication" },
  { name: "Fleet Transport", desc: "Live GPS bus tracking and attendant boarding manifests", href: "/features/transport" },
  { name: "Executive Analytics", desc: "Morning attendance pulses and fee aging reports", href: "/features/reports-analytics" },
];

const FLOW_STEPS = [
  {
    step: "01",
    title: "Inquiry to Enrollment",
    desc: "A prospective student applies online. Documents verify digitally, seat fees process via UPI, and the approved applicant seeds the Student Information System instantly.",
  },
  {
    step: "02",
    title: "Classroom Daily Rhythm",
    desc: "Attendance marked in 15 seconds. Sick leaves trigger parent alerts. Timetable handles sudden teacher sick leaves with automatic qualified substitute suggestions.",
  },
  {
    step: "03",
    title: "Assessments & Grading",
    desc: "Teachers input exam marks; the calculation engine auto-computes percentiles and rubrics. High-resolution report cards publish to parent apps with QR validation.",
  },
  {
    step: "04",
    title: "Trust & Board Governance",
    desc: "Principals and trustees monitor morning campus pulses, fee collection forecasts, and compliance reports with real-time auditability across every campus.",
  },
];

export default function ProductPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FBF9F5] text-[#0B1320] selection:bg-[#D95338] selection:text-[#FBF9F5]">
      <Header />

      <main className="flex-1">
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden pt-12 sm:pt-16 pb-16 sm:pb-24">
          <div className="pointer-events-none absolute -top-32 right-[-5%] h-[420px] w-[420px] rounded-full bg-[#D95338]/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-[-5%] h-[360px] w-[360px] rounded-full bg-[#2D5A4C]/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Breadcrumbs items={[{ label: "Product Overview" }]} />

            <div className="mx-auto max-w-4xl text-center">
              <Reveal>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D95338]/20 bg-[#D95338]/5 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#D95338]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Institutional Command Center
                </span>
                <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0B1320] sm:text-5xl lg:text-6xl">
                  One platform to run your{" "}
                  <span className="text-[#D95338]">entire school.</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#7A8899]">
                  Scholarix OS unifies admissions, academics, attendance, examinations, fee collection, transport, and parent communication into one single, institutional-grade operating system.
                </p>

                <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 rounded-full bg-[#D95338] px-8 py-4 text-base font-semibold text-[#FBF9F5] shadow-md transition-all duration-200 hover:bg-[#C04325] hover:shadow-lg active:scale-95"
                  >
                    <span>Schedule Executive Demo</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/features"
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-7 py-4 text-base font-semibold text-[#0B1320] backdrop-blur transition-all duration-200 hover:bg-white"
                  >
                    Explore All Modules
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Product Screenshot Showcase */}
            <div className="mt-14 lg:mt-20">
              <Reveal delay={0.15}>
                <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-[#0B1320] p-3 shadow-2xl">
                  <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[24px]">
                    <Image
                      src="/images/dashboard-command.jpg"
                      alt="Scholarix OS complete dashboard command center"
                      fill
                      sizes="(max-width: 1280px) 100vw, 1200px"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 2. Problem Schools Face */}
        <section className="bg-[#F3ECE2] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <div className="max-w-2xl">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D95338]">
                  The Status Quo
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0B1320] sm:text-4xl">
                  Why Fragmented School Software Fails Leadership
                </h2>
                <p className="mt-3 text-base text-[#7A8899]">
                  Most schools operate across 4 to 6 disconnected tools: a legacy offline fee package, Excel registers, third-party SMS gateways, and unofficial WhatsApp groups.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Reveal delay={0.05}>
                <div className="rounded-[24px] border border-black/5 bg-white p-8 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-600">
                    <RefreshCw className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-[#0B1320]">
                    Data Desynchronization
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#7A8899]">
                    When a student changes bus routes or pays fees, staff manually re-enter data across multiple systems, creating billing discrepancies and missing records.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-[24px] border border-black/5 bg-white p-8 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <Users2 className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-[#0B1320]">
                    Teacher Administrative Burnout
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#7A8899]">
                    Educators spend 12+ hours weekly on non-teaching paperwork: calculating marks, tallying attendance percentages, and chasing late fee slips.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="rounded-[24px] border border-black/5 bg-white p-8 shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <BarChart4 className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-[#0B1320]">
                    Blind Decision-Making
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#7A8899]">
                    Principals and trustees lack real-time visibility into daily attendance pulses, admission conversion velocity, and fee recovery projections.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3 & 4. How Information Flows Through Scholarix OS */}
        <section className="py-20 sm:py-28" id="flow">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <div className="text-center">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D95338]">
                  Architecture
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0B1320] sm:text-4xl">
                  How Information Flows Seamlessly
                </h2>
                <p className="mx-auto mt-3 max-w-xl text-base text-[#7A8899]">
                  Every action in Scholarix OS triggers synchronized updates across the entire school ecosystem.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {FLOW_STEPS.map((step, idx) => (
                <Reveal key={step.step} delay={idx * 0.08}>
                  <div className="relative flex h-full flex-col justify-between rounded-[24px] border border-black/5 bg-white p-8 shadow-sm">
                    <div>
                      <span className="font-mono text-3xl font-bold text-[#D95338]">
                        {step.step}
                      </span>
                      <h3 className="mt-4 font-display text-lg font-bold text-[#0B1320]">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#7A8899]">
                        {step.desc}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center gap-1.5 text-xs font-semibold text-[#2D5A4C]">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      <span>Zero latency sync</span>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Core Modules Grid */}
        <section className="bg-[#0B1320] py-20 sm:py-28 text-[#FBF9F5]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#C09E3E]">
                    Ecosystem
                  </p>
                  <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
                    Interconnected Core Modules
                  </h2>
                </div>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#C09E3E] hover:underline"
                >
                  <span>View full feature matrix</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {MODULES.map((mod, i) => (
                <Reveal key={mod.name} delay={i * 0.05}>
                  <Link
                    href={mod.href}
                    className="group rounded-[24px] border border-white/10 bg-white/5 p-7 backdrop-blur transition-all duration-300 hover:border-white/20 hover:bg-white/10 block"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D95338]/20 text-[#D95338]">
                        <Layers className="h-5 w-5" />
                      </div>
                      <ArrowUpRight className="h-4 w-4 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-[#FBF9F5] group-hover:text-[#D95338]">
                      {mod.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#FBF9F5]/70">
                      {mod.desc}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Role-Based Experience */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <div className="text-center">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D95338]">
                  Tailored Portals
                </p>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0B1320] sm:text-4xl">
                  Four Specialized Stakeholder Experiences
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-base text-[#7A8899]">
                  Every user gets precisely the tools, data, and permissions they need without clutter.
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Reveal delay={0.05}>
                <div className="rounded-[24px] border border-black/5 bg-white p-7 shadow-sm">
                  <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#D95338]">
                    Command Center
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-[#0B1320]">
                    Principals &amp; Trustees
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#7A8899]">
                    District-wide attendance pulses, fee collection forecasts, teacher allocations, and one-click regulatory board exports.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="rounded-[24px] border border-black/5 bg-white p-7 shadow-sm">
                  <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#2D5A4C]">
                    Instructional Desk
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-[#0B1320]">
                    Teachers &amp; Faculty
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#7A8899]">
                    15-second mobile attendance, automated marks rubrics, timetable schedules, homework broadcast, and private messaging.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="rounded-[24px] border border-black/5 bg-white p-7 shadow-sm">
                  <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C09E3E]">
                    Family Portal
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-[#0B1320]">
                    Parents &amp; Guardians
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#7A8899]">
                    Morning attendance alerts, instant UPI tuition payments, live GPS bus tracking, digital report cards, and event calendars.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-[24px] border border-black/5 bg-white p-7 shadow-sm">
                  <div className="font-mono text-xs font-semibold uppercase tracking-wider text-[#0B1320]">
                    Student Hub
                  </div>
                  <h3 className="mt-3 font-display text-xl font-bold text-[#0B1320]">
                    Students
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#7A8899]">
                    Daily timetable schedules, assignment submission checklists, library book loans, and personal academic trajectories.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 7, 8 & 9. Automation, Analytics, Mobile Experience */}
        <section className="bg-[#F3ECE2] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <Reveal>
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D95338]">
                  Native Experience
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0B1320] sm:text-4xl">
                  Lightning Fast on Mobile. Institutional Grade on Desktop.
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#7A8899]">
                  Whether your bursar is reconciling financial ledgers on a dual-monitor workstation or a teacher is taking attendance on a smartphone in the school courtyard, Scholarix OS adapts flawlessly.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#D95338]/10 text-[#D95338]">
                      <Zap className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#0B1320]">
                        Intelligent Automation
                      </h3>
                      <p className="text-sm text-[#7A8899]">
                        Fee payment reminders, absence alerts, and timetable substitution alerts fire automatically without staff intervention.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#2D5A4C]/10 text-[#2D5A4C]">
                      <Smartphone className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#0B1320]">
                        Native Mobile Apps for iOS &amp; Android
                      </h3>
                      <p className="text-sm text-[#7A8899]">
                        Dedicated, lightweight parent and staff apps with offline sync and instant push notifications.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#C09E3E]/10 text-[#C09E3E]">
                      <Lock className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-[#0B1320]">
                        Enterprise Security &amp; Compliance
                      </h3>
                      <p className="text-sm text-[#7A8899]">
                        Encrypted student databases, role-based access control, ISO 27001 standards, and full FERPA alignment.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.15}>
                <div className="relative rounded-[28px] border border-black/5 bg-white p-3 shadow-xl">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px]">
                    <Image
                      src="/images/mobile.jpeg"
                      alt="Scholarix mobile app preview"
                      fill
                      sizes="(max-width: 1024px) 100vw, 550px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 10. Security & Certifications */}
        <section className="py-20 sm:py-24 text-center">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Reveal>
              <div className="mx-auto max-w-2xl">
                <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D95338]">
                  Trust &amp; Compliance
                </span>
                <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0B1320]">
                  Institutional Security You Can Stake Your Reputation On
                </h2>
                <p className="mt-3 text-base text-[#7A8899]">
                  We maintain bank-grade encryption protocols and rigorous security controls to ensure student records and financial transactions remain confidential.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap items-center justify-center gap-8 sm:gap-16">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-8 w-8 text-[#2D5A4C]" />
                  <div className="text-left">
                    <div className="font-display text-base font-bold text-[#0B1320]">ISO 27001</div>
                    <div className="text-xs text-[#7A8899]">Information Security</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-8 w-8 text-[#2D5A4C]" />
                  <div className="text-left">
                    <div className="font-display text-base font-bold text-[#0B1320]">FERPA Compliant</div>
                    <div className="text-xs text-[#7A8899]">Student Privacy</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-8 w-8 text-[#2D5A4C]" />
                  <div className="text-left">
                    <div className="font-display text-base font-bold text-[#0B1320]">SOC 2 Type II</div>
                    <div className="text-xs text-[#7A8899]">Audit Certified</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="h-8 w-8 text-[#2D5A4C]" />
                  <div className="text-left">
                    <div className="font-display text-base font-bold text-[#0B1320]">99.98% Uptime</div>
                    <div className="text-xs text-[#7A8899]">High-Availability SLA</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 11 & 12. Benefits & CTA */}
        <CTASection
          badge="Product Demo"
          headline="Experience the Complete Operating System in Action."
          subheadline="Book a personalized institutional walkthrough with our school implementation team. See how Scholarix OS transforms daily campus operations."
          primaryCtaText="Book a Guided Walkthrough"
          primaryCtaHref="/demo"
          secondaryCtaText="View Pricing Plans"
          secondaryCtaHref="/pricing"
        />
      </main>

      <Footer />
    </div>
  );
}
