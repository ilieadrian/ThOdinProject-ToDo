import { renderUI, renderTodoContainer, handleEmptyProjectPage } from "./index";
import { setupEventListeners, statusOfUI, filteredTodos } from "./manipulateDOM";
import { handleProjectCountNumber } from "./handleproject";

function displayToDods(todoList) {
    let ulContent = '';

    todoList.forEach((element) => {
        ulContent += `
            <li class="item" id="item-${element.id}">
                <div class="name-grup ${element.status ? "finished" : ''}">
                    <div class="priority ${element.priority}"></div>
                    <input type="checkbox" class="todo-checkbox" ${element.status ? "checked" : ''}>
                    <p class="finished">${element.title}</p>
                </div>
                <div class="action-grup ${element.status ? "finished" : ''}">
                    <p id="due-date">${element.dueDate}</p>
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
    return todoList.filter(taskList => taskList.project === curentElement);
}

function deleteTodoItem(elementId, todoList, projectsList) {
    const todoIndex = todoList.findIndex(todo => todo.id == elementId);

    todoList.splice(todoIndex, 1);

    if(statusOfUI) {
        const projectName = filteredTodos[0].project;
        let filteredTodosAfterDeletion = getTodosByProject(todoList, projectName)
        renderTodoContainer(filteredTodosAfterDeletion); 
        handleProjectCountNumber(); 
    } else {
        renderUI(projectsList, todoList);
        setupEventListeners(todoList, projectsList)
        if(todoList.length == 0) {
            console.log("Opsie")
            handleEmptyProjectPage();
        }
    }

}

export { getTodosByProject, displayToDods, deleteTodoItem }