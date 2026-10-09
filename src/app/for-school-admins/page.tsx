import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRoleBySlug } from "@/data/roles";
import { RolePageTemplate } from "@/components/shared/RolePageTemplate";

export const metadata: Metadata = {
  title: "Students, Fees, and the School Year for Admins — Scholarix OS",
  description:
    "Admins keep students, teachers, classes, invoices, academic years, and report cards in one workspace.",
  keywords:
    "school administration software, student records, school fee invoices, academic year",
  alternates: {
    canonical: "https://scholarix-os.com/for-school-admins",
  },
  openGraph: {
    title: "Students, Fees, and the School Year for Admins — Scholarix OS",
    description:
      "People, classes, the year, invoices, and the settings for grades and report cards.",
    url: "https://scholarix-os.com/for-school-admins",
    type: "website",
  },
};

export default function ForSchoolAdminsPage() {
  const role = getRoleBySlug("for-school-admins");
  if (!role) notFound();

  return <RolePageTemplate role={role} />;
}
