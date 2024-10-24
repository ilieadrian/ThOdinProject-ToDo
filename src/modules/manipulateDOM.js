import {
  renderTodoContainer,
  renderProjectContainer,
  renderHomeMenu,
} from "./index";
import {
  getTodosByProject,
  displayToDods,
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
let filteredTodos = [];

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
            <div class="modal-header">
                <p>Create a new Project</p>
                <img src="../src/images/close-ellipse-white-bg.svg" class="close-project-modal-button close-btn">
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

  addCloseEventListeners(modalContainer);
}

function openToDoModal(modalContainer, projectsList) {
  modalContainer.innerHTML = "";
  modalContainer.innerHTML = `
    <div id="add-modal-todo" class="modal active">
        <div class="modal-content">
            <div class="modal-header">
                <p>Create a new To Do</p>
                <img src="../src/images/close-ellipse-white-bg.svg" class="close-todo-modal-button close-btn">
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
  addCloseEventListeners(modalContainer);
}

function openViewModal(elementId, todoList, modalContainer) {
  modalContainer.innerHTML = "";
  modalContainer.innerHTML = `
    <div id="view-modal" class="modal active">
        <div class="modal-content">
            <img src="../src/images/close-ellipse.svg" class="close-modal-button close-btn">
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
  addCloseEventListeners(modalContainer);
}

function openEditModal(elementId, todoList, projectsList, modalContainer) {
  modalContainer.innerHTML = "";
  modalContainer.innerHTML = `
    <div id="edit-modal-todo" class="modal active">
        <div class="modal-content">
            <div class="modal-header">
                <p>Edit To Do</p>
                <img src="../src/images/close-ellipse-white-bg.svg" class="close-project-modal-button close-btn">
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

  addCloseEventListeners(modalContainer);
}

function modifyTodoStatus(elementId, target, projectsList, todoList) {
  const todoItem = todoList.find((todo) => todo.id == elementId);
  todoItem.status = target.checked;

  if (!todoItem) {
    return;
  }

  if (statusOfUI) {
    displayToDods(todoList);
    getTodosByProject(todoList, todoItem.project);
    renderProjectContainer(projectsList, todoList);
    renderHomeMenu(todoList);
    handleProjectCountNumber();
  } else {
    renderUI(projectsList, todoList);
  }
  setupEventListeners(todoList, projectsList);
}

function addCloseEventListeners(modalContainer) {
  const closeButtons = modalContainer.querySelectorAll(".close-btn");
  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      modalContainer.innerHTML = "";
    });
  });
}

function setupEventListeners(todoList, projectsList) {
  const todoListContainer = document.querySelector(".todo-container");
  let modalContainer = document.getElementById("modal-container");

  //Home and dueDate menu section
  const { dueTodayTodos, dueThisWeekTodos } = getProjetsByDueDate(todoList);
  const todayTodosLink = document.getElementById("today-link");
  const thisWeekTodosLink = document.getElementById("week-link");

  todayTodosLink.addEventListener("click", function () {
    if (dueTodayTodos.length !== 0) {
      renderTodoContainer(dueTodayTodos);
    } else {
      const errorMessage = `<p class="emptyPageNotification">There are no todos with due date today.</p>`;
      renderTodoContainer(dueTodayTodos, errorMessage);
    }

    return (statusOfUI = true);
  });

  thisWeekTodosLink.addEventListener("click", function () {
    if (dueThisWeekTodos.length !== 0) {
      renderTodoContainer(dueThisWeekTodos);
    } else {
      const errorMessage = `<p class="emptyPageNotification">There are no todos with due date this week.</p>`;
      renderTodoContainer(dueThisWeekTodos, errorMessage);
    }

    return (statusOfUI = true);
  });

  //
  const homeLink = document.getElementById("home-link");
  const addProjectBTN = document.querySelector(".addproject");
  const addToDoBTN = document.querySelector(".addtodo");

  addProjectBTN.addEventListener("click", function () {
    openProjectModal(modalContainer, projectsList);
  });

  addToDoBTN.addEventListener("click", function () {
    openToDoModal(modalContainer, projectsList);
  });

  homeLink.addEventListener("click", function () {
    renderUI(projectsList, todoList);
    setupEventListeners(todoList, projectsList);
    statusOfUI = false;
  });

  function adUIListeners(event) {
    const target = event.target;
    const listItem = target.closest(".item");
    if (!listItem) return;

    const elementId = listItem ? +listItem.id.split("-")[1] : null;
    const todoIndex = todoList.findIndex((todo) => todo._id == elementId);
  
    if (elementId !== null) {
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
      } else if (target.classList.contains("todo-checkbox")) {
        modifyTodoStatus(elementId, target, projectsList, todoList);
        todoListContainer.removeEventListener("click", adUIListeners);
      }
    }
  }

  todoListContainer.addEventListener("click", adUIListeners);

  // Attach event listeners to project links
  const projectList = document.querySelectorAll("#projects li");

  projectList.forEach((li) => {
    const anchor = li.querySelector("a");
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const projectName = anchor.textContent;

      filteredTodos = getTodosByProject(todoList, projectName);

      renderTodoContainer(filteredTodos);
      handleProjectCountNumber();

      projectList.forEach((item) => {
        const link = item.querySelector("a");
        link.classList.remove("active");
      });

      anchor.classList.add("active");
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
        .getElementById("description")
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

export { setupEventListeners, statusOfUI, filteredTodos };
