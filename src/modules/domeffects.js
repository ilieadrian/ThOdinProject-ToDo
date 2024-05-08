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

        // View modal

        let modal = document.getElementById('view-modal');
        let addProjectBTN = document.querySelector('.addproject');
        let addToDoBTN = document.querySelector('.addtodo');
        let addProjectModal = document.getElementById('add-project-modal');
        let addToDoModal = document.getElementById('add-modal-todo');
        let closeButton = document.querySelector('.close-modal-button');
        let viewButtons = document.querySelectorAll('.view-btn');

        function openModal() {
            modal.classList.add('active');
        }

        function openProjectModal() {
            addProjectModal.classList.add('active');
        }

        function openToDOModal() {
            addToDoModal.classList.add('active');
        }

        function closeModal() {
            modal.classList.remove('active');
        }

        viewButtons.forEach(function(viewButton) {
            viewButton.addEventListener('click', openModal);
        });
        
        closeButton.addEventListener('click', closeModal);

        addProjectBTN.addEventListener('click', openProjectModal);

        addToDoBTN.addEventListener('click', openToDOModal);
        
        
        });

})();


