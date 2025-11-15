import { FaCertificate, FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export const experienceData = [
  {
    title: "Software Developer",
    company: "BigCircle",
    location: "Gandhinagar, India",
    description: [
      "Designed, Developed, and Maintained robust software applications, ensuring high performance and scalability.",
    ],
    date: "Oct 2024 - Present",
  },
  {
    title: "Freelancer",
    company: "Self-Employed",
    location: "Remote",
    description: [
      "Designed and Developed web applications using modern technologies like Next.js, TypeScript, and Tailwind CSS.",
      "Configured AWS services, such as EC2, S3, and Amplify, to streamline development and deployment processes.",
    ],
    date: "Aug 2023 - Oct 2024",
  },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Valtriac42/",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/priyanshusharma42/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "priyanshusharma42v@gmail.com",
    icon: MdMail,
  },
  {
    label: "Twitter",
    href: "https://twitter.com/priyanshu42",
    icon: FaTwitter,
  },
] as const;

export const projects = [
  {
    title: "RealTime Whiteboard Sharing App",
    description: "A real-time whiteboard built with React, Socket.IO, and Node.js. Users can share a room and view the presenter's live drawing updates.",
    tags: ["Node.js", "Express.js", "Socket.IO", "React", "TailwindCSS", "Socket.IO-client", "Socket.IO-client"],
    github: "https://github.com/Valtriac42/Realtime-Whiteboard",
    demo: "https://realtime-whiteboard-frontend.vercel.app/",
    icon: "🎨",
  },
  {
    title: "To Do Application",
    description: "This is a solution to the Todo app challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
    tags: ["Semantic HTML5 markup", "SCSS / Sass", "Flexbox", "mobile-first workflow", "Javascript"],
    github: "https://github.com/Valtriac42/To-Do-Application",
    demo: "https://todoapplicationz.netlify.app/",
    icon: "📑",
  },
  {
    title: "Simple Web Calculator",
    description: "This is a solution to the Calculator app challenge on Frontend Mentor. Frontend Mentor challenges help you improve your coding skills by building realistic projects.",
    tags: ["Semantic HTML5 markup", "CSS custom properties", "Flexbox", "CSS Grid", "Desktop-first workflow", "JavaScript"],
    github: "https://github.com/Valtriac42/Simple-Calculator",
    demo: "https://simple-calculator42.netlify.app/",
    icon: "🌟",
  },
  {
    title: "Portfolio Website",
    description: "Responsive portfolio website with modern animations, dark theme, and optimized performance built with Next.js.",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript", "Vercel"],
    github: "https://github.com/Valtriac42/portfolio",
    demo: "https://portfolio-7dx6.vercel.app/",
    icon: "🌟",
  },
] as const;

export const certificates = [
  {
    id: 1,
    title: "GitHub Foundations",
    institution: "GitHub",
    duration: "Issued: March 2025",
    description: "Demonstrated proficiency in Git and GitHub by completing foundational training.",
    link: "https://www.credly.com/badges/799557dd-ffee-4fdc-b489-21c8af85dba1/public_url",
    icon: FaGithub,
  },
  {
    id: 2,
    title: "DSA WITH JAVA",
    institution: "Apna College",
    duration: "Issued: November 2023",
    description: "Completed comprehensive training on Data Structures and Algorithms using Java.",
    link: "https://drive.google.com/file/d/1pjfNmiDzv4zKTqrNHStoYttus1EtWSQi/view?usp=sharing",
    icon: FaCertificate,
  },
];

type EducationItem = {
  id: number;
  title: string;
  institution: string;
  duration: string;
  description: string;
};

export const educationData: EducationItem[] = [
  {
    id: 1,
    title: "Bachelor of Bachelor of Technology in Computer Science",
    institution: "Abdul Kalam Technical University",
    duration: "2021 - 2025",
    description:
      "Pursuing comprehensive studies in software development, algorithms, data structures, and modern programming paradigms with focus on practical application development.",
  },
  {
    id: 2,
    title: "Higher Secondary School",
    institution: "Mayo International School",
    duration: "2020 - 2021",
    description: "Completed Science stream education with strong foundation in Physics, Chemistry, and Mathematics.",
  },
];