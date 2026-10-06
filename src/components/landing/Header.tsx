"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  Play,
  X,
  ArrowRight,
  ChevronDown,
  Building,
  School,
  GraduationCap,
  Users2,
  Sparkles,
  ArrowUpRight,
  UserCheck,
  Briefcase,
  HeartHandshake,
} from "lucide-react";
import { LogoMark } from "./Logo";

const NAV = [
  { label: "Product", href: "/product" },
  { label: "Features", href: "/features" },
  {
    label: "Solutions",
    href: "/solutions",
    hasDropdown: true,
  },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

const SOLUTION_ITEMS = [
  {
    category: "By Institution",
    links: [
      {
        title: "Small & Budget Schools",
        desc: "Affordable 48-hour setup for growing academies",
        href: "/solutions/small-schools",
      },
      {
        title: "CBSE Schools",
        desc: "Periodic tests, co-scholastic rubrics & 75% attendance alerts",
        href: "/solutions/cbse-schools",
      },
      {
        title: "ICSE / ISC Schools",
        desc: "CISCE subject groups, bifurcated papers & project tracking",
        href: "/solutions/icse-schools",
      },
      {
        title: "State Board Schools",
        desc: "Multilingual alerts, RTE quotas & state muster rolls",
        href: "/solutions/state-board-schools",
      },
      {
        title: "Multi-Campus Groups",
        desc: "Centralized trust command, campus RBAC & consolidated BI",
        href: "/solutions/multi-campus-schools",
      },
    ],
  },
  {
    category: "By Stakeholder Role",
    links: [
      {
        title: "For Principals",
        desc: "Morning pulse dashboard, fee velocity & teacher proxies",
        href: "/for-principals",
      },
      {
        title: "For Teachers",
        desc: "15-second attendance, fast marks entry & quiet hours",
        href: "/for-teachers",
      },
      {
        title: "For Parents",
        desc: "Live GPS bus tracking, instant UPI fee pay & attendance SMS",
        href: "/for-parents",
      },
      {
        title: "For School Admins",
        desc: "Zero-reconciliation fees, biometric payroll & U-DISE export",
        href: "/for-school-admins",
      },
    ],
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setSolutionsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-7xl px-4">
      {/* Desktop navbar pill */}
      <div className="flex items-center justify-between rounded-full border border-black/5 bg-[#FBF9F5]/85 px-5 py-3 shadow-sm backdrop-blur-xl">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Scholarix OS home"
        >
          <LogoMark className="h-8 w-8 text-[#D95338]" />
          <span className="font-display text-lg font-bold tracking-tight text-[#0B1320]">
            Scholarix
            <sup className="ml-0.5 font-mono text-[10px] font-semibold text-[#D95338]">
              OS
            </sup>
          </span>
        </Link>

        {/* Desktop nav links */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {NAV.map((item) => {
            if (item.hasDropdown) {
              const isSolutionsActive =
                pathname.startsWith("/solutions") ||
                pathname.startsWith("/for-");

              return (
                <div
                  key={item.href}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                      isSolutionsActive
                        ? "font-semibold text-[#0B1320]"
                        : "text-[#7A8899] hover:text-[#0B1320]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-200 ${
                        solutionsOpen ? "rotate-180 text-[#D95338]" : ""
                      }`}
                    />
                  </Link>

                  {/* Mega Menu Dropdown */}
                  {solutionsOpen && (
                    <div className="absolute left-1/2 top-full mt-3 w-[660px] -translate-x-1/2 rounded-3xl border border-black/10 bg-[#FBF9F5]/98 p-6 shadow-2xl backdrop-blur-2xl transition-all duration-200">
                      <div className="grid grid-cols-2 gap-6">
                        {SOLUTION_ITEMS.map((section, idx) => (
                          <div key={idx}>
                            <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#D95338] mb-3">
                              {section.category}
                            </p>
                            <div className="space-y-1">
                              {section.links.map((link) => (
                                <Link
                                  key={link.href}
                                  href={link.href}
                                  className="group block rounded-xl p-2.5 transition-colors hover:bg-[#F3ECE2]"
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold text-[#0B1320] group-hover:text-[#D95338]">
                                      {link.title}
                                    </span>
                                    <ArrowUpRight className="h-3 w-3 text-[#7A8899] opacity-0 transition-opacity group-hover:opacity-100 group-hover:text-[#D95338]" />
                                  </div>
                                  <p className="mt-0.5 text-[11px] leading-relaxed text-[#7A8899]">
                                    {link.desc}
                                  </p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="mt-4 border-t border-black/5 pt-3 flex items-center justify-between text-xs">
                        <Link
                          href="/solutions"
                          className="font-semibold text-[#D95338] hover:underline inline-flex items-center gap-1"
                        >
                          <span>Explore All Solutions Overview</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                        <span className="text-[11px] text-[#7A8899]">
                          Pre-configured for CBSE, ICSE, State & Chains
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname?.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? "font-semibold text-[#0B1320]"
                    : "text-[#7A8899] hover:text-[#0B1320]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href="/product"
            className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-semibold text-[#0B1320] transition-colors duration-200 hover:bg-[#F3ECE2]"
          >
            <Play className="h-3.5 w-3.5 text-[#D95338]" />
            Live Tour
          </Link>
          <Link
            href="/demo"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#D95338] px-5 py-2.5 text-sm font-semibold text-[#FBF9F5] shadow-sm transition-all duration-200 hover:bg-[#C04325] hover:shadow-md active:scale-95"
          >
            <span>Book a Demo</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="rounded-full p-2 text-[#0B1320] md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mt-2 max-h-[85vh] overflow-y-auto rounded-3xl border border-black/5 bg-[#FBF9F5]/98 p-4 shadow-xl backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            <Link
              href="/product"
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#0B1320] hover:bg-[#F3ECE2]"
            >
              Product
            </Link>
            <Link
              href="/features"
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#0B1320] hover:bg-[#F3ECE2]"
            >
              Features
            </Link>

            {/* Mobile Solutions Section */}
            <div className="rounded-2xl bg-[#F3ECE2]/60 p-3 my-1">
              <Link
                href="/solutions"
                className="font-mono text-xs font-bold uppercase tracking-wider text-[#D95338] flex items-center justify-between"
              >
                <span>Solutions</span>
                <span className="text-[10px] lowercase text-[#7A8899]">overview &rarr;</span>
              </Link>
              <div className="mt-2 grid grid-cols-1 gap-1">
                <Link
                  href="/solutions/small-schools"
                  className="rounded-lg px-2 py-1.5 text-xs text-[#0B1320] hover:bg-white/60"
                >
                  &bull; Small & Budget Schools
                </Link>
                <Link
                  href="/solutions/cbse-schools"
                  className="rounded-lg px-2 py-1.5 text-xs text-[#0B1320] hover:bg-white/60"
                >
                  &bull; CBSE Affiliated Schools
                </Link>
                <Link
                  href="/solutions/icse-schools"
                  className="rounded-lg px-2 py-1.5 text-xs text-[#0B1320] hover:bg-white/60"
                >
                  &bull; ICSE / ISC Schools
                </Link>
                <Link
                  href="/solutions/state-board-schools"
                  className="rounded-lg px-2 py-1.5 text-xs text-[#0B1320] hover:bg-white/60"
                >
                  &bull; State Board Schools
                </Link>
                <Link
                  href="/solutions/multi-campus-schools"
                  className="rounded-lg px-2 py-1.5 text-xs text-[#0B1320] hover:bg-white/60"
                >
                  &bull; Multi-Campus Groups
                </Link>
              </div>

              <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-wider text-[#2D5A4C]">
                By Role
              </p>
              <div className="mt-1 grid grid-cols-2 gap-1">
                <Link
                  href="/for-principals"
                  className="rounded-lg px-2 py-1 text-xs text-[#0B1320] hover:bg-white/60"
                >
                  For Principals
                </Link>
                <Link
                  href="/for-teachers"
                  className="rounded-lg px-2 py-1 text-xs text-[#0B1320] hover:bg-white/60"
                >
                  For Teachers
                </Link>
                <Link
                  href="/for-parents"
                  className="rounded-lg px-2 py-1 text-xs text-[#0B1320] hover:bg-white/60"
                >
                  For Parents
                </Link>
                <Link
                  href="/for-school-admins"
                  className="rounded-lg px-2 py-1 text-xs text-[#0B1320] hover:bg-white/60"
                >
                  For Admins
                </Link>
              </div>
            </div>

            <Link
              href="/pricing"
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#0B1320] hover:bg-[#F3ECE2]"
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className="rounded-xl px-4 py-2.5 text-sm font-medium text-[#0B1320] hover:bg-[#F3ECE2]"
            >
              Contact
            </Link>

            <div className="mt-2 flex flex-col gap-2 pt-2 border-t border-black/5">
              <Link
                href="/product"
                className="flex items-center justify-center gap-1.5 rounded-full border border-black/10 py-2.5 text-sm font-semibold text-[#0B1320]"
              >
                <Play className="h-3.5 w-3.5 text-[#D95338]" />
                Live Tour
              </Link>
              <Link
                href="/demo"
                className="rounded-full bg-[#D95338] px-5 py-3 text-center text-sm font-semibold text-[#FBF9F5]"
              >
                Book a Demo
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
