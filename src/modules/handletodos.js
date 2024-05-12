function handleTodos(taskList, projectsList) {
    for (const element of projectsList){
        const curentElement = element.name;
        getTodosByProject(taskList, curentElement);
    } 
}

// function aRandomFunc(projectsList) {
//     console.log("a random func", projectsList)
// }

function getTodosByProject(taskList, element) {
    
    return taskList.filter(taskList => taskList.project === element);
}

export { handleTodos, getTodosByProject }

