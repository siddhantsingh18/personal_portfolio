export const portfolioData = {
  personal: {
    name: "Siddhant Singh",
    title: "Full Stack Developer",
    roles: ["Full Stack Developer", "MERN Full Stack Engineer", "B.Tech CSE Student"],
    email: "siddhant.s.9335@gmail.com",
    phone: "+91 9335634541",
    location: "Bareilly, Uttar Pradesh",
    linkedin: "https://linkedin.com/in/siddhant9335",
    github: "https://github.com/siddhantsingh18",
    resumeUrl: "/Siddhant_Singh_Resume.pdf",
    bio: "Final year B.Tech CSE student passionate about building production-ready full-stack web applications. Experienced in the MERN stack with a focus on clean architecture, responsive UI, and real-world impact.",
    availableForWork: true,
  },

  education: [
    {
      degree: "Bachelor of Technology — Computer Science & Engineering",
      institution: "Invertis University",
      period: "2023 – 2027",
      grade: "CGPA: 7.9",
      icon: "🎓",
    },
    {
      degree: "Class 12th (CBSE)",
      institution: "Senior Secondary School",
      period: "2023",
      grade: "70%",
      icon: "📚",
    },
    {
      degree: "Class 10th (CBSE)",
      institution: "Secondary School",
      period: "2021",
      grade: "85%",
      icon: "🏫",
    },
  ],

  skills: {
    "Programming Languages": ["Java", "JavaScript", "TypeScript", "HTML", "CSS"],
    "Frameworks & Libraries": ["ReactJS", "NodeJS", "ExpressJS", "Next.js", "Bootstrap", "TailwindCSS", "Mongoose", "Socket.IO"],
    "Databases": ["PostgreSQL", "MongoDB"],
    "Tools & Platforms": ["Git", "GitHub", "VS Code", "Postman", "Vercel", "Render", "Cursor", "Antigravity"],
    "Visualization": ["Power BI", "Matplotlib"],
    "Languages": ["English", "Hindi"],
  },

  experience: [
    {
      role: "MERN Full Stack Development Intern (Virtual)",
      company: "EduSkills Academy",
      period: "Apr 2026 – Jun 2026",
      type: "Internship",
      highlights: [
        "Completed an 8-week intensive internship culminating in two capstone projects.",
        "Built proficiency in React.js (Hooks, Context API, Redux Toolkit, React Router), Node.js, Express.js, and MongoDB/Mongoose.",
        "Developed RESTful APIs with JWT-based authentication; applied TailwindCSS for responsive UI and DevOps basics via Git workflows.",
        "Capstone: E-commerce Platform with User Management & Product Catalog, and a Time Series Analytics Project.",
      ],
    },
    {
      role: "Web Developer Intern (Virtual)",
      company: "ACMEGRAD",
      period: "Jan 2025 – Mar 2025",
      type: "Internship",
      highlights: [
        "Designed and developed responsive web applications using modern front-end and back-end technologies.",
        "Collaborated with cross-functional teams to deliver scalable, user-friendly web solutions.",
        "Implemented RESTful APIs and optimized database queries to improve application performance.",
      ],
    },
  ],

  projects: [
    {
      title: "MockMate – AI Interview Platform",
      description:
        "Full-stack mock interview platform with AI-generated FAANG-level questions, adaptive difficulty, real-time scoring, and instant feedback powered by Groq AI.",
      tech: ["React", "Express", "MongoDB", "Groq AI"],
      highlights: [
        "AI-generated FAANG-level questions with adaptive difficulty",
        "RESTful backend with JWT auth & MongoDB data modeling",
        "Analytics dashboard with weak topic detection & progress graphs",
        "Voice input via Web Speech API & resume-based question generation",
      ],
      type: "Individual Project",
      gradient: "from-blue-500 to-cyan-500",
      emoji: "🤖",
      image: "/mockmate-preview.png",
      github: "https://github.com/siddhantsingh18/Mock_Mate",
      live: "https://mock-mate-nyol.onrender.com/",
    },
    {
      title: "AI Resume Analyzer",
      description:
        "Full-stack AI-powered resume analyzer with SSR. Users upload resumes and receive AI feedback on content, formatting, and ATS compatibility.",
      tech: ["Next.js", "Express", "Groq AI", "TailwindCSS", "MongoDB"],
      highlights: [
        "SSR with Next.js deployed on Vercel with MongoDB Atlas",
        "AI keyword gap analysis & ATS match scoring against job descriptions",
        "Resume history tracking & downloadable feedback reports",
        "Dashboard with score tracking over time",
      ],
      type: "Individual Project",
      gradient: "from-violet-500 to-purple-500",
      emoji: "📄",
      image: "",
      github: "https://github.com/siddhantsingh18/AI_resume_analyzer",
      live: "#",
    },
    {
      title: "Tomato – Food Delivery App",
      description:
        "Responsive food delivery platform with secure JWT authentication, integrated order tracking, order history, and dynamic menu management.",
      tech: ["React", "Express", "MongoDB", "Multer", "Cloudinary"],
      highlights: [
        "Secure JWT authentication & order tracking",
        "Cloudinary integration for dynamic image management",
        "RESTful APIs for seamless frontend-backend communication",
        "Clean, intuitive UI with real-time product image rendering",
      ],
      type: "Individual Project",
      gradient: "from-orange-500 to-red-500",
      emoji: "🍅",
      image: "/tomato-preview.png",
      github: "https://github.com/siddhantsingh18/FOOD_DELIVERY_APP",
      live: "https://food-del-frontend-erk7.onrender.com",
    },
  ],

  certifications: [
    {
      name: "MERN Full Stack Development with Project",
      issuer: "EduSkills Academy",
      date: "Jun 2026",
      id: "2026-5E9A233886",
      icon: "🏆",
    },
    {
      name: "AI for Beginners",
      issuer: "HP Life",
      date: "2025",
      icon: "🤖",
    },
    {
      name: "Python 101 for Data Science",
      issuer: "IBM Cognitive Classes",
      date: "2024",
      icon: "🐍",
    },
    {
      name: "SQL and Relational Databases 101",
      issuer: "IBM Cognitive Classes",
      date: "2024",
      icon: "🗄️",
    },
  ],

  achievements: [
    "Participated in a 30-hour National Hackathon at Shivalik College of Engineering, Dehradun",
    "Participated in Troubleshoot Ideathon by Microsoft",
  ],
};
