"use client";

import { motion } from "framer-motion";
import { CalendarClock, Fingerprint, Landmark, ChartLine } from "lucide-react";
import { Reveal } from "./Reveal";

const CARD =
  "group rounded-[24px] border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl";
const BARS = [38, 55, 44, 70, 62, 84, 76, 95];

const FEE_ITEMS = [
  { label: "Tuition Fee", amount: "₹ 45,000", status: "Paid" },
  { label: "Activity Fee", amount: "₹ 8,500", status: "Pending" },
  { label: "Transport",   amount: "₹ 12,000", status: "Paid"    },
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
                  Automated Timetabling AI
                </h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-[#7A8899]">
                  Resolves teacher loads, room conflicts and elective preferences
                  into a conflict-free master schedule.
                </p>
              </div>
              <span className="hidden shrink-0 rounded-full bg-[#0B1320] px-4 py-1.5 font-mono text-[11px] font-semibold tracking-wider text-[#FBF9F5] sm:block">
                1,400 constraints · 2.8s
              </span>
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
              <Fingerprint className="h-5 w-5 text-[#2D5A4C]" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-[#0B1320] sm:text-2xl">
              Biometric &amp; NFC Attendance
            </h3>
            <p className="mt-2 text-base leading-relaxed text-[#7A8899]">
              Instant RFID scans with automatic parent SMS alerts.
            </p>

            {/* Animated donut */}
            <div className="mt-8 flex items-center gap-5">
              <svg viewBox="0 0 80 80" className="h-20 w-20 -rotate-90" aria-hidden="true">
                <circle cx="40" cy="40" r="34" fill="none" stroke="#F3ECE2" strokeWidth="8" />
                <motion.circle
                  cx="40" cy="40" r="34" fill="none"
                  stroke="#2D5A4C" strokeWidth="8"
                  strokeLinecap="round"
                  strokeDasharray="213.6"
                  initial={{ strokeDashoffset: 213.6 }}
                  whileInView={{ strokeDashoffset: 213.6 * (1 - 0.987) }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                />
              </svg>
              <div>
                <p className="font-mono text-2xl font-semibold text-[#0B1320]">98.7%</p>
                <p className="text-xs uppercase tracking-wider text-[#A8B0B9]">
                  Present today · SMS in 4s
                </p>
              </div>
            </div>
          </article>
        </Reveal>

        {/* Card 3 — Fee Hub (narrow) */}
        <Reveal delay={0.05} className="col-span-12 lg:col-span-4">
          <article className={`${CARD} h-full`}>
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#C09E3E]/10">
              <Landmark className="h-5 w-5 text-[#C09E3E]" />
            </span>
            <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-[#0B1320] sm:text-2xl">
              Smart Fee &amp; Ledger Hub
            </h3>
            <p className="mt-2 text-base leading-relaxed text-[#7A8899]">
              Automated billing, reminders, and payment-gateway sync.
            </p>
            <ul className="mt-7 space-y-2.5" aria-hidden="true">
              {FEE_ITEMS.map((f) => (
                <li
                  key={f.label}
                  className="flex items-center justify-between rounded-xl bg-[#F3ECE2] px-4 py-3 text-sm"
                >
                  <span className="font-medium text-[#0B1320]">{f.label}</span>
                  <span className="flex items-center gap-2">
                    <span className="font-mono font-semibold text-[#0B1320]">
                      {f.amount}
                    </span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                        f.status === "Paid"
                          ? "bg-[#2D5A4C]/15 text-[#2D5A4C]"
                          : "bg-[#D95338]/15 text-[#D95338]"
                      }`}
                    >
                      {f.status}
                    </span>
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
                  <ChartLine className="h-5 w-5 text-[#0B1320]" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-[#0B1320] sm:text-2xl">
                  Live Academic Analytics
                </h3>
                <p className="mt-2 max-w-md text-base leading-relaxed text-[#7A8899]">
                  Cohort performance, teacher efficacy and risk-flag dashboards updated
                  every 15 minutes.
                </p>
              </div>
              <span className="hidden shrink-0 rounded-full bg-[#D95338] px-4 py-1.5 font-mono text-[11px] font-semibold tracking-wider text-[#FBF9F5] sm:block">
                Live · 15-min refresh
              </span>
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
