import '../style.css';
// import defaultValues from './modules/startup';

import Todo from './todo';
import Project from './project';

const defaultValues  = (function () {
    const taskList = [];
    const projectList = [];
    let newToDo;
    let defaultProject;

    defaultProject = new Project("default")
    projectList.push(defaultProject);

    newToDo = new Todo('Read daily a pattern', 'https://www.patterns.dev/vanilla/import-on-interaction', '2024-03-20', 'High', 'Unfinished', 'Learning', false);
    taskList.push(newToDo);

    newToDo = new Todo('Write on blog', 'Write about last part from TicTacToe game', '2024-03-21', 'Low', 'Unfinished', 'Home', false);
    taskList.push(newToDo);

    newToDo = new Todo('New Odin Chapter', 'Start a new OdinProjectChapter', '2024-04-15', 'Normal', 'Finished', 'Learning', true);
    taskList.push(newToDo);

    newToDo = new Todo('Repair blog', 'Fix social links on blog header', '2024-03-29', 'High', 'Unfinished', 'Learning', true);
    taskList.push(newToDo);

    newToDo = new Todo('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '2024-03-15', 'Normal', 'Finished', 'Home', false);
    taskList.push(newToDo);

    return {
        taskList,
        projectList,
    };
    
})();



export default defaultValues;