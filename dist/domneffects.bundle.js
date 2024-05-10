/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***********************************!*\
  !*** ./src/modules/domeffects.js ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function () {
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
        // const addProjectBTN = document.querySelector('.addproject');
        // const addToDoBTN = document.querySelector('.addtodo');
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

        // // Function to toggle modal
        // function toggleModal(modal) {
        //     modal.classList.toggle('active');
        // }

        // // Function to close all modals
        // function closeAllModals() {
        //     viewModal.classList.remove('active');
        //     addProjectModal.classList.remove('active');
        //     addToDoModal.classList.remove('active');
        //     editModalTodo.classList.remove('active');
        // }

        // // Event listeners for close buttons
        // closeButton.addEventListener('click', closeAllModals);
        // projectModalCloseButton.addEventListener('click', () => toggleModal(addProjectModal));
        // todoModalCloseButton.addEventListener('click', () => toggleModal(addToDoModal));
        // editModalCloseButton.addEventListener('click', () => toggleModal(editModalTodo));

        // // Event listeners for view buttons
        // viewButtons.forEach(viewButton => {
        //     viewButton.addEventListener('click', () => toggleModal(viewModal));
        // });

        // // Event listener for add project button
        // addProjectBTN.addEventListener('click', () => toggleModal(addProjectModal));

        // // Event listener for add todo button
        // addToDoBTN.addEventListener('click', () => toggleModal(addToDoModal));

        // // Event listeners for edit buttons
        // editButtons.forEach(editButton => {
        //     editButton.addEventListener('click', () => {
        //         toggleModal(editModalTodo);
        //         // Additional code to populate edit form with data if needed
        //     });
        // });
        //        
        });

})());



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tbmVmZmVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWjtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUMsR0FBRyxFQUFDO0FBQ0w7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9kb21lZmZlY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uICgpIHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIC8vTWVudSBsaW5rcyBpbnRlcmFjdGlvblxyXG5cclxuICAgICAgICBjb25zdCBtZW51TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1lbnUtbGlua3MgYVwiKTtcclxuICAgIFxyXG4gICAgICAgIG1lbnVMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmspIHtcclxuICAgICAgICAgICAgbGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIG1lbnVMaW5rcy5mb3JFYWNoKGZ1bmN0aW9uKGxpbmspIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gU2VsZWN0aW5nIGVsZW1lbnRzXHJcbiAgICAgICAgLy8gY29uc3QgYWRkUHJvamVjdEJUTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGRwcm9qZWN0Jyk7XHJcbiAgICAgICAgLy8gY29uc3QgYWRkVG9Eb0JUTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGR0b2RvJyk7XHJcbiAgICAgICAgLy8gY29uc3Qgdmlld01vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ZpZXctbW9kYWwnKTtcclxuICAgICAgICAvLyBjb25zdCBhZGRQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLXByb2plY3QtbW9kYWwnKTtcclxuICAgICAgICAvLyBjb25zdCBhZGRUb0RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW1vZGFsLXRvZG8nKTtcclxuICAgICAgICAvLyBjb25zdCBlZGl0TW9kYWxUb2RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2VkaXQtbW9kYWwtdG9kbycpO1xyXG4gICAgICAgIC8vIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLW1vZGFsLWJ1dHRvbicpO1xyXG4gICAgICAgIC8vIGNvbnN0IHByb2plY3RNb2RhbENsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLXByb2plY3QtbW9kYWwtYnV0dG9uJyk7XHJcbiAgICAgICAgLy8gY29uc3QgdG9kb01vZGFsQ2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtdG9kby1tb2RhbC1idXR0b24nKTtcclxuICAgICAgICAvLyBjb25zdCBlZGl0TW9kYWxDbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1lZGl0LW1vZGFsLWJ1dHRvbicpO1xyXG4gICAgICAgIC8vIGNvbnN0IHZpZXdCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZpZXctYnRuJyk7XHJcbiAgICAgICAgLy8gY29uc3QgZWRpdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1idG4nKTtcclxuXHJcbiAgICAgICAgLy8gLy8gRnVuY3Rpb24gdG8gdG9nZ2xlIG1vZGFsXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gdG9nZ2xlTW9kYWwobW9kYWwpIHtcclxuICAgICAgICAvLyAgICAgbW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAvLyBGdW5jdGlvbiB0byBjbG9zZSBhbGwgbW9kYWxzXHJcbiAgICAgICAgLy8gZnVuY3Rpb24gY2xvc2VBbGxNb2RhbHMoKSB7XHJcbiAgICAgICAgLy8gICAgIHZpZXdNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAvLyAgICAgYWRkUHJvamVjdE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIC8vICAgICBhZGRUb0RvTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgLy8gICAgIGVkaXRNb2RhbFRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyAvLyBFdmVudCBsaXN0ZW5lcnMgZm9yIGNsb3NlIGJ1dHRvbnNcclxuICAgICAgICAvLyBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlQWxsTW9kYWxzKTtcclxuICAgICAgICAvLyBwcm9qZWN0TW9kYWxDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZU1vZGFsKGFkZFByb2plY3RNb2RhbCkpO1xyXG4gICAgICAgIC8vIHRvZG9Nb2RhbENsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gdG9nZ2xlTW9kYWwoYWRkVG9Eb01vZGFsKSk7XHJcbiAgICAgICAgLy8gZWRpdE1vZGFsQ2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0b2dnbGVNb2RhbChlZGl0TW9kYWxUb2RvKSk7XHJcblxyXG4gICAgICAgIC8vIC8vIEV2ZW50IGxpc3RlbmVycyBmb3IgdmlldyBidXR0b25zXHJcbiAgICAgICAgLy8gdmlld0J1dHRvbnMuZm9yRWFjaCh2aWV3QnV0dG9uID0+IHtcclxuICAgICAgICAvLyAgICAgdmlld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZU1vZGFsKHZpZXdNb2RhbCkpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAvLyAvLyBFdmVudCBsaXN0ZW5lciBmb3IgYWRkIHByb2plY3QgYnV0dG9uXHJcbiAgICAgICAgLy8gYWRkUHJvamVjdEJUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZU1vZGFsKGFkZFByb2plY3RNb2RhbCkpO1xyXG5cclxuICAgICAgICAvLyAvLyBFdmVudCBsaXN0ZW5lciBmb3IgYWRkIHRvZG8gYnV0dG9uXHJcbiAgICAgICAgLy8gYWRkVG9Eb0JUTi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRvZ2dsZU1vZGFsKGFkZFRvRG9Nb2RhbCkpO1xyXG5cclxuICAgICAgICAvLyAvLyBFdmVudCBsaXN0ZW5lcnMgZm9yIGVkaXQgYnV0dG9uc1xyXG4gICAgICAgIC8vIGVkaXRCdXR0b25zLmZvckVhY2goZWRpdEJ1dHRvbiA9PiB7XHJcbiAgICAgICAgLy8gICAgIGVkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICB0b2dnbGVNb2RhbChlZGl0TW9kYWxUb2RvKTtcclxuICAgICAgICAvLyAgICAgICAgIC8vIEFkZGl0aW9uYWwgY29kZSB0byBwb3B1bGF0ZSBlZGl0IGZvcm0gd2l0aCBkYXRhIGlmIG5lZWRlZFxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICAvLyAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG59KSgpO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==