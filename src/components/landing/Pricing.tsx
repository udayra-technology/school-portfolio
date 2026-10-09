"use client";

import { Check } from "lucide-react";
import { Reveal } from "./Reveal";

function scrollToContact() {
  const el = document.getElementById("contact");
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

interface Tier {
  id: string;
  name: string;
  price: string;
  period: string;
  badge: string;
  target: string;
  features: string[];
  dark: boolean;
}

const INCLUDED = [
  "Students, teachers, and classes",
  "Daily attendance and a timetable you fill in",
  "Exams, marks, and report cards",
  "Fee structures, invoices, and recorded payments",
  "Student and parent views",
];

const TIERS: Tier[] = [
  {
    id: "school",
    name: "Your school",
    price: "Custom",
    period: "",
    badge: "Talk to us",
    target: "One school on its own site",
    features: INCLUDED,
    dark: true,
  },
];

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="scroll-mt-28 bg-[#F3ECE2] py-24 sm:py-32"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D95338]">
            Pricing
          </p>
          <h2
            id="pricing-heading"
            className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-[#0B1320] sm:text-4xl lg:text-5xl"
          >
            Pricing is discussed for your school.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[#7A8899]">
            The workspace below is what the product includes. We do not publish a rate here.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-1 lg:max-w-xl">
          {TIERS.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08} className="h-full">
              <article
                className={`relative flex h-full flex-col rounded-[28px] p-8 transition-all duration-300 hover:-translate-y-1 ${
                  t.dark
                    ? "bg-[#0B1320] text-[#FBF9F5] shadow-2xl lg:scale-[1.04]"
                    : "border border-black/5 bg-white text-[#0B1320] shadow-sm hover:shadow-xl"
                }`}
              >
                {/* Badge */}
                <span
                  className={`absolute right-6 top-6 rounded-full px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.15em] ${
                    t.dark
                      ? "bg-[#D95338] text-[#FBF9F5]"
                      : "bg-[#F3ECE2] text-[#7A8899]"
                  }`}
                >
                  {t.badge}
                </span>

                <h3 className="font-display text-xl font-semibold tracking-tight">
                  {t.name}
                </h3>
                <p
                  className={`mt-1 text-sm ${
                    t.dark ? "text-[#A8B0B9]" : "text-[#7A8899]"
                  }`}
                >
                  {t.target}
                </p>

                {/* Price */}
                <p className="mt-6 font-display text-5xl font-extrabold tracking-tight">
                  {t.price}
                  <span
                    className={`text-base font-medium ${
                      t.dark ? "text-[#A8B0B9]" : "text-[#7A8899]"
                    }`}
                  >
                    {t.period}
                  </span>
                </p>

                {/* Features */}
                <ul className="mt-8 flex-1 space-y-3.5">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-3 text-sm ${
                        t.dark ? "text-[#FBF9F5]/85" : "text-[#7A8899]"
                      }`}
                    >
                      <span
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                          t.dark ? "bg-[#D95338]/20" : "bg-[#2D5A4C]/10"
                        }`}
                      >
                        <Check
                          className={`h-3 w-3 ${
                            t.dark ? "text-[#D95338]" : "text-[#2D5A4C]"
                          }`}
                        />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <button
                  onClick={scrollToContact}
                  className={`mt-8 w-full rounded-full py-3.5 text-sm font-semibold transition-all duration-200 active:scale-95 ${
                    t.dark
                      ? "bg-[#D95338] text-[#FBF9F5] hover:bg-[#C04325] hover:shadow-lg"
                      : "border border-[#0B1320]/15 text-[#0B1320] hover:border-[#0B1320] hover:bg-[#0B1320] hover:text-[#FBF9F5]"
                  }`}
                >
                  Talk to us
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
