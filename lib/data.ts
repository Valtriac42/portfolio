import { FaCertificate, FaGithub, FaLinkedin, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export const experienceData = [
  {
    title: "Software Engineer Intern",
    company: "JPMorgan Chase & Co",
    location: "Virtual",
    description: [
      "Developed software modules using JPMorgan Chase internal tools and frameworks.",
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
  // {
  //   id: 2,
  //   title: "Node.js Essential Training",
  //   institution: "LinkedIn Learning",
  //   duration: "Issued: October 2024",
  //   description: "Completed comprehensive training on Node.js, covering core concepts and advanced topics.",
  //   link: "https://www.linkedin.com/learning/certificates/997f1d774775099388365bae6887f2684a2a4380e27dc89ecad8a237dae70be4",
  //   icon: FaLinkedinIn,
  // },
  {
    id: 3,
    title: "Node.js: Microservices",
    institution: "LinkedIn Learning",
    duration: "Issued: October 2024",
    description: "Completed advanced training on building microservices with Node.js and Express.",
    link: "https://www.linkedin.com/learning/certificates/997f1d774775099388365bae6887f2684a2a4380e27dc89ecad8a237dae70be4",
    icon: FaLinkedinIn,
  },
  {
    id: 4,
    title: "React.js Essential Training",
    institution: "LinkedIn Learning",
    duration: "Issued: October 2024",
    description: "Completed comprehensive training on React.js, covering core concepts and advanced topics.",
    link: "https://www.linkedin.com/learning/certificates/9135ec5ae78db93e17ce883e0abaa53369da8f54d155828452334a61774bc8c6",
    icon: FaLinkedinIn,
  },
  // {
  //   id: 5,
  //   title: "Node.js: Security",
  //   institution: "LinkedIn Learning",
  //   duration: "Issued: September 2024",
  //   description: "Completed advanced training on securing Node.js applications and APIs.",
  //   link: "https://www.linkedin.com/learning/certificates/139d20ceb826c3f4aff0e02236c969438e075961ca091bf4f99740262effbd62?trk=share_certificate",
  //   icon: FaLinkedinIn,
  // },
  {
    id: 6,
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