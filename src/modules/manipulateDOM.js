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

let statusOfUI = false;
let activeProjectLink = null;
let filteredTodos = [];
let currentView = 'index';


export function setStatusOfUI(newStatus) {
  statusOfUI = newStatus;
}

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


function modifyTodoStatus(elementId, target, projectsList, todoList) {
  console.log("currentView", currentView)
  console.log("modifyTodoStatus FIRED");
  const todoItem = todoList.find((todo) => todo.id == elementId);
  // const { dueTodayTodos, dueThisWeekTodos } = getProjetsByDueDate(todoList);

  todoItem.status = target.checked;

  if (!todoItem) {
    return;
  }

  if(currentView == "todayTodosLink"){
    console.log(currentView)
      const { dueTodayTodos } = getProjetsByDueDate(todoList);
      renderTodoContainer(dueTodayTodos);
      renderProjectContainer(projectsList, todoList);
      renderHomeMenu(todoList);
      handleProjectCountNumber();
      handleEmptyTodayPage(dueTodayTodos);
      // setupEventListeners(todoList, projectsList);
      } 
    

  if(currentView == "thisWeekTodosLink"){
    console.log(currentView)
    const { dueThisWeekTodos } = getProjetsByDueDate(todoList);
    renderTodoContainer(dueThisWeekTodos);
    renderProjectContainer(projectsList, todoList);
    renderHomeMenu(todoList);
    handleProjectCountNumber();
    handleEmptyWeekPage(dueThisWeekTodos)
    // setupEventListeners(todoList, projectsList);
        } 

  if (statusOfUI) {
    renderTodoContainer(filteredTodos);
    renderProjectContainer(projectsList, todoList);
    renderHomeMenu(todoList);
    handleProjectCountNumber();
  } else if(!currentView == "thisWeekTodosLink") {
    console.log("statusOfUI in else statusOfUI about to fire")
    renderUI(projectsList, todoList);
  } else if(!currentView == "todayTodosLink") {
    console.log(currentView)
    console.log("statusOfUI in else statusOfUI about to fire")
    renderUI(projectsList, todoList);
  } 

  setupEventListeners(todoList, projectsList);
}


//Revamp setupEventListeners
// index 

const username = "Andrew";


function addIndexEventListener(){
  console.log("Call me addIndexEventListener", username )
    // renderUI(projectsList, todoList);
    // resetSelectedLink(projectsList);
//     renderProjectContainer(projectsList, todoList)
//     setupEventListeners(todoList, projectsList);
//     statusOfUI = false;
}



//https://stackoverflow.com/questions/66092392/how-to-add-eventlistener-to-elemen-in-webpack-modules


//I decided to rewrite my code and made with document.creatreElement instead of innerHTML. 
//And it works. A little bit more lines of code but works and conceptual right. Thanks for the help.


// function addIndexEventListener() {
//     //here the bugfix for the status
//     const { projectsList, todoList } = defaultValues;
//     console.log("Clicked in HomeLink!!!!!!!!!!")
//     renderUI(projectsList, todoList);
//     resetSelectedLink(projectsList);
//     renderProjectContainer(projectsList, todoList)
//     setupEventListeners(todoList, projectsList);
//     statusOfUI = false;
// }
// due today
// due this week
// Projects contanier
// New to do
// New project
// Check list
// todo actions
// Modals

//Close modals
function addCloseEventListeners(modalContainer) {
  
  const closeButtons = modalContainer.querySelectorAll(".close-btn");
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      modalContainer.innerHTML = "";
    });
  });
}



function setupEventListeners(todoList, projectsList) {
  console.log("Fired setupEventListeners");

  const homeLink = document.getElementById("home-link");
  homeLink.removeEventListener("click",addIndexEventListener)
  homeLink.addEventListener("click",addIndexEventListener)


  const todoListContainer = document.querySelector(".todo-container");
  let modalContainer = document.getElementById("modal-container");

  //Home and dueDate menu section
  const { dueTodayTodos, dueThisWeekTodos } = getProjetsByDueDate(todoList);
  const todayTodosLink = document.getElementById("today-link");
  const thisWeekTodosLink = document.getElementById("week-link");

  // todayTodosLink.addEventListener("click", function () {
  //   currentView = "todayTodosLink";

  //   console.log("dueTodayTodos", dueTodayTodos)
  //   if (dueTodayTodos.length !== 0) {
  //     console.log("calling renderTodoContainer in !if", dueTodayTodos)
  //     renderTodoContainer(dueTodayTodos);
  //   } else {
  //     console.log("calling handleEmptyTodayPage in !if - else", dueTodayTodos)
  //     handleEmptyTodayPage(dueTodayTodos);
  //   }

  //   return statusOfUI = false;
  // });

  // thisWeekTodosLink.addEventListener("click", function () {
  //   currentView = "thisWeekTodosLink";
  //   console.log("dueThisWeekTodos", dueThisWeekTodos)
  //   if (dueThisWeekTodos.length !== 0) {
  //     console.log("calling renderTodoContainer in !if", dueThisWeekTodos)
  //     renderTodoContainer(dueThisWeekTodos);
  //   } else {
  //     console.log("calling handleEmptyTodayPage in !if - else", dueThisWeekTodos)
  //     handleEmptyWeekPage(dueThisWeekTodos)
  //   }

  //   return statusOfUI = false;
  // });

  thisWeekTodosLink.removeEventListener("click", addThisWeekTodosLink)
  thisWeekTodosLink.addEventListener("click", addThisWeekTodosLink)

  function addThisWeekTodosLink() {
    currentView = "thisWeekTodosLink";
    console.log("dueThisWeekTodos", dueThisWeekTodos)
    if (dueThisWeekTodos.length !== 0) {
      console.log("calling renderTodoContainer in !if", dueThisWeekTodos)
      renderTodoContainer(dueThisWeekTodos);
    } else {
      console.log("calling handleEmptyTodayPage in !if - else", dueThisWeekTodos)
      handleEmptyWeekPage(dueThisWeekTodos)
    }

    return statusOfUI = false;
  }

  // const homeLink = document.getElementById("home-link"); //addIndexEventListener
  const addProjectBTN = document.querySelector(".addproject");
  const addToDoBTN = document.querySelector(".addtodo");

  addProjectBTN.addEventListener("click", function () {
    openProjectModal(modalContainer, projectsList);
  });

  addToDoBTN.addEventListener("click", function () {
    openToDoModal(modalContainer, projectsList);
  });

  // homeLink.addEventListener("click", function () {

  //   //here the bugfix for the status
  //   console.log("Clicked in HomeLink")
  //   renderUI(projectsList, todoList);
  //   resetSelectedLink(projectsList);
  //   renderProjectContainer(projectsList, todoList)
  //   setupEventListeners(todoList, projectsList);
  //   statusOfUI = false;
  // });

  function adUIListeners(event) {
    const target = event.target;
    const listItem = target.closest(".item");
    if (!listItem) return;

    const elementId = listItem ? +listItem.id.split("-")[1] : null;
    const todoIndex = todoList.findIndex((todo) => todo._id === elementId);

    if (todoIndex === -1) {
      console.error(
        "Todo item not found in todoList for elementId:",
        elementId,
      );
      return;
    }

    if (target.closest(".view-btn")) {
      openViewModal(todoIndex, todoList, modalContainer);
    } else if (target.closest(".edit-btn")) {
      if (todoList[todoIndex]) {
        openEditModal(todoIndex, todoList, projectsList, modalContainer);
      } else {
        console.error(`Todo with ID ${elementId} does not exist.`);
      }
    } else if (target.closest(".delete-btn")) {
      deleteTodoItem(todoIndex, todoList, projectsList);
      todoListContainer.removeEventListener("click", adUIListeners);
    } else if (target.classList.contains("todo-checkbox")) {
      modifyTodoStatus(elementId, target, projectsList, todoList);
    }
  }

  todoListContainer.addEventListener("click", adUIListeners);

  const projectList = document.querySelectorAll("#projects li");

  projectList.forEach((li) => {
    const anchor = li.querySelector("a");

    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const projectName = anchor.textContent;

      filteredTodos = getTodosByProject(todoList, projectName);

      console.log(
        "calling renderTodoContainer from event listener",
        projectName,
      );

      renderTodoContainer(filteredTodos, null, projectName);
      handleProjectCountNumber();

      projectList.forEach((item) => {
        const link = item.querySelector("a");
        link.classList.remove("active");
      });

      anchor.classList.add("active");
      activeProjectLink = true;

      if (activeProjectLink) {
        anchor.classList.add("active");
      }
      
      handleSelectedLink(projectsList, projectName, todoList);

      statusOfUI = true;
      return statusOfUI, filteredTodos;
    });
  });

  //Event listeners for new Projects/Todos and handlers for edits
  modalContainer.addEventListener("click", function (event) {
    if (event.target && event.target.id === "create-project") {
      event.preventDefault();

      const passedProjectName = document.querySelector("#name").value.trim();
      if (passedProjectName.length === 0) {
        alert("Project name cannot be empty");
        return;
      } else {
        handleProject(null, projectsList, todoList, passedProjectName);
        modalContainer.innerHTML = "";
      }
    }

    const priorityBTNS = document.querySelectorAll(".priority-btn-grup button");

    priorityBTNS.forEach((btn) => {
      btn.addEventListener("click", function (event) {
        event.preventDefault();

        priorityBTNS.forEach((button) =>
          button.classList.remove("active-priority"),
        );

        this.classList.add("active-priority");
      });
    });

    if (event.target && event.target.id === "create-todo") {
      event.preventDefault();
      
      const todoTitle = document.getElementById("title").value.trim();
      const todoDescription = document
        .getElementById("title")
        .value.trim();
      const projectsDropdown = document.getElementById("projects-select");
      const selectedProject = projectsDropdown.value;
      const selecteDate = document.querySelector('input[type="date"]').value;
      const activePriorityBtn = document.querySelector(
        ".priority-btn-grup .active-priority",
      );
      const selectedPriority = activePriorityBtn ? activePriorityBtn.id : null;

      if (todoTitle && selectedProject && selecteDate && selectedPriority) {
        addNewTodo(
          todoTitle,
          todoDescription,
          selectedProject,
          selecteDate,
          selectedPriority,
          todoList,
          projectsList,
        );
        modalContainer.innerHTML = "";
      } else {
        alert("Required fields: Title and Date");
        return;
      }
    }
    if (event.target && event.target.id === "edit-modal-todo") {
      event.preventDefault();

      const form = document.getElementsByTagName("form");
      const projectId = form[0].dataset.formid;
      const todoTitle = document.getElementById("title").value.trim();
      const todoDescription = document
        .getElementById("description")
        .value.trim();
      const projectsDropdown = document.getElementById("projects-select");
      const selectedProject = projectsDropdown.value;
      const selecteDate = document.querySelector('input[type="date"]').value;
      const activePriorityBtn = document.querySelector(
        ".priority-btn-grup .active-priority",
      );
      const selectedPriority = activePriorityBtn ? activePriorityBtn.id : null;

      editTodo(
        projectId,
        todoTitle,
        todoDescription,
        selectedProject,
        selecteDate,
        selectedPriority,
        todoList,
        projectsList,
      );
    }
  });
}

function handleEmptyTodayPage(dueTodayTodos) {
  console.log("handleEmptyTodayPage for today")
  const errorMessage = `<p class="emptyPageNotification">There are no todos with due date today.</p>`;
  renderTodoContainer(dueTodayTodos, errorMessage, null);
}

function handleEmptyWeekPage(dueThisWeekTodos){
  console.log("handleEmptyTodayPage for week")
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

export { setupEventListeners, statusOfUI, filteredTodos };
