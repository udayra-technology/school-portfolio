import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scholarix OS — School Management Software for Modern Institutions",
  description:
    "Scholarix OS unifies attendance, AI timetabling, grading, fee management and parent communication into one institutional-grade command center for K-12 schools and districts.",
  keywords:
    "school management software, school ERP, attendance tracking, AI timetabling, parent portal, fee management, K-12 SaaS",
  authors: [{ name: "Scholarix OS" }],
  openGraph: {
    type: "website",
    title: "Scholarix OS — The Operating System Built for Tomorrow's Schools",
    description:
      "Unify administrative workflows, attendance tracking, AI timetabling, and parent communication in one ultra-sleek, institutional-grade command center.",
    siteName: "Scholarix OS",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scholarix OS — School Management Software",
    description: "One intelligent operating system for modern educational institutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} min-h-screen bg-[#FBF9F5] font-sans text-[#0B1320] antialiased`}
      >
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
