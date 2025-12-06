export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  isAward: boolean;
  category: string;
  featured: boolean;
  year: string;
  role: string;
  team: string;
  impact: string;
}

export interface Experience {
  id: number;
  period: string;
  role: string;
  company: string;
  description: string;
  achievements: {
    title: string;
    description: Array<{
      text: string;
      link?: string;
    }>;
  }[];
  skills: string[];
  logo?: string;
  color: string;
}

export interface Award {
  id: number;
  title: string;
  organization: string;
  date: string;
  description?: string;
  category: string;
  icon: string;
}

export interface Library {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  stars?: number;
  downloads?: number;
  url: string;
  fullDescription: string;
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "mobile" | "tools" | "design";
  icon: string;
}
