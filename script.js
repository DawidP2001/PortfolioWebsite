const sentimentAnalysisProject = {
    title: "Sentiment Analysis Web appilcation for Reddit",
    description: `In this project I created a web application in which a user can enter a certain topic or user they want analysed. The web application makes a request to reddits API receives the posts/comments analyses the sentiment of that data, and then displays it using charts, graphs and tables.`,
    technologies: ["HTML", "CSS", "Javascript", "Chart.js", "D3.js", "Python", "Flask", "PRAW", "VADER", "transformers"],
    github: "https://github.com/DawidP2001/SentimentAnalysisProject",
    image: "images/Projects/GAN.jpg"
};

// Machine Learning Projects
const decisonTreeProject = {
    title: "Decision Tree",
    description: "This project uses a dataset of movie reviews and uses a decision tree to predict the sentiment of the review.",
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/DecisionTrees_IncomePredictor.ipynb",
    image: "images/Projects/Decision-Tree.svg"
};

const linearRegressionProject = {
    title: "Linear Regression",
    description: "This project uses a dataset of house prices and uses linear regression to predict the price of a house.",
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/LinearRegressionTesting.ipynb",
    image: "images/Projects/Linear-Regression.png"
};

const multipleLinearRegression = {
    title: "Multiple Linear Regression",
    description: "This project uses a dataset of house prices and uses multiple linear regression to predict the price of a house.",
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/StudentPerformancePredictor.ipynb",
    image: "images/Projects/MLR.jpg"
};
const kNearestNeighbor = {
    title: "K-Nearest Neighbor",
    description: "This project uses a dataset of movie reviews and uses a k-nearest neighbor algorithm to predict the sentiment of the review.",
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/k-nearest-neighbors.ipynb",
    image: "images/Projects/K-Nearest-Neighbor.jpg"
}
const naiveBayesProject = {
    title: "Naive Bayes",
    description: "This project uses a dataset of movie reviews and uses a naive bayes classifier to predict the sentiment of the review.",
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/Naive-Bayes.ipynb",
    image: "images/Projects/Naive-Bayes.jpg"
};

const supportVectorMachineProject = {
    title: "Support Vector Machine",
    description: "This project uses a dataset of movie reviews and uses a support vector machine to predict the sentiment of the review.",
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/Support-Vector-Machines.ipynb",
    image: "images/Projects/SVM.png"
};

const kMeans = {
    title: "K-Means",
    description: "This project uses a dataset of movie reviews and uses a k-means clustering algorithm to group the reviews.",
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/K-Means.ipynb",
    image: "images/Projects/K-Means.png"
};
const LTSM = {
    title: "LTSM",
    description: "This project uses a dataset of movie reviews and uses a k-means clustering algorithm to group the reviews.",
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/K-Means.ipynb",
    image: "images/Projects/LTSM.png"
};
const GAN = {
    title: "GAN",
    description: "This project uses a dataset of movie reviews and uses a k-means clustering algorithm to group the reviews.",
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/K-Means.ipynb",
    image: "images/Projects/GAN.jpg"
};
// Other Projects
const javaBytecodeInterpreter = {
    title: "Java Bytecode Interpreter",
    description: "This project is a Java bytecode interpreter that can run Java class files.",
    technologies: ["Java"],
    github: "https://github.com/DawidP2001/Java-Bytecode-Interpreter",
    image: "images/Projects/GAN.jpg"
};

const watorProject = {
    title: "Wator Simulation",
    description: "In this application I recreated the wator simulation using GoLang and concurrency.",
    technologies: ["GoLang"],
    github: "https://github.com/DawidP2001/WatorProject",
    image: "images/Projects/GAN.jpg"
};

const assemblySpaceShooter = {
    title: "Assembly Space Shooter",
    description: "In this project I created an arcade game in easy68xk assembly language, in which a player controls a spaceship and fights invading aliens in space.",
    technologies: ["Assembly"],
    github: "https://github.com/DawidP2001/Previous-Projects/tree/main/Assembly%20Game",
    image: "images/Projects/GAN.jpg"
};

window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Remove active class from all links
                    navLinks.forEach((link) => link.classList.remove("active"));

                    // Add active class to the corresponding link
                    const activeLink = document.querySelector(
                        `.nav-link[data-section="${entry.target.id}"]`
                    );
                    activeLink.classList.add("active");
                    entry.target.classList.add('visible')
                }
            });
        },
        { threshold: 0.4 } // Trigger when 60% of the section is visible
    );

    sections.forEach((section) => observer.observe(section));
});

function projectChanged(button){
    let allProjectTabs = document.getElementsByClassName("project-btn");
    allProjectTabs = Array.from(allProjectTabs);
    allProjectTabs.forEach(tab =>{
        tab.classList.remove("selected");
    });
    button.classList.add("selected");
    
    let id=button.id;
    switch(id){
        case "redditSentiment":
            setProjectDescription(sentimentAnalysisProject);
            break;
        case "decisionTree":
            setProjectDescription(decisonTreeProject);
            break;
        case "linearRegression":
            setProjectDescription(linearRegressionProject);
            break;
        case "multipleLinearRegression":
            setProjectDescription(multipleLinearRegression);
            break;
        case "knn":
            setProjectDescription(kNearestNeighbor);
            break;
        case "naiveBayes":
            setProjectDescription(naiveBayesProject);
            break;
        case "supportVectorMachine":
            setProjectDescription(supportVectorMachineProject);
            break;
        case "kMeans":
            setProjectDescription(kMeans);
            break;
        case "ltsm":
            setProjectDescription(LTSM);
            break;
        case "gan":
            setProjectDescription(GAN);
            break;
        case "javaBytecode":
            setProjectDescription(javaBytecodeInterpreter);
            break;
        case "watorProject":
            setProjectDescription(watorProject);
            break;
        case "assemblySpaceShooter":
            setProjectDescription(assemblySpaceShooter);
            break;
    }
}

function setProjectDescription(project){
    let title = document.getElementById("projectTitle");
    let description = document.getElementById("projectDescription");
    let technologies = document.getElementById("projectTechnologies");
    let github = document.getElementById("projectGithub");
    let image = document.getElementById("projectImage");
    title.innerText = project.title;
    description.innerText = project.description;
    technologies.innerText = project.technologies.join(", ");
    github.href = project.github;
    image.src= project.image;
}

// Create an intersection observer to track when the element is in view
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add 'visible' class when in view
            observer.unobserve(entry.target); // Stop observing after the element appears
        }
    });
}, { threshold: 0.5 }); // 50% of the element is visible before the animation triggers

// Observe the target element
document.querySelectorAll('.scroll-element').forEach(element => {
    observer.observe(element);
});