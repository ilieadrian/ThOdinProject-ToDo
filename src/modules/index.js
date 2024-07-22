import '../style.css';
import { getProjects } from './handleproject';
import { displayToDods } from './handletodos'; 
//correct typo above: should be displayTodos
import { defaultValues } from './startup';
import TodoIcon from "../images/to-do-list.svg";
import { deleteProject } from './handleproject';
import { setupEventListeners } from './manipulateDOM';

function renderUI(projectsList, todoList) {
    console.log("FIRED: renderUI")
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
                <ul class="items-list" id="item-list-X-X">
                    ${displayToDods(todoList)}
                </ul>
            </section>
        </div>
        <div id="modal-container"></div>
    `;

    //---!!!---//
    const headerIconContainer = document.getElementById('header-icon-container');
    // console.log(headerIconContainer)
    headerIconContainer.appendChild(headerTodoIcon);
}

// function renderTodoContainer(filteredElements){
//     console.log("FIRED: renderTodoContainer")

//     let { renderOnlyContainer } = defaultValues;

//     console.log("renderOnlyContainer:", renderOnlyContainer)
//     let container = document.querySelector('.todo-container');

//     container.innerHTML = "";

//     if (filteredElements.length > 0) {
//         container.innerHTML = `
//         <ul class="items-list">
//             ${displayToDods(filteredElements, renderOnlyContainer)}  
//         </ul>
        
//     `;
//     } else {
//         container.innerHTML = `
//         <div class="items-list">
//             <h2>Empty Project!</h2>
//             <p> Create a new to-do item or delete project. </p>
//             <button class="delete-btn">Delete project</button>
//         </div>    
//     `;
//         handleEmptyProjectPage(container)

//     }
// }


function renderTodoContainer(filteredElements) {
    console.log("FIRED: renderTodoContainer");

    let container = document.querySelector('.todo-container');

    container.innerHTML = "";

    if (filteredElements.length > 0) {
        container.innerHTML = `
        <ul class="items-list">
            ${displayToDods(filteredElements)}  
        </ul>
    `;
    } else {
        container.innerHTML = `
        <div class="items-list">
            <h2>Empty Project!</h2>
            <p>Create a new to-do item or delete project.</p>
            <button class="delete-btn">Delete project</button>
        </div>
    `;
        handleEmptyProjectPage(container);
    }
}
    
function handleEmptyProjectPage(container){
    console.log("FIRED: handleEmptyProjectPage")
        const idToDelete = getActiveLink();

        const { projectsList, todoList } = defaultValues;

        const deleteBtn = container.querySelector('.delete-btn');
            if (deleteBtn) {
                deleteBtn.addEventListener('click', function() {
                    deleteProject(idToDelete, projectsList, todoList);
                    //deleteProject(3, projectsList) Example call
                });
            }

            return projectsList, todoList;
}

function getActiveLink() {
    const activeLink = document.querySelector("#projects a.active");
    if (activeLink) {
        const activeProjectId = activeLink.closest('li').getAttribute('data-project-id');
        return activeProjectId;
    } 
}

//Until i figure out async-await i use these function to add the eventlisteners
//after the UI is rendered. Adding the call to setupEventListeners in renderUI returnet a webpack module
//error because the UI was not fully rendered.
function callEvents(){
    const { projectsList, todoList } = defaultValues;

    // console.log("renderOnlyContainer:", renderOnlyContainer)


    try {
        setupEventListeners(todoList, projectsList,);
    } catch (error) {
        console.error("Error calling callEvents:", error);
    }
}

callEvents();

export { renderUI, renderTodoContainer };


