"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BookOpenCheck, Check, Gauge, GraduationCap, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import { type LucideIcon } from "lucide-react";

interface Lens {
  id: string;
  label: string;
  icon: LucideIcon;
  heading: string;
  bullets: string[];
  stat: string;
}

const LENSES: Lens[] = [
  {
    id: "administrator",
    label: "Admin",
    icon: Gauge,
    heading: "The school you are signed into.",
    bullets: [
      "Today's attendance, and which sections have not submitted",
      "Outstanding fees and marks awaiting review",
      "Students under the cutoff, syllabus progress, and leave waiting",
    ],
    stat: "This school's home",
  },
  {
    id: "teacher",
    label: "Teacher",
    icon: BookOpenCheck,
    heading: "The classes you teach.",
    bullets: [
      "Today's periods from the weekly timetable",
      "Attendance still to mark, with a saved draft",
      "Marks waiting, and syllabus progress",
    ],
    stat: "Your classes",
  },
  {
    id: "parent",
    label: "Parent",
    icon: Users,
    heading: "Each child, from one sign-in.",
    bullets: [
      "Switch between children",
      "Attendance, timetable, results, and report cards",
      "The fee ledger for the child you picked",
    ],
    stat: "Your children",
  },
  {
    id: "student",
    label: "Student",
    icon: GraduationCap,
    heading: "Your own attendance, week, and results.",
    bullets: [
      "This month's attendance and a leave request",
      "Today's timetable and upcoming exams",
      "Results, report cards, syllabus progress, and fees",
    ],
    stat: "Your records",
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export default function Lenses() {
  const [active, setActive] = useState(LENSES[0]);

  return (
    <section
      id="lenses"
      className="mx-auto max-w-7xl scroll-mt-28 px-4 py-24 sm:px-6 sm:py-32"
      aria-labelledby="lenses-heading"
    >
      <Reveal>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D95338]">
          Role-Based Lenses
        </p>
        <h2
          id="lenses-heading"
          className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-[#0B1320] sm:text-4xl lg:text-5xl"
        >
          One engine. Four specialized lenses.
        </h2>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-[#7A8899]">
          Scholarix adapts dynamically to every stakeholder in your institution.
        </p>
      </Reveal>

      {/* Tab buttons */}
      <Reveal delay={0.1}>
        <div
          className="mt-10 flex flex-wrap gap-2"
          role="tablist"
          aria-label="Stakeholder views"
        >
          {LENSES.map((lens) => {
            const Icon = lens.icon;
            const selected = active.id === lens.id;
            return (
              <button
                key={lens.id}
                role="tab"
                aria-selected={selected}
                onClick={() => setActive(lens)}
                className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-95 ${
                  selected
                    ? "bg-[#0B1320] text-[#FBF9F5] shadow-md"
                    : "border border-[#0B1320]/10 bg-white/70 text-[#7A8899] hover:border-[#0B1320]/25 hover:text-[#0B1320]"
                }`}
              >
                <Icon
                  className={`h-4 w-4 ${
                    selected ? "text-[#C09E3E]" : "text-[#D95338]"
                  }`}
                />
                {lens.label}
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Panel */}
      <div className="mt-8 overflow-hidden rounded-[28px] border border-black/5 bg-white shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="grid gap-8 p-8 sm:p-12 lg:grid-cols-3"
            role="tabpanel"
          >
            <div className="lg:col-span-2">
              <h3 className="font-display text-xl font-semibold tracking-tight text-[#0B1320] sm:text-2xl">
                {active.heading}
              </h3>
              <ul className="mt-6 space-y-4">
                {active.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-base text-[#7A8899]">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2D5A4C]/10">
                      <Check className="h-3 w-3 text-[#2D5A4C]" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>

            {/* Stat card */}
            <div className="flex flex-col justify-center rounded-2xl bg-[#F3ECE2] p-8">
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#D95338]">
                What they open
              </p>
              <p className="mt-3 font-display text-2xl font-bold tracking-tight text-[#0B1320]">
                {active.stat}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
