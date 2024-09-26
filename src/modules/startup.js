import Todo from './todo';
import Project from './project';
import {handleProject} from './handleproject';
import {renderUI} from './index';
import { setupEventListeners } from './manipulateDOM';

let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
let projectsList = JSON.parse(localStorage.getItem("projectsList")) || [];



const defaultValues  = (function () {
    console.log("defaultValues FIRED")
    // let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
    console.log("after declaration", todoList, typeof todoList)
    // let projectsList = JSON.parse(localStorage.getItem("projectsList")) || [];
    let renderOnlyContainer = false;

    let newToDo;
    let defaultProject;

    console.log("JSON PARSE", JSON.parse(localStorage.getItem("todoList")))

    // if(todoList.length === 0 || JSON.parse(localStorage.getItem("todoList")) === 0) {
    if(todoList.length === 0) {
        console.log(todoList)
        console.log("Fired the default todos population")
        const todos = [
            new Todo('Write on blog', 'Write about last part from TicTacToe game', '2024-03-21', 'low', false, 'Home'),
            new Todo('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '2024-03-15', 'low', true, 'Home'),
            new Todo('New Odin Chapter', 'Start a new OdinProjectChapter', '2024-04-15', 'medium', true, 'Learning'),
            new Todo('Repair blog', 'Fix social links on blog header', '2024-03-29', 'high', false, 'Learning'),
            new Todo('Read daily a pattern', 'https://www.patterns.dev/vanilla/import-on-interaction', '2024-03-20', 'high', false, 'Learning'),
            new Todo('App implementation', 'Add ability to extract the projects from the array', '2024-12-24', 'low', true, 'Active learning'),
            new Todo('Xyx', 'Some random text', '2024-05-31', 'low', true, 'Active learning'),
            new Todo('ABC', 'First three leters from the algha', '2024-10-30', 'high', false, 'Active learning')
            
        ];
        
        todos.forEach(newToDo => {
            todoList.push(newToDo);
            handleProject(newToDo, projectsList);
        });
    } 
    // else {
    //    todos.forEach(newToDo => {
    //         todoList.push(newToDo);
    //         handleProject(newToDo, projectsList);
    //     });
    // }

    console.log("Final todoList before rendering:", todoList);
    console.log("Final projectsList before rendering:", projectsList);

    // Render the UI with current data
    renderUI(projectsList, todoList);

    // Update localStorage with the latest values
    localStorage.setItem("projectsList", JSON.stringify(projectsList));
    localStorage.setItem("todoList", JSON.stringify(todoList));

    console.log("JSON PARSE AFTER RECORD TO LOCALSTORAGE", JSON.parse(localStorage.getItem("todoList")))

    
    return {
        todoList,
        projectsList,
        renderOnlyContainer,
    };
})();

export { defaultValues };