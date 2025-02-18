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
    switch(id){
        case "webDevTab":
            webDevDiv.style.display = "flex";
            mlDiv.style.display = "none";
            appDevDiv.style.display = "none";
            gamesDiv.style.display = "none";
            schoolLabsDiv.style.display = "none";

            webDevDiv.classList.add("selected");
            mlDiv.classList.remove("selected")
            appDevDiv.classList.remove("selected")
            gamesDiv.classList.remove("selected")
            schoolLabsDiv.classList.remove("selected")
            break 
        case "mlTab":
            webDevDiv.style.display = "none";
            mlDiv.style.display = "flex";
            appDevDiv.style.display = "none";
            gamesDiv.style.display = "none";
            schoolLabsDiv.style.display = "none";

            webDevDiv.classList.remove("selected");
            mlDiv.classList.add("selected")
            appDevDiv.classList.remove("selected")
            gamesDiv.classList.remove("selected")
            schoolLabsDiv.classList.remove("selected")
            break 
        case "appDevTab":
            webDevDiv.style.display = "none";
            mlDiv.style.display = "none";
            appDevDiv.style.display = "flex";
            gamesDiv.style.display = "none";
            schoolLabsDiv.style.display = "none";

            webDevDiv.classList.remove("selected");
            mlDiv.classList.remove("selected")
            appDevDiv.classList.add("selected")
            gamesDiv.classList.remove("selected")
            schoolLabsDiv.classList.remove("selected")
            break 
        case "gamesTab":
            webDevDiv.style.display = "none";
            mlDiv.style.display = "none";
            appDevDiv.style.display = "none";
            gamesDiv.style.display = "flex";
            schoolLabsDiv.style.display = "none";

            webDevDiv.classList.remove("selected");
            mlDiv.classList.remove("selected")
            appDevDiv.classList.remove("selected")
            gamesDiv.classList.add("selected")
            schoolLabsDiv.classList.remove("selected")
            break 
        case "schoolLabsTab":
            webDevDiv.style.display = "none";
            mlDiv.style.display = "none";
            appDevDiv.style.display = "none";
            gamesDiv.style.display = "none";
            schoolLabsDiv.style.display = "flex";

            webDevDiv.classList.remove("selected");
            mlDiv.classList.remove("selected")
            appDevDiv.classList.remove("selected")
            gamesDiv.classList.remove("selected")
            schoolLabsDiv.classList.add("selected")
            break 
    }
}