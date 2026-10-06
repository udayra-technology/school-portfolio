"use client";

const ITEMS = [
  "Trusted by 450+ K-12 Academies",
  "99.98% System Uptime",
  "ISO 27001 & FERPA Certified",
  "Instant Parent Sync",
  "AI-Powered Timetabling Engine",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div
      className="overflow-hidden border-y border-black/5 bg-[#F3ECE2] py-4"
      aria-hidden="true"
    >
      <div className="animate-marquee flex w-max items-center gap-10">
        {row.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#7A8899]"
          >
            {item}
            <span className="h-1.5 w-1.5 rotate-45 bg-[#D95338]" />
          </span>
        ))}
      </div>
    </div>
  );
}
