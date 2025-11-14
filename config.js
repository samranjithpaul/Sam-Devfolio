import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail, HiBriefcase } from "react-icons/hi";

export const config = {
    developer: {
        name: "Sam ",

    },
    social: {
        github: "samranjithpaul",
        discord: "#"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: true, // Enable/disable Spotify recent tracks
projects: [
  {
    id: 1,
    title: "NeuroHire – AI Resume Screening System",
    description:
      "AI-powered resume screening platform that extracts key skills, analyzes job fit, and evaluates candidates using a local LLaMA model. Fully private, zero external APIs, and built for real HR workflows.",
    image: "/projects/resumepro.png",

    technologies: ["Python", "LLaMA 3.1", "Ollama", "HTML", "Machine Learning"],
    github: "https://github.com/samranjithpaul/NeuroHire",
   
  },
  {
    id: 2,
    title: "Online Payment Fraud Detection",
    description:
      "A machine learning model to detect fraudulent online transactions. Includes data preprocessing, feature engineering, model training, and performance evaluation using scikit-learn.",
    image: "/projects/fraud.png",
    technologies: ["Python", "Scikit-learn", "Pandas", "Data Science"],
    github: "https://github.com/samranjithpaul/Online_payment_fraud_detection",
   
  },
  {
    id: 3,
    title: "Student Management System – MERN",
    description:
      "A complete MERN application for managing student records with CRUD operations, search, filtering, and image upload. Features clean UI, secure backend APIs, and responsive design.",
    image: "/projects/studentmern.png",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    github: "https://github.com/samranjithpaul/student-management-system-MERN",
    
  },
  {
    id: 4,
    title: "Cosmic Particles Renderer",
    description:
      "A 3D particle system simulating cosmic phenomena like star fields and nebulae using Three.js. Features interactive controls, dynamic animations, and visually stunning effects.",
    image: "/projects/3D.png",
    technologies: ["Next.js", "Three.js", "React", "TypeScript"],
    github: "https://github.com/samranjithpaul/Cosmic-Particles-Renderer",

    demo: "https://cosmic-particles-renderer.vercel.app"
  },
  {
    id: 5,
    title: "Ephemeral Chat – Privacy-First Real-time Chat",
    description:
      "A privacy-first real-time chat app where messages disappear automatically. No logs, no storage, no tracking — just anonymous one-time conversations.",
    image: "/projects/chat.png",
    technologies: ["Next.js", "TypeScript", "Realtime", "WebSockets"],
    github: "https://github.com/samranjithpaul/ephemeral-chat",
    demo: "https://ephemeral-chat-0ejy.onrender.com"
  }
],


   
       skills: [
    {
        title: "Frontend Development",
        icon: <HiCode />,
        description: "Building clean and responsive user interfaces.",
        bgClass: "bg-blue-500/10",
        iconClass: "text-blue-500",
        skills: [
            { name: "JavaScript", level: "Intermediate", hot: true },
            { name: "React", level: "Intermediate" },
            { name: "HTML & CSS", level: "Intermediate" },
            { name: "Tailwind CSS", level: "Intermediate" },
            { name: "TypeScript", level: "Beginner" }
        ]
    },

    {
        title: "Backend & Programming",
        icon: <HiDatabase />,
        description: "Core programming and backend fundamentals.",
        bgClass: "bg-emerald-500/10",
        iconClass: "text-emerald-500",
        skills: [
            { name: "Python", level: "Intermediate", hot: true },
            { name: "Node.js", level: "Beginner" },
            { name: "Express", level: "Beginner" },
            { name: "MongoDB", level: "Beginner" },
            { name: "MySQL", level: "Beginner" },

            // Programming fundamentals (course)
            { name: "C", level: "Beginner" },
            { name: "C++", level: "Intermediate" },
            { name: "Java", level: "Intermediate" }
        ]
    },

    {
        title: "DevOps & Tools",
        icon: <HiCube />,
        description: "Tools that support development and deployment.",
        bgClass: "bg-orange-500/10",
        iconClass: "text-orange-500",
        skills: [
            { name: "Git", level: "Intermediate", hot: true },
            { name: "Docker", level: "Beginner" },
            { name: "DevOps", level: "Beginner" },
            { name: "Cursor", level: "Intermediate", hot: true },
            { name: "VS Code", level: "Advanced" },
            { name: "Prompt Engineering", level: "Intermediate" }
        ]
    },

    {
        title: "Office & Productivity Tools",
        icon: <HiBriefcase />,
        description: "Tools for documentation, presentations and workflow.",
        bgClass: "bg-purple-500/10",
        iconClass: "text-purple-500",
        skills: [
            { name: "Microsoft Word", level: "Advanced" },
            { name: "Microsoft Excel", level: "Beginner" },
            { name: "PowerPoint", level: "Advanced" },
            { name: "Canva", level: "Intermediate" }
        ]
    }
],


   experiences: [

      {
        position: "Oracle DevOps Intern",
        company: "AdrolT Technologies / Innovative Solutions Pvt Ltd",
        period: "September 2025 – October 2025",
        location: "Remote — Coimbatore, India",
        description: "Hands-on training and practical exposure to Oracle DevOps tools, CI/CD pipelines, and deployment workflows at an authorized Oracle partner.",
        responsibilities: [
            "Worked with Oracle DevOps tools to support automation and continuous integration",
            "Assisted in configuring CI/CD pipelines using Jenkins and version control systems",
            "Learned build automation, artifact management, and deployment lifecycle",
            "Gained practical understanding of Oracle cloud DevOps workflows"
        ],
        technologies: ["Oracle DevOps", "Jenkins", "CI/CD", "Git", "DevOps Tools"]
    },
    
    {

        position: "Machine Learning Intern",
        company: "KnackTech",
        period: "February 2025 – April 2025",
        location: "Remote — Bangalore, India",
        description: "Worked on machine learning workflows including preprocessing, model development, and evaluation using Python-based tools.",
        responsibilities: [
            "Performed data cleaning, preprocessing, and feature engineering for ML datasets",
            "Trained and evaluated models using scikit-learn and Python",
            "Analyzed model performance using accuracy, precision, recall, and confusion matrix",
            "Collaborated with senior engineers to improve model accuracy and reliability"
        ],
        technologies: ["Python", "scikit-learn", "NumPy", "Pandas", "Machine Learning"]
    },
],
    contactInfo: [
     
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@samranjithpaul",
            link: `https://github.com/samranjithpaul`
        },
        {
            icon: <HiMail className="w-5 h-5" />,
            label: "Email",
            value: "samranjithpaul71@gmail.com",
            link: "mailto:samranjithpaul71@gmail.com"
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "India",
            link: null
        }
    ]
}