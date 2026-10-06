"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-[#FBF9F5] placeholder:text-[#A8B0B9] transition-colors duration-200 focus:border-[#D95338] focus:outline-none";

function planFor(students: number) {
  if (students <= 500) return { name: "Standard Academy", price: 299 };
  if (students <= 2000) return { name: "Growth Campus", price: 599 };
  return { name: "Institutional Enterprise", price: null };
}

export default function Contact() {
  const [students, setStudents] = useState(850);
  const [form, setForm] = useState({ name: "", school: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const plan = planFor(students);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", school: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 px-4 py-24 sm:px-6 sm:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#0B1320] px-6 py-16 text-[#FBF9F5] sm:px-12 sm:py-20">
        {/* Background blobs */}
        <div className="pointer-events-none absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[#D95338]/20 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-[#2D5A4C]/25 blur-3xl" aria-hidden="true" />

        <div className="relative grid gap-14 lg:grid-cols-2">
          {/* Left: Plan Finder */}
          <Reveal>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#C09E3E]">
              Plan Finder
            </p>
            <h2
              id="contact-heading"
              className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              See Scholarix on your campus.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#FBF9F5]/70">
              Slide to your enrollment size — we will match the right tier
              instantly, then book a guided tour.
            </p>

            <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
              {/* Slider */}
              <div className="flex items-end justify-between">
                <label
                  htmlFor="students-slider"
                  className="font-mono text-xs uppercase tracking-[0.2em] text-[#A8B0B9]"
                >
                  Students
                </label>
                <span className="font-mono text-3xl font-semibold text-[#FBF9F5]">
                  {students.toLocaleString()}
                </span>
              </div>

              <input
                id="students-slider"
                type="range"
                min="100"
                max="5000"
                step="50"
                value={students}
                onChange={(e) => setStudents(Number(e.target.value))}
                className="mt-5 w-full accent-[#D95338]"
                aria-label="Number of students"
              />

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6">
                <div>
                  <p className="text-xs uppercase tracking-wider text-[#A8B0B9]">
                    Recommended plan
                  </p>
                  <p className="mt-1 font-display text-xl font-bold">{plan.name}</p>
                </div>
                <div className="text-right">
                  <p className="font-mono text-2xl font-semibold text-[#C09E3E]">
                    {plan.price ? `$${plan.price}/mo` : "Custom"}
                  </p>
                  {plan.price && (
                    <p className="text-xs text-[#A8B0B9]">
                      ${(plan.price / students).toFixed(2)} per student / mo
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Contact form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-white/10 bg-black/20 p-8 backdrop-blur"
            >
              <h3 className="font-display text-xl font-semibold tracking-tight">
                Book a guided tour
              </h3>
              <p className="mt-2 text-sm text-[#FBF9F5]/60">
                Thirty minutes, your data, your questions.
              </p>

              {submitted && (
                <div className="mt-4 rounded-xl bg-[#2D5A4C]/30 px-4 py-3 text-sm text-[#FBF9F5]">
                  ✓ Tour request received — our team will reach out within 24 hours.
                </div>
              )}

              <div className="mt-7 space-y-4">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#A8B0B9]">
                    Full name
                  </label>
                  <input
                    id="contact-name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Dr. Elena Vance"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="contact-school" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#A8B0B9]">
                    School / District
                  </label>
                  <input
                    id="contact-school"
                    required
                    value={form.school}
                    onChange={(e) => setForm({ ...form, school: e.target.value })}
                    placeholder="Northgate Academy"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#A8B0B9]">
                    Work email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="vance@northgate.edu"
                    className={inputCls}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-[#A8B0B9]">
                    What should we focus on?
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Timetabling chaos, fee collection, parent comms…"
                    className={`${inputCls} resize-none`}
                  />
                </div>
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#D95338] py-3.5 text-sm font-semibold text-[#FBF9F5] transition-all duration-200 hover:bg-[#C04325] hover:shadow-lg active:scale-95"
                >
                  Request My Tour
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
