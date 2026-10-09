import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { Reveal } from "@/components/landing/Reveal";

interface CTASectionProps {
  badge?: string;
  headline?: string;
  subheadline?: string;
  primaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
}

export function CTASection({
  badge = "Transform Your Campus",
  headline = "Ready to Run Your School on One Intelligent Platform?",
  subheadline = "People, attendance, exams, report cards, and fees in one school workspace.",
  primaryCtaText = "Book a Guided Demo",
  primaryCtaHref = "/demo",
  secondaryCtaText = "Explore All Features",
  secondaryCtaHref = "/features",
}: CTASectionProps) {
  return (
    <section className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#0B1320] px-6 py-16 text-[#FBF9F5] sm:px-16 sm:py-20">
        {/* Glow backdrop blobs */}
        <div
          className="pointer-events-none absolute -left-20 -top-20 h-80 w-80 rounded-full bg-[#D95338]/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-[#2D5A4C]/25 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-[#C09E3E]">
              <Sparkles className="h-3.5 w-3.5" />
              {badge}
            </span>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              {headline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#FBF9F5]/75 sm:text-lg">
              {subheadline}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href={primaryCtaHref}
                className="inline-flex items-center gap-2 rounded-full bg-[#D95338] px-8 py-4 text-base font-semibold text-[#FBF9F5] shadow-lg transition-all duration-200 hover:bg-[#C04325] hover:shadow-xl active:scale-95"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-semibold text-[#FBF9F5] backdrop-blur transition-all duration-200 hover:bg-white/10"
              >
                {secondaryCtaText}
              </Link>
            </div>

            {/* Trust points */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-white/10 pt-8 text-xs text-[#A8B0B9]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#2D5A4C]" />
                Personalized 1-on-1 walkthrough
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-[#2D5A4C]" />
                A walkthrough of the real modules
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-[#C09E3E]" />
                Admin, teacher, student, and parent
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
