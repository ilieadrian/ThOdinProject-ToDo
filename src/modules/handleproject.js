import Project from "./project";
import { getTodosByProject } from "./handletodos";
import { renderUI } from "./index";
import { setupEventListeners } from "./manipulateDOM";

function handleProject(newToDo, projectsList){
    console.log("FIRED: handleProject")
    const defaultProjectExists = projectsList.some(project => project.name === "Default");
    if (!defaultProjectExists) {
        const defaultProject = new Project("Default");
        projectsList.push(defaultProject);
        }
        
    const projectName = newToDo.project;
    const existingProject = projectsList.find(project => project.name === projectName);

    if (!existingProject){
        const newProject = new Project(newToDo.project);
        projectsList.push(newProject);
    }
    return projectsList;
}

function getProjects(projectsList, todoList) {
    console.log("FIRED: getProjects")

    let ulContent = '';

    projectsList.forEach(element => {

        ulContent += `
            <li data-project-id="${element.id}">
                <a href="#">${element.name}</a>
                <span class="number-of-tasks">${countTodoinProject(element.name, todoList)}</span>
            </li>
        `;
    });


    return ulContent;
}

function countTodoinProject(element, todoList){
    console.log("FIRED: countTodoinProject")

    let count = 0;
    
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].project === element && !todoList[i].status) {
            count++;
        }
    } 
    return count;
}

function handleProjectCountNumber() {
    console.log("FIRED: handleProjectCountNumber")
    
    const numberBouble = document.querySelectorAll(".number-of-tasks");

        if (numberBouble.length === 0) {
            console.log("handleProjectCountNumber: No elements found with the class 'number-of-tasks'.");
        }

        numberBouble.forEach(bouble => {
            if(bouble.innerHTML == 0) {
                bouble.style.display = "none";
            }
        });
}

function deleteProject(idToDelete, projectsList, todoList) {
    const projectIndex = projectsList.findIndex(project => project.id == idToDelete);
    
    if (projectIndex !== -1) {
        projectsList.splice(projectIndex-1, 1);
        renderUI(projectsList, todoList);
        setupEventListeners(todoList, projectsList)
    } 
}

export {handleProject, getProjects, deleteProject, handleProjectCountNumber};

