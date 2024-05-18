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

function getTodosByProject(taskList, projectName){

    const filteredElements = taskList.filter(taskList => taskList.project === projectName);

    // console.log("Tasklist",taskList)

    console.log("taskList Handletodos", taskList)
    // console.log("projectlist HandleTodos", projectsList)
    console.log("filteredElements Handletodos", filteredElements)
    
    renderUI(filteredElements)
}

export { handleTodos, getTodosByProject, displayToDods }

