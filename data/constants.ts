import { ExperienceType, ProjectType } from "./types";

export const experiences: ExperienceType[] = [
  // SMU Start
  // {
  //   title: "Singapore Management University",
  //   subtitle: "Student",
  //   bodyText: `Start point of my coding journey. Prior to this, I have zero knowledge and experience in tech.`,
  //   dateString: "2020 - Present",
  //   imgProps: {
  //     src: "/assets/experience/smu/smu.png",
  //     width: 150,
  //     height: 150,
  //     alt: "smu",
  //     imageClassName: "bg-[var(--color-text-secondary-dark)] p-2",
  //   },
  //   skills: [],
  //   companyLinkedIn: "",
  //   companyWebsite: "",
  //   projectUrl: "",
  // },
  // Quest
  {
    title: "Quest-Inc",
    subtitle: "Software Engineer Intern",
    bodyText: `First tech-related and part-time internship! Dabbled in 
      mobile-development with Flutter and Dart, and it's also my first exposure
      to the software development process and lifecycle!`,
    dateString: "Aug 21 - Dec 21",
    imgProps: {
      src: "/assets/experience/quest/quest.png",
      width: 125,
      height: 125,
      alt: "quest",
      imageClassName: "",
    },
    skills: [
      "Flutter",
      "Dart",
      "Firebase",
      "Telegraf.js",
      "Mobile Development",
    ],
    companyLinkedIn: "https://www.linkedin.com/company/questhireahero/",
    companyWebsite: "https://quest-inc.co/",
    projectUrl: "/experience/quest",
  },
  // SMU TA CT
  {
    title: "Singapore Management University",
    subtitle: "Teaching Assistant",
    bodyText: `Teaching assistant for COR-IS1702 (Computational Thinking).`,
    dateString: "Aug 21 - Dec 21",
    imgProps: {
      src: "/assets/experience/smu/smu.png",
      width: 150,
      height: 150,
      alt: "smu",
      imageClassName: "bg-[var(--color-text-secondary-dark)] p-2",
    },
    skills: ["Python", "Data Structures & Algorithms"],
    companyLinkedIn: "",
    companyWebsite: "",
    projectUrl: "",
  },
  // SMU TA WAD I
  {
    title: "Singapore Management University",
    subtitle: "Teaching Assistant",
    bodyText: "Teaching assistant for IS113 (Web Application Development I).",
    dateString: "Jan 22 - May 22",
    imgProps: {
      src: "/assets/experience/smu/smu.png",
      width: 150,
      height: 150,
      alt: "smu",
      imageClassName: "bg-[var(--color-text-secondary-dark)] p-2",
    },
    skills: ["HTML", "PHP", "MySQL"],
    companyLinkedIn: "",
    companyWebsite: "",
    projectUrl: "",
  },
  // Govtech
  {
    title: "GOVTECH Singapore",
    subtitle: "Software Engineer Intern",
    bodyText: `First exposure to a mid-sized firm with mature software development
      process. Fullstack web development with a full javascript tech-stack.
      Definitely learnt a lot, exciting times!`,
    dateString: "May 22 - Aug 22",
    imgProps: {
      src: "/assets/experience/govtech/govtech.png",
      width: 100,
      height: 100,
      alt: "govtech",
      imageClassName: "",
    },
    skills: ["ReactJs", "VueJs", "ExpressJs", "Jest", "TypeScript", "Docker"],
    companyLinkedIn: "https://www.linkedin.com/company/govtech-singapore/",
    companyWebsite: "https://docs.developer.tech.gov.sg/",
    projectUrl: "/experience/govtech",
  },
  // SMU TA DBTT
  {
    title: "Singapore Management University",
    subtitle: "Teaching Assistant",
    bodyText:
      "Teaching assistant for IS215 (Digital Business Technology & Transformation).",
    dateString: "Jan 23 - May 23",
    imgProps: {
      src: "/assets/experience/smu/smu.png",
      width: 150,
      height: 150,
      alt: "smu",
      imageClassName: "bg-[var(--color-text-secondary-dark)] p-2",
    },
    skills: ["Digital Transformation"],
    companyLinkedIn: "",
    companyWebsite: "",
    projectUrl: "",
  },
  {
    title: "JP Morgan Chase & Co.",
    subtitle: "Software Engineer Intern",
    bodyText: "Have yet to start",
    dateString: "May 23 - Aug 23",
    imgProps: {
      src: "/assets/experience/jpmc/jpmc.png",
      width: 150,
      height: 150,
      alt: "jpmc",
      imageClassName: "bg-[var(--color-text-secondary-dark)] p-2",
    },
    skills: [],
    companyLinkedIn: "https://www.linkedin.com/company/jpmorganchase/",
    companyWebsite: "https://www.jpmorganchase.com/",
    projectUrl: "",
  },
];

export const projects: ProjectType[] = [
  // NextJS Portfolio
  {
    type: "personal",
    dateString: "Dec 2022",
    title: "NextJS Portfolio",
    subtitle: "Responsive and dynamic website",
    bodyText: `Learning of modern technologies through application, to create a second iteration of my digital resume / blog.`,
    githubUrl: "https://github.com/chewyixin99/portfolio-2",
    skills: ["NextJS", "ReactJS", "Tailwind CSS", "TypeScript"],
    projectUrl: "https://chewyixin.vercel.app/",
    projectPath: "/project/personal/portfolio2",
    imgProps: {
      src: "/assets/projects/portfolio2/home.jpg",
      imageClassName: "",
      alt: "oop",
      width: 500,
      height: 500,
    },
  },
  // OOP
  {
    type: "coursework",
    dateString: "Aug 2022 - Dec 2022",
    title: "Singapore Sports School (SSP) Booking Application",
    subtitle: "Coursework for IS442 OOP",
    bodyText: `Collaboration with SSP to implement a loan pass booking system with Agile principles`,
    githubUrl: "https://github.com/chewyixin99/is442-oop-22",
    skills: ["Java", "Springboot", "VueJS", "Agile", "MySQL"],
    projectUrl: "",
    projectPath: "/project/coursework/is442",
    imgProps: {
      src: "/assets/projects/oop/home.jpg",
      imageClassName: "",
      alt: "oop",
      width: 500,
      height: 500,
    },
  },
  // SPM
  {
    type: "coursework",
    dateString: "Aug 2022 - Dec 2022",
    title: "Learning Journey Planning System",
    subtitle: "Coursework for IS212 SPM",
    bodyText: `Implemented Agile methodology and development to deliver an MVP as requirements are constantly updated.`,
    githubUrl: "https://github.com/chewyixin99/is212-spm-22",
    skills: ["ReactJS", "Python", "Flask", "Agile", "Scrum"],
    projectUrl: "",
    projectPath: "/project/coursework/is212",
    imgProps: {
      src: "/assets/projects/spm/home.jpg",
      imageClassName: "",
      alt: "spm",
      width: 500,
      height: 500,
    },
  },
  // WAD II
  {
    type: "coursework",
    dateString: "Aug 2021 - Dec 2021",
    title: "NEXT Team - Basketball Court Traffic App",
    subtitle: "Coursework for IS216 WAD II",
    bodyText: `Basketball pickup game organizer and court traffic visualizer solution to aid basketball players in choosing a court during peak hours.`,
    githubUrl: "https://github.com/chewyixin99/is216-wad2-21",
    skills: ["VueJS", "Tailwind CSS", "Firebase", "Google Maps API"],
    projectUrl: "",
    projectPath: "/project/coursework/is216",
    imgProps: {
      src: "/assets/projects/wad2/home.jpg",
      imageClassName: "",
      alt: "wad2",
      width: 500,
      height: 500,
    },
  },
  // ESD
  {
    type: "coursework",
    dateString: "Jan 2022 - May 2022",
    title: "Hawker Payment System",
    subtitle: "Coursework for IS213 ESD",
    bodyText: `Implemented a hawker payment system using microservices and containerization concepts, with an API gateway.`,
    githubUrl: "https://github.com/chewyixin99/is213-esd-21",
    skills: [
      "Python",
      "Flask",
      "Microservices",
      "Docker",
      "Kong API Gateway",
      "VueJS",
    ],
    projectUrl: "",
    projectPath: "/project/coursework/is213",
    imgProps: {
      src: "/assets/projects/esd/home.jpg",
      imageClassName: "",
      alt: "esd",
      width: 500,
      height: 500,
    },
  },
  // HTML/PHP Portfolio
  {
    type: "personal",
    dateString: "Dec 2020",
    title: "First Portfolio",
    subtitle: "Figuring out the building blocks of a website",
    bodyText: `Introduction to developing a project from scratch, applying concepts learned in my first year of study.`,
    githubUrl: "https://github.com/chewyixin99/portfolio-1",
    skills: ["HTML", "CSS", "Javascript", "PHP"],
    projectUrl: "",
    projectPath: "/project/personal/portfolio1",
    imgProps: {
      src: "/assets/projects/portfolio1/home.jpg",
      imageClassName: "",
      alt: "portfolio1",
      width: 500,
      height: 500,
    },
  },
  // DBTT
  {
    type: "coursework",
    dateString: "Jan 2022 - May 2022",
    title: "Snip Avenue Digital Transformation Plan",
    subtitle: "Coursework for IS215 DBTT",
    bodyText: `Attempt at digitally transforming a traditional business through digitalization and digitization.`,
    githubUrl: "",
    skills: ["Python", "Analytics", "Streamlit API"],
    projectUrl: "",
    projectPath: "/project/coursework/is215",
    imgProps: {
      src: "/assets/projects/dbtt/home.jpg",
      imageClassName: "",
      alt: "dbtt",
      width: 500,
      height: 500,
    },
  },
  // IDP
  {
    type: "coursework",
    dateString: "Aug 2021 - Dec 2021",
    title: "Group Project Enrollment Prototype",
    subtitle: "Coursework for IS211 IDP",
    bodyText: `End-to-end process of designing a solution and adhering to UI/UX principles, from surveying user preference to creating a Hi-Fi wireframe.`,
    githubUrl: "",
    skills: ["Figma", "UI/UX Design", "Usability Testing", "Prototyping"],
    projectUrl: "",
    projectPath: "/project/coursework/is211",
    imgProps: {
      src: "/assets/projects/idp/home.jpg",
      imageClassName: "",
      alt: "idp",
      width: 500,
      height: 500,
    },
  },
  // Selenium booking bot
  {
    type: "personal",
    dateString: "Jul 2021",
    title: "SMU Facility Booking System",
    subtitle: "Telegram bot for SMU FBS",
    bodyText: `Exploring and integrating Telegram with webscraping technologies such as Selenium to create an automated booking solution.`,
    githubUrl: "https://github.com/chewyixin99/selenium-telebot-booking-system",
    skills: ["Python", "Selenium", "Webscraping"],
    projectUrl: "",
    projectPath: "/project/personal/smufbs",
    imgProps: {
      src: "/assets/projects/fbsbot/home.jpg",
      imageClassName: "",
      alt: "fbsbot",
      width: 500,
      height: 500,
    },
  },
];
