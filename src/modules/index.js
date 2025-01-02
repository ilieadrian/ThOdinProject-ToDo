import "../style.css";
import {
  getProjects,
  renderDueTodosContainer,
  handleProjectCountNumber,
  getProjetsByDueDate,
} from "./handleproject";
import { displayToDods, 
  getTodosByProject,
  deleteTodoItem,
} from "./handletodos";
//correct typo above: should be displayTodos
import { defaultValues } from "./startup";
// import Icon from "../images/to-do-list.svg";
import { deleteProject } from "./handleproject";
import { openToDoModal, openProjectModal, openViewModal, openEditModal } from "./manipulateDOM";
import sharedState from "./sharedState";

function initializeCurrentView(){
  console.log("initializeCurrentView FIRED sharedState.mode", sharedState.mode);

  //   let currentView = {
  //   mode: "all", 
  //   project: null, 
  // };

  // return currentView ;
}

console.log(initializeCurrentView())

function renderUI(projectsList, todoList) {
  console.log("renderUI FIRED");

  // let currentView = initializeCurrentView()
  // console.log("SomeCV in renderUI:", currentView.mode)
  // currentView.mode = "Blabls"
  // console.log("SomeCV in renderUI222:", currentView.mode)
  let container = document.querySelector(".container");

  // currentView.mode = "all";
  

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
                <ul class="items-list" id="item-list-X-X">
                    ${displayToDods(todoList)}
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
  // console.log("renderTodoContainer FIRED with todos:", filteredTodos);
  let container = document.querySelector(".todo-container");

  container.innerHTML = "";

  if (filteredTodos.length > 0) {
    container.innerHTML = `
        <ul class="items-list">
            ${displayToDods(filteredTodos)}  
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
    // console.log(
    //   "calling handleEmptyProjectPage(projectName) with the project:",
    //   projectName,
    // );
    handleEmptyProjectPage(projectName);
  }
}

function renderProjectContainer(projectsList, todoList) {
  // console.log("renderProjectContainer FIRED");
  let container = document.getElementById("projects");

  container.innerHTML = "";
  container.innerHTML = `
        ${getProjects(projectsList, todoList)}
    `;
  handleProjectCountNumber();
}

function handleEmptyProjectPage(projectName) {
  // console.log(" handleEmptyProjectPage called on project name: ", projectName);

  if (projectName == null) {
    return;
  }
  let container = document.querySelector(".todo-container");

  const { projectsList, todoList } = defaultValues;

  const deleteBtn = container.querySelector(".project-delete-btn");

  // console.log("Project name in handleEmptyProjectPage:", projectName);
  // console.log("projectsList in handleEmptyProjectPage:", projectsList);
  let idToDelete = getActiveId(projectName, projectsList);
  // console.log("ID to delete:", idToDelete);

  // console.log("idToDelete in handleEmptyProjectPage", idToDelete)

  // console.log("Delete button:", deleteBtn);

  if (deleteBtn) {
    // console.log("Fired if(deleteBTN) in get active link", deleteBtn);
    deleteBtn.addEventListener("click", function () {
      // console.log("Clicked on delete project");
      deleteProject(idToDelete, projectsList, todoList);
    });
  } else {
    // console.log("RenderUI case");
  }
}

function getActiveId(projectName, projectsList) {
  if (projectsList.length === 1) {
    // console.log("Project list is 1", projectsList[0]._id)
  }

  let activeId = projectsList.find(
    (project) => project.name == projectName,
  )._id;
  // console.log("Active id: ", activeId)
  return activeId;
  // console.log(projectName, projectsList)
}

function renderHomeMenu(todoList) {
  // console.log("renderHomeMenu FIRED");
  let container = document.getElementById("todos-due");

  container.innerHTML = "";
  container.innerHTML = `
        ${renderDueTodosContainer(todoList)}
    `;
}

// To be removed ??
// function callEvents() {
//   const { projectsList, todoList } = defaultValues;

//   try {
//     // setupEventListeners(todoList, projectsList);
//   } catch (error) {
//     console.error("Error calling callEvents:", error);
//   }
// }
// callEvents();

////---!!!---// Events listeners
//  5

function setupEventListeners(todoList, projectsList) {
  console.log("SetupEventListener fired")
  const homeLink = document.getElementById('home-link');
  const todayLink = document.getElementById('today-link');
  const weekLink = document.getElementById('week-link');
  const projectContainer = document.getElementById('projects');
  const addProjectBTN = document.querySelector(".addproject");
  const addToDoBTN = document.querySelector(".addtodo");
  const todoListContainer = document.querySelector(".todo-container");

  let modalContainer = document.getElementById("modal-container");

  

  if (homeLink) {
    // console.log(typeof currentView)

    // currentView.mode = "all";
    homeLink.removeEventListener('click', renderUI);
    homeLink.addEventListener('click', () => renderUI(projectsList, todoList));
  }
  
  if (todayLink) {
    todayLink.removeEventListener('click', dueTodayTodosLink);
    todayLink.addEventListener('click', () => dueTodayTodosLink(todoList));
  }

  if (weekLink) {
    weekLink.removeEventListener('click', dueThisWeekTodosLink);
    weekLink.addEventListener('click', () => dueThisWeekTodosLink(todoList));
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
  
  // Check list

}

function dueTodayTodosLink(todoList){
  const { dueTodayTodos } = getProjetsByDueDate(todoList);
  currentView.mode = "todayView"
  renderTodoContainer(dueTodayTodos, null, null)
}

function dueThisWeekTodosLink(todoList){
  const { dueThisWeekTodos } = getProjetsByDueDate(todoList);
  currentView.mode = "weekView"
  renderTodoContainer(dueThisWeekTodos, null, null)
}

function getClickedProjectName(event) {
  currentView.mode = "projectView"
  const { todoList } = defaultValues;
  const target = event.target;

  if (target.tagName === 'A') {
    event.preventDefault();
    const projectName = target.textContent.trim();
    currentView.project = projectName;
    const filteredTodos = getTodosByProject(todoList, projectName)

    // console.log("currentView.project", currentView.project)

    renderTodoContainer(filteredTodos)
  }
}

function handleToDoListActions(todoList, projectsList, modalContainer, event){
  const target = event.target;
  console.log(target)
  const listItem = target.closest(".item");
  
  const elementId = listItem ? +listItem.id.split("-")[1] : null;
  const todoIndex = todoList.findIndex((todo) => todo._id === elementId);

  if (todoIndex === -1) {
    console.log(todoIndex)
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
    // todoListContainer.removeEventListener("click", adUIListeners);
  } else if (target.classList.contains("todo-checkbox")) {
    modifyTodoStatus(elementId, target, projectsList, todoList);
  }

}

// New to do




//---!!!---//

export {
  renderUI,
  renderTodoContainer,
  displayToDods,
  renderProjectContainer,
  renderHomeMenu,
  handleEmptyProjectPage,
  setupEventListeners,
};