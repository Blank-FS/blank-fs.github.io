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
