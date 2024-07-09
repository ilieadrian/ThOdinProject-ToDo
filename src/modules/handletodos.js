import { renderTodoContainer } from ".";
import { openViewModal, openEditModal } from "./manipulateDOM";

function handleTodos(todoList, projectsList) {
    for (const element of projectsList){
        const curentElement = element.name;
        getTodosByProject(todoList, curentElement);
            } 
}

// function displayToDods(todoList) {
//     let ulContent = '';

//     todoList.forEach((element, index) => {
//         ulContent += `
//             <li class="item" id="item-${index}">
//                 <div class="name-grup ${element.status ? "finished" : ''}">
//                 <div class="priority ${element.priority}"></div>
//                     <input type="checkbox" ${element.status ? "checked" : ''}>
//                     <p class="finished">${element.title} </p>
//                 </div>
//                 <div class="action-grup ${element.status ? "finished" : ''}">
//                     <p id="due-date">${element.dueDate}</p>
//                     <button class="view-btn" id="view-btn-${index}"><img src="../src/images/view.svg" alt="" srcset=""></button>
//                     <button class="edit-btn" id="edit-btn-${index}"><img src="../src/images/edit.svg" alt="" srcset=""></button>
//                     <button id="delete-btn-${index}"><img src="../src/images/delete.svg" alt="" srcset=""></button>
//                 </div>
//             </li>
//         `;
//     });

//     return ulContent;
// }

function displayToDods(todoList) {
    let ulContent = '';

    todoList.forEach((element, index) => {
        ulContent += `
            <li class="item" id="item-${index}">
                <div class="name-grup ${element.status ? "finished" : ''}">
                    <div class="priority ${element.priority}"></div>
                    <input type="checkbox" ${element.status ? "checked" : ''}>
                    <p class="finished">${element.title} </p>
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

function getTodosByProject(todoList, curentElement){
    const filteredElements = todoList.filter(taskList => taskList.project === curentElement);
    renderTodoContainer(filteredElements)
}
//
function setupEventListeners(todoList, projectsList) {
    document.addEventListener('DOMContentLoaded', function() {
        const todoListContainer = document.querySelector('.todo-container');
        let modalContainer = document.getElementById('modal-container');

        todoListContainer.addEventListener('click', function(event) {
            const target = event.target;
            const listItem = target.closest('.item');
            const index = listItem ? listItem.id.split('-')[1] : null;

            if (index !== null) {
                if (target.closest('.view-btn')) {
                    openViewModal(index, todoList, modalContainer);
                } else if (target.closest('.edit-btn')) {
                    openEditModal(index, todoList);
                } else if (target.closest('.delete-btn')) {
                    deleteTodoItem(index, todoList, projectsList);
                }
            }
        });
    });
}

// function deleteTodoItem(index, todoList, projectsList) {
//     console.log(`Delete button clicked at index ${index}`);

//     // Logic to remove the to-do item from the list and re-render the UI
//     todoList.splice(index, 1);
//     renderUI(projectsList, todoList);
// }

export { handleTodos, getTodosByProject, displayToDods, setupEventListeners  }


