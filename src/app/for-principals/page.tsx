import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRoleBySlug } from "@/data/roles";
import { RolePageTemplate } from "@/components/shared/RolePageTemplate";

export const metadata: Metadata = {
  title: "School ERP for Principals & Directors — Real-Time Campus Intelligence",
  description:
    "Empower school leadership. Scholarix OS gives principals real-time morning attendance pulses, fee collection velocity, automated teacher substitute rosters, and academic analytics.",
  keywords:
    "school ERP for principals, principal dashboard, school leadership management software, teacher proxy matrix",
  alternates: {
    canonical: "https://scholarix-os.com/for-principals",
  },
  openGraph: {
    title: "School ERP for Principals & Directors — Real-Time Campus Intelligence",
    description:
      "Stop waiting for paper summaries. Scholarix OS puts real-time attendance, fee velocity, and academic health directly into your executive cockpit.",
    url: "https://scholarix-os.com/for-principals",
    type: "website",
  },
};

export default function ForPrincipalsPage() {
  const role = getRoleBySlug("for-principals");
  if (!role) notFound();

  return <RolePageTemplate role={role} />;
}
