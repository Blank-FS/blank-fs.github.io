export interface ExperienceType {
  title: string;
  date: string;
  organization: string;
  location: string;
  points: string[];
  image?: string;
  imageAlt?: string;
}

export interface ProjectType {
  title: string;
  date: string;
  stack: string[];
  link: string;
  points: string[];
}

export interface SkillType {
  category: string;
  list: SkillItem[];
}

export interface SkillItem {
  name: string;
  image: string;
}
