/*
Author: Dawid Pionk
Date: 19/12/2024
Description: This is a script file for the index.html
*/

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

    switch(id){
        case "webDevTab":
            webDevDiv.style.display = "flex";
            webDevTab.classList.add("selected");
            break 
        case "mlTab":
            mlDiv.style.display = "flex";
            mlTab.classList.add("selected")
            break 
        case "appDevTab":
            appDevDiv.style.display = "flex";
            appDevTab.classList.add("selected")
            break 
        case "gamesTab":
            gamesDiv.style.display = "flex";
            gamesTab.classList.add("selected")
            break 
        case "schoolLabsTab":
            schoolLabsDiv.style.display = "flex";
            schoolLabsTab.classList.add("selected")
            break 
    }
}