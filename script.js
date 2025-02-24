/*
Author: Dawid Pionk
Date: 19/12/2024
Description: This is a script file for the index.html
*/

const sentimentAnalysisProject = {
    title: "Sentiment Analysis Web appilcation for Reddit",
    description: `In this project I created a web application in which a user can enter a certain topic or user they want analysed. The web application makes a request to reddits API receives the posts/comments analyses the sentiment of that data, and then displays it using charts, graphs and tables.`,
    technologies: ["HTML", "CSS", "Javascript", "Chart.js", "D3.js", "Python", "Flask", "PRAW", "VADER", "transformers"],
    github: "https://github.com/DawidP2001/SentimentAnalysisProject"
};

const decisonTreeProject = {
    title: "Decision Tree",
    description: "This project uses a dataset of movie reviews and uses a decision tree to predict the sentiment of the review.",
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/DecisionTrees_IncomePredictor.ipynb"
};

const linearRegressionProject = {
    title: "Linear Regression",
    description: "This project uses a dataset of house prices and uses linear regression to predict the price of a house.",
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/LinearRegressionTesting.ipynb"
};

const multipleLinearRegression = {
    title: "Multiple Linear Regression",
    description: "This project uses a dataset of house prices and uses multiple linear regression to predict the price of a house.",
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/StudentPerformancePredictor.ipynb"
};
const kNearestNeighbor = {
    title: "K-Nearest Neighbor",
    description: "This project uses a dataset of movie reviews and uses a k-nearest neighbor algorithm to predict the sentiment of the review.",
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/k-nearest-neighbors.ipynb"
}
const naiveBayesProject = {
    title: "Naive Bayes",
    description: "This project uses a dataset of movie reviews and uses a naive bayes classifier to predict the sentiment of the review.",
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/Naive-Bayes.ipynb"
};

const supportVectorMachineProject = {
    title: "Support Vector Machine",
    description: "This project uses a dataset of movie reviews and uses a support vector machine to predict the sentiment of the review.",
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/Support-Vector-Machines.ipynb"
};

const kMeans = {
    title: "K-Means",
    description: "This project uses a dataset of movie reviews and uses a k-means clustering algorithm to group the reviews.",
    technologies: ["Python", "Scikit-learn"],
    github: "https://github.com/DawidP2001/MLPortfolio/blob/main/K-Means.ipynb"
};

const javaBytecodeInterpreter = {
    title: "Java Bytecode Interpreter",
    description: "This project is a Java bytecode interpreter that can run Java class files.",
    technologies: ["Java"],
    github: "https://github.com/DawidP2001/Java-Bytecode-Interpreter"
};

const watorProject = {
    title: "Wator Simulation",
    description: "In this application I recreated the wator simulation using GoLang and concurrency.",
    technologies: ["GoLang"],
    github: "https://github.com/DawidP2001/WatorProject"
};

const assemblySpaceShooter = {
    title: "Assembly Space Shooter",
    description: "In this project I created an arcade game in easy68xk assembly language, in which a player controls a spaceship and fights invading aliens in space.",
    technologies: ["Assembly"],
    github: "https://github.com/DawidP2001/Previous-Projects/tree/main/Assembly%20Game"
};

const secureAppDevelopment = {
    title: "Secure App Development",
    description: "This project is a secure Android app that encrypts messages.",
    technologies: ["Java", "Android"],
    github: "https://github.com/DawidP2001/Secure-App-Development-Labs"
};

const concurrentDevelopment = {
    title: "Concurrent Development",
    description: "This project is a multi-threaded program that simulates a bank.",
    technologies: ["Java"],
    github: "https://github.com/DawidP2001/ConDevLabs"
};


function tabChanged(button){
    
    let id = button.id
    let webDevDiv = document.getElementById("webDevelopmentList");
    let mlDiv = document.getElementById("machineLearningList");
    let appDevDiv = document.getElementById("appDevList");
    let gamesDiv = document.getElementById("gamesList");
    let schoolLabsDiv = document.getElementById("schoolLabsList");
    let allDivs = [webDevDiv, mlDiv, appDevDiv, gamesDiv, schoolLabsDiv];

    let webDevTab = document.getElementById("webDevTab");
    let mlTab = document.getElementById("mlTab")
    let appDevTab = document.getElementById("appDevTab");
    let gamesTab = document.getElementById("gamesTab");
    let schoolLabsTab = document.getElementById("schoolLabsTab");
    let allTabs = [webDevTab, mlTab, appDevTab, gamesTab, schoolLabsTab];

    allDivs.forEach(div => {
        div.style.display = "none";
    });

    allTabs.forEach(tab =>{
        tab.classList.remove("selected");
    });
    button.classList.add("selected");
    switch(id){
        case "webDevTab":
            webDevDiv.style.display = "flex";
            break 
        case "mlTab":
            mlDiv.style.display = "flex";
            break 
        case "appDevTab":
            appDevDiv.style.display = "flex";
            break 
        case "gamesTab":
            gamesDiv.style.display = "flex";
            break 
        case "schoolLabsTab":
            schoolLabsDiv.style.display = "flex";
            break 
    }
}

function projectTabChanged(button){
    let allProjectTabs = document.getElementsByClassName("projectTab");
    allProjectTabs = Array.from(allProjectTabs);
    allProjectTabs.forEach(tab =>{
        tab.classList.remove("selected");
    });
    button.classList.add("selected");
    
    let id=button.id;
    switch(id){
        case "redditSentimentTab":
            setProjectDescription(sentimentAnalysisProject);
            break;
        case "decisionTreeTab":
            setProjectDescription(decisonTreeProject);
            break;
        case "linearRegressionTab":
            setProjectDescription(linearRegressionProject);
            break;
        case "multipleLinearRegressionTab":
            setProjectDescription(multipleLinearRegression);
            break;
        case "knnTab":
            setProjectDescription(kNearestNeighbor);
            break;
        case "naiveBayesTab":
            setProjectDescription(naiveBayesProject);
            break;
        case "supportVectorMachineTab":
            setProjectDescription(supportVectorMachineProject);
            break;
        case "kMeansTab":
            setProjectDescription(kMeans);
            break;
        case "svmTab":
            setProjectDescription(supportVectorMachineProject);
            break;
        case "javaBytecodeTab":
            setProjectDescription(javaBytecodeInterpreter);
            break;
        case "watorProjectTab":
            setProjectDescription(watorProject);
            break;
        case "assemblySpaceShooterTab":
            setProjectDescription(assemblySpaceShooter);
            break;
        case "secureDevTab":
            setProjectDescription(secureAppDevelopment);
            break;
        case "concurrentDevTab":
            setProjectDescription(concurrentDevelopment);
            break;
    }
}

function setProjectDescription(project){
    let title = document.getElementById("projectTitle");
    let description = document.getElementById("projectDescription");
    let technologies = document.getElementById("projectTechnologies");
    let github = document.getElementById("projectGithub");
    title.innerText = project.title;
    description.innerText = project.description;
    technologies.innerText = project.technologies.join(", ");
    github.href = project.github;
    github.innerText = "Click Here";
}

function flipCard(card) {
    card.classList.toggle("flipped");
}

function skillContainerClicked(container){
    container.classList.toggle("flipped");
}