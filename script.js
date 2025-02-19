/*
Author: Dawid Pionk
Date: 19/12/2024
Description: This is a script file for the index.html
*/

const sentimentAnalysisProject = {
    title: "Sentiment Analysis",
    description: "This project uses a dataset of movie reviews and uses a neural network to predict the sentiment of the review.",
    technologies: ["Python", "Tensorflow", "Keras"],
    github: ""
};

const decisonTreeProject = {
    title: "Decision Tree",
    description: "This project uses a dataset of movie reviews and uses a decision tree to predict the sentiment of the review.",
    technologies: ["Python", "Scikit-learn"],
    github: ""
};

const linearRegressionProject = {
    title: "Linear Regression",
    description: "This project uses a dataset of house prices and uses linear regression to predict the price of a house.",
    technologies: ["Python", "Scikit-learn"],
    github: ""
};

const multipleLinearRegression = {
    title: "Multiple Linear Regression",
    description: "This project uses a dataset of house prices and uses multiple linear regression to predict the price of a house.",
    technologies: ["Python", "Scikit-learn"],
    github: ""
};
const kNearestNeighbor = {
    title: "K-Nearest Neighbor",
    description: "This project uses a dataset of movie reviews and uses a k-nearest neighbor algorithm to predict the sentiment of the review.",
    technologies: ["Python", "Scikit-learn"],
    github: ""
}
const naiveBayesProject = {
    title: "Naive Bayes",
    description: "This project uses a dataset of movie reviews and uses a naive bayes classifier to predict the sentiment of the review.",
    technologies: ["Python", "Scikit-learn"],
    github: ""
};

const supportVectorMachineProject = {
    title: "Support Vector Machine",
    description: "This project uses a dataset of movie reviews and uses a support vector machine to predict the sentiment of the review.",
    technologies: ["Python", "Scikit-learn"],
    github: ""
};

const kMeans = {
    title: "K-Means",
    description: "This project uses a dataset of movie reviews and uses a k-means clustering algorithm to group the reviews.",
    technologies: ["Python", "Scikit-learn"],
    github: ""
};

const javaBytecodeInterpreter = {
    title: "Java Bytecode Interpreter",
    description: "This project is a Java bytecode interpreter that can run Java class files.",
    technologies: ["Java"],
    github: ""
};

const watorProject = {
    title: "Wator",
    description: "This project is a simulation of a predator-prey ecosystem.",
    technologies: ["Java"],
    github: ""
};

const assemblySpaceShooter = {
    title: "Assembly Space Shooter",
    description: "This project is a space shooter game written in assembly language.",
    technologies: ["Assembly"],
    github: ""
};

const secureAppDevelopment = {
    title: "Secure App Development",
    description: "This project is a secure Android app that encrypts messages.",
    technologies: ["Java", "Android"],
    github: ""
};

const concurrentDevelopment = {
    title: "Concurrent Development",
    description: "This project is a multi-threaded program that simulates a bank.",
    technologies: ["Java"],
    github: ""
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
    github.innerText = project.github;
}