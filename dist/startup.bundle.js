/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/handleproject.js":
/*!**************************************!*\
  !*** ./src/modules/handleproject.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");


function handleProject(newToDo, projectList){
    const projectName = newToDo.project;

    const existingProject = projectList.find(project => project.name === projectName);

    if (!existingProject){
        const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__["default"](newToDo.project);
        projectList.push(newProject);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleProject);

/***/ }),

/***/ "./src/modules/handletodos.js":
/*!************************************!*\
  !*** ./src/modules/handletodos.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTodosByProject: () => (/* binding */ getTodosByProject),
/* harmony export */   handleTodos: () => (/* binding */ handleTodos)
/* harmony export */ });
function handleTodos(taskList, projectsList) {
    for (const element of projectsList){
        const curentElement = element.name;
        getTodosByProject(taskList, curentElement);
    } 
}

function getTodosByProject(taskList, element) {
    return taskList.filter(taskList => taskList.project === element);
}




/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project {
    constructor(name) {
        this._name = name;
    }   

    get name() {
        return this._name;
    }

    set name(value) {
        return this._name = value;
    }
}

/***/ }),

/***/ "./src/modules/todo.js":
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
    constructor(title, description, dueDate, priority, status, project, checked) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._status = status;
        this._project = project; 
        this._checked = checked;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get dueDate() {
        return this._dueDate;
    }

    get prority() {
        return this._priority;
    }

    get status() {
        return this._status;
    }

    get project() {
        return this._project;
    }

    get status() {
        return this._checked;
    }

    set status(value) {
        this._checked = value;
    }
    // getItemsByProject(taskList, project){
    //     var result = taskList.filter(obj => {
    //         return obj.project === project;
    //     })
    //     return result;
    // }

    //     getIndex(param) {
    //     return this.taskList.findIndex(e => e.title === param);
    // }

    // removeItem(param) {
    //     const index = this.getIndex(param);
    //     if (index !== -1) {
    //         this.taskList.splice(index, 1);
    //     }
    // }

}

// https://github.com/Belayne/todo/blob/main/src/model.js
// https://github.com/Ioannis-Bfg/Todo-List/blob/main/src/assets/domproject.js
// https://github.com/youssefKetata/todoist-clone/blob/main/js/project-dialog.js
// https://github.com/Valentin-Sosa/Todo-List/blob/main/src/logic.js







/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/modules/startup.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/modules/todo.js");
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/modules/project.js");
/* harmony import */ var _handleproject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./handleproject */ "./src/modules/handleproject.js");
/* harmony import */ var _handletodos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./handletodos */ "./src/modules/handletodos.js");






const defaultValues  = (function () {
    const taskList = [];
    const projectsList = [];
    let newToDo;
    let defaultProject;

    defaultProject = new _project__WEBPACK_IMPORTED_MODULE_1__["default"]("Default")
    projectsList.push(defaultProject);

    newToDo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('Read daily a pattern', 'https://www.patterns.dev/vanilla/import-on-interaction', '2024-03-20', 'High', 'Unfinished', 'Learning', false);
    taskList.push(newToDo);
    (0,_handleproject__WEBPACK_IMPORTED_MODULE_2__["default"])(newToDo, projectsList);

    newToDo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('Write on blog', 'Write about last part from TicTacToe game', '2024-03-21', 'Low', 'Unfinished', 'Home', false);
    taskList.push(newToDo);
    (0,_handleproject__WEBPACK_IMPORTED_MODULE_2__["default"])(newToDo, projectsList);

    newToDo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('New Odin Chapter', 'Start a new OdinProjectChapter', '2024-04-15', 'Normal', 'Finished', 'Learning', true);
    taskList.push(newToDo);
    (0,_handleproject__WEBPACK_IMPORTED_MODULE_2__["default"])(newToDo, projectsList);

    newToDo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('Repair blog', 'Fix social links on blog header', '2024-03-29', 'High', 'Unfinished', 'Learning', true);
    taskList.push(newToDo);
    (0,_handleproject__WEBPACK_IMPORTED_MODULE_2__["default"])(newToDo, projectsList);

    newToDo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '2024-03-15', 'Normal', 'Finished', 'Home', false);
    taskList.push(newToDo);
    (0,_handleproject__WEBPACK_IMPORTED_MODULE_2__["default"])(newToDo, projectsList);

    newToDo = new _todo__WEBPACK_IMPORTED_MODULE_0__["default"]('App implementation', 'Add ability to extract the projects from the array', '2024-04-24', 'Normal', 'Finished', 'Active learing', true);
    taskList.push(newToDo);
    (0,_handleproject__WEBPACK_IMPORTED_MODULE_2__["default"])(newToDo, projectsList);

    (0,_handletodos__WEBPACK_IMPORTED_MODULE_3__.handleTodos)(taskList, projectsList);

    return {
        taskList,
        projectsList,
    };
    
})();


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultValues);




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhcnR1cC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGdEQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsYUFBYTs7Ozs7Ozs7Ozs7Ozs7O0FDYjVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDeUM7Ozs7Ozs7Ozs7Ozs7OztBQ1gxQjtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNaZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN0RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ04wQjtBQUNNO0FBQ1k7QUFDRjtBQUNNO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFPO0FBQ2hDO0FBQ0E7QUFDQSxrQkFBa0IsNkNBQUk7QUFDdEI7QUFDQSxJQUFJLDBEQUFhO0FBQ2pCO0FBQ0Esa0JBQWtCLDZDQUFJO0FBQ3RCO0FBQ0EsSUFBSSwwREFBYTtBQUNqQjtBQUNBLGtCQUFrQiw2Q0FBSTtBQUN0QjtBQUNBLElBQUksMERBQWE7QUFDakI7QUFDQSxrQkFBa0IsNkNBQUk7QUFDdEI7QUFDQSxJQUFJLDBEQUFhO0FBQ2pCO0FBQ0Esa0JBQWtCLDZDQUFJO0FBQ3RCO0FBQ0EsSUFBSSwwREFBYTtBQUNqQjtBQUNBLGtCQUFrQiw2Q0FBSTtBQUN0QjtBQUNBLElBQUksMERBQWE7QUFDakI7QUFDQSxJQUFJLHlEQUFXO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxpRUFBZSxhQUFhLEVBQUM7QUFDN0I7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9oYW5kbGVwcm9qZWN0LmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaGFuZGxldG9kb3MuanMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kby5qcyIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RhcnR1cC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0XCI7XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0KG5ld1RvRG8sIHByb2plY3RMaXN0KXtcclxuICAgIGNvbnN0IHByb2plY3ROYW1lID0gbmV3VG9Eby5wcm9qZWN0O1xyXG5cclxuICAgIGNvbnN0IGV4aXN0aW5nUHJvamVjdCA9IHByb2plY3RMaXN0LmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IHByb2plY3ROYW1lKTtcclxuXHJcbiAgICBpZiAoIWV4aXN0aW5nUHJvamVjdCl7XHJcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KG5ld1RvRG8ucHJvamVjdCk7XHJcbiAgICAgICAgcHJvamVjdExpc3QucHVzaChuZXdQcm9qZWN0KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlUHJvamVjdDsiLCJmdW5jdGlvbiBoYW5kbGVUb2Rvcyh0YXNrTGlzdCwgcHJvamVjdHNMaXN0KSB7XHJcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgcHJvamVjdHNMaXN0KXtcclxuICAgICAgICBjb25zdCBjdXJlbnRFbGVtZW50ID0gZWxlbWVudC5uYW1lO1xyXG4gICAgICAgIGdldFRvZG9zQnlQcm9qZWN0KHRhc2tMaXN0LCBjdXJlbnRFbGVtZW50KTtcclxuICAgIH0gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRvZG9zQnlQcm9qZWN0KHRhc2tMaXN0LCBlbGVtZW50KSB7XHJcbiAgICByZXR1cm4gdGFza0xpc3QuZmlsdGVyKHRhc2tMaXN0ID0+IHRhc2tMaXN0LnByb2plY3QgPT09IGVsZW1lbnQpO1xyXG59XHJcblxyXG5leHBvcnQgeyBoYW5kbGVUb2RvcywgZ2V0VG9kb3NCeVByb2plY3QgfVxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLl9uYW1lID0gbmFtZTtcclxuICAgIH0gICBcclxuXHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgbmFtZSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lID0gdmFsdWU7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgcHJvamVjdCwgY2hlY2tlZCkge1xyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5fZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLl9kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICB0aGlzLl9wcm9qZWN0ID0gcHJvamVjdDsgXHJcbiAgICAgICAgdGhpcy5fY2hlY2tlZCA9IGNoZWNrZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aXRsZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgZGVzY3JpcHRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2NyaXB0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkdWVEYXRlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kdWVEYXRlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBwcm9yaXR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wcmlvcml0eTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RhdHVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHByb2plY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Byb2plY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHN0YXR1cygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hlY2tlZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgc3RhdHVzKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fY2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLy8gZ2V0SXRlbXNCeVByb2plY3QodGFza0xpc3QsIHByb2plY3Qpe1xyXG4gICAgLy8gICAgIHZhciByZXN1bHQgPSB0YXNrTGlzdC5maWx0ZXIob2JqID0+IHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIG9iai5wcm9qZWN0ID09PSBwcm9qZWN0O1xyXG4gICAgLy8gICAgIH0pXHJcbiAgICAvLyAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyAgICAgZ2V0SW5kZXgocGFyYW0pIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy50YXNrTGlzdC5maW5kSW5kZXgoZSA9PiBlLnRpdGxlID09PSBwYXJhbSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gcmVtb3ZlSXRlbShwYXJhbSkge1xyXG4gICAgLy8gICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRJbmRleChwYXJhbSk7XHJcbiAgICAvLyAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxufVxyXG5cclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL0JlbGF5bmUvdG9kby9ibG9iL21haW4vc3JjL21vZGVsLmpzXHJcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Jb2FubmlzLUJmZy9Ub2RvLUxpc3QvYmxvYi9tYWluL3NyYy9hc3NldHMvZG9tcHJvamVjdC5qc1xyXG4vLyBodHRwczovL2dpdGh1Yi5jb20veW91c3NlZktldGF0YS90b2RvaXN0LWNsb25lL2Jsb2IvbWFpbi9qcy9wcm9qZWN0LWRpYWxvZy5qc1xyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vVmFsZW50aW4tU29zYS9Ub2RvLUxpc3QvYmxvYi9tYWluL3NyYy9sb2dpYy5qc1xyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFRvZG8gZnJvbSAnLi90b2RvJztcclxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0JztcclxuaW1wb3J0IGhhbmRsZVByb2plY3QgZnJvbSAnLi9oYW5kbGVwcm9qZWN0JztcclxuaW1wb3J0IHtoYW5kbGVUb2Rvc30gZnJvbSAnLi9oYW5kbGV0b2Rvcyc7XHJcbmltcG9ydCB7Z2V0VG9kb3NCeVByb2plY3R9IGZyb20gJy4vaGFuZGxldG9kb3MnO1xyXG5cclxuY29uc3QgZGVmYXVsdFZhbHVlcyAgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgdGFza0xpc3QgPSBbXTtcclxuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IFtdO1xyXG4gICAgbGV0IG5ld1RvRG87XHJcbiAgICBsZXQgZGVmYXVsdFByb2plY3Q7XHJcblxyXG4gICAgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHRcIilcclxuICAgIHByb2plY3RzTGlzdC5wdXNoKGRlZmF1bHRQcm9qZWN0KTtcclxuXHJcbiAgICBuZXdUb0RvID0gbmV3IFRvZG8oJ1JlYWQgZGFpbHkgYSBwYXR0ZXJuJywgJ2h0dHBzOi8vd3d3LnBhdHRlcm5zLmRldi92YW5pbGxhL2ltcG9ydC1vbi1pbnRlcmFjdGlvbicsICcyMDI0LTAzLTIwJywgJ0hpZ2gnLCAnVW5maW5pc2hlZCcsICdMZWFybmluZycsIGZhbHNlKTtcclxuICAgIHRhc2tMaXN0LnB1c2gobmV3VG9Ebyk7XHJcbiAgICBoYW5kbGVQcm9qZWN0KG5ld1RvRG8sIHByb2plY3RzTGlzdCk7XHJcblxyXG4gICAgbmV3VG9EbyA9IG5ldyBUb2RvKCdXcml0ZSBvbiBibG9nJywgJ1dyaXRlIGFib3V0IGxhc3QgcGFydCBmcm9tIFRpY1RhY1RvZSBnYW1lJywgJzIwMjQtMDMtMjEnLCAnTG93JywgJ1VuZmluaXNoZWQnLCAnSG9tZScsIGZhbHNlKTtcclxuICAgIHRhc2tMaXN0LnB1c2gobmV3VG9Ebyk7XHJcbiAgICBoYW5kbGVQcm9qZWN0KG5ld1RvRG8sIHByb2plY3RzTGlzdCk7XHJcblxyXG4gICAgbmV3VG9EbyA9IG5ldyBUb2RvKCdOZXcgT2RpbiBDaGFwdGVyJywgJ1N0YXJ0IGEgbmV3IE9kaW5Qcm9qZWN0Q2hhcHRlcicsICcyMDI0LTA0LTE1JywgJ05vcm1hbCcsICdGaW5pc2hlZCcsICdMZWFybmluZycsIHRydWUpO1xyXG4gICAgdGFza0xpc3QucHVzaChuZXdUb0RvKTtcclxuICAgIGhhbmRsZVByb2plY3QobmV3VG9EbywgcHJvamVjdHNMaXN0KTtcclxuXHJcbiAgICBuZXdUb0RvID0gbmV3IFRvZG8oJ1JlcGFpciBibG9nJywgJ0ZpeCBzb2NpYWwgbGlua3Mgb24gYmxvZyBoZWFkZXInLCAnMjAyNC0wMy0yOScsICdIaWdoJywgJ1VuZmluaXNoZWQnLCAnTGVhcm5pbmcnLCB0cnVlKTtcclxuICAgIHRhc2tMaXN0LnB1c2gobmV3VG9Ebyk7XHJcbiAgICBoYW5kbGVQcm9qZWN0KG5ld1RvRG8sIHByb2plY3RzTGlzdCk7XHJcblxyXG4gICAgbmV3VG9EbyA9IG5ldyBUb2RvKCdUaGVPZGluUHJvamVjdCBjaGFwdGVyIDInLCAnRmluaXNoIHRoZU9kaW5Qcm9qZWN0IGNoYXB0ZXIgMicsICcyMDI0LTAzLTE1JywgJ05vcm1hbCcsICdGaW5pc2hlZCcsICdIb21lJywgZmFsc2UpO1xyXG4gICAgdGFza0xpc3QucHVzaChuZXdUb0RvKTtcclxuICAgIGhhbmRsZVByb2plY3QobmV3VG9EbywgcHJvamVjdHNMaXN0KTtcclxuXHJcbiAgICBuZXdUb0RvID0gbmV3IFRvZG8oJ0FwcCBpbXBsZW1lbnRhdGlvbicsICdBZGQgYWJpbGl0eSB0byBleHRyYWN0IHRoZSBwcm9qZWN0cyBmcm9tIHRoZSBhcnJheScsICcyMDI0LTA0LTI0JywgJ05vcm1hbCcsICdGaW5pc2hlZCcsICdBY3RpdmUgbGVhcmluZycsIHRydWUpO1xyXG4gICAgdGFza0xpc3QucHVzaChuZXdUb0RvKTtcclxuICAgIGhhbmRsZVByb2plY3QobmV3VG9EbywgcHJvamVjdHNMaXN0KTtcclxuXHJcbiAgICBoYW5kbGVUb2Rvcyh0YXNrTGlzdCwgcHJvamVjdHNMaXN0KTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRhc2tMaXN0LFxyXG4gICAgICAgIHByb2plY3RzTGlzdCxcclxuICAgIH07XHJcbiAgICBcclxufSkoKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0VmFsdWVzO1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=