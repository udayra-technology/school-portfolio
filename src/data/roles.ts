export interface RoleRoutineItem {
  time: string;
  activity: string;
  impact: string;
}

export interface RoleCapability {
  title: string;
  description: string;
  tag: string;
}

export interface RoleBeforeAfter {
  before: string;
  after: string;
}

export interface RoleRelatedModule {
  slug: string;
  name: string;
  desc: string;
}

export interface RoleFAQ {
  question: string;
  answer: string;
}

export interface RoleItem {
  slug: string;
  roleTitle: string;
  roleBadge: string;
  targetKeyword: string;
  seoTitle: string;
  seoDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  dailyCockpitSummary: string;
  dailyRoutine: RoleRoutineItem[];
  capabilities: RoleCapability[];
  beforeAfter: RoleBeforeAfter[];
  relatedModules: RoleRelatedModule[];
  faq: RoleFAQ[];
}

export const ROLES: RoleItem[] = [
  {
    slug: "for-principals",
    roleTitle: "Principals",
    roleBadge: "School home",
    targetKeyword: "school dashboard for principals",
    seoTitle: "School Overview for Principals — Scholarix OS",
    seoDescription:
      "A principal's home with today's attendance, outstanding fees, marks awaiting review, and the items that still need a decision.",
    heroHeadline: "The school, on one screen.",
    heroSubheadline:
      "Today's attendance, including which sections have not submitted. Outstanding fees. Marks awaiting review. Students under the cutoff you set.",
    dailyCockpitSummary:
      "The admin home is the morning view for this school. It does not combine other campuses.",
    dailyRoutine: [
      {
        time: "Morning",
        activity: "Open the school home",
        impact: "See today's attendance, which sections are still open, and who is under the cutoff.",
      },
      {
        time: "Midday",
        activity: "Check what is still owed",
        impact: "See fees collected this month and open the outstanding list.",
      },
      {
        time: "Afternoon",
        activity: "Clear what is waiting",
        impact: "Open marks awaiting review, marks still to enter, and leave waiting for a decision.",
      },
      {
        time: "Term",
        activity: "Follow results",
        impact: "Review marks, then publish term results, ranks, and report cards.",
      },
    ],
    capabilities: [
      {
        title: "Morning cards",
        description: "Active students, active teachers, sections, today's attendance, outstanding fees, and marks awaiting review.",
        tag: "Home",
      },
      {
        title: "Needs your attention",
        description: "Attendance still to submit, overdue fees, students under the cutoff, marks, and leave. Each one opens that list.",
        tag: "Today",
      },
      {
        title: "Today's attendance",
        description: "Present, absent, late, and leave, and the sections that have not submitted.",
        tag: "Attendance",
      },
      {
        title: "Fees outstanding",
        description: "Collected this month, and what is still outstanding from the invoices.",
        tag: "Fees",
      },
      {
        title: "Syllabus and the day",
        description: "Syllabus progress, today's activity, and recent activity for this school.",
        tag: "Academics",
      },
      {
        title: "The school's own words",
        description: "Rename student, class, section, and the rest. The app follows that language.",
        tag: "Profile",
      },
      {
        title: "Roles",
        description: "Menus follow the person's role, so a teacher does not see the fee desk.",
        tag: "Access",
      },
    ],
    beforeAfter: [
      {
        before: "Attendance, fees, and marks are three conversations.",
        after: "The admin home shows today's attendance, what is owed, and marks awaiting review, and each one opens its list.",
      },
      {
        before: "A low attendance percentage waits until someone adds the register.",
        after: "Students under the cutoff you set are listed while the year is still open.",
      },
      {
        before: "The report card is a document rebuilt each term.",
        after: "Cards are generated from published term results, using the school's template.",
      },
    ],
    relatedModules: [
      { slug: "reports-analytics", name: "School overview", desc: "Today's attendance, outstanding fees, and what needs a decision" },
      { slug: "attendance", name: "Attendance", desc: "The daily roster and the cutoff" },
      { slug: "fees", name: "Fees", desc: "Structures, invoices, and what is still owed" },
    ],
    faq: [
      {
        question: "Does this home include other campuses?",
        answer: "No. It is the school on this site.",
      },
      {
        question: "Where is the attendance cutoff set?",
        answer: "On the school profile. The home uses that number.",
      },
      {
        question: "Can I see syllabus progress?",
        answer: "Yes. The admin home includes syllabus progress for the school, next to today's attendance and marks awaiting review. Teachers also see progress for the classes they teach.",
      },
    ],
  },
  {
    slug: "for-teachers",
    roleTitle: "Teachers",
    roleBadge: "Class desk",
    targetKeyword: "school software for teachers",
    seoTitle: "Attendance, Marks, and Timetable for Teachers — Scholarix OS",
    seoDescription:
      "Teachers see today's periods, mark attendance, enter marks, and follow syllabus progress for their classes.",
    heroHeadline: "Today's periods, the roster, and the marks.",
    heroSubheadline:
      "The teacher home shows today's timetable, which classes still need attendance, marks waiting to be entered, and syllabus progress.",
    dailyCockpitSummary:
      "A teacher works the classes they are assigned. They do not see the admin fee desk.",
    dailyRoutine: [
      {
        time: "Morning",
        activity: "Read today's periods",
        impact: "The home lists the day from the timetable the school filled in.",
      },
      {
        time: "Class",
        activity: "Mark attendance",
        impact: "Present, absent, late, or leave, with a draft you can save before submit.",
      },
      {
        time: "After class",
        activity: "Enter marks",
        impact: "Marks go on the assessment. An admin reviews them before results publish.",
      },
      {
        time: "The week",
        activity: "Update syllabus progress",
        impact: "Topics move forward for the subjects you teach. Students can follow that progress.",
      },
    ],
    capabilities: [
      {
        title: "Today's timetable",
        description: "Periods for the day, from the weekly timetable.",
        tag: "Timetable",
      },
      {
        title: "Attendance roster",
        description: "Mark a class and section, keep remarks, and submit the day.",
        tag: "Attendance",
      },
      {
        title: "Marks entry",
        description: "Enter marks on an assessment. Review stays with admin.",
        tag: "Exams",
      },
      {
        title: "Syllabus progress",
        description: "Update topics. Students can see how far the subject has moved.",
        tag: "Syllabus",
      },
      {
        title: "My class",
        description: "The section you look after, if you are the class teacher.",
        tag: "People",
      },
      {
        title: "Your menu",
        description: "Links you are not allowed to open are not shown.",
        tag: "Access",
      },
    ],
    beforeAfter: [
      {
        before: "The register, the marks sheet, and the timetable are three papers.",
        after: "Today's periods, unmarked attendance, and marks waiting sit on the teacher home.",
      },
      {
        before: "A half-finished roster is easy to lose.",
        after: "The roster keeps a draft until you submit it.",
      },
      {
        before: "Students ask how far the syllabus has gone.",
        after: "Topic progress is on the subject, and students can open it.",
      },
    ],
    relatedModules: [
      { slug: "attendance", name: "Attendance", desc: "Daily roster with a saved draft" },
      { slug: "exams-results", name: "Exams and report cards", desc: "Marks entry, then review and cards" },
      { slug: "timetable", name: "Timetable", desc: "The week the school filled in" },
    ],
    faq: [
      {
        question: "Do I publish report cards?",
        answer: "Teachers enter marks. Publishing term results and report cards is an admin step.",
      },
      {
        question: "Can I see fees?",
        answer: "No. The fee desk is for admin. Teachers see their classes, attendance, marks, syllabus, and timetable.",
      },
      {
        question: "What if I am the class teacher?",
        answer: "My class opens the section you look after.",
      },
    ],
  },
  {
    slug: "for-parents",
    roleTitle: "Parents",
    roleBadge: "Family view",
    targetKeyword: "school parent portal",
    seoTitle: "Parent View of Attendance, Results, and Fees — Scholarix OS",
    seoDescription:
      "Parents switch between children and see attendance, timetable, exams, results, report cards, and fees.",
    heroHeadline: "Each child, from one sign-in.",
    heroSubheadline:
      "Switch between children. For the one you pick: attendance, the weekly timetable, exams, results, report cards, and the fee ledger.",
    dailyCockpitSummary:
      "The parent home is that child's records. It is the same information the school already keeps.",
    dailyRoutine: [
      {
        time: "Morning",
        activity: "Check attendance",
        impact: "Open the month, export it, or file a leave request.",
      },
      {
        time: "Day",
        activity: "Read the timetable",
        impact: "The week the school published for that class.",
      },
      {
        time: "Exam week",
        activity: "Open results",
        impact: "Upcoming exams, published results, and report cards.",
      },
      {
        time: "Fees",
        activity: "See what is due",
        impact: "The ledger shows unpaid, partial, paid, or waived. A payment can be recorded.",
      },
    ],
    capabilities: [
      {
        title: "Child switcher",
        description: "More than one child at the school uses the same parent login.",
        tag: "Family",
      },
      {
        title: "Attendance",
        description: "The month's attendance, an export, and a leave request.",
        tag: "Attendance",
      },
      {
        title: "Timetable and exams",
        description: "The weekly timetable and the exams coming up.",
        tag: "Academics",
      },
      {
        title: "Results and report cards",
        description: "Published results and report cards for the child.",
        tag: "Results",
      },
      {
        title: "Fee ledger",
        description: "What is due. A payment is recorded, not taken by a gateway.",
        tag: "Fees",
      },
      {
        title: "Announcements",
        description: "School announcements on the signed-in app.",
        tag: "Notices",
      },
    ],
    beforeAfter: [
      {
        before: "Attendance, the report card, and the fee receipt are three visits to school.",
        after: "Those records are on the parent home for the child you select.",
      },
      {
        before: "A second child means a second pile of paper.",
        after: "Switch children on the same login.",
      },
      {
        before: "A leave note is a paper chit.",
        after: "File the leave request from the attendance page.",
      },
    ],
    relatedModules: [
      { slug: "parent-communication", name: "Parent portal", desc: "The family view of school records" },
      { slug: "fees", name: "Fees", desc: "The ledger for what is due" },
      { slug: "exams-results", name: "Results and cards", desc: "Published results and report cards" },
    ],
    faq: [
      {
        question: "Can two parents use this?",
        answer: "The student record holds one parent contact and one parent login.",
      },
      {
        question: "How do we pay?",
        answer: "You can record a payment against what is due. The app does not charge a card or UPI inside a gateway.",
      },
      {
        question: "Is there a mobile app?",
        answer: "Yes. It shows the same family screens: attendance, timetable, academics, fees, and report cards.",
      },
    ],
  },
  {
    slug: "for-school-admins",
    roleTitle: "School admins",
    roleBadge: "Office",
    targetKeyword: "school administration software",
    seoTitle: "Students, Fees, and the School Year for Admins — Scholarix OS",
    seoDescription:
      "Admins keep students, teachers, classes, invoices, academic years, and report cards in one workspace.",
    heroHeadline: "The office work, in the year you have open.",
    heroSubheadline:
      "Students and teachers, classes, the academic year, invoices, and the settings that shape grades and report cards.",
    dailyCockpitSummary:
      "Admin is the role that sets up the year and keeps the records other roles read.",
    dailyRoutine: [
      {
        time: "Setup",
        activity: "Open the year and the classes",
        impact: "Years, terms, streams, sections, subjects, and the class fee.",
      },
      {
        time: "People",
        activity: "Add students and teachers",
        impact: "One at a time or from a spreadsheet, with a credential slip for new logins.",
      },
      {
        time: "Fees",
        activity: "Invoice and record",
        impact: "Generate invoices from the class structure and record payments.",
      },
      {
        time: "Year end",
        activity: "Promote",
        impact: "Preview the class, then promote or retain the students you select.",
      },
    ],
    capabilities: [
      {
        title: "Students and teachers",
        description: "Profiles, photos, class enrollment, and bulk add.",
        tag: "People",
      },
      {
        title: "Classes",
        description: "A setup from streams and sections through subjects, teachers, and the fee.",
        tag: "Classes",
      },
      {
        title: "Academic year",
        description: "Open and switch years. A banner shows when the year is not the active one.",
        tag: "Year",
      },
      {
        title: "Invoices",
        description: "Admission, monthly, and transport. Record cash, UPI, cheque, bank, or other.",
        tag: "Fees",
      },
      {
        title: "Exam settings",
        description: "Assessment types, schemes, grading, and the report card template.",
        tag: "Exams",
      },
      {
        title: "School profile",
        description: "Name, logo, affiliation, principal signature, attendance cutoff, and your own words.",
        tag: "Profile",
      },
    ],
    beforeAfter: [
      {
        before: "A new class is a stack of lists: sections, subjects, teachers, fees.",
        after: "The class setup walks through that sequence.",
      },
      {
        before: "Working in last year's file is an easy mistake.",
        after: "The year you are in is labeled when it is not the active year.",
      },
      {
        before: "Promotion is a fresh spreadsheet.",
        after: "Preview the students, then promote or retain into the next class and section.",
      },
    ],
    relatedModules: [
      { slug: "student-management", name: "Students and teachers", desc: "Records, bulk add, and promotion" },
      { slug: "fees", name: "Fees", desc: "Structures, invoices, and outstanding" },
      { slug: "exams-results", name: "Exams and report cards", desc: "Schemes, results, and templates" },
    ],
    faq: [
      {
        question: "Can we import existing lists?",
        answer: "Yes. Students and teachers can be added from a spreadsheet.",
      },
      {
        question: "What payments can we record?",
        answer: "Cash, UPI, cheque, bank, or other. Recording a payment is not the same as a payment gateway.",
      },
      {
        question: "Who else can change settings?",
        answer: "Only roles that have those permissions. Teachers, students, and parents do not get the settings screens.",
      },
    ],
  },
];

export function getRoleBySlug(slug: string): RoleItem | undefined {
  return ROLES.find((r) => r.slug === slug);
}
