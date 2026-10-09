"use client";

const ITEMS = [
  "Students and teachers",
  "Daily attendance",
  "Weekly timetable",
  "Exams and report cards",
  "Fees and invoices",
  "Parent and student view",
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
