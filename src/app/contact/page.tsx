"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { FAQSection } from "@/components/shared/FAQSection";
import { Reveal } from "@/components/landing/Reveal";

const CONTACT_FAQS = [
  {
    question: "How do we reach you?",
    answer: "Use the form on this page. We reply by email.",
  },
  {
    question: "How quickly will someone reply?",
    answer: "We do not publish a response clock. You will hear back by email.",
  },
  {
    question: "Can we see the product first?",
    answer: "Yes. Book a walkthrough from the demo page. It covers the modules the product includes.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    school: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
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
            <Breadcrumbs items={[{ label: "Contact Us" }]} />

            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              {/* Left Column: Direct Info & Channels */}
              <div className="lg:col-span-5">
                <Reveal>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D95338]/20 bg-[#D95338]/5 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#D95338]">
                    <Sparkles className="h-3.5 w-3.5" />
                    Direct Contact
                  </span>
                  <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0B1320] sm:text-5xl">
                    We&rsquo;re here to support your{" "}
                    <span className="text-[#D95338]">institution.</span>
                  </h1>
                  <p className="mt-6 text-base leading-relaxed text-[#7A8899]">
                    Questions about the workspace or pricing? Use the form. We reply by email.
                  </p>

                  <div className="mt-10 space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#D95338]/10 text-[#D95338]">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#7A8899]">
                          Email Us
                        </div>
                        <a
                          href="mailto:contact@scholarix-os.com"
                          className="mt-1 font-display text-base font-bold text-[#0B1320] hover:text-[#D95338]"
                        >
                          contact@scholarix-os.com
                        </a>
                        <p className="text-xs text-[#7A8899]">
                          We reply by email.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#2D5A4C]/10 text-[#2D5A4C]">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#7A8899]">
                          Direct Phone Line
                        </div>
                        <a
                          href="tel:+911145678900"
                          className="mt-1 font-display text-base font-bold text-[#0B1320] hover:text-[#2D5A4C]"
                        >
                          +91 (011) 4567-8900
                        </a>
                        <p className="text-xs text-[#7A8899]">
                          Mon &ndash; Sat from 8:00 AM to 6:00 PM IST
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#C09E3E]/10 text-[#C09E3E]">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-[#7A8899]">
                          Headquarters
                        </div>
                        <p className="mt-1 font-display text-base font-bold text-[#0B1320]">
                          Scholarix Technologies Pvt. Ltd.
                        </p>
                        <p className="text-sm text-[#7A8899]">
                          Level 5, Institutional Tech Hub, Okhla Phase III, New Delhi 110020
                        </p>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-black/5 bg-[#F3ECE2] p-5">
                      <p className="font-display text-sm font-bold text-[#0B1320]">
                        Prefer a walkthrough?
                      </p>
                      <p className="mt-1 text-xs text-[#7A8899]">
                        Book a demo of the modules this workspace includes.
                      </p>
                      <a
                        href="/demo"
                        className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#0B1320] px-5 py-2.5 text-xs font-semibold text-white"
                      >
                        <span>Book a walkthrough</span>
                      </a>
                    </div>
                  </div>
                </Reveal>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <Reveal delay={0.15}>
                  <div className="rounded-[32px] border border-black/5 bg-white p-8 sm:p-12 shadow-xl">
                    {submitted ? (
                      <div className="py-12 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#2D5A4C]/10 text-[#2D5A4C]">
                          <CheckCircle2 className="h-8 w-8" />
                        </div>
                        <h3 className="mt-6 font-display text-2xl font-bold text-[#0B1320]">
                          Message Dispatched!
                        </h3>
                        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#7A8899]">
                          Thank you for reaching out. An institutional coordinator has received your note and will reply promptly.
                        </p>
                        <button
                          onClick={() => setSubmitted(false)}
                          className="mt-8 rounded-full border border-black/10 px-6 py-2.5 text-xs font-semibold text-[#0B1320] hover:bg-[#F3ECE2]"
                        >
                          Send another message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <h2 className="font-display text-2xl font-bold text-[#0B1320]">
                            Send a Message to Leadership
                          </h2>
                          <p className="mt-1 text-sm text-[#7A8899]">
                            We typically respond within two hours on working days.
                          </p>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1320]">
                              Your Name *
                            </label>
                            <input
                              type="text"
                              required
                              value={form.name}
                              onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                              }
                              placeholder="e.g. Mrs. Anjali Verma"
                              className="mt-2 w-full rounded-xl border border-black/10 bg-[#FBF9F5] px-4 py-3 text-sm text-[#0B1320] transition-colors focus:border-[#D95338] focus:outline-none"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1320]">
                              School / Institution *
                            </label>
                            <input
                              type="text"
                              required
                              value={form.school}
                              onChange={(e) =>
                                setForm({ ...form, school: e.target.value })
                              }
                              placeholder="e.g. St. Xavier's Senior School"
                              className="mt-2 w-full rounded-xl border border-black/10 bg-[#FBF9F5] px-4 py-3 text-sm text-[#0B1320] transition-colors focus:border-[#D95338] focus:outline-none"
                            />
                          </div>
                        </div>

                        <div className="grid gap-6 sm:grid-cols-2">
                          <div>
                            <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1320]">
                              Official Email *
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

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1320]">
                            Inquiry Type
                          </label>
                          <select
                            value={form.subject}
                            onChange={(e) =>
                              setForm({ ...form, subject: e.target.value })
                            }
                            className="mt-2 w-full rounded-xl border border-black/10 bg-[#FBF9F5] px-4 py-3 text-sm text-[#0B1320] transition-colors focus:border-[#D95338] focus:outline-none"
                          >
                            <option value="General Inquiry">General Institutional Inquiry</option>
                            <option value="Pricing & Quote">Custom Institutional Pricing &amp; Quote</option>
                            <option value="Migration & Implementation">Data Migration &amp; Implementation</option>
                            <option value="Multi-Campus Partnership">Multi-Campus Trust Partnership</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold uppercase tracking-wider text-[#0B1320]">
                            How Can We Assist? *
                          </label>
                          <textarea
                            rows={4}
                            required
                            value={form.message}
                            onChange={(e) =>
                              setForm({ ...form, message: e.target.value })
                            }
                            placeholder="Tell us about your campus, existing software bottlenecks, or target start date..."
                            className="mt-2 w-full rounded-xl border border-black/10 bg-[#FBF9F5] px-4 py-3 text-sm text-[#0B1320] transition-colors focus:border-[#D95338] focus:outline-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full rounded-full bg-[#D95338] py-4 text-center text-base font-semibold text-[#FBF9F5] shadow-md transition-all duration-200 hover:bg-[#C04325] hover:shadow-lg active:scale-95"
                        >
                          Send Message to Scholarix OS
                        </button>
                      </form>
                    )}
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection
          title="Contact & Support FAQ"
          subtitle="Common questions regarding our implementation and operational assistance."
          faqs={CONTACT_FAQS}
        />
      </main>

      <Footer />
    </div>
  );
}
