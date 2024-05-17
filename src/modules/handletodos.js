import { renderUI } from ".";

function handleTodos(taskList, projectsList) {
    for (const element of projectsList){
        const curentElement = element.name;
        getTodosByProject(taskList, curentElement);
    } 
}

function displayToDods(taskList){
    let ulContent = '';
    
    taskList.forEach(element => {
        ulContent += `
            <li class="item">
                <div class="name-grup ${element.status ? "finished" : ''}">
                <div class="priority ${element.priority}"></div>
                    <input type="checkbox"/ ${element.status ? "checked /" : ''}>
                    <p class="finished">${element.title} </p>
                </div>
                <div class="action-grup ${element.status ? "finished" : ''}">
                    <p id="due-date">${element.dueDate}</p>
                    <button class="view-btn"><img src="../src/images/view.svg" alt="" srcset=""></button>
                    <button class="edit-btn"><img src="../src/images/edit.svg" alt="" srcset=""></button>
                    <button><img src="../src/images/delete.svg" alt="" srcset=""></button>
                </div>
            </li>
        `;
    });

    return ulContent;
}

function getTodosByProject(taskList, element){

    const filteredElements = taskList.filter(taskList => taskList.project === element);

    console.log("Tasklist",taskList)
    
    renderUI(taskList, filteredElements)
}

export { handleTodos, getTodosByProject, displayToDods }

