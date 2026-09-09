export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'WebGL / 3D' | 'Creative AI' | 'Fullstack Systems' | 'Interactive Design';
  year: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  metrics: {
    label: string;
    value: string;
  }[];
  keyFeatures: string[];
  architectureDetails: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0-100
    highlight: string;
    icon?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  badge: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}
