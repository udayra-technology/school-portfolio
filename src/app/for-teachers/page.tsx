import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRoleBySlug } from "@/data/roles";
import { RolePageTemplate } from "@/components/shared/RolePageTemplate";

export const metadata: Metadata = {
  title: "School ERP for Teachers — 15-Second Attendance, Easy Marks & Homework",
  description:
    "Reclaim your teaching hours. Scholarix OS gives teachers 15-second mobile attendance roll calls, spreadsheet-like gradebooks, digital homework distribution, and private parent messaging.",
  keywords:
    "school ERP for teachers, teacher attendance app, classroom management software, marks entry portal, homework sharing",
  alternates: {
    canonical: "https://scholarix-os.com/for-teachers",
  },
  openGraph: {
    title: "School ERP for Teachers — 15-Second Attendance, Easy Marks & Homework",
    description:
      "Spend time inspiring students, not wrestling with paperwork. The ultimate digital workspace designed by educators for educators.",
    url: "https://scholarix-os.com/for-teachers",
    type: "website",
  },
};

export default function ForTeachersPage() {
  const role = getRoleBySlug("for-teachers");
  if (!role) notFound();

  return <RolePageTemplate role={role} />;
}
