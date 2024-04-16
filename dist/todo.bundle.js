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
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
    constructor(title, description, dueDate, priority, status, project, isChecked, taskList) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.project = project; 
        this.checked = isChecked;
        this.taskList = taskList; // Pass taskList to the constructor
    }

    getProject() {
        return this.project;
    }

    getTitle() {
        return this.title;
    }

    setchecked(value) {
        this.checked = value;
    }

    isChecked() {
        return this.checked;
    }

    getIndex(param) {
        return this.taskList.findIndex(e => e.title === param);
    }

    removeItem(param) {
        const index = this.getIndex(param);
        if (index !== -1) {
            this.taskList.splice(index, 1);
        }
    }
}

// export default class Todo {
//     constructor(title, description, dueDate, priority, status, project, isChecked) {
//         this.title = title;
//         this.description = description;
//         this.dueDate = dueDate;
//         this.priority = priority;
//         this.status = status;
//         this.project = project; 
//         this.checked = isChecked;
//     }

//     getProject() {
//         return this.project;
//     }

//     getTitle() {
//         return this.title;
//     }

//     setchecked(value) {
//         this.checked = value;
//     }

//     isChecked() {
//         return this.checked;
//     }

//     getIndex(param) {
//         return this.taskList.findIndex(e => e.title === param);
//     }

//     removeItem(param) {
//         const index = this.getIndex(param);
//         if (index !== -1) {
//             this.taskList.splice(index, 1);
//         }
//     }
// }


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgcHJvamVjdCwgaXNDaGVja2VkLCB0YXNrTGlzdCkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDsgXHJcbiAgICAgICAgdGhpcy5jaGVja2VkID0gaXNDaGVja2VkO1xyXG4gICAgICAgIHRoaXMudGFza0xpc3QgPSB0YXNrTGlzdDsgLy8gUGFzcyB0YXNrTGlzdCB0byB0aGUgY29uc3RydWN0b3JcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9qZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Y2hlY2tlZCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ2hlY2tlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja2VkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEluZGV4KHBhcmFtKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza0xpc3QuZmluZEluZGV4KGUgPT4gZS50aXRsZSA9PT0gcGFyYW0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUl0ZW0ocGFyYW0pIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0SW5kZXgocGFyYW0pO1xyXG4gICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy50YXNrTGlzdC5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kbyB7XHJcbi8vICAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIHByb2plY3QsIGlzQ2hlY2tlZCkge1xyXG4vLyAgICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuLy8gICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbi8vICAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuLy8gICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbi8vICAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbi8vICAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDsgXHJcbi8vICAgICAgICAgdGhpcy5jaGVja2VkID0gaXNDaGVja2VkO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGdldFByb2plY3QoKSB7XHJcbi8vICAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdDtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBnZXRUaXRsZSgpIHtcclxuLy8gICAgICAgICByZXR1cm4gdGhpcy50aXRsZTtcclxuLy8gICAgIH1cclxuXHJcbi8vICAgICBzZXRjaGVja2VkKHZhbHVlKSB7XHJcbi8vICAgICAgICAgdGhpcy5jaGVja2VkID0gdmFsdWU7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgaXNDaGVja2VkKCkge1xyXG4vLyAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrZWQ7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgZ2V0SW5kZXgocGFyYW0pIHtcclxuLy8gICAgICAgICByZXR1cm4gdGhpcy50YXNrTGlzdC5maW5kSW5kZXgoZSA9PiBlLnRpdGxlID09PSBwYXJhbSk7XHJcbi8vICAgICB9XHJcblxyXG4vLyAgICAgcmVtb3ZlSXRlbShwYXJhbSkge1xyXG4vLyAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5nZXRJbmRleChwYXJhbSk7XHJcbi8vICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xyXG4vLyAgICAgICAgICAgICB0aGlzLnRhc2tMaXN0LnNwbGljZShpbmRleCwgMSk7XHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=