
import { 
  Experience, 
  Education, 
  Project, 
  Publication, 
  SkillCategory, 
  Membership, 
  PositionOfResponsibility, 
  Referee 
} from './types';

export const PERSONAL_INFO = {
  name: "Thanidu Thennakoon",
  role: "Research Assistant | Energy & Environmental Engineer",
  email: "thaniduthennakoon@gmail.com",
  altEmail: "egt20571@fot.sjp.ac.lk",
  phone: "+94-717034518",
  github: "Thanidu",
  linkedin: "Thanidu Thennakoon",
  location: "Sri Lanka",
  objective: "To secure a dynamic role in the field of Sustainable Energy Solutions, where I can apply my expertise in solar design, DC-DC converter design, and inverter technology to drive innovation and contribute to the development of eco-friendly energy systems, while aligning my passion for environmental sustainability with my technical abilities."
};

export const EXPERIENCES: Experience[] = [
  {
    company: "Hayleys Solar (Hayleys Fentons)",
    role: "Internship - Electrical Engineer",
    period: "2024 March - May",
    location: "Sri Lanka",
    tasks: [
      "Solar System Design, Planning & Installation",
      "Online Monitoring System Handling",
      "Solar System Troubleshooting",
      "Communication Skill",
      "Team Work"
    ]
  },
  {
    company: "Lakvijaya Power Plant (Ceylon Electricity Board)",
    role: "Energy and Environmental Engineering Training",
    period: "2023 Dec - 2024 Feb",
    location: "Norochcholai",
    tasks: [
      "Monitoring of Air Quality, Water Quality",
      "Boiler Operation and Maintenance Technology",
      "Solid Waste Management",
      "Waste Water Treatment Technology",
      "Monitoring Marine Environment"
    ]
  },
  {
    company: "Bank of Ceylon",
    role: "Digital Marketing and Customer Service Intern",
    period: "2021 Jan - 2021 June",
    location: "Maho",
    tasks: [
      "Digital Product Marketing",
      "Opening and maintaining customer accounts",
      "Providing customer service",
      "Processing transactions (deposits, withdrawals, payments)",
      "Selling and servicing financial products"
    ]
  }
];

export const EDUCATIONS: Education[] = [
  {
    institution: "University of Sri Jayewardenepura, Faculty of Technology",
    degree: "Bachelor of Engineering Technology | Energy and Environmental Technology",
    period: "2021 June - 2025 April"
  },
  {
    institution: "Sri Lanka Youth School of Computing",
    degree: "CCNAV7: Introduction to Network",
    period: "2021 Dec - 2022 May"
  },
  {
    institution: "Vocational Training Authority of Sri Lanka",
    degree: "Introduction to Cyber Security",
    period: "2020 Oct - 2021 Jan"
  },
  {
    institution: "GCE Advanced Level in Sri Lanka",
    degree: "Engineering Technology - A, Science for Technology - A, ICT - B",
    period: "2019 August"
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Develop a model for enhancing the Absorption Chiller Efficiency in LVPP",
    subtitle: "Final Year Research Project - University of Sri Jayewardenepura",
    date: "2025 February",
    tools: ["ASPEN Plus", "Python", "Django", "Machine Learning"],
    image: "/images/projects/absorption-chiller.jpg",
    details: [
      "Develop Machine Learning Model",
      "Develop own Web Site with Django-Python Framework",
      "Analyze data using Python",
      "Sensitivity analysis from ASPEN Plus"
    ]
  },
  {
    title: "Feasibility Study of a 1000 MW Grid-Connected Solar Power Plant in Sri Lanka",
    subtitle: "Lakvijaya Power Plant - Ceylon Electricity Board",
    date: "2024 February",
    tools: ["PVSyst Simulation", "Meteo Database", "Excel"],
    image: "/images/projects/solar-plant.jpg",
    details: [
      "Analyze sun path diagram and Loss Diagram",
      "P50 - P90 evaluation",
      "Financial Analysis and Cost of the system",
      "CO2 Emission Balance"
    ]
  },
  {
    title: "The optimal dosage of coagulants in Coal & Cinder wastewater treatment plants",
    subtitle: "Lakvijaya Power Plant - Ceylon Electricity Board",
    date: "2024 January",
    tools: ["Jar test", "Turbidity Meter", "pH Meter"],
    image: "/images/projects/wastewater-treatment.jpg",
    details: [
      "Testing of various coagulant dosages",
      "Optimization of wastewater treatment efficiency"
    ]
  },
  {
    title: "Energy Audit",
    subtitle: "Energy Audit in Faculty of Technology, USJ",
    date: "2023 March",
    tools: ["EMS", "Data Loggers", "BEMS", "Carbon Footprint Calculators"],
    image: "/images/projects/energy-audit.jpg",
    details: [
      "Analysis of Lighting and Utility Bills",
      "Implementation of Building Energy Management Systems",
      "Data logging for energy consumption optimization"
    ]
  },
  {
    title: "Liquid Organic Fertilizer Production",
    subtitle: "Organic materials development",
    date: "2021 July",
    tools: ["Fermentation Tanks", "Aeration Systems", "pH Adjustment"],
    image: "/images/projects/organic-fertilizer.jpg",
    details: [
      "Mixing and Homogenization of organic materials",
      "Nutrient addition and pH adjustment for optimal growth"
    ]
  }
];

export const SKILLS: SkillCategory[] = [
  {
    category: "Software",
    skills: ["Altium PCB Design", "Plecs", "PSIM", "LTSpice", "Solidworks", "Autocad", "AspenPlus", "Proteus", "Primavera"]
  },
  {
    category: "Languages & Dev Tools",
    skills: ["Python", "C/C++", "HTML/CSS", "VS Code", "Git/GitHub", "Code Composer Studio"]
  },
  {
    category: "Frameworks & ML",
    skills: ["Django", "Flask", "Bootstrap", "TensorFlow", "Keras", "ANN", "CNN"]
  },
  {
    category: "Databases & Soft Skills",
    skills: ["MySQL", "PostgreSQL", "Team Collaboration", "Problem Solving", "Adaptability", "Project Management"]
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    authors: "T. M. T. N. Thennakoon and N. A. Weerasekara",
    title: "Integrating Aspen Plus Simulation and Machine Learning for Predictive Optimization of Waste Heat Recovery",
    journal: "ICIET 2025 (Proceedings pp. 92)",
    year: "2025",
    link: "https://iciet.sjp.ac.lk/wp-content/uploads/2025/11/ICIET2025_Proceeding__V4.7-To-Cybergate.pdf"
  },
  {
    authors: "T. Thennakoon et al.",
    title: "Paper Recycling for a Sustainable Future: Global Trends",
    journal: "J. Res. Technol. Eng. 4 (3), 169-186",
    year: "2023",
    link: "https://www.jrte.org/2023/07/13/paper-recycling-for-a-sustainable-future-global-trends/"
  },
  {
    authors: "T. Thennakoon et al.",
    title: "Harnessing the Power of Ocean Energy: A Comprehensive Review",
    journal: "J. Res. Technol. Eng. 4 (3), 73-102",
    year: "2023",
    link: "https://www.jrte.org/2023/07/13/harnessing-the-power-of-ocean-energy-a-comprehensive-review-of-power-generation-technologies-and-future-perspectives/"
  },
  {
    authors: "T. Thennakoon et al.",
    title: "Bioplastics for sustainable future",
    journal: "J. Res. Technol. Eng. 4 (2), 99-110",
    year: "2023",
    link: "https://www.jrte.org/2023/04/17/bioplastics-for-sustainable-future/"
  },
  {
    authors: "T. Thennakoon et al.",
    title: "Overview of Solar Electricity in Sri Lanka And Recycling Processes",
    journal: "J. Res. Technol. Eng. 4 (2), 125-153",
    year: "2023",
    link: "https://www.jrte.org/2023/04/17/overview-of-solar-electricity-in-sri-lanka-and-recycling-processes/"
  }
];

export const MEMBERSHIPS: Membership[] = [
  {
    organization: "American Institute of Chemical Engineers (AICHE)",
    role: "Member since 2023"
  },
  {
    organization: "International Association of Engineers (IAENG)",
    role: "Member since 2023"
  }
];

export const POSITIONS: PositionOfResponsibility[] = [
  {
    role: "Secretary",
    organization: "CETSS - Civil and Environmental Technology Student Society - USJ"
  },
  {
    role: "Volunteer",
    organization: "MERAK 2023 | Autism Awareness Beach Clean-Up Event"
  },
  {
    role: "Vice President",
    organization: "Study and Education Subcommittee in Faculty of Technology - USJ"
  }
];

export const REFEREES: Referee[] = [
  {
    name: "Dr. Nuwan Asanka Weerasekara",
    title: "Senior Lecturer",
    institution: "Faculty of Technology, University of Sri Jayewardenepura",
    phone: "0717234119",
    email: "nuwanasanka@sjp.ac.lk"
  },
  {
    name: "Dr. Pabasari Arundathi Koliyabandara",
    title: "Senior Lecturer",
    institution: "Faculty of Technology, University of Sri Jayewardenepura",
    phone: "0779646659",
    email: "arundathi@sjp.ac.lk"
  }
];
