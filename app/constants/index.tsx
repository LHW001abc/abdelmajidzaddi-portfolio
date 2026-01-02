export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];
export const tech = ["/icons/python.png", "/icons/tensorflow.png", "/icons/docker.png", "/icons/py.png", "/icons/kb.png", "/icons/git.png"];
export const gridItems = [
  {
    id: 1,
    title: "I prioritize innovation and cutting-edge AI solutions",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-3 lg:min-h-[60vh]",
    imgClassName: "w-full h-full object-top md:object-center",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4 ",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Building intelligent AI/ML solutions with production-ready deployments.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: " right-0 absloute",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building AI & Machine Learning projects",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to work with me ?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center absolute md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 7,
    title: "<AI/ML Engineering>",
    text: "I engineer robust AI/ML solutions using Python, TensorFlow, PyTorch, and cloud platforms. From building deep learning models to deploying scalable ML pipelines, I navigate AI complexities with precision. Each model is meticulously crafted for accuracy, scalability, and production-readiness.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[59vh]  md:min-h-[50vh] ",
    imgClassName: "  w-[20rem] object-top md:object-center",
    titleClassName: " justify-start",
    img: "/backend.png",
    spareImg: "",
  },
  {
    id: 8,
    title: "Crafting Intelligent Solutions: Showcasing My AI/ML Expertise and Data Science Projects",

    className: "lg:col-span-3 md:col-span-3 md:row-span-1  min-h-[40vh] h-full",
    imgClassName: " absolute right-0 -bottom-12 md:w-96 w-60",
    titleClassName: " justify-start",
    img: "/frontend.png",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "NexoWorld | Mobile Game",
    des: "An innovative mobile game merging exploration, digital currency, and social interaction in real-world environments. NexoWorld blends AR with spatial data and microservices architecture for seamless real-time updates.",
    img: "/projects/nexoworld.png",
    iconLists: ["/icons/spring-boot.png", "/icons/docker.png", "/icons/kb.png", "/icons/kafka.png", "/icons/mongodb.png", "/icons/redis.png"],
    link: "",
    git: "https://github.com/NexoWorld",
    gen: "Mobile",
    features: [
      "Real-Time Location-Based Gameplay with AR",
      "In-App Currency System with trading capabilities",
      "Microservices Architecture for scalability",
      "Cross-Platform Flutter development",
      "Redis caching and Kafka messaging",
      "Cloud-Native Docker & Kubernetes deployment"
    ],
  },
  {
    id: 2,
    title: "Automatic Image Captioning",
    des: "An AI-powered system for generating descriptive captions for images using advanced deep learning techniques including CNNs and transformer architectures.",
    img: "/projects/P1.png",
    iconLists: ["/icons/python.png", "/icons/tensorflow.png", "/icons/cv.jpg"],
    link: "",
    git: "",
    gen: "AI",
    features: [
      "Image analysis and processing",
      "Natural language generation",
      "Deep learning architecture",
      "Caption optimization"
    ],
  },
  {
    id: 3,
    title: "Automatic Speech Recognition",
    des: "Advanced speech recognition system that converts spoken language into written text using machine learning and signal processing techniques.",
    img: "/projects/p2.png",
    iconLists: ["/icons/python.png", "/icons/py.png", "/icons/hg.png"],
    link: "",
    git: "",
    gen: "ML",
    features: [
      "Real-time speech processing",
      "Multi-language support",
      "Noise reduction algorithms",
      "Signal processing pipelines"
    ],
  },
  {
    id: 4,
    title: "Stock Price Forecasting",
    des: "Machine learning system for analyzing and predicting stock market prices and trends using time series analysis and predictive modeling.",
    img: "/projects/P3.png",
    iconLists: ["/icons/python.png", "/icons/tensorflow.png", "/icons/postgres.png"],
    link: "",
    git: "",
    gen: "ML",
    features: [
      "Price prediction models",
      "Trend analysis algorithms",
      "Market indicators integration",
      "Time series forecasting"
    ],
  },
  {
    id: 5,
    title: "Fine-tuning Stable Diffusion XL",
    des: "Project focused on fine-tuning the Stable Diffusion XL model for improved performance on specific use cases using advanced deep learning techniques.",
    img: "/projects/P4.png",
    iconLists: ["/icons/python.png", "/icons/py.png", "/icons/hg.png"],
    link: "",
    git: "",
    gen: "NLP",
    features: [
      "Model optimization techniques",
      "Performance tuning",
      "Custom training pipelines",
      "Transfer learning"
    ],
  },
  {
    id: 6,
    title: "Busway Ticket Chatbot",
    des: "Innovative web app for seamless busway ticket reservations, using Neo4j to manage complex data relationships with an AIML-powered chatbot interface.",
    img: "/projects/busway-ticket-chatbot.png",
    iconLists: ["/icons/spring-boot.png", "/icons/neo4j.png", "/icons/docker.png"],
    link: "",
    git: "https://github.com/ismailza/Busway-TicketChatBot",
    gen: "Web",
    features: [
      "AIML-Powered Chatbot interface",
      "Neo4j graph database integration",
      "Online reservation system 24/7",
      "Dynamic data management",
      "User-friendly Thymeleaf interface"
    ],
  },
  {
    id: 7,
    title: "NYC Traffic Centralization",
    des: "Web portal for analyzing and visualizing traffic centrality in NYC using AGNES clustering and Leaflet.js for interactive map visualization.",
    img: "/projects/traffic-centrality.png",
    iconLists: ["/icons/python.png", "/icons/docker.png"],
    link: "",
    git: "https://github.com/ismailza/Traffic-Centrality",
    gen: "Web",
    features: [
      "Interactive Map Visualization",
      "Advanced Data Filters by time",
      "Color-Coded Traffic Clusters",
      "AGNES clustering algorithm",
      "Multi-Language Support"
    ],
  },
  {
    id: 8,
    title: "JI2A Payroll Management",
    des: "Full-stack web app for managing organizational payroll processes with PHP, Bootstrap and MySQL including employee management and automated calculations.",
    img: "/projects/ji2a.png",
    iconLists: ["/icons/php.png", "/icons/mysql.png"],
    link: "",
    git: "https://github.com/ismailza/Gestion_Paie",
    gen: "Web",
    features: [
      "User authentication and authorization",
      "Employee management with profiles",
      "Automated payroll calculations",
      "Tax deductions processing"
    ],
  },
  {
    id: 9,
    title: "Checkers Game",
    des: "Desktop Checkers game developed with C and GTK+ featuring AI opponents with varying difficulty levels and multiple game modes.",
    img: "/projects/checkers.png",
    iconLists: ["/icons/c.png"],
    link: "",
    git: "",
    gen: "Desktop",
    features: [
      "Classic Checkers gameplay with GUI",
      "Single-player mode against AI",
      "Two-player competitive mode",
      "AI with varying difficulty levels",
      "AI vs AI automated gameplay"
    ],
  },
];

export const JOBS = [
  {
    title: "AI Engineering | Futurate By Infosysta",
    des: "Full-time AI Engineering role working on cutting-edge AI solutions using Python, PyTorch, Hugging Face, and various ML frameworks for production-ready deployments.",
    img: "/logo/ft.png",
    gen: "AI",
    iconLists: ["/icons/python.png", "/icons/py.png", "/icons/hg.png", "/icons/docker.png", "/icons/fastapi.png"],
    id: 1,
  },
  {
    title: "NLP Engineering Intern | 3D SMART FACTORY",
    des: "Worked on NLP solutions using Streamlit, Pandas, and PyTorch for data processing and model development in a hybrid work environment.",
    img: "/logo/3D.png",
    gen: "NLP",
    iconLists: ["/icons/python.png", "/icons/py.png", "/icons/docker.png"],
    id: 2,
  },
  {
    title: "AI Developer | UPWORK",
    des: "Freelance AI development working on computer vision projects using Python, OpenCV, YOLO Framework, and TensorFlow/PyTorch.",
    img: "/logo/up.png",
    gen: "AI",
    iconLists: ["/icons/python.png", "/icons/tensorflow.png", "/icons/cv.jpg"],
    id: 3,
  },
  {
    title: "AI Developer & GenAI Intern | Cash Plus",
    des: "Developed GenAI solutions using LangChain, ChromaDB, and Hugging Face models with CI/CD pipelines for production deployment.",
    img: "/logo/cash.png",
    gen: "GenAI",
    iconLists: ["/icons/python.png", "/icons/hg.png", "/icons/docker.png"],
    id: 4,
  },
  {
    title: "Machine Learning Developer | ADAONE",
    des: "Remote ML development role working on Python-based ML solutions with AWS deployment and Flask APIs with CI/CD integration.",
    img: "",
    gen: "ML",
    iconLists: ["/icons/python.png", "/icons/flask.png", "/icons/docker.png"],
    id: 5,
  },
];

export const testimonials = [
  {
    quote:
      "Comprehensive DevOps course covering containerization, orchestration, and modern deployment practices for production-ready applications.",
    name: "DevOps Concepts",
    title: "DataCamp",
    img: "/certificates/DevOps Concepts-1.png",
    link: "",
  },
  {
    quote:
      "Mastered Git workflows, branching strategies, and advanced version control techniques for collaborative software development.",
    name: "Intermediate Git",
    title: "DataCamp",
    img: "/certificates/Intermediate Git-1.png",
    link: "",
  },
  {
    quote:
      "Learned Docker containerization including image building, container management, and deployment strategies.",
    name: "Introduction to Docker",
    title: "DataCamp",
    img: "/certificates/Introduction to Docker-1.png",
    link: "",
  },
  {
    quote:
      "Explored Kubernetes orchestration for managing containerized applications at scale with deployment and service management.",
    name: "Introduction to Kubernetes",
    title: "DataCamp",
    img: "/certificates/Introduction to Kubernetes-1.png",
    link: "",
  },
  {
    quote:
      "Comprehensive MLOps course covering model deployment, monitoring, and lifecycle management for production ML systems.",
    name: "MLOps Concepts",
    title: "DataCamp",
    img: "/certificates/MLOps Concepts-1.png",
    link: "",
  },
];

export const companies = [
  {
    id: 1,
    name: "Python",
    img: "/icons/python.png",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "TensorFlow",
    img: "/icons/tensorflow.png",
    nameImg: "/cloudName.svg",
  },
  {
    id: 3,
    name: "PyTorch",
    img: "/icons/py.png",
    nameImg: "/cloudName.svg",
  },
  {
    id: 4,
    name: "Docker",
    img: "/icons/docker.png",
    nameImg: "/appName.svg",
  },
  {
    id: 5,
    name: "Kubernetes",
    img: "/icons/kb.png",
    nameImg: "/hostName.svg",
  },
  {
    id: 6,
    name: "Hugging Face",
    img: "/icons/hg.png",
    nameImg: "/streamName.svg",
  },
  {
    id: 7,
    name: "Apache Spark",
    img: "/icons/ap.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 8,
    name: "PostgreSQL",
    img: "/icons/postgres.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 9,
    name: "MongoDB",
    img: "/icons/mongodb.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 10,
    name: "Git",
    img: "/icons/git.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 11,
    name: "MLflow",
    img: "/icons/MLFLOW.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 12,
    name: "Spring Boot",
    img: "/icons/spring-boot.png",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "AI Engineer at Futurate",
    desc: "Building production-ready AI/ML solutions with Python, PyTorch, and Hugging Face models.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "NLP Engineering Intern",
    desc: "Developed NLP solutions using Streamlit, Pandas, and deep learning frameworks.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance AI Developer",
    desc: "Building computer vision and ML solutions for clients on Upwork.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Machine Learning Developer",
    desc: "Developing and deploying ML models with AWS, Flask, and CI/CD pipelines.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/LHW001abc",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/abdelmajid-zaddi-694b2b290/",
  },
];
