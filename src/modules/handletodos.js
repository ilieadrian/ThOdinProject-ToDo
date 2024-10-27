import { renderUI, renderTodoContainer, renderProjectContainer, handleEmptyProjectPage } from "./index";
import {
  setupEventListeners,
  statusOfUI,
  filteredTodos,
} from "./manipulateDOM";
import { handleProjectCountNumber } from "./handleproject";
import Todo from "./todo";
import { format } from "date-fns";

function displayToDods(todoList) {
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
                    <button class="view-btn" id="view-btn-${element.id}"><img src="../src/images/view.svg" alt="" srcset=""></button>
                    <button class="edit-btn" id="edit-btn-${element.id}"><img src="../src/images/edit.svg" alt="" srcset=""></button>
                    <button class="delete-btn" id="delete-btn-${element.id}"><img src="../src/images/delete.svg" alt="" srcset=""></button>
                </div>
            </li>
        `;
  });

  return ulContent;
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
    setupEventListeners(todoList, projectsList);
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
  setupEventListeners(todoList, projectsList);
}

function checkForDuplicateTitle(newTodo, todoList) {
  return todoList.some((todoList) => todoList.title === newTodo.title);
}

function deleteTodoItem(todoIndex, todoList, projectsList) {
  console.log("Attempting to delete todo at index:", todoIndex);

  // Safely remove the todo item at the calculated index
  if (todoIndex >= 0 && todoIndex < todoList.length) {
    todoList.splice(todoIndex, 1);
    localStorage.setItem("todoList", JSON.stringify(todoList));
  } else {
    console.error("Invalid todo index:", todoIndex);
    return; // Exit if index is invalid
  }

  if (statusOfUI) {
    // Retrieve project name from filteredTodos if filtering by project
    const projectName = filteredTodos[0]?.project;
    const filteredTodosAfterDeletion = getTodosByProject(todoList, projectName);

    // Update the UI with the filtered todos after deletion
    renderTodoContainer(filteredTodosAfterDeletion);
    renderProjectContainer(projectsList, todoList);
    handleProjectCountNumber();
    setupEventListeners(filteredTodosAfterDeletion, projectsList); // Use filtered list

  } else {
    // For non-filtered view, render all projects and todos
    renderUI(projectsList, todoList);
    setupEventListeners(todoList, projectsList); // Use complete list
  }

  // Display empty project page if todoList is now empty
  if (todoList.length === 0) {
    handleEmptyProjectPage();
  }



  //   todoList.splice(todoIndex, 1);
  //   localStorage.setItem("todoList", JSON.stringify(todoList));

  //   if(statusOfUI) {
  //       const projectName = filteredTodos[0].project;
  //       let filteredTodosAfterDeletion = getTodosByProject(todoList, projectName)
  //       console.table(filteredTodosAfterDeletion)
  //       console.table(todoList)
  //       renderTodoContainer(filteredTodosAfterDeletion);
  //       renderProjectContainer(projectsList, filteredTodosAfterDeletion);
  //       setupEventListeners(todoList, projectsList);
  //       handleProjectCountNumber(); 
  //   } else {
  //       renderUI(projectsList, todoList);
  //       setupEventListeners(todoList, projectsList)
  //   }

  //   if(todoList.length == 0) {
  //     handleEmptyProjectPage();
  // }

}

export {
  getTodosByProject,
  displayToDods,
  addNewTodo,
  editTodo,
  deleteTodoItem,
};

