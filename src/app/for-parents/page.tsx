import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRoleBySlug } from "@/data/roles";
import { RolePageTemplate } from "@/components/shared/RolePageTemplate";

export const metadata: Metadata = {
  title: "School ERP for Parents — Live Attendance Alerts, UPI Fee Pay & Bus GPS",
  description:
    "Stay closely connected to your child's education. Scholarix OS parent app delivers instant attendance notifications, 2-tap UPI fee payments, digital report cards, and live GPS bus tracking.",
  keywords:
    "school ERP parent mobile app, pay school fees online UPI, live bus tracking school GPS, student attendance alert SMS",
  alternates: {
    canonical: "https://scholarix-os.com/for-parents",
  },
  openGraph: {
    title: "School ERP for Parents — Live Attendance Alerts, UPI Fee Pay & Bus GPS",
    description:
      "Your child's school journey, transparent and secure in your pocket. Live bus tracking, instant fee receipts, and digital report cards.",
    url: "https://scholarix-os.com/for-parents",
    type: "website",
  },
};

export default function ForParentsPage() {
  const role = getRoleBySlug("for-parents");
  if (!role) notFound();

  return <RolePageTemplate role={role} />;
}
