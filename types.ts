
export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  tasks: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
}

export interface Project {
  title: string;
  subtitle: string;
  date: string;
  tools: string[];
  details: string[];
}

export interface Publication {
  authors: string;
  title: string;
  journal: string;
  year: string;
  link?: string;
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Membership {
  organization: string;
  role: string;
}

export interface PositionOfResponsibility {
  role: string;
  organization: string;
}

export interface Referee {
  name: string;
  title: string;
  institution: string;
  phone: string;
  email: string;
}
