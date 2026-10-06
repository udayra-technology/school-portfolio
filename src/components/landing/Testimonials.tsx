"use client";

import Image from "next/image";
import { BadgeCheck, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const QUOTES = [
  {
    quote:
      "Scholarix replaced four disconnected tools in a single term. Attendance, fees, timetabling — it simply runs.",
    name: "Dr. Elena Vance",
    role: "Principal, Northgate Academy",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=srgb&fm=jpg&q=85",
    metric: "4 tools → 1 platform",
  },
  {
    quote:
      "Rollout took eleven days across three campuses. The parent portal alone cut our front-office calls by half.",
    name: "Maya Jenkins",
    role: "Director of Technology, Brightpath Schools",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=srgb&fm=jpg&q=85",
    metric: "−52% front-office calls",
  },
  {
    quote:
      "The AI timetabler solved a schedule our staff used to spend three weeks on — in under three seconds.",
    name: "Julian Thorne",
    role: "Headmaster, St. Aldhelm's College",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=srgb&fm=jpg&q=85",
    metric: "3 weeks → 2.8s",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="mx-auto max-w-7xl scroll-mt-28 px-4 py-24 sm:px-6 sm:py-32"
      aria-labelledby="testimonials-heading"
    >
      <Reveal>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#D95338]">
          Verified Outcomes
        </p>
        <h2
          id="testimonials-heading"
          className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight text-[#0B1320] sm:text-4xl lg:text-5xl"
        >
          Loved by principals, teachers &amp; tech directors.
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {QUOTES.map((q, i) => (
          <Reveal key={q.name} delay={i * 0.08}>
            <figure className="flex h-full flex-col rounded-[24px] border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <Quote className="h-6 w-6 text-[#D95338]" aria-hidden="true" />

              <blockquote className="mt-5 flex-1 text-base leading-relaxed text-[#7A8899]">
                &ldquo;{q.quote}&rdquo;
              </blockquote>

              <span className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-full bg-[#2D5A4C]/10 px-3 py-1 font-mono text-[11px] font-semibold tracking-wider text-[#2D5A4C]">
                <BadgeCheck className="h-3.5 w-3.5" />
                {q.metric}
              </span>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-black/5 pt-6">
                <Image
                  src={q.avatar}
                  alt={`Portrait of ${q.name}`}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-[#0B1320]">{q.name}</p>
                  <p className="text-xs text-[#A8B0B9]">{q.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
