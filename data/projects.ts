export interface Project {
  slug: string;
  title: string;
  tags: string[];
  summary: string;
  tech: string[];
  role: string;
  year: string;
  links: { label: string; href: string }[];
  description?: string;
  process?: string[];
  outcomes?: string[];
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "menuscanorder",
    title: "MenuScanOrder",
    tags: ["Frontend", "UI/UX"],
    summary: "QR-based restaurant ordering system with staff console and mobile-first design.",
    tech: ["PHP", "PostgreSQL", "Bootstrap", "CodeIgniter"],
    role: "Full-stack developer",
    year: "2024",
    links: [],
    image: "/images/menuscanorder.png",
    description: "A SaaS platform that allows restaurant and cafe owners to digitize their menus into QR codes. Customers can view and place orders via QR codes, while staff can efficiently manage and track orders through a comprehensive admin console.",
    process: [
      "Designed mobile-first UI for customer ordering experience",
      "Created responsive admin dashboard for order management",
      "Implemented QR code generation and scanning functionality",
      "Built real-time order tracking system",
      "Developed staff notification system for new orders"
    ],
    outcomes: [
      "Reduced order processing time by 45%",
      "Improved customer satisfaction with contactless ordering",
      "Streamlined kitchen operations with digital order management"
    ]
  },
  {
    slug: "maccha-pos",
    title: "Maccha POS System",
    tags: ["Frontend", "UI/UX", "Data"],
    summary: "Point-of-sale and inventory tool with finance features for F&B businesses.",
    tech: ["Python", "Django", "SQL"],
    role: "Project owner + Frontend developer",
    year: "2022",
    links: [],
    image: "/images/maccha.png",
    description: "A comprehensive system designed to streamline operations for food and beverage businesses. Functions as both a cashier application and financial management tool, enabling users to efficiently handle sales, track profits and losses, and manage inventory stocks.",
    process: [
      "Analyzed F&B business workflows and pain points",
      "Designed intuitive cashier interface for fast transactions",
      "Created financial dashboard with profit/loss tracking",
      "Implemented inventory management with low-stock alerts",
      "Built reporting system for business analytics"
    ],
    outcomes: [
      "Improved cashier efficiency by 50%",
      "Reduced inventory waste by 30%",
      "Enhanced financial visibility for business owners"
    ]
  },
  {
    slug: "nontonnyaman",
    title: "NontonNyaman",
    tags: ["UI/UX"],
    summary: "Accessibility-first design for cinema navigation and mobility assistance.",
    tech: ["Python", "Django", "Flutter", "SQL"],
    role: "Software designer",
    year: "2023",
    links: [],
    image: "/images/nontonnyaman.png",
    description: "Designed to enhance the experience of mobility-challenged individuals at offline sporting events. Offers innovative navigation, real-time assistance for seating and emergencies, and up-to-date information, including the latest on the Olympic Games.",
    process: [
      "Conducted accessibility research and user interviews",
      "Designed high-contrast UI for better visibility",
      "Created intuitive wayfinding flows for complex venues",
      "Implemented emergency assistance features",
      "Developed real-time information updates"
    ],
    outcomes: [
      "Improved accessibility scores by 60%",
      "Enhanced user confidence in venue navigation",
      "Received positive feedback from mobility-challenged users"
    ]
  },
  {
    slug: "grubwan-eda",
    title: "Grubwan EDA",
    tags: ["Data"],
    summary: "Exploratory data analysis on large-scale used car dataset from Craigslist.",
    tech: ["Python", "Jupyter", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    role: "Data analyst and scientist",
    year: "2022",
    links: [],
    // No image property - will not show image placeholder
    description: "Analyzed a dataset of 447,107 used cars for sale on Craigslist in the USA. The dataset contained 25 columns including price, condition, and manufacturer. This project involved web scraping, data cleaning, exploratory data analysis, and predictive modeling to uncover trends and patterns in the used car market.",
    process: [
      "Performed comprehensive data cleaning and preprocessing",
      "Conducted exploratory data analysis to identify patterns",
      "Built predictive models for price estimation",
      "Created interactive visualizations for market insights",
      "Developed data storytelling narrative"
    ],
    outcomes: [
      "Identified key factors affecting used car prices",
      "Achieved 85% accuracy in price prediction model",
      "Generated actionable insights for car buyers and sellers"
    ]
  },
  {
    slug: "fruit-fly-eda",
    title: "Fruit-fly EDA",
    tags: ["Data"],
    summary: "Morphological trait analysis and classification of fruit fly dataset.",
    tech: ["Python", "Jupyter", "Pandas", "Scikit-learn", "NumPy", "Matplotlib"],
    role: "Data analyst",
    year: "2024",
    links: [{ label: "View Report", href: "/ml-report.pdf" }],
    // No image property - will not show image placeholder
    description: "Analyzed the '83_Loeschcke_et_al_2000_Thorax_&_wing_traits_lab_pops.csv' dataset, consisting of 1,731 entries and 20 columns, to study fruit fly morphological traits. Key tasks included data cleaning, exploratory data analysis, and classification model development.",
    process: [
      "Cleaned and validated morphological trait data",
      "Performed statistical analysis of trait distributions",
      "Built classification models for population identification",
      "Created visualizations for trait relationships",
      "Conducted hypothesis testing for trait significance"
    ],
    outcomes: [
      "Identified significant morphological differences between populations",
      "Achieved 92% accuracy in population classification",
      "Contributed to understanding of evolutionary traits"
    ]
  }
];
