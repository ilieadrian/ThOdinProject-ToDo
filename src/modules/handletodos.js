import { renderTodoContainer } from "./index";

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

//V2
function getTodosByProject(todoList, curentElement) {
    return todoList.filter(taskList => taskList.project === curentElement);
}

//V1
// function getTodosByProject(todoList, curentElement) {
//     console.log("FIRED: getTodosByProject")
//     const filteredElements = todoList.filter(taskList => taskList.project === curentElement);
//     renderTodoContainer(filteredElements);
// }

export { getTodosByProject, displayToDods}