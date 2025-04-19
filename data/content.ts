import { ExperienceType, ProjectType } from "@/types/types";

export const experiences: ExperienceType[] = [
  {
    title: "IGMR Lab Research Assistant",
    date: "Apr 2025 - Present",
    organization: "University of Michigan Robotics Department",
    location: "Ann Arbor, MI, United States",
    points: ["Summer Undergraduate Research in Engineering - SURE 2025"],
  },
  {
    title: "Full-stack Developer Intern",
    date: "July 2024 - Aug 2024",
    organization: "Shenzhen Ningyuan Technology Co",
    location: "Shenzhen, GD, China",
    points: [
      "Employed Vue.js for frontend, Spring Boot for backend, and MySQL for database",
      "Migrated the company’s API documentation from a static front-end implementation to a dynamic back-end solution, enabling the storage and management of documentation within a centralized database",
      "Enhanced the efficiency of the development team by providing a more agile and user-friendly system for managing API documentation, thereby boosting overall productivity",
    ],
  },
  {
    title: "Store Associate",
    date: "May 2024 – Jun 2024",
    organization: "Shoppers Drug Mart",
    location: "Burnaby, BC, Canada",
    points: [
      "Helped answer customer questions and concerns",
      "Removed expired products and restocked shelves",
    ],
  },
  {
    title: "Technician Assistant",
    date: "July 2023 – Aug 2023",
    organization: "BC Technology for Learning Society",
    location: "Burnaby, BC, Canada",
    points: [
      "Categorized computers and recycled their parts",
      "Assisted technicians with monitor testing",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    title: "TeamUp",
    date: "Sept 2024",
    stack: "Next.js, Prisma, MongoDB, GitHub, Auth0, Faker.js",
    link: "https://github.com/Blank-FS/team-up",
    points: [
      "MHacks-2024 (Hackathon) project. The website helps hackers form teams by matching them with other users with similar skill sets/tech stacks",
      "Worked full-stack on the project and collaborated with others using GitHub version controls",
      "Set up the Next.js application, Auth0 authentication, and the Prisma ORM which connects to the database on MongoDB Atlas",
      "Took part in designing the database schemas, writing APIs that perform CRUD operations, generating user data using faker.js for testing purposes, and the design and implementation of the interactive UI for the website",
    ],
  },
  {
    title: "API Documentation Backend",
    date: "July 2024 – Aug. 2024",
    stack: "Java, Maven, Spring Boot, JPA/Hibernate, MySQL, Git",
    link: "https://github.com/Blank-FS/api-document",
    points: [
      "Developed a Spring Boot backend that stores API documents organized by category and topic as String data in a relational database",
      "Used Spring Boot JPA/Hibernate for ORM with a MySQL database",
      "Implemented CRUD operations allowing for the modification of data in the database and the sending of content to the frontend",
    ],
  },
  {
    title: "KotobaQuest",
    date: "Mar. 2024 – Apr. 2024",
    stack:
      "Next.js, Prisma, MySQL, Tailwind CSS, shadcn/ui, Auth.js, Netlify, AWS RDS",
    link: "https://github.com/Blank-FS/kotoba-quest",
    points: [
      "Developed a full-stack application using Next.js for both frontend and backend, Tailwind CSS and shadcn/ui for styling, Prisma for ORM, MySQL for database, and Netlify and AWS RDS for web services",
      "Created public and private routes, implementing Auth.js for user authentication",
      "Designed a website that teaches Japanese vocabulary, containing randomly generated practice sets. Helped students taking Japanese at my school with their language learning",
    ],
  },
];

export const courseworks: string[] = [
  "EECS 489 (Computer Networks)",
  "EECS 481 (Software Engineering)",
  "EECS 445 (Intro to Machine Learning)",
  "EECS 376 (Foundations of Computer Science)",
  "EECS 370 (Intro to Computer Organization)",
  "EECS 281 (Data Structures & Algorithms)",
  "EECS 280 (Programming & Data Structures)",
  "EECS 203 (Discrete Math)",
  "EECS 201 (Computer Science Pragmatics",
];
