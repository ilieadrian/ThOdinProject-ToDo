import './style.css';
// import defaultValues from './modules/startup';

import Todo from './modules/todo';
import Project from './modules/project';

const defaultValues  = (function () {

    const taskList = [];
    const projectList = [];
    let newToDo;
    let defaultProject;

    defaultProject = new Project("default")
    projectList.push(defaultProject);

    newToDo = new Todo('Read daily a pattern', 'https://www.patterns.dev/vanilla/import-on-interaction', '2024-03-20', 'High', 'Unfinished', 'Learing', false);
    taskList.push(newToDo);

    newToDo = new Todo('Write on blog', 'Write about last part from TicTacToe game', '2024-03-21', 'Low', 'Unfinished', 'Learing', false);
    taskList.push(newToDo);

    newToDo = new Todo('New Odin Chapter', 'Start a new OdinProjectChapter', '2024-04-15', 'Normal', 'Finished', 'Learing', true);
    taskList.push(newToDo);

    newToDo = new Todo('Repair blog', 'Fix social links on blog header', '2024-03-29', 'High', 'Unfinished', 'Learing', true);
    taskList.push(newToDo);

    newToDo = new Todo('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '2024-03-15', 'Normal', 'Finished', 'Home', false);
    taskList.push(newToDo);


    console.table(taskList);
    // console.log(taskList[3].getProject())
    // console.table(defaultProject.getName());

    console.log(taskList.getIndex("Repair blog"))

    // defaultProject.editName("Learning")
    // console.table(defaultProject.getName())
})();



// import printMe from './modules/projects.js';

// function component() {
//     const element = document.createElement('p');

//     element.innerText = "Hy! I am a para!"
    
    

//     const btn = document.createElement('button');
//     btn.innerHTML = 'Click me and check the console!';
//     btn.onclick = printMe;

//     element.appendChild(btn);
//     return element;
// }

// document.body.appendChild(component());