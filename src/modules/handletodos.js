import sharedState from "./sharedState";

import {
  renderUI,
  renderTodoContainer,
  renderProjectContainer,
  renderHomeMenu,
  handleEmptyProjectPage,
  setupEventListeners,
} from "./index";
import { filteredTodos } from "./manipulateDOM";
import { handleProjectCountNumber, getProjetsByDueDate } from "./handleproject";
import Todo from "./todo";
import { format } from "date-fns";

console.log("handletodos.js file loaded")

function displayToDods(todoList) {
  console.log("displayToDods values fired");
  // console.log("displayToDods FIRED with: ", todoList);
  let ulContent = "";

  todoList.forEach((element) => {
    ulContent += `
            <li class="item" id="item-${element.id}">
                <div class="name-grup ${element.status ? "finished" : ""}">
                    <div class="priority ${element.priority}"></div>
                    <input type="checkbox" class="todo-checkbox" ${element.status ? "checked" : ""}>
                    <p class="finished">${element.title}</p>
                </div>
                <div class="action-grup ${element.status ? "finished" : ""}">
                    <p id="due-date">${format(new Date(element.dueDate), "MMM do")}</p>
                    <button class="view-btn" id="view-btn-${element.id}"><img src="${addViewImages()}"></button>
                    <button class="edit-btn" id="edit-btn-${element.id}"><img src="${addEditImages()}"></button>
                    <button class="delete-btn" id="delete-btn-${element.id}"><img src="${addDeleteImages()}"></button>
                </div>
            </li>
        `;
  });
  return ulContent;
}

function addViewImages() {
  const viewIcon = require("../images/view.svg");
  return viewIcon;
}

function addEditImages() {
  const editIcon = require("../images/edit.svg");
  return editIcon;
}

function addDeleteImages() {
  const deleteIcon = require("../images/delete.svg");
  return deleteIcon;
}

function getTodosByProject(todoList, curentElement) {
  return todoList.filter((taskList) => taskList.project === curentElement);
}

function addNewTodo(
  todoTitle,
  todoDescription,
  selectedProject,
  selecteDate,
  selectedPriority,
  todoList,
  projectsList,
) {
  // console.log("addNewTodo FIRED");
  const newTodo = new Todo(
    todoTitle,
    todoDescription,
    selecteDate,
    selectedPriority,
    false,
    selectedProject,
  );

  if (!checkForDuplicateTitle(newTodo, todoList)) {
    todoList.push(newTodo);
    localStorage.setItem("todoList", JSON.stringify(todoList));
    renderUI(projectsList, todoList);
  } else {
    alert("Title needs to be unique");
    return;
  }
}

function editTodo(
  projectId,
  todoTitle,
  todoDescription,
  selectedProject,
  selecteDate,
  selectedPriority,
  todoList,
  projectsList,
) {
  const selectedTodo = todoList[projectId];
  selectedTodo._title = todoTitle;
  selectedTodo._description = todoDescription;
  selectedTodo._project = selectedProject;
  selectedTodo._dueDate = selecteDate;
  selectedTodo._priority = selectedPriority;

  localStorage.setItem("todoList", JSON.stringify(todoList));
  renderUI(projectsList, todoList);
}

function checkForDuplicateTitle(newTodo, todoList) {
  return todoList.some((todoList) => todoList.title === newTodo.title);
}

function deleteTodoItem(todoIndex, todoList, projectsList) {

  console.log("sharedState in DeleteTodo", sharedState)
  console.log("Mode in deleteTodoItem", sharedState.mode);
  console.log("Project in deleteTodoItem", sharedState.project);

  // console.table(todoList);

  if (todoList.length < 1) {
    console.table(todoList);
    return;
  }

  if (todoIndex >= 0 && todoIndex < todoList.length) {
    todoList.splice(todoIndex, 1);
    localStorage.setItem("todoList", JSON.stringify(todoList));
  } else {
    console.error("Invalid todo index:", todoIndex);
    return;
  }

  if (sharedState.mode === "projectView") {
    const projectName = sharedState.project;
    const filteredTodosAfterDeletion = getTodosByProject(todoList, projectName);
    renderTodoContainer(filteredTodosAfterDeletion, null, projectName);
    handleProjectCountNumber();
    renderProjectContainer(projectsList, todoList);
    renderHomeMenu(todoList);
  } else if (sharedState.mode === "todayView") {
    //
    const { dueTodayTodos } = getProjetsByDueDate(todoList);
    console.table(dueTodayTodos);
    //
    renderTodoContainer(dueTodayTodos, null, null);
    handleProjectCountNumber();
    renderProjectContainer(projectsList, todoList);
    renderHomeMenu(todoList);
    console.log("todayView mode is active");
  } else if (sharedState.mode === "weekView") {
    console.log("weekview");
  } else {
    renderUI(projectsList, todoList);
  }

  // setupEventListeners(todoList, projectsList);

  if (todoList.length === 0) {
    console.log("(todoList.length === 0) case");
    handleEmptyProjectPage();
  }
}

export {
  getTodosByProject,
  displayToDods,
  addNewTodo,
  editTodo,
  deleteTodoItem,
};
