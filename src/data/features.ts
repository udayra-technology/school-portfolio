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
    slug: "admissions",
    title: "Admissions & Enrollment",
    shortDescription: "End-to-end digital admissions from initial parent inquiry to document verification and one-click student enrollment.",
    category: "Administration",
    badge: "Admissions Hub",
    targetKeyword: "school admission management software",
    seoTitle: "Online School Admission Software & CRM — Scholarix OS",
    seoDescription: "Streamline student enrollment with online application forms, document verification, interview scheduling, and instant fee collection.",
    heroHeadline: "Convert Parent Inquiries into Confirmed Enrollments.",
    heroSubheadline: "Eliminate long admission lines, manual spreadsheets, and misplaced paperwork with an institutional-grade admissions pipeline designed for modern schools.",
    problemStatement: {
      headline: "Traditional Admissions are Slow, Fragmented, and Lose Applicants",
      points: [
        {
          problem: "Paper forms and scattered WhatsApp inquiries result in slow response times and dropped leads.",
          resolution: "Unified multi-channel CRM automatically captures prospective student inquiries across web, phone, and walk-ins."
        },
        {
          problem: "Manual document verification causes bottlenecks during peak admission rush.",
          resolution: "Secure parent portal for digital certificate upload with automated validation and checklist status."
        },
        {
          problem: "Disconnected fee collection delays seat confirmation and causes reconciliation errors.",
          resolution: "Instant digital payment links for application and admission fees with real-time bursar dashboard sync."
        }
      ]
    },
    overview: "Scholarix Admissions empowers leadership teams to manage the complete student intake lifecycle. From customized branded application forms to merit list generation and automated welcome packages, every step is streamlined and measurable.",
    image: "/images/dashboard.jpeg",
    imageAlt: "Scholarix OS Admissions Management pipeline and enrollment funnel",
    workflow: [
      { step: "01", title: "Inquiry Capture", description: "Prospective parents submit basic details via the branded school portal or front desk QR code." },
      { step: "02", title: "Application & Docs", description: "Parents complete detailed forms, upload birth certificates, vaccination records, and transfer certificates." },
      { step: "03", title: "Review & Merit List", description: "Admissions committee reviews applications, scores interviews, and generates section-wise merit lists." },
      { step: "04", title: "Seat Confirmation", description: "Admission offers sent via SMS/WhatsApp with one-click fee payment and instant enrollment into the SIS." }
    ],
    capabilities: [
      { title: "Custom Application Builder", description: "Create tailored multi-step forms with dynamic fields for siblings, bus route preferences, and special needs." },
      { title: "Automated Communication", description: "Send automated updates, test reminders, and welcome letters via WhatsApp, SMS, and email." },
      { title: "Real-Time Pipeline Analytics", description: "Track inquiry conversion ratios by marketing source, class, and branch across multi-campus networks." },
      { title: "Digital Document Vault", description: "Secure, encrypted storage for transfer certificates, Aadhaar, birth records, and previous report cards." },
      { title: "Integrated Seat Fee Deposit", description: "Accept token payments and registration fees with automatic receipt generation and bank reconciliation." },
      { title: "Instant Student Promotion", description: "Admitted students automatically convert into enrolled records with pre-assigned roll numbers and section tags." }
    ],
    roleBenefits: {
      school: [
        "100% visibility into admission targets, inquiry-to-enrollment ratios, and revenue forecasts.",
        "Zero data re-entry: admitted students automatically seed classroom rolls and finance ledgers.",
        "Secure digital audit trail for CBSE and state regulatory compliance."
      ],
      teachers: [
        "Instant access to newcomer profiles, medical flags, and language preferences prior to Day 1.",
        "No paperwork coordination needed for student file handovers."
      ],
      parents: [
        "Hassle-free online form submission without standing in campus queues in extreme weather.",
        "Real-time status updates via SMS/WhatsApp from submission to offer letter."
      ]
    },
    relatedSlugs: ["student-management", "fees", "parent-communication"],
    faq: [
      {
        question: "Can we customize the application form fields for CBSE/ICSE requirements?",
        answer: "Yes, Scholarix OS allows schools to define unlimited custom fields, compulsory document checklists, and declaration agreements required by educational boards."
      },
      {
        question: "Can we accept admission fees online through UPI and Net Banking?",
        answer: "Absolutely. Scholarix integrates with RBI-authorized payment gateways including Razorpay, Cashfree, and CCAvenue with instant automated receipt delivery."
      },
      {
        question: "Does it support multi-branch admissions under a single administration?",
        answer: "Yes. Campus principals can view their local applicants while the central trust director monitors district-wide seat fulfillment in real time."
      }
    ]
  },
  {
    slug: "attendance",
    title: "Attendance Tracking",
    shortDescription: "Ultra-fast daily & period-wise attendance with biometric/RFID sync and instant SMS/WhatsApp alerts to parents.",
    category: "Academics",
    badge: "Smart Attendance",
    targetKeyword: "school attendance management software",
    seoTitle: "Student & Staff Attendance Management System — Scholarix OS",
    seoDescription: "Automate classroom attendance with one-tap teacher marking, biometric sync, automated parent absence alerts, and compliance analytics.",
    heroHeadline: "Attendance Marked in Seconds. Parents Alerted Instantly.",
    heroSubheadline: "Transform roll-call from a 15-minute daily chore into a 15-second digital pulse. Ensure student safety, reduce unexcused absences, and maintain regulatory compliance.",
    problemStatement: {
      headline: "Paper Registers Waste 60+ Hours per Teacher Annually",
      points: [
        {
          problem: "Roll call consumes 10-15 minutes of productive instructional time every single morning.",
          resolution: "One-tap class scan from mobile or classroom smartboard completes attendance in under 20 seconds."
        },
        {
          problem: "Late arrivals and absent students go unnoticed by parents until evening or end-of-term reports.",
          resolution: "Immediate automated SMS and WhatsApp alerts dispatched to parents before the morning assembly finishes."
        },
        {
          problem: "Monthly register calculation and board compliance records require days of manual tabulation.",
          resolution: "Live institutional dashboard auto-aggregates percentage records, chronic absenteeism warnings, and board reports."
        }
      ]
    },
    overview: "Scholarix Attendance delivers institutional grade accuracy across classrooms, campuses, and transport buses. With flexible support for period-wise tracking, biometric RFID gates, and leave workflow management, schools eliminate administrative drift.",
    image: "/images/attendance.jpeg",
    imageAlt: "Teacher marking attendance on a tablet with the Scholarix attendance matrix",
    workflow: [
      { step: "01", title: "Classroom / Gate Scan", description: "Students tap RFID badges at the gate or class teachers mark present/absent on mobile." },
      { step: "02", title: "Automated Parent Alert", description: "Parents of unexcused absent students receive an instant WhatsApp alert with an easy reply link." },
      { step: "03", title: "Leave Reconciliation", description: "Parent medical leave requests auto-reconcile against medical notes uploaded in the app." },
      { step: "04", title: "Institutional Analytics", description: "Head of school receives an 8:30 AM pulse summary with chronic absence trends." }
    ],
    capabilities: [
      { title: "One-Tap Classroom Grid", description: "Intuitive quick-select matrix defaults to 'All Present' so teachers only tap absent students." },
      { title: "Period-by-Period Subject Tracking", description: "Monitor secondary school attendance across every lecture to prevent bunking and period discrepancies." },
      { title: "Biometric & RFID Gate Integration", description: "Sync seamlessly with turnstiles, biometric scanners, and bus GPS readers with offline backup." },
      { title: "Instant WhatsApp & SMS Push", description: "Automated parent alerts with dynamic student names, time of absence, and school contact details." },
      { title: "Chronic Absenteeism Early Warning", description: "AI flags students falling below 75% attendance threshold before exam eligibility is impacted." },
      { title: "Board-Compliant Muster Roll", description: "Export printable, official registers with monthly percentages for CBSE/ICSE inspections in one click." }
    ],
    roleBenefits: {
      school: [
        "Uncompromising campus safety: know the exact location and status of every student by 8:30 AM.",
        "Reduce chronic absenteeism by 42% through immediate parent notification loops.",
        "Zero paperwork for end-of-term board attendance audits."
      ],
      teachers: [
        "Save 15 minutes every morning to dedicate to student mentoring and instruction.",
        "Review attendance patterns alongside student academic marks to spot correlations."
      ],
      parents: [
        "Peace of mind knowing your child reached campus safely every morning.",
        "Apply for student sick leave digitally without handwritten paper notes."
      ]
    },
    relatedSlugs: ["student-management", "parent-communication", "timetable"],
    faq: [
      {
        question: "Can teachers mark attendance if internet connectivity is intermittent?",
        answer: "Yes. The Scholarix mobile app features offline sync. Attendance marked offline is automatically uploaded and parent alerts sent as soon as connectivity resumes."
      },
      {
        question: "Can we track staff and teacher attendance in the same system?",
        answer: "Yes. Scholarix OS includes a dedicated staff attendance module supporting biometric punch-in, geo-fenced mobile check-ins, and leave balance integration."
      },
      {
        question: "Does it support late slip generation and half-day permissions?",
        answer: "Yes. Front desk staff can issue digital late passes, which instantly update the student's status from Absent to Late with exact arrival timestamps."
      }
    ]
  },
  {
    slug: "fees",
    title: "Fee Management & Collection",
    shortDescription: "Automated fee structures, online UPI/card payments, instant receipts, installment plans, and zero-leakage bursar accounting.",
    category: "Administration",
    badge: "Financial Engine",
    targetKeyword: "school fee management software India",
    seoTitle: "School Fee Management & Online Collection Software — Scholarix OS",
    seoDescription: "Streamline tuition collection with customizable fee heads, automated installment schedules, WhatsApp payment reminders, and zero reconciliation errors.",
    heroHeadline: "Collect 98% of School Fees On Time. Zero Reconciliation Chaos.",
    heroSubheadline: "Automate complex fee structures, offer zero-friction UPI payments, send automated WhatsApp reminders, and give your board a crystal-clear financial ledger.",
    problemStatement: {
      headline: "Manual Fee Collection Causes Revenue Leakage and Frustrated Parents",
      points: [
        {
          problem: "Counter queues with cash and cheques create audit vulnerabilities, reconciliation delays, and bounced cheque costs.",
          resolution: "Unified online fee portal with Instant UPI, credit/debit cards, Net Banking, and automatic clearance."
        },
        {
          problem: "Managing scholarships, sibling discounts, and staff concessions in spreadsheets leads to human billing errors.",
          resolution: "Rule-based concession engine applies approved waivers automatically without manual overrides."
        },
        {
          problem: "Defaulter follow-up requires hours of uncomfortable phone calls and paper reminder notices.",
          resolution: "Automated multi-tiered WhatsApp reminders with direct 1-click payment links sent on schedule."
        }
      ]
    },
    overview: "Scholarix Fees gives school finance officers and bursars complete control over tuition, transport fees, lab charges, and exam deposits. Built specifically for Indian fee structures with quarterly cycles, late fee calculation, and instant GST/statutory receipting.",
    image: "/images/dashboard-command.jpg",
    imageAlt: "Scholarix OS Fee Collection and Outstanding Balances Dashboard",
    workflow: [
      { step: "01", title: "Structure Setup", description: "Define class-wise fee heads, quarterly installments, transport slabs, and approved discount rules." },
      { step: "02", title: "Invoice Generation", description: "Automated batch invoicing assigns fee demands to parent accounts with due dates and late penalties." },
      { step: "03", title: "1-Click UPI Payment", description: "Parents receive WhatsApp reminders with direct UPI payment links and instant digital tax receipts." },
      { step: "04", title: "Real-Time Ledger", description: "Bursar dashboard updates in real time with bank settlement, outstanding balances, and daily collection." }
    ],
    capabilities: [
      { title: "Dynamic Fee Head Engine", description: "Configure tuition, admission, laboratory, sports, uniform, and transport fee components per class." },
      { title: "Direct UPI & QR Integration", description: "Support PhonePe, Google Pay, Paytm, and BHIM UPI with instantaneous zero-wait receipt generation." },
      { title: "Automated Concessions & Scholarships", description: "Configure sibling discounts, merit scholarships, and RTE quotas with multi-level approval workflows." },
      { title: "Automated Late Fee Rules", description: "Apply percentage or fixed daily penalties after grace periods without requiring bursar intervention." },
      { title: "Multi-Campus Trust Consolidation", description: "Centralized financial oversight for education societies operating multiple schools and junior colleges." },
      { title: "Tally & ERP Export", description: "Export daybook, ledger summaries, and voucher reconciliations directly into Tally ERP 9 / Prime." }
    ],
    roleBenefits: {
      school: [
        "Recover 98%+ of quarterly tuition dues within the first 10 days of invoice generation.",
        "Eliminate cash handling risk and front-office counter crowd during exam season.",
        "Generate comprehensive fee defaulter aging reports for board trustees with one click."
      ],
      teachers: [
        "Never have to distribute paper fee reminder slips or discuss pending dues with students.",
        "Focus purely on teaching without administrative collection burdens."
      ],
      parents: [
        "Pay tuition 24/7 from home via UPI without visiting bank branches or taking time off work.",
        "Download tax receipts (Section 80C) anytime directly from the mobile app."
      ]
    },
    relatedSlugs: ["admissions", "parent-communication", "reports-analytics"],
    faq: [
      {
        question: "Can parents pay in installments if they cannot pay the annual fee upfront?",
        answer: "Yes. Scholarix OS supports quarterly, monthly, and customized installment arrangements with distinct due dates and reminder schedules."
      },
      {
        question: "How does the system handle transport fees based on distance or bus stop?",
        answer: "The fee engine automatically calculates the transport fee based on the student's assigned bus route and pick-up stage."
      },
      {
        question: "Can we issue paper receipts for parents who still insist on cash or demand draft payments?",
        answer: "Yes. Front-desk bursars can log cash, cheque, or DD payments with instant thermal or A4 branded printed receipts."
      }
    ]
  },
  {
    slug: "exams-results",
    title: "Exams & Report Cards",
    shortDescription: "Complete examination lifecycle: date sheets, marks entry, grading rubrics, CBSE/ICSE report cards, and student progress graphs.",
    category: "Academics",
    badge: "Examination Suite",
    targetKeyword: "school examination management system",
    seoTitle: "School Exam Management Software & Report Card Builder — Scholarix OS",
    seoDescription: "Manage term exams, question paper schedules, marks entry, CBSE/ICSE compliant report cards, and student performance analytics in one place.",
    heroHeadline: "Generate Beautiful Report Cards in Minutes, Not Weeks.",
    heroSubheadline: "From exam scheduling and hall tickets to teacher marks entry and automated grade calculation. Build institutional report cards that showcase student growth.",
    problemStatement: {
      headline: "Term Exam Compilation Paralyzes Teachers for Weeks",
      points: [
        {
          problem: "Teachers spend late nights calculating weightages, grade conversions, and handwritten report remarks.",
          resolution: "Automated calculation engine computes percentage, percentile, CGPA, and co-scholastic grades instantly."
        },
        {
          problem: "Format changes mandated by educational boards require redesigning report card templates from scratch.",
          resolution: "Pre-built, board-compliant templates for CBSE, ICSE, and State Boards with custom institutional branding."
        },
        {
          problem: "Parents receive results only once a term with zero actionable insight into learning gaps.",
          resolution: "Interactive parent portal provides subject trajectory graphs, skill breakdowns, and teacher guidance notes."
        }
      ]
    },
    overview: "Scholarix Exams manages everything from test date sheet creation to digital report card publishing. Designed to accommodate multiple exam terms, formative assessments (FA), summative assessments (SA), practical marks, and holistic developmental evaluations.",
    image: "/images/reportCardBuilder.jpeg",
    imageAlt: "Student reviewing a digital report card built with Scholarix OS",
    workflow: [
      { step: "01", title: "Exam Scheduling", description: "Create exam schedules, assign invigilators, and auto-generate hall tickets with seating plans." },
      { step: "02", title: "Marks Entry & Validation", description: "Teachers enter marks on web or mobile with auto-validation against maximum marks and absent tags." },
      { step: "03", title: "AI Remark Assistant", description: "Subject teachers draft constructive, encouraging narrative remarks assisted by AI rubrics." },
      { step: "04", title: "One-Click Publishing", description: "Generate digital PDF report cards with QR verification, school watermark, and instant parent app release." }
    ],
    capabilities: [
      { title: "CBSE & ICSE Compliant Formats", description: "Includes official 2-term and 3-term report card formats with scholastic and co-scholastic rubrics." },
      { title: "Batch Marks Entry", description: "Fast, spreadsheet-like marks entry interface with keyboard shortcuts and lock-after-submit security." },
      { title: "Class & Subject Comparison", description: "Compare average class scores, subject difficulty curves, and highest/lowest score distribution." },
      { title: "Student Progress Trajectories", description: "Visualize longitudinal progress across grades and terms to identify learning decay early." },
      { title: "Hall Ticket & Admit Card Builder", description: "One-click generation of student admit cards with exam timetable, seat numbers, and photo IDs." },
      { title: "Digital Verification QR Code", description: "Every exported report card includes a tamper-proof QR verification code for authentic institutional validation." }
    ],
    roleBenefits: {
      school: [
        "Cut examination administrative processing time by 85% every term.",
        "Maintain standardized grading integrity across all subject teachers and departments.",
        "Deliver professional, beautifully branded report cards that enhance school reputation."
      ],
      teachers: [
        "Say goodbye to manual percentage arithmetic and manual report card write-ups.",
        "Lock grades securely to prevent unauthorized grade modifications."
      ],
      parents: [
        "Receive detailed academic performance breakdowns with actionable teacher remarks.",
        "Access historical report cards from past academic years in a secure digital repository."
      ]
    },
    relatedSlugs: ["attendance", "student-management", "parent-communication"],
    faq: [
      {
        question: "Does the system support grading scales like A1, A2, B1 for CBSE schools?",
        answer: "Yes. Scholarix OS supports 9-point, 8-point, 5-point, and custom grade scales with automatic boundary mappings."
      },
      {
        question: "Can we include co-curricular grades like Art, Physical Education, and Discipline?",
        answer: "Yes. Co-scholastic activities and personal development parameters can be assessed alongside scholastic subjects."
      },
      {
        question: "Can we withhold report cards for students with pending fee dues?",
        answer: "Yes. Bursars can configure automated result holds for fee defaulters, releasing the report card instantly upon settlement."
      }
    ]
  },
  {
    slug: "timetable",
    title: "AI Timetabling & Scheduling",
    shortDescription: "Zero-conflict master schedules, teacher workload balancing, room allocation, and instant substitute teacher management.",
    category: "Academics",
    badge: "Smart Timetable",
    targetKeyword: "school timetable software",
    seoTitle: "AI School Timetable Software & Substitute Scheduling — Scholarix OS",
    seoDescription: "Generate conflict-free school timetables in seconds. Balance teacher workload, allocate lab spaces, and manage daily teacher substitutions automatically.",
    heroHeadline: "Generate Conflict-Free Master Timetables in Seconds.",
    heroSubheadline: "Say goodbye to weeks of whiteboard schedule shuffling. Let our intelligent scheduling engine optimize teacher periods, specialized labs, and daily substitute teacher assignments.",
    problemStatement: {
      headline: "Manual Timetable Drafting Takes Weeks and Still Has Collisions",
      points: [
        {
          problem: "Complex constraints (part-time staff, lab availability, period limits) lead to accidental double-booking.",
          resolution: "Constraint-aware AI engine evaluates millions of permutations to deliver zero-conflict schedules in seconds."
        },
        {
          problem: "Sudden morning teacher sick leaves cause chaotic classroom supervision and noisy corridors.",
          resolution: "1-Click substitution manager identifies free teachers with matching subject competence and alerts them on mobile."
        },
        {
          problem: "Staff feel aggrieved by perceived inequities in period allocation and continuous back-to-back classes.",
          resolution: "Fair workload distribution algorithm ensures balanced weekly schedules with mandatory rest intervals."
        }
      ]
    },
    overview: "Scholarix Timetable solves the most mathematically grueling task of the academic term. Input your subjects, periods, specialized rooms (science labs, dance studios, computer centers), and teacher availability constraints — our solver builds an optimized master schedule instantly.",
    image: "/images/dashboard.jpeg",
    imageAlt: "Scholarix OS Timetable matrix showing class schedule and teacher allocation",
    workflow: [
      { step: "01", title: "Constraint Input", description: "Define school timings, period durations, lunch breaks, and specialized teacher preferences." },
      { step: "02", title: "Automated Generation", description: "The AI solver generates fully balanced class, teacher, and room master schedules in seconds." },
      { step: "03", title: "Visual Fine-Tuning", description: "Drag-and-drop schedule board highlights any potential conflicts with instant resolution suggestions." },
      { step: "04", title: "Instant Publishing", description: "Synced directly to teacher and student mobile apps with automatic notification of room assignments." }
    ],
    capabilities: [
      { title: "Zero-Collision Engine", description: "Guarantees no teacher or room is double-scheduled across primary, secondary, and senior sections." },
      { title: "Instant Substitute Finder", description: "When a teacher applies for leave, the system recommends qualified substitute teachers currently free." },
      { title: "Lab & Facility Sharing", description: "Avoid disputes over science laboratories, sports fields, audio-visual rooms, and auditorium bookings." },
      { title: "Workload Equity Dashboard", description: "Monitor weekly teaching hours, free periods, and proxy duties across every department." },
      { title: "Printable Master & Class Views", description: "Export high-resolution master timetables for the staff room notice board and student desks." },
      { title: "Dynamic Bell Schedule Support", description: "Configure different timing arrangements for summer, winter, half-days, and examination weeks." }
    ],
    roleBenefits: {
      school: [
        "Reduce academic scheduling overhead from 3 intensive weeks to under an hour.",
        "Eliminate morning staff-room chaos when teachers report absent.",
        "Maximize utilization of high-cost facilities like science and robotics labs."
      ],
      teachers: [
        "Enjoy balanced teaching days without 4 exhausting back-to-back classes.",
        "View daily timetable and room changes right from their phone before the morning bell."
      ],
      parents: [
        "Students always know which books to pack, eliminating heavy school bags on non-relevant days.",
        "Clear visibility into daily academic routine and sports periods."
      ]
    },
    relatedSlugs: ["attendance", "exams-results", "student-management"],
    faq: [
      {
        question: "Can we manually override a slot created by the automated timetable generator?",
        answer: "Yes. The interactive drag-and-drop board allows administrators to manually swap classes with live collision alerts."
      },
      {
        question: "How does substitute teacher assignment work on sudden leave?",
        answer: "When a teacher is marked absent, the system displays all free teachers for each of their periods, prioritizing those with matching subject expertise."
      },
      {
        question: "Can we export timetables for individual teachers and classes?",
        answer: "Yes. You can generate class-wise timetables, teacher-wise individual schedules, and master wall charts in PDF and Excel."
      }
    ]
  },
  {
    slug: "parent-communication",
    title: "Parent Communication & App",
    shortDescription: "A unified mobile portal for school announcements, bus alerts, fee payments, report cards, and two-way teacher messaging.",
    category: "Communication",
    badge: "Parent Portal",
    targetKeyword: "school parent communication app",
    seoTitle: "School Parent Communication App & Portal — Scholarix OS",
    seoDescription: "Bridge the gap between campus and home. Real-time attendance alerts, fee payments, homework updates, and direct teacher messaging.",
    heroHeadline: "Engage Every Parent. Keep Every Family in the Loop.",
    heroSubheadline: "Replace chaotic WhatsApp groups, lost paper diary notes, and relentless front-office phone calls with a sleek, institutional communication hub.",
    problemStatement: {
      headline: "Unstructured WhatsApp Groups Create Privacy Leaks and Teacher Fatigue",
      points: [
        {
          problem: "Teachers are bombarded with late-night WhatsApp messages and weekend phone calls on personal numbers.",
          resolution: "Controlled two-way messaging with defined teacher working hours and privacy protection."
        },
        {
          problem: "Critical circulars and fee notices get buried under hundreds of chat messages in unofficial parent groups.",
          resolution: "Official school noticeboard categorized by priority, class, and read-receipt confirmations."
        },
        {
          problem: "Language barriers prevent non-English speaking parents from participating in their child's education.",
          resolution: "Instant multi-language translation ensures circulars and alerts are understood in regional languages."
        }
      ]
    },
    overview: "Scholarix Parent Portal is the digital gateway to the school for every guardian. From tracking morning school buses to approving field trips and paying quarterly tuition, parents stay informed, engaged, and supportive.",
    image: "/images/mobile.jpeg",
    imageAlt: "Parent using the Scholarix mobile app to follow their child's school day",
    workflow: [
      { step: "01", title: "Targeted Announcement", description: "Admin drafts a circular targeted to the whole school, specific grade, or particular bus route." },
      { step: "02", title: "Multi-Channel Dispatch", description: "Message is pushed simultaneously via App notification, SMS, and WhatsApp with attachments." },
      { step: "03", title: "Parent Engagement", description: "Parents view notice, acknowledge field trip permissions, and review homework assignments." },
      { step: "04", title: "Delivery Analytics", description: "School leadership monitors open rates and read receipts to ensure no critical notice is missed." }
    ],
    capabilities: [
      { title: "Dedicated Mobile App (iOS & Android)", description: "Intuitive, lightweight native mobile application for parents with biometrics and push notifications." },
      { title: "Digital Student Almanac / Diary", description: "Daily homework assignments, project guidelines, and teacher remarks updated directly in-app." },
      { title: "Two-Way Controlled Messaging", description: "Parents can send inquiries to authorized staff without exposing personal phone numbers." },
      { title: "Emergency Broadcast Alerts", description: "One-click urgent weather warning or holiday broadcast dispatched immediately across SMS and App." },
      { title: "Parent-Teacher Meeting Scheduler", description: "Parents book convenient 10-minute PTM slots, preventing crowded corridors and waiting lines." },
      { title: "Multi-Child Sibling Switcher", description: "Parents with multiple children in different grades can switch profiles with one tap in the same app." }
    ],
    roleBenefits: {
      school: [
        "Cut front-desk phone inquiries by more than 50% on exam and fee announcement days.",
        "Ensure 100% verified delivery of critical safety advisories and fee deadlines.",
        "Enhance institutional brand perception through a polished, modern parent experience."
      ],
      teachers: [
        "Protect personal privacy: no need to share private mobile numbers with hundreds of parents.",
        "Post daily homework and assignments to the whole section in under 30 seconds."
      ],
      parents: [
        "Never miss a school event, fee due date, or field trip permission deadline.",
        "Monitor attendance, grades, and bus location all inside a single, clean app."
      ]
    },
    relatedSlugs: ["attendance", "fees", "homework"],
    faq: [
      {
        question: "Can parents use the app in Hindi or other regional Indian languages?",
        answer: "Yes. Scholarix OS supports multi-lingual app interfaces and automatic circular translation into Hindi and major Indian languages."
      },
      {
        question: "Do parents have to pay an extra subscription for the mobile app?",
        answer: "No. The parent mobile application is completely free for all enrolled families as part of the school's Scholarix institutional plan."
      },
      {
        question: "What happens if a parent does not have a smartphone?",
        answer: "Scholarix features automated SMS fallback for all critical notifications including attendance alerts, emergency circulars, and fee receipts."
      }
    ]
  },
  {
    slug: "transport",
    title: "School Transport & Bus Tracking",
    shortDescription: "Live GPS bus tracking, route optimization, driver verification, stop-by-stop student manifests, and parent pickup ETA alerts.",
    category: "Operations",
    badge: "Fleet Safety",
    targetKeyword: "school bus tracking software",
    seoTitle: "School Transport Management & Live Bus Tracking Software — Scholarix OS",
    seoDescription: "Ensure student transit safety with live GPS school bus tracking, route optimization, driver licensing checks, and automated parent arrival alerts.",
    heroHeadline: "Student Safety on Every Mile. Real-Time Bus Tracking.",
    heroSubheadline: "Provide complete peace of mind for parents and campus administrators. Monitor bus fleets in real time, optimize routes, and prevent anxious waits at bus stops.",
    problemStatement: {
      headline: "Unmonitored School Transport is a Constant Safety Hazard and Cost Sink",
      points: [
        {
          problem: "Anxious parents flood school reception with phone calls whenever a school bus is delayed by traffic.",
          resolution: "Live GPS map in the parent app with accurate ETA updates eliminates calls to the front desk."
        },
        {
          problem: "Sub-optimal routes waste thousands of liters of diesel and increase student commute times.",
          resolution: "Intelligent route optimizer calculates fastest pick-up sequences and stop allocations."
        },
        {
          problem: "Campus authorities struggle to know exactly which child boarded which bus on any given afternoon.",
          resolution: "RFID / Mobile attendant boarding scans record exact student entry and exit with timestamps."
        }
      ]
    },
    overview: "Scholarix Transport provides end-to-end management for school vehicle fleets. From driver compliance records and vehicle fitness certificates to live geo-fencing, speed violation alerts, and parent notification loops, safety is guaranteed.",
    image: "/images/dashboard.jpeg",
    imageAlt: "Scholarix OS Transport management showing live fleet GPS and route manifests",
    workflow: [
      { step: "01", title: "Route & Stop Setup", description: "Map out bus routes, pick-up points, timings, and assign authorized drivers and vehicles." },
      { step: "02", title: "Student Boarding Scan", description: "Attendants scan student RFID cards or verify mobile manifest as students board the bus." },
      { step: "03", title: "Live Transit & ETA", description: "Parents monitor bus progress on live map and receive a push alert 5 minutes before arrival." },
      { step: "04", title: "Safe Campus Arrival", description: "Admin command center registers fleet arrival and unloads manifest automatically." }
    ],
    capabilities: [
      { title: "Live Real-Time GPS Tracking", description: "Monitor the exact location, speed, and heading of every school vehicle on an interactive map." },
      { title: "Geo-Fencing & Stop Arrival Alerts", description: "Automated proximity notifications notify parents when the bus is within 1 km of their child's stop." },
      { title: "Driver & Vehicle Compliance Vault", description: "Track driver licenses, background verifications, police clearances, bus insurance, and pollution certificates." },
      { title: "Speed & Idle Violation Alerts", description: "Instant notifications sent to transport manager if a driver exceeds school speed thresholds or deviates from routes." },
      { title: "Automated Transport Fee Slabs", description: "Assign fee categories based on distance or stop zones directly connected to the fee billing engine." },
      { title: "Bus Attendant Mobile Manifest", description: "Attendant app lists all expected students for the route with one-tap verification of safe drop-offs." }
    ],
    roleBenefits: {
      school: [
        "100% accountability for student safety throughout the morning and afternoon commute.",
        "Reduce fleet fuel expenses by up to 18% through intelligent route optimization.",
        "Mitigate legal liabilities with complete digital documentation of driver licenses and vehicle fitness."
      ],
      teachers: [
        "Transport in-charges can resolve bus delay queries with a glance at the live dashboard.",
        "Afternoon dispersal runs smoothly with organized bus bay manifests."
      ],
      parents: [
        "Never wait in the rain, heat, or cold for an unannounced delayed school bus.",
        "Receive peace-of-mind confirmation the moment your child boards and alights."
      ]
    },
    relatedSlugs: ["fees", "parent-communication", "attendance"],
    faq: [
      {
        question: "Does the school need to buy proprietary GPS hardware from Scholarix?",
        answer: "No. Scholarix OS integrates with standard AIS-140 certified GPS trackers and can also run directly on an Android smartphone carried by the bus attendant."
      },
      {
        question: "What happens if a student needs to take a different bus temporarily?",
        answer: "Parents can submit a temporary bus change request through the app, which upon approval updates the afternoon attendant manifest."
      },
      {
        question: "Can multi-campus schools manage a shared transport fleet?",
        answer: "Yes. The transport module supports multi-school routes, cross-campus transfers, and shared vehicle fleet allocations."
      }
    ]
  },
  {
    slug: "student-management",
    title: "Student Information System (SIS)",
    shortDescription: "360-degree digital student profiles, academic lifecycle records, health flags, transfer certificates, and disciplinary tracking.",
    category: "Academics",
    badge: "SIS Core",
    targetKeyword: "student management system",
    seoTitle: "Student Information System & Lifecycle Records — Scholarix OS",
    seoDescription: "Centralize student records with 360-degree profiles, digital transfer certificates, academic history, medical flags, and multi-year archiving.",
    heroHeadline: "Complete Student Lifecycle from Nursery to Graduation.",
    heroSubheadline: "Unify academic records, attendance history, fee balances, disciplinary notes, and health information into one secure, searchable institutional repository.",
    problemStatement: {
      headline: "Scattered Student Files Waste Hours and Risk Data Loss",
      points: [
        {
          problem: "Student information is scattered across dusty paper folders, Excel sheets, and disconnected fee files.",
          resolution: "Unified 360-degree digital student profile brings academic, financial, and personal data together."
        },
        {
          problem: "Generating Transfer Certificates (TC) and character certificates takes days of office coordination.",
          resolution: "1-Click automated certificate generator with custom school templates and tamper-proof QR codes."
        },
        {
          problem: "Critical medical flags (allergies, medical conditions) are not immediately visible to teachers during emergencies.",
          resolution: "Instant visual health badges prominently displayed on teacher mobile attendance lists."
        }
      ]
    },
    overview: "Scholarix Student Management acts as the beating heart of your school's data architecture. Every interaction — from first admission through every exam, fee payment, and promotion — is immutably linked to the student record.",
    image: "/images/dashboard.jpeg",
    imageAlt: "Scholarix OS Student Information System profile and academic records",
    workflow: [
      { step: "01", title: "Enrollment Seeding", description: "Admissions pipeline automatically creates student record with unique admission number and roll ID." },
      { step: "02", title: "Class Allocation", description: "Assign students to sections, electives, second languages, and transportation routes in batches." },
      { step: "03", title: "Continuous Record", description: "Attendance, marks, teacher disciplinary feedback, and awards accumulate across academic years." },
      { step: "04", title: "Graduation & TC", description: "One-click TC generation with clearance verification from library, laboratory, and accounts." }
    ],
    capabilities: [
      { title: "360° Student Dossier", description: "View complete academic timeline, family details, fee clearance, and attendance history on one screen." },
      { title: "Digital Transfer Certificate (TC)", description: "Generate board-compliant TCs with automatic verification numbers, preventing forged certificates." },
      { title: "Bulk Section & Roll Reallocation", description: "Promote students to the next grade with automatic section distribution and roll number re-indexing." },
      { title: "Emergency Medical & Dietary Flags", description: "Prominent allergy warnings and blood group records visible to teachers, infirmary staff, and sports coaches." },
      { title: "Document Repository", description: "Securely store scanned Aadhaar cards, previous school records, caste certificates, and birth records." },
      { title: "Alumni Database Archival", description: "Maintain lifetime records of graduated batches for institutional alumni networks and transcript requests." }
    ],
    roleBenefits: {
      school: [
        "Search any student record in under 2 seconds across thousands of active and alumni profiles.",
        "Zero data duplication between admissions, classroom attendance, and bursar billing.",
        "Effortless compliance with government reporting guidelines."
      ],
      teachers: [
        "Know every student's learning history, parent contacts, and special needs from Day 1.",
        "Record commendations and conduct notes that follow the student constructively."
      ],
      parents: [
        "Update emergency contact details, address changes, and medical records anytime.",
        "Download Bonafide and Character certificates without taking leave to visit the school office."
      ]
    },
    relatedSlugs: ["admissions", "attendance", "exams-results"],
    faq: [
      {
        question: "Can we import existing student data from our current Excel spreadsheets?",
        answer: "Yes. Scholarix OS includes a bulk Excel/CSV import tool with automated field validation and duplicate detection."
      },
      {
        question: "Is student data private and compliant with data protection regulations?",
        answer: "Yes. All student data is encrypted at rest and in transit with strict role-based access control conforming to ISO 27001 standards."
      },
      {
        question: "Can students have multiple guardian profiles (e.g., parents and local guardians)?",
        answer: "Yes. Multiple contacts can be linked to a student with designated primary billing, emergency, and academic communication flags."
      }
    ]
  },
  {
    slug: "library",
    title: "Library Management",
    shortDescription: "Barcode cataloguing, book issue/return tracking, automated overdue fine calculation, and student reading histories.",
    category: "Operations",
    badge: "Library Hub",
    targetKeyword: "school library management software",
    seoTitle: "School Library Management Software & Barcode Catalog — Scholarix OS",
    seoDescription: "Automate library cataloging, book checkout with barcode scanning, overdue fine calculations, and student reading analytics.",
    heroHeadline: "Inspire Young Readers. Automate Library Operations.",
    heroSubheadline: "Transform your school library with instant barcode book loans, digital catalog search, automatic due date reminders, and zero lost books.",
    problemStatement: {
      headline: "Manual Library Registers Lead to Lost Books and Uncollected Fines",
      points: [
        {
          problem: "Librarians spend hours manually writing register entries during busy class library periods.",
          resolution: "Barcode scanner checkout scans student ID and book in 2 seconds flat."
        },
        {
          problem: "Students forget return dates and accumulate massive uncollected fines.",
          resolution: "Automated due date alerts sent to student and parent mobile apps 2 days in advance."
        },
        {
          problem: "Administrators have no visibility into which titles students actually read or which stock needs replenishment.",
          resolution: "Reading analytics highlight popular genres, underutilized collections, and lost inventory."
        }
      ]
    },
    overview: "Scholarix Library empowers school librarians to maintain thousands of titles effortlessly. Features ISBN lookup, barcode generation, Dewey Decimal/custom shelf indexing, and reading reward badges to encourage student literacy.",
    image: "/images/dashboard.jpeg",
    imageAlt: "Scholarix OS Library management system with barcode scanner and book catalog",
    workflow: [
      { step: "01", title: "Catalog & Barcode", description: "Import books via ISBN or title, generate printable barcode stickers for shelves and book spines." },
      { step: "02", title: "Scan & Issue", description: "Librarian scans student ID badge followed by the book barcode to complete check-out." },
      { step: "03", title: "Due Date Alerts", description: "Automated notifications reminder sent to parent app before due date arrives." },
      { step: "04", title: "Return & Fine Reconcile", description: "One-scan return automatically assesses any overdue fines and adds them to the student fee ledger." }
    ],
    capabilities: [
      { title: "Barcode & QR Code Scanner Support", description: "Works with any standard handheld USB or wireless barcode scanner for instant loans." },
      { title: "Online Public Access Catalog (OPAC)", description: "Students and teachers can search book availability, author, and shelf position from home." },
      { title: "Automated Overdue Penalties", description: "Configure grace days and daily fine amounts with automatic addition to term fee demands." },
      { title: "Lost & Damaged Book Workflows", description: "Record damaged copies with replacement cost billing assigned to the responsible student record." },
      { title: "Reading Challenge Analytics", description: "Track books read per student and class to reward top readers during school assemblies." },
      { title: "Staff Resource Loaning", description: "Manage teacher edition textbooks, lab manuals, and audio-visual equipment checkouts." }
    ],
    roleBenefits: {
      school: [
        "Reduce lost book inventory losses by over 90% each academic year.",
        "Instantly know total library valuation and stock count for annual audits.",
        "Promote institutional literacy with data-backed book procurement."
      ],
      teachers: [
        "Reserve book bundles and reference material for upcoming curriculum topics in advance.",
        "Recommend reading lists to students through the digital student workspace."
      ],
      parents: [
        "View child's current reading list and return due dates to prevent overdue fees.",
        "Encourage reading habits based on school library check-out logs."
      ]
    },
    relatedSlugs: ["student-management", "fees", "homework"],
    faq: [
      {
        question: "Can we print our own barcode stickers for our existing library books?",
        answer: "Yes. Scholarix OS includes a barcode label printing template that works with standard adhesive label sheets."
      },
      {
        question: "Does it support book reservations if a title is currently checked out?",
        answer: "Yes. Students can reserve checked-out titles through the student portal, queuing them automatically for the next loan."
      },
      {
        question: "Can fines be settled directly online via the parent portal?",
        answer: "Yes. Library fines sync seamlessly to the fee management module for digital UPI settlement."
      }
    ]
  },
  {
    slug: "homework",
    title: "Homework & Assignments",
    shortDescription: "Digital daily homework logs, submission uploads, teacher feedback rubrics, and automated parent diary sync.",
    category: "Academics",
    badge: "Homework Hub",
    targetKeyword: "school homework management software",
    seoTitle: "School Homework & Assignment Management Software — Scholarix OS",
    seoDescription: "Digitize student homework with structured assignments, submission uploads, teacher grading remarks, and parent diary synchronization.",
    heroHeadline: "No More Lost Diaries. Homework Clear and Tracked.",
    heroSubheadline: "Enable teachers to publish rich daily assignments in seconds. Give students clear deadlines and keep parents actively involved in home learning.",
    problemStatement: {
      headline: "Handwritten Diaries and Chaotic Homework WhatsApp Groups Cause Daily Frustration",
      points: [
        {
          problem: "Students copy homework illegibly into paper almanacs or forget to write down assignment guidelines.",
          resolution: "Structured digital assignments with attachments, voice notes, and due dates posted directly to the app."
        },
        {
          problem: "Parents are uncertain whether homework was submitted on time or evaluated by the teacher.",
          resolution: "Clear completion status badges with teacher review remarks visible to parents in real time."
        },
        {
          problem: "Teachers face cluttered tables of physical notebooks during revision periods.",
          resolution: "Digital submission options for essays, artwork, and project files with organized grading rubrics."
        }
      ]
    },
    overview: "Scholarix Homework bridges the classroom and the study desk at home. Subject teachers can broadcast homework to an entire section in under 30 seconds with reference PDFs, video links, and instructions.",
    image: "/images/mobile.jpeg",
    imageAlt: "Student and parent reviewing daily homework assignments on the Scholarix mobile app",
    workflow: [
      { step: "01", title: "Assignment Publishing", description: "Subject teacher posts task with instructions, due date, and reference document attachments." },
      { step: "02", title: "Parent & Student Sync", description: "Instant notification alerts student device and parent dashboard with estimated completion time." },
      { step: "03", title: "Submission / Review", description: "Student completes work and checks off completion or uploads scanned project photos." },
      { step: "04", title: "Teacher Feedback", description: "Teacher provides encouragement, stamps, and remarks that reward student consistency." }
    ],
    capabilities: [
      { title: "Rich Media Attachments", description: "Attach worksheets, reference YouTube links, audio pronunciations, and PDF reading passages." },
      { title: "Estimated Time Indicator", description: "Teachers designate expected time (e.g., 20 mins) to prevent overwhelming young students." },
      { title: "Subject-Wise Daily Schedule", description: "Students see a neat daily checklist of homework organized by subject and deadline." },
      { title: "Digital Work Submissions", description: "Support photo uploads and document attachments for art, creative writing, and science projects." },
      { title: "Completion Tracking for Teachers", description: "Teachers view a one-screen matrix of who submitted, who is pending, and who was excused." },
      { title: "Historical Revision Archive", description: "All past homework and worksheets remain accessible before term examinations for easy revision." }
    ],
    roleBenefits: {
      school: [
        "Standardize homework quality and frequency across all grade levels and sections.",
        "Ensure alignment with pedagogical standards and homework guidelines.",
        "Eliminate daily parent complaints regarding unclear homework instructions."
      ],
      teachers: [
        "Post assignments to 5 sections at once instead of writing on blackboards 5 times.",
        "Quickly identify students consistently failing to complete homework before term grades suffer."
      ],
      parents: [
        "Know exactly what homework is due every evening without deciphering messy handwriting.",
        "Help children build healthy study routines and time management habits."
      ]
    },
    relatedSlugs: ["parent-communication", "timetable", "exams-results"],
    faq: [
      {
        question: "Can homework be assigned to specific individual students who need extra practice?",
        answer: "Yes. Teachers can assign tasks to the whole section or selectively to specific students who need remedial exercises."
      },
      {
        question: "Can students submit typed documents or photos of handwritten notebook pages?",
        answer: "Yes. The mobile app allows students to photograph their notebook pages and upload them directly as a multi-page PDF."
      },
      {
        question: "Does the system alert parents if homework is overdue?",
        answer: "Yes. Automated push notifications gently remind parents of pending assignments ahead of morning school."
      }
    ]
  },
  {
    slug: "reports-analytics",
    title: "Institutional Analytics & Reports",
    shortDescription: "Executive dashboards for school owners and principals with attendance trends, fee collection forecasts, and board compliance metrics.",
    category: "Insights",
    badge: "Command Center",
    targetKeyword: "school management reports and analytics",
    seoTitle: "School Analytics & Executive Reporting Software — Scholarix OS",
    seoDescription: "Data-driven school governance. Real-time dashboards for attendance velocity, fee recovery, academic growth, and regulatory board compliance.",
    heroHeadline: "Command-Center Oversight for the Modern Institution.",
    heroSubheadline: "Transform intuition into data-driven governance. Monitor school attendance pulses, fee collection velocity, academic performance, and teacher workload on one executive screen.",
    problemStatement: {
      headline: "Principals and Trustees Make Critical Decisions on Month-Old Data",
      points: [
        {
          problem: "Compiling comprehensive institutional reports takes days of staff data wrangling from multiple departments.",
          resolution: "Unified real-time data warehouse updates metrics instantly across all operational modules."
        },
        {
          problem: "Subtle warning signs like dropping retention or rising fee defaults go unnoticed until crises occur.",
          resolution: "Predictive trend alerts highlight anomalies before they impact institutional health."
        },
        {
          problem: "Multi-campus trusts lack comparative performance benchmarks across their different branches.",
          resolution: "Multi-campus command view ranks schools by attendance, academic achievement, and financial recovery."
        }
      ]
    },
    overview: "Scholarix Analytics provides principals, directors, and trustees with unprecedented clarity. From 8:00 AM attendance pulses to multi-year fee collection comparisons and board inspection audits, everything is at your fingertips.",
    image: "/images/dashboard-command.jpg",
    imageAlt: "Scholarix OS Executive Analytics Dashboard with financial graphs and attendance metrics",
    workflow: [
      { step: "01", title: "Continuous Data Ingestion", description: "Every attendance tap, fee receipt, exam mark, and bus journey feeds the real-time data stream." },
      { step: "02", title: "Anomaly Detection", description: "Algorithms flag sudden attendance drops, payment delays, or subject mark dips." },
      { step: "03", title: "Visual Dashboard", description: "Principals review clear visual KPI cards, heatmaps, and progress charts on desktop or tablet." },
      { step: "04", title: "One-Click PDF/Excel Export", description: "Generate executive board presentations and inspection reports ready for trustees." }
    ],
    capabilities: [
      { title: "Real-Time Campus Pulse", description: "Morning dashboard summary of student presence, teacher coverage, and bus arrival status." },
      { title: "Financial Aging & Recovery Forecast", description: "Visual fee collection funnel with aging buckets (30, 60, 90 days) and automated projections." },
      { title: "Academic Value-Add Analytics", description: "Compare incoming student scores with graduation results to prove institutional value-add." },
      { title: "Staff Workload & Attendance Metric", description: "Analyze teacher period distribution, leave frequency, and substitute duty equity." },
      { title: "Regulatory Compliance Pack", description: "Export standard reports required by CBSE, ICSE, and state education departments." },
      { title: "Multi-Branch Comparative Matrix", description: "Cross-campus benchmarking of admission conversion, retention, and student achievement." }
    ],
    roleBenefits: {
      school: [
        "Make confident strategic investments backed by historical enrollment and financial data.",
        "Zero panic during unannounced educational board or inspectorate campus visits.",
        "Protect institutional profitability by tracking expenditure and fee collection velocity."
      ],
      teachers: [
        "Identify high-performing teaching methodologies through subject performance correlations.",
        "Receive transparent workload credit for non-teaching administrative duties."
      ],
      parents: [
        "Trust that their child attends a transparent, impeccably governed institution.",
        "Experience prompt administrative responses backed by synchronized digital records."
      ]
    },
    relatedSlugs: ["fees", "attendance", "exams-results"],
    faq: [
      {
        question: "Can customized reports be scheduled to email trustees automatically every Monday?",
        answer: "Yes. Executive summary digests can be scheduled for automated delivery to trustee and principal email addresses."
      },
      {
        question: "Can access to sensitive financial metrics be restricted from academic staff?",
        answer: "Yes. Scholarix OS features granular role-based permissions ensuring financial metrics are strictly accessible to authorized trustees and bursars."
      },
      {
        question: "Can data be exported into Excel and PDF formats?",
        answer: "Yes. Every report and visual chart can be exported into high-resolution formatted PDFs and raw Excel/CSV spreadsheets."
      }
    ]
  },
  {
    slug: "hr-payroll",
    title: "HR, Staff & Payroll",
    shortDescription: "Staff biometric attendance, leave management, digital salary slip generation, qualification records, and statutory compliance.",
    category: "Operations",
    badge: "Staff Management",
    targetKeyword: "school staff hr and payroll software",
    seoTitle: "School HR & Staff Payroll Management Software — Scholarix OS",
    seoDescription: "Manage teaching and administrative staff lifecycle. Biometric check-in, leave approval workflows, payroll calculation, and digital salary slips.",
    heroHeadline: "Empower Your Educators. Automate Staff Operations.",
    heroSubheadline: "Streamline staff onboarding, biometric attendance, leave requests, and error-free payroll calculation tailored to school compensation structures.",
    problemStatement: {
      headline: "Manual Staff Management Distracts from Academic Leadership",
      points: [
        {
          problem: "Calculating teacher salaries with variable leaves, allowances, and provident fund deductions is time-consuming.",
          resolution: "Automated payroll engine computes net salary, PF, ESI, and tax deductions with one-click digital payslip dispatch."
        },
        {
          problem: "Managing leave approvals on physical paper slips leads to uncoordinated classroom coverage.",
          resolution: "Mobile leave approval workflow automatically alerts timetabling to arrange substitute teachers."
        },
        {
          problem: "Maintaining compliance records (teacher qualifications, police background checks) is scattered across physical files.",
          resolution: "Centralized digital staff dossier stores certifications, appointment letters, and performance evaluations."
        }
      ]
    },
    overview: "Scholarix HR & Payroll understands the unique nuances of school staffing — from academic session contracts and summer vacation pay to substitute allowances and qualification tracking. Keep your faculty supported and satisfied.",
    image: "/images/dashboard.jpeg",
    imageAlt: "Scholarix OS HR and Staff Payroll calculation dashboard",
    workflow: [
      { step: "01", title: "Staff Onboarding", description: "Digitally capture employee records, qualification certificates, bank details, and emergency contacts." },
      { step: "02", title: "Biometric Attendance & Leave", description: "Staff punch in via biometric scanners with leave balances auto-updated via mobile app." },
      { step: "03", title: "One-Click Payroll Run", description: "System calculates salaries with LOP (Loss of Pay) deductions, allowances, and statutory requirements." },
      { step: "04", title: "Digital Payslip Release", description: "Encrypted salary slips delivered directly to staff mobile apps with bank transfer file exports." }
    ],
    capabilities: [
      { title: "School-Specific Salary Structures", description: "Configure basic pay, DA, HRA, special allowances, PF, and professional tax compliant with Indian regulations." },
      { title: "Mobile Staff Leave Portal", description: "Teachers apply for casual, sick, or earned leave with automated substitute teacher notification." },
      { title: "Biometric & Geo-Fence Sync", description: "Support for thumbprint scanners, facial recognition cameras, and campus geo-fence check-ins." },
      { title: "Bank Transfer File Generator", description: "Export formatted NEFT/RTGS salary transfer files for major Indian banks (SBI, HDFC, ICICI, Axis)." },
      { title: "Staff Credential & Verification Vault", description: "Store B.Ed, M.Ed degree certificates, police verification forms, and appointment contracts." },
      { title: "Teacher Performance & Appraisal", description: "Log student feedback, lesson completion ratios, and academic results alongside annual appraisals." }
    ],
    roleBenefits: {
      school: [
        "Eliminate salary calculation errors and payroll dispute friction with teaching faculty.",
        "Ensure 100% statutory compliance with PF, ESI, and TDS filing records.",
        "Retain top educational talent through transparent leave and compensation governance."
      ],
      teachers: [
        "View live leave balances and apply for time-off from the mobile app in seconds.",
        "Download digital salary slips and Form 16 certificates anytime for loan or tax purposes."
      ],
      parents: [
        "Benefit from lower teacher turnover and a happier, highly motivated teaching faculty."
      ]
    },
    relatedSlugs: ["timetable", "attendance", "reports-analytics"],
    faq: [
      {
        question: "Does the payroll system automatically calculate PF and ESI contributions?",
        answer: "Yes. Scholarix OS automatically applies statutory Indian PF, ESI, Professional Tax, and TDS rules according to current government slabs."
      },
      {
        question: "Can we manage non-teaching staff (drivers, ayahs, security) in the same system?",
        answer: "Yes. Non-teaching staff can be managed with distinct wage structures, daily wage rates, and shift schedules."
      },
      {
        question: "Does staff leave approval instantly notify the timetabler for substitutions?",
        answer: "Yes. When a principal approves a teacher's leave, the timetable module immediately flags their periods for substitution."
      }
    ]
  },
  {
    slug: "visitor-management",
    title: "Campus Security & Visitors",
    shortDescription: "Digital visitor gate passes, instant photo capture, OTP verification, parent pickup authorizations, and perimeter security logs.",
    category: "Administration",
    badge: "Gatekeeper Security",
    targetKeyword: "school visitor management software",
    seoTitle: "School Visitor Management System & Gate Pass Software — Scholarix OS",
    seoDescription: "Safeguard your school campus with digital visitor gate passes, parent pickup verification, OTP checks, and blacklisted visitor alerts.",
    heroHeadline: "Ironclad Campus Security. Know Every Visitor.",
    heroSubheadline: "Replace messy paper security logbooks with instant digital gate passes, OTP phone verification, photo capture, and verified student pickup authentication.",
    problemStatement: {
      headline: "Paper Security Logbooks Offer Zero Real Campus Protection",
      points: [
        {
          problem: "Strangers write fake names and illegible phone numbers in gate registers without verification.",
          resolution: "Mobile OTP verification and digital photo capture validate visitor identity in 30 seconds."
        },
        {
          problem: "Security guards cannot verify if an adult arriving at 1:00 PM is authorized to pick up a student early.",
          resolution: "Live photo matching against pre-authorized parent and guardian profiles stored in the SIS."
        },
        {
          problem: "In emergencies, campus security cannot instantly tell if visitors are still inside campus buildings.",
          resolution: "Live in-campus visitor roster displays who is currently on school premises and whom they are meeting."
        }
      ]
    },
    overview: "Scholarix Visitor Management guarantees campus perimeter safety. Operating on a security guard tablet or front-gate kiosk, it records visitor details, alerts host staff members, and enforces child pickup security.",
    image: "/images/dashboard.jpeg",
    imageAlt: "Scholarix OS Campus Visitor Management digital pass and gate log",
    workflow: [
      { step: "01", title: "Arrival & Photo Capture", description: "Security guard enters visitor phone number; OTP is sent; tablet captures digital visitor portrait." },
      { step: "02", title: "Host Alert", description: "Staff member (Principal, Teacher, Bursar) receives a WhatsApp alert: 'Mr. Sharma has arrived to meet you'." },
      { step: "03", title: "Digital Gate Pass", description: "Printed thermal badge or digital QR pass issued with visitor photo, timestamp, and host designation." },
      { step: "04", title: "Checkout Scan", description: "Visitor scans badge upon exiting campus; system logs departure and updates the live security manifest." }
    ],
    capabilities: [
      { title: "OTP Mobile Verification", description: "Prevents fraudulent entries by verifying the visitor's mobile number with a fast 4-digit SMS OTP." },
      { title: "Authorized Pickup Verification", description: "Before releasing a student early, guard verifies parent/driver photo against authorized pickup list." },
      { title: "Instant Host WhatsApp Notification", description: "Staff members receive an instant alert when their guest or vendor arrives at the main gate." },
      { title: "Thermal Badge Printing", description: "Prints adhesive photo visitor passes with date, time, host name, and barcode checkout in 3 seconds." },
      { title: "Blacklist & Watchlist Alerts", description: "Instantly alerts security chief if a flagged individual attempts campus entry." },
      { title: "Live Evacuation Manifest", description: "In the event of a fire drill or emergency, export the exact list of visitors currently on school grounds." }
    ],
    roleBenefits: {
      school: [
        "Ensure uncompromising perimeter security for students and teaching staff at all times.",
        "Maintain an unforgeable digital visitor archive for police and regulatory audits.",
        "Project a high-tech, reassuring security posture to prospective parents."
      ],
      teachers: [
        "Never get interrupted by unscheduled walk-in visitors during classroom instruction.",
        "Receive polite advance notice before meeting parents in the conference room."
      ],
      parents: [
        "Total peace of mind knowing no unauthorized individual can approach or collect their child from campus."
      ]
    },
    relatedSlugs: ["student-management", "parent-communication", "transport"],
    faq: [
      {
        question: "Can guards operate the system without high English proficiency?",
        answer: "Yes. The security guard interface features oversized buttons, regional language options, and photo prompts designed for effortless use."
      },
      {
        question: "Can regular vendors (canteen supplier, uniform vendor) have permanent RFID passes?",
        answer: "Yes. Recurring vendors and contractors can be issued biometric or RFID access passes with specific expiration dates."
      },
      {
        question: "Does it work if internet connectivity is temporarily interrupted at the main gate?",
        answer: "Yes. The guard tablet stores temporary checkout tokens offline and syncs immediately once connectivity resumes."
      }
    ]
  }
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
