/**
 * Project related constants
 */

// Export all product constants
export const allProjects = [
   {
    id: 1,
    name: "Knitting Page",
    description: "A beautifully crafted website showcasing handmade knitting and crocheting projects. Features an elegant, responsive design that adapts seamlessly to mobile and desktop devices. Built with modern web technologies and designed in Figma for optimal user experience and visual appeal.",
    technologies: ["React", "TypeScript", "CSS", "HTML", "Javascript", "Talwind", "Figma"],
    links: {
      website: "https://caillougarage.ie/",
      github: "https://github.com/DawidP2001/Louisas-Website"
    },
    imgSrc: "/ProjectImages/Caillougarage.png",
  },
  {
    id: 2,
    name: "Assembly Game",
    description: "Developed a 2D space shooter game using Motorola 68k assembly language, simulating graphics and game logic on the Easy68K platform. Designed collision detection, enemies & obstacles, healing, shooting, scoring system, and player controls entirely in low-level assembly. ",
    technologies: ["x68k Assembly"],
    links: {
      github: "https://github.com/DawidP2001/Assembly-Space-Shooter",
      youtube: "https://www.youtube.com/watch?v=cJfXVqM_lLw",
    },
    imgSrc: "/ProjectImages/AssemblyGame.png",
  },
  {
    id: 3,
    name: "Wa-Tor Simulation",
    description: "A high-performance recreation of the classic Wa-Tor predator-prey ecosystem simulation built with Go. Leverages goroutines to simulate different grid regions concurrently, while using channels to prevent race conditions. Features realistic shark and fish behaviors including feeding, breeding, and starvation mechanics.",
    technologies: ["Golang", "Multithreading"],
    links: {
      github: "https://github.com/DawidP2001/WatorProject",
      youtube: "https://www.youtube.com/watch?v=c0f9OOvz064&t=57s"  
    },
    imgSrc: "/ProjectImages/wator.png",
  },
  {
    id: 4,
    name: "Java Bytecode Interpreter",
    description: "An educational GUI tool that visualizes Java bytecode execution in real-time. Features interactive simulation of the operand stack, local variables, and control flow to help understand JVM internals. Built with Java Swing for an intuitive desktop interface.",
    technologies: ["Java", "Swing"],
    links:  {
      github: "https://github.com/DawidP2001/Java-Bytecode-Interpreter",
      youtube: "https://www.youtube.com/watch?v=FaSXbZgiHk0"
    },
    imgSrc: "/ProjectImages/Bytecode.png",
  },
  {
    id: 5,
    name: "Machine Learning Portfolio",
    description: "A comprehensive collection of 7+ machine learning models developed over a year-long period. Features advanced neural network architectures including LSTM and GAN models, demonstrating expertise in both supervised and unsupervised learning techniques across various domains.",
    technologies: ["Python", "TensorFlow", "scikit-learn", "NLTK", "pandas"],
    links: {
      github: "https://github.com/DawidP2001/MLPortfolio",
    },
    imgSrc: "/ProjectImages/MLPortfolio.png",
  },
  {
    id: 6,
    name: "Reddit Sentiment Analyser",
    description: "Award-winning full-stack web application that analyzes and visualizes sentiment trends in Reddit posts. Shortlisted for the prestigious Sun Life final year projects award. Features a reactive JavaScript frontend with Bootstrap styling and a Flask backend serving real-time sentiment analysis. Utilizes Reddit API with PRAW for data extraction and combines NLTK, VADER, TensorFlow, and Hugging Face transformers for comprehensive sentiment analysis.",
    technologies: ["Flask", "Vader", "Python", "TensorFlow", "JavaScript", "Bootstrap", "HTML", "CSS"],
    links: {
      github: "https://github.com/DawidP2001/Reddit-Sentiment-Analyser",
      youtube: "https://www.youtube.com/watch?v=stT0a62jSAU",
      website: "https://showcase.itcarlow.ie/C00273530/index.html"
    },
    imgSrc: "/ProjectImages/RedditSentiment.png",
  },
  {
    id: 7,
    name: "Flappy dog",
    description: "A charming C++ recreation of the classic Flappy Bird game featuring an adorable dachshund as the protagonist. Features hand-drawn animations created in Krita, complete scoring system, and physics-based gameplay. Currently expanding with a customizable skin system for enhanced player personalization.",
    technologies: ["C++", "SFML", "Krita"],
    links: {
      github: "https://github.com/DawidP2001/Floppy-Bird"
    },
    imgSrc: "/ProjectImages/flappy-dog.png",
  },
  {
    id: 8,
    name: "Portfolio Website",
    description: "A modern, fully responsive portfolio website showcasing my projects and technical skills. Built with React and TypeScript for robust development, featuring smooth animations with Framer Motion and elegant styling with Tailwind CSS. Optimized for seamless viewing across all devices and screen sizes.",
    technologies: ["React", "TypeScript", "CSS", "Tailwind", "HTML", "Javascript"],
    links: {
      github: "https://github.com/DawidP2001/PortfolioWebsite"
    },
    imgSrc: "/ProjectImages/RedditSentiment.png",
  }
];