const sentimentAnalysisProject = {
    title: "Sentiment Analysis Web appilcation for Reddit",
    description: `In this project I created a web application in which a user can enter a certain topic or user they want analysed. The web application makes a request to reddits API receives the posts/comments analyses the sentiment of that data, and then displays it using charts, graphs and tables.`,
    technologies: ["HTML", "CSS", "Javascript", "Chart.js", "D3.js", "Python", "Flask", "PRAW", "VADER", "transformers"],
    github: "https://github.com/DawidP2001/SentimentAnalysisProject",
    image: "images/Projects/GAN.jpg"
};

// Machine Learning Projects
// Semsester 1
const decisonTreeProject = {
    title: "Decision Tree",
    description: "This project uses a dataset of movie reviews and uses a decision tree to predict the sentiment of the review.",
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/Decision%20Trees/DecisionTrees_IncomePredictor.ipynb",
    image: "images/Projects/Decision-Tree.svg"
};

const linearRegressionProject = {
    title: "Linear Regression",
    description: "This project uses a dataset of house prices and uses linear regression to predict the price of a house.",
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/DawidP2001/MLPortfolio/tree/main/Linear%20Regression",
    image: "images/Projects/Linear-Regression.png"
};

const multipleLinearRegression = {
    title: "Multiple Linear Regression",
    description: "This project uses a dataset of house prices and uses multiple linear regression to predict the price of a house.",
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/Linear%20Regression/StudentPerformancePredictor.ipynb",
    image: "images/Projects/MLR.jpg"
};

// Semester 2
const kNearestNeighbor = {
    title: "K-Nearest Neighbor",
    description: "In this notebook I go through explaining how the authors model works. I also test out the authors model to better understand it. I then create 2 examples of my own using KNN one for regression and the other for classification. Those models were used to predict the compressive strength of cement and the classifier example involved classifying a types of beans",
    technologies: ["Python", "Jupyter Notebook", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/K-Nearest%20Neighbour/k-nearest-neighbors.ipynb",
    image: "images/Projects/K-Nearest-Neighbor.jpg"
}
const naiveBayesProject = {
    title: "Naive Bayes",
    description: "In this notebook I go through explaining how the authors model works. Tried out how different hyperparameters affect the authors model. I also create my own model using Naive Bayes to predict whether a kickstarter campaign was successful or not. I create 2 projects using Naive Bayes, one to predict the sentiment of tweets involving apple products, and the second that identifies spam emails.",
    technologies: ["Python", "Jupyter Notebook", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/Bayes%20Classifiers/Naive-Bayes.ipynb",
    image: "images/Projects/Naive-Bayes.jpg"
};

const supportVectorMachineProject = {
    title: "Support Vector Machine",
    description: "In this notebook I go through explaining how the authors model works. I also have a section where I test out different types of kernels and parameters to see how they affect the model. I create my own model using SVMs to predict whether a kickstarter campaign was successful or not.",
    technologies: ["Python", "Jupyter Notebook", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/Support%20Vector%20Machines/Support-Vector-Machines.ipynb",
    image: "images/Projects/SVM.png"
};

const kMeans = {
    title: "K-Means",
    description: "In this notebook I go through explaining what the author did. Then I try out different types of kMeans clustering alogorithms. I also make my own model where I try to find out customer segments of online retailers.",
    technologies: ["Python", "Jupyter Notebook", "Scikit-learn", "NumPy", "Pandas", "Matplotlib"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/K-Means/K-Means.ipynb",
    image: "images/Projects/K-Means.png"
};
const LTSM = {
    title: "Long Short-Term Memory Network",
    description: "In this notebook I go through a LTSM example made by another author where they generate shakespearean like text and then I create my own LTSM to classify the sentiment of imdb reviews.",
    technologies: ["Python", "Jupyter Notebook", "tesnorflow", "keras", "numpy", "matplotlib", "keras-tuner"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/Neural%20Networks%20Notebooks/LTSM_NN.ipynb",
    image: "images/Projects/LTSM.png"
};
const GAN = {
    title: "Generative Adversarial Network",
    description: "In this notebook I go through a GAN example made by another author where they generate images of clothes and then I create my own GAN to generate images of handwritten digits based on their model.",
    technologies: ["Python", "Jupyter Notebook", "tesnorflow", "keras", "numpy", "matplotlib"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/Neural%20Networks%20Notebooks/DCGAN_NN.ipynb",
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