import {
  renderUI,
  renderTodoContainer,
  renderProjectContainer,
  renderHomeMenu,
  handleEmptyProjectPage,
} from "./index";
import {
  setupEventListeners,
  statusOfUI,
  filteredTodos,
} from "./manipulateDOM";
import { handleProjectCountNumber } from "./handleproject";
import Todo from "./todo";
import { format } from "date-fns";

function displayToDods(todoList) {
  console.log("displayToDods FIRED");
  let ulContent = "";

  todoList.forEach((element) => {
    // console.log(element.status)
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
  // console.log("getTodosByProject FIRED");
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
  // console.log("Attempting to delete todo at index:", todoIndex);
  // console.table(todoList);

  if (todoList.length < 1){
    console.table(todoList)
    return;
  }

  if (todoIndex >= 0 && todoIndex < todoList.length) {
    todoList.splice(todoIndex, 1);
    localStorage.setItem("todoList", JSON.stringify(todoList));
  } else {
    console.error("Invalid todo index:", todoIndex);
    return;
  }

  if (statusOfUI) {
    const projectName = filteredTodos[0]?.project;
    console.log("projectName in status of UI", projectName)
    const filteredTodosAfterDeletion = getTodosByProject(todoList, projectName);

    renderTodoContainer(filteredTodosAfterDeletion, null, projectName);
    renderProjectContainer(projectsList, todoList);
    handleProjectCountNumber();
    renderHomeMenu(todoList);
    handleProjectCountNumber();
  } else {
    renderUI(projectsList, todoList);
  }
  
  setupEventListeners(todoList, projectsList);


  if (todoList.length === 0) {
    console.log("(todoList.length === 0) case")
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
