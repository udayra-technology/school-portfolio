"use client";

import Image from "next/image";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { CirclePlay, ArrowRight, ScanFace } from "lucide-react";
import { LogoMark } from "./Logo";

const EASE = [0.22, 1, 0.36, 1] as const;

const STATS = [
  { value: "450+",   label: "K-12 academies"  },
  { value: "99.98%", label: "System uptime"   },
  { value: "4.9/5",  label: "Admin rating"    },
];

function MaskedLine({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <span className="block overflow-hidden pb-1">
      <motion.span
        className="block"
        initial={{ y: "115%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: EASE }}
      >
        {children}
      </motion.span>
    </span>
  );
}

function scrollToId(href: string) {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [7, -7]), {
    stiffness: 120,
    damping: 16,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-9, 9]), {
    stiffness: 120,
    damping: 16,
  });

  const onMouseMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <section
      id="top"
      ref={ref}
      onMouseMove={onMouseMove}
      className="relative overflow-hidden pt-16 sm:pt-24"
    >
      {/* Background blobs */}
      <div className="pointer-events-none absolute -top-32 right-[-10%] h-[480px] w-[480px] rounded-full bg-[#D95338]/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-[-8%] h-[380px] w-[380px] rounded-full bg-[#2D5A4C]/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-12 lg:pb-28">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            className="mb-6 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D95338]"
          >
            School Management, Reimagined
          </motion.p>

          {/* Headline with mask reveal */}
          <h1 className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-[#0B1320] sm:text-5xl lg:text-6xl">
            <MaskedLine delay={0.15}>The Operating System</MaskedLine>
            <MaskedLine delay={0.28}>
              built for{" "}
              <span className="text-[#D95338]">tomorrow&apos;s</span>
            </MaskedLine>
            <MaskedLine delay={0.41}>schools.</MaskedLine>
          </h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
            className="mt-6 max-w-xl text-base leading-relaxed text-[#7A8899] sm:text-lg"
          >
            Unify administrative workflows, attendance tracking, AI timetabling,
            and parent communication in one ultra-sleek, institutional-grade
            command center.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: EASE }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollToId("#contact")}
              className="group flex items-center gap-2 rounded-full bg-[#0B1320] px-7 py-3.5 text-sm font-semibold text-[#FBF9F5] transition-all duration-200 hover:bg-[#D95338] hover:shadow-lg active:scale-95"
            >
              Start 30-Day Free Trial
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => scrollToId("#showcase")}
              className="group flex items-center gap-2 rounded-full border border-[#0B1320]/15 bg-white/60 px-7 py-3.5 text-sm font-semibold text-[#0B1320] backdrop-blur transition-all duration-200 hover:border-[#0B1320]/30 hover:bg-white active:scale-95"
            >
              <CirclePlay className="h-5 w-5 text-[#D95338]" />
              Watch Interactive Showcase
            </button>
          </motion.div>

          {/* Stats */}
          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="mt-12 flex flex-wrap gap-10"
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-mono text-2xl font-semibold text-[#0B1320]">
                  {s.value}
                </dd>
                <dd className="mt-1 text-xs uppercase tracking-wider text-[#A8B0B9]">
                  {s.label}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>

        {/* Right: 3-D image card */}
        <div className="lg:col-span-5" style={{ perspective: 1200 }}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: EASE }}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="relative"
          >
            {/* Glow */}
            <div
              className="absolute -inset-8 rounded-full bg-[#D95338]/20 blur-3xl"
              aria-hidden="true"
            />

            {/* Main card */}
            <div className="relative rotate-2 rounded-[28px] border border-black/5 bg-[#F3ECE2] p-3 shadow-2xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[20px]">
                <Image
                  src="/images/hero.jpeg"
                  alt="Students collaborating in a modern connected classroom managed by Scholarix OS"
                  fill
                  sizes="(max-width: 768px) 100vw, 460px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating badge – top left */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ transform: "translateZ(60px)" }}
              className="absolute -left-6 top-8 flex items-center gap-3 rounded-2xl border border-white/40 bg-white/80 px-4 py-3 shadow-xl backdrop-blur-xl sm:-left-10"
            >
              <LogoMark className="h-8 w-8 text-[#D95338]" />
              <div>
                <p className="text-xs font-semibold text-[#0B1320]">
                  Scholarix Crest
                </p>
                <p className="font-mono text-[10px] uppercase tracking-widest text-[#A8B0B9]">
                  Institutional Grade
                </p>
              </div>
            </motion.div>

            {/* Floating badge – bottom right */}
            <motion.div
              animate={{ y: [0, 9, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              style={{ transform: "translateZ(40px)" }}
              className="absolute -right-3 bottom-10 flex items-center gap-3 rounded-2xl border border-white/40 bg-[#0B1320]/90 px-4 py-3 shadow-xl backdrop-blur-xl sm:-right-6"
            >
              {/* Pulsing dot */}
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C09E3E] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#C09E3E]" />
              </span>
              <div>
                <p className="flex items-center gap-1.5 text-xs font-semibold text-[#FBF9F5]">
                  <ScanFace className="h-3.5 w-3.5 text-[#C09E3E]" />
                  {" "}Attendance synced
                </p>
                <p className="font-mono text-[10px] tracking-widest text-[#A8B0B9]">
                  1,842 / 1,866 PRESENT
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
