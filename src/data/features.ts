export interface FeatureFAQ {
  question: string;
  answer: string;
}

export interface FeatureCapability {
  title: string;
  description: string;
  icon?: string;
  tag?: string;
}

export interface FeatureWorkflowStep {
  step: string;
  title: string;
  description: string;
}

export interface FeatureRoleBenefits {
  school: string[];
  teachers: string[];
  parents: string[];
}

export interface FeatureItem {
  slug: string;
  title: string;
  shortDescription: string;
  category: "Academics" | "Administration" | "Communication" | "Operations" | "Insights";
  badge: string;
  targetKeyword: string;
  seoTitle: string;
  seoDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  problemStatement: {
    headline: string;
    points: { problem: string; resolution: string }[];
  };
  overview: string;
  image: string;
  imageAlt: string;
  workflow: FeatureWorkflowStep[];
  capabilities: FeatureCapability[];
  roleBenefits: FeatureRoleBenefits;
  relatedSlugs: string[];
  faq: FeatureFAQ[];
}

export const FEATURES: FeatureItem[] = [
  {
    slug: "student-management",
    title: "Students & teachers",
    shortDescription:
      "Student and teacher records, class enrollment, photos, bulk add, and year-end promotion.",
    category: "Academics",
    badge: "People",
    targetKeyword: "student management system",
    seoTitle: "Student and Teacher Records — Scholarix OS",
    seoDescription:
      "Keep student and teacher records, class enrollment, photos, and year-end promotion in one school workspace.",
    heroHeadline: "People, classes, and the next year in one place.",
    heroSubheadline:
      "Add students and teachers one at a time or from a spreadsheet. Each student has a profile, a photo, one parent contact, and a class enrollment.",
    problemStatement: {
      headline: "Student lists drift apart from the class they actually sit in",
      points: [
        {
          problem: "A new session starts with the same names typed into several sheets.",
          resolution: "Add people from a form or a spreadsheet, then place them in a class and section.",
        },
        {
          problem: "Parents and students need a login, and the office writes it on paper.",
          resolution: "Print a credential slip with a set-password link for the student and the parent.",
        },
        {
          problem: "Moving a class up a year is a separate exercise from the student list.",
          resolution: "Preview who moves, then promote or retain selected students into the next class and section.",
        },
      ],
    },
    overview:
      "The people module holds students and teachers for the school. Students carry an admission number, class, section, photo, and one parent. Teachers carry subject assignments and class-incharge roles. A teacher can open the section they look after.",
    image: "/images/dashboard.jpeg",
    imageAlt: "School workspace showing student and teacher records",
    workflow: [
      { step: "01", title: "Add people", description: "Create a student or teacher, or add many from a spreadsheet." },
      { step: "02", title: "Place them", description: "Enroll the student in a class and section, and assign the teacher." },
      { step: "03", title: "Share a login", description: "Print a credential slip so the student and parent can set a password." },
      { step: "04", title: "Move the year", description: "Preview promotion, then promote or retain the students you select." },
    ],
    capabilities: [
      { title: "Student profile", description: "Name, admission number, photo, blood group, address, and one parent contact." },
      { title: "Teacher assignments", description: "Subjects taught and the section a teacher is in charge of." },
      { title: "Spreadsheet add", description: "Bring in a batch of students or teachers instead of one form at a time." },
      { title: "Credential slip", description: "A printable set-password link for the student account and the parent account." },
      { title: "My class", description: "The class teacher opens the section they look after." },
      { title: "Promotion", description: "Preview the move, then promote or retain selected students into the next class." },
    ],
    roleBenefits: {
      school: [
        "One list of students and teachers for the year you are working in.",
        "Bulk add when a new session should not mean one form at a time.",
        "Promotion with a preview before anyone is moved.",
      ],
      teachers: [
        "See the section you look after.",
        "Open a student without asking the office for a paper file.",
      ],
      parents: [
        "A parent login is created with the student.",
        "The parent sees that child's records from their own sign-in.",
      ],
    },
    relatedSlugs: ["attendance", "fees", "exams-results"],
    faq: [
      {
        question: "Can we add many students at once?",
        answer: "Yes. Students and teachers can be added from a spreadsheet as well as one at a time.",
      },
      {
        question: "How many parents can be stored on a student?",
        answer: "Each student record holds one parent contact, with a parent login of its own.",
      },
      {
        question: "What happens at the end of the year?",
        answer: "You preview the students in a class and section, then promote or retain the ones you select into the next class and section.",
      },
    ],
  },
  {
    slug: "attendance",
    title: "Attendance",
    shortDescription:
      "A daily class roster for present, absent, late, and leave, plus an at-risk list and a monthly export.",
    category: "Academics",
    badge: "Daily roster",
    targetKeyword: "school attendance management software",
    seoTitle: "Daily Class Attendance — Scholarix OS",
    seoDescription:
      "Mark a class for the day, keep a draft, list students under the school's attendance cutoff, and export the month.",
    heroHeadline: "Mark the class for the day. See who is slipping.",
    heroSubheadline:
      "Teachers submit present, absent, late, or leave for a class and section. The school sets the cutoff that puts a student on the at-risk list.",
    problemStatement: {
      headline: "A paper register is hard to share with the people who need it",
      points: [
        {
          problem: "The morning mark stays on one sheet until someone copies it.",
          resolution: "The class is marked in the roster and submitted for that date.",
        },
        {
          problem: "A low attendance percentage shows up only when someone adds the month by hand.",
          resolution: "Students under the cutoff the school chooses appear on an at-risk list.",
        },
        {
          problem: "Families ask for the month and the office rebuilds it.",
          resolution: "Students and parents can open attendance and export the month.",
        },
      ],
    },
    overview:
      "Attendance is a daily roster for a class and section. Statuses are present, absent, late, and leave. A draft can be saved before submit. The school sets an attendance cutoff, and students under it appear on the at-risk list. Students and parents can request leave and export a month.",
    image: "/images/attendance.jpeg",
    imageAlt: "Class attendance roster for a school day",
    workflow: [
      { step: "01", title: "Open the class", description: "Choose the date, class, and section. A saved draft comes back with you." },
      { step: "02", title: "Mark the roster", description: "Set present, absent, late, or leave, and add a remark where you need one." },
      { step: "03", title: "Submit", description: "Submit the day. The school overview shows today's attendance." },
      { step: "04", title: "Follow up", description: "Review students under the cutoff, and let families export the month or request leave." },
    ],
    capabilities: [
      { title: "Daily roster", description: "Present, absent, late, and leave for one class and section on one date." },
      { title: "Draft and remarks", description: "Save work before submit, and keep a remark on a student." },
      { title: "Section calendar", description: "See which days for that section are already marked." },
      { title: "At-risk list", description: "Students under the cutoff the school sets, often used around a board minimum." },
      { title: "Monthly export", description: "Students and parents can export attendance for a month." },
      { title: "Leave request", description: "A student or parent can file a leave request from the attendance page." },
    ],
    roleBenefits: {
      school: [
        "Today's attendance on the admin home.",
        "A cutoff you choose, and a list of students under it.",
      ],
      teachers: [
        "Mark the classes still waiting, from the teacher home or the roster.",
        "Keep a draft if the bell interrupts you.",
      ],
      parents: [
        "Open the child's attendance and export a month.",
        "File a leave request from the same place.",
      ],
    },
    relatedSlugs: ["student-management", "reports-analytics", "parent-communication"],
    faq: [
      {
        question: "Which statuses can be marked?",
        answer: "Present, absent, late, and leave, with an optional remark.",
      },
      {
        question: "How does the at-risk list work?",
        answer: "The school sets a cutoff on the school profile. Students under that cutoff appear on the list. It is a threshold, not a prediction.",
      },
      {
        question: "Can families see attendance?",
        answer: "Yes. Students and parents can open attendance for the child and export a month.",
      },
    ],
  },
  {
    slug: "timetable",
    title: "Timetable",
    shortDescription:
      "Period timings and a weekly timetable the school fills in, open to admin, teachers, students, and parents.",
    category: "Academics",
    badge: "Weekly grid",
    targetKeyword: "school timetable software",
    seoTitle: "School Timetable — Scholarix OS",
    seoDescription:
      "Set the school's period timings and fill a weekly timetable that teachers, students, and parents can open.",
    heroHeadline: "A weekly timetable the school fills in.",
    heroSubheadline:
      "Define the day's periods, then place subjects on the week. The same timetable is what teachers, students, and parents open.",
    problemStatement: {
      headline: "The notice-board copy and the teacher's copy drift apart",
      points: [
        {
          problem: "Period timings live in one file and the class grid in another.",
          resolution: "Period settings and the weekly timetable sit in the same workspace.",
        },
        {
          problem: "Students ask what is next, and the answer depends on who you ask.",
          resolution: "Teachers, students, and parents open the same published week.",
        },
        {
          problem: "A teacher starts the day without today's periods in front of them.",
          resolution: "The teacher home shows today's periods.",
        },
      ],
    },
    overview:
      "Timetable is a weekly grid the school maintains. Period settings define the day. Admin, teachers, students, and parents can open the timetable. Nothing generates the grid for you.",
    image: "/images/dashboard.jpeg",
    imageAlt: "Weekly school timetable",
    workflow: [
      { step: "01", title: "Set the day", description: "Define period timings for the school." },
      { step: "02", title: "Fill the week", description: "Place subjects on the class timetable." },
      { step: "03", title: "Open it", description: "Teachers, students, and parents see the same week." },
      { step: "04", title: "Start the day", description: "The teacher home lists today's periods." },
    ],
    capabilities: [
      { title: "Period settings", description: "The school defines its own period timings." },
      { title: "Weekly timetable", description: "A grid the school fills in for classes." },
      { title: "Shared view", description: "Admin, teachers, students, and parents can open it." },
      { title: "Today for teachers", description: "Today's periods appear on the teacher home." },
    ],
    roleBenefits: {
      school: [
        "One timetable instead of a separate sheet per class.",
        "Period timings live with the grid.",
      ],
      teachers: [
        "See today's periods when you sign in.",
        "Open the week for the classes you teach.",
      ],
      parents: [
        "Open the child's weekly timetable.",
        "See what the day holds without a paper copy.",
      ],
    },
    relatedSlugs: ["attendance", "exams-results", "student-management"],
    faq: [
      {
        question: "Does the timetable build itself?",
        answer: "No. The school sets period timings and fills the weekly grid.",
      },
      {
        question: "Who can see it?",
        answer: "Admin, teachers, students, and parents.",
      },
      {
        question: "Can we change the length of a period?",
        answer: "Yes. Period settings are where the school defines the day.",
      },
    ],
  },
  {
    slug: "exams-results",
    title: "Exams & report cards",
    shortDescription:
      "Assessments, marks review, grading, term results, ranks, and report cards the school designs.",
    category: "Academics",
    badge: "Exams",
    targetKeyword: "school examination management system",
    seoTitle: "Exams, Marks, and Report Cards — Scholarix OS",
    seoDescription:
      "Schedule assessments, review marks, apply a grading scheme, publish term results and ranks, and generate report cards from the school's template.",
    heroHeadline: "From the assessment to a report card the school designed.",
    heroSubheadline:
      "Schedule the test, enter marks, review them, and publish term results. Report cards are generated from those results, then published and locked.",
    problemStatement: {
      headline: "Marks, grades, and the printed card are three jobs",
      points: [
        {
          problem: "Each teacher totals marks in their own sheet.",
          resolution: "Marks are entered on the assessment, then reviewed before results go out.",
        },
        {
          problem: "Grade boundaries change and every sheet is edited.",
          resolution: "A grading scheme the school defines turns marks into grades.",
        },
        {
          problem: "The report card is redesigned every term in a document.",
          resolution: "A template controls what prints. Cards are generated, published, and locked.",
        },
      ],
    },
    overview:
      "Exams cover assessment types, weighting schemes, scheduled assessments, marks entry, and an admin review. Term results and class rankings publish from that work. Report cards use the school's template: logo and address, student details, marks, grade, attendance, remarks, signatures, and rank. A card can be downloaded on its own or as a zip of the class.",
    image: "/images/reportCardBuilder.jpeg",
    imageAlt: "Report card prepared from published term results",
    workflow: [
      { step: "01", title: "Schedule", description: "Create an assessment for a class, section, and date." },
      { step: "02", title: "Enter and review", description: "Teachers enter marks. An admin reviews them before results go out." },
      { step: "03", title: "Publish results", description: "Apply the grading scheme, then publish term results and ranks." },
      { step: "04", title: "Issue cards", description: "Generate report cards, publish them to families, then lock them." },
    ],
    capabilities: [
      { title: "Assessment types and schemes", description: "The school defines types and weightings once and reuses them." },
      { title: "Marks review", description: "Teachers enter marks. Admin reviews them before publication." },
      { title: "Grading scheme", description: "Marks become grades using the scale the school sets." },
      { title: "Term results and ranks", description: "Published term results and class rankings." },
      { title: "Report card template", description: "Header, student details, marks, grade, attendance, remarks, signatures, and rank." },
      { title: "Publish and lock", description: "Generate, publish to families, lock, and download one card or a class zip." },
    ],
    roleBenefits: {
      school: [
        "One path from the assessment to the card.",
        "The school's logo, affiliation, and principal signature print on the card.",
      ],
      teachers: [
        "Enter marks for the assessments you teach.",
        "See which marks are still waiting on the teacher home.",
      ],
      parents: [
        "Open results, the exam timetable, and published report cards.",
        "Cards stay available after they are published.",
      ],
    },
    relatedSlugs: ["attendance", "student-management", "parent-communication"],
    faq: [
      {
        question: "Who decides the grade boundaries?",
        answer: "The school. Grading schemes are configured in settings and applied to results.",
      },
      {
        question: "When can a family see a report card?",
        answer: "After it is published. A published card can then be locked.",
      },
      {
        question: "Can we download a whole class?",
        answer: "Yes. Download one card, or a zip of the class.",
      },
    ],
  },
  {
    slug: "fees",
    title: "Fees",
    shortDescription:
      "Class fee structures, invoices, recorded payments, an outstanding list, and a reminder.",
    category: "Administration",
    badge: "Fees",
    targetKeyword: "school fee management software",
    seoTitle: "School Fees, Invoices, and Payments — Scholarix OS",
    seoDescription:
      "Set admission, monthly, and transport fees per class, generate invoices, record payments, and see what is still owed.",
    heroHeadline: "From a class fee to an invoice and a recorded payment.",
    heroSubheadline:
      "Each class has admission, monthly, and transport amounts for the year. Invoices are generated from that structure. Payments are recorded against them.",
    problemStatement: {
      headline: "The fee register and the receipt book do not match",
      points: [
        {
          problem: "Each class is billed from a different sheet.",
          resolution: "A fee structure per class holds admission, monthly, and transport for the year.",
        },
        {
          problem: "What was promised and what was changed is hard to reconstruct.",
          resolution: "Changes to a fee structure keep a history.",
        },
        {
          problem: "Outstanding balances are a separate chase.",
          resolution: "An outstanding list shows what is still owed, and a reminder can be sent.",
        },
      ],
    },
    overview:
      "Fees are in rupees. A class structure has admission, monthly, and transport. Invoices are generated from it, with statuses of unpaid, partial, paid, and waived. Payments are recorded as cash, UPI, cheque, bank, or other. Students and parents open a fee ledger. The office can send a reminder for what is still owed.",
    image: "/images/dashboard-command.jpg",
    imageAlt: "Fee structures and outstanding balances",
    workflow: [
      { step: "01", title: "Set the structure", description: "Admission, monthly, and transport for a class and year." },
      { step: "02", title: "Generate invoices", description: "Create the invoices that families owe." },
      { step: "03", title: "Record payment", description: "Record cash, UPI, cheque, bank, or other against an invoice." },
      { step: "04", title: "Follow what is open", description: "Use the outstanding list and send a reminder." },
    ],
    capabilities: [
      { title: "Class fee structure", description: "Admission, monthly, and transport, with a change history." },
      { title: "Invoices", description: "Unpaid, partial, paid, or waived." },
      { title: "Recorded payments", description: "Cash, UPI, cheque, bank, or other." },
      { title: "Outstanding", description: "Who still owes, and a reminder you can send." },
      { title: "Family ledger", description: "Students and parents see what is due and can record a payment." },
    ],
    roleBenefits: {
      school: [
        "Outstanding fees sit on the admin home, next to today's attendance and marks awaiting review.",
        "Outstanding balances are a list, not a second register.",
      ],
      teachers: [
        "Fee collection stays with the office.",
      ],
      parents: [
        "Open the child's fee ledger.",
        "See what is unpaid, partial, paid, or waived.",
      ],
    },
    relatedSlugs: ["student-management", "parent-communication", "reports-analytics"],
    faq: [
      {
        question: "Which fee heads are supported?",
        answer: "Admission, monthly, and transport, set per class for the academic year.",
      },
      {
        question: "How is a payment taken?",
        answer: "The office, a student, or a parent records it as cash, UPI, cheque, bank, or other. There is no in-app payment gateway.",
      },
      {
        question: "Can we remind families who still owe?",
        answer: "Yes. From the outstanding list you can send a reminder.",
      },
    ],
  },
  {
    slug: "parent-communication",
    title: "Parent & student portal",
    shortDescription:
      "Parents switch between children and see attendance, timetable, exams, results, report cards, fees, and announcements.",
    category: "Communication",
    badge: "Family view",
    targetKeyword: "school parent portal",
    seoTitle: "Parent and Student Portal — Scholarix OS",
    seoDescription:
      "Students and parents sign in to attendance, timetable, exams, results, report cards, fees, and school announcements.",
    heroHeadline: "The same records, from the family's sign-in.",
    heroSubheadline:
      "A parent with more than one child switches between them. Each child shows attendance, the week, exams, results, report cards, and fees.",
    problemStatement: {
      headline: "Families hear about school from whoever last called",
      points: [
        {
          problem: "Attendance, fees, and the report card live with different people.",
          resolution: "The parent home and the student home show those records together.",
        },
        {
          problem: "A parent with two children keeps two sets of papers.",
          resolution: "One login switches between children.",
        },
        {
          problem: "A notice on the board never reaches the house.",
          resolution: "Announcements show across the signed-in app.",
        },
      ],
    },
    overview:
      "Students and parents use the same school workspace, filtered to their child. They see attendance, timetable, upcoming exams, results, report cards, and the fee ledger. Parents with more than one child switch between them. School announcements appear for signed-in users. A mobile app covers this same set of screens.",
    image: "/images/mobile.jpeg",
    imageAlt: "Parent view of a child's school records",
    workflow: [
      { step: "01", title: "Sign in", description: "The student or parent opens the school from their own login." },
      { step: "02", title: "Choose the child", description: "A parent switches between children on one account." },
      { step: "03", title: "Read the records", description: "Attendance, timetable, exams, results, report cards, and fees." },
      { step: "04", title: "Act where it is offered", description: "Request leave, export a month of attendance, or record a fee payment." },
    ],
    capabilities: [
      { title: "Child switcher", description: "One parent login for each child at the school." },
      { title: "Attendance and leave", description: "The month's attendance, an export, and a leave request." },
      { title: "Timetable and exams", description: "The weekly timetable and what exams are coming up." },
      { title: "Results and report cards", description: "Published results and report cards." },
      { title: "Fee ledger", description: "What is due, and a payment that can be recorded." },
      { title: "Announcements", description: "School announcements on the signed-in app." },
    ],
    roleBenefits: {
      school: [
        "Families see the records the office already keeps.",
        "Announcements go to people who are signed in.",
      ],
      teachers: [
        "The class does not need a separate notice for the timetable and results.",
      ],
      parents: [
        "Switch children without a second account.",
        "Open attendance, results, report cards, and fees for the child you picked.",
      ],
    },
    relatedSlugs: ["attendance", "fees", "exams-results"],
    faq: [
      {
        question: "Can both a student and a parent sign in?",
        answer: "Yes. Each can have an account. A credential slip can carry a set-password link for either.",
      },
      {
        question: "What if we have two children at the school?",
        answer: "The parent home lets you switch between them.",
      },
      {
        question: "Is there a mobile app?",
        answer: "Yes. It covers the same family screens: attendance, timetable, academics, fees, and report cards.",
      },
    ],
  },
  {
    slug: "reports-analytics",
    title: "School overview",
    shortDescription:
      "The admin home: today's attendance, outstanding fees, marks waiting for review, and what still needs a decision.",
    category: "Insights",
    badge: "Home",
    targetKeyword: "school dashboard",
    seoTitle: "School Control Center — Scholarix OS",
    seoDescription:
      "An admin home with today's attendance, outstanding fees, marks awaiting review, and a list of what still needs a decision.",
    heroHeadline: "The school, as of this morning.",
    heroSubheadline:
      "Admins open the school name and year, today's attendance, outstanding fees, and marks waiting for review.",
    problemStatement: {
      headline: "The morning question still needs three people to answer",
      points: [
        {
          problem: "Attendance, fees, and marks are asked as separate questions.",
          resolution: "The admin home shows today's attendance, what is still owed, and marks waiting for review.",
        },
        {
          problem: "A section that has not submitted attendance is easy to miss.",
          resolution: "The home lists the sections still to mark, and each one opens that roster.",
        },
        {
          problem: "Low attendance, overdue fees, and leave sit in different books.",
          resolution: "Needs your attention opens the list behind each of those.",
        },
      ],
    },
    overview:
      "The admin home is the School Control Center for the school you are signed into. The header shows the school name, the open academic year, and today's date. Six cards cover active students, active teachers, sections, today's attendance, outstanding fees, and marks awaiting review. Needs your attention opens the matching workflow: attendance still to submit, overdue fees, students under the attendance cutoff, marks in review, marks still to enter, and leave waiting for a decision. The same screen shows present, absent, late, and leave, fees collected this month, syllabus progress, today's activity, and recent activity. It is one school.",
    image: "/images/dashboard-command.jpg",
    imageAlt: "Admin home with today's attendance, fees, and marks awaiting review",
    workflow: [
      { step: "01", title: "Sign in as admin", description: "The home opens on the school name, the year, and today's date." },
      { step: "02", title: "Read the cards", description: "Active students, teachers, sections, today's attendance, outstanding fees, and marks awaiting review." },
      { step: "03", title: "Open what is waiting", description: "Needs your attention links to the roster, the outstanding list, marks review, or leave." },
      { step: "04", title: "Follow the day", description: "See who is under the cutoff, syllabus progress, and what happened recently." },
    ],
    capabilities: [
      { title: "Today's cards", description: "Active students, active teachers, sections, attendance submitted, outstanding fees, and marks awaiting review." },
      { title: "Needs your attention", description: "Attendance still to submit, overdue fees, students under the cutoff, marks, and leave, each opening its list." },
      { title: "Today's attendance", description: "Present, absent, late, and leave, plus the sections that have not submitted." },
      { title: "Fees this month", description: "What was collected this month, and what is still outstanding." },
      { title: "The rest of the morning", description: "Students under the cutoff, upcoming assessments, syllabus progress, today's activity, and recent activity." },
    ],
    roleBenefits: {
      school: [
        "A single morning screen for the school you run.",
        "The cutoff for attendance is the one you set.",
      ],
      teachers: [
        "Teachers have their own home: today's periods, unmarked attendance, marks waiting, and syllabus progress.",
      ],
      parents: [
        "Parents do not see the admin home. They see their own child's records.",
      ],
    },
    relatedSlugs: ["attendance", "fees", "exams-results"],
    faq: [
      {
        question: "Does this compare several schools?",
        answer: "No. The home is for the school on this site.",
      },
      {
        question: "Where does the attendance cutoff come from?",
        answer: "From the school profile. The home uses that number for the at-risk list.",
      },
      {
        question: "What do other roles see?",
        answer: "Teachers see their classes and pending work. Students and parents see that child's attendance, timetable, results, report cards, and fees.",
      },
    ],
  },
];

export function getFeatureBySlug(slug: string): FeatureItem | undefined {
  return FEATURES.find((f) => f.slug === slug);
}

export function getFeaturesByCategory(category: FeatureItem["category"]): FeatureItem[] {
  return FEATURES.filter((f) => f.category === category);
}

export const FEATURE_CATEGORIES: FeatureItem["category"][] = [
  "Academics",
  "Administration",
  "Communication",
  "Operations",
  "Insights",
];
