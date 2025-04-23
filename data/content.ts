import {
  AboutType,
  EducationType,
  ExperienceType,
  ProfileType,
  ProjectType,
  SkillType,
} from "@/types/types";

export const profile: ProfileType = {
  name: "Felix Shen",
  image: "/profile-photo.jpg",
  imageAlt: "Felix Shen's profile photo",
  linkedin: "https://www.linkedin.com/in/felix-shen-a40195299",
  github: "https://github.com/Blank-FS",
  email: "felixshn@umich.edu",
  resume: "/resume.pdf",
};

export const about: AboutType = {
  greeting: "Hi, I'm Felix!👋",
  paragraphs: [
    "I'm a rising junior at the University of Michigan pursuing a BSE in Computer Science, currently holding a 4.0 unweighted GPA. My academic journey is driven by a deep passion for technology and a commitment to continuous learning and growth.",

    "I've had the opportunity to gain hands-on experience through internships and personal projects, where I've worked across the full stack using modern frameworks and tools like Next.js, Spring Boot, and both SQL and NoSQL databases. During my internship at Shenzhen Ningyuan Technology Co., I streamlined API documentation processes by transitioning from a static frontend to a dynamic backend solution using Spring Boot and MySQL — boosting productivity and maintainability for the development team.",

    "Outside of internships, I've worked on several projects such as TeamUp, a full-stack matchmaking platform for hackathons built using Next.js and MongoDB, and KotobaQuest, a Japanese vocabulary learning tool that's actively helped students at my high school. Currently, I'm building an over-the-top (OTT) platform with e-commerce integration using Next.js for frontend and Spring Boot for backend. These experiences not only sharpened my development skills but also taught me the value of collaboration, design thinking, and creating meaningful user experiences.",

    "I'm especially enthusiastic about exploring opportunities where I can grow as a developer, contribute to impactful projects, and work with innovative teams. Whether it's building scalable backend systems, crafting intuitive frontends, or contributing to open-source, I'm eager to keep pushing boundaries and learning more every day.",
  ],
};

export const education: EducationType = {
  school: "University of Michigan",
  image: "/michigan-engineering.png",
  imageAlt: "Michigan Engineering Logo",
  date: "Aug 2024 - May 2027",
  location: "Ann Arbor, MI, United States",
  overview: "BSE in Computer Science (Junior) - GPA: 4.0",
  courseLink: "https://bulletin.engin.umich.edu/courses/eecs/",
  courseworks: [
    "EECS 489 (Computer Networks)",
    "EECS 481 (Software Engineering)",
    "EECS 445 (Intro to Machine Learning)",
    "EECS 376 (Foundations of Computer Science)",
    "EECS 370 (Intro to Computer Organization)",
    "EECS 281 (Data Structures & Algorithms)",
    "EECS 280 (Programming & Data Structures)",
    "EECS 203 (Discrete Math)",
    "EECS 201 (Computer Science Pragmatics)",
  ],
};

export const experiences: ExperienceType[] = [
  {
    title: "IGMR Lab Researcher",
    date: "Apr 2025 - Present",
    organization: "University of Michigan Robotics Department",
    location: "Ann Arbor, MI, United States",
    image: "/experience/umichRob.png",
    imageAlt: "Univeristy of Michigan Robotics Department Logo",
    points: [
      "Summer Undergraduate Research in Engineering - SURE 2025",
      "Develop GUI for advanced robotic microsurgical system with real-time OCT imaging and 3D visualization",
    ],
  },
  {
    title: "Research Programmer",
    date: "Apr 2025 - Present",
    organization: "Michigan Medicine",
    location: "Ann Arbor, MI, United States",
    image: "/experience/umichMed.png",
    imageAlt: "Michigan Medicine Logo",
    points: [
      "Create dynamically generated interactive icon arrays for research study on positively addressing vaccine hesitancy",
    ],
  },
  {
    title: "Full-stack Developer Intern",
    date: "July 2024 - Aug 2024",
    organization: "Shenzhen Ningyuan Technology Co",
    location: "Shenzhen, GD, China",
    image: "/experience/health160.png",
    imageAlt: "Health 160 Logo",
    points: [
      "Employed Vue.js for frontend, Spring Boot for backend, and MySQL for database",
      "Migrated the company's API documentation from a static front-end implementation to a dynamic back-end solution, enabling the storage and management of documentation within a centralized database",
      "Enhanced the efficiency of the development team by providing a more agile and user-friendly system for managing API documentation, thereby boosting overall productivity",
    ],
  },
  {
    title: "Store Associate",
    date: "May 2024 - Jun 2024",
    organization: "Shoppers Drug Mart",
    location: "Burnaby, BC, Canada",
    image: "/experience/shoppers.png",
    imageAlt: "Shoppers Drug Mart Logo",
    points: [
      "Helped answer customer questions and concerns",
      "Removed expired products and restocked shelves",
    ],
  },
  {
    title: "Technician Assistant",
    date: "July 2023 - Aug 2023",
    organization: "BC Technology for Learning Society",
    location: "Burnaby, BC, Canada",
    image: "/experience/bcTech.png",
    imageAlt: "BC Technology for Learning Society Logo",
    points: [
      "Categorized computers and recycled their parts",
      "Assisted technicians with monitor testing",
    ],
  },
];

export const projects: ProjectType[] = [
  {
    title: "Ineed.io",
    date: "Jan 2025 - Apr 2025",
    stack: [
      "TypeScript",
      "React.js",
      "Next.js",
      "Supabase",
      "Figma",
      "Tailwind CSS",
      "GitHub",
    ],
    link: "https://github.com/Blank-FS/michigan-hackers-ineedio-web",
    points: [
      "Michigan Hackers advanced web dev team project- internship tracker platform for students to manage applications",
      "Performed code auditing, refactored code base, and caught infinite api request bug in useEffect dependency array",
      "Utilized Tailwind CSS, shadcn/ui, and Figma for a modern, intuitive UI/UX design",
    ],
  },
  {
    title: "TeamUp",
    date: "Sept 2024",
    stack: [
      "TypeScript",
      "React.js",
      "Next.js",
      "Prisma",
      "MongoDB",
      "GitHub",
      "Auth0",
      "Faker.js",
    ],
    link: "https://github.com/Blank-FS/mhacks-team-up",
    points: [
      "MHacks 2024 (Hackathon) project- a matchmaking platform to help hackers form teams at hackathons",
      "Worked as team lead on the full-stack website and collaborated with others using GitHub",
      "Set up Next.js application, Auth0 authentication, and Prisma ORM with MongoDB atlas",
      "Designed database schemas, wrote APIs that perform CRUD operations, generated mock user data using faker.js, and created interactive UI for the website",
    ],
  },
  {
    title: "API Documentation Backend",
    date: "July 2024 - Aug 2024",
    stack: ["Java", "Maven", "Spring Boot", "JPA/Hibernate", "MySQL", "Git"],
    link: "https://github.com/Blank-FS/api-document",
    points: [
      "Developed a Spring Boot backend that manages markdown api documentation in database",
      "Used JPA/Hibernate for ORM and implemened CRUD operations for database entry modifications",
    ],
  },
  {
    title: "KotobaQuest",
    date: "Mar 2024 - Apr 2024",
    stack: [
      "Next.js",
      "Prisma",
      "MySQL",
      "Tailwind CSS",
      "shadcn/ui",
      "Auth.js",
      "Netlify",
      "AWS RDS",
    ],
    link: "https://github.com/Blank-FS/kotoba-quest",
    points: [
      "Developed a full-stack application using Next.js for both frontend and backend, Tailwind CSS and shadcn/ui for styling, Prisma for ORM, MySQL for database, and Netlify and AWS RDS for web services",
      "Created public and private routes, implementing Auth.js for user authentication",
      "Designed a website that teaches Japanese vocabulary, containing randomly generated practice sets. Helped students taking Japanese at my school with their language learning",
    ],
  },
];

export const skills: SkillType[] = [
  {
    category: "Languages",
    list: [
      {
        name: "C++",
        image: "/skill/languages/cpp.png",
      },
      {
        name: "C",
        image: "/skill/languages/c.png",
      },
      {
        name: "Java",
        image: "/skill/languages/java.png",
      },
      {
        name: "Python",
        image: "/skill/languages/python.png",
      },
      {
        name: "HTML",
        image: "/skill/languages/html.png",
      },
      {
        name: "CSS",
        image: "/skill/languages/css.png",
      },
      {
        name: "JavaScript",
        image: "/skill/languages/js.png",
      },
      {
        name: "TypeScript",
        image: "/skill/languages/ts.png",
      },
      {
        name: "SQL",
        image: "/skill/languages/sql.png",
      },
    ],
  },
  {
    category: "Frontend",
    list: [
      {
        name: "React",
        image: "/skill/frontend/reactjs.webp",
      },
      {
        name: "Next.js",
        image: "/skill/frontend/nextjs.png",
      },
      {
        name: "Tailwind",
        image: "/skill/frontend/tailwind.png",
      },
      {
        name: "Vue.js",
        image: "/skill/frontend/vue.png",
      },
    ],
  },
  {
    category: "Backend",
    list: [
      {
        name: "Spring Boot",
        image: "/skill/backend/springboot.png",
      },
      {
        name: "Hibernate",
        image: "/skill/backend/hibernate.png",
      },
      {
        name: "Node.js",
        image: "/skill/backend/node.png",
      },
      {
        name: "Express.js",
        image: "/skill/backend/express.png",
      },
      {
        name: "Prisma",
        image: "/skill/backend/prisma.png",
      },
      {
        name: "MySQL",
        image: "/skill/backend/mysql.png",
      },
      {
        name: "PostgreSQL",
        image: "/skill/backend/postgresql.png",
      },
      {
        name: "MongoDB",
        image: "/skill/backend/mongodb.png",
      },
      {
        name: "AWS Relational Database Service (RDS)",
        image: "/skill/backend/aws-rds.png",
      },
    ],
  },
  {
    category: "Dev Tools",
    list: [
      {
        name: "Git",
        image: "/skill/devtools/git.png",
      },
      {
        name: "Visual Studio Code",
        image: "/skill/devtools/vscode.png",
      },
      {
        name: "Ubuntu Linux",
        image: "/skill/devtools/ubuntu-linux.jpg",
      },
      {
        name: "Docker",
        image: "/skill/devtools/docker.png",
      },
    ],
  },
];

export const sectionIds = [
  "about-section",
  "education-section",
  "experience-section",
  "projects-section",
  "skills-section",
];
