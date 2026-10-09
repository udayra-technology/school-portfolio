import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRoleBySlug } from "@/data/roles";
import { RolePageTemplate } from "@/components/shared/RolePageTemplate";

export const metadata: Metadata = {
  title: "Parent View of Attendance, Results, and Fees — Scholarix OS",
  description:
    "Parents switch between children and see attendance, timetable, exams, results, report cards, and fees.",
  keywords:
    "school parent portal, student attendance for parents, school report cards, school fee ledger",
  alternates: {
    canonical: "https://scholarix-os.com/for-parents",
  },
  openGraph: {
    title: "Parent View of Attendance, Results, and Fees — Scholarix OS",
    description:
      "One sign-in for each child: attendance, timetable, results, report cards, and the fee ledger.",
    url: "https://scholarix-os.com/for-parents",
    type: "website",
  },
};

export default function ForParentsPage() {
  const role = getRoleBySlug("for-parents");
  if (!role) notFound();

  return <RolePageTemplate role={role} />;
}
