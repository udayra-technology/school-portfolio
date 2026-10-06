"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal } from "./Reveal";

const EASE = [0.22, 1, 0.36, 1] as const;

interface Shot {
  id: string;
  label: string;
  img: string;
  alt: string;
  caption: string;
  hotspots: { x: string; y: string; label: string }[];
}

const SHOTS: Shot[] = [
  {
    id: "dashboard",
    label: "Dashboard Command",
    img: "/images/dashboard.jpeg",
    alt: "Scholarix OS dashboard command center with live school analytics",
    caption: "Morning brief: enrollment, attendance pulse and fee collection in one glance.",
    hotspots: [
      { x: "22%", y: "30%", label: "Live attendance feed" },
      { x: "66%", y: "55%", label: "Fee collection pulse" },
    ],
  },
  {
    id: "attendance",
    label: "Attendance Matrix",
    img: "/images/attendance.jpeg",
    alt: "Teacher marking attendance on a tablet with the Scholarix attendance matrix",
    caption: "One tap per class. Parents notified before the bell finishes ringing.",
    hotspots: [
      { x: "40%", y: "38%", label: "One-tap class scan" },
      { x: "74%", y: "66%", label: "Instant parent SMS" },
    ],
  },
  {
    id: "reports",
    label: "Report Card Builder",
    img: "/images/reportCardBuilder.jpeg",
    alt: "Student reviewing a digital report card built with Scholarix OS",
    caption: "Narrative remarks, rubrics and trajectories assembled automatically.",
    hotspots: [
      { x: "30%", y: "44%", label: "AI remark drafts" },
      { x: "62%", y: "28%", label: "Grade trajectory" },
    ],
  },
  {
    id: "mobile",
    label: "Mobile Parent App",
    img: "/images/mobile.jpeg",
    alt: "Parent using the Scholarix mobile app to follow their child's school day",
    caption: "Grades, fees, bus tracking and teacher messages — in every parent's pocket.",
    hotspots: [
      { x: "26%", y: "60%", label: "Real-time alerts" },
      { x: "70%", y: "40%", label: "In-app fee payment" },
    ],
  },
];

export default function Gallery() {
  const [active, setActive] = useState(SHOTS[0]);

  return (
    <section
      id="showcase"
      className="scroll-mt-28 bg-[#0B1320] py-24 text-[#FBF9F5] sm:py-32"
      aria-labelledby="showcase-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#C09E3E]">
            Product Showcase
          </p>
          <h2
            id="showcase-heading"
            className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            Built to be looked at. Engineered to be used.
          </h2>
        </Reveal>

        {/* Tab buttons */}
        <Reveal delay={0.1}>
          <div
            className="mt-10 flex flex-wrap gap-2"
            role="tablist"
            aria-label="Product screenshots"
          >
            {SHOTS.map((s) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={active.id === s.id}
                onClick={() => setActive(s)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 active:scale-95 ${
                  active.id === s.id
                    ? "bg-[#D95338] text-[#FBF9F5] shadow-md"
                    : "border border-white/15 text-[#A8B0B9] hover:border-white/35 hover:text-[#FBF9F5]"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Image frame */}
        <Reveal delay={0.15}>
          <div className="relative mt-10">
            {/* Glow */}
            <div
              className="pointer-events-none absolute -inset-6 rounded-[36px] bg-[#D95338]/15 blur-3xl"
              aria-hidden="true"
            />

            <div className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-2xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="relative"
                >
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={active.img}
                      alt={active.alt}
                      fill
                      sizes="(max-width: 1280px) 100vw, 1200px"
                      className="object-cover"
                    />
                  </div>
                  {/* Gradient overlay */}
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B1320]/80 via-transparent to-transparent"
                    aria-hidden="true"
                  />

                  {/* Hotspots */}
                  {active.hotspots.map((h) => (
                    <div
                      key={h.label}
                      className="group absolute"
                      style={{ left: h.x, top: h.y }}
                    >
                      <button
                        className="relative flex h-5 w-5 items-center justify-center"
                        aria-label={h.label}
                      >
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C09E3E] opacity-60" />
                        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#C09E3E] ring-2 ring-[#0B1320]/60" />
                      </button>
                      <span className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[#FBF9F5] px-3 py-1 text-xs font-semibold text-[#0B1320] opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100">
                        {h.label}
                      </span>
                    </div>
                  ))}

                  {/* Caption */}
                  <p className="absolute bottom-0 left-0 max-w-lg p-6 text-sm leading-relaxed text-[#FBF9F5]/90 sm:p-8 sm:text-base">
                    {active.caption}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
