"use client";

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

const INCLUDED = [
  "Students, teachers, classes, and the academic year",
  "Daily attendance, with a cutoff the school sets",
  "A weekly timetable the school fills in",
  "Assessments, marks review, grades, ranks, and report cards",
  "Fee structures, invoices, recorded payments, and reminders",
  "Student and parent views of those records",
  "A mobile app for the same screens",
];

const PRICING_FAQS = [
  {
    question: "How is pricing set?",
    answer: "We discuss it for your school. This page does not publish a rate.",
  },
  {
    question: "Is there a separate fee for the parent view?",
    answer: "The parent and student screens are part of the same workspace, including the mobile app that shows those screens.",
  },
  {
    question: "How long does it take to start?",
    answer: "That depends on the school. We do not promise a setup clock. You add the year, the classes, and the people when you are ready.",
  },
  {
    question: "How are fee payments taken?",
    answer: "The office, a student, or a parent records a payment as cash, UPI, cheque, bank, or other. There is no payment gateway in the product.",
  },
  {
    question: "Can one price cover several campuses?",
    answer: "Each school has its own site. Pricing is discussed per school. There is no combined trust ledger.",
  },
];

export default function PricingPage() {
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
                  Talk to us
                </span>
                <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0B1320] sm:text-5xl lg:text-6xl">
                  Pricing is discussed for{" "}
                  <span className="text-[#D95338]">your school.</span>
                </h1>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#7A8899]">
                  There is no published rate on this page. The list below is what the workspace includes.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Pricing Cards Grid */}
        <section className="py-12 sm:py-16" aria-label="Pricing Tiers">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-xl">
              <Reveal>
                <div className="flex h-full flex-col justify-between rounded-[32px] border-2 border-[#D95338] bg-[#0B1320] p-8 text-[#FBF9F5] shadow-2xl sm:p-10">
                  <div>
                    <span className="rounded-full bg-[#D95338] px-3 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-white">
                      Custom
                    </span>
                    <h2 className="mt-6 font-display text-2xl font-bold tracking-tight">
                      This school workspace
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[#FBF9F5]/70">
                      One school on its own site. Ask us about pricing.
                    </p>
                    <div className="mt-8 border-y border-white/10 py-6">
                      <span className="font-display text-4xl font-extrabold">Talk to us</span>
                    </div>
                    <div className="mt-8 space-y-3">
                      <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#D95338]">
                        Included
                      </p>
                      {INCLUDED.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-sm">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#2D5A4C]" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="mt-10">
                    <Link
                      href="/demo"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D95338] py-4 text-sm font-semibold text-white shadow-lg transition-all duration-200 hover:bg-[#C04325]"
                    >
                      <span>Book a walkthrough</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </Reveal>
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
          badge="Talk to us"
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
