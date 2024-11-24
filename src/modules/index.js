import "../style.css";
import {
  getProjects,
  renderDueTodosContainer,
  handleProjectCountNumber,
} from "./handleproject";
import { displayToDods } from "./handletodos";
//correct typo above: should be displayTodos
import { defaultValues } from "./startup";
// import Icon from "../images/to-do-list.svg";
import { deleteProject } from "./handleproject";
import { setupEventListeners } from "./manipulateDOM";

function renderUI(projectsList, todoList) {
  console.log("renderUI FIRED");
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
                <ul class="items-list" id="item-list-X-X">
                    ${displayToDods(todoList)}
                </ul>
            </section>
        </div>
        <div id="modal-container"></div>
    `;

    container.innerHTML = html;

  // container.innerHTML = "";
  // container.innerHTML = `
  //       <section class="header" id="section-header">
  //           <h1>// To do</h1>
                
  //       </section>
  //       <div class="content-container">
  //           <section class="menu">
  //               <ul id="todos-due" class="menu-links">
  //                   ${renderDueTodosContainer(todoList)}
  //               </ul>
  //               <ul id="projects" class="menu-links">
  //                   ${getProjects(projectsList, todoList)}
  //               </ul>
  //               <div class="buttons-container">
  //                   <div class="addtodo">
  //                       <img id="addtodo-img">
  //                       <p>New To do</p>
  //                   </div>
  //                   <div class="addproject">
  //                       <img id="addproject-img">
  //                       <p>New Project</p>
  //                   </div>
  //               </div>
  //           </section>
  //           <section class="todo-container">
  //               <ul class="items-list" id="item-list-X-X">
  //                   ${displayToDods(todoList)}
  //               </ul>
  //           </section>
  //       </div>
  //       <div id="modal-container"></div>
  //   `;


    // const homeLink = document.getElementById("home-link");
    // const todayTodosLink = document.getElementById("today-link");
    // homeLink.addEventListener("click", addIndexEventListener)




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
  //---!!!---//
 // console.log("statusOfUI in renderUI", statusOfUI)
}

// function addIndexEventListener(){
//   let currentView = 'index';
//   const { projectsList, todoList } = defaultValues;
//   console.log("ia uite ba")
//   console.log(projectsList, todoList)
//   renderUI(projectsList, todoList);
//   console.log(currentView)
// }

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
  console.log("renderTodoContainer FIRED with todos:", filteredTodos);
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
    console.log(
      "calling handleEmptyProjectPage(projectName) with the project:",
      projectName,
    );
    handleEmptyProjectPage(projectName);
  }
}

function renderProjectContainer(projectsList, todoList) {
  console.log("renderProjectContainer FIRED");
  let container = document.getElementById("projects");

  container.innerHTML = "";
  container.innerHTML = `
        ${getProjects(projectsList, todoList)}
    `;
  handleProjectCountNumber();
}

function handleEmptyProjectPage(projectName) {
  console.log(" handleEmptyProjectPage called on project name: ", projectName);

  if (projectName == null) {
    return;
  }
  let container = document.querySelector(".todo-container");

  const { projectsList, todoList } = defaultValues;

  const deleteBtn = container.querySelector(".project-delete-btn");

  console.log("Project name in handleEmptyProjectPage:", projectName);
  console.log("projectsList in handleEmptyProjectPage:", projectsList);
  let idToDelete = getActiveId(projectName, projectsList);
  console.log("ID to delete:", idToDelete);

  // console.log("idToDelete in handleEmptyProjectPage", idToDelete)

  console.log("Delete button:", deleteBtn);

  if (deleteBtn) {
    console.log("Fired if(deleteBTN) in get active link", deleteBtn);
    deleteBtn.addEventListener("click", function () {
      console.log("Clicked on delete project");
      deleteProject(idToDelete, projectsList, todoList);
    });
  } else {
    console.log("RenderUI case");
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
  console.log("renderHomeMenu FIRED");
  let container = document.getElementById("todos-due");

  container.innerHTML = "";
  container.innerHTML = `
        ${renderDueTodosContainer(todoList)}
    `;
}

function callEvents() {
  const { projectsList, todoList } = defaultValues;

  try {
    setupEventListeners(todoList, projectsList);
  } catch (error) {
    console.error("Error calling callEvents:", error);
  }
}
callEvents();

export {
  renderUI,
  renderTodoContainer,
  displayToDods,
  renderProjectContainer,
  renderHomeMenu,
  handleEmptyProjectPage,
};