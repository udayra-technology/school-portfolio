"use client";

import { Reveal } from "./Reveal";

const CARDS = [
  {
    title: "Admin",
    body: "People, classes, the year, invoices, and the settings for grades and report cards.",
  },
  {
    title: "Teacher",
    body: "Today's periods, the attendance roster, marks entry, and syllabus progress.",
  },
  {
    title: "Family",
    body: "A student or parent opens attendance, the week, results, report cards, and fees.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="who"
      className="mx-auto max-w-7xl scroll-mt-28 px-4 py-24 sm:px-6 sm:py-32"
      aria-labelledby="who-heading"
    >
      <Reveal>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D95338]">
          Who it is for
        </p>
        <h2
          id="who-heading"
          className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-[#0B1320] sm:text-4xl lg:text-5xl"
        >
          Four roles. One school.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {CARDS.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.08}>
            <article className="flex h-full flex-col rounded-[24px] border border-black/5 bg-white p-8 shadow-sm">
              <h3 className="font-display text-xl font-semibold text-[#0B1320]">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#7A8899]">
                {card.body}
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
