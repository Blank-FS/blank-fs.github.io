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
  greeting: "Hi, I'm Felix!",
  paragraphs: [
    "I'm an upcoming senior at the University of Michigan pursuing a BSE in Computer Science with a 4.0 GPA. I'm passionate about building scalable, production-ready systems and continuously refining my skills across the full stack.",

    "Through internships and independent projects, I've worked extensively with modern technologies including Next.js, Spring Boot, SQL and NoSQL databases, Docker, and AWS. During my internship at Shenzhen Ningyuan Technology Co., I improved the team's API documentation workflow by transitioning from a static frontend approach to a dynamic backend-driven system using Spring Boot and MySQL, significantly increasing maintainability and development efficiency.",

    "Outside of internships, I focus on building end-to-end products. I developed TeamUp, a full-stack hackathon matchmaking platform using Next.js and MongoDB, and KotobaQuest, a Japanese vocabulary learning tool adopted by students at my high school. I am currently building Aniworks, a full-stack anime and manga platform that began as a tracking application and is evolving into a broader ecosystem featuring social functionality, an OTT streaming component, and e-commerce integration. I handle the full lifecycle—from architecture and development to cloud deployment and infrastructure configuration.",

    "I'm especially interested in opportunities where I can work on challenging engineering problems, contribute to scalable systems, and collaborate with teams that value technical excellence. Whether building robust backend services, crafting intuitive user experiences, or improving system infrastructure, I'm motivated by solving meaningful problems and continuously learning.",
  ],
};

export const education: EducationType = {
  school: "University of Michigan",
  image: "/michigan-engineering.png",
  imageAlt: "Michigan Engineering Logo",
  date: "Aug 2024 - May 2027",
  location: "Ann Arbor, MI, United States",
  overview: "BSE in Computer Science (Senior) - GPA: 4.0",
  courseLink: "https://bulletin.engin.umich.edu/courses/eecs/",
  courseworks: [
    "EECS 497 (Human-Centered Software Design and Development)",
    "EECS 489 (Computer Networks)",
    "EECS 482 (Operating Systems)",
    "EECS 481 (Software Engineering)",
    "EECS 445 (Machine Learning)",
    "EECS 376 (Foundations of Computer Science)",
    "EECS 370 (Computer Organization)",
    "EECS 281 (Data Structures & Algorithms)",
    "EECS 280 (Programming & Data Structures)",
    "EECS 203 (Discrete Math)",
    "EECS 201 (Computer Science Pragmatics)",
  ],
};

export const experiences: ExperienceType[] = [
  {
    title: "IGMR Lab Research Assistant",
    date: "Apr 2025 - Present",
    organization: "University of Michigan Robotics Department",
    location: "Ann Arbor, MI, United States",
    image: "/experience/umichRob.png",
    imageAlt: "Univeristy of Michigan Robotics Department Logo",
    points: [
      "Developed control software for a dual-arm robotic microsurgery system with teleoperation via haptic devices",
      "Integrated Cyclone DDS to enable real-time, low-latency data communication between system components",
      "Architected data transmission framework across distributed nodes, ensuring scalability and robust performance",
    ],
  },
  {
    title: "BAAC Lab Research Assistant",
    date: "Apr 2025 - Present",
    organization: "Michigan Medicine",
    location: "Ann Arbor, MI, United States",
    image: "/experience/umichMed.png",
    imageAlt: "Michigan Medicine Logo",
    points: [
      "Programmed interactive icon array visuals for study on how data presentation affects understanding and decisions",
      "Customized Qualtrics surveys with JavaScript and CSS to meet complex research requirements",
      "Built and deployed website on AWS EC2 instance using Docker and Nginx for a vaccine decision aid study",
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
    title: "Aniworks",
    date: "Nov 2025 - Present",
    stack: [
      "Next.js (TypeScript)",
      "Spring Boot",
      "Docker",
      "AWS",
      "Nginx",
      "Cloudflare",
    ],
    link: "https://aniworks.net/",
    points: [
      "Engineered a full-stack anime & manga tracking platform using React and Spring Boot",
      "Designed RESTful APIs with secure JWT-based authentication and persistent data storage",
      "Containerized services with Docker and deployed to AWS using ECR, EC2, and Nginx",
      "Configured Cloudflare for DNS, routing, HTTPS, and reverse proxy management",
    ],
  },
  {
    title: "Intervention Studies",
    date: "Sept 2025 - Present",
    stack: ["Next.js (TypeScript)", "Spring Boot", "Docker", "AWS", "Nginx"],
    link: "https://github.com/Blank-FS/intervention-studies",
    points: [
      "Created a platform for researchers to conduct studies on with a dashboard to manage users and study responses",
      "Implemented role-based auth with JWTs, displaying different pages for researchers and participants",
    ],
  },
  {
    title: "Ineed.io",
    date: "Jan 2025 - Apr 2025",
    stack: [
      "Next.js (TypeScript)",
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
      "Next.js (TypeScript)",
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
        name: "Node.js",
        image: "/skill/backend/node.png",
      },
      {
        name: "Express.js",
        image: "/skill/backend/express.png",
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
    ],
  },
  {
    category: "Cloud & DevOps",
    list: [
      {
        name: "Docker",
        image: "/skill/cloud-devops/docker.png",
      },
      {
        name: "AWS",
        image: "/skill/cloud-devops/aws.png",
      },
      {
        name: "AWS Elastic Compute Cloud (EC2)",
        image: "/skill/cloud-devops/aws-ec2.png",
      },
      {
        name: "AWS Elastic Container Registry (ECR)",
        image: "/skill/cloud-devops/aws-ecr.png",
      },
      {
        name: "AWS Relational Database Service (RDS)",
        image: "/skill/cloud-devops/aws-rds.png",
      },
      {
        name: "AWS Simple Storage Service (S3)",
        image: "/skill/cloud-devops/aws-s3.png",
      },
      {
        name: "AWS CloudFront",
        image: "/skill/cloud-devops/aws-cloudfront.png",
      },
      {
        name: "Nginx",
        image: "/skill/cloud-devops/nginx.png",
      },
      {
        name: "Cloudflare",
        image: "/skill/cloud-devops/cloudflare.png",
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
        name: "Postman",
        image: "/skill/devtools/postman.png",
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
