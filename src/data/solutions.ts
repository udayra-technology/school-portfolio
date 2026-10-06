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
  quote: string;
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

export const SOLUTIONS: SolutionItem[] = [
  {
    slug: "small-schools",
    title: "School ERP for Small & Budget Schools",
    navLabel: "Small & Growing Schools",
    tagline: "Powerful school ERP without enterprise complexity.",
    badge: "Budget-Friendly & Easy Setup",
    targetKeyword: "affordable school ERP for small schools",
    seoTitle: "School ERP for Small & Growing Schools — Simple, Fast & Affordable",
    seoDescription:
      "Run your entire school without expensive IT infrastructure. Discover Scholarix OS for small schools: 48-hour setup, simple UI, automated fees, attendance, and exam report cards.",
    heroHeadline: "Enterprise-grade power, without the enterprise complexity.",
    heroSubheadline:
      "Designed specifically for growing schools with 150 to 1,200 students and lean administrative teams. Automate admissions, fee collection, attendance, and parent communication in 48 hours.",
    positioningQuote:
      "You don't need a dedicated IT department or a 6-month consulting contract to modernize your school. Scholarix OS gives you immediate clarity and control with zero overhead.",
    targetAudience: "Budget schools, independent private academies, community schools, and early-stage K-10 institutions.",
    challenges: [
      {
        problem: "Enterprise ERP software is bloated, overly complex, and takes months to train staff on.",
        resolution: "Scholarix OS offers a clutter-free, intuitive interface that teachers and clerks master in under 30 minutes with zero training manual needed."
      },
      {
        problem: "Heavy upfront licensing and hardware server costs strain annual school budgets.",
        resolution: "100% cloud-hosted SaaS with simple, predictable per-student pricing. No local servers, no annual maintenance contracts, no hidden migration charges."
      },
      {
        problem: "Lean administrative teams of 2-3 staff members spend hundreds of hours on paper registers and manual receipts.",
        resolution: "One-click attendance, automated UPI fee links with auto-receipting, and bulk WhatsApp notices give a 2-person office the operational capacity of a 10-person department."
      }
    ],
    pillars: [
      {
        title: "Go Live in 48 Hours",
        desc: "Upload student and fee data using simple Excel templates. Our automated import engine validates records and sets up your school in 2 business days.",
        iconName: "Zap",
        stat: "48h Setup"
      },
      {
        title: "Instant UPI Fee Collection",
        desc: "Send automated payment links directly to parents' WhatsApp and SMS. Fees land directly in your school bank account with auto-reconciled receipts.",
        iconName: "CreditCard",
        stat: "94% On-time Fees"
      },
      {
        title: "One-Tap Attendance & Alerts",
        desc: "Teachers mark classroom attendance in 15 seconds from their phone. Parents receive immediate absent SMS alerts, eliminating daily phone calls.",
        iconName: "CalendarCheck",
        stat: "15s Roll Call"
      },
      {
        title: "Automated Report Cards",
        desc: "Input exam marks into clean digital sheets. Generate beautifully formatted, printable report cards with grades, ranks, and remarks instantly.",
        iconName: "BookOpen",
        stat: "Zero Paper Waste"
      }
    ],
    workflow: [
      {
        step: "01",
        title: "Fast 1-Page Student Onboarding",
        desc: "Add new admissions through a simple mobile form or Excel import. Student records, parent contact details, and fee categories sync automatically."
      },
      {
        step: "02",
        title: "Daily Attendance & Broadcasts",
        desc: "Teachers mark daily attendance on smartphone or tablet. School broadcasts and homework notices reach parents in real-time."
      },
      {
        step: "03",
        title: "Automated Fee Reminders & UPI",
        desc: "The system identifies unpaid dues and sends friendly WhatsApp payment nudges with instant QR codes and bank receipts."
      },
      {
        step: "04",
        title: "Term-End Report Card Printing",
        desc: "Teachers input subject marks; the engine calculates totals and generates school-branded report cards ready for parent-teacher conferences."
      }
    ],
    metrics: [
      { value: "48 hrs", label: "Average Onboarding Time", subtext: "From sign-up to daily active operations" },
      { value: "85%", label: "Reduction in Paper Expenses", subtext: "Replaced receipt books & physical registers" },
      { value: "10 hrs/wk", label: "Admin Time Saved per Clerk", subtext: "Reclaiming hours previously lost to manual data entry" },
      { value: "₹0", label: "Hardware Infrastructure Cost", subtext: "Runs in any web browser and mobile app" }
    ],
    roleBenefits: [
      {
        role: "School Founder / Principal",
        benefit: "Get total oversight of daily fee collections and student headcounts on your phone without waiting for the clerk's evening register.",
        quote: "Scholarix OS gave us the professional polish of a high-fee metropolitan academy at a price that easily fits our budget."
      },
      {
        role: "Head Clerk / Bursar",
        benefit: "Eliminate manual carbon-copy receipt books. Print or WhatsApp official fee receipts instantly with zero calculation mistakes.",
        quote: "I used to spend 4 hours every Saturday tallying fee payments. Now the ledger balances itself in real-time."
      },
      {
        role: "Parents",
        benefit: "Pay term fees conveniently from home via PhonePe or Google Pay without standing in midday queues at the school office.",
        quote: "Getting WhatsApp homework reminders and paying fees in two taps makes our school experience so much smoother."
      }
    ],
    relatedFeatures: [
      { slug: "fees", title: "Fee Management Engine", reason: "Automate fee collections and WhatsApp receipts" },
      { slug: "attendance", title: "Attendance Matrix", reason: "15-second daily classroom roll call" },
      { slug: "parent-communication", title: "Parent Communication Portal", reason: "Direct circulars and announcements" }
    ],
    faq: [
      {
        question: "Can we use Scholarix OS if our school doesn't have an IT technician?",
        answer: "Yes, 100%. Scholarix OS is designed specifically for non-technical users. If your staff can use WhatsApp and a web browser, they can manage admissions, attendance, and fees with ease."
      },
      {
        question: "How long does it take to migrate our existing student data?",
        answer: "Most small schools complete migration within 24 to 48 hours. Our onboarding team provides a ready Excel template; simply paste your student lists, and our system imports them cleanly."
      },
      {
        question: "Do parents need a smartphone to receive critical school alerts?",
        answer: "No. While our mobile app provides rich features, critical notices like absent alerts, fee dues, and emergency announcements are also sent via standard transactional SMS."
      },
      {
        question: "Is there any lock-in or expensive hardware requirement?",
        answer: "None. Scholarix OS runs entirely in the cloud on AWS. You only need a computer or smartphone with an active internet connection."
      }
    ]
  },
  {
    slug: "cbse-schools",
    title: "School ERP for CBSE Affiliated Schools",
    navLabel: "CBSE Schools",
    tagline: "Designed for workflows commonly used by CBSE schools.",
    badge: "CBSE Workflow Alignment",
    targetKeyword: "CBSE school ERP software management system",
    seoTitle: "School ERP for CBSE Schools — Term Exams, Rubrics & NEP 2020 Support",
    seoDescription:
      "Discover the school ERP designed for workflows commonly used by CBSE schools. Automated Term 1/Term 2 assessments, co-scholastic rubrics, 75% attendance alerts, and unified fee management.",
    heroHeadline: "Built for the academic rigor and assessment rhythms of CBSE schools.",
    heroSubheadline:
      "From Term 1 and Term 2 periodic test weightages to co-scholastic 3-point/5-point grading scales, Scholarix OS aligns your academic, administrative, and compliance workflows seamlessly.",
    positioningQuote:
      "Designed for workflows commonly used by CBSE schools: standard mark weightages, co-scholastic descriptors, and student attendance registers that support board expectations.",
    complianceNote:
      "Disclaimer: Scholarix OS is an independent school ERP software platform designed to accommodate assessment, examination, and record-keeping workflows commonly practiced by CBSE-affiliated institutions. Scholarix OS is not affiliated with, endorsed by, or certified by the Central Board of Secondary Education (CBSE).",
    targetAudience: "CBSE-affiliated schools, Senior Secondary institutions, and educational trusts across India.",
    challenges: [
      {
        problem: "Calculating periodic tests, notebook submissions, subject enrichment, and term-end exam weightages manually creates massive clerical workload.",
        resolution: "Configurable CBSE assessment matrix automatically computes final scores according to board-standard weightages (e.g. 5+5+5+80 or custom institutional rubrics)."
      },
      {
        problem: "Generating bilingual report cards with co-scholastic indicators (work education, art education, health & physical education) takes weeks of teacher time.",
        resolution: "One-click generation of board-aligned report cards complete with scholastic marks, co-scholastic descriptors, attendance counts, and school seal."
      },
      {
        problem: "Tracking the mandatory 75% student attendance threshold for board exam eligibility is prone to end-of-year calculation surprises.",
        resolution: "Automated threshold monitoring alerts teachers and parents when a student's attendance drops below 75%, allowing early remedial intervention."
      }
    ],
    pillars: [
      {
        title: "CBSE Assessment Engine",
        desc: "Configure Periodic Tests (PT1, PT2, PT3), Multiple Assessments, Portfolio/Notebooks, Subject Enrichment, and Half-Yearly/Annual examinations with automatic weightage rollup.",
        iconName: "BookOpen",
        stat: "Board-Standard Weights"
      },
      {
        title: "Co-Scholastic 3/5 Point Rubrics",
        desc: "Easily evaluate Work Education, Visual & Performing Arts, Health & Physical Education, and Discipline with standardized descriptive indicators.",
        iconName: "Sparkles",
        stat: "Holistic Progress Card"
      },
      {
        title: "75% Attendance Compliance Pulse",
        desc: "Real-time register tracking flags students dipping under mandatory attendance minimums with proactive alerts to academic coordinators and parents.",
        iconName: "CalendarCheck",
        stat: "Eligibility Guardian"
      },
      {
        title: "OASIS & Board Data Export",
        desc: "Export pre-formatted student demographic data, subject codes, and enrollment registers formatted for official board submission portals without retyping.",
        iconName: "FileSpreadsheet",
        stat: "One-Click Formats"
      }
    ],
    workflow: [
      {
        step: "01",
        title: "Curriculum & Assessment Blueprinting",
        desc: "Define academic terms, subject codes (041 Mathematics, 086 Science, etc.), and examination evaluation schemes aligned to your school's CBSE calendar."
      },
      {
        step: "02",
        title: "Continuous Evaluation & Marks Entry",
        desc: "Subject teachers enter periodic tests, internal assessments, and project marks directly through mobile or desktop with instant range validation."
      },
      {
        step: "03",
        title: "Automated Grade Calculation",
        desc: "The system automatically converts raw scores into 9-point or 8-point grading scales (A1, A2, B1, etc.) and calculates scholastic percentiles."
      },
      {
        step: "04",
        title: "Digital Report Card Publishing",
        desc: "Principals approve report cards in batch. Parents receive authenticated digital report cards with verification QR codes in their mobile portal."
      }
    ],
    metrics: [
      { value: "100%", label: "Weightage Accuracy", subtext: "Automated formula calculation removes human error" },
      { value: "3 Weeks", label: "Saved per Exam Cycle", subtext: "Eliminated manual paper marks tabulation" },
      { value: "0", label: "Attendance Surprises", subtext: "Automated tracking of the 75% attendance criteria" },
      { value: "50,000+", label: "CBSE Report Cards Generated", subtext: "Processed across affiliated institutions" }
    ],
    roleBenefits: [
      {
        role: "CBSE Coordinator & Examination In-Charge",
        benefit: "Configure complex term evaluation policies in minutes and lock teacher marks entry with automated deadline controls.",
        quote: "The report card generation process that used to take our entire faculty 14 late evenings now happens in three clicks."
      },
      {
        role: "Subject Teachers",
        benefit: "Fast marks entry interface with auto-validation for max marks, absent flags, and automatic grade conversions.",
        quote: "Entering periodic test scores is as simple as filling a spreadsheet, but without any fear of formula errors."
      },
      {
        role: "Principals",
        benefit: "Institutional oversight of subject-wise performance dips, teacher syllabus coverage, and class averages across all grades.",
        quote: "I can instantly identify which sections need academic support months before the final board exams begin."
      }
    ],
    relatedFeatures: [
      { slug: "exams-results", title: "Exams & Results Engine", reason: "CBSE assessment matrix and report card builder" },
      { slug: "attendance", title: "Attendance Tracking", reason: "75% mandatory attendance calculation" },
      { slug: "timetable", title: "AI Timetable Generator", reason: "CBSE subject period distributions" }
    ],
    faq: [
      {
        question: "Is Scholarix OS officially certified by the CBSE board?",
        answer: "No. Scholarix OS is an independent management software designed to support the specific examination, evaluation, and documentation workflows commonly used by CBSE-affiliated institutions. CBSE does not endorse third-party ERP vendors."
      },
      {
        question: "Can we customize the report card format to match our school's branding?",
        answer: "Yes. You can customize school crests, affiliations, signatures, student photos, grading scales, co-scholastic indicators, and teacher remarks."
      },
      {
        question: "Does the system support both Primary (CCE / foundational) and Senior Secondary patterns?",
        answer: "Yes. You can configure foundational stage descriptive rubrics for Classes 1–5, 8-point scale for Classes 6–10, and stream-specific subject combinations (Science, Commerce, Humanities) for Classes 11–12."
      },
      {
        question: "How does the system handle subject exemptions and vocational electives?",
        answer: "Scholarix OS supports optional subjects, vocational skill electives (such as Artificial Intelligence or Financial Markets), and special accommodations for students with learning differences."
      }
    ]
  },
  {
    slug: "icse-schools",
    title: "School ERP for ICSE & ISC Schools",
    navLabel: "ICSE / ISC Schools",
    tagline: "Tailored for the curriculum depth, project work, and grading rigor of CISCE.",
    badge: "ICSE & ISC Ready",
    targetKeyword: "ICSE school ERP software management system CISCE",
    seoTitle: "School ERP for ICSE & ISC Schools — Project Work, Groups & Transcripts",
    seoDescription:
      "Manage CISCE academic structures with ease. Scholarix OS handles Group I, II & III subjects, 20% internal assessment project marks, continuous evaluation, and detailed transcripts.",
    heroHeadline: "Precision school management for the curriculum depth of ICSE & ISC.",
    heroSubheadline:
      "Manage subject group selections, 20% internal assessment project scores, English language bifurcations, and rigorous academic records with an ERP platform engineered for CISCE standards.",
    positioningQuote:
      "ICSE demands meticulous documentation of continuous assessments, internal project rubrics, and subject-group combinations. Scholarix OS provides the architectural depth to execute it flawlessly.",
    targetAudience: "ICSE and ISC affiliated schools, Anglo-Indian institutions, and private preparatory academies.",
    challenges: [
      {
        problem: "Managing CISCE's distinct subject grouping rules (Group I compulsory, Group II electives, Group III skill subjects) in standard software is cumbersome.",
        resolution: "Built-in subject grouping rules enforce correct elective choices, prerequisite validations, and stream allocations for Classes 9 to 12."
      },
      {
        problem: "Bifurcated marks for English Language and English Literature, plus 20% project assessments require multi-tiered tabulation sheets.",
        resolution: "Customizable sub-component marks entry automatically averages bifurcated language papers and weights internal project submissions accurately."
      },
      {
        problem: "Comprehensive cumulative transcripts required for overseas college applications take weeks of manual transcription.",
        resolution: "Generate official, multi-year cumulative transcripts with detailed subject breakdowns, co-curricular records, and verifiable digital watermarks."
      }
    ],
    pillars: [
      {
        title: "Subject Grouping Architecture",
        desc: "Seamless configuration of Group I (compulsory), Group II (two subjects from options), and Group III (applied/vocational) schemes with automatic validation.",
        iconName: "Layers",
        stat: "CISCE Structure"
      },
      {
        title: "Internal Assessment Project Vault",
        desc: "Track 20% project work, practical laboratory records, and oral/aural assessments with clear teacher rubrics and external examiner score verification.",
        iconName: "FileCheck2",
        stat: "20% Project Tracking"
      },
      {
        title: "Multi-Tiered Language Evaluation",
        desc: "Handle bifurcated papers effortlessly—combining English 1 (Language) and English 2 (Literature) marks into composite subject grades.",
        iconName: "BookOpen",
        stat: "Bifurcated Papers"
      },
      {
        title: "Comprehensive Transcripts",
        desc: "Produce multi-year academic transcripts with GPA/percentage translations, ideal for ISC students applying to international universities.",
        iconName: "Sparkles",
        stat: "Global Standards"
      }
    ],
    workflow: [
      {
        step: "01",
        title: "Group Selection & Stream Allocation",
        desc: "Students select their Group II and Group III electives for Class 9 or ISC streams for Class 11 via the student portal with automated capacity limits."
      },
      {
        step: "02",
        title: "Project Work & Lab Marks Submission",
        desc: "Teachers log internal project marks, practical assessments, and continuous coursework ratings alongside theoretical unit tests."
      },
      {
        step: "03",
        title: "Automated Composite Marks Rollup",
        desc: "The engine computes composite language grades, applies internal assessment weightages, and formats results according to CISCE standards."
      },
      {
        step: "04",
        title: "Transcript & Performance Analytics",
        desc: "Generate detailed student dossiers highlighting strengths across humanities, sciences, languages, and SUPW (Socially Useful Productive Work)."
      }
    ],
    metrics: [
      { value: "100%", label: "Group Compliance", subtext: "Automated validation of CISCE subject group rules" },
      { value: "4x Faster", label: "Transcript Production", subtext: "Generate 4-year high school transcripts in minutes" },
      { value: "SUPW", label: "Integrated Tracking", subtext: "Grade community service & productive work easily" },
      { value: "20%", label: "Internal Project Tracking", subtext: "Standardized rubric evaluation across all departments" }
    ],
    roleBenefits: [
      {
        role: "Academic Vice-Principal",
        benefit: "Eliminate manual verification of student subject groupings and ensure all CISCE board prerequisites are met well before registration.",
        quote: "Configuring the English 1 and English 2 combination with internal project marks used to be a headache. Scholarix OS makes it completely automatic."
      },
      {
        role: "Department Heads",
        benefit: "Track project completion deadlines, laboratory records, and internal assessment distributions across sections.",
        quote: "Our science and computer application teachers love the ability to grade practical projects directly with descriptive rubrics."
      },
      {
        role: "High School Counselors",
        benefit: "Export pristine transcripts and course summaries formatted for domestic and international university admissions offices.",
        quote: "Producing verified high school transcripts for ISC students applying abroad now takes under two minutes."
      }
    ],
    relatedFeatures: [
      { slug: "exams-results", title: "Exams & Results", reason: "Bifurcated subject calculation and project marks" },
      { slug: "student-management", title: "Student SIS", reason: "Group I, II, III subject tracking and archives" },
      { slug: "reports-analytics", title: "Analytics & Reports", reason: "Multi-year academic trajectory trends" }
    ],
    faq: [
      {
        question: "Does Scholarix OS handle SUPW (Socially Useful Productive Work) evaluations?",
        answer: "Yes. You can record SUPW grades, activity logs, hours completed, and teacher evaluations as required by the CISCE curriculum."
      },
      {
        question: "Can we manage bifurcated papers for Science (Physics, Chemistry, Biology) in Class 9 and 10?",
        answer: "Yes. Scholarix OS supports individual marks entry for Physics, Chemistry, and Biology, and automatically generates composite Science grades with configurable practical marks."
      },
      {
        question: "How are ISC Class 11 and 12 stream requirements managed?",
        answer: "The platform supports custom subject packages across Science, Commerce, and Humanities streams, including 5-subject and 6-subject combinations."
      },
      {
        question: "Can we export internal assessment marks for CISCE portal upload?",
        answer: "Yes, you can export structured spreadsheets matching the exact format required by CISCE portal uploads for internal assessment scores."
      }
    ]
  },
  {
    slug: "state-board-schools",
    title: "School ERP for State Board Schools",
    navLabel: "State Board Schools",
    tagline: "Flexible, configurable workflows tailored for regional state boards & multilingual needs.",
    badge: "High Flexibility & Localization",
    targetKeyword: "State Board school ERP software management system India",
    seoTitle: "School ERP for State Board Schools — Multilingual & Configurable",
    seoDescription:
      "Adaptable school management software for State Board institutions. Supports regional languages, government scholarship registers, flexible fee heads, and localized compliance formats.",
    heroHeadline: "Complete operational flexibility for diverse State Board curricula.",
    heroSubheadline:
      "Whether following Maharashtra SSC, Karnataka KSEAB, Tamil Nadu Samacheer Kalvi, UP Board, or other state curricula, Scholarix OS gives you unmatched flexibility in grading, language, and compliance reporting.",
    positioningQuote:
      "Every state education board has its own unique calendar, fee regulations, scholarship categories, and evaluation rules. Scholarix OS flexes to your state's exact blueprint without rigid restrictions.",
    targetAudience: "State Board affiliated private schools, aided institutions, bilingual schools, and regional education trusts.",
    challenges: [
      {
        problem: "Rigid ERP platforms designed for central boards fail to accommodate regional state board grading scales and evaluation criteria.",
        resolution: "Fully configurable grading scales, passing criteria, grace mark rules, and localized evaluation formats that match state education department directives."
      },
      {
        problem: "Communicating with parents who prefer their native regional language (Hindi, Marathi, Kannada, Tamil, Telugu, Gujarati, etc.).",
        resolution: "Multilingual parent communication portal and SMS notifications supporting regional Indian scripts for announcements, attendance alerts, and fee receipts."
      },
      {
        problem: "Cumbersome manual tracking of state government scholarship schemes, fee concessions, and RTE (Right to Education) quotas.",
        resolution: "Specialized student tags and scholarship accounting ledgers track RTE admissions, government disbursements, and category-wise concessions with complete audit trails."
      }
    ],
    pillars: [
      {
        title: "Configurable State Grading Schemes",
        desc: "Tailor examination formats, semester exams, quarterly assessments, and state board passing rules with absolute customizability.",
        iconName: "Sliders",
        stat: "100% Configurable"
      },
      {
        title: "Regional Language Communication",
        desc: "Send SMS alerts, WhatsApp notices, and fee reminders in regional languages so every family stays fully informed.",
        iconName: "MessageSquare",
        stat: "Multilingual Alerts"
      },
      {
        title: "RTE & Scholarship Management",
        desc: "Manage 25% RTE quotas, government scholarship disbursements, and fee reimbursement claims with compliant documentation.",
        iconName: "ShieldCheck",
        stat: "RTE & Grant Ready"
      },
      {
        title: "Localized Compliance Reports",
        desc: "Generate muster rolls, caste category distributions, and U-DISE+ pre-fill formats required by state education officers.",
        iconName: "FileSpreadsheet",
        stat: "U-DISE+ Pre-Fill"
      }
    ],
    workflow: [
      {
        step: "01",
        title: "State Board Rule Configuration",
        desc: "Set up term schedules, localized subject naming (First Language, Second Language, Third Language), and state passing percentages."
      },
      {
        step: "02",
        title: "RTE & Category Tagging",
        desc: "Tag students under RTE, general, or reserved categories to auto-apply fee exemptions and government grant tracking rules."
      },
      {
        step: "03",
        title: "Multilingual Daily Engagement",
        desc: "Conduct daily attendance and send automated notices in regional vernacular scripts to ensure high parent engagement."
      },
      {
        step: "04",
        title: "State Education Department Audits",
        desc: "Export official muster rolls, general registers (GR), and U-DISE data in seconds whenever education inspectors visit."
      }
    ],
    metrics: [
      { value: "10+", label: "Regional Languages Supported", subtext: "Bilingual notifications & SMS templates" },
      { value: "100%", label: "U-DISE+ Compatibility", subtext: "Rapid export of mandatory statistical records" },
      { value: "0", label: "Calculation Discrepancies", subtext: "Automated tracking of RTE concessions and fees" },
      { value: "30 Min", label: "Muster Roll Generation", subtext: "Replaced weeks of manual handwritten register work" }
    ],
    roleBenefits: [
      {
        role: "School Correspondent & Secretary",
        benefit: "Ensure 100% readiness for annual state education department inspections with instantly generated General Registers (GR).",
        quote: "Our General Register and muster roll audits are completely stress-free now. Every student record is accurate and time-stamped."
      },
      {
        role: "Administrative Office Staff",
        benefit: "Manage complex installment payment structures, scholarship offsets, and cash/UPI receipts from one simple screen.",
        quote: "Handling RTE quota fee adjustments used to take entire ledger pages. Scholarix OS separates concession heads automatically."
      },
      {
        role: "Vernacular Speaking Parents",
        benefit: "Receive school updates, fee notices, and student attendance alerts in their native language directly on their phone.",
        quote: "Receiving text messages in our mother tongue helps our family stay connected with our child's daily school activities."
      }
    ],
    relatedFeatures: [
      { slug: "student-management", title: "Student SIS & General Register", reason: "State board GR records and caste categorization" },
      { slug: "fees", title: "Fee Management", reason: "RTE and scholarship concession ledgers" },
      { slug: "parent-communication", title: "Parent Communication", reason: "Multilingual SMS and WhatsApp broadcasts" }
    ],
    faq: [
      {
        question: "Can we print the official General Register (GR) from Scholarix OS?",
        answer: "Yes. Scholarix OS maintains a permanent digital General Register with serial numbers, previous school details, date of birth in words, caste tags, and TC issue logs."
      },
      {
        question: "How does Scholarix OS help with U-DISE+ data submission?",
        answer: "Our system exports student demographics, teacher qualifications, school infrastructure details, and social category counts pre-formatted to match U-DISE+ input requirements."
      },
      {
        question: "Can we issue Transfer Certificates (TC) in bilingual format?",
        answer: "Yes, you can generate and print Transfer Certificates in English and your state's regional language with customized serial number series."
      },
      {
        question: "Does the software support split fee payments and partial cash collections?",
        answer: "Yes. We support flexible payment modes including cash, cheque, DD, and online UPI with instant physical or digital receipts."
      }
    ]
  },
  {
    slug: "multi-campus-schools",
    title: "School ERP for Multi-Campus Groups & Chains",
    navLabel: "Multi-Campus Groups & Chains",
    tagline: "Centralized institutional command center for multi-branch school networks.",
    badge: "Enterprise Multi-Campus Command",
    targetKeyword: "multi campus school management software ERP group of schools",
    seoTitle: "Multi-Campus School ERP Software — Centralized Command & Analytics",
    seoDescription:
      "Scale your educational group with Scholarix OS. Centralized trust-level financials, campus-isolated permissions, consolidated executive reporting, and cross-branch teacher management.",
    heroHeadline: "Command all campuses from one unified executive cockpit.",
    heroSubheadline:
      "Empower trustees, directors, and central leadership with real-time financial rollups, standardized academic benchmarks, and cross-branch visibility—while giving each individual campus autonomous daily execution.",
    positioningQuote:
      "Managing 3, 10, or 50 campuses shouldn't mean 50 disconnected databases. Scholarix OS delivers enterprise multi-tenancy with unified trust-level governance.",
    targetAudience: "School chains, educational trusts, franchise school networks, and multi-branch academy systems.",
    challenges: [
      {
        problem: "Trust leaders and board members wait weeks for branch accountants to reconcile consolidated fee collections and outstanding dues.",
        resolution: "Real-time executive dashboard provides live trust-level cashflow velocity, fee aging analysis, and bank reconciliation across all campuses simultaneously."
      },
      {
        problem: "Lack of academic standardization leads to inconsistent grading standards, uneven syllabus pacing, and fragmented parent communication.",
        resolution: "Central curriculum blueprinting allows academic directors to push standardized timetables, assessment rubrics, and circulars across all branches in one click."
      },
      {
        problem: "Data leakage and lack of role-based security between different branches or franchise units.",
        resolution: "Strict multi-tenant role-based access control ensures campus staff only access their branch data, while central leadership maintains group-wide oversight."
      }
    ],
    pillars: [
      {
        title: "Trust-Level Financial Consolidation",
        desc: "Instant roll-up of fee collections, outstanding dues, concession audits, and vendor payments across every campus in your network.",
        iconName: "BarChart3",
        stat: "Live Group Cashflow"
      },
      {
        title: "Campus-Isolated Role Permissions",
        desc: "Granular access management ensures branch principals and clerks only see their local campus, with audit logging on every action.",
        iconName: "ShieldAlert",
        stat: "Role-Based RBAC"
      },
      {
        title: "Standardized Academic Blueprints",
        desc: "Push standardized exam schedules, grading rubrics, report card templates, and academic calendars across all network branches.",
        iconName: "BookOpen",
        stat: "Curriculum Parity"
      },
      {
        title: "Cross-Campus Student & Staff Mobility",
        desc: "Transfer students between campuses with zero data loss or re-registration. Deploy roving faculty and substitute teachers with shared profiles.",
        iconName: "Users",
        stat: "1-Click Transfers"
      }
    ],
    workflow: [
      {
        step: "01",
        title: "Central Group Setup & Policy Matrix",
        desc: "Set group-wide accounting charts, academic policies, fee structures, and branding rules from the central headquarters portal."
      },
      {
        step: "02",
        title: "Autonomous Campus Operations",
        desc: "Each campus runs its own daily roll calls, fee collections, bus routing, and examinations in an isolated, high-speed workspace."
      },
      {
        step: "03",
        title: "Real-Time Data Aggregation",
        desc: "Every transaction and attendance tick instantly feeds into the central database, powering live trust dashboards and alerts."
      },
      {
        step: "04",
        title: "Executive Strategic Reviews",
        desc: "Trustees compare campus performance metrics, enrollment conversion velocity, and fee recovery rates to drive strategic growth."
      }
    ],
    metrics: [
      { value: "100%", label: "Real-Time Group Visibility", subtext: "Zero delay in trust-level financial consolidation" },
      { value: "50+ Campuses", label: "Scalable Architecture", subtext: "Built on high-concurrency cloud infrastructure" },
      { value: "98% Faster", label: "Inter-Branch Student Transfers", subtext: "Complete student file moved in under 60 seconds" },
      { value: "1 Click", label: "Cross-Campus Circulars", subtext: "Publish policy updates to 20,000+ parents at once" }
    ],
    roleBenefits: [
      {
        role: "Managing Trustee / CEO",
        benefit: "Access the Group Command Center on your tablet to see today's collection across all 12 campuses before breakfast.",
        quote: "Scholarix OS gave our board complete visibility. We identified fee collection bottlenecks in branch 4 and fixed them in 48 hours."
      },
      {
        role: "Chief Academic Officer (CAO)",
        benefit: "Ensure syllabus pacing and examination standards remain consistent whether a student is at the flagship campus or a new suburban branch.",
        quote: "We can deploy our flagship curriculum blueprint to five newly launched campuses with zero operational friction."
      },
      {
        role: "Campus Principals",
        benefit: "Run your school with autonomy while enjoying enterprise infrastructure, shared question banks, and IT support provided by head office.",
        quote: "We have our own local control without being bogged down by server maintenance or custom software updates."
      }
    ],
    relatedFeatures: [
      { slug: "reports-analytics", title: "Executive Analytics & BI", reason: "Multi-branch comparative analytics and financial rollups" },
      { slug: "fees", title: "Enterprise Fee Management", reason: "Centralized banking reconciliation and fee aging" },
      { slug: "admissions", title: "Admissions Pipeline CRM", reason: "Track inquiry conversion ratios across all campuses" }
    ],
    faq: [
      {
        question: "Can branch staff view records from other sister campuses?",
        answer: "No. Scholarix OS enforces strict tenant isolation. Branch employees only have visibility into their assigned campus unless explicitly granted multi-campus rights by the super administrator."
      },
      {
        question: "How are inter-campus student transfers handled?",
        answer: "With a single transfer approval, the student's complete academic record, fee history, and medical file are moved seamlessly to the destination campus without re-entering data."
      },
      {
        question: "Can different campuses operate with different fee structures or academic boards?",
        answer: "Yes. Campus A can be a CBSE branch with quarterly fees, while Campus B can be an ICSE branch with monthly fees. Scholarix OS accommodates heterogeneous configurations within the same group."
      },
      {
        question: "Does Scholarix OS integrate with our group's central accounting software (e.g. Tally, SAP)?",
        answer: "Yes. We offer automated ledger export and API connectors that sync daily collection summaries directly into your central ERP or accounting package."
      }
    ]
  }
];

export function getSolutionBySlug(slug: string): SolutionItem | undefined {
  return SOLUTIONS.find((s) => s.slug === slug);
}
