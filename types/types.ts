export interface ProfileType {
  name: string;
  image: string;
  imageAlt: string;
  linkedin: string;
  github: string;
  email: string;
  resume: string;
}

export interface AboutType {
  greeting: string;
  paragraphs: string[];
}

export interface EducationType {
  school: string;
  image: string;
  imageAlt: string;
  date: string;
  overview: string;
  location: string;
  courseLink: string;
  courseworks: string[];
}

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
  list: Skill[];
}

export interface Skill {
  name: string;
  image: string;
}
