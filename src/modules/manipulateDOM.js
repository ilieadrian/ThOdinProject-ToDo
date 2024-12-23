import {
  renderTodoContainer,
  renderProjectContainer,
  renderHomeMenu,
} from "./index";
import {
  getTodosByProject,
  addNewTodo,
  editTodo,
  deleteTodoItem,
} from "./handletodos";
import {
  handleProject,
  handleProjectCountNumber,
  getProjetsByDueDate,
} from "./handleproject";
import { renderUI } from "./index";
import { getProjects } from "./handleproject";
import { format } from "date-fns";

let filteredTodos = [];





function openProjectModal(modalContainer) {
  modalContainer.innerHTML = "";
  modalContainer.innerHTML = `
    <div id="add-project-modal" class="modal active">
        <div class="modal-content">
            <div id="modal-header">
                <p>Create a new Project</p>
            </div>
            <form>
                <div class="input-container">
                    <label for="name">Project name: </label>
                    <input type="text" id="name" required>
                </div>
                <button id="create-project">Create project</button>
            </form>
            
        </div>
    </div>
    `;
  addCloseElipseWhiteBg()
  addCloseEventListeners(modalContainer);
}

function openToDoModal(modalContainer, projectsList) {
  modalContainer.innerHTML = "";

  modalContainer.innerHTML = `
    <div id="add-modal-todo" class="modal active">
        <div class="modal-content">
            <div id="modal-header">
                <p>Create a new To Do</p>
            </div>
            <form action="">
                <ul class="input-container">
                    <li>
                        <label for="title">Title</label>
                        <input type="text" id="title" required>
                    </li>
                    <li>
                        <label for="description">Description</label>
                        <input type="text" id="description">
                    </li>
                    <li>    
                        <label for="project">Project</label>
                        <select id="projects-select" name="projects">
                            ${getProjects(projectsList)}    
                        </select> 
                    </li>
                    <li>    
                        <label for="duedate">Due date:</label>
                        <input type="date" id="duedate">
                    </li>
                </ul>

                <div class="button-container">  
                    <div class="priority-btn-grup">
                        <label for="priority">Priority:</label>
                        <button type="button" id="low" class="active-priority" type="button">Low</button>
                        <button type="button" id="medium" type="button">Medium</button>
                        <button type="button" id="high" type="button">High</button>
                    </div>

                    <button id="create-todo">Create project</button> 
                </div> 
            </form>
            
        </div>
    </div>
    `;
    addCloseElipseWhiteBg();
    addCloseEventListeners(modalContainer);
}

function openEditModal(elementId, todoList, projectsList, modalContainer) {
  modalContainer.innerHTML = "";
  modalContainer.innerHTML = `
    <div id="edit-modal-todo" class="modal active">
        <div class="modal-content">
            <div id="modal-header">
                <p>Edit To Do</p>
            </div>
            <form data-formid="${todoList[elementId].id}">
                <ul class="input-container">
                    <li>
                        <label for="title">Title</label>
                        <input type="text" id="title" value="${todoList[elementId].title}">
                    </li>
                    <li>
                        <label for="description">Description</label>
                        <input type="text" id="description" value="${todoList[elementId].description}">
                    </li>
                    <li>    
                        <label for="project">Project</label>
                        <select id="projects-select" name="projects">
                            ${getProjects(projectsList, null, todoList[elementId].project)} 
                        </select> 
                    </li>
                    <li>    
                        <label for="duedate">Due date:</label>
                        <input type="date" id="duedate" value="${todoList[elementId].dueDate}">
                    </li>
                </ul>

                <div class="button-container">  
                    <div class="priority-btn-grup">
                        <label for="priority">Priority:</label>
                        <button type="button" id="low" class="${todoList[elementId].priority === "low" ? "active-priority" : ""}">Low</button>
                        <button type="button" id="medium" class="${todoList[elementId].priority === "medium" ? "active-priority" : ""}">Medium</button>
                        <button type="button" id="high" class="${todoList[elementId].priority === "high" ? "active-priority" : ""}">High</button>
                    </div>

                    <button id="edit-modal-todo">Confirm edit</button> 
                </div> 
            </form>
            
        </div>
    </div>
    `;
  addCloseElipseWhiteBg()
  addCloseEventListeners(modalContainer);
}

function openViewModal(elementId, todoList, modalContainer) {
  modalContainer.innerHTML = "";
  modalContainer.innerHTML = `
    <div id="view-modal" class="modal active">
        <div class="modal-content">
            <img id="close-elipse" class="close-modal-button close-btn">
            <h2>${todoList[elementId].title}</h2>
            <div class="detail">
                <p class="detail-title">Project: </p>
                <p>${todoList[elementId].project}</p>
            </div>
            <div class="detail">
                <p class="detail-title">Priority: </p>
                <p>${todoList[elementId].priority}</p>
            </div>
            <div class="detail">
                <p class="detail-title">Due Date: </p>
                <p>${format(new Date(todoList[elementId].dueDate), "do MMM yyy")}</p>
            </div>
            <div class="detail">
                <p class="detail-title">Details: </p>
                <p>${todoList[elementId].description}</p>
            </div>
        </div>    
    </div>
    `;
  addCloseElipse()
  addCloseEventListeners(modalContainer);
}
//Buttons in modals
function addCloseElipseWhiteBg() {
  const closeIconWhiteBg = require("../images/close-ellipse-white-bg.svg");

  const headerIconContainer = document.getElementById("modal-header");
  const headerIcon = new Image();
  headerIcon.src = closeIconWhiteBg;
  headerIcon.classList.add("close-todo-modal-button")
  headerIcon.classList.add("close-btn")
  headerIconContainer.appendChild(headerIcon);
}

function addCloseElipse() {
  const closeIcon = require("../images/close-ellipse.svg");
  const iconContainer = document.getElementById("close-elipse");
  iconContainer.src = closeIcon;
}

//Close modals
function addCloseEventListeners(modalContainer) {
  
  const closeButtons = modalContainer.querySelectorAll(".close-btn");
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      modalContainer.innerHTML = "";
    });
  });
}

//Active CSS class handler on menu items
export default (function () {
  document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll(".menu-links a");

    menuLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        menuLinks.forEach(function (link) {
          link.classList.remove("active");
        });
        this.classList.add("active");
      });
    });
  });
})();

//handlers for empty pages and selected link
function handleEmptyTodayPage(dueTodayTodos) {
  // console.log("handleEmptyTodayPage for today")
  const errorMessage = `<p class="emptyPageNotification">There are no todos with due date today.</p>`;
  renderTodoContainer(dueTodayTodos, errorMessage, null);
}

function handleEmptyWeekPage(dueThisWeekTodos){
  // console.log("handleEmptyTodayPage for week")
  const errorMessage = `<p class="emptyPageNotification">There are no todos with due date this week.</p>`;
  renderTodoContainer(dueThisWeekTodos, errorMessage, null);
}

function handleSelectedLink(projectsList, projectName) {
  const selectedProject = projectsList.find(
    (project) => project.name === projectName,
  );

  resetSelectedLink(projectsList)

  selectedProject._active = true;
}

function resetSelectedLink(projectsList) {
  for (let i = 0; i < projectsList.length; i++) {
    projectsList[i]._active = false;
  }
}


export { filteredTodos, openToDoModal, openProjectModal, openViewModal, openEditModal };


// todo actions
  //
  //
  //Delete
// Modals
  //add
  //actions
//Delete project on empty page