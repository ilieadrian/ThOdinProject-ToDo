import '../style.css';
import { getProjects, renderDueTodosContainer, handleProjectCountNumber } from './handleproject';
import { displayToDods } from './handletodos'; 
//correct typo above: should be displayTodos
import { defaultValues } from './startup';
import TodoIcon from "../images/to-do-list.svg";
import { deleteProject } from './handleproject';
import { setupEventListeners } from './manipulateDOM';

function renderUI(projectsList, todoList) {
    let container = document.querySelector('.container');
    const headerTodoIcon = new Image();
    headerTodoIcon.src = TodoIcon;

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
                <div id="header-icon-container"></div>
        </section>
        <div class="content-container">
            <section class="menu">
                <ul id="todos-due" class="menu-links">
                    ${renderDueTodosContainer(todoList)}
                </ul>
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
                <ul class="items-list" id="item-list-X-X">
                    ${displayToDods(todoList)}
                </ul>
            </section>
        </div>
        <div id="modal-container"></div>
    `;
    
    if(todoList.length == 0) {
        const errorMessage = `<p class="emptyPageNotification">There are no more todos.</p>`;
        renderTodoContainer(todoList, errorMessage);
        localStorage.setItem("todoList", JSON.stringify(todoList));
    }
    
    //---!!!---//
    const headerIconContainer = document.getElementById('header-icon-container');
    headerIconContainer.appendChild(headerTodoIcon);
    handleProjectCountNumber(todoList);
}

function renderTodoContainer(filteredTodos, errorMessage) {
    let container = document.querySelector('.todo-container');

    container.innerHTML = "";

    if(filteredTodos.length > 0) {
        container.innerHTML = `
        <ul class="items-list">
            ${displayToDods(filteredTodos)}  
        </ul>
    `;
    } else {
        container.innerHTML = `
        <div class="items-list">
            ${errorMessage}
        </div>
        `;
        // container.innerHTML = `
        // <div class="items-list">
        //     <h2>Empty Project!</h2>
        //     <p>Create a new to-do item or delete project.</p>
        //     <button class="delete-btn">Delete project</button>
        // </div>
        // `;
        handleEmptyProjectPage();
    }
}

function renderProjectContainer(projectsList, todoList) {
    let container = document.getElementById('projects');

    container.innerHTML = "";
    container.innerHTML = `
        ${getProjects(projectsList, todoList)}
    `;
}

function renderHomeMenu(todoList) {
    let container = document.getElementById('todos-due');

    container.innerHTML = "";
    container.innerHTML = `
        ${renderDueTodosContainer(todoList)}
    `;
}
    
function handleEmptyProjectPage(){
    let container = document.querySelector('.todo-container');

    const { projectsList, todoList } = defaultValues;

    getActiveLink(function(idToDelete) {
        const deleteBtn = container.querySelector('.delete-btn');
        if (deleteBtn) {
            deleteBtn.addEventListener('click', function() {
                deleteProject(idToDelete, projectsList, todoList);
            });
        } else {
            console.log("RenderUI case");
        }
    });
}

function getActiveLink(callback) {
    const linkContainer = document.querySelector('#projects');

    linkContainer.addEventListener('click', function(event) {
        const target = event.target;
        const activeProjectId = target.parentElement.getAttribute('data-project-id');

        // Pass the activeProjectId to the callback function
        if (callback && typeof callback === 'function') {
            callback(activeProjectId);
        }
    });
}

//Until i figure out async-await i use these function to add the eventlisteners
//after the UI is rendered. Adding the call to setupEventListeners in renderUI returned a webpack module error
//because the UI was not fully rendered.
function callEvents(){
    const { projectsList, todoList } = defaultValues;

    try {
        setupEventListeners(todoList, projectsList);
    } catch (error) {
        console.error("Error calling callEvents:", error);
    }
}
callEvents();

export { renderUI, renderTodoContainer, displayToDods, renderProjectContainer, renderHomeMenu, handleEmptyProjectPage };