import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRoleBySlug } from "@/data/roles";
import { RolePageTemplate } from "@/components/shared/RolePageTemplate";

export const metadata: Metadata = {
  title: "School Overview for Principals — Scholarix OS",
  description:
    "A principal's home with today's attendance, outstanding fees, marks awaiting review, and the items that still need a decision.",
  keywords:
    "school dashboard for principals, school attendance overview, school fee overview",
  alternates: {
    canonical: "https://scholarix-os.com/for-principals",
  },
  openGraph: {
    title: "School Overview for Principals — Scholarix OS",
    description:
      "Today's attendance, outstanding fees, marks awaiting review, and students under the cutoff for this school.",
    url: "https://scholarix-os.com/for-principals",
    type: "website",
  },
};

export default function ForPrincipalsPage() {
  const role = getRoleBySlug("for-principals");
  if (!role) notFound();

  return <RolePageTemplate role={role} />;
}
