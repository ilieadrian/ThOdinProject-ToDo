import '../style.css';
import { getProjects } from './handleproject';
import { displayToDods } from './handletodos';
import { defaultValues } from './startup';

function renderUI(projectsList, todoList) {
    let container = document.querySelector('.container');
    
    if (!container) {
        container = document.createElement('div');
        container.classList.add('container');
        document.body.appendChild(container);
    }

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

};

function renderTodoContainer(filteredElements){
    let container = document.querySelector('.todo-container');
    
    container.innerHTML = "";
    container.innerHTML = `
        <ul class="items-list">
            ${displayToDods(filteredElements)}  
        </ul>
        
    `;
}

export { renderUI, renderTodoContainer };


