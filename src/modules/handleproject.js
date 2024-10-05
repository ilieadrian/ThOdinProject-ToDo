import Project from "./project";
import { getTodosByProject } from "./handletodos";
import { renderUI, renderTodoContainer } from "./index";
import { setupEventListeners } from "./manipulateDOM";
import { isThisWeek, isToday } from "date-fns";

function handleProject(newToDo, projectsList){  
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
function getProjetsByDueDate(todoList) {
    console.log("getProjetsByDueDate fired")

    const dueTodayTodos = todoList.filter(todo => isToday(new Date(todo.dueDate)));
    const dueThisWeekTodos = todoList.filter(todo => isThisWeek(new Date(todo.dueDate)));

    return { dueTodayTodos, dueThisWeekTodos };
}

function renderDueTodosContainer(todoList) {    
    const { dueTodayTodos, dueThisWeekTodos } = getProjetsByDueDate(todoList);

    let ulContent = '';
    ulContent = `
        <li><a href="#" id="projects-link">Home</a><span class="number-of-tasks">${countIncompleteTodos(todoList)}</span></li>
        <li><a href="#" id="today-link">Due Today</a><span class="number-of-tasks">${dueTodayTodos.length}</span></li>
        <li><a href="#" id="week-link">Due This Week</a><span class="number-of-tasks">${dueThisWeekTodos.length}</span></li>
    `;

    return ulContent;
}

function countIncompleteTodos(todoList) {
    console.log("countIncompleteTodos Fired")
    let count = 0;
    todoList.forEach(elemement => {
        if(!elemement.status) {
            count++;
        }
    })
    // console.log(count)

    return count;
}

function countTodoinProject(element, todoList){
    let count = 0;
    
    for (let i = 0; i < todoList.length; i++) {
        if (todoList[i].project === element && !todoList[i].status) {
            count++;
        }
    } 
    return count;
}

function handleProjectCountNumber() {
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
        projectsList.splice(projectIndex, 1);
        localStorage.setItem("projectsList", JSON.stringify(projectsList));
        renderUI(projectsList, todoList);
        setupEventListeners(todoList, projectsList)
    } 
}

export {handleProject, getProjects, renderDueTodosContainer, getProjetsByDueDate, deleteProject, handleProjectCountNumber};

