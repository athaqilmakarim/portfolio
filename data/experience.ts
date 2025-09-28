export interface Experience {
  slug: string;
  title: string;
  company: string;
  role: string;
  year: string;
  summary: string; // Added summary property
  achievements: string[];
  tech: string[];
  type: 'work' | 'internship' | 'freelance';
  links?: { label: string; href: string }[];
}

export const experiences: Experience[] = [
  {
    slug: "ina-trading",
    title: "Software Engineer & Database Designer",
    company: "INA Trading",
    role: "Software Engineer & Database Designer",
    year: "2024 - Present",
    summary: "Contributed to developing a comprehensive digital trade platform supporting MSMEs, cooperatives, and industries in export, logistics, fulfillment, marketing, and international sales. Played a key role in supporting the MSME CAN Export program from Indonesia's Ministry of Trade.",
    achievements: [
      "Successfully onboarded 500+ MSMEs to the platform",
      "Reduced order processing time by 60% through improved UI/UX",
      "Improved user satisfaction scores by 40% with accessibility-focused design",
      "Designed and implemented responsive admin dashboards for order management",
      "Created intuitive onboarding flows for users with low digital literacy"
    ],
    tech: ["React", "Firebase", "Node.js", "Figma", "SQL"],
    type: "work",
    links: [{ label: "Admin Platform", href: "https://admin.inatrading.co.id" }]
  },
  {
    slug: "dominos-shift-runner",
    title: "Shift Runner",
    company: "Domino's Brisbane City",
    role: "Shift Runner",
    year: "September 2023 - Present",
    summary: "Supervised and managed daily store operations, including staff coordination, customer service, and ensuring compliance with company standards. Handled stock reports and inventory management to maintain optimal stock levels.",
    achievements: [
      "Managed daily store operations and staff coordination",
      "Maintained optimal stock levels and minimized waste",
      "Ensured compliance with company standards and procedures",
      "Handled cash management and opening/closing procedures",
      "Resolved operational issues during shifts"
    ],
    tech: ["Inventory Management", "Team Leadership", "Customer Service", "Microsoft Excel", "Storage Management", "Document Management", "Data Entry"],
    type: "work"
  }
];
