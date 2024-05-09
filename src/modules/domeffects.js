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

        // Add project and ToDo modals
        let addProjectBTN = document.querySelector('.addproject');
        let addToDoBTN = document.querySelector('.addtodo');
        let viewModal = document.getElementById('view-modal');
        let addProjectModal = document.getElementById('add-project-modal');
        let addToDoModal = document.getElementById('add-modal-todo');
        let editModalTodo = document.getElementById('edit-modal-todo');
        let viewButtons = document.querySelectorAll('.view-btn');
        let editButtons = document.querySelectorAll('.edit-btn');
        let closeButton = document.querySelector('.close-modal-button');
        let editModalCloseButton = document.querySelector('.close-edit-modal-button');

        // View modal

        function openModal() {
            viewModal.classList.add('active');
        }

        function closeModal() {
            viewModal.classList.remove('active');
            editModalTodo.classList.remove('active');
        }

        closeButton.addEventListener('click', closeModal);

        viewButtons.forEach(function(viewButton) {
            viewButton.addEventListener('click', openModal);
        });

        // Add project modal

        function openProjectModal() {
            addProjectModal.classList.add('active');
        }

        addProjectBTN.addEventListener('click', openProjectModal);


        // Add todo modal

        function openToDOModal() {
            addToDoModal.classList.add('active');
        }

        addToDoBTN.addEventListener('click', openToDOModal);

        // Edit todo modal


        function openEditModal() {
            editModalTodo.classList.add('active');
        }

        function closeEditModal() {
            editModalTodo.classList.remove('active');
        }

        editModalCloseButton.addEventListener('click', closeEditModal);
        
                editButtons.forEach(function(editButton) {
            editButton.addEventListener('click', openEditModal);
        });


        
        
        
        });

})();


