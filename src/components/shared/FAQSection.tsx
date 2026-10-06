"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";
import { FeatureFAQ } from "@/data/features";

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  faqs: FeatureFAQ[];
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about implementation, compliance, and workflows.",
  faqs,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <section className="scroll-mt-24 py-20 sm:py-28" aria-labelledby="faq-title">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D95338]">
              Got Questions?
            </p>
            <h2
              id="faq-title"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0B1320] sm:text-4xl"
            >
              {title}
            </h2>
            <p className="mt-3 text-base text-[#7A8899]">{subtitle}</p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div
                  className={`rounded-2xl border transition-all duration-200 ${
                    isOpen
                      ? "border-[#D95338]/30 bg-white shadow-md"
                      : "border-black/5 bg-white/70 hover:bg-white"
                  }`}
                >
                  <button
                    onClick={() => toggle(i)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-base font-semibold text-[#0B1320]">
                      {faq.question}
                    </span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F3ECE2] text-[#0B1320] transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[#D95338] text-white" : ""
                      }`}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-[#7A8899]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
