export type ImagePropsType = {
  src: string;
  width: number;
  height: number;
  alt: string;
  imageClassName: string;
};

export type ExperienceType = {
  id: number;
  title: string;
  subtitle: string;
  bodyText: string;
  dateString: string;
  imgProps: ImagePropsType;
  skills: string[];
  className: string;
  companyLinkedIn: string;
  companyWebsite: string;
  projectUrl: string;
};

export type ProjectType = {
  id: number;
  type: string;
  title: string;
  subtitle: string;
  bodyText: string;
  githubUrl: string;
  skills: string[];
  projectUrl: string;
  imgProps: ImagePropsType;
};

export const experiences: ExperienceType[] = [
  // SMU Start
  {
    id: 1,
    title: "Singapore Management University",
    subtitle: "Student",
    bodyText: `Start point of my coding journey. Prior to this, I have zero knowledge and experience in tech.`,
    dateString: "2020 - Present",
    imgProps: {
      src: "/assets/experience/smu/smu.png",
      width: 150,
      height: 150,
      alt: "smu",
      imageClassName: "bg-[var(--color-text-secondary-dark)] p-2 rounded-lg",
    },
    skills: [],
    className: "py-5",
    companyLinkedIn: "",
    companyWebsite: "",
    projectUrl: "",
  },
  // Quest
  {
    id: 2,
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
    skills: ["Flutter", "Dart", "Firebase", "Telegraf.js"],
    className: "py-5",
    companyLinkedIn: "https://www.linkedin.com/company/questhireahero/",
    companyWebsite: "https://quest-inc.co/",
    projectUrl: "/quest",
  },
  // SMU TA CT
  {
    id: 3,
    title: "Singapore Management University",
    subtitle: "Teaching Assistant",
    bodyText: `Teaching assistant for COR-IS1702 (Computational Thinking).`,
    dateString: "Aug 21 - Dec 21",
    imgProps: {
      src: "/assets/experience/smu/smu.png",
      width: 150,
      height: 150,
      alt: "smu",
      imageClassName: "bg-[var(--color-text-secondary-dark)] p-2 rounded-lg",
    },
    skills: ["Python", "Data Structures & Algorithms"],
    className: "py-5",
    companyLinkedIn: "",
    companyWebsite: "",
    projectUrl: "",
  },
  // SMU TA WAD I
  {
    id: 4,
    title: "Singapore Management University",
    subtitle: "Teaching Assistant",
    bodyText: "Teaching assistant for IS113 (Web Application Development I).",
    dateString: "Jan 22 - May 22",
    imgProps: {
      src: "/assets/experience/smu/smu.png",
      width: 150,
      height: 150,
      alt: "smu",
      imageClassName: "bg-[var(--color-text-secondary-dark)] p-2 rounded-lg",
    },
    skills: ["HTML", "PHP", "MySQL"],
    className: "py-5",
    companyLinkedIn: "",
    companyWebsite: "",
    projectUrl: "",
  },
  // Govtech
  {
    id: 5,
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
    className: "py-5",
    companyLinkedIn: "https://www.linkedin.com/company/govtech-singapore/",
    companyWebsite: "https://docs.developer.tech.gov.sg/",
    projectUrl: "/govtech",
  },
  // SMU TA DBTT
  {
    id: 6,
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
      imageClassName: "bg-[var(--color-text-secondary-dark)] p-2 rounded-lg",
    },
    skills: ["Digital Transformation"],
    className: "py-5",
    companyLinkedIn: "",
    companyWebsite: "",
    projectUrl: "",
  },
  {
    id: 7,
    title: "JP Morgan Chase & Co.",
    subtitle: "Software Engineer Intern",
    bodyText: "Have yet to start",
    dateString: "May 23 - Aug 23",
    imgProps: {
      src: "/assets/experience/jpmc/jpmc.png",
      width: 150,
      height: 150,
      alt: "jpmc",
      imageClassName: "bg-[var(--color-text-secondary-dark)] p-2 rounded-lg",
    },
    skills: [],
    className: "py-5",
    companyLinkedIn: "https://www.linkedin.com/company/jpmorganchase/",
    companyWebsite: "https://www.jpmorganchase.com/",
    projectUrl: "",
  },
];

export const projects: ProjectType[] = [
  // NextJS Portfolio
  {
    id: 1,
    type: "personal",
    title: "NextJS Portfolio",
    subtitle: "Learning tech by applying",
    bodyText: `Some description for this project. Some description for this project. Some description for this project.`,
    githubUrl: "https://github.com/chewyixin99/portfolio-2",
    skills: ["NextJS", "ReactJS", "Tailwind CSS", "TypeScript"],
    projectUrl: "/",
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
    id: 2,
    type: "coursework",
    title: "Singapore Sports School Booking Application",
    subtitle: "Coursework for IS442 OOP",
    bodyText: `Some description for this project. Some description for this project. Some description for this project.`,
    githubUrl: "https://github.com/chewyixin99/is442-oop-22",
    skills: ["Java", "Springboot", "VueJS"],
    projectUrl: "/",
    imgProps: {
      src: "/assets/projects/oop/login.jpg",
      imageClassName: "",
      alt: "oop",
      width: 500,
      height: 500,
    },
  },
  // SPM
  {
    id: 3,
    type: "coursework",
    title: "Learning Journey Planning System",
    subtitle: "Coursework for IS212 SPM",
    bodyText: `Some description for this project. Some description for this project. Some description for this project.`,
    githubUrl: "https://github.com/chewyixin99/is212-spm-22",
    skills: ["ReactJS", "Python", "Flask"],
    projectUrl: "/",
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
    id: 4,
    type: "coursework",
    title: "NEXT Team - Basketball Court Traffic App",
    subtitle: "Coursework for IS216 WAD II",
    bodyText: `Some description for this project. Some description for this project. Some description for this project.`,
    githubUrl: "https://github.com/chewyixin99/is216-wad2-21",
    skills: ["VueJS", "Tailwind CSS", "Firebase"],
    projectUrl: "/",
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
    id: 5,
    type: "coursework",
    title: "Hawker Dummy Payment System",
    subtitle: "Coursework for IS213 ESD",
    bodyText: `Some description for this project. Some description for this project. Some description for this project.`,
    githubUrl: "https://github.com/chewyixin99/is213-esd-21",
    skills: [
      "Python",
      "Flask",
      "Microservices",
      "Docker",
      "Kong API Gateway",
      "VueJS",
    ],
    projectUrl: "/",
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
    id: 6,
    type: "personal",
    title: "First Portfolio",
    subtitle: "Attempt at coding a website from scratch",
    bodyText: `Some description for this project. Some description for this project. Some description for this project.`,
    githubUrl: "https://github.com/chewyixin99/portfolio-1",
    skills: ["HTML", "CSS", "Javascript", "PHP"],
    projectUrl: "/",
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
    id: 7,
    type: "coursework",
    title: "Snip Avenue Digital Transformation Plan",
    subtitle: "Coursework for IS215 DBTT",
    bodyText: `Some description for this project. Some description for this project. Some description for this project.`,
    githubUrl: "",
    skills: ["Python", "Analytics", "Streamlit API"],
    projectUrl: "/",
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
    id: 8,
    type: "coursework",
    title: "Group Project Enrollment Prototype",
    subtitle: "Coursework for IS211 IDP",
    bodyText: `Some description for this project. Some description for this project. Some description for this project.`,
    githubUrl: "",
    skills: ["Figma", "UI Design", "Usability Testing", "Prototyping"],
    projectUrl: "/",
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
    id: 9,
    type: "personal",
    title: "SMU Facility Booking System",
    subtitle: "Telegram bot for SMU FBS",
    bodyText: `Some description for this project. Some description for this project. Some description for this project.`,
    githubUrl: "",
    skills: ["Python", "Selenium", "Webscraping"],
    projectUrl: "/",
    imgProps: {
      src: "/assets/projects/fbsbot/home.jpg",
      imageClassName: "",
      alt: "fbsbot",
      width: 500,
      height: 500,
    },
  },
];
