import { renderUI } from ".";
import { simpleRenderUI } from ".";
// import { defaultValues } from "./startup";

function handleTodos(todoList, projectsList) {
    for (const element of projectsList){
        const curentElement = element.name;
        getTodosByProject(todoList, curentElement, projectsList);
        console.log("projectslist HANDLETODOS", projectsList)
    } 
}

function displayToDods(todoList){
    let ulContent = '';
    
    todoList.forEach(element => {
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

function getTodosByProject(todoList, curentElement, projectsList){

    if (!projectsList) {
        console.error('getTodosByProject received undefined projectsList');
        return;
    }

    if (!todoList) {
        console.error('getTodosByProject received undefined todoList');
        return;
    }

    const filteredElements = todoList.filter(taskList => taskList.project === curentElement);
    simpleRenderUI(filteredElements)


    // console.log("Tasklist",taskList)

    // console.log("todoList Handletodos", todoList)
    console.log("projectlist GETTODOSBYPROJECT", projectsList)
    // console.log("filteredElements Handletodos", filteredElements)
    
    // renderUI(projectsList, filteredElements);
}



export { handleTodos, getTodosByProject, displayToDods }

