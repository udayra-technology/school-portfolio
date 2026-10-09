"use client";

import { motion } from "framer-motion";
import { CalendarClock, ClipboardCheck, Landmark, LayoutDashboard } from "lucide-react";
import { Reveal } from "./Reveal";

const CARD =
  "group rounded-[24px] border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl";
const BARS = [38, 55, 44, 70, 62, 84, 76, 95];

const FEE_ITEMS = [
  { label: "Admission", status: "Recorded" },
  { label: "Monthly", status: "Open" },
  { label: "Transport", status: "Recorded" },
];

export default function Bento() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl scroll-mt-28 px-4 py-24 sm:px-6 sm:py-32"
      aria-labelledby="features-heading"
    >
      <Reveal>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D95338]">
          Capabilities
        </p>
        <h2
          id="features-heading"
          className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-[#0B1320] sm:text-4xl lg:text-5xl"
        >
          Everything a school runs on. Nothing it doesn&rsquo;t.
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-12 gap-6">
        {/* Card 1 — Automated Timetabling (wide) */}
        <Reveal className="col-span-12 lg:col-span-8">
          <article className={`${CARD} h-full`}>
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#D95338]/10">
                  <CalendarClock className="h-5 w-5 text-[#D95338]" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-[#0B1320] sm:text-2xl">
                  Weekly timetable
                </h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-[#7A8899]">
                  Set the day&apos;s periods, then fill the week. Teachers, students,
                  and parents open the same grid.
                </p>
              </div>
            </div>

            {/* Timetable grid visualisation */}
            <div className="mt-8 grid grid-cols-6 gap-2" aria-hidden="true">
              {Array.from({ length: 18 }).map((_, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, scale: 0.7 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.04, duration: 0.4 }}
                  className={`h-9 rounded-lg ${
                    i % 5 === 0
                      ? "bg-[#D95338]/80"
                      : i % 3 === 0
                      ? "bg-[#2D5A4C]/70"
                      : "bg-[#F3ECE2]"
                  }`}
                />
              ))}
            </div>
          </article>
        </Reveal>

        {/* Card 2 — Attendance (narrow) */}
        <Reveal delay={0.08} className="col-span-12 lg:col-span-4">
          <article className={`${CARD} h-full`}>
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2D5A4C]/10">
              <ClipboardCheck className="h-5 w-5 text-[#2D5A4C]" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-[#0B1320] sm:text-2xl">
              Daily attendance
            </h3>
            <p className="mt-2 text-base leading-relaxed text-[#7A8899]">
              Mark a class as present, absent, late, or leave. Students under the cutoff you set appear on the at-risk list.
            </p>

            <ul className="mt-8 space-y-2 text-sm text-[#7A8899]">
              <li>Saved draft before submit</li>
              <li>Monthly export for families</li>
              <li>Leave request from the family view</li>
            </ul>
          </article>
        </Reveal>

        {/* Card 3 — Fee Hub (narrow) */}
        <Reveal delay={0.05} className="col-span-12 lg:col-span-4">
          <article className={`${CARD} h-full`}>
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C09E3E]/10">
              <Landmark className="h-5 w-5 text-[#C09E3E]" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-[#0B1320] sm:text-2xl">
              Class fees and invoices
            </h3>
            <p className="mt-2 text-base leading-relaxed text-[#7A8899]">
              Admission, monthly, and transport. Record a payment and see what is still owed.
            </p>
            <ul className="mt-7 space-y-2.5" aria-hidden="true">
              {FEE_ITEMS.map((f) => (
                <li
                  key={f.label}
                  className="flex items-center justify-between rounded-xl bg-[#F3ECE2] px-4 py-3 text-sm"
                >
                  <span className="font-medium text-[#0B1320]">{f.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                      f.status === "Recorded"
                        ? "bg-[#2D5A4C]/15 text-[#2D5A4C]"
                        : "bg-[#D95338]/15 text-[#D95338]"
                    }`}
                  >
                    {f.status}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        </Reveal>

        {/* Card 4 — Analytics (wide) */}
        <Reveal delay={0.1} className="col-span-12 lg:col-span-8">
          <article className={`${CARD} h-full`}>
            <div className="flex items-start justify-between gap-6">
              <div>
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#0B1320]/5">
                  <LayoutDashboard className="h-5 w-5 text-[#0B1320]" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-[#0B1320] sm:text-2xl">
                  School overview
                </h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-[#7A8899]">
                  Today&apos;s attendance, outstanding fees, marks awaiting review,
                  and the items that still need a decision.
                </p>
              </div>
            </div>

            {/* Bar chart visual */}
            <div className="mt-8 flex items-end gap-2" aria-hidden="true" style={{ height: 80 }}>
              {BARS.map((h, i) => (
                <motion.span
                  key={i}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.25 + i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{ height: `${h}%`, originY: 1 }}
                  className={`flex-1 rounded-t-lg ${
                    i === BARS.length - 1
                      ? "bg-[#D95338]"
                      : i % 2
                      ? "bg-[#2D5A4C]/70"
                      : "bg-[#F3ECE2]"
                  }`}
                />
              ))}
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
