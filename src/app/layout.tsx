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
    "People, classes, attendance, a timetable you fill in, exams, report cards, and fees for one school.",
  keywords:
    "school management software, school attendance, school fees, report cards, parent portal",
  authors: [{ name: "Scholarix OS" }],
  openGraph: {
    type: "website",
    title: "Scholarix OS — The Operating System Built for Tomorrow's Schools",
    description:
      "People, classes, attendance, exams, report cards, and fees for one school.",
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
