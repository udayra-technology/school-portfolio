import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getRoleBySlug } from "@/data/roles";
import { RolePageTemplate } from "@/components/shared/RolePageTemplate";

export const metadata: Metadata = {
  title: "Attendance, Marks, and Timetable for Teachers — Scholarix OS",
  description:
    "Teachers see today's periods, mark attendance, enter marks, and follow syllabus progress for their classes.",
  keywords:
    "teacher attendance, school marks entry, teacher timetable, syllabus progress",
  alternates: {
    canonical: "https://scholarix-os.com/for-teachers",
  },
  openGraph: {
    title: "Attendance, Marks, and Timetable for Teachers — Scholarix OS",
    description:
      "Today's periods, the class roster, marks waiting to be entered, and syllabus progress.",
    url: "https://scholarix-os.com/for-teachers",
    type: "website",
  },
};

export default function ForTeachersPage() {
  const role = getRoleBySlug("for-teachers");
  if (!role) notFound();

  return <RolePageTemplate role={role} />;
}
