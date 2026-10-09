export interface SolutionChallenge {
  problem: string;
  resolution: string;
}

export interface SolutionPillar {
  title: string;
  desc: string;
  iconName: string;
  stat?: string;
}

export interface SolutionWorkflowStep {
  step: string;
  title: string;
  desc: string;
}

export interface SolutionMetric {
  value: string;
  label: string;
  subtext: string;
}

export interface SolutionRoleBenefit {
  role: string;
  benefit: string;
}

export interface SolutionRelatedFeature {
  slug: string;
  title: string;
  reason: string;
}

export interface SolutionFAQ {
  question: string;
  answer: string;
}

export interface SolutionItem {
  slug: string;
  title: string;
  navLabel: string;
  tagline: string;
  badge: string;
  targetKeyword: string;
  seoTitle: string;
  seoDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  positioningQuote: string;
  targetAudience: string;
  complianceNote?: string;
  challenges: SolutionChallenge[];
  pillars: SolutionPillar[];
  workflow: SolutionWorkflowStep[];
  metrics: SolutionMetric[];
  roleBenefits: SolutionRoleBenefit[];
  relatedFeatures: SolutionRelatedFeature[];
  faq: SolutionFAQ[];
}

const PILLARS: SolutionPillar[] = [
  {
    title: "People and classes",
    desc: "Students, teachers, streams, sections, and subjects. Add people one at a time or from a spreadsheet.",
    iconName: "Users",
  },
  {
    title: "The school year",
    desc: "Academic years and terms, with a labeled view when you are working in a year that is not the active one. Promote or retain after a preview.",
    iconName: "CalendarCheck",
  },
  {
    title: "Attendance, exams, and cards",
    desc: "A daily roster, a cutoff you set, assessments, marks review, grades, ranks, and report cards from your template.",
    iconName: "BookOpen",
  },
  {
    title: "Fees",
    desc: "Admission, monthly, and transport per class. Invoices, recorded payments, an outstanding list, and a reminder.",
    iconName: "CreditCard",
  },
];

const WORKFLOW: SolutionWorkflowStep[] = [
  {
    step: "01",
    title: "Set up the year",
    desc: "Open an academic year, add classes with streams and sections, and place teachers and fees on them.",
  },
  {
    step: "02",
    title: "Run the day",
    desc: "Mark attendance, follow the timetable the school filled in, and keep syllabus progress.",
  },
  {
    step: "03",
    title: "Close the assessment",
    desc: "Enter marks, review them, publish term results and ranks, then generate report cards.",
  },
  {
    step: "04",
    title: "Let families see it",
    desc: "Students and parents open attendance, the week, results, report cards, and the fee ledger.",
  },
];

const METRICS: SolutionMetric[] = [
  { value: "Year", label: "Academic calendar", subtext: "Years, terms, and promotion with a preview" },
  { value: "Day", label: "Attendance", subtext: "A class roster and a cutoff the school sets" },
  { value: "Term", label: "Exams and cards", subtext: "Marks, grades, ranks, and a template you design" },
  { value: "Fees", label: "Invoices", subtext: "Class structures, payments, and what is still owed" },
];

const ROLE_BENEFITS: SolutionRoleBenefit[] = [
  {
    role: "School admin",
    benefit: "Students, teachers, classes, invoices, and the year, with menus limited to what that role may do.",
  },
  {
    role: "Teacher",
    benefit: "Today's periods, attendance still to mark, marks waiting to be entered, and syllabus progress.",
  },
  {
    role: "Parent",
    benefit: "Switch between children and open attendance, the timetable, results, report cards, and fees.",
  },
];

const RELATED: SolutionRelatedFeature[] = [
  { slug: "student-management", title: "Students and teachers", reason: "Records, enrollment, and promotion" },
  { slug: "attendance", title: "Attendance", reason: "Daily roster and the at-risk list" },
  { slug: "exams-results", title: "Exams and report cards", reason: "Marks, grades, and the school's template" },
];

export const SOLUTIONS: SolutionItem[] = [
  {
    slug: "small-schools",
    title: "School workspace for a smaller school",
    navLabel: "Smaller schools",
    tagline: "The same school workspace, without a second product to learn.",
    badge: "Single school",
    targetKeyword: "school management software for small schools",
    seoTitle: "School Management for Smaller Schools — Scholarix OS",
    seoDescription:
      "Students, classes, attendance, exams, report cards, and fees for a school that wants one workspace.",
    heroHeadline: "One workspace for the school you already run.",
    heroSubheadline:
      "People, classes, attendance, a timetable you fill in, exams, report cards, and fees. Families see the same records from their own login.",
    positioningQuote:
      "A smaller office still needs the year, the roster, the marks, and the fees in one place.",
    targetAudience: "Independent schools and early-stage schools running a single campus.",
    challenges: [
      {
        problem: "The office keeps students, fees, and attendance in different books.",
        resolution: "Those records sit in one workspace, for the academic year you have open.",
      },
      {
        problem: "A new session means typing the same names again.",
        resolution: "Add students and teachers from a spreadsheet, then promote or retain when the year turns.",
      },
      {
        problem: "Families ask for attendance, results, and what is still owed.",
        resolution: "Students and parents sign in and open those records themselves.",
      },
    ],
    pillars: PILLARS,
    workflow: WORKFLOW,
    metrics: METRICS,
    roleBenefits: ROLE_BENEFITS,
    relatedFeatures: RELATED,
    faq: [
      {
        question: "Do we need a separate tool for each job?",
        answer: "No. People, classes, attendance, timetable, exams, report cards, and fees are in this workspace.",
      },
      {
        question: "How do families get in?",
        answer: "A student and a parent can each have a login. The office can print a set-password slip.",
      },
      {
        question: "Is setup a fixed number of hours?",
        answer: "No. You add the year, the classes, and the people when you are ready. We do not promise a setup clock.",
      },
    ],
  },
  {
    slug: "cbse-schools",
    title: "School workspace for term-based schools",
    navLabel: "Term-based schools",
    tagline: "Terms, grades, and an attendance cutoff you configure.",
    badge: "Your terms",
    targetKeyword: "school ERP for term exams",
    seoTitle: "School Management for Term-Based Schools — Scholarix OS",
    seoDescription:
      "Academic terms, grading schemes you define, an attendance cutoff you set, and report cards from your template.",
    heroHeadline: "Terms, grades, and cards, configured by the school.",
    heroSubheadline:
      "Set academic terms, assessment weightings, and a grading scheme. Report cards use your template. The attendance cutoff is the number you choose.",
    positioningQuote:
      "Scholarix is not a board product. It is a school workspace you configure for the terms and grades you already use.",
    complianceNote:
      "Scholarix OS is not affiliated with, endorsed by, or certified by any education board. Grading, terms, and report card layouts are configured by the school.",
    targetAudience: "Schools that organize the year into terms and publish report cards.",
    challenges: [
      {
        problem: "Term weightings live in a spreadsheet next to the marks.",
        resolution: "Assessment types and schemes are set once and reused on assessments.",
      },
      {
        problem: "The printed card is redesigned every term.",
        resolution: "A template controls the header, marks, grade, attendance, remarks, signatures, and rank.",
      },
      {
        problem: "Attendance eligibility is checked by hand at the end of the year.",
        resolution: "Students under the cutoff you set appear on the at-risk list during the year.",
      },
    ],
    pillars: PILLARS,
    workflow: WORKFLOW,
    metrics: METRICS,
    roleBenefits: ROLE_BENEFITS,
    relatedFeatures: RELATED,
    faq: [
      {
        question: "Is this certified by a board?",
        answer: "No. The school configures terms, grading, and the report card template. Scholarix does not file board returns.",
      },
      {
        question: "Can we set our own grade scale?",
        answer: "Yes. Grading schemes are yours. Marks become grades using that scale.",
      },
      {
        question: "Can the report card show attendance and rank?",
        answer: "Yes, when those parts of the template are turned on.",
      },
    ],
  },
  {
    slug: "icse-schools",
    title: "School workspace for schools with streams",
    navLabel: "Schools with streams",
    tagline: "Streams, sections, subjects, and a report card you design.",
    badge: "Your structure",
    targetKeyword: "school management software streams sections",
    seoTitle: "School Management for Streamed Classes — Scholarix OS",
    seoDescription:
      "Classes with streams, sections, and subjects, plus assessments, grades, and report cards from the school's template.",
    heroHeadline: "Streams and sections, then the same exam path.",
    heroSubheadline:
      "Build a class as streams, sections, and subjects. Assessments, marks, grades, and report cards follow that structure.",
    positioningQuote:
      "The class structure is yours. Scholarix does not impose a board's subject groups.",
    complianceNote:
      "Scholarix OS is not affiliated with any council or board. Subject combinations and report layouts are configured by the school.",
    targetAudience: "Schools that split classes into streams and sections.",
    challenges: [
      {
        problem: "A class is not one list. It is streams, sections, and subjects.",
        resolution: "The class setup walks through that structure, then teachers and the class fee.",
      },
      {
        problem: "Marks for a section are collected in a private sheet.",
        resolution: "Assessments are scheduled for a class and section, then reviewed before results publish.",
      },
      {
        problem: "The card layout is different from the school next door.",
        resolution: "The template is the school's: what to show, and what to leave off.",
      },
    ],
    pillars: PILLARS,
    workflow: WORKFLOW,
    metrics: METRICS,
    roleBenefits: ROLE_BENEFITS,
    relatedFeatures: RELATED,
    faq: [
      {
        question: "Do you ship a fixed subject-group model?",
        answer: "No. You define streams, sections, and subjects for each class.",
      },
      {
        question: "Can different sections have their own assessments?",
        answer: "Yes. Assessments are scheduled by class and section.",
      },
      {
        question: "Who writes the remarks on a report card?",
        answer: "The school. The template can show a class teacher remark and a principal remark. Nothing drafts them.",
      },
    ],
  },
  {
    slug: "state-board-schools",
    title: "School workspace you can name in your own words",
    navLabel: "Schools with their own terms",
    tagline: "Grading, fees, and the words on the screen are the school's.",
    badge: "Your vocabulary",
    targetKeyword: "configurable school management software",
    seoTitle: "Configurable School Management — Scholarix OS",
    seoDescription:
      "Rename the words the school uses, set your own grading and attendance cutoff, and run fees and report cards in one workspace.",
    heroHeadline: "The school decides the words, the grades, and the cutoff.",
    heroSubheadline:
      "Rename student, class, section, and the rest. Set the grading scheme and the attendance cutoff. Fees and report cards follow that setup.",
    positioningQuote:
      "A state calendar and a central-board calendar can both be a year, terms, grades, and a card. Scholarix stores what you configure.",
    complianceNote:
      "Scholarix OS does not submit government statistical returns. It keeps the records the school enters.",
    targetAudience: "Schools that need their own labels, grades, and fee heads within admission, monthly, and transport.",
    challenges: [
      {
        problem: "The software's words do not match the school's.",
        resolution: "Student, class, section, roll number, and the other listed terms can be renamed, and the app follows that language.",
      },
      {
        problem: "Passing rules and grades are local.",
        resolution: "The grading scheme is configured by the school and applied to results.",
      },
      {
        problem: "Families want notices in the language of the school, not a new product dialect.",
        resolution: "Announcements and the renamed labels are what signed-in people see. The interface itself is not translated into regional languages.",
      },
    ],
    pillars: PILLARS,
    workflow: WORKFLOW,
    metrics: METRICS,
    roleBenefits: ROLE_BENEFITS,
    relatedFeatures: RELATED,
    faq: [
      {
        question: "Can we rename class and section?",
        answer: "Yes. The school profile holds the words the app uses for student, class, section, and the rest of that list.",
      },
      {
        question: "Does the product file government returns?",
        answer: "No. It keeps the student, attendance, exam, and fee records you enter.",
      },
      {
        question: "Which fee amounts can we set?",
        answer: "Admission, monthly, and transport, per class, for the academic year.",
      },
    ],
  },
  {
    slug: "multi-campus-schools",
    title: "One school on its own site",
    navLabel: "A school on its own site",
    tagline: "Each school signs in on its own address. This is not a group ledger.",
    badge: "One school",
    targetKeyword: "school management software single campus",
    seoTitle: "A School Workspace on Its Own Site — Scholarix OS",
    seoDescription:
      "Each school has its own site, its own people, and its own year. There is no trust-wide cash view or cross-campus transfer.",
    heroHeadline: "This site is one school.",
    heroSubheadline:
      "Sign-in is resolved from the school's own web address. People, attendance, exams, and fees belong to that school. A group of campuses is not rolled up here.",
    positioningQuote:
      "If you run more than one school, each one has its own site. This product does not merge their fees or move a student between them.",
    targetAudience: "A single school that wants its own address, its own roles, and its own year.",
    challenges: [
      {
        problem: "Staff from another institution should not see this school's students.",
        resolution: "The workspace is the school on this address. Roles and permissions limit what a signed-in person can open.",
      },
      {
        problem: "Leaders still want a morning view of this campus.",
        resolution: "The admin home shows this school's attendance, outstanding fees, and students under the cutoff.",
      },
      {
        problem: "A second campus is sometimes treated as a folder in the same database.",
        resolution: "Another school is another site. This page does not offer a combined command center.",
      },
    ],
    pillars: PILLARS,
    workflow: WORKFLOW,
    metrics: METRICS,
    roleBenefits: ROLE_BENEFITS,
    relatedFeatures: RELATED,
    faq: [
      {
        question: "Can one login see every campus in a trust?",
        answer: "No. Each school is its own site. There is no combined fee or attendance view across schools.",
      },
      {
        question: "Can we transfer a student to another campus from here?",
        answer: "No. Promotion moves a student into another class in this school, after a preview.",
      },
      {
        question: "Who can see fee amounts?",
        answer: "People whose role includes fees. A teacher does not get the admin fee desk.",
      },
    ],
  },
];

export function getSolutionBySlug(slug: string): SolutionItem | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}
