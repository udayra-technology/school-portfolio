"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Calendar,
  Clock,
  Sparkles,
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Reveal } from "@/components/landing/Reveal";

export default function DemoPage() {
  const [form, setForm] = useState({
    name: "",
    schoolName: "",
    email: "",
    phone: "",
    students: "500-1000",
    city: "",
    currentSoftware: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FBF9F5] text-[#0B1320] selection:bg-[#D95338] selection:text-[#FBF9F5]">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden pt-12 sm:pt-16 pb-20 sm:pb-28">
          <div className="pointer-events-none absolute -top-32 right-[-5%] h-[400px] w-[400px] rounded-full bg-[#D95338]/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-[-5%] h-[350px] w-[350px] rounded-full bg-[#2D5A4C]/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Breadcrumbs items={[{ label: "Book a Demo" }]} />

            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              {/* Left Column: Value Prop & Trust */}
              <div className="lg:col-span-5">
                <Reveal>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D95338]/20 bg-[#D95338]/5 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#D95338]">
                    <Sparkles className="h-3.5 w-3.5" />
                    Personalized Walkthrough
                  </span>
                  <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0B1320] sm:text-5xl">
                    See how your school can run on{" "}
                    <span className="text-[#D95338]">one platform.</span>
                  </h1>
                  <p className="mt-6 text-base leading-relaxed text-[#7A8899]">
                    Join an executive 20-minute guided demonstration with our educational solutions team. We’ll show you real-world workflows configured for your exact board and enrollment size.
                  </p>

                  <div className="mt-10 space-y-5">
                    <div className="flex items-start gap-3.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#2D5A4C]/10 text-[#2D5A4C]">
                        <CheckCircle2 className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-[#0B1320]">
                          Personalized 1-on-1 Walkthrough
                        </h3>
                        <p className="text-sm text-[#7A8899]">
                          Experience the exact modules relevant to your leadership: attendance, timetable, fee recovery, or parent portal.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#2D5A4C]/10 text-[#2D5A4C]">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-[#0B1320]">
                          Zero-Disruption Implementation Roadmap
                        </h3>
                        <p className="text-sm text-[#7A8899]">
                          See how students, classes, and fees are added. We do not promise a setup clock.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3.5">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#2D5A4C]/10 text-[#2D5A4C]">
                        <Clock className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-base font-bold text-[#0B1320]">
                          Live Q&amp;A with Implementation Specialist
                        </h3>
                        <p className="text-sm text-[#7A8899]">
                          Ask about attendance, exams, report cards, and how payments are recorded.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Trust metrics */}
                  <div className="mt-12 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
                    <p className="text-sm leading-relaxed text-[#7A8899]">
                      The walkthrough covers the modules the product includes: people, attendance, timetable, exams, report cards, and fees.
                    </p>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Demo Form */}
              <div className="lg:col-span-7">
                <Reveal delay={0.15}>
                  <div className="rounded-[32px] border border-black/5 bg-white p-8 sm:p-12 shadow-xl">
                    {submitted ? (
                      <div className="py-12 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2D5A4C]/10 text-[#2D5A4C]">
                          <CheckCircle2 className="h-8 w-8" />
                        </div>
                        <h3 className="mt-6 font-display text-2xl font-bold text-[#0B1320]">
                          Demo Request Confirmed!
                        </h3>
                        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#7A8899]">
                          Thank you, {form.name || "there"}. We will reply at {form.email || "the email you gave"} to arrange a walkthrough.
                        </p>
                        <button
                          onClick={() => setSubmitted(false)}
                          className="mt-8 rounded-full border border-black/10 px-6 py-2.5 text-xs font-semibold text-[#0B1320] hover:bg-[#F3ECE2]"
                        >
                          Submit another request
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <h2 className="font-display text-2xl font-bold text-[#0B1320]">
                            Schedule Your Campus Demo
                          </h2>
                          <p className="mt-1 text-sm text-[#7A8899]">
                            Fill in your school details below — we will tailor the walkthrough to your needs.
                          </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1320]">
                              Your Full Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={form.name}
                              onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                              }
                              placeholder="e.g. Dr. Ramesh Gupta"
                              className="mt-2 w-full rounded-xl border border-black/10 bg-[#FBF9F5] px-4 py-3 text-sm text-[#0B1320] transition-colors focus:border-[#D95338] focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1320]">
                              School / Institution Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={form.schoolName}
                              onChange={(e) =>
                                setForm({ ...form, schoolName: e.target.value })
                              }
                              placeholder="e.g. DPS International Academy"
                              className="mt-2 w-full rounded-xl border border-black/10 bg-[#FBF9F5] px-4 py-3 text-sm text-[#0B1320] transition-colors focus:border-[#D95338] focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1320]">
                              Work Email *
                            </label>
                            <input
                              type="email"
                              required
                              value={form.email}
                              onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                              }
                              placeholder="principal@school.edu.in"
                              className="mt-2 w-full rounded-xl border border-black/10 bg-[#FBF9F5] px-4 py-3 text-sm text-[#0B1320] transition-colors focus:border-[#D95338] focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1320]">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              required
                              value={form.phone}
                              onChange={(e) =>
                                setForm({ ...form, phone: e.target.value })
                              }
                              placeholder="+91 98765 43210"
                              className="mt-2 w-full rounded-xl border border-black/10 bg-[#FBF9F5] px-4 py-3 text-sm text-[#0B1320] transition-colors focus:border-[#D95338] focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1320]">
                              Student Strength *
                            </label>
                            <select
                              value={form.students}
                              onChange={(e) =>
                                setForm({ ...form, students: e.target.value })
                              }
                              className="mt-2 w-full rounded-xl border border-black/10 bg-[#FBF9F5] px-4 py-3 text-sm text-[#0B1320] transition-colors focus:border-[#D95338] focus:outline-none"
                            >
                              <option value="Under 500">Under 500 Students</option>
                              <option value="500-1000">500 to 1,000 Students</option>
                              <option value="1000-2500">1,000 to 2,500 Students</option>
                              <option value="2500+">2,500+ Students (Multi-Branch)</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1320]">
                              City / State *
                            </label>
                            <input
                              type="text"
                              required
                              value={form.city}
                              onChange={(e) =>
                                setForm({ ...form, city: e.target.value })
                              }
                              placeholder="e.g. New Delhi, DL"
                              className="mt-2 w-full rounded-xl border border-black/10 bg-[#FBF9F5] px-4 py-3 text-sm text-[#0B1320] transition-colors focus:border-[#D95338] focus:outline-none"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1320]">
                            Current Software / System in Use
                          </label>
                          <input
                            type="text"
                            value={form.currentSoftware}
                            onChange={(e) =>
                              setForm({ ...form, currentSoftware: e.target.value })
                            }
                            placeholder="e.g. Excel + Manual Registers, or existing vendor"
                            className="mt-2 w-full rounded-xl border border-black/10 bg-[#FBF9F5] px-4 py-3 text-sm text-[#0B1320] transition-colors focus:border-[#D95338] focus:outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1320]">
                            Specific Needs or Questions
                          </label>
                          <textarea
                            rows={3}
                            value={form.message}
                            onChange={(e) =>
                              setForm({ ...form, message: e.target.value })
                            }
                            placeholder="Tell us about specific challenges (e.g. fee collection delays, timetabling conflicts, bus tracking)..."
                            className="mt-2 w-full rounded-xl border border-black/10 bg-[#FBF9F5] px-4 py-3 text-sm text-[#0B1320] transition-colors focus:border-[#D95338] focus:outline-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full rounded-full bg-[#D95338] py-4 text-center text-base font-semibold text-[#FBF9F5] shadow-md transition-all duration-200 hover:bg-[#C04325] hover:shadow-lg active:scale-95"
                        >
                          Confirm &amp; Book Campus Demo
                        </button>
                      </form>
                    )}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
