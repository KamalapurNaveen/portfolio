export const hero = {
  name: "Naveen Kamalapur",
  role: "Backend Engineer | Java (Spring Boot) & Node.js | AWS | System Design | GenAI & RAG Systems",
  intro: "Backend Engineer with 2+ years of experience building scalable distributed systems, REST APIs, and GenAI-powered search solutions.",
  contact: {
    email: "naveen.kamalapur.developer@gmail.com",
    phone: "+91 9581689071",
    linkedIn: "https://www.linkedin.com/in/naveenkamalapur",
    leetCode: "https://leetcode.com/naveen_kamalapur",
  },
  highlights: [
    "Built Manager Hub used by 2500+ managers across 30–40 enterprise clients.",
    "Designed a centralized Skill Service for hiring, learning, and career modules.",
    "Delivered semantic search & RAG pipelines with embeddings, vector search, and caching.",
  ],
};

export const experience = [
  {
    title: "Software Engineer",
    subtitle: "Darwinbox",
    company: "Darwinbox",
    dates: "Jul 2024 – Present",
    location: "Hyderabad",
    bullets: [
      "Built and owned Manager Hub adopted by 2500+ managers across 30–40 clients.",
      "Architected a centralized Skill Service unifying hiring, learning, and career modules.",
      "Built semantic search and RAG pipelines with embeddings + vector search, improving discovery by 40%.",
      "Engineered caching and indexing strategies to reduce API latency by 35% under high load.",
      "Delivered real-time audit logging with MongoDB Change Streams for traceability.",
    ],
    tech: ["Java", "Spring Boot", "Node.js", "MongoDB", "PostgreSQL", "Redis", "AWS"],
  },
  {
    title: "Software Engineer Intern",
    subtitle: "Darwinbox",
    company: "Darwinbox",
    dates: "Jan 2024 – Jun 2024",
    location: "Hyderabad",
    bullets: [
      "Built a Slack bot with HRMS integration for leave management, approvals, and notifications.",
      "Designed event-driven approval workflows enabling managers to process HR actions from Slack.",
      "Developed secure, scalable APIs for HRMS integration and seamless automation.",
    ],
    tech: ["Node.js", "MongoDB", "AWS", "Redis", "Slack APIs"],
  },
  {
    title: "DSA Teaching Assistant",
    subtitle: "SmartInterviews",
    company: "SmartInterviews",
    dates: "Apr 2023 – Dec 2023",
    location: "Remote",
    bullets: [
      "Mentored 200+ students in Data Structures & Algorithms through structured problem solving.",
      "Guided 1000+ problems, improving interview performance by 25–30%.",
      "Created clear conceptual paths for algorithmic thinking and system design preparation.",
    ],
    tech: ["Algorithms", "Data Structures", "Interview Prep"],
  },
];

export const projects = [
  {
    title: "RAG Agent – Intelligent Document Q&A",
    year: "2025",
    description: "Built a production-style RAG pipeline for PDFs and images with high contextual accuracy.",
    bullets: [
      "Designed semantic retrieval using embeddings and FAISS with OCR ingestion for multi-modal documents.",
      "Optimized chunking, caching, and retrieval to reduce response latency by 50%.",
      "Implemented scalable document storage and retrieval using AWS S3.",
    ],
    tech: ["Node.js", "LangChain", "FAISS", "OpenAI API", "AWS S3"],
  },
  {
    title: "TalentSearch – Semantic Talent Matching",
    year: "2025",
    description: "Built a semantic matching engine for recruiter–candidate alignment using vector search.",
    bullets: [
      "Implemented ranking and relevance scoring to improve precision and reduce time-to-hire.",
      "Built query interfaces with auto-suggest and filters for a polished UX.",
    ],
    tech: ["Java", "Spring Boot", "Node.js", "MongoDB Vector Search", "OpenAI API", "Redis"],
  },
];

export const skillCategories = [
  {
    category: "Languages",
    items: ["Java", "TypeScript", "Python", "C++", "SQL"],
  },
  {
    category: "Backend",
    items: ["Spring Boot", "Spring Data JPA", "REST APIs", "Microservices", "Node.js", "Express", "JWT", "OAuth2"],
  },
  {
    category: "Data & Cloud",
    items: ["PostgreSQL", "MongoDB", "Redis", "AWS (S3, EC2, ECS, ECR)", "Docker", "Kubernetes", "GitHub Actions"],
  },
  {
    category: "AI / Search",
    items: ["LangChain", "OpenAI API", "Vector Databases", "Embeddings", "Semantic Search"],
  },
];

export const education = {
  degree: "Bachelor of Technology in Computer Science",
  dates: "2020 – 2024",
  institution: "Gokaraju Rangaraju Institute of Engineering & Technology, Hyderabad",
  cgpa: "9.18/10.0",
  coursework: ["Data Structures & Algorithms", "DBMS", "Operating Systems", "Computer Networks", "Cloud Computing", "Machine Learning"],
};

export const achievements = [
  "AI Agent Hackathon — 2nd Prize for building a practical AI agent solution.",
  "LeetCode — 2000+ rating; Global Rank 555 in Biweekly Contest 105.",
];

export const contactLinks = [
  { label: "Email", href: "mailto:naveen.kamalapur.developer@gmail.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/naveenkamalapur" },
  { label: "GitHub", href: "https://github.com/KamalapurNaveen" },
  { label: "LeetCode", href: "https://leetcode.com/u/Kamalapur_Naveen/" },
];
