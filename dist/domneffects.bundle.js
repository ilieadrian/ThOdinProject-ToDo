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

})());



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tbmVmZmVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkEsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxDQUFDLEdBQUcsRUFBQztBQUNMO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvZG9tZWZmZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiAoKSB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAvL01lbnUgbGlua3MgaW50ZXJhY3Rpb25cclxuXHJcbiAgICAgICAgY29uc3QgbWVudUxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51LWxpbmtzIGFcIik7XHJcbiAgICBcclxuICAgICAgICBtZW51TGlua3MuZm9yRWFjaChmdW5jdGlvbihsaW5rKSB7XHJcbiAgICAgICAgICAgIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBtZW51TGlua3MuZm9yRWFjaChmdW5jdGlvbihsaW5rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluay5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBwcm9qZWN0IGFuZCBUb0RvIG1vZGFsc1xyXG4gICAgICAgIGxldCBhZGRQcm9qZWN0QlROID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZHByb2plY3QnKTtcclxuICAgICAgICBsZXQgYWRkVG9Eb0JUTiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGR0b2RvJyk7XHJcbiAgICAgICAgbGV0IHZpZXdNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd2aWV3LW1vZGFsJyk7XHJcbiAgICAgICAgbGV0IGFkZFByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGQtcHJvamVjdC1tb2RhbCcpO1xyXG4gICAgICAgIGxldCBhZGRUb0RvTW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkLW1vZGFsLXRvZG8nKTtcclxuICAgICAgICBsZXQgZWRpdE1vZGFsVG9kbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdlZGl0LW1vZGFsLXRvZG8nKTtcclxuICAgICAgICBsZXQgdmlld0J1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudmlldy1idG4nKTtcclxuICAgICAgICBsZXQgZWRpdEJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZWRpdC1idG4nKTtcclxuICAgICAgICBsZXQgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtbW9kYWwtYnV0dG9uJyk7XHJcbiAgICAgICAgbGV0IGVkaXRNb2RhbENsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWVkaXQtbW9kYWwtYnV0dG9uJyk7XHJcblxyXG4gICAgICAgIC8vIFZpZXcgbW9kYWxcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3Blbk1vZGFsKCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBjbG9zZU1vZGFsKCkge1xyXG4gICAgICAgICAgICB2aWV3TW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGVkaXRNb2RhbFRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xyXG5cclxuICAgICAgICB2aWV3QnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uKHZpZXdCdXR0b24pIHtcclxuICAgICAgICAgICAgdmlld0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEFkZCBwcm9qZWN0IG1vZGFsXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5Qcm9qZWN0TW9kYWwoKSB7XHJcbiAgICAgICAgICAgIGFkZFByb2plY3RNb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFkZFByb2plY3RCVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuUHJvamVjdE1vZGFsKTtcclxuXHJcblxyXG4gICAgICAgIC8vIEFkZCB0b2RvIG1vZGFsXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG9wZW5Ub0RPTW9kYWwoKSB7XHJcbiAgICAgICAgICAgIGFkZFRvRG9Nb2RhbC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFkZFRvRG9CVE4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuVG9ET01vZGFsKTtcclxuXHJcbiAgICAgICAgLy8gRWRpdCB0b2RvIG1vZGFsXHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcGVuRWRpdE1vZGFsKCkge1xyXG4gICAgICAgICAgICBlZGl0TW9kYWxUb2RvLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VFZGl0TW9kYWwoKSB7XHJcbiAgICAgICAgICAgIGVkaXRNb2RhbFRvZG8uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlZGl0TW9kYWxDbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlRWRpdE1vZGFsKTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgIGVkaXRCdXR0b25zLmZvckVhY2goZnVuY3Rpb24oZWRpdEJ1dHRvbikge1xyXG4gICAgICAgICAgICBlZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3BlbkVkaXRNb2RhbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICB9KTtcclxuXHJcbn0pKCk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9