import { 
  Code2, 
  Database, 
  Layout, 
  Terminal 
} from 'lucide-react';

export interface Skill {
  name: string;
  level: number; // percentage
  iconName: string;
}

export interface SkillCategory {
  title: string;
  icon: any;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  score: string;
  details: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  details: string[];
}

export interface AchievementItem {
  title: string;
  category: 'problem-solving' | 'certification' | 'events' | 'open-source';
  description: string;
  date: string;
  link?: string;
}

export const personalInfo = {
  name: 'Chaitanya Bodkhe',
  title: 'Java Full Stack Developer',
  email: 'bodkhechaitanya154@gmail.com',
  phone: '+91 7499876327',
  location: 'Chhatrapati Sambhajinagar, Maharashtra, India',
  resumeUrl: '#', 
  github: 'https://github.com/ChaitanyaDevX',
  linkedin: 'https://www.linkedin.com/in/chaitanya-bodkhe-304569318',
  introduction: 'Java Full Stack Developer skilled in building Android and backend systems using Core Java, Spring Boot, and REST APIs. Strong in Data Structures, Algorithms, debugging, and software testing with a growing interest in AI-assisted code generation, code verification, and software reliability.',
  bio: 'I am currently pursuing my B.E. in Information Technology from the International Institute of Information Technology (I2IT), Pune, holding a CGPA of 8.59. With a strong academic foundation including a Diploma in Computer Engineering (91.54%) and SSC (94%), I specialize in writing clean, logic-driven code. I have hands-on experience building full-stack Android apps and backend systems, with a passion for software testing and debugging.'
};

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: Terminal,
    skills: [
      { name: 'Java', level: 90, iconName: 'Coffee' },
      { name: 'JavaScript', level: 75, iconName: 'Js' },
      { name: 'Python (Basic)', level: 60, iconName: 'FileText' },
      { name: 'HTML & CSS', level: 85, iconName: 'Html' }
    ]
  },
  {
    title: 'Backend & Database Systems',
    icon: Database,
    skills: [
      { name: 'Spring Boot', level: 85, iconName: 'Leaf' },
      { name: 'MySQL', level: 80, iconName: 'Database' },
      { name: 'Firebase', level: 75, iconName: 'Box' },
      { name: 'REST APIs', level: 85, iconName: 'Globe' }
    ]
  },
  {
    title: 'Developer Tools',
    icon: Code2,
    skills: [
      { name: 'Git & GitHub', level: 85, iconName: 'Github' },
      { name: 'Android Studio', level: 80, iconName: 'Smartphone' },
      { name: 'Postman', level: 80, iconName: 'Mail' },
      { name: 'JUnit (Basic)', level: 70, iconName: 'FileCheck' }
    ]
  },
  {
    title: 'Core Concepts & Exposure',
    icon: Layout,
    skills: [
      { name: 'Data Structures & Algorithms', level: 85, iconName: 'GitFork' },
      { name: 'OOP & Software Testing', level: 80, iconName: 'Code' },
      { name: 'Debugging & Verification', level: 85, iconName: 'Bug' },
      { name: 'AI & LLMs (Gemini/ChatGPT APIs)', level: 75, iconName: 'Cpu' }
    ]
  }
];

export const projectsData: Project[] = [
  {
    title: 'AgriMart – Smart Farming App',
    description: 'A full-stack application for farmers featuring real-time pricing, ordering, and operations management.',
    longDescription: 'AgriMart is a reliability-focused farming assistant. Built using Java and Spring Boot for a clean backend, integrated with MySQL and REST APIs, this multi-user application provides farmers with live market price trackers, order management systems, and simplified agriculture workflows.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API', 'Android'],
    githubUrl: 'https://github.com/ChaitanyaDevX',
    image: 'student_system' // Maps to custom schematic illustration layout in Projects.tsx
  },
  {
    title: 'BookMyTrain – Ticket Booking System',
    description: 'A robust booking platform with user authentication, seat management, and database integration.',
    longDescription: 'Developed a responsive ticket reservation system. Engineered custom business logic for real-time booking flows, transaction rollbacks, and data sanitization. Focuses on strict logical validation to ensure database trustworthiness.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'REST API'],
    githubUrl: 'https://github.com/ChaitanyaDevX',
    image: 'ecommerce' // Maps to custom schematic illustration layout in Projects.tsx
  },
  {
    title: 'Smart Task Scheduler (Priority Queue)',
    description: 'An optimized task scheduling system using custom priority queue algorithms.',
    longDescription: 'Created a task coordinator utilizing Data Structures and Algorithms. Features dynamic prioritization models to order scheduled outputs correctly. Implemented logical validation to verify execution-order correctness, reducing latency and processing delays.',
    technologies: ['Java', 'Data Structures', 'Algorithms'],
    githubUrl: 'https://github.com/ChaitanyaDevX',
    image: 'task_manager' // Maps to custom schematic illustration layout in Projects.tsx
  }
];

export const educationData: EducationItem[] = [
  {
    degree: 'B.E. in Information Technology',
    institution: 'International Institute of Information Technology (I2IT), Pune',
    period: '2025 - 2028',
    score: 'CGPA: 8.59',
    details: [
      'Focusing on Advanced Software Engineering, Data Structures, Algorithms, and Object-Oriented System Design.',
      'Exploring AI-assisted code generation, Gemini/ChatGPT APIs, and code reliability methodologies.'
    ]
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'Government Polytechnic Ambad',
    period: '2022 - 2025',
    score: 'Percentage: 91.54%',
    details: [
      'Graduated with excellent scores, ranking high in the department.',
      'Studied core computer engineering subjects: OOP (Java), Database Systems, Web development, and Software Testing.'
    ]
  },
  {
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Z.P. School Galleborgav',
    period: '2021 - 2022',
    score: 'Percentage: 94.00%',
    details: [
      'Excelled in mathematics, sciences, and logical reasoning modules.'
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    role: 'Android Developer Intern',
    company: 'Mountreach Solution Pvt Ltd',
    period: 'July 2024 - November 2024',
    details: [
      'Built a full-stack Android application with clean API and local SQLite/Firebase database integration.',
      'Verified correctness through systematic debugging and unit-level evaluations.',
      'Designed and tested REST APIs using Postman to verify smooth backend transactions.',
      'Improved product reliability, user interface responsiveness, and data latency performance.'
    ]
  },
  {
    role: 'Java Developer Intern – Best Performer',
    company: 'Elevate Labs',
    period: 'Internship Duration',
    details: [
      'Worked on Java application development, focusing on backend business logic and complex problem-solving.',
      'Strengthened Core Java, Object-Oriented Design (OOP), debugging, optimization, and software testing practices.',
      'Awarded "Best Performer" recognition for delivering high-quality, bug-free codebase features.'
    ]
  }
];

export const achievementsData: AchievementItem[] = [
  {
    title: 'Oracle Certified Foundations Associate (Java)',
    category: 'certification',
    description: 'Passed official Oracle examination demonstrating proficiency in Java fundamentals, OOP concepts, exceptions, and core API libraries.',
    date: '2024'
  },
  {
    title: 'AI For All – Intel',
    category: 'certification',
    description: 'Completed Intel program focused on foundational AI concepts, model behaviors, and ethical applications.',
    date: '2024'
  },
  {
    title: 'Best Performer – Elevate Labs',
    category: 'events',
    description: 'Recognized for excellent problem-solving, code optimization, and software reliability engineering during internship.',
    date: '2024'
  },
  {
    title: '150+ DSA Problems Solved',
    category: 'problem-solving',
    description: 'Solved standard algorithmic challenges across arrays, strings, stack/queue, and trees on LeetCode/GeeksforGeeks.',
    date: 'Ongoing',
    link: 'https://leetcode.com/'
  }
];
