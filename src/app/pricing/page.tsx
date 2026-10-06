"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Check,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FAQSection } from "@/components/shared/FAQSection";
import { CTASection } from "@/components/shared/CTASection";
import { Reveal } from "@/components/landing/Reveal";

interface PricingTier {
  id: string;
  name: string;
  badge: string;
  targetStudents: string;
  pricePerStudentMonth: string;
  annualBaseEstimate: string;
  description: string;
  popular?: boolean;
  features: string[];
  notIncluded: string[];
}

const TIERS: PricingTier[] = [
  {
    id: "starter",
    name: "Starter Academy",
    badge: "Foundation Tier",
    targetStudents: "Up to 500 Students",
    pricePerStudentMonth: "₹ 15",
    annualBaseEstimate: "Ideal for emerging single-branch schools",
    description: "Core administrative essentials: digital admissions, student profiles, attendance tracking, and fee collection with instant receipts.",
    features: [
      "Student Information System (SIS)",
      "Daily & Period-wise Attendance",
      "Fee Invoicing & UPI Collection",
      "Parent SMS Alerts & Circulars",
      "CBSE / ICSE Digital Report Cards",
      "Standard Email & Phone Support",
      "Parent Mobile Web Portal",
      "Data Migration & Setup Guide",
    ],
    notIncluded: [
      "AI Timetable Generator",
      "Live GPS Bus Tracking",
      "Biometric RFID Gate Integration",
      "Dedicated Account Manager",
    ],
  },
  {
    id: "growth",
    name: "Growth Campus",
    badge: "Most Popular",
    targetStudents: "500 to 2,500 Students",
    pricePerStudentMonth: "₹ 25",
    annualBaseEstimate: "Comprehensive suite for leading K-12 campuses",
    description: "The complete intelligent operating system with AI timetable generation, native iOS/Android parent apps, and bus fleet management.",
    popular: true,
    features: [
      "Everything in Starter Academy",
      "AI Timetable Engine & Proxy Manager",
      "Native iOS & Android Parent Mobile App",
      "Live GPS School Bus Fleet Tracking",
      "Biometric & RFID Gate Pass Sync",
      "Digital Library & Barcode Management",
      "Digital Student Diary & Homework Hub",
      "Executive Analytics & Pulse Dashboards",
      "Priority 24/7 Dedicated Support",
    ],
    notIncluded: ["Multi-Campus Trust Rollup"],
  },
  {
    id: "enterprise",
    name: "Institutional Enterprise",
    badge: "Multi-Campus Trust",
    targetStudents: "2,500+ Students or Multiple Branches",
    pricePerStudentMonth: "Custom",
    annualBaseEstimate: "Custom governance for education trusts & chains",
    description: "Multi-branch command center oversight, custom ERP & Tally integrations, on-premise cloud options, and dedicated implementation engineers.",
    features: [
      "Everything in Growth Campus",
      "Multi-Campus Central Trust Command View",
      "Custom ERP, SIS, and Tally Prime Integrations",
      "Dedicated Campus Implementation Engineer",
      "Customized Board Report Card Templates",
      "Staff HR, Biometrics & Payroll Processing",
      "Campus Visitor Gate Pass & Security Suite",
      "99.98% High-Availability Uptime SLA",
      "Tailored On-Site Faculty Training Workshops",
    ],
    notIncluded: [],
  },
];

const PRICING_FAQS = [
  {
    question: "How does Scholarix OS pricing work for Indian schools?",
    answer: "Pricing is transparently based on active enrolled student strength billed on a per-student per-month basis, billed quarterly or annually. There are zero hidden server fees, maintenance charges, or software version upgrade costs.",
  },
  {
    question: "Do parents or teachers have to pay for the mobile app?",
    answer: "No. The native mobile application for parents, teachers, and students is 100% free and included with all Growth and Enterprise institutional plans.",
  },
  {
    question: "How long does complete school implementation take?",
    answer: "Standard onboarding takes between 7 to 14 days. Our dedicated migration team imports your existing student registers, sets up fee heads, and trains your faculty with zero disruption to daily school operations.",
  },
  {
    question: "Can we collect fees through our existing school bank accounts?",
    answer: "Yes. Payment gateways settle directly into your school's existing scheduled commercial bank account (SBI, HDFC, ICICI, etc.) with automated Tally reconciliation.",
  },
  {
    question: "Is there a discount for educational societies running multiple campuses?",
    answer: "Yes. We offer special multi-branch trust discounts for educational foundations managing 2 or more schools or colleges under a shared trust.",
  },
];

export default function PricingPage() {
  const [students, setStudents] = useState<number>(950);

  // Dynamic estimate calculation
  const calculatedTier =
    students <= 500
      ? TIERS[0]
      : students <= 2500
      ? TIERS[1]
      : TIERS[2];

  const estimatedMonthly =
    students <= 500
      ? students * 15
      : students <= 2500
      ? students * 25
      : null;

  return (
    <div className="flex min-h-screen flex-col bg-[#FBF9F5] text-[#0B1320] selection:bg-[#D95338] selection:text-[#FBF9F5]">
      <Header />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden pt-12 sm:pt-16 pb-16 sm:pb-24">
          <div className="pointer-events-none absolute -top-32 right-[-5%] h-[400px] w-[400px] rounded-full bg-[#D95338]/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-[-5%] h-[350px] w-[350px] rounded-full bg-[#2D5A4C]/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Breadcrumbs items={[{ label: "Pricing" }]} />

            <div className="mx-auto max-w-3xl text-center">
              <Reveal>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D95338]/20 bg-[#D95338]/5 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#D95338]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Predictable Institutional Pricing
                </span>
                <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0B1320] sm:text-5xl lg:text-6xl">
                  Simple, transparent pricing built for{" "}
                  <span className="text-[#D95338]">Indian schools.</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#7A8899]">
                  No hidden per-SMS charges. No surprise server fees. Transparent student-based pricing designed to fit your school’s annual operating budget.
                </p>
              </Reveal>
            </div>

            {/* Interactive Enrollment Calculator */}
            <div className="mx-auto mt-12 max-w-2xl">
              <Reveal delay={0.1}>
                <div className="rounded-[28px] border border-black/5 bg-white p-6 sm:p-8 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#D95338]">
                        Cost Estimator
                      </span>
                      <h3 className="font-display text-lg font-bold text-[#0B1320]">
                        Your Student Enrollment Size
                      </h3>
                    </div>
                    <div className="font-display text-2xl sm:text-3xl font-extrabold text-[#0B1320]">
                      {students.toLocaleString()} <span className="text-sm font-normal text-[#7A8899]">students</span>
                    </div>
                  </div>

                  <input
                    type="range"
                    min="150"
                    max="4000"
                    step="50"
                    value={students}
                    onChange={(e) => setStudents(Number(e.target.value))}
                    className="mt-6 w-full accent-[#D95338]"
                    aria-label="Student Enrollment Slider"
                  />

                  <div className="mt-4 flex items-center justify-between text-xs text-[#7A8899]">
                    <span>150 Students</span>
                    <span>1,000</span>
                    <span>2,500</span>
                    <span>4,000+ Students</span>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-black/5 pt-5">
                    <div>
                      <span className="text-xs text-[#7A8899]">Recommended Tier:</span>
                      <div className="font-display text-base font-bold text-[#0B1320]">
                        {calculatedTier.name}
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs text-[#7A8899]">Estimated Investment:</span>
                      <div className="font-display text-xl font-bold text-[#D95338]">
                        {estimatedMonthly ? `₹ ${estimatedMonthly.toLocaleString()} / mo` : "Custom Quote"}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Pricing Cards Grid */}
        <section className="py-12 sm:py-16" aria-label="Pricing Tiers">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-8 lg:grid-cols-3">
              {TIERS.map((tier, i) => (
                <Reveal key={tier.id} delay={i * 0.1}>
                  <div
                    className={`relative flex h-full flex-col justify-between rounded-[32px] p-8 sm:p-10 transition-all duration-300 ${
                      tier.popular
                        ? "border-2 border-[#D95338] bg-[#0B1320] text-[#FBF9F5] shadow-2xl scale-[1.02]"
                        : "border border-black/5 bg-white text-[#0B1320] shadow-sm"
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span
                          className={`rounded-full px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider ${
                            tier.popular
                              ? "bg-[#D95338] text-white"
                              : "bg-[#F3ECE2] text-[#D95338]"
                          }`}
                        >
                          {tier.badge}
                        </span>
                        <span
                          className={`text-xs font-medium ${
                            tier.popular ? "text-[#FBF9F5]/70" : "text-[#7A8899]"
                          }`}
                        >
                          {tier.targetStudents}
                        </span>
                      </div>

                      <h2 className="mt-6 font-display text-2xl font-bold tracking-tight">
                        {tier.name}
                      </h2>
                      <p
                        className={`mt-2 text-sm leading-relaxed ${
                          tier.popular ? "text-[#FBF9F5]/70" : "text-[#7A8899]"
                        }`}
                      >
                        {tier.description}
                      </p>

                      <div className="mt-8 border-y border-black/5 py-6">
                        <div className="flex items-baseline gap-1">
                          <span className="font-display text-4xl font-extrabold">
                            {tier.pricePerStudentMonth}
                          </span>
                          {tier.pricePerStudentMonth !== "Custom" && (
                            <span
                              className={`text-sm ${
                                tier.popular
                                  ? "text-[#FBF9F5]/60"
                                  : "text-[#7A8899]"
                              }`}
                            >
                              / student / month
                            </span>
                          )}
                        </div>
                        <p
                          className={`mt-1 text-xs ${
                            tier.popular
                              ? "text-[#FBF9F5]/60"
                              : "text-[#7A8899]"
                          }`}
                        >
                          {tier.annualBaseEstimate}
                        </p>
                      </div>

                      {/* Feature checklist */}
                      <div className="mt-8 space-y-3">
                        <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#D95338]">
                          Included Modules:
                        </p>
                        {tier.features.map((f, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-sm">
                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2D5A4C]" />
                            <span>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-10">
                      <Link
                        href="/demo"
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-full py-4 text-sm font-semibold transition-all duration-200 ${
                          tier.popular
                            ? "bg-[#D95338] text-white hover:bg-[#C04325] shadow-lg"
                            : "bg-[#0B1320] text-white hover:bg-black"
                        }`}
                      >
                        <span>Book a Guided Demo</span>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing FAQs */}
        <FAQSection
          title="Pricing & Licensing Questions"
          subtitle="Everything you need to know about payments, implementation, and contracts."
          faqs={PRICING_FAQS}
        />

        {/* Global CTA */}
        <CTASection
          badge="Talk To Admissions"
          headline="Request an Institutional Quote for Your School."
          subheadline="Get a clear, written proposal customized to your exact student roll, branches, and academic requirements."
          primaryCtaText="Request Institutional Quote"
          primaryCtaHref="/demo"
          secondaryCtaText="Speak with an Advisor"
          secondaryCtaHref="/contact"
        />
      </main>

      <Footer />
    </div>
  );
}
