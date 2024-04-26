function handleTodos(taskList, projectsList) {
    console.table(taskList);
    console.table(projectsList);
}
export default handleTodos;

// console.log(taskList, projectsList)


// function getTodosByProject(taskList, project) {
//     return taskList.filter(todo => todo.project === project);
// }

// // Get todos for the "Home" project
// const homeTodos = getTodosByProject(taskList, 'Home');
// // console.log('Home Todos:', homeTodos);

// // Get todos for the "Learning" project
// const learningTodos = getTodosByProject(taskList, 'Learning');
// // console.log('Learning Todos:', learningTodos);

// console.table(taskList);
// console.table(projectsList)
// console.log(taskList[3].status);
// taskList[3].status = false;
// console.log(taskList[3].status);
// taskList[1].setShecked(true);
// console.log(taskList[1].isChecked());
// console.table(projectList)