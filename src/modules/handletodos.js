function handleTodos(taskList, projectsList) {
    for (const element of projectsList){
        const curentElement = element.name;
        getTodosByProject(taskList, curentElement);
    } 
}

function displayToDods(taskList){

    console.log("Handletodos",taskList);

    let ulContent = '';
    
    taskList.forEach(element => {
        console.log(element)
        ulContent += `
            <li class="item">
                <div class="name-grup">
                <div class="priority low"></div>
                    <input type="checkbox"/>
                    <p>${element.title} </p>
                </div>
                <div class="action-grup">
                    <p id="due-date">Jun 9th</p>
                    <button class="view-btn"><img src="../src/images/view.svg" alt="" srcset=""></button>
                    <button class="edit-btn"><img src="../src/images/edit.svg" alt="" srcset=""></button>
                    <button><img src="../src/images/delete.svg" alt="" srcset=""></button>
                </div>
            </li>
        `;

    });

    return ulContent;

}

function getTodosByProject(taskList, element) {
    
    return taskList.filter(taskList => taskList.project === element);
}

export { handleTodos, getTodosByProject, displayToDods }

