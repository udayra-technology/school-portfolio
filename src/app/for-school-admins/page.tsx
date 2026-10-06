import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRoleBySlug } from "@/data/roles";
import { RolePageTemplate } from "@/components/shared/RolePageTemplate";

export const metadata: Metadata = {
  title: "School ERP for School Administrators & Bursars — Fast SIS, Fees & Audits",
  description:
    "Automate campus operations. Scholarix OS gives school administrators and bursars zero-reconciliation fee collection, rapid student records (SIS), biometric payroll, and audit exports.",
  keywords:
    "school administrator ERP software, bursar fee reconciliation, school SIS system, U-DISE export, staff biometric payroll",
  alternates: {
    canonical: "https://scholarix-os.com/for-school-admins",
  },
  openGraph: {
    title: "School ERP for School Administrators & Bursars — Fast SIS, Fees & Audits",
    description:
      "Balance every ledger, issue certificates in seconds, and eliminate fee reconciliation headaches with Scholarix OS.",
    url: "https://scholarix-os.com/for-school-admins",
    type: "website",
  },
};

export default function ForSchoolAdminsPage() {
  const role = getRoleBySlug("for-school-admins");
  if (!role) notFound();

  return <RolePageTemplate role={role} />;
}
