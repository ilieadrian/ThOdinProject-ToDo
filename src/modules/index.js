import "../style.css";
import sharedState from "./sharedState";
import {
  getProjects,
  renderDueTodosContainer,
  handleProjectCountNumber,
  getProjetsByDueDate,
  handleProject,
} from "./handleproject";
import { displayTodos, 
  addNewTodo,
  editTodo,
  getTodosByProject,
  deleteTodoItem,
} from "./handletodos";
import { defaultValues } from "./startup";
import { deleteProject } from "./handleproject";
import { openToDoModal, openProjectModal, openViewModal, openEditModal } from "./manipulateDOM";

function renderUI(projectsList, todoList) {
  let container = document.querySelector(".container");
  
  if (!container) {
    container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);
  }

  const html = `
        <section class="header" id="section-header">
            <h1>// To do</h1>
                
        </section>
        <div class="content-container">
            <section class="menu">
                <ul id="todos-due" class="menu-links">
                    ${renderDueTodosContainer(todoList)}
                </ul>
                <ul id="projects" class="menu-links">
                    ${getProjects(projectsList, todoList)}
                </ul>
                <div class="buttons-container">
                    <div class="addtodo">
                        <img id="addtodo-img">
                        <p>New To do</p>
                    </div>
                    <div class="addproject">
                        <img id="addproject-img">
                        <p>New Project</p>
                    </div>
                </div>
            </section>
            <section class="todo-container">
              <div id="current-section"><p>${currentPage()}</p></div>
              <ul class="items-list" id="item-list-X-X">
                  ${displayTodos(todoList)}
              </ul>
            </section>
        </div>
        <div id="modal-container"></div>
    `;

  container.innerHTML = html;

  if (todoList.length == 0) {
    const errorMessage = `<p class="emptyPageNotification">There are no more todos.</p>`;
    renderTodoContainer(todoList, errorMessage);
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }
 
  const icon = require("../images/to-do-list.svg");
  const headerIconContainer = document.getElementById("section-header");
  const headerTodoIcon = new Image();
  headerTodoIcon.src = icon;
  headerIconContainer.appendChild(headerTodoIcon);

  handleProjectCountNumber();
  addPlusCircle()
  setupEventListeners(todoList, projectsList);
}

function currentPage(){
  let returnedText;

  if(sharedState.mode === "todayView"){
    returnedText = "Due today";
  } else if(sharedState.mode === "weekView")
  {
    returnedText = "Due this week";
  } else if(sharedState.mode === "projectView"){
    returnedText = `Project: ${sharedState.project}`;
  } else {
      returnedText = "Index";
  }
  return returnedText;
}

function addPlusCircle() {
  const plusCircleIcon = require("../images/add-plus-circle.svg")
  const addTodoImg = document.getElementById("addtodo-img")
  const addProjectImg = document.getElementById("addproject-img")  
  addTodoImg.src = plusCircleIcon;
  addProjectImg.src = plusCircleIcon;
}

function renderTodoContainer(
  filteredTodos,
  errorMessage = null,
  projectName = null,
  ) {
  let container = document.querySelector(".todo-container");
  container.innerHTML = "";

  if (filteredTodos.length > 0) {
    container.innerHTML = `
        <div id="current-section"><p>${currentPage()}</p></div>
        <ul class="items-list">
            ${displayTodos(filteredTodos)}  
        </ul>
    `;
  } else {
    container.innerHTML = `
        <div class="items-list">
            ${errorMessage}
        </div>
        `;

    if (!errorMessage) {
      container.innerHTML = `
            <div class="items-list">
                <h2>Empty Project!</h2>
                <p>Create a new to-do item or delete project.</p>
                <button class="project-delete-btn">Delete project</button>
            </div>
            `;
      }

    if(sharedState.mode === "todayView"){
      container.innerHTML = `
      <div class="items-list">
          <p>No todos with the due date today.</p>
      </div>
      `;
    }
    
    if(sharedState.mode === "weekView"){
      container.innerHTML = `
      <div class="items-list">
          <p>No todos with the due date this week.</p>
      </div>
      `;
    }  
    handleEmptyProjectPage();
  }
}

function renderProjectContainer(projectsList, todoList) {
  let container = document.getElementById("projects");

  container.innerHTML = "";
  container.innerHTML = `
        ${getProjects(projectsList, todoList)}
    `;
  handleProjectCountNumber();
}

function handleEmptyProjectPage() {
  let container = document.querySelector(".todo-container");
  const { projectsList, todoList } = defaultValues;
  const deleteBtn = container.querySelector(".project-delete-btn");

  if(sharedState.mode === "projectView") {
    let idToDelete = getActiveId(sharedState.project, projectsList);
  } else{
    return
  }

  if (deleteBtn) {
    deleteBtn.addEventListener("click", function () {
      deleteProject(idToDelete, projectsList, todoList);
    });
  } else {
    return
  }
}

function getActiveId(projectName, projectsList) {
  if (projectsList.length === 1) {
    return;
  }

  let activeId = projectsList.find(
    (project) => project.name == projectName,
  )._id;
  return activeId;
}

function renderHomeMenu(todoList) {
  let container = document.getElementById("todos-due");

  container.innerHTML = "";
  container.innerHTML = `
        ${renderDueTodosContainer(todoList)}
    `;
}

function setupEventListeners(todoList, projectsList) {
  const todosDueContainer = document.getElementById("todos-due");
  const projectContainer = document.getElementById('projects');
  const addProjectBTN = document.querySelector(".addproject");
  const addToDoBTN = document.querySelector(".addtodo");
  const todoListContainer = document.querySelector(".todo-container");
  let modalContainer = document.getElementById("modal-container");
  
  if (todosDueContainer) {
    todosDueContainer.addEventListener("click", (event) => {
      const target = event.target;
      if (target.id === "today-link") {
        dueTodayTodosLink(todoList);
      } else if (target.id === "week-link") {
        dueThisWeekTodosLink(todoList);
      } else if(target.id === "home-link"){
        sharedState.mode = "all";
        sharedState.project = null;
        renderUI(projectsList, todoList);
      }
    });
  }
  
  if (projectContainer) {
    projectContainer.removeEventListener('click', getClickedProjectName);
    projectContainer.addEventListener('click', getClickedProjectName);
  }
  
  if(addToDoBTN){
    addToDoBTN.addEventListener('click', () => openToDoModal(modalContainer, projectsList));
  }

  if(addProjectBTN){
    addProjectBTN.addEventListener('click', () => openProjectModal(modalContainer, projectsList));
  }

  if (todoListContainer) {
    todoListContainer.removeEventListener('click', handleToDoListActions);
    todoListContainer.addEventListener('click', (event) =>
      handleToDoListActions(todoList, projectsList, modalContainer, event)
    );
  }
  //modals events
  modalContainer.addEventListener("click", function (event) {
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
      const todoDescription = document.getElementById("title").value.trim();
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

function modifyTodoStatus(elementId, target, projectsList, todoList){
  const todoItem = todoList.find((todo) => todo.id == elementId);
  todoItem.status = target.checked;

  if (!todoItem) {
    return;
  }

  if(sharedState.mode === "todayView") {
    const { dueTodayTodos } = getProjetsByDueDate(todoList);
    renderTodoContainer(dueTodayTodos, null, null)
  } else if(sharedState.mode === "weekView"){
    const { dueThisWeekTodos } = getProjetsByDueDate(todoList);
    renderTodoContainer(dueThisWeekTodos, null, null)
  } else if(sharedState.mode === "projectView"){
    const filteredTodos = getTodosByProject(todoList, sharedState.project)
    renderTodoContainer(filteredTodos, null, sharedState.project)
  } else {
    renderUI(projectsList, todoList);
  }

  localStorage.setItem("todoList", JSON.stringify(todoList));
  renderHomeMenu(todoList);
  renderProjectContainer(projectsList, todoList);
  handleProjectCountNumber();
}

function dueTodayTodosLink(todoList){
  const { dueTodayTodos } = getProjetsByDueDate(todoList);
  sharedState.mode = "todayView"
  renderTodoContainer(dueTodayTodos, null, null)
}

function dueThisWeekTodosLink(todoList){
  const { dueThisWeekTodos } = getProjetsByDueDate(todoList);
  sharedState.mode = "weekView"
  renderTodoContainer(dueThisWeekTodos, null, null)
}

function getClickedProjectName(event) {
  sharedState.mode = "projectView"
  const { todoList } = defaultValues;
  const target = event.target;

  if (target.tagName === 'A') {
    event.preventDefault();
    const projectName = target.textContent.trim();
    sharedState.project = projectName;
    const filteredTodos = getTodosByProject(todoList, projectName)

    renderTodoContainer(filteredTodos, null, null)
  }
}

function handleToDoListActions(todoList, projectsList, modalContainer, event){
  const target = event.target;
  const listItem = target.closest(".item");

  if (listItem === null) {
    return;
  }
  
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
  } else if (target.classList.contains("todo-checkbox")) {
    modifyTodoStatus(elementId, target, projectsList, todoList);
  }
}

export {
  renderUI,
  renderTodoContainer,
  renderProjectContainer,
  renderHomeMenu,
  handleEmptyProjectPage,
  setupEventListeners,
};