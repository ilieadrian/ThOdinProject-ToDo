import { renderTodoContainer } from ".";

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

document.addEventListener('DOMContentLoaded', function() {
    const { todoList, projectsList } = defaultValues; // Ensure this line gets `todoList` and `projectsList` from your startup file

    const todoListContainer = document.querySelector('.todo-container');

    todoListContainer.addEventListener('click', function(event) {
        const target = event.target;
        const listItem = target.closest('.item');
        const index = listItem ? listItem.id.split('-')[1] : null;

        if (index !== null) {
            if (target.closest('.edit-btn')) {
                handleEditButtonClick(index, todoList);
            } else if (target.closest('.delete-btn')) {
                handleDeleteButtonClick(index, todoList, projectsList);
            }
        }
    });
});

function handleEditButtonClick(index, todoList) {
    console.log(`Edit button clicked at index ${index}`);
    openEditModal(index, todoList);
}

function handleDeleteButtonClick(index, todoList, projectsList) {
    console.log(`Delete button clicked at index ${index}`);
    deleteTodoItem(index, todoList, projectsList);
}

function openEditModal(index, todoList) {
    // Logic to open the edit modal and populate it with the current to-do item's details
}

function deleteTodoItem(index, todoList, projectsList) {
    todoList.splice(index, 1);
    renderUI(projectsList, todoList);
}

export { handleTodos, getTodosByProject, displayToDods }

