import '../style.css';
import { getProjects } from './handleproject';
import { displayToDods } from './handletodos';
import { getTodosByProject } from './handletodos';
import { defaultValues } from './startup';

function renderUI(projectsList, todoList) {
    let container = document.querySelector('.container');
    
    // If container doesn't exist, create and append it.
    if (!container) {
        container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);
    }
    console.log("projectlist INDEX", projectsList)
    // console.log("todoList index", todoList)
    // console.log("filtered", filteredElements)

    container.innerHTML = "";
    
    container.innerHTML = `
            <section class="header">
                <h1>// To do</h1> 
                <img src="../src/images/to-do-list.svg" alt="" srcset="">
            </section>
            <div class="content-container">
            <section class="menu">
                <ul id="todos-due" class="menu-links">
                    <li><a href="#">Home</a><span class="number-of-tasks">7</span></li>
                    <li><a href="#">Due Today</a><span class="number-of-tasks">2</span></li>
                    <li><a href="#">Due These Week</a><span class="number-of-tasks">1</span></li> 
                </ul>

                <h2>Projects</h2>
                <ul id="projects" class="menu-links">
                    ${getProjects(projectsList, todoList)}     
                </ul>

                <div class="buttons-container">
                    <div class="addtodo">
                        <img src="../src/images/add-plus-circle.svg" alt="" srcset="">
                        <p>New To do</p>
                    </div> 
                    <div class="addproject">
                        <img src="../src/images/add-plus-circle.svg" alt="" srcset="">
                        <p>New Project</p>
                    </div>
                </div>
            </section>
            <section class="todo-container">
                <ul class="items-list">
                    ${displayToDods(todoList)}  
                </ul>
            </section>
            </div>
        </div>
    `;

    // document.body.appendChild(div);
    // const projectLinks = container.querySelectorAll('#projects li a');
    // projectLinks.forEach(link => {
    //     link.addEventListener('click', event => {
    //         event.preventDefault();
    //         const projectName = event.target.textContent;
    //         getTodosByProject(todoList, projectName);
    //     });
    // });

};


function simpleRenderUI(filteredElements){
    console.table(filteredElements)
}

// document.addEventListener("DOMContentLoaded", function () {
//     const { todoList, projectsList } = defaultValues;
//     renderUI(projectsList, todoList);
// });
export { renderUI, simpleRenderUI };


