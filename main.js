 
const Courses = [

 

// IT  COURSE LIST
  // Semester 1
  { dep: "IT", semester: 1, course: "Language I", credits: 4 },
  { dep: "IT", semester: 1, course: "English I", credits: 4 },
  { dep: "IT", semester: 1, course: "Core I: Computing Fundamentals and C Programming", credits: 4 },
  { dep: "IT", semester: 1, course: "Core II: Digital Fundamentals and Computer Architecture", credits: 4 },
  { dep: "IT", semester: 1, course: "Core Practical I: Programming Lab - C", credits: 4 },
  { dep: "IT", semester: 1, course: "Allied I: Mathematical Structures for Computer Science", credits: 4 },
  { dep: "IT", semester: 1, course: "Environmental Studies", credits: 2 },

  // Semester 2
  { dep: "IT", semester: 2, course: "Language II", credits: 4 },
  { dep: "IT", semester: 2, course: "English II", credits: 4 },
  { dep: "IT", semester: 2, course: "Core III: C++ Programming", credits: 4 },
  { dep: "IT", semester: 2, course: "Core Practical II: Programming Lab - C++", credits: 4 },
  { dep: "IT", semester: 2, course: "Core Practical III: Internet Basics", credits: 2 },
  { dep: "IT", semester: 2, course: "Allied II: Discrete Mathematics", credits: 4 },
  { dep: "IT", semester: 2, course: "Value Education: Human Rights", credits: 2 },

  // Semester 3
  { dep: "IT", semester: 3, course: "Language III", credits: 4 },
  { dep: "IT", semester: 3, course: "English III", credits: 4 },
  { dep: "IT", semester: 3, course: "Core IV: Data Structures", credits: 4 },
  { dep: "IT", semester: 3, course: "Core V: Java Programming", credits: 4 },
  { dep: "IT", semester: 3, course: "Core Practical IV: Programming Lab - Java", credits: 4 },
  { dep: "IT", semester: 3, course: "Allied III: Microprocessor & ALP", credits: 4 },
  { dep: "IT", semester: 3, course: "Skill Based Subject I: Introduction to Web Design", credits: 2 },

  // Semester 4
  { dep: "IT", semester: 4, course: "Language IV", credits: 4 },
  { dep: "IT", semester: 4, course: "English IV", credits: 4 },
  { dep: "IT", semester: 4, course: "Core VI: System Software and Operating System", credits: 4 },
  { dep: "IT", semester: 4, course: "Core VII: Linux and Shell Programming", credits: 4 },
  { dep: "IT", semester: 4, course: "Core Practical V: Linux and Shell Programming Lab", credits: 3 },
  { dep: "IT", semester: 4, course: "Allied IV: Business Accounting", credits: 2 },
  { dep: "IT", semester: 4, course: "Skill Based Subject II: HTML, XML and JavaScript Lab", credits: 2 },

  // Semester 5
  { dep: "IT", semester: 5, course: "Core VIII: RDBMS & Oracle", credits: 4 },
  { dep: "IT", semester: 5, course: "Core IX: Visual Basic", credits: 4 },
  { dep: "IT", semester: 5, course: "Core Practical VI: VB & Oracle Lab", credits: 3 },
  { dep: "IT", semester: 5, course: "Elective I: .Net Programming", credits: 4 },
  { dep: "IT", semester: 5, course: "Elective II: Soft Computing / Business Intelligence", credits: 4 },
  { dep: "IT", semester: 5, course: "Skill Based Subject III: .Net Lab", credits: 2 },

  // Semester 6
  { dep: "IT", semester: 6, course: "Core X: Graphics & Multimedia", credits: 4 },
  { dep: "IT", semester: 6, course: "Core XI: Project Work Lab", credits: 4 },
  { dep: "IT", semester: 6, course: "Core Practical VII: Graphics & Multimedia Lab", credits: 3 },
  { dep: "IT", semester: 6, course: "Elective III: Network Security / Mobile Computing / Python Programming", credits: 4 },
  { dep: "IT", semester: 6, course: "Elective IV: IoT / Cloud Computing / E-Commerce", credits: 4 },
  { dep: "IT", semester: 6, course: "Skill Based Subject IV: .Net Lab", credits: 2 },



  //BA (English) COURSE LIST
  // First Semester
  { dep: "BA English", semester: 1, course: "Tamil I", credits: 4 },
  { dep: "BA English", semester: 1, course: "English I", credits: 4 },
  { dep: "BA English", semester: 1, course: "Core I – Prose I", credits: 3 },
  { dep: "BA English", semester: 1, course: "Core II – Fiction I", credits: 3 },
  { dep: "BA English", semester: 1, course: "Allied I – Social History of England", credits: 4 },

  // Second Semester
  { dep: "BA English", semester: 2, course: "Tamil II", credits: 4 },
  { dep: "BA English", semester: 2, course: "English II", credits: 4 },
  { dep: "BA English", semester: 2, course: "Core III – Poetry I", credits: 4 },
  { dep: "BA English", semester: 2, course: "Core IV – Drama I", credits: 4 },
  { dep: "BA English", semester: 2, course: "Allied II – History of English Literature", credits: 4 },

  // Third Semester
  { dep: "BA English", semester: 3, course: "Tamil III", credits: 4 },
  { dep: "BA English", semester: 3, course: "English III", credits: 4 },
  { dep: "BA English", semester: 3, course: "Core V – Prose II", credits: 4 },
  { dep: "BA English", semester: 3, course: "Core VI – Fiction II", credits: 4 },
  { dep: "BA English", semester: 3, course: "Allied III – Literary Forms", credits: 4 },

  // Fourth Semester
  { dep: "BA English", semester: 4, course: "Tamil IV", credits: 4 },
  { dep: "BA English", semester: 4, course: "English IV", credits: 4 },
  { dep: "BA English", semester: 4, course: "Core VII – Poetry II", credits: 4 },
  { dep: "BA English", semester: 4, course: "Core VIII – Drama II", credits: 4 },
  { dep: "BA English", semester: 4, course: "Allied IV – Literary Criticism", credits: 4 },

  // Fifth Semester
  { dep: "BA English", semester: 5, course: "Core IX – Shakespeare – I", credits: 4 },
  { dep: "BA English", semester: 5, course: "Core X – Indian Writing in English", credits: 4 },
  { dep: "BA English", semester: 5, course: "Core XI – American Literature", credits: 4 },
  { dep: "BA English", semester: 5, course: "Core XII – Commonwealth Literature", credits: 4 },
  { dep: "BA English", semester: 5, course: "Elective I – English for Competitive Exams", credits: 4 },

  // Sixth Semester
  { dep: "BA English", semester: 6, course: "Core XIII – Shakespeare", credits: 4 },
  { dep: "BA English", semester: 6, course: "Core XIV – Intensive Study of an Author", credits: 4 },
  { dep: "BA English", semester: 6, course: "Core XV – Indian Literature in English Translation", credits: 4 },
  { dep: "BA English", semester: 6, course: "Elective II – Communicative English", credits: 4 },
  { dep: "BA English", semester: 6, course: "Elective III – Introduction to Linguistics", credits: 4 },

  // BBA COURSE LIST
  // SEMESTER I
  {dep: "BBA IB", semester: 1, course: "Language I", credits: 4},
  {dep: "BBA IB", semester: 1, course: "English I", credits: 4},
  {dep: "BBA IB", semester: 1, course: "Core I – Principles of Management", credits: 4},
  {dep: "BBA IB", semester: 1, course: "Core II – Basics of Business and Business Environment", credits: 3},
  {dep: "BBA IB", semester: 1, course: "Allied Paper I – Mathematics and Statistics for Management", credits: 4},
  {dep: "BBA IB", semester: 1, course: "Environmental Studies", credits: 2},

  // SEMESTER II
  {dep: "BBA IB", semester: 2, course: "Language II", credits: 4},
  {dep: "BBA IB", semester: 2, course: "English II", credits: 2},
  {dep: "BBA IB", semester: 2, course: "Skill Based Subject – Naan Mudhalvan: Language Proficiency for Employability", credits: 2},
  {dep: "BBA IB", semester: 2, course: "Core III – Organizational Behavior", credits: 3},
  {dep: "BBA IB", semester: 2, course: "Core IV – Economics for Executives", credits: 4},
  {dep: "BBA IB", semester: 2, course: "Allied Paper II – Quantitative Techniques for Management", credits: 4},
  {dep: "BBA IB", semester: 2, course: "Value Education – Human Rights", credits: 2},

  // SEMESTER III
  {dep: "BBA IB", semester: 3, course: "Language III", credits: 4},
  {dep: "BBA IB", semester: 3, course: "English III", credits: 4},
  {dep: "BBA IB", semester: 3, course: "Core V – Financial Accounting", credits: 3},
  {dep: "BBA IB", semester: 3, course: "Core VI – Production and Materials Management", credits: 3},
  {dep: "BBA IB", semester: 3, course: "Core VII – Marketing Management", credits: 3},
  {dep: "BBA IB", semester: 3, course: "Core VIII – PC Software (MS Office) – Practical", credits: 2},
  {dep: "BBA IB", semester: 3, course: "Allied III – Business Law", credits: 3},
  {dep: "BBA IB", semester: 3, course: "Tamil / Advanced Tamil / Non-major Elective I / Yoga for Human Excellence / Women’s Rights / Constitution of India", credits: 2},

  // SEMESTER IV
  {dep: "BBA IB", semester: 4, course: "Language IV", credits: 4},
  {dep: "BBA IB", semester: 4, course: "English IV", credits: 4},
  {dep: "BBA IB", semester: 4, course: "Core IX – Human Resource Management", credits: 3},
  {dep: "BBA IB", semester: 4, course: "Core X – Financial Management", credits: 3},
  {dep: "BBA IB", semester: 4, course: "Core XI – Financial Accounting Package – Tally (Practical only)", credits: 3},
  {dep: "BBA IB", semester: 4, course: "Allied IV – Taxation Law and Practice", credits: 3},
  {dep: "BBA IB", semester: 4, course: "Skill Based Subject 2 – Naan Mudhalvan – Office Fundamentals", credits: 2},
  {dep: "BBA IB", semester: 4, course: "Tamil / Advanced Tamil / Non-major Elective II – General Awareness", credits: 2},

  // SEMESTER V
  {dep: "BBA IB", semester: 5, course: "Core XII – Cost & Management Accounting", credits: 4},
  {dep: "BBA IB", semester: 5, course: "Core XIII – Research Methods for Management", credits: 4},
  {dep: "BBA IB", semester: 5, course: "Core XIV – International Marketing Management", credits: 4},
  {dep: "BBA IB", semester: 5, course: "Core XV – International Strategic Management", credits: 4},
  {dep: "BBA IB", semester: 5, course: "Skill Enhancer: Institutional Training", credits: 2},
  {dep: "BBA IB", semester: 5, course: "Elective I", credits: 3},
  {dep: "BBA IB", semester: 5, course: "Skill Based Subject 3 – Campus to Corporate", credits: 3},

  // SEMESTER VI
  {dep: "BBA IB", semester: 6, course: "Core XVI – Entrepreneurship and Small Business Management", credits: 4},
  {dep: "BBA IB", semester: 6, course: "Core XVII – Foreign Exchange Management", credits: 4},
  {dep: "BBA IB", semester: 6, course: "Core XVIII – Foreign Trade Procedure and Documentation", credits: 4},
  {dep: "BBA IB", semester: 6, course: "Elective II", credits: 3},
  {dep: "BBA IB", semester: 6, course: "Elective III", credits: 3},
  {dep: "BBA IB", semester: 6, course: "Skill Based Subject 4 – Soft Skills for Business", credits: 3},
  {dep: "BBA IB", semester: 6, course: "Skill Based Subject 5 – Naan Mudhalvan – Fintech Course", credits: 2},
  {dep: "BBA IB", semester: 6, course: "Extension Activities", credits: 2},

// B.Com COURSE LIST
   // Semester I
  { dep: "B.Com(CA)", semester: 1, course: "Language I", credits: 4 },
  { dep: "B.Com(CA)", semester: 1, course: "English I", credits: 4 },
  { dep: "B.Com(CA)", semester: 1, course: "Financial Accounting I", credits: 4 },
  { dep: "B.Com(CA)", semester: 1, course: "Principles of Management", credits: 4 },
  { dep: "B.Com(CA)", semester: 1, course: "Business Economics", credits: 4 },
  { dep: "B.Com(CA)", semester: 1, course: "Environmental Studies", credits: 2 },

  // Semester II
  { dep: "B.Com(CA)", semester: 2, course: "Language II", credits: 4 },
  { dep: "B.Com(CA)", semester: 2, course: "English II", credits: 2 },
  { dep: "B.Com(CA)", semester: 2, course: "Effective English", credits: 2 },
  { dep: "B.Com(CA)", semester: 2, course: "Financial Accounting II", credits: 4 },
  { dep: "B.Com(CA)", semester: 2, course: "Database Management System (Practical)", credits: 4 },
  { dep: "B.Com(CA)", semester: 2, course: "Business Law", credits: 4 },
  { dep: "B.Com(CA)", semester: 2, course: "Value Education – Human Rights", credits: 2 },

  // Semester III
  { dep: "B.Com(CA)", semester: 3, course: "Language III", credits: 4 },
  { dep: "B.Com(CA)", semester: 3, course: "English III", credits: 4 },
  { dep: "B.Com(CA)", semester: 3, course: "Corporate Accounting I", credits: 4 },
  { dep: "B.Com(CA)", semester: 3, course: "Visual Basic (Practical)", credits: 4 },
  { dep: "B.Com(CA)", semester: 3, course: "Business Communication", credits: 3 },
  { dep: "B.Com(CA)", semester: 3, course: "Actuarial Statistics", credits: 2 },
  { dep: "B.Com(CA)", semester: 3, course: "Tamil / Advanced Tamil / Non-major elective I", credits: 2 },
  { dep: "B.Com(CA)", semester: 3, course: "Microsoft Office Essentials", credits: 2 },

  // Semester IV
  { dep: "B.Com(CA)", semester: 4, course: "Language IV", credits: 4 },
  { dep: "B.Com(CA)", semester: 4, course: "English IV", credits: 4 },
  { dep: "B.Com(CA)", semester: 4, course: "Corporate Accounting II", credits: 4 },
  { dep: "B.Com(CA)", semester: 4, course: "Object Oriented Programming with C++ (Theory)", credits: 4 },
  { dep: "B.Com(CA)", semester: 4, course: "Human Resource Management", credits: 3 },
  { dep: "B.Com(CA)", semester: 4, course: "Computer Applications: C++ (Practical)", credits: 2 },
  { dep: "B.Com(CA)", semester: 4, course: "Office Fundamentals", credits: 2 },
  { dep: "B.Com(CA)", semester: 4, course: "Tamil / Advanced Tamil / Non-major elective II", credits: 2 },

  // Semester V
  { dep: "B.Com(CA)", semester: 5, course: "Cost Accounting", credits: 4 },
  { dep: "B.Com(CA)", semester: 5, course: "Principles of Auditing", credits: 4 },
  { dep: "B.Com(CA)", semester: 5, course: "Income Tax Law and Practice I", credits: 4 },
  { dep: "B.Com(CA)", semester: 5, course: "Computer Applications: GST with Tally – I (Practical)", credits: 4 },
  { dep: "B.Com(CA)", semester: 5, course: "Elective I", credits: 4 },
  { dep: "B.Com(CA)", semester: 5, course: "Basics of Excel (Practical)", credits: 2 },
  { dep: "B.Com(CA)", semester: 5, course: "Banking, Lending and NBFC Products and Services – I", credits: 2 },

  // Semester VI
  { dep: "B.Com(CA)", semester: 6, course: "Management Accounting", credits: 4 },
  { dep: "B.Com(CA)", semester: 6, course: "Income Tax Law and Practice II", credits: 4 },
  { dep: "B.Com(CA)", semester: 6, course: "Web Design (Theory)", credits: 3 },
  { dep: "B.Com(CA)", semester: 6, course: "Elective II", credits: 3 },
  { dep: "B.Com(CA)", semester: 6, course: "Elective III", credits: 3 },
  { dep: "B.Com(CA)", semester: 6, course: "Computer Applications: GST with Tally – II (Practical)", credits: 3 },
  { dep: "B.Com(CA)", semester: 6, course: "Intellectual Property Rights", credits: 2 },
  { dep: "B.Com(CA)", semester: 6, course: "Project Based Learning", credits: 2 },
  { dep: "B.Com(CA)", semester: 6, course: "Extension Activities", credits: 2 },

  // B.Com PA COURSE LIST
 // First Semester
  {dep: "B.Com PA", semester: 1, course: "Language I", credits: 4},
  {dep: "B.Com PA", semester: 1, course: "English I", credits: 4},
  {dep: "B.Com PA", semester: 1, course: "Core I – Principles of Accountancy", credits: 4},
  {dep: "B.Com PA", semester: 1, course: "Core II – Introduction to Information Technology", credits: 4},
  {dep: "B.Com PA", semester: 1, course: "Allied Paper I : Mathematics for Business", credits: 4},
  {dep: "B.Com PA", semester: 1, course: "Core IV: Computer Applications Practical-I (MS Office)", credits: 4},
  {dep: "B.Com PA", semester: 1, course: "Environmental Studies", credits: 2},

  // Second Semester
  {dep: "B.Com PA", semester: 2, course: "Language II", credits: 4},
  {dep: "B.Com PA", semester: 2, course: "English II", credits: 4},
  {dep: "B.Com PA", semester: 2, course: "Core III – Mercantile Law", credits: 4},
  {dep: "B.Com PA", semester: 2, course: "Core IV – Computer Application Practical-I (MS Office)", credits: 4},
  {dep: "B.Com PA", semester: 2, course: "Allied Paper II – Statistics for Business", credits: 4},
  {dep: "B.Com PA", semester: 2, course: "Value Education – Human Rights", credits: 2},

  // Third Semester
  {dep: "B.Com PA", semester: 3, course: "Core V – Industrial Law", credits: 4},
  {dep: "B.Com PA", semester: 3, course: "Core VI – Strategic Management", credits: 4},
  {dep: "B.Com PA", semester: 3, course: "Core VII – Cost Accounting", credits: 4},
  {dep: "B.Com PA", semester: 3, course: "Allied III – Managerial Economics", credits: 4},
  {dep: "B.Com PA", semester: 3, course: "Core VIII – Computer Applications Practical-II (Oracle)", credits: 0},
  {dep: "B.Com PA", semester: 3, course: "Skill Based Subject 1 – Principles of Marketing", credits: 3},
  {dep: "B.Com PA", semester: 3, course: "Tamil @ / Advanced Tamil / Non-Major Elective: Yoga for Human Excellence / Women’s Rights / Constitution of India", credits: 2},

  // Fourth Semester
  {dep: "B.Com PA", semester: 4, course: "Core IX – Advanced Accounting-I", credits: 4},
  {dep: "B.Com PA", semester: 4, course: "Core X – Management Accounting", credits: 4},
  {dep: "B.Com PA", semester: 4, course: "Core XI – Executive Business Communication", credits: 4},
  {dep: "B.Com PA", semester: 4, course: "Core XII – Computer Applications Practical-II (C++)", credits: 4},
  {dep: "B.Com PA", semester: 4, course: "Allied IV – Principles of Management", credits: 4},
  {dep: "B.Com PA", semester: 4, course: "Skill Based Subject 2 – Company Law", credits: 3},
  {dep: "B.Com PA", semester: 4, course: "Tamil @ / Advanced Tamil / Non-Major Elective II – General Awareness", credits: 2},

  // Fifth Semester
  {dep: "B.Com PA", semester: 5, course: "Core XIII – Advanced Accounting-II", credits: 4},
  {dep: "B.Com PA", semester: 5, course: "Core XIV – Auditing and Assurance – I", credits: 4},
  {dep: "B.Com PA", semester: 5, course: "Core XV – Principles of Auditing", credits: 4},
  {dep: "B.Com PA", semester: 5, course: "Core XVI – Direct Tax-I", credits: 4},
  {dep: "B.Com PA", semester: 5, course: "Core XVII – Direct Tax-II", credits: 4},
  {dep: "B.Com PA", semester: 5, course: "Elective-I", credits: 2},
  {dep: "B.Com PA", semester: 5, course: "Skill Based Subject 3 – Banking and Insurance Law", credits: 3},

  // Sixth Semester
  {dep: "B.Com PA", semester: 6, course: "Core XVII – Corporate Accounting", credits: 4},
  {dep: "B.Com PA", semester: 6, course: "Core XIX – Auditing and Assurance-II", credits: 4},
  {dep: "B.Com PA", semester: 6, course: "Core XX – Indirect Taxes", credits: 4},
  {dep: "B.Com PA", semester: 6, course: "Elective-II", credits: 4},
  {dep: "B.Com PA", semester: 6, course: "Elective-III", credits: 4},
  {dep: "B.Com PA", semester: 6, course: "Skill Based Subject 4 – Cyber Law", credits: 3},
  {dep: "B.Com PA", semester: 6, course: "Extension Activities", credits: 2},
  

// BCA COURSE LIST
 
  {dep: "BCA", semester: 1, course: "Language I", credits: 4},
  {dep: "BCA", semester: 1, course: "English I", credits: 4},
  {dep: "BCA", semester: 1, course: "Core 1: Computing Fundamentals and C Programming", credits: 4},
  {dep: "BCA", semester: 1, course: "Core 2: Digital Fundamentals and Computer Architecture", credits: 4},
  {dep: "BCA", semester: 1, course: "Core Lab 1: Programming Lab-C", credits: 4},
  {dep: "BCA", semester: 1, course: "Allied 1: Mathematical Structures for Computer Science", credits: 4},
  {dep: "BCA", semester: 1, course: "Environmental Studies", credits: 2},

  {dep: "BCA", semester: 2, course: "Language II", credits: 4},
  {dep: "BCA", semester: 2, course: "English II", credits: 2},
  {dep: "BCA", semester: 2, course: "Core 3: C++ Programming", credits: 4},
  {dep: "BCA", semester: 2, course: "Core Lab 2: Programming Lab-C++", credits: 4},
  {dep: "BCA", semester: 2, course: "Core 8: Internet Basics", credits: 2},
  {dep: "BCA", semester: 2, course: "Allied 2: Discrete Mathematics", credits: 4},
  {dep: "BCA", semester: 2, course: "Value Education – Human Rights", credits: 2},

  {dep: "BCA", semester: 3, course: "Language III", credits: 4},
  {dep: "BCA", semester: 3, course: "English III", credits: 2},
  {dep: "BCA", semester: 3, course: "Core 4: Data Structures", credits: 3},
  {dep: "BCA", semester: 3, course: "Core 5: Java Programming", credits: 3},
  {dep: "BCA", semester: 3, course: "Core Lab 4: Programming Lab-Java", credits: 2},
  {dep: "BCA", semester: 3, course: "Allied 3: Computer Based Optimization Techniques", credits: 2},
  {dep: "BCA", semester: 3, course: "Skill Based Subject 1: Web Programming", credits: 3},
  {dep: "BCA", semester: 3, course: "Non-Major Elective I (Yoga for Human Excellence / Women’s Rights)", credits: 2},

  {dep: "BCA", semester: 4, course: "Language IV", credits: 4},
  {dep: "BCA", semester: 4, course: "English IV", credits: 2},
  {dep: "BCA", semester: 4, course: "Core 6: System Software and Operating System", credits: 3},
  {dep: "BCA", semester: 4, course: "Core 7: Linux and Shell Programming", credits: 3},
  {dep: "BCA", semester: 4, course: "Core Lab 5: Linux and Shell Programming Lab", credits: 2},
  {dep: "BCA", semester: 4, course: "Allied 4: Business Accounting", credits: 2},
  {dep: "BCA", semester: 4, course: "Skill Based Subject 2: Lab-Web Programming", credits: 2},
  {dep: "BCA", semester: 4, course: "Non-Major Elective II (General Awareness)", credits: 2},

  {dep: "BCA", semester: 5, course: "Core 8: RDBMS & Oracle", credits: 4},
  {dep: "BCA", semester: 5, course: "Core 9: Visual Basic", credits: 4},
  {dep: "BCA", semester: 5, course: "Core Lab 6: Programming Lab-VB & Oracle", credits: 4},
  {dep: "BCA", semester: 5, course: "Elective I: Introduction to Compiler Design / PHP & Scripting Language / PYTHON Programming", credits: 4},
  {dep: "BCA", semester: 5, course: "Skill Based Subject 3: CASE Tools Concepts and Applications", credits: 3},

  {dep: "BCA", semester: 6, course: "Core 10: Graphics & Multimedia", credits: 4},
  {dep: "BCA", semester: 6, course: "Core 11: Project Work Lab", credits: 4},
  {dep: "BCA", semester: 6, course: "Core 12: Programming Lab – Graphics & Multimedia", credits: 3},
  {dep: "BCA", semester: 6, course: "Elective II: Computer Networks / Dot Net Programming / Distributed Computing", credits: 4},
  {dep: "BCA", semester: 6, course: "Elective III: Internet of Things (IoT) / Web Services / Software Testing", credits: 4},
  {dep: "BCA", semester: 6, course: "Skill Based Subject 4: CASE Tools Lab", credits: 3},
  {dep: "BCA", semester: 6, course: "Extension Activities", credits: 2},
 
//B.Sc CS COURSE LIST
  // Semester I
  { dep: "Maths", semester: 1, course: "Language I", credits: 4 },
  { dep: "Maths", semester: 1, course: "English I", credits: 4 },
  { dep: "Maths", semester: 1, course: "Core Paper I - Classical Algebra", credits: 4 },
  { dep: "Maths", semester: 1, course: "Core Paper II - Calculus", credits: 4 },
  { dep: "Maths", semester: 1, course: "Allied A: Paper I", credits: 4 },
  { dep: "Maths", semester: 1, course: "Environmental Studies", credits: 2 },

  // Semester II
  { dep: "Maths", semester: 2, course: "Language II", credits: 4 },
  { dep: "Maths", semester: 2, course: "English II", credits: 4 },
  { dep: "Maths", semester: 2, course: "Effective English: Language Proficiency for Employability", credits: 2 },
  { dep: "Maths", semester: 2, course: "Core Paper III - Analytical Geometry", credits: 4 },
  { dep: "Maths", semester: 2, course: "Core Paper IV - Trigonometry, Vector Calculus and Fourier Series", credits: 4 },
  { dep: "Maths", semester: 2, course: "Allied A: Paper II", credits: 4 },
  { dep: "Maths", semester: 2, course: "Value Education – Human Rights", credits: 2 },

  // Semester III
  { dep: "Maths", semester: 3, course: "Language III", credits: 4 },
  { dep: "Maths", semester: 3, course: "English III", credits: 4 },
  { dep: "Maths", semester: 3, course: "Core Paper V - Differential Equations and Laplace Transforms", credits: 4 },
  { dep: "Maths", semester: 3, course: "Core Paper VI - Statics", credits: 4 },
  { dep: "Maths", semester: 3, course: "Allied B: Paper I", credits: 3 },
  { dep: "Maths", semester: 3, course: "Skill Based Subject - Operations Research I", credits: 2 },
  { dep: "Maths", semester: 3, course: "Tamil**/Advanced Tamil** OR Non-major Elective I", credits: 2 },

  // Semester IV
  { dep: "Maths", semester: 4, course: "Language IV", credits: 4 },
  { dep: "Maths", semester: 4, course: "English IV", credits: 4 },
  { dep: "Maths", semester: 4, course: "Core Paper VII - Dynamics", credits: 4 },
  { dep: "Maths", semester: 4, course: "Core Paper VIII - Programming in C", credits: 4 },
  { dep: "Maths", semester: 4, course: "Programming in C Practical", credits: 1 },
  { dep: "Maths", semester: 4, course: "Allied B: Paper II (Theory)", credits: 3 },
  { dep: "Maths", semester: 4, course: "Allied B: Paper II (Practical)", credits: 2 },
  { dep: "Maths", semester: 4, course: "Skill Based Subject - Operations Research II", credits: 2 },
  { dep: "Maths", semester: 4, course: "Office Fundamentals: Digital Skills for Employability", credits: 2 },
  { dep: "Maths", semester: 4, course: "Tamil**/Advanced Tamil** OR Non-major Elective II", credits: 2 },

  // Semester V
  { dep: "Maths", semester: 5, course: "Core Paper IX - Real Analysis I", credits: 4 },
  { dep: "Maths", semester: 5, course: "Core Paper X - Complex Analysis I", credits: 4 },
  { dep: "Maths", semester: 5, course: "Core Paper XI - Modern Algebra I", credits: 4 },
  { dep: "Maths", semester: 5, course: "Core Paper XII - Discrete Mathematics", credits: 4 },
  { dep: "Maths", semester: 5, course: "Elective I", credits: 3 },
  { dep: "Maths", semester: 5, course: "Skill Based Subject - Operations Research III", credits: 2 },

  // Semester VI
  { dep: "Maths", semester: 6, course: "Core Paper XIII - Real Analysis II", credits: 4 },
  { dep: "Maths", semester: 6, course: "Core Paper XIV - Complex Analysis II", credits: 4 },
  { dep: "Maths", semester: 6, course: "Core Paper XV - Modern Algebra II", credits: 4 },
  { dep: "Maths", semester: 6, course: "Elective II", credits: 3 },
  { dep: "Maths", semester: 6, course: "Elective III", credits: 4 },
  { dep: "Maths", semester: 6, course: "Skill Based Subject - Operations Research IV", credits: 2 },
  { dep: "Maths", semester: 6, course: "Project Based Learning / Data Analytics", credits: 2 },
  { dep: "Maths", semester: 6, course: "Extension Activities / Swachh Bharath", credits: 2 },
  
  //BSc AI & DS COURSE LIST
  // Semester 1
  {dep: "AI&DS", semester: 1, course: "Language I", credits: 4},
  {dep: "AI&DS", semester: 1, course: "English I", credits: 4},
  {dep: "AI&DS", semester: 1, course: "Core 1: Fundamentals of Computer Programming", credits: 4},
  {dep: "AI&DS", semester: 1, course: "Core 2: Data Structures", credits: 4},
  {dep: "AI&DS", semester: 1, course: "Core Lab 1: Computer Programming Lab", credits: 2},
  {dep: "AI&DS", semester: 1, course: "Allied 1: Linear Algebra and Neural Networks", credits: 4},
  {dep: "AI&DS", semester: 1, course: "Environmental Studies", credits: 2},

  // Semester 2
  {dep: "AI&DS", semester: 2, course: "Language II", credits: 4},
  {dep: "AI&DS", semester: 2, course: "English II", credits: 4},
  {dep: "AI&DS", semester: 2, course: "Core 3: Introduction to Python Programming", credits: 4},
  {dep: "AI&DS", semester: 2, course: "Core Lab 2: Python Programming Lab", credits: 2},
  {dep: "AI&DS", semester: 2, course: "Core Lab 3: Office Automation and Internet", credits: 2},
  {dep: "AI&DS", semester: 2, course: "Allied 2: Optimization Techniques", credits: 4},
  {dep: "AI&DS", semester: 2, course: "Value Education – Human Rights", credits: 2},
  {dep: "AI&DS", semester: 2, course: "Naan Mudhalvan Skill Course", credits: 2},

  // Semester 3
  {dep: "AI&DS", semester: 3, course: "Language III", credits: 4},
  {dep: "AI&DS", semester: 3, course: "English III", credits: 4},
  {dep: "AI&DS", semester: 3, course: "Core 4: Java Programming", credits: 4},
  {dep: "AI&DS", semester: 3, course: "Core 5: Foundation of Artificial Intelligence", credits: 4},
  {dep: "AI&DS", semester: 3, course: "Core Lab 4: Java Programming Lab", credits: 2},
  {dep: "AI&DS", semester: 3, course: "Allied 3: Operating System Design", credits: 4},
  {dep: "AI&DS", semester: 3, course: "Skill Based Subject 1: Data Analytics", credits: 2},
  {dep: "AI&DS", semester: 3, course: "Tamil / Yoga / Women’s Rights", credits: 1},
  {dep: "AI&DS", semester: 3, course: "Naan Mudhalvan Skill Course", credits: 2},
  {dep: "AI&DS", semester: 3, course: "Health and Wellness", credits: 1},

  // Semester 4
  {dep: "AI&DS", semester: 4, course: "Language IV", credits: 4},
  {dep: "AI&DS", semester: 4, course: "English IV", credits: 4},
  {dep: "AI&DS", semester: 4, course: "Core 6: Cognitive Science and Analysis", credits: 4},
  {dep: "AI&DS", semester: 4, course: "Core 7: Database Design and Management", credits: 4},
  {dep: "AI&DS", semester: 4, course: "Core Lab 5: Database Lab", credits: 2},
  {dep: "AI&DS", semester: 4, course: "Allied 4: Data and Information Security", credits: 4},
  {dep: "AI&DS", semester: 4, course: "Skill Based Subject 2 Lab: Capstone Project Work Phase I", credits: 2},
  {dep: "AI&DS", semester: 4, course: "Tamil / General Awareness", credits: 2},
  {dep: "AI&DS", semester: 4, course: "Naan Mudhalvan Skill Course", credits: 2},

  // Semester 5
  {dep: "AI&DS", semester: 5, course: "Core 8: Ethics of Artificial Intelligence", credits: 4},
  {dep: "AI&DS", semester: 5, course: "Core 9: Fundamentals of Data Science", credits: 4},
  {dep: "AI&DS", semester: 5, course: "Core Lab 6: Data Science Lab", credits: 2},
  {dep: "AI&DS", semester: 5, course: "Elective I: Big Data Analytics / Cyber Security / Deep Learning", credits: 3},
  {dep: "AI&DS", semester: 5, course: "Skill Based Subject 3 Lab: Capstone Project Work Phase II", credits: 2},
  {dep: "AI&DS", semester: 5, course: "Naan Mudhalvan Skill Course", credits: 2},

  // Semester 6
  {dep: "AI&DS", semester: 6, course: "Core 10: Robotic Process Automation", credits: 4},
  {dep: "AI&DS", semester: 6, course: "Core 11: Project Work Lab", credits: 4},
  {dep: "AI&DS", semester: 6, course: "Core Practical VII: Programming in UI Path Automation Lab", credits: 2},
  {dep: "AI&DS", semester: 6, course: "Elective II: Ethical Hacking / Digital Forensics / NLP", credits: 3},
  {dep: "AI&DS", semester: 6, course: "Elective III: IoT / Data Visualization / Social Network Analysis", credits: 3},
  {dep: "AI&DS", semester: 6, course: "Skill Based Subject 4: Machine Learning", credits: 2},
  {dep: "AI&DS", semester: 6, course: "Extension Activities", credits: 2},
  {dep: "AI&DS", semester: 6, course: "Naan Mudhalvan Skill Course", credits: 2},

  //CDF COURSE LIST
  // Semester I
  { dep: "CDF", semester: 1, course: "Language I", credits: 4 },
  { dep: "CDF", semester: 1, course: "English I", credits: 4 },
  { dep: "CDF", semester: 1, course: "Core Paper I - Basics of Garment Construction", credits: 4 },
  { dep: "CDF", semester: 1, course: "Core Practical I - Basics of Garment Construction Practical", credits: 4 },
  { dep: "CDF", semester: 1, course: "Allied I - Fashion Sketching Practical", credits: 3 },
  { dep: "CDF", semester: 1, course: "Environmental Studies", credits: 2 },

  // Semester II
  { dep: "CDF", semester: 2, course: "Language II", credits: 4 },
  { dep: "CDF", semester: 2, course: "English II", credits: 2 },
  { dep: "CDF", semester: 2, course: "Naan Mudhalvan Skill Course - Language Proficiency", credits: 2 },
  { dep: "CDF", semester: 2, course: "Core Paper II - Fashion Designing", credits: 3 },
  { dep: "CDF", semester: 2, course: "Core Practical II - Garment Construction Practical I", credits: 4 },
  { dep: "CDF", semester: 2, course: "Core Practical III - Fashion Designing Practical", credits: 3 },
  { dep: "CDF", semester: 2, course: "Allied II - Industrial Garment Production", credits: 3 },
  { dep: "CDF", semester: 2, course: "Value Education - Human Rights", credits: 2 },

  // Semester III
  { dep: "CDF", semester: 3, course: "Language III", credits: 4 },
  { dep: "CDF", semester: 3, course: "English III", credits: 4 },
  { dep: "CDF", semester: 3, course: "Core Paper III - Fiber to Fabric", credits: 4 },
  { dep: "CDF", semester: 3, course: "Core Practical IV - Garment Construction Practical II", credits: 4 },
  { dep: "CDF", semester: 3, course: "Core Practical V - Fiber to Fabric Practical", credits: 3 },
  { dep: "CDF", semester: 3, course: "Allied III - Textile Wet Processing", credits: 3 },
  { dep: "CDF", semester: 3, course: "Skill Based Subject I - Dyeing and Printing Practical", credits: 3 },
  { dep: "CDF", semester: 3, course: "Tamil / Advanced Tamil / NME I (Yoga for Human Excellence) / Women’s Rights", credits: 2 },

  // Semester IV
  { dep: "CDF", semester: 4, course: "Language IV", credits: 4 },
  { dep: "CDF", semester: 4, course: "English IV", credits: 4 },
  { dep: "CDF", semester: 4, course: "Core Paper IV - Fabric Structure and Design", credits: 4 },
  { dep: "CDF", semester: 4, course: "Core Practical VI - Fabric Structure and Design Practical", credits: 3 },
  { dep: "CDF", semester: 4, course: "Allied IV - The Business of Fashion", credits: 3 },
  { dep: "CDF", semester: 4, course: "Skill Based Subject II - Surface Embellishments Practical", credits: 2 },
  { dep: "CDF", semester: 4, course: "Naan Mudhalvan Skill Course - Digital Skills", credits: 2 },
  { dep: "CDF", semester: 4, course: "Tamil / Advanced Tamil / NME II (General Awareness)", credits: 2 },

  // Semester V
  { dep: "CDF", semester: 5, course: "Core Paper V - Knitting", credits: 4 },
  { dep: "CDF", semester: 5, course: "Core Paper VI - Costumes and Textiles of India", credits: 4 },
  { dep: "CDF", semester: 5, course: "Core Practical VII - Garment Construction Practical III", credits: 4 },
  { dep: "CDF", semester: 5, course: "Core Practical VIII - CAD Practical I", credits: 3 },
  { dep: "CDF", semester: 5, course: "Internship Training (15 Days)", credits: 2 },
  { dep: "CDF", semester: 5, course: "Elective Paper I", credits: 3 },
  { dep: "CDF", semester: 5, course: "Skill Based Subject III - Garment Quality and Cost Control", credits: 3 },

  // Semester VI
  { dep: "CDF", semester: 6, course: "Core Paper VII - Computers in the Garment Industry", credits: 4 },
  { dep: "CDF", semester: 6, course: "Core Practical IX - CAD Practical II", credits: 3 },
  { dep: "CDF", semester: 6, course: "Core Practical X - Basic Draping Practical", credits: 2 },
  { dep: "CDF", semester: 6, course: "Elective Paper II", credits: 3 },
  { dep: "CDF", semester: 6, course: "Elective Paper III", credits: 3 },
  { dep: "CDF", semester: 6, course: "Skill Based Subject IV - Project (Fashion Design Portfolio)", credits: 5 },
  { dep: "CDF", semester: 6, course: "Naan Mudhalvan Skill Course - Employability Readiness", credits: 0 },
  { dep: "CDF", semester: 6, course: "Extension Activities", credits: 2 },
  
  //CS COURSE LIST
    // Semester I
  {dep: "CS", semester: 1, course: "Language I", credits: 4},
  {dep: "CS", semester: 1, course: "English I", credits: 4},
  {dep: "CS", semester: 1, course: "Core 1: Computing Fundamentals and C Programming", credits: 4},
  {dep: "CS", semester: 1, course: "Core 2: Digital Fundamentals and Computer Architecture", credits: 4},
  {dep: "CS", semester: 1, course: "Core Lab 1: Programming Lab - C", credits: 4},
  {dep: "CS", semester: 1, course: "Allied: Mathematical Structures for Computer Science", credits: 4},
  {dep: "CS", semester: 1, course: "Environmental Studies", credits: 2},
// Semester II
  {dep: "CS", semester: 2, course: "Language II", credits: 4},
  {dep: "CS", semester: 2, course: "English II", credits: 4},
  {dep: "CS", semester: 2, course: "Core 3: Object-Oriented Programming", credits: 4},
  {dep: "CS", semester: 2, course: "Core 4: Data Structures", credits: 4},
  {dep: "CS", semester: 2, course: "Core Lab 2: Programming Lab - C++", credits: 2},
  {dep: "CS", semester: 2, course: "Core Lab 3: Internet Basics", credits: 2},
  {dep: "CS", semester: 2, course: "Allied 2: Discrete Mathematics", credits: 4},
  {dep: "CS", semester: 2, course: "Value Education - Human Rights", credits: 2},

  {dep: "CS", semester: 3, course: "Language III", credits: 4},
  {dep: "CS", semester: 3, course: "English III", credits: 4},
  {dep: "CS", semester: 3, course: "Core 5: Java Programming", credits: 4},
  {dep: "CS", semester: 3, course: "Core Lab 4: Programming Lab - Java", credits: 2},
  {dep: "CS", semester: 3, course: "Allied 3: Computer Based Optimization Techniques", credits: 4},
  {dep: "CS", semester: 3, course: "Skill-Based Subject 1: Software Engineering and Software Project Management", credits: 2},
  {dep: "CS", semester: 3, course: "Non-major elective: Tamil / General Awareness", credits: 2},

  {dep: "CS", semester: 4, course: "Language IV", credits: 4},
  {dep: "CS", semester: 4, course: "English IV", credits: 4},
  {dep: "CS", semester: 4, course: "Core 6: Computer Networks and Operating System", credits: 4},
  {dep: "CS", semester: 4, course: "Core 7: Linux and Shell Programming", credits: 4},
  {dep: "CS", semester: 4, course: "Core Lab 5: Linux and Shell Programming Lab", credits: 2},
  {dep: "CS", semester: 4, course: "Allied 4: Business Accounting", credits: 4},
  {dep: "CS", semester: 4, course: "Skill-Based Subject 2: Software Project Management", credits: 2},
  {dep: "CS", semester: 4, course: "Non-major elective: Tamil / General Awareness", credits: 2},

  {dep: "CS", semester: 5, course: "Core 8: RDBMS & Oracle", credits: 4},
  {dep: "CS", semester: 5, course: "Core 9: Visual Basic", credits: 4},
  {dep: "CS", semester: 5, course: "Core Lab 6: Programming Lab - VB & Oracle", credits: 4},
  {dep: "CS", semester: 5, course: "Elective I: Python Programming / Computer Networks / Organizational Behaviour", credits: 4},
  {dep: "CS", semester: 5, course: "Skill-Based Subject 3: Software Testing", credits: 3},

  {dep: "CS", semester: 6, course: "Core 10: Graphics & Multimedia", credits: 4},
  {dep: "CS", semester: 6, course: "Core 11: Network Security", credits: 4},
  {dep: "CS", semester: 6, course: "Core Lab 7: Programming Lab - Graphics & Multimedia", credits: 3},
  {dep: "CS", semester: 6, course: "Elective II: AI / ML / IoT", credits: 4},
  {dep: "CS", semester: 6, course: "Skill-Based Subject 4: Software Testing Lab", credits: 2},
 
 //BIO CHEMISTRY COURSE LIST
 
{dep: "BC", semester: 1, course: "Language I", credits: 4},
{dep: "BC", semester: 1, course: "English I", credits: 4},
{dep: "BC", semester: 1, course: "Core Paper I - Biomolecules", credits: 4},
{dep: "BC", semester: 1, course: "Core Paper II - Cell Biology", credits: 4},
{dep: "BC", semester: 1, course: "Core Biochemistry Practical I", credits: 2},
{dep: "BC", semester: 1, course: "Allied A: Paper I - Chemistry", credits: 3},
{dep: "BC", semester: 1, course: "Allied Chemistry Practical", credits: 2},
{dep: "BC", semester: 1, course: "Environmental Studies", credits: 2},

{dep: "BC", semester: 2, course: "Language II", credits: 4},
{dep: "BC", semester: 2, course: "English II", credits: 2},
{dep: "BC", semester: 2, course: "Effective English: Language Proficiency for Employability", credits: 2},
{dep: "BC", semester: 2, course: "Core Paper III - Biomedical Instrumentations", credits: 4},
{dep: "BC", semester: 2, course: "Core Biochemistry Practical I", credits: 4},
{dep: "BC", semester: 2, course: "Allied A: Paper II Chemistry", credits: 3},
{dep: "BC", semester: 2, course: "Allied Practical – Chemistry", credits: 2},
{dep: "BC", semester: 2, course: "Value Education-Human Rights", credits: 2},

{dep: "BC", semester: 3, course: "Language III", credits: 4},
{dep: "BC", semester: 3, course: "English III", credits: 4},
{dep: "BC", semester: 3, course: "Core Paper IV - Enzyme and Enzyme Technology", credits: 4},
{dep: "BC", semester: 3, course: "Core Paper V - Microbiology", credits: 4},
{dep: "BC", semester: 3, course: "Core Biochemistry Practical II", credits: 0},
{dep: "BC", semester: 3, course: "Allied B: Paper I Basic Mathematics", credits: 3},
{dep: "BC", semester: 3, course: "Skill Based Subject: Bioinformatics and Medical Coding / Actuarial Statistics-1", credits: 3},
{dep: "BC", semester: 3, course: "Tamil*/Advanced Tamil*/Non-Major Elective I", credits: 2},

{dep: "BC", semester: 4, course: "Language IV", credits: 4},
{dep: "BC", semester: 4, course: "English IV", credits: 4},
{dep: "BC", semester: 4, course: "Core Paper VI - Intermediary Metabolism", credits: 4},
{dep: "BC", semester: 4, course: "Core Biochemistry Practical II", credits: 3},
{dep: "BC", semester: 4, course: "Allied B: Paper II Computer", credits: 3},
{dep: "BC", semester: 4, course: "Allied B: Practical", credits: 2},
{dep: "BC", semester: 4, course: "Skill Based Subject 2: Basics of Information Technology", credits: 3},
{dep: "BC", semester: 4, course: "Office Fundamentals: Digital Skills for Employability", credits: 2},
{dep: "BC", semester: 4, course: "Tamil*/Advanced Tamil*/Non-Major Elective II", credits: 2},

{dep: "BC", semester: 5, course: "Core Paper VII - Human Physiology (Theory)", credits: 4},
{dep: "BC", semester: 5, course: "Core Paper VIII Clinical Biochemistry (Theory)", credits: 4},
{dep: "BC", semester: 5, course: "Core Paper IX Molecular Biology (Theory)", credits: 4},
{dep: "BC", semester: 5, course: "Core Paper X Genetic Engineering and Bioprocess Technology", credits: 4},
{dep: "BC", semester: 5, course: "Biochemistry Practical III", credits: 0},
{dep: "BC", semester: 5, course: "Biochemistry Practical IV", credits: 3},
{dep: "BC", semester: 5, course: "Elective I", credits: 3},
{dep: "BC", semester: 5, course: "Skill Based Subject Basics of Patent and Bioethics", credits: 3},

{dep: "BC", semester: 6, course: "Core Paper XI Plant Biochemistry and Plant Therapeutics (Theory)", credits: 3},
{dep: "BC", semester: 6, course: "Core Paper XII Medicinal Chemistry (Theory)", credits: 3},
{dep: "BC", semester: 6, course: "Biochemistry Practical III", credits: 3},
{dep: "BC", semester: 6, course: "Biochemistry Practical IV", credits: 3},
{dep: "BC", semester: 6, course: "Elective II", credits: 3},
{dep: "BC", semester: 6, course: "Elective III", credits: 3},
{dep: "BC", semester: 6, course: "Skill Based Subject 4 - Practical Bioinformatics", credits: 3},
{dep: "BC", semester: 6, course: "Project Based Learning", credits: 2},
{dep: "BC", semester: 6, course: "Extension Activities", credits: 2},

// CT COURSE LIST
  // Semester 1
  { dep: "CT", semester: 1, course: "Language I", credits: 4 },
  { dep: "CT", semester: 1, course: "English I", credits: 4 },
  { dep: "CT", semester: 1, course: "Core Paper 1: Computing Fundamentals and C Programming", credits: 4 },
  { dep: "CT", semester: 1, course: "Core Paper 2: Digital Fundamentals and Computer Architecture", credits: 4 },
  { dep: "CT", semester: 1, course: "Core Practical 1: Programming Lab - C", credits: 4 },
  { dep: "CT", semester: 1, course: "Allied Paper I: Mathematical Structures for Computer Science", credits: 4 },
  { dep: "CT", semester: 1, course: "Environmental Studies", credits: 2 },

  // Semester 2
  { dep: "CT", semester: 2, course: "Language II", credits: 4 },
  { dep: "CT", semester: 2, course: "English II", credits: 4 },
  { dep: "CT", semester: 2, course: "Core Paper 3: C++ Programming", credits: 4 },
  { dep: "CT", semester: 2, course: "Core Practical 2: Programming Lab - C++", credits: 4 },
  { dep: "CT", semester: 2, course: "Core Practical 3: Office Automation Lab", credits: 4 },
  { dep: "CT", semester: 2, course: "Allied Paper II: Discrete Mathematics", credits: 4 },
  { dep: "CT", semester: 2, course: "Value Education – Human Rights", credits: 2 },

  // Semester 3
  { dep: "CT", semester: 3, course: "Language III", credits: 4 },
  { dep: "CT", semester: 3, course: "English III", credits: 4 },
  { dep: "CT", semester: 3, course: "Core Paper 4: Data Structures", credits: 4 },
  { dep: "CT", semester: 3, course: "Core Paper 5: Java Programming", credits: 4 },
  { dep: "CT", semester: 3, course: "Core Practical 4: Programming Lab – Java", credits: 4 },
  { dep: "CT", semester: 3, course: "Allied Paper III: E-Commerce", credits: 4 },
  { dep: "CT", semester: 3, course: "Skill-based Subject: Data Communication & Networking", credits: 3 },

  // Semester 4
  { dep: "CT", semester: 4, course: "Language IV", credits: 4 },
  { dep: "CT", semester: 4, course: "English IV", credits: 4 },
  { dep: "CT", semester: 4, course: "Core Paper 6: System Software and Operating Systems", credits: 4 },
  { dep: "CT", semester: 4, course: "Core Paper 7: Linux and Shell Programming", credits: 4 },
  { dep: "CT", semester: 4, course: "Core Practical 5: Linux and Shell Programming Lab", credits: 4 },

  // Semester 5
  { dep: "CT", semester: 5, course: "Core Paper 8: RDBMS & Oracle", credits: 4 },
  { dep: "CT", semester: 5, course: "Core Paper 9: Visual Basic", credits: 4 },
  { dep: "CT", semester: 5, course: "Core Practical 6: Programming Lab – VB & Oracle", credits: 4 },
  { dep: "CT", semester: 5, course: "Elective I: Mobile Computing / Distributed Computing / Python Programming", credits: 4 },
  { dep: "CT", semester: 5, course: "Skill-based Subject: Network Security & Management", credits: 3 },

  // Semester 6
  { dep: "CT", semester: 6, course: "Core Paper 10: Graphics & Multimedia", credits: 4 },
  { dep: "CT", semester: 6, course: "Core Paper 11: Project Work & Viva-Voce", credits: 4 },
  { dep: "CT", semester: 6, course: "Core Practical 7: Programming Lab – Graphics / Multimedia", credits: 3 },
  { dep: "CT", semester: 6, course: "Elective II: Middleware Technologies / Animation Techniques / Computer Installation", credits: 4 },
  { dep: "CT", semester: 6, course: "Elective III: Data Mining / Embedded Systems / IoT", credits: 4 },
  { dep: "CT", semester: 6, course: "Skill-based Subject: Network Security Lab", credits: 3 },
  { dep: "CT", semester: 6, course: "Extension Activities", credits: 2 },

  // MSC CS COURSE LIST
  
  // Semester 1
  {dep: "MSC CS", semester: 1, course: "Advanced Operating System", credits: 4},
  {dep: "MSC CS", semester: 1, course: "Data Structures and Algorithms", credits: 4},
  {dep: "MSC CS", semester: 1, course: "Advanced Java Programming", credits: 4},
  {dep: "MSC CS", semester: 1, course: "Python Programming", credits: 4},
  {dep: "MSC CS", semester: 1, course: "Mathematical Foundations of Computer Science", credits: 4},
  {dep: "MSC CS", semester: 1, course: "Elective – I", credits: 4},
  {dep: "MSC CS", semester: 1, course: "Basics of Research / Industry Literacy", credits: 1},
  {dep: "MSC CS", semester: 1, course: "General Supportive – I", credits: 2},
  {dep: "MSC CS", semester: 1, course: "Job Oriented Course", credits: 2},

  // Semester 2
  {dep: "MSC CS", semester: 2, course: "Linux Programming", credits: 4},
  {dep: "MSC CS", semester: 2, course: "Compiler Design", credits: 4},
  {dep: "MSC CS", semester: 2, course: "Internet of Things", credits: 4},
  {dep: "MSC CS", semester: 2, course: "Data Mining Techniques and Tools", credits: 4},
  {dep: "MSC CS", semester: 2, course: "Database Administration and Management", credits: 4},
  {dep: "MSC CS", semester: 2, course: "Elective – II", credits: 4},
  {dep: "MSC CS", semester: 2, course: "Basics of Literature Survey", credits: 1},
  {dep: "MSC CS", semester: 2, course: "General Supportive – II", credits: 2},
  {dep: "MSC CS", semester: 2, course: "Job Oriented Course", credits: 2},
  {dep: "MSC CS", semester: 2, course: "Value Added Course", credits: 0},

  // Semester 3
  {dep: "MSC CS", semester: 3, course: "Visual Programming", credits: 4},
  {dep: "MSC CS", semester: 3, course: "Software Project Management", credits: 4},
  {dep: "MSC CS", semester: 3, course: "Cloud Computing", credits: 4},
  {dep: "MSC CS", semester: 3, course: "Big Data Analytics", credits: 4},
  {dep: "MSC CS", semester: 3, course: "Wireless Networks", credits: 4},
  {dep: "MSC CS", semester: 3, course: "Elective – III", credits: 4},
  {dep: "MSC CS", semester: 3, course: "Basics of Gap Analysis", credits: 1},
  {dep: "MSC CS", semester: 3, course: "General Supportive – III", credits: 2},
  {dep: "MSC CS", semester: 3, course: "Value Added Course", credits: 0},

  // Semester 4
  {dep: "MSC CS", semester: 4, course: "Project Work", credits: 9},

  //MSC CDF COURSE LIST
  // Semester 1
  { dep: "MSC CDF", semester: 1, course: "Core Paper I - Technical Textiles", credits: 4 },
  { dep: "MSC CDF", semester: 1, course: "Core Paper II - Costumes of the World", credits: 4 },
  { dep: "MSC CDF", semester: 1, course: "Core Practical I - Fashion Illustration", credits: 4 },
  { dep: "MSC CDF", semester: 1, course: "Core Practical II - Draping for Fashion Design", credits: 4 },
  { dep: "MSC CDF", semester: 1, course: "Core Practical III - Ornaments and Accessories", credits: 4 },
  { dep: "MSC CDF", semester: 1, course: "Fashion Business and Communication", credits: 4 },
  { dep: "MSC CDF", semester: 1, course: "Protective Clothing", credits: 4 },
  { dep: "MSC CDF", semester: 1, course: "Apparel Entrepreneurship", credits: 4 },

  // Semester 2
  { dep: "MSC CDF", semester: 2, course: "Core Paper III - Research Methodology and Statistics", credits: 4 },
  { dep: "MSC CDF", semester: 2, course: "Core Paper IV - Export Trade and Documentation", credits: 4 },
  { dep: "MSC CDF", semester: 2, course: "Core Practical IV - Design Art and Painting", credits: 4 },
  { dep: "MSC CDF", semester: 2, course: "Core Practical V - CAD in Fashion Designing", credits: 4 },
  { dep: "MSC CDF", semester: 2, course: "Core Practical VI - Advanced Garment Construction", credits: 4 },
  { dep: "MSC CDF", semester: 2, course: "Brand Management", credits: 4 },
  { dep: "MSC CDF", semester: 2, course: "Functional Apparels and Clothing", credits: 4 },
  { dep: "MSC CDF", semester: 2, course: "Supply Chain Management", credits: 4 },

  // Semester 3
  { dep: "MSC CDF", semester: 3, course: "Core Paper V - Apparel Quality Standards", credits: 4 },
  { dep: "MSC CDF", semester: 3, course: "Core Paper VI - Textile Testing", credits: 4 },
  { dep: "MSC CDF", semester: 3, course: "Core Practical VII - Textile Testing Practical", credits: 4 },
  { dep: "MSC CDF", semester: 3, course: "Core Practical VIII - CAD in Pattern Making", credits: 4 },
  { dep: "MSC CDF", semester: 3, course: "Core Practical IX - Design with Prints", credits: 4 },
  { dep: "MSC CDF", semester: 3, course: "Apparel Production and Planning", credits: 4 },
  { dep: "MSC CDF", semester: 3, course: "Clothing Science", credits: 4 },
  { dep: "MSC CDF", semester: 3, course: "Filtration Textiles", credits: 4 },
  { dep: "MSC CDF", semester: 3, course: "Project Work / Thesis", credits: 6 },

  // Semester 4
  { dep: "MSC CDF", semester: 4, course: "Core Paper VII - Indian Textile Industry", credits: 4 },
  { dep: "MSC CDF", semester: 4, course: "Core Practical X - Design Collection (Beauty Care Practical)", credits: 4 },
  { dep: "MSC CDF", semester: 4, course: "Fashion Photography Practical", credits: 4 },
  { dep: "MSC CDF", semester: 4, course: "Home Furnishing Practical", credits: 4 },
  { dep: "MSC CDF", semester: 4, course: "Project Viva Voce", credits: 4 },

  // MSC BIOCHEMISTRY COURSE LIST
   
  // Semester 1
  { dep: "MSC Biochemistry", semester: 1, course: "Biomolecules", credits: 4 },
  { dep: "MSC Biochemistry", semester: 1, course: "Cell and Molecular Biology", credits: 4 },
  { dep: "MSC Biochemistry", semester: 1, course: "Analytical Biochemistry", credits: 4 },
  { dep: "MSC Biochemistry", semester: 1, course: "Genetics and Developmental Biology", credits: 4 },
  { dep: "MSC Biochemistry", semester: 1, course: "Biochemistry, Cell Biology and Microbiology (Practical)", credits: 4 },
  { dep: "MSC Biochemistry", semester: 1, course: "Microbiology", credits: 4 },
  { dep: "MSC Biochemistry", semester: 1, course: "Nutrition", credits: 2 },
  { dep: "MSC Biochemistry", semester: 1, course: "Supportive I", credits: 2 },

  // Semester 2
  { dep: "MSC Biochemistry", semester: 2, course: "Enzymology", credits: 4 },
  { dep: "MSC Biochemistry", semester: 2, course: "Intermediary Metabolism", credits: 4 },
  { dep: "MSC Biochemistry", semester: 2, course: "Human Physiology", credits: 4 },
  { dep: "MSC Biochemistry", semester: 2, course: "Immunology", credits: 4 },
  { dep: "MSC Biochemistry", semester: 2, course: "Enzymology and Immunology (Practical)", credits: 4 },
  { dep: "MSC Biochemistry", semester: 2, course: "Molecular Physiology", credits: 4 },
  { dep: "MSC Biochemistry", semester: 2, course: "Nano Science and Technology", credits: 4 },
  { dep: "MSC Biochemistry", semester: 2, course: "Supportive II", credits: 2 },
  { dep: "MSC Biochemistry", semester: 2, course: "Summer Training", credits: 2 },

  // Semester 3
  { dep: "MSC Biochemistry", semester: 3, course: "Clinical Biochemistry", credits: 4 },
  { dep: "MSC Biochemistry", semester: 3, course: "Recombinant DNA Technology", credits: 4 },
  { dep: "MSC Biochemistry", semester: 3, course: "Pharmacology and Toxicology", credits: 4 },
  { dep: "MSC Biochemistry", semester: 3, course: "Biostatistics and Research Methodology", credits: 4 },
  { dep: "MSC Biochemistry", semester: 3, course: "Clinical Biochemistry & Molecular Biology Lab (Practical)", credits: 4 },
  { dep: "MSC Biochemistry", semester: 3, course: "Plant Biochemistry and Environmental Biotechnology", credits: 4 },
  { dep: "MSC Biochemistry", semester: 3, course: "Biology of Cancer and Stem Cell", credits: 4 },
  { dep: "MSC Biochemistry", semester: 3, course: "Supportive III", credits: 2 },
  { dep: "MSC Biochemistry", semester: 3, course: "Summer Training", credits: 2 },
  { dep: "MSC Biochemistry", semester: 3, course: "Online Course (4 Weeks Duration)", credits: 2 },

  // Semester 4
  { dep: "MSC Biochemistry", semester: 4, course: "Professional Certification Course", credits: 2 },
  { dep: "MSC Biochemistry", semester: 4, course: "Project Work", credits: 8 },
  { dep: "MSC Biochemistry", semester: 4, course: "Value Added Course", credits: 0 }, 
  { dep: "MSC Biochemistry", semester: 4, course: "Job Oriented Course", credits: 0 },
 

// MScMaths Courses LIST
  // Semester 1
  { dep: "M.Sc Mathematics", semester: 1, course: "Algebra I", credits: 4 },
  { dep: "M.Sc Mathematics", semester: 1, course: "Real Analysis", credits: 4 },
  { dep: "M.Sc Mathematics", semester: 1, course: "Ordinary Differential Equations", credits: 4 },
  { dep: "M.Sc Mathematics", semester: 1, course: "Optimization Techniques", credits: 4 },
  { dep: "M.Sc Mathematics", semester: 1, course: "Elective I", credits: 4 },
  { dep: "M.Sc Mathematics", semester: 1, course: "Supportive I", credits: 2 },

  // Semester 2
  { dep: "M.Sc Mathematics", semester: 2, course: "Algebra II", credits: 4 },
  { dep: "M.Sc Mathematics", semester: 2, course: "Measure and Integration", credits: 4 },
  { dep: "M.Sc Mathematics", semester: 2, course: "Partial Differential Equations", credits: 4 },
  { dep: "M.Sc Mathematics", semester: 2, course: "Mechanics", credits: 4 },
  { dep: "M.Sc Mathematics", semester: 2, course: "Elective II", credits: 4 },
  { dep: "M.Sc Mathematics", semester: 2, course: "Supportive II", credits: 2 },

  // Semester 3
  { dep: "M.Sc Mathematics", semester: 3, course: "Complex Analysis", credits: 4 },
  { dep: "M.Sc Mathematics", semester: 3, course: "Topology", credits: 4 },
  { dep: "M.Sc Mathematics", semester: 3, course: "Fluid Dynamics", credits: 4 },
  { dep: "M.Sc Mathematics", semester: 3, course: "Mathematical Methods", credits: 4 },
  { dep: "M.Sc Mathematics", semester: 3, course: "Elective III", credits: 4 },
  { dep: "M.Sc Mathematics", semester: 3, course: "Supportive III", credits: 2 },

  // Semester 4
  { dep: "M.Sc Mathematics", semester: 4, course: "Functional Analysis", credits: 4 },
  { dep: "M.Sc Mathematics", semester: 4, course: "Number Theory and Cryptography", credits: 4 },
  { dep: "M.Sc Mathematics", semester: 4, course: "Nonlinear Differential Equations", credits: 4 },
  { dep: "M.Sc Mathematics", semester: 4, course: "Elective IV", credits: 4 },
  { dep: "M.Sc Mathematics", semester: 4, course: "Project", credits: 8 },
 

// MAEnglishLitCourses LIST
  // Semester 1
  { dep: "M.A English Literature", semester: 1, course: "British Literature – I (Chaucer to Milton)", credits: 4 },
  { dep: "M.A English Literature", semester: 1, course: "American Literature", credits: 4 },
  { dep: "M.A English Literature", semester: 1, course: "Shakespeare", credits: 4 },
  { dep: "M.A English Literature", semester: 1, course: "Grammar for Communication", credits: 4 },
  { dep: "M.A English Literature", semester: 1, course: "English Language – I", credits: 4 },
  { dep: "M.A English Literature", semester: 1, course: "Elective I", credits: 4 },

  // Semester 2
  { dep: "M.A English Literature", semester: 2, course: "British Literature – II (Dryden to the Age of Romanticism)", credits: 4 },
  { dep: "M.A English Literature", semester: 2, course: "Indian Writing in English", credits: 4 },
  { dep: "M.A English Literature", semester: 2, course: "English Literature for Competitive Examinations – I", credits: 4 },
  { dep: "M.A English Literature", semester: 2, course: "New Literatures in English", credits: 4 },
  { dep: "M.A English Literature", semester: 2, course: "English Language – II", credits: 4 },
  { dep: "M.A English Literature", semester: 2, course: "Elective II", credits: 4 },

  // Semester 3
  { dep: "M.A English Literature", semester: 3, course: "British Literature – III (Victorian Age to the Modern Age)", credits: 4 },
  { dep: "M.A English Literature", semester: 3, course: "English Literature for Competitive Examinations – II", credits: 4 },
  { dep: "M.A English Literature", semester: 3, course: "Methods of Teaching English", credits: 4 },
  { dep: "M.A English Literature", semester: 3, course: "Literary Criticism and Theory", credits: 4 },
  { dep: "M.A English Literature", semester: 3, course: "Research Methodology", credits: 4 },
  { dep: "M.A English Literature", semester: 3, course: "Elective III", credits: 4 },

  // Semester 4
  { dep: "M.A English Literature", semester: 4, course: "Introduction to Women’s Studies", credits: 4 },
  { dep: "M.A English Literature", semester: 4, course: "Mass Communication and Journalism", credits: 4 },
  { dep: "M.A English Literature", semester: 4, course: "Project Work", credits: 8 },
  { dep: "M.A English Literature", semester: 4, course: "Elective IV", credits: 4 },
 
//  MComCACourses LIST
  // Semester 1
  { dep: "M.Com Computer Applications", semester: 1, course: "Financial and Investment Management", credits: 4 },
  { dep: "M.Com Computer Applications", semester: 1, course: "Marketing Management", credits: 4 },
  { dep: "M.Com Computer Applications", semester: 1, course: "Computer Applications: MS Office & Oracle – Practical I", credits: 4 },
  { dep: "M.Com Computer Applications", semester: 1, course: "Cost & Management Accounting", credits: 4 },
  { dep: "M.Com Computer Applications", semester: 1, course: "Business Environment", credits: 4 },

  // Semester 2
  { dep: "M.Com Computer Applications", semester: 2, course: "Corporate Accounting", credits: 4 },
  { dep: "M.Com Computer Applications", semester: 2, course: "Human Resource Management", credits: 4 },
  { dep: "M.Com Computer Applications", semester: 2, course: "Python Programming – Practical II", credits: 4 },
  { dep: "M.Com Computer Applications", semester: 2, course: "Elective I", credits: 4 },

  // Semester 3
  { dep: "M.Com Computer Applications", semester: 3, course: "Cost and Management Accounting – Practical III", credits: 4 },
  { dep: "M.Com Computer Applications", semester: 3, course: "Professional Skills for Business Communication", credits: 4 },
  { dep: "M.Com Computer Applications", semester: 3, course: "Research Methodology", credits: 4 },
  { dep: "M.Com Computer Applications", semester: 3, course: "Institutional Training", credits: 2 },
  { dep: "M.Com Computer Applications", semester: 3, course: "Elective II", credits: 4 },
  { dep: "M.Com Computer Applications", semester: 3, course: "Industry 4.0", credits: 4 },

  // Semester 4
  { dep: "M.Com Computer Applications", semester: 4, course: "Direct Taxation and e-Filing", credits: 4 },
  { dep: "M.Com Computer Applications", semester: 4, course: "Project Work and Viva-Voce", credits: 8 },
  { dep: "M.Com Computer Applications", semester: 4, course: "Elective III", credits: 4 },
  { dep: "M.Com Computer Applications", semester: 4, course: "Elective IV", credits: 4 },
  { dep: "M.Com Computer Applications", semester: 4, course: "Principles and Practice of Insurance", credits: 4 }
  



];



  // ✅ Add full course list as needed
 

function getFilteredCourses() {
  const dep = document.getElementById("department").value;
  const sem = parseInt(document.getElementById("semester").value);
  return Courses.filter(c => c.dep === dep && c.semester === sem);
}

// Build datalist dynamically based on selected dept & semester
function updateDatalist() {
  let filtered = getFilteredCourses();
  const datalist = document.getElementById("courseList");
  datalist.innerHTML = "";
  filtered.forEach(c => {
    const option = document.createElement("option");
    option.value = c.course;
    datalist.appendChild(option);
  });
}

document.getElementById("department").addEventListener("change", updateDatalist);
document.getElementById("semester").addEventListener("change", updateDatalist);

function saveToLocalStorage() {
  const rows = document.querySelectorAll("#course-container .row");
  const data = Array.from(rows).map(row => ({
    course: row.querySelector("input[list]").value,
    credits: row.querySelector("input[type='number']").value,
    grade: row.querySelector("select").value
  }));
  localStorage.setItem("coursesData", JSON.stringify(data));
}

function addCourse(courseName = "", credits = "", grade = "10") {
  const row = document.createElement("div");
  row.className = "row";

  const input = document.createElement("input");
  input.setAttribute("list", "courseList");
  input.placeholder = "Subject Name";
  input.value = courseName;

  const creditInput = document.createElement("input");
  creditInput.type = "number";
  creditInput.placeholder = "Credits";
  creditInput.min = "0.0001";
  creditInput.step = "any";
  creditInput.value = credits;
  creditInput.addEventListener("input", () => {
    if (parseFloat(creditInput.value) <= 0) {
      alert("Credits must be positive.");
      creditInput.value = "";
    }
    saveToLocalStorage();
  });

  const gradeSelect = document.createElement("select");
  gradeSelect.innerHTML = `
    <option value="10">O</option>
    <option value="9">D+</option>
    <option value="8">D</option>
    <option value="7">A+</option>
    <option value="6">A</option>
    <option value="5">B</option>
    <option value="0">AB/F</option>
  `;
  gradeSelect.value = grade;

  const delBtn = document.createElement("button");
  delBtn.textContent = "X";
  delBtn.onclick = () => {
    row.remove();
    saveToLocalStorage();
  };

  input.addEventListener("change", () => {
    const selected = getFilteredCourses().find(c => c.course.toLowerCase() === input.value.toLowerCase());
    creditInput.value = selected ? selected.credits : "";
    creditInput.readOnly = !!selected;
    saveToLocalStorage();
  });

  gradeSelect.addEventListener("change", saveToLocalStorage);

  row.append(input, creditInput, gradeSelect, delBtn);
  document.getElementById("course-container").appendChild(row);
  saveToLocalStorage();
}

function calculateGPA() {
  const rows = document.querySelectorAll("#course-container .row");
  let totalCredits = 0, weightedSum = 0;
  let table = `<table>
    <thead><tr><th>Subject Name</th><th>Credits</th><th>Grade</th><th>Points</th></tr></thead><tbody>`;
  rows.forEach((row, i) => {
    const name = row.querySelector("input[list]").value.trim();
    const credits = parseFloat(row.querySelector("input[type='number']").value) || 0;
    const grade = parseInt(row.querySelector("select").value) || 0;
    if (!name || credits <= 0) {
      alert(`Invalid data in row ${i + 1}`);
      return;
    }
    const points = credits * grade;
    if (grade !== 0) totalCredits += credits;
    weightedSum += points;
    table += `<tr><td>${name}</td><td>${credits}</td><td>${grade}</td><td>${points}</td></tr>`;
  });
  const gpa = totalCredits > 0 ? (weightedSum / totalCredits).toFixed(2) : "0.00";
  table += `</tbody><tfoot><tr><td colspan="3">Total Credits</td><td>${totalCredits}</td></tr>
            <tr><td colspan="3">GPA</td><td>${gpa}</td></tr></tfoot></table>`;
  document.getElementById("result").innerHTML = table;
}

function clearAll() {
  localStorage.clear();
  document.getElementById("course-container").innerHTML = "";
  document.getElementById("result").innerHTML = "";
}

const datalist = document.createElement("datalist");
datalist.id = "courseList";
document.body.appendChild(datalist);

// Rehydrate on load
window.onload = () => {
  const savedData = JSON.parse(localStorage.getItem("coursesData") || "[]");
  savedData.forEach(item => addCourse(item.course, item.credits, item.grade));
};
 