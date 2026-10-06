import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building,
  School,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Users2,
  BookOpen,
  Layers,
  ChevronRight,
  UserCheck,
  HeartHandshake,
  Briefcase,
  Sliders,
} from "lucide-react";
import Header from "@/components/landing/Header";
import Footer from "@/components/landing/Footer";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { CTASection } from "@/components/shared/CTASection";
import { FAQSection } from "@/components/shared/FAQSection";
import { Reveal } from "@/components/landing/Reveal";
import { SOLUTIONS } from "@/data/solutions";
import { ROLES } from "@/data/roles";

export const metadata: Metadata = {
  title: "School ERP Solutions by Institution Type & Role — Scholarix OS",
  description:
    "Tailored school management software for Small Schools, CBSE, ICSE, State Boards, Multi-Campus Chains, and dedicated portals for Principals, Teachers, Parents, and Admins.",
  keywords:
    "school ERP solutions, CBSE school management, ICSE school software, multi-campus school ERP, school ERP for small schools, ERP for principals",
  alternates: {
    canonical: "https://scholarix-os.com/solutions",
  },
  openGraph: {
    title: "School ERP Solutions by Institution Type & Role — Scholarix OS",
    description:
      "Explore customized school management solutions built for your board affiliation, campus scale, and everyday role responsibilities.",
    url: "https://scholarix-os.com/solutions",
    type: "website",
  },
};

const COMPARISON_ROWS = [
  {
    capability: "Setup & Onboarding Time",
    small: "48-Hour Rapid Launch",
    cbse: "1-2 Weeks (Academic Blueprinting)",
    icse: "1-2 Weeks (Group Configurations)",
    state: "3-5 Days (Regional Grading Setup)",
    multi: "Enterprise Phased Rollout",
  },
  {
    capability: "Assessment & Exam Engine",
    small: "Simple Gradebook & Term Printouts",
    cbse: "Periodic Tests + Co-Scholastic Rubrics",
    icse: "Bifurcated Papers & 20% Project Work",
    state: "Customizable State Scale & Grace Marks",
    multi: "Standardized Multi-Branch Blueprints",
  },
  {
    capability: "Attendance & Compliance Alerts",
    small: "15-Sec Roll Call + Absent SMS",
    cbse: "75% Mandatory Board Alert Pulse",
    icse: "Subject-Wise & Minimum Attendance Logs",
    state: "Muster Rolls & Official General Registers",
    multi: "Consolidated Cross-Branch Headcounts",
  },
  {
    capability: "Fee Collection & Accounting",
    small: "Instant WhatsApp UPI & Direct Receipts",
    cbse: "Term/Quarterly Billing & Concessions",
    icse: "Flexible Installment & Sibling Ledgers",
    state: "RTE & Government Scholarship Ledgers",
    multi: "Trust-Level Consolidation & Aging BI",
  },
  {
    capability: "Access Control & Security",
    small: "Simplified 2-Level Access",
    cbse: "Role-Based Academic & Exam Locking",
    icse: "Departmental & Examiner Permissions",
    state: "Bilingual Administrative Portals",
    multi: "Campus-Isolated Tenant RBAC & Audit Trails",
  },
];

const OVERVIEW_FAQS = [
  {
    question: "How does Scholarix OS tailor itself to our specific board or school size?",
    answer:
      "Scholarix OS is modular and highly configurable. During initial onboarding, our system configures your grading schemas, report card formats, fee structures, and attendance rules to reflect your institution's exact requirements without custom coding.",
  },
  {
    question: "Can we switch or upgrade our solution tier as our institution grows?",
    answer:
      "Yes. If you start as a single small academy and later expand to multiple branches or add secondary classes with board-specific evaluation patterns, your existing data seamlessly scales with zero migration friction.",
  },
  {
    question: "Do different stakeholders get their own dedicated interfaces?",
    answer:
      "Yes. Principals, Teachers, Parents, and Administrative Staff each access tailored interfaces designed specifically for their daily tasks, available across desktop web and mobile apps.",
  },
  {
    question: "How do we get started with a customized walkthrough?",
    answer:
      "You can book a 1-on-1 guided demonstration. Our product specialists will present a customized simulation using your exact school type, board curriculum, and fee rules.",
  },
];

export default function SolutionsOverviewPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Scholarix OS Solutions Overview",
    description:
      "Tailored school management software for Small Schools, CBSE, ICSE, State Boards, Multi-Campus Chains, and dedicated stakeholder roles.",
    url: "https://scholarix-os.com/solutions",
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FBF9F5] text-[#0B1320] selection:bg-[#D95338] selection:text-[#FBF9F5]">
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 sm:pt-16 pb-16 sm:pb-24">
          <div className="pointer-events-none absolute -top-32 right-[-5%] h-[400px] w-[400px] rounded-full bg-[#D95338]/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-[-5%] h-[350px] w-[350px] rounded-full bg-[#2D5A4C]/10 blur-3xl" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Breadcrumbs items={[{ label: "Solutions" }]} />

            <div className="max-w-3xl">
              <Reveal>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[#D95338]/20 bg-[#D95338]/5 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-[#D95338]">
                  <Sparkles className="h-3.5 w-3.5" />
                  Tailored Institutional Solutions
                </span>
                <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-[#0B1320] sm:text-5xl lg:text-6xl">
                  Engineered for your campus model.{" "}
                  <span className="text-[#D95338]">Personalized for every role.</span>
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-[#7A8899]">
                  One size never fits all in education. Whether you run a lean growing academy,
                  a prestigious board-affiliated institution, or a 15-campus educational trust,
                  Scholarix OS delivers workflows tailored to your operational reality.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <Link
                    href="/demo"
                    className="inline-flex items-center gap-2 rounded-full bg-[#D95338] px-7 py-3.5 text-base font-semibold text-[#FBF9F5] shadow-md transition-all duration-200 hover:bg-[#C04325] hover:shadow-lg active:scale-95"
                  >
                    <span>Request Tailored Walkthrough</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="#institution-solutions"
                    className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-6 py-3.5 text-base font-semibold text-[#0B1320] backdrop-blur transition-all duration-200 hover:bg-white"
                  >
                    View School Segments
                  </Link>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Section 1: Institution Types */}
        <section id="institution-solutions" className="py-16 sm:py-24 border-t border-black/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#D95338]">
                By Institution Type
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0B1320] sm:text-4xl">
                Solutions for Every Academic Framework
              </h2>
              <p className="mt-4 text-base text-[#7A8899]">
                Select your school profile to see how Scholarix OS adapts to your curriculum,
                administrative team size, and compliance demands.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {SOLUTIONS.map((sol) => (
                <article
                  key={sol.slug}
                  className="group relative flex flex-col justify-between rounded-3xl border border-black/5 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#D95338]/30 hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="inline-flex rounded-full border border-[#D95338]/20 bg-[#D95338]/5 px-3 py-1 font-mono text-[11px] font-semibold text-[#D95338]">
                        {sol.badge}
                      </span>
                      <ArrowUpRight className="h-5 w-5 text-[#7A8899] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#D95338]" />
                    </div>

                    <h3 className="mt-5 font-display text-2xl font-bold text-[#0B1320] group-hover:text-[#D95338] transition-colors">
                      <Link href={`/solutions/${sol.slug}`} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {sol.navLabel}
                      </Link>
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-[#7A8899]">
                      {sol.tagline}
                    </p>

                    <div className="mt-6 space-y-2.5 border-t border-black/5 pt-6">
                      {sol.pillars.slice(0, 3).map((pillar, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs text-[#0B1320]">
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-[#2D5A4C] mt-0.5" />
                          <span className="font-medium">{pillar.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-black/5 flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold text-[#7A8899]">
                      {sol.metrics[0].value} &middot; {sol.metrics[0].label}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#D95338]">
                      Learn More <ChevronRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: Role-Based Portals */}
        <section className="py-16 sm:py-24 bg-[#F3ECE2]/40 border-y border-black/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="max-w-2xl">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#2D5A4C]">
                By Stakeholder Role
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0B1320] sm:text-4xl">
                Dedicated Workspaces for Every Campus Member
              </h2>
              <p className="mt-4 text-base text-[#7A8899]">
                Software fails when users find it confusing. Scholarix OS delivers hyper-focused
                interfaces engineered specifically for the everyday reality of each stakeholder.
              </p>
            </div>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {ROLES.map((role) => (
                <div
                  key={role.slug}
                  className="group relative flex flex-col justify-between rounded-3xl border border-black/10 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#2D5A4C]/40 hover:shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-[#2D5A4C]/10 px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#2D5A4C]">
                        {role.roleBadge}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-[#7A8899] group-hover:text-[#2D5A4C] transition-colors" />
                    </div>

                    <h3 className="mt-4 font-display text-xl font-bold text-[#0B1320] group-hover:text-[#2D5A4C] transition-colors">
                      <Link href={`/${role.slug}`}>
                        <span className="absolute inset-0" aria-hidden="true" />
                        {role.roleTitle}
                      </Link>
                    </h3>

                    <p className="mt-2 text-xs leading-relaxed text-[#7A8899]">
                      {role.heroSubheadline.slice(0, 110)}...
                    </p>

                    <div className="mt-5 space-y-2 border-t border-black/5 pt-4 text-xs">
                      {role.capabilities.slice(0, 3).map((cap, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[#0B1320]">
                          <span className="h-1.5 w-1.5 rounded-full bg-[#2D5A4C]" />
                          <span className="truncate">{cap.title}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-[#2D5A4C]">
                    <span>View Role Cockpit</span>
                    <ChevronRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Comparative Capability Matrix */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <span className="font-mono text-xs font-semibold uppercase tracking-widest text-[#D95338]">
                Institutional Architecture
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-[#0B1320] sm:text-4xl">
                Compare Solutions Across Key Capabilities
              </h2>
              <p className="mt-4 text-base text-[#7A8899]">
                See how Scholarix OS tailors core modules to your school&apos;s distinct regulatory,
                administrative, and technical environment.
              </p>
            </div>

            <div className="mt-12 overflow-x-auto rounded-3xl border border-black/10 bg-white shadow-sm">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="border-b border-black/10 bg-[#0B1320] text-[#FBF9F5] text-xs font-mono uppercase tracking-wider">
                    <th className="p-4 sm:p-5 font-semibold">Institutional Dimension</th>
                    <th className="p-4 sm:p-5 font-semibold text-[#C09E3E]">Small Schools</th>
                    <th className="p-4 sm:p-5 font-semibold">CBSE Schools</th>
                    <th className="p-4 sm:p-5 font-semibold">ICSE / ISC</th>
                    <th className="p-4 sm:p-5 font-semibold">State Boards</th>
                    <th className="p-4 sm:p-5 font-semibold text-[#D95338]">Multi-Campus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-sm text-[#0B1320]">
                  {COMPARISON_ROWS.map((row, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-[#FBF9F5]/60 hover:bg-white"}
                    >
                      <td className="p-4 sm:p-5 font-semibold text-[#0B1320] whitespace-nowrap">
                        {row.capability}
                      </td>
                      <td className="p-4 sm:p-5 text-xs text-[#7A8899] font-medium">{row.small}</td>
                      <td className="p-4 sm:p-5 text-xs text-[#7A8899] font-medium">{row.cbse}</td>
                      <td className="p-4 sm:p-5 text-xs text-[#7A8899] font-medium">{row.icse}</td>
                      <td className="p-4 sm:p-5 text-xs text-[#7A8899] font-medium">{row.state}</td>
                      <td className="p-4 sm:p-5 text-xs font-semibold text-[#D95338]">{row.multi}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <FAQSection
          title="Frequently Asked Questions about Solutions"
          subtitle="Everything you need to know about customizing Scholarix OS for your school."
          faqs={OVERVIEW_FAQS}
        />

        {/* CTA Section */}
        <CTASection
          badge="Tailored Walkthrough"
          headline="Experience Scholarix OS Configured for Your School"
          subheadline="Book a private 25-minute consultation with our educational software architects. We will demonstrate the exact workflows, fee engines, and report cards relevant to your institution."
          primaryCtaText="Book a Custom Demo"
          primaryCtaHref="/demo"
          secondaryCtaText="Contact Sales Team"
          secondaryCtaHref="/contact"
        />
      </main>

      <Footer />
    </div>
  );
}
