import '../style.css';

import Todo from './todo';
import Project from './project';
import handleProject from './handleproject';

const defaultValues  = (function () {
    const taskList = [];
    const projectsList = [];
    let newToDo;
    let defaultProject;

    defaultProject = new Project("default")
    projectsList.push(defaultProject);

    newToDo = new Todo('Read daily a pattern', 'https://www.patterns.dev/vanilla/import-on-interaction', '2024-03-20', 'High', 'Unfinished', 'Learning', false);
    taskList.push(newToDo);
    // handleProject();

    newToDo = new Todo('Write on blog', 'Write about last part from TicTacToe game', '2024-03-21', 'Low', 'Unfinished', 'Home', false);
    taskList.push(newToDo);

    newToDo = new Todo('New Odin Chapter', 'Start a new OdinProjectChapter', '2024-04-15', 'Normal', 'Finished', 'Learning', true);
    taskList.push(newToDo);

    newToDo = new Todo('Repair blog', 'Fix social links on blog header', '2024-03-29', 'High', 'Unfinished', 'Learning', true);
    taskList.push(newToDo);

    newToDo = new Todo('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '2024-03-15', 'Normal', 'Finished', 'Home', false);
    taskList.push(newToDo);

    newToDo = new Todo('App implementation', 'Add ability to extract the projects from the array', '2024-04-24', 'Normal', 'Finished', 'Active learing', true);
    taskList.push(newToDo);

    return {
        taskList,
        projectsList,
    };
    
})();

const { taskList, projectsList } = defaultValues;


handleProject(taskList);

function getTodosByProject(taskList, project) {
    return taskList.filter(todo => todo.project === project);
}

// Get todos for the "Home" project
const homeTodos = getTodosByProject(taskList, 'Home');
// console.log('Home Todos:', homeTodos);

// Get todos for the "Learning" project
const learningTodos = getTodosByProject(taskList, 'Learning');
// console.log('Learning Todos:', learningTodos);

console.table(taskList);
console.table(projectsList)
// console.log(taskList[3].status);
// taskList[3].status = false;
// console.log(taskList[3].status);
// taskList[1].setShecked(true);
// console.log(taskList[1].isChecked());
// console.table(projectList)


