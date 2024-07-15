import Todo from './todo';
import Project from './project';
import {handleProject} from './handleproject';
import {renderUI} from './index';
import domeffects from './manipulateDOM';
import { setupEventListeners } from './handletodos';

const defaultValues  = (function () {
    const todoList = [];
    const projectsList = [];
    const filteredElements = [];
    let newToDo;
    let defaultProject;

    const todos = [
        new Todo('Read daily a pattern', 'https://www.patterns.dev/vanilla/import-on-interaction', '20.03.2024', 'high', false, 'Learning'),
        new Todo('Write on blog', 'Write about last part from TicTacToe game', '21.03.2024', 'low', false, 'Home'),
        new Todo('New Odin Chapter', 'Start a new OdinProjectChapter', '15.04.2024', 'medium', true, 'Learning'),
        new Todo('Repair blog', 'Fix social links on blog header', '29.03.2024', 'high', false, 'Learning'),
        new Todo('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '15.03.2024', 'low', true, 'Home'),
        new Todo('App implementation', 'Add ability to extract the projects from the array', '24.03.2024', 'low', true, 'Active learning'),
        new Todo('Xyx', 'Some random text', '31.05.2024', 'low', true, 'Active learning'),
        new Todo('ABC', 'First three leters from the algha', '02.06.2024', 'high', false, 'Active learning')
    ];
    
    todos.forEach(newToDo => {
        todoList.push(newToDo);
        handleProject(newToDo, projectsList);
    });

    renderUI(projectsList, todoList);
    setupEventListeners(todoList, projectsList);
    
    return {
        todoList,
        projectsList,
    };
})();

export { defaultValues };