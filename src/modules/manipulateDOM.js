import { renderTodoContainer } from "./index";
import { getTodosByProject } from './handletodos';
import { renderUI } from "./index";


export default (function () {

    document.addEventListener("DOMContentLoaded", function() {
        //Menu links interaction
        const menuLinks = document.querySelectorAll(".menu-links a");
        
        menuLinks.forEach(function(link) {
            link.addEventListener("click", function(event) {
                menuLinks.forEach(function(link) {
                    link.classList.remove("active");
                });
                    this.classList.add("active");
                });
            });        
        });
})();


function openProjectModal(modalContainer) {
    modalContainer.innerHTML = "";
    modalContainer.innerHTML = `
    <div id="add-project-modal" class="modal active">
        <div class="modal-content">
            <div class="modal-header">
                <p>Create a new Project</p>
                <img src="../src/images/close-ellipse-white-bg.svg" class="close-project-modal-button close-btn">
            </div>
            <form>
                <div class="input-container">
                    <label for="name">Project name: </label>
                    <input type="text" id="name">
                </div>
                <button>Create project</button>
            </form>
            
        </div>
    </div>
    `;
    addCloseEventListeners(modalContainer);
}

function openToDoModal(modalContainer) {
    modalContainer.innerHTML = "";
    modalContainer.innerHTML = `
    <div id="add-modal-todo" class="modal active">
        <div class="modal-content">
            <div class="modal-header">
                <p>Create a new To Do</p>
                <img src="../src/images/close-ellipse-white-bg.svg" class="close-todo-modal-button close-btn">
            </div>
            <form action="">
                <ul class="input-container">
                    <li>
                        <label for="title">Title</label>
                        <input type="text" id="title">
                    </li>
                    <li>
                        <label for="description">Description</label>
                        <input type="text" id="description">
                    </li>
                    <li>    
                        <label for="duedate">Due date:</label>
                        <input type="date" id="duedate">
                    </li>
                </ul>

                <div class="button-container">  
                    <div class="priority-btn-grup">
                        <label for="priority">Priority:</label>
                        <button id="low">Low</button>
                        <button id="medium">Medium</button>
                        <button id="high">High</button>
                    </div>

                    <button>Create project</button> 
                </div> 
            </form>
            
        </div>
    </div>
    `;
    addCloseEventListeners(modalContainer);
}

function openViewModal(index, todoList, modalContainer) {
    modalContainer.innerHTML = "";
    modalContainer.innerHTML = `
    <div id="view-modal" class="modal active">
        <div class="modal-content">
            <img src="../src/images/close-ellipse.svg" class="close-modal-button close-btn">
            <h2>${todoList[index].title}</h2>
            <div class="detail">
                <p class="detail-title">Project: </p>
                <p>${todoList[index].title}</p>
            </div>
            <div class="detail">
                <p class="detail-title">Priority: </p>
                <p>${todoList[index].priority}</p>
            </div>
            <div class="detail">
                <p class="detail-title">Due Date: </p>
                <p>${todoList[index].dueDate}</p>
            </div>
            <div class="detail">
                <p class="detail-title">Details: </p>
                <p>${todoList[index].description}</p>
            </div>
        </div>    
    </div>
    `;
    addCloseEventListeners(modalContainer);
}

function openEditModal(index, todoList, modalContainer) {
    modalContainer.innerHTML = "";
    //Correct the value of the imput @DueDate, it does not use the stored dueDate
    //Add functionality to select the active BTN
    modalContainer.innerHTML = `
    <div id="edit-modal-todo" class="modal active">
        <div class="modal-content">
            <div class="modal-header">
                <p>Create a new To Do</p>
                <img src="../src/images/close-ellipse-white-bg.svg" class="close-project-modal-button close-btn">
            </div>
            <form action="">
                <ul class="input-container">
                    <li>
                        <label for="title">Title</label>
                        <input type="text" id="title" value="${todoList[index].title}">
                    </li>
                    <li>
                        <label for="description">Description</label>
                        <input type="text" id="description" value="${todoList[index].description}">
                    </li>
                    <li>    
                        <label for="duedate">Due date:</label>
                        <input type="date" id="duedate" value="${todoList[index].dueDate}">
                    </li>
                </ul>

                <div class="button-container">  
                    <div class="priority-btn-grup">
                        <label for="priority">Priority:</label>
                        <button id="low">Low</button>
                        <button id="medium">Medium</button>
                        <button id="high">High</button>
                    </div>

                    <button>Confirm edit</button> 
                </div> 
            </form>
            
        </div>
    </div>
    `;
    addCloseEventListeners(modalContainer);
}
let statusOfUI = false;

//V2
function modifyTodoStatus(index, target, projectsList, todoList) {
    console.log("FIRED: modifyTodoStatus with index, target", index, target)
    const todoItem = todoList[index];
    todoItem.status = target.checked; 

    console.log(todoItem)
    console.log("PROJECT FOR TO CLICKED:", todoList[index].project)
    

    if(statusOfUI) {
        console.log("statusOfUI TRUE, value of PROJECT: ", todoList[index].project)
        getTodosByProject(todoList, todoList[index].project);
        // console.log("if statusOfUI true", todoList)
    } else {
        renderUI(projectsList, todoList);
        console.log("IF statusOFUI - ELSE -> Render UI Fired")
    }
    setupEventListeners(todoList, projectsList);

    console.log("statusOfUI in modifyTodoStatus:", statusOfUI)
}

//V1
// function modifyTodoStatus(index, target, projectsList, todoList) {
//     console.log("FIRED: modifyTodoStatus");
//     const todoItem = todoList[index];
//     todoItem.status = target.checked; 
    
//     // Check if all todos are being displayed or a specific project
//     const activeProjectLink = document.querySelector('#projects a.active');
//     console.log("activeProjectLink", activeProjectLink.textContent)
//     if (activeProjectLink && activeProjectLink.textContent !== 'All') {
//         // Render only the filtered project todos
//         getTodosByProject(todoList, activeProjectLink.textContent);
//     } else {
//         // Render the entire UI
//         renderUI(projectsList, todoList);
//         setupEventListeners(todoList, projectsList);
//     }
// }

function addCloseEventListeners(modalContainer) {
    const closeButtons = modalContainer.querySelectorAll('.close-btn');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            modalContainer.innerHTML = '';
        });
    });
}


function setupEventListeners(todoList, projectsList) {
    console.log("setupEventListeners has fired");

    const todoListContainer = document.querySelector('.todo-container');
    let modalContainer = document.getElementById('modal-container');

    const addProjectBTN = document.querySelector('.addproject');
    const addToDoBTN = document.querySelector('.addtodo');

    addProjectBTN.addEventListener('click', function() {
        openProjectModal(modalContainer);
    });

    addToDoBTN.addEventListener('click', function() {
        openToDoModal(modalContainer);
    });

    todoListContainer.addEventListener('click', function(event) {
        const target = event.target;
        const listItem = target.closest('.item');
        const index = listItem ? listItem.id.split('-')[1] : null;

        if (index !== null) {
            if (target.closest('.view-btn')) {
                openViewModal(index, todoList, modalContainer);
            } else if (target.closest('.edit-btn')) {
                openEditModal(index, todoList, modalContainer);
            } else if (target.closest('.delete-btn')) {
                deleteTodoItem(index, todoList, projectsList);
            } else if (target.classList.contains('todo-checkbox')) {
                modifyTodoStatus(index, target, projectsList, todoList);
            }
        }
    });

    // Attach event listeners to project links
    const projectList = document.querySelectorAll("#projects li");
    projectList.forEach(li => {
        const anchor = li.querySelector('a');
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const projectName = anchor.textContent;
            
            getTodosByProject(todoList, projectName);
            //
            console.log("??? --- EVENT ---??? firing getTodosByProject from Event Listener - projectname: ", projectName)

            projectList.forEach(item => {
                const link = item.querySelector('a');
                link.classList.remove('active');
            });

            anchor.classList.add('active');

            //
            return statusOfUI = true;
        });
        
    });

    
}

//V1
// function setupEventListeners(todoList, projectsList) {
//     const todoListContainer = document.querySelector('.todo-container');
//     let modalContainer = document.getElementById('modal-container');

//     const addProjectBTN = document.querySelector('.addproject');
//     const addToDoBTN = document.querySelector('.addtodo');

//     addProjectBTN.addEventListener('click', function() {
//         openProjectModal(modalContainer);
//     });

//     addToDoBTN.addEventListener('click', function() {
//         openToDoModal(modalContainer);
//     });

//     todoListContainer.addEventListener('click', function(event) {
//         const target = event.target;
//         const listItem = target.closest('.item');
//         const index = listItem ? listItem.id.split('-')[1] : null;

//         if (index !== null) {
//             if (target.closest('.view-btn')) {
//                 openViewModal(index, todoList, modalContainer);
//             } else if (target.closest('.edit-btn')) {
//                 openEditModal(index, todoList, modalContainer);
//             } else if (target.closest('.delete-btn')) {
//                 deleteTodoItem(index, todoList, projectsList);
//             } else if (target.classList.contains('todo-checkbox')) {
//                 modifyTodoStatus(index, target, projectsList, todoList);
//             }
//         }
//     });

//     const projectList = document.querySelectorAll("#projects li");
//     projectList.forEach(li => {
//         const anchor = li.querySelector('a');
//         anchor.addEventListener('click', function(event) {
//             event.preventDefault();
//             const projectId = li.getAttribute('data-project-id');
//             const projectName = anchor.textContent;

//             getTodosByProject(todoList, projectName);

//             projectList.forEach(item => {
//                 const link = item.querySelector('a');
//                 link.classList.remove('active');
//             });

//             anchor.classList.add('active');
//         });
//     });
// }

// export {setupEventListeners, openProjectModal, openToDoModal, openViewModal, openEditModal };
export { setupEventListeners };


