export interface Skill {
  name: string;
  category: 'Programming' | 'Frontend' | 'Core CS' | 'Database' | 'AI & Development' | 'Tools';
  description: string;
  iconName: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  keyOutcome: string;
  githubUrl?: string;
  liveUrl?: string;
  isMain?: boolean;
}

export const PORTFOLIO_DATA = {
  candidate: {
    name: "S K SANJAY",
    label: "COMPUTER SCIENCE ENGINEERING",
    headline: "Computer Science Engineering Student | Software Developer | AI & Web Development Enthusiast",
    shortIntro: "A curious CSE student who enjoys learning technology, building practical software projects, and exploring AI, web development, databases, and modern software engineering.",
    subheading: "Software Developer | AI & Web Development",
    supportingText: "Building practical software projects while continuously learning modern technologies, AI, web development, databases, and software engineering.",
    badge: "Open to Software Development Opportunities",
    portraitPath: "/images/sanjay-profile.jpeg",
    portraitAlt: "S K SANJAY wearing a navy-blue formal suit and white shirt",
    email: "sanjusanjay9725@gmail.com",
    linkedIn: "https://www.linkedin.com/in/sk-sanjay-1427aa3a7",
    github: "https://github.com/sksanjay22-stack",
    location: "Coimbatore, Tamil Nadu, India",
    educationPeriod: "2024–2028",
    college: "PPG Institute of Technology"
  },
  
  about: {
    content: "I am a Computer Science and Engineering student interested in software development, AI, web development, databases, and modern software engineering. I enjoy understanding problems, experimenting with technologies, and turning ideas into practical software projects."
  },

  education: [
    {
      institution: "PPG Institute of Technology",
      degree: "B.E. Computer Science and Engineering",
      period: "2024–2028",
      location: "Coimbatore, Tamil Nadu, India",
      description: "Focusing on core computer science subjects, algorithmic problem solving, software design, databases, and practical application development."
    },
    {
      institution: "Holy Rosary Matriculation School",
      degree: "Matriculation",
      period: "Completed",
      location: "Karumathampatti, Coimbatore",
      description: "Strong foundational academic education with emphasis on mathematics, science, and logical reasoning."
    },
    {
      institution: "Government Higher Secondary School",
      degree: "Higher Secondary",
      period: "Completed",
      location: "Vagarayampalayam, Coimbatore",
      description: "Completed higher secondary education in science and mathematics track."
    }
  ] as EducationItem[],

  skills: [
    { name: "Python", category: "Programming", description: "Primary language used for algorithmic problem solving, scripting, and building AI applications.", iconName: "Terminal" },
    { name: "Java", category: "Programming", description: "Object-oriented programming, standard data structures, and core software engineering patterns.", iconName: "Code" },
    { name: "JavaScript", category: "Programming", description: "Dynamic language for web interactive applications, front-end logic, and asynchronous flows.", iconName: "FileCode" },
    { name: "C", category: "Programming", description: "Foundational programming language understanding memory allocation, pointers, and low-level mechanics.", iconName: "Cpu" },
    { name: "HTML", category: "Frontend", description: "Semantic web structure, accessibility standards, and modern layout foundations.", iconName: "Globe" },
    { name: "CSS", category: "Frontend", description: "Modern responsive web design, glassmorphic UI layout systems, and CSS animations.", iconName: "Layout" },
    { name: "Data Structures & Algorithms", category: "Core CS", description: "Arrays, linked lists, trees, graphs, sorting algorithms, and complexity analysis.", iconName: "GitBranch" },
    { name: "Object-Oriented Programming", category: "Core CS", description: "Encapsulation, inheritance, polymorphism, and modular software abstractions.", iconName: "Layers" },
    { name: "Operating Systems", category: "Core CS", description: "Process scheduling, thread concurrency, memory management, and file systems.", iconName: "Server" },
    { name: "Computer Networks", category: "Core CS", description: "TCP/IP suite, HTTP/HTTPS protocols, socket architecture, and networking basics.", iconName: "Network" },
    { name: "SQL", category: "Database", description: "Relational database querying, schema design, table relationships, and index structure.", iconName: "Database" },
    { name: "PostgreSQL", category: "Database", description: "Advanced relational database management system with JSON support and strict integrity.", iconName: "Database" },
    { name: "Firebase", category: "Database", description: "Cloud database storage, authentication, real-time data synchronization, and hosting.", iconName: "Cloud" },
    { name: "DBMS", category: "Database", description: "Database Management System architecture, ACID transactions, and normalization.", iconName: "HardDrive" },
    { name: "AI Applications", category: "AI & Development", description: "Building intelligent application interfaces, prompt engineering, and conversational models.", iconName: "Bot" },
    { name: "Python-based AI Applications", category: "AI & Development", description: "Leveraging Python libraries for intelligent search, natural language processing, and automation.", iconName: "Brain" },
    { name: "Cloud Computing", category: "AI & Development", description: "Basic cloud infrastructure, web deployment pipelines, and scalable service concepts.", iconName: "CloudRain" },
    { name: "Git", category: "Tools", description: "Distributed version control system for tracking software revisions and code branching.", iconName: "GitCommit" },
    { name: "GitHub", category: "Tools", description: "Collaborative project hosting, repository management, and continuous integration workflows.", iconName: "Github" },
    { name: "VS Code", category: "Tools", description: "Primary IDE environment with customized extension toolkits and debugging setups.", iconName: "Monitor" },
    { name: "Figma", category: "Tools", description: "Interface visual design, interactive wireframing, and component layout prototypes.", iconName: "Figma" }
  ] as Skill[],

  mainProject: {
    id: "ai-chatbot",
    title: "AI CHATBOT",
    description: "An AI-focused chatbot project developed to explore conversational interaction, application logic, and practical AI integration.",
    technologies: ["Python", "JavaScript", "AI Integration", "API Routing", "Web UI"],
    keyOutcome: "Successfully created an interactive AI conversational assistant exploring response generation, state handling, and intuitive web interface integration.",
    githubUrl: "https://github.com/sksanjay22-stack",
    isMain: true
  } as Project,

  internship: {
    title: "AI POWERED PYTHON",
    organization: "Livewire Institution",
    description: "Completed an internship focused on AI-powered Python applications, gaining practical exposure to Python programming and AI-related development.",
    skillsGained: ["Python Programming", "AI Integration", "Scripting & Automation", "Project Implementation"]
  },

  journey: [
    { step: "LEARN", title: "Core Fundamentals", description: "Mastering programming logic, Data Structures, Algorithms, and Object-Oriented principles." },
    { step: "BUILD", title: "Practical Application", description: "Developing real-world web applications, AI chatbots, and software tools to apply theory." },
    { step: "EXPERIMENT", title: "Exploring AI & Web", description: "Testing new frameworks, cloud services, and machine intelligence integrations." },
    { step: "IMPROVE", title: "Refining Architecture", description: "Optimizing code quality, visual experience, system performance, and accessibility." },
    { step: "DEPLOY", title: "Sharing Solutions", description: "Shipping functional projects to GitHub and hosting platforms for user engagement." }
  ],

  whatIBring: [
    {
      title: "Problem Solving",
      description: "Strong interest in understanding problems and developing practical solutions.",
      icon: "Lightbulb"
    },
    {
      title: "Technical Curiosity",
      description: "Continuously exploring programming, AI, web development and software technologies.",
      icon: "Compass"
    },
    {
      title: "Project-Based Learning",
      description: "Learning concepts by implementing them in practical projects.",
      icon: "Code2"
    },
    {
      title: "Growth Mindset",
      description: "Open to feedback, new technologies and challenging development environments.",
      icon: "TrendingUp"
    }
  ]
};
