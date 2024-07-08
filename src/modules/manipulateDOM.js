// import { defaultValues } from "./startup";

// console.log(todoList);

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
        
        // Selecting elements

        const addProjectBTN = document.querySelector('.addproject');
        const addToDoBTN = document.querySelector('.addtodo');
        // const viewModal = document.getElementById('view-modal');
        // const addProjectModal = document.getElementById('add-project-modal');
        // const addToDoModal = document.getElementById('add-modal-todo');
        // const editModalTodo = document.getElementById('edit-modal-todo');
        // const closeButton = document.querySelector('.close-modal-button');
        // const projectModalCloseButton = document.querySelector('.close-project-modal-button');
        // const todoModalCloseButton = document.querySelector('.close-todo-modal-button');
        // const editModalCloseButton = document.querySelector('.close-edit-modal-button');
        // const viewButtons = document.querySelectorAll('.view-btn');
        // const editButtons = document.querySelectorAll('.edit-btn');


        addProjectBTN.addEventListener('click', openProjectModal);
        addToDoBTN.addEventListener('click', openToDoModal);


        // Function to toggle modal
        // function toggleModal(modal) {
        //     console.log("Toggling modal:", modal);
        //     modal.classList.toggle('active');
        // }

        // Function to close all modals
        function closeAllModals() {
            viewModal.classList.remove('active');
            addProjectModal.classList.remove('active');
            addToDoModal.classList.remove('active');
            editModalTodo.classList.remove('active');
        }

        // Event listeners for close buttons
        // closeButton.addEventListener('click', closeAllModals);
        // projectModalCloseButton.addEventListener('click', () => toggleModal(addProjectModal));
        // todoModalCloseButton.addEventListener('click', () => toggleModal(addToDoModal));
        // editModalCloseButton.addEventListener('click', () => toggleModal(editModalTodo));

        // Event listeners for view buttons
        viewButtons.forEach(viewButton => {
            viewButton.addEventListener('click', () => toggleModal(viewModal));
        });

        // Event listener for add project button
        // addProjectBTN.addEventListener('click', () => toggleModal(addProjectModal));

        // Event listener for add todo button
        addToDoBTN.addEventListener('click', () => toggleModal(addToDoModal));


        // Event listeners for edit buttons
        editButtons.forEach(editButton => {
            editButton.addEventListener('click', () => {
                toggleModal(editModalTodo);
                // Additional code to populate edit form with data if needed
            });
        });
        
        });
})();


function addEventListeners(e) {
    console.log(e.target)

    // const todoListContainer = document.querySelector('.items-list')
    // console.log(todoListContainer)

    // if (todoListContainer) {
    //     todoListContainer.addEventListener('click', (event) => {
    //         const target = event.target;
    //         const listItem = target.closest('.item');
    //         const index = listItem ? listItem.id.split('-')[1] : null;

    //         if (index !== null) {
    //             if (target.classList.contains('checkbox')) {
    //                 console.log("handleCheckboxChange(index, target.checked)")
    //                 // handleCheckboxChange(index, target.checked);
    //             } else if (target.closest('.view-btn')) {
    //                 console.log("handleViewButtonClick(index)")
    //                 // handleViewButtonClick(index);
    //             } else if (target.closest('.edit-btn')) {
    //                 console.log("handleEditButtonClick(index)")
    //                 // handleEditButtonClick(index);
    //             } else if (target.closest('.delete-btn')) {
    //                 console.log("handleDeleteButtonClick(index)")
    //                 // handleDeleteButtonClick(index);
    //             }
    //         }
    //     });
    // }

    
    // todoList.forEach((element, index) => 
    //     {  
    //     const theElement = document.getElementById(`view-btn-${index}`);
    //     console.log(theElement)

    //     // document.getElementById(`view-btn-${index}`).addEventListener('click', () => {
    //     //     handleViewButtonClick(index);
    //     // });
    // });
    // // console.log(todoList)
}

function handleViewButtonClick(index) {
    console.log(`View button clicked at index ${index}`);
    // Add your logic here to handle view button click
}



function openProjectModal() {
    let modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = "";

    modalContainer.innerHTML = `
    <div id="add-project-modal" class="modal active">
        <div class="modal-content">
            <div class="modal-header">
                <p>Create a new Project</p>
                <img src="./images/close-ellipse-white-bg.svg" class="close-project-modal-button">
            </div>
            <form>
                <div class="input-container">
                    <label for="name">Project name: </label>
                    <input type="text" id="name">
                </div>
                <button>Create project</button>
            </form>
            
        </div>
    </div>`
}


function openToDoModal() {
    let modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = "";

    modalContainer.innerHTML = `
    <div id="add-modal-todo" class="modal active">
        <div class="modal-content">
            <div class="modal-header">
                <p>Create a new To Do</p>
                <img src="./images/close-ellipse-white-bg.svg" class="close-todo-modal-button">
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
}

//



function openViewModal(index) {
    console.log(`View button clicked at index ${index}`);
    console.log(todoList)

    // Logic to open the edit modal and populate it with the current to-do item's details
}

function openEditModal(index) {
    console.log(`Edit button clicked at index ${index}`);

    // Logic to open the edit modal and populate it with the current to-do item's details
}

function deleteTodoItem(index) {
    console.log(`Delete button clicked at index ${index}`);

    // Logic to remove the to-do item from the list and re-render the UI
    todoList.splice(index, 1);
    renderUI(projectsList, todoList);
}
export {addEventListeners, openViewModal, openEditModal}