import Todo from './todo';
import Project from './project';
import {handleProject} from './handleproject';
import {renderUI} from './index';
import { setupEventListeners } from './manipulateDOM';




const defaultValues  = (function () {
    console.log("Check for local storage Todolist", JSON.parse(localStorage.getItem("todoList")));
let todoList = JSON.parse(localStorage.getItem("todoList"));
console.log(todoList[1].title)
// todoList = todoList.map(todo => new Todo(todo.title, todo.description, todo.dueDate, todo.priority, todo.status, todo.project));
let projectsList = JSON.parse(localStorage.getItem("projectsList"));
let renderOnlyContainer = false;

// Check if the localStorage values are null or undefined
if (!todoList || todoList.length === 0) {
    console.log("Initializing default todoList");
    todoList = [
        new Todo('Write on blog', 'Write about last part from TicTacToe game', '2024-03-21', 'low', false, 'Home'),
        new Todo('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '2024-03-15', 'low', true, 'Home'),
        new Todo('New Odin Chapter', 'Start a new OdinProjectChapter', '2024-04-15', 'medium', true, 'Learning'),
        new Todo('Repair blog', 'Fix social links on blog header', '2024-03-29', 'high', false, 'Learning'),
        new Todo('Read daily a pattern', 'https://www.patterns.dev/vanilla/import-on-interaction', '2024-03-20', 'high', false, 'Learning'),
        new Todo('App implementation', 'Add ability to extract the projects from the array', '2024-12-24', 'low', true, 'Active learning'),
        new Todo('Xyx', 'Some random text', '2024-05-31', 'low', true, 'Active learning'),
        new Todo('ABC', 'First three letters from the alphabet', '2024-10-30', 'high', false, 'Active learning')
    ];
    projectsList = []
    todoList.forEach(newToDo => {
        handleProject(newToDo, projectsList);
    });
    

    // Store them in localStorage
    localStorage.setItem("todoList", JSON.stringify(todoList));
    localStorage.setItem("projectsList", JSON.stringify(projectsList));
} else {
    console.log("Loaded from localStorage");
}

// Continue to render the UI
renderUI(projectsList, todoList);

    

    console.log("JSON PARSE AFTER RECORD TO LOCALSTORAGE", JSON.parse(localStorage.getItem("todoList")))

    
    return {
        todoList,
        projectsList,
        renderOnlyContainer,
    };
})();

export { defaultValues };