function handleTodos(taskList, projectsList) {
    for (const element of projectsList){
        const curentElement = element.name;
        getTodosByProject(taskList, curentElement);
    } 
}

function getProjects(projectsList) {
    let ulContent = '';
    
    projectsList.forEach(element => {
        const li = document.createElement("li");
        ulContent += `
            <li><a href="#">${element.name}</a><span class="number-of-tasks">3</span></li>
        `;

    });

    return ulContent;
}

function getTodosByProject(taskList, element) {
    
    return taskList.filter(taskList => taskList.project === element);
}

export { handleTodos, getTodosByProject, getProjects }

