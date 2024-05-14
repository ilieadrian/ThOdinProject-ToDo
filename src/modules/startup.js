import Todo from './todo';
import Project from './project';
import {handleProject} from './handleproject';
import {handleTodos } from './handletodos';
import {renderUI} from './index';

const defaultValues  = (function () {
    const taskList = [];
    const projectsList = [];
    let newToDo;
    let defaultProject;

    defaultProject = new Project("Default")
    projectsList.push(defaultProject);

    newToDo = new Todo('Read daily a pattern', 'https://www.patterns.dev/vanilla/import-on-interaction', '20.03.2024', 'high', false, 'Learning');
    taskList.push(newToDo);
    handleProject(newToDo, projectsList);

    newToDo = new Todo('Write on blog', 'Write about last part from TicTacToe game', '21.03.2024', 'low', false, 'Home');
    taskList.push(newToDo);
    handleProject(newToDo, projectsList);

    newToDo = new Todo('New Odin Chapter', 'Start a new OdinProjectChapter', '15.04.2024', 'medium', true, 'Learning');
    taskList.push(newToDo);
    handleProject(newToDo, projectsList);

    newToDo = new Todo('Repair blog', 'Fix social links on blog header', '29.03.2024', 'high', false, 'Learning');
    taskList.push(newToDo);
    handleProject(newToDo, projectsList);

    newToDo = new Todo('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '15.03.2024', 'low', true, 'Home');
    taskList.push(newToDo);
    handleProject(newToDo, projectsList);

    newToDo = new Todo('App implementation', 'Add ability to extract the projects from the array', '24.03.2024', 'low', true, 'Active learing');
    taskList.push(newToDo);
    handleProject(newToDo, projectsList);

    renderUI(projectsList, taskList);
    
    return {
        taskList,
        projectsList,
    };
})();


export { defaultValues };



