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

export interface RoleMetric {
  value: string;
  label: string;
}

export interface RoleTestimonial {
  quote: string;
  author: string;
  role: string;
  school: string;
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
  slug: string; // "for-principals" | "for-teachers" | "for-parents" | "for-school-admins"
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
  keyMetrics: RoleMetric[];
  testimonial: RoleTestimonial;
  relatedModules: RoleRelatedModule[];
  faq: RoleFAQ[];
}

export const ROLES: RoleItem[] = [
  {
    slug: "for-principals",
    roleTitle: "School Principals & Institutional Leaders",
    roleBadge: "Executive Command Center",
    targetKeyword: "school ERP for principals school leadership management software",
    seoTitle: "School ERP for Principals — Real-Time Campus Intelligence & Control",
    seoDescription:
      "Empower your school leadership. Scholarix OS gives principals real-time campus attendance, fee collection velocity, teacher substitute management, and academic analytics.",
    heroHeadline: "Complete campus intelligence. From your morning tea to final dismissal.",
    heroSubheadline:
      "Stop waiting for paper summaries and fragmented WhatsApp updates. Scholarix OS puts real-time attendance rates, daily fee inflow, teacher substitute rosters, and academic health directly into your executive cockpit.",
    dailyCockpitSummary:
      "Designed as a decisive leadership cockpit that frees you from micromanaging paperwork so you can focus on academic excellence, student mentorship, and strategic institutional growth.",
    dailyRoutine: [
      {
        time: "08:15 AM",
        activity: "Morning Campus Pulse",
        impact: "Review today's total student turnout, section attendance percentages, and absent staff members before assembly begins."
      },
      {
        time: "08:45 AM",
        activity: "Instant Substitute (Proxy) Allocation",
        impact: "Automated AI timetable identifies absent teachers and instantly suggests optimal free teachers for substitute periods."
      },
      {
        time: "11:30 AM",
        activity: "Fee Velocity & Financial Health",
        impact: "Monitor real-time fee collection counters, outstanding dues aging, and concession audits from your mobile dashboard."
      },
      {
        time: "02:15 PM",
        activity: "Academic & Exam Review",
        impact: "Inspect section-wise syllabus pacing, periodic test grade distributions, and students needing remedial attention."
      },
      {
        time: "04:30 PM",
        activity: "One-Click Trust / Board Briefing",
        impact: "Export executive PDF summaries for management trustees with verified figures on admissions, collections, and compliance."
      }
    ],
    capabilities: [
      {
        title: "Executive Morning Pulse",
        description: "Live dashboard tracking aggregate student attendance, staff attendance, bus departures, and visitor logs in real-time.",
        tag: "Real-Time Oversight"
      },
      {
        title: "Automated Teacher Proxy Matrix",
        description: "Zero-collision substitute period allocation. When a teacher takes sick leave, the system recommends qualified available faculty in seconds.",
        tag: "Zero Classroom Idle Time"
      },
      {
        title: "Academic Grade Trajectory Analytics",
        description: "Analyze class averages, subject-wise pass rates, and teacher grading variations across terms without asking for manual sheets.",
        tag: "Data-Driven Pedagogy"
      },
      {
        title: "Financial Governance & Cashflow Tracking",
        description: "Total oversight of daily bank deposits, fee defaulter recovery velocity, discount concessions, and scholarship allocations.",
        tag: "Fiscal Prudence"
      },
      {
        title: "Staff Performance & Leave Management",
        description: "Approve teacher leave requests with one tap, view biometric check-in times, and review timetable workload distributions.",
        tag: "Human Capital"
      },
      {
        title: "Emergency Broadcast Override",
        description: "Broadcast instant urgent circulars or weather closure notifications to all parents and staff simultaneously via push, SMS, and WhatsApp.",
        tag: "Crisis Communications"
      }
    ],
    beforeAfter: [
      {
        before: "Waiting until 11:30 AM for the administrative clerk to bring physical attendance registers to your desk.",
        after: "Live attendance percentage appears on your smartphone by 08:30 AM with automatic alerts for classes below 85%."
      },
      {
        before: "Scrambling in the corridor during morning assembly to arrange substitute teachers for three absent faculty members.",
        after: "One tap on the mobile app generates optimized proxy allocations and notifies substitute teachers on their phones instantly."
      },
      {
        before: "Spending entire weekends preparing slides and manual tabulations for the annual board of trustees meeting.",
        after: "One-click export of executive trust dossiers containing verified admission stats, fee collections, and academic distributions."
      }
    ],
    keyMetrics: [
      { value: "15 Mins", label: "Morning review time instead of 2 hours" },
      { value: "0", label: "Unsupervised substitute periods" },
      { value: "100%", label: "Real-time fee collection visibility" },
      { value: "98%", label: "Parent communication reach" }
    ],
    testimonial: {
      quote: "Before Scholarix OS, I felt like a firefighter reacting to daily administrative chaos. Today, I have complete calm and total visibility over 1,800 students before morning prayer ends.",
      author: "Dr. Arundhati Sen",
      role: "Principal",
      school: "Heritage Valley International School"
    },
    relatedModules: [
      { slug: "reports-analytics", name: "Executive Analytics", desc: "Live institutional metrics and comparative charts" },
      { slug: "timetable", name: "AI Timetable & Proxy", desc: "Automated teacher substitute management" },
      { slug: "fees", name: "Fee Management", desc: "Real-time bursar ledgers and revenue forecasts" }
    ],
    faq: [
      {
        question: "Can I access the Principal dashboard securely from my phone when away from campus?",
        answer: "Yes. Scholarix OS has a dedicated responsive leadership app with multi-factor authentication, allowing you to review attendance, approve leaves, and check finances from anywhere."
      },
      {
        question: "How does the system ensure sensitive financial or staff salary data remains confidential?",
        answer: "Our role-based security architecture gives you granular permissions. You decide exactly who sees what, and only authorized leadership accounts can access financial ledgers."
      },
      {
        question: "Can I monitor syllabus completion pacing across different subjects?",
        answer: "Yes. Teachers log lesson plans and completed chapter milestones, giving you an interactive academic tracker that highlights which classes are ahead or behind schedule."
      }
    ]
  },
  {
    slug: "for-teachers",
    roleTitle: "Teachers & Classroom Educators",
    roleBadge: "Educator Workspace",
    targetKeyword: "school ERP for teachers attendance marks grading mobile app",
    seoTitle: "School ERP for Teachers — 15-Second Attendance, Easy Marks & Homework",
    seoDescription:
      "Reclaim hours every week. Scholarix OS gives teachers 15-second mobile attendance, intuitive grade entry, digital homework sharing, and private parent communication.",
    heroHeadline: "Spend time inspiring students. Not wrestling with clerical paperwork.",
    heroSubheadline:
      "Take daily roll call in 15 seconds, enter exam marks as easily as a spreadsheet, post multimedia homework, and communicate with parents without giving out your personal mobile number.",
    dailyCockpitSummary:
      "Built by former educators, the Scholarix Teacher App reduces administrative friction so you can focus entirely on teaching, mentoring, and student growth.",
    dailyRoutine: [
      {
        time: "08:00 AM",
        activity: "Daily Schedule at a Glance",
        impact: "Open the mobile app to view today's periods, assigned classroom rooms, and any substitute duties assigned."
      },
      {
        time: "08:15 AM",
        activity: "15-Second Roll Call",
        impact: "Mark attendance with one tap for 'All Present' and toggle absent students. Automatic notifications notify parents instantly."
      },
      {
        time: "11:00 AM",
        activity: "Instant Marks & Rubrics Entry",
        impact: "Enter periodic test marks or practical scores with automatic min/max validation and instant grade computation."
      },
      {
        time: "01:30 PM",
        activity: "Digital Homework Assignment",
        impact: "Upload homework worksheets, voice notes, or PDF study guides with submission deadlines sent to the parent portal."
      },
      {
        time: "03:15 PM",
        activity: "Safe, Private Parent Messaging",
        impact: "Send student progress updates or behavior notes through the official school messenger without sharing your personal phone number."
      }
    ],
    capabilities: [
      {
        title: "15-Second Classroom Roll Call",
        description: "Mark attendance directly on your phone with single-tap 'Present All' and quick absent toggling. Zero paper registers required.",
        tag: "Lightning Attendance"
      },
      {
        title: "Fast Marks & Remarks Tabulation",
        description: "Spreadsheet-like gradebook with keyboard shortcuts, automatic percentage calculations, and rubric remark suggestions.",
        tag: "Effortless Grading"
      },
      {
        title: "Digital Homework & Study Resources",
        description: "Attach worksheets, reference links, and reading materials directly to classroom subject streams with due dates.",
        tag: "Paperless Classroom"
      },
      {
        title: "Private Parent Communication",
        description: "Communicate with parents via official school chat with customizable office hours, protecting your personal phone number and personal time.",
        tag: "Privacy Protected"
      },
      {
        title: "Student 360 Holistic Dossier",
        description: "Access medical alerts, learning accommodations, past academic grades, and behavioral notes for every child in your care.",
        tag: "Deep Student Insight"
      },
      {
        title: "Personal Timetable & Proxy Alerts",
        description: "Receive instant push alerts whenever a substitute period is assigned or when class schedules change.",
        tag: "Clear Schedule"
      }
    ],
    beforeAfter: [
      {
        before: "Spending 10 minutes every morning manually writing P and A in a physical paper register, then carrying it to the office.",
        after: "Marking the whole class in 15 seconds from your smartphone while greeting students at the door."
      },
      {
        before: "Manually calculating percentages, totals, and ranks on calculators until late at night during exam week.",
        after: "Entering raw marks once; the system automatically calculates totals, percentages, grades, and remarks with zero math errors."
      },
      {
        before: "Receiving late-night calls and WhatsApp messages on your personal number from anxious parents.",
        after: "All parent communication stays organized inside the app with strict 'quiet hours' that preserve your work-life balance."
      }
    ],
    keyMetrics: [
      { value: "4.5 hrs/wk", label: "Admin time saved per educator" },
      { value: "15 Sec", label: "Average daily attendance duration" },
      { value: "100%", label: "Privacy protection on phone numbers" },
      { value: "0", label: "Math mistakes on final marksheets" }
    ],
    testimonial: {
      quote: "Exam week used to mean exhaustion, calculators, and stacks of paper tabulation sheets. With Scholarix OS, I entered my marks in 20 minutes and went home on time with zero stress.",
      author: "Sunita Sharma",
      role: "Senior Science Teacher",
      school: "Delhi Public Academy"
    },
    relatedModules: [
      { slug: "attendance", name: "Attendance Matrix", desc: "One-tap attendance with instant parent alerts" },
      { slug: "exams-results", name: "Exams & Results", desc: "Fast gradebook and rubric remark entry" },
      { slug: "homework", name: "Homework & LMS", desc: "Digital assignments and student submissions" }
    ],
    faq: [
      {
        question: "Can I enter marks when the school Wi-Fi is temporarily down?",
        answer: "Yes! The Scholarix teacher app includes offline-first capability. You can mark attendance or enter marks offline, and the data automatically syncs once connection is restored."
      },
      {
        question: "Do parents see my personal mobile number when I send a message?",
        answer: "Never. All communication is routed securely through the official Scholarix platform. Your personal phone number and personal contact details remain 100% confidential."
      },
      {
        question: "Can I set quiet hours so parents don't message me after 5 PM?",
        answer: "Yes. You can define your availability hours. Messages sent outside these hours are queued with a polite automated notification that you will respond during working hours."
      }
    ]
  },
  {
    slug: "for-parents",
    roleTitle: "Parents & Guardians",
    roleBadge: "Family Engagement Portal",
    targetKeyword: "school ERP parent mobile app fee payment attendance track bus",
    seoTitle: "School ERP for Parents — Live Attendance, UPI Fee Pay & Bus GPS",
    seoDescription:
      "Stay connected to your child's education. Scholarix OS parent app provides live attendance alerts, 2-tap UPI fee payments, digital report cards, and live GPS bus tracking.",
    heroHeadline: "Your child's school journey. Transparent, secure, and always in your pocket.",
    heroSubheadline:
      "Never miss a critical update again. Receive instant attendance notifications, pay term fees securely via UPI, download report cards, track school bus arrivals with live GPS, and access homework daily.",
    dailyCockpitSummary:
      "A modern, friendly mobile app that eliminates anxiety, removes school fee queues, and keeps you actively involved in your child's academic milestones.",
    dailyRoutine: [
      {
        time: "07:45 AM",
        activity: "Live School Bus GPS Tracking",
        impact: "Watch the school bus approach your stop on a live map so your child never has to wait in rain or heat."
      },
      {
        time: "08:20 AM",
        activity: "Arrival & Attendance Notification",
        impact: "Receive an instant push notification confirming your child has safely checked in and is marked present."
      },
      {
        time: "02:30 PM",
        activity: "Daily Homework & Circular Feed",
        impact: "Review today's subject homework, upcoming project deadlines, and circulars directly in your feed."
      },
      {
        time: "06:00 PM",
        activity: "2-Tap UPI Fee Payment",
        impact: "Pay term fees securely using Google Pay, PhonePe, or Cards and receive an official tax receipt instantly."
      },
      {
        time: "Term End",
        activity: "Digital Report Card Download",
        impact: "Access multi-year report cards with subject-wise progress graphs and teacher remarks anytime from your phone."
      }
    ],
    capabilities: [
      {
        title: "Instant Morning Attendance Alerts",
        description: "Instant push notification and SMS whenever your child is marked present or absent. Complete peace of mind.",
        tag: "Child Safety"
      },
      {
        title: "Zero-Queue Digital Fee Payments",
        description: "Pay tuition and transport fees via UPI, credit/debit card, or netbanking. Download official GST/tax receipts immediately.",
        tag: "Instant Receipts"
      },
      {
        title: "Live GPS Bus Tracking & ETA",
        description: "Track the school bus live on an interactive map with estimated time of arrival (ETA) and geofence pickup alerts.",
        tag: "Live Route Tracking"
      },
      {
        title: "Digital Report Cards & Grade Trends",
        description: "View term-end report cards, download verified PDFs with QR codes, and review multi-term academic trajectory graphs.",
        tag: "Academic Growth"
      },
      {
        title: "Daily Homework & Study Materials",
        description: "Check assigned homework with attached files, worksheets, and submission deadlines so you can guide home study effectively.",
        tag: "Homework Hub"
      },
      {
        title: "Direct Teacher Messaging",
        description: "Send questions or request appointments with your child's class teacher within official school messaging channels.",
        tag: "Active Partnership"
      }
    ],
    beforeAfter: [
      {
        before: "Taking leave from work and standing in a 2-hour queue at the school accounts window to pay tuition fees.",
        after: "Paying fees in 30 seconds via UPI from your phone at any time of day or night, with instant receipt download."
      },
      {
        before: "Waiting on the street corner for 25 minutes wondering if the morning school bus is delayed or already passed.",
        after: "Checking live bus GPS on your phone and walking to the bus stop exactly 3 minutes before the bus arrives."
      },
      {
        before: "Relying on crumpled paper circulars found in the bottom of school bags days after an event passed.",
        after: "Receiving clean digital notices, calendar events, and photo albums instantly on your notification bar."
      }
    ],
    keyMetrics: [
      { value: "30 Sec", label: "To complete fee payment from anywhere" },
      { value: "0", label: "Anxious minutes waiting at the bus stop" },
      { value: "100%", label: "Digital access to past academic records" },
      { value: "4.8/5", label: "Average parent app rating" }
    ],
    testimonial: {
      quote: "Being a working mother, the live bus tracking and instant attendance notifications give me tremendous peace of mind. Paying fees via UPI takes seconds without taking time off work.",
      author: "Pooja Malhotra",
      role: "Parent of Grade 4 & Grade 8 students",
      school: "St. Xavier's International School"
    },
    relatedModules: [
      { slug: "parent-communication", name: "Parent Mobile App", desc: "Comprehensive family communication hub" },
      { slug: "fees", name: "Fee Management Engine", desc: "Secure digital payments and instant tax receipts" },
      { slug: "transport", name: "Fleet & Bus Tracking", desc: "Live GPS tracking and attendant safety manifests" }
    ],
    faq: [
      {
        question: "Can both parents access the app for the same child?",
        answer: "Yes! Both mother and father can have individual logins linked to their child's profile, ensuring both parents stay informed about attendance, grades, and events."
      },
      {
        question: "What if I have two children studying in different classes in the same school?",
        answer: "The Scholarix app supports multi-child switching with a single tap. You can easily toggle between your children's profiles without logging out."
      },
      {
        question: "Are online fee payments secure and eligible for income tax deduction (80C)?",
        answer: "Yes. All transactions use bank-grade 256-bit encryption through RBI-licensed payment gateways. Receipts clearly itemize tuition fee amounts for 80C claims."
      }
    ]
  },
  {
    slug: "for-school-admins",
    roleTitle: "School Administrators & Bursars",
    roleBadge: "Operational Command",
    targetKeyword: "school administrator ERP software fee reconciliation student records SIS",
    seoTitle: "School ERP for School Administrators & Bursars — Fast SIS, Fees & Audits",
    seoDescription:
      "Automate administrative overhead. Scholarix OS gives school admins and bursars zero-reconciliation fee collection, rapid student records (SIS), biometric payroll, and audit exports.",
    heroHeadline: "Streamline campus operations. Balance every ledger with zero friction.",
    heroSubheadline:
      "From high-volume admission registrations and zero-reconciliation fee billing to biometric staff payroll and government audit compliance, Scholarix OS transforms administrative efficiency.",
    dailyCockpitSummary:
      "The ultimate operational backbone for school offices, registrars, bursars, and administrative officers tasked with keeping the school engine running smoothly.",
    dailyRoutine: [
      {
        time: "08:30 AM",
        activity: "Admissions CRM & Verification",
        impact: "Verify submitted parent documents, process seat confirmation fees, and issue admission register numbers."
      },
      {
        time: "10:00 AM",
        activity: "Fee Ledger & Defaulter Follow-up",
        impact: "Automated reconciliation matches online UPI and bank transfers; schedule automated SMS/WhatsApp reminders for unpaid dues."
      },
      {
        time: "12:30 PM",
        activity: "Student Information Records (SIS)",
        impact: "Process class transfers, issue bona fide certificates, update blood group flags, and manage bus stop change requests."
      },
      {
        time: "03:00 PM",
        activity: "Biometric Staff Attendance & Payroll",
        impact: "Sync biometric fingerprint/face scanners, audit leave deductions, and generate monthly staff salary slips in minutes."
      },
      {
        time: "05:00 PM",
        activity: "Daily Cash Counter Reconciliation",
        impact: "Generate the end-of-day cash and bank balance sheet with zero manual tallying required."
      }
    ],
    capabilities: [
      {
        title: "360° Student Information System (SIS)",
        description: "Maintain comprehensive permanent records: Aadhaar, blood group, emergency contacts, sibling links, fee categories, and academic history.",
        tag: "Complete Master Data"
      },
      {
        title: "Automated Fee Reconciliation Engine",
        description: "Real-time bank payment gateway sync eliminates manual spreadsheet reconciliation. Automatically categorizes tuition, transport, lab, and annual charges.",
        tag: "Zero Manual Tallying"
      },
      {
        title: "Automated Defaulter Recovery Workflow",
        description: "Filter unpaid fee accounts by grade, route, or aging buckets. Trigger scheduled WhatsApp and SMS payment reminders with direct pay links.",
        tag: "High Fee Recovery"
      },
      {
        title: "Staff Payroll & Biometric Attendance",
        description: "Seamless integration with biometric hardware, automated leave balance deductions, professional tax calculations, and pay slip distribution.",
        tag: "HR & Payroll"
      },
      {
        title: "One-Click Certificate Generation",
        description: "Generate Transfer Certificates (TC), Bona Fide letters, Character certificates, and fee clearance slips from pre-approved templates in seconds.",
        tag: "Instant Documentation"
      },
      {
        title: "State & Board Audit Exports (U-DISE+)",
        description: "Generate compliant data sheets formatted for state education departments, CBSE OASIS, and U-DISE+ compliance audits.",
        tag: "Audit Ready"
      }
    ],
    beforeAfter: [
      {
        before: "Spending two full weeks every quarter manually matching bank statements against carbon-copy receipt books.",
        after: "Every online and counter transaction is automatically matched in real-time with zero discrepancy between cash and bank balances."
      },
      {
        before: "Hand-writing Transfer Certificates (TC) in paper registers with constant risk of spelling errors and erased entries.",
        after: "Generating official, serial-numbered TCs with digital student photo and automated dues check in 45 seconds."
      },
      {
        before: "Calling hundreds of parents individually over the phone to remind them about upcoming fee due dates.",
        after: "Automated system sends gentle, multi-lingual WhatsApp payment links on schedule, recovering 85% of dues without phone calls."
      }
    ],
    keyMetrics: [
      { value: "99.8%", label: "Fee collection reconciliation accuracy" },
      { value: "15 Days", label: "Saved every quarter during fee rush" },
      { value: "45 Sec", label: "To issue an official Transfer Certificate" },
      { value: "100%", label: "Compliance with board reporting standards" }
    ],
    testimonial: {
      quote: "Our quarterly fee collection rush used to be a nightmare of long lines, stressed clerks, and endless bank reconciliation. Scholarix OS automated 90% of payments online, saving us hundreds of hours.",
      author: "Rajeshwar Rao",
      role: "Administrative Officer & Bursar",
      school: "Vidya Vikas Academy"
    },
    relatedModules: [
      { slug: "fees", name: "Fee Management Engine", desc: "Automated invoicing, payment links, and receipts" },
      { slug: "admissions", name: "Admissions CRM", desc: "Digital intake and document verification" },
      { slug: "hr-payroll", name: "HR & Staff Payroll", desc: "Biometric sync, leave deductions, and salary slips" }
    ],
    faq: [
      {
        question: "Can Scholarix OS support custom fee heads, sibling discounts, and staff child concessions?",
        answer: "Yes! You can configure flexible fee structures with dynamic heads (Tuition, Development, Bus, Lab, Annual), sibling discounts, staff concessions, and merit scholarships with strict approval logs."
      },
      {
        question: "Does the system support counter cash and POS card payments alongside online UPI?",
        answer: "Absolutely. Front-desk clerks can collect payments via cash, POS card swipe, cheque, or DD, and print thermal or A4 official school receipts instantly."
      },
      {
        question: "Can we export our daily fee ledger directly to Tally or accounting software?",
        answer: "Yes. Scholarix OS supports one-click export of day-book transactions pre-formatted for seamless import into Tally Prime, ERP9, and standard accounting software."
      }
    ]
  }
];

export function getRoleBySlug(slug: string): RoleItem | undefined {
  return ROLES.find((r) => r.slug === slug);
}
