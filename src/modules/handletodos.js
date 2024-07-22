import { renderTodoContainer } from "./index";
// import { openProjectModal, openToDoModal, openViewModal, openEditModal } from "./manipulatedom";

function displayToDods(todoList, renderOnlyContainer) {
    let ulContent = '';

    console.log("FIRED: displayToDods")

    todoList.forEach((element, index) => {
        ulContent += `
            <li class="item" id="item-${index}">
                <div class="name-grup ${element.status ? "finished" : ''}">
                    <div class="priority ${element.priority}"></div>
                    <input type="checkbox" class="todo-checkbox" ${element.status ? "checked" : ''}>
                    <p class="finished">${element.title}</p>
                </div>
                <div class="action-grup ${element.status ? "finished" : ''}">
                    <p id="due-date">${element.dueDate}</p>
                    <button class="view-btn" id="view-btn-${index}"><img src="../src/images/view.svg" alt="" srcset=""></button>
                    <button class="edit-btn" id="edit-btn-${index}"><img src="../src/images/edit.svg" alt="" srcset=""></button>
                    <button class="delete-btn" id="delete-btn-${index}"><img src="../src/images/delete.svg" alt="" srcset=""></button>
                </div>
            </li>
        `;
    });

    return ulContent;
}

function getTodosByProject(todoList, curentElement) {
    console.log("FIRED: getTodosByProject")
    const filteredElements = todoList.filter(taskList => taskList.project === curentElement);
    renderTodoContainer(filteredElements);
}

export { getTodosByProject, displayToDods }



