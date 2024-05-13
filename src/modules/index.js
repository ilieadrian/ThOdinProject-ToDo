import '../style.css';
import Project from "./project";
import { handleTodos } from './handletodos';
import { getProjects } from './handleproject';
import projectList from './startup';
// import Todo from './todo';

function renderUI(projectsList) {
    const div = document.createElement("div");
    div.classList.add("container")
    
    div.innerHTML = `
            <section class="header">
                <h1>// To do</h1> 
                <img src="../src/images/to-do-list.svg" alt="" srcset="">
            </section>
            <div class="content-container">
            <section class="menu">
                <ul id="todos-due" class="menu-links">
                    <li><a href="#">Home</a><span class="number-of-tasks">7</span></li>    
                </ul>

                <h2>Projects</h2>
                <ul id="projects" class="menu-links">
                    ${getProjects(projectsList)}     
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
                    <li class="item">
                        <div class="name-grup">
                            <div class="priority low"></div>
                            <input type="checkbox"/>
                            <p>Lorem ipsum dolor sit amet. </p>
                        </div>
                        <div class="action-grup">
                            <p id="due-date">Jun 9th</p>
                            <button class="view-btn"><img src="../src/images/view.svg" alt="" srcset=""></button>
                            <button class="edit-btn"><img src="../src/images/edit.svg" alt="" srcset=""></button>
                            <button><img src="../src/images/delete.svg" alt="" srcset=""></button>
                        </div>
                    </li>
                </ul>
            </section>
            </div>
        </div>
    `;

    document.body.appendChild(div);
};


export { renderUI };


