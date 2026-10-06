"use client";

import Link from "next/link";
import { LogoMark } from "./Logo";

const NAV_COLUMNS = [
  {
    title: "Platform",
    links: [
      { label: "Product Overview", href: "/product" },
      { label: "All Features", href: "/features" },
      { label: "Solutions Overview", href: "/solutions" },
      { label: "Pricing Plans", href: "/pricing" },
      { label: "Book a Demo", href: "/demo" },
      { label: "Contact Sales", href: "/contact" },
    ],
  },
  {
    title: "Core Modules",
    links: [
      { label: "Admissions CRM", href: "/features/admissions" },
      { label: "Attendance Matrix", href: "/features/attendance" },
      { label: "Fee Engine", href: "/features/fees" },
      { label: "Exams & Results", href: "/features/exams-results" },
      { label: "AI Timetabler", href: "/features/timetable" },
      { label: "Fleet Transport", href: "/features/transport" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Small & Budget Schools", href: "/solutions/small-schools" },
      { label: "CBSE Schools", href: "/solutions/cbse-schools" },
      { label: "ICSE / ISC Schools", href: "/solutions/icse-schools" },
      { label: "State Board Schools", href: "/solutions/state-board-schools" },
      { label: "Multi-Campus Groups", href: "/solutions/multi-campus-schools" },
    ],
  },
  {
    title: "By Role",
    links: [
      { label: "For Principals", href: "/for-principals" },
      { label: "For Teachers", href: "/for-teachers" },
      { label: "For Parents", href: "/for-parents" },
      { label: "For School Admins", href: "/for-school-admins" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#0B1320] pb-6 pt-20 text-[#FBF9F5]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Top grid: Brand + 4 link columns */}
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2.5">
              <LogoMark className="h-8 w-8 text-[#D95338]" />
              <span className="font-display text-xl font-bold tracking-tight text-[#FBF9F5]">
                Scholarix
                <sup className="ml-0.5 font-mono text-[10px] font-semibold text-[#D95338]">
                  OS
                </sup>
              </span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#7A8899]">
              The intelligent operating system for modern educational
              institutions. Attendance, timetabling, grading, fees, and parent
              communication &mdash; one command center.
            </p>
          </div>

          {/* 4 Nav columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {NAV_COLUMNS.map((col, idx) => (
              <div key={idx} className="space-y-4">
                <p className="font-mono text-xs font-semibold uppercase tracking-wider text-[#C09E3E]">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-xs sm:text-sm text-[#7A8899] transition-colors duration-200 hover:text-[#FBF9F5]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Dividing line */}
        <div className="mt-16 border-t border-white/10" />

        {/* Metadata row: Copyright on left, Compliance badges on right */}
        <div className="mt-6 flex flex-col items-start justify-between gap-4 text-xs text-[#7A8899] sm:flex-row sm:items-center">
          <p>&copy; 2026 Scholarix OS. All rights reserved.</p>
          <p className="font-mono text-[11px] uppercase tracking-widest text-[#7A8899]">
            FERPA &middot; ISO 27001 &middot; SOC 2 TYPE II
          </p>
        </div>

        {/* Giant architectural blueprint watermark: SCHOLARIX */}
        <div
          className="mt-12 w-full overflow-hidden select-none pointer-events-none opacity-90"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1300 220"
            className="w-full h-auto text-white/[0.08]"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* S */}
            <g>
              <path
                d="M 130 50 C 130 22 108 14 75 14 C 38 14 18 34 18 64 C 18 102 130 92 130 150 C 130 188 106 206 72 206 C 32 206 14 184 14 154"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M 112 56 C 112 36 96 30 75 30 C 48 30 36 42 36 64 C 36 86 112 78 112 150 C 112 174 94 190 72 190 C 45 190 32 174 32 154"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <line
                x1="112"
                y1="56"
                x2="130"
                y2="50"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <line
                x1="14"
                y1="154"
                x2="32"
                y2="154"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </g>

            {/* C */}
            <g>
              <path
                d="M 275 55 C 265 24 235 14 220 14 C 180 14 164 48 164 110 C 164 172 180 206 220 206 C 245 206 268 190 275 160"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M 258 65 C 252 38 232 30 220 30 C 192 30 182 58 182 110 C 182 162 192 190 220 190 C 235 190 252 180 258 152"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <line
                x1="258"
                y1="65"
                x2="275"
                y2="55"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <line
                x1="258"
                y1="152"
                x2="275"
                y2="160"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </g>

            {/* H with overlapping crossbar */}
            <g>
              <rect
                x="315"
                y="14"
                width="22"
                height="192"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <rect
                x="405"
                y="14"
                width="22"
                height="192"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <rect
                x="302"
                y="100"
                width="138"
                height="20"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </g>

            {/* O with inner loop and axis */}
            <g>
              <rect
                x="465"
                y="14"
                width="122"
                height="192"
                rx="30"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <rect
                x="487"
                y="35"
                width="78"
                height="150"
                rx="16"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </g>

            {/* L */}
            <g>
              <rect
                x="625"
                y="14"
                width="22"
                height="192"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <rect
                x="615"
                y="186"
                width="118"
                height="20"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </g>

            {/* A with overlapping crossbar & apex */}
            <g>
              <polygon
                points="808,12 830,12 774,206 752,206"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <polygon
                points="814,12 836,12 898,206 876,206"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <rect
                x="766"
                y="130"
                width="112"
                height="20"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <line
                x1="800"
                y1="12"
                x2="844"
                y2="12"
                stroke="currentColor"
                strokeWidth="0.8"
              />
            </g>

            {/* R with upper loop & diagonal leg */}
            <g>
              <rect
                x="918"
                y="14"
                width="22"
                height="192"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M 940 14 L 985 14 C 1018 14 1030 35 1030 65 C 1030 95 1018 115 985 115 L 940 115"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <path
                d="M 940 33 L 980 33 C 1002 33 1010 46 1010 65 C 1010 84 1002 96 980 96 L 940 96"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <polygon
                points="972,110 994,110 1038,206 1016,206"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </g>

            {/* I with top and bottom cap lines */}
            <g>
              <rect
                x="1070"
                y="14"
                width="22"
                height="192"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <line
                x1="1056"
                y1="14"
                x2="1106"
                y2="14"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <line
                x1="1056"
                y1="206"
                x2="1106"
                y2="206"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </g>

            {/* X with intersecting crossing bars */}
            <g>
              <polygon
                points="1148,14 1172,14 1274,206 1250,206"
                stroke="currentColor"
                strokeWidth="1.2"
              />
              <polygon
                points="1250,14 1274,14 1172,206 1148,206"
                stroke="currentColor"
                strokeWidth="1.2"
              />
            </g>
          </svg>
        </div>
      </div>
    </footer>
  );
}
