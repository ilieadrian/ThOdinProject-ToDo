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
/*!************************************!*\
  !*** ./src/modules/handletodos.js ***!
  \************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function handleTodos(taskList, projectsList) {
    console.table(taskList);
    console.table(projectsList);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleTodos);

// console.log(taskList, projectsList)


// function getTodosByProject(taskList, project) {
//     return taskList.filter(todo => todo.project === project);
// }

// // Get todos for the "Home" project
// const homeTodos = getTodosByProject(taskList, 'Home');
// // console.log('Home Todos:', homeTodos);

// // Get todos for the "Learning" project
// const learningTodos = getTodosByProject(taskList, 'Learning');
// // console.log('Learning Todos:', learningTodos);

// console.table(taskList);
// console.table(projectsList)
// console.log(taskList[3].status);
// taskList[3].status = false;
// console.log(taskList[3].status);
// taskList[1].setShecked(true);
// console.log(taskList[1].isChecked());
// console.table(projectList)
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxldG9kb3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxXQUFXLEVBQUM7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2hhbmRsZXRvZG9zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiZnVuY3Rpb24gaGFuZGxlVG9kb3ModGFza0xpc3QsIHByb2plY3RzTGlzdCkge1xyXG4gICAgY29uc29sZS50YWJsZSh0YXNrTGlzdCk7XHJcbiAgICBjb25zb2xlLnRhYmxlKHByb2plY3RzTGlzdCk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlVG9kb3M7XHJcblxyXG4vLyBjb25zb2xlLmxvZyh0YXNrTGlzdCwgcHJvamVjdHNMaXN0KVxyXG5cclxuXHJcbi8vIGZ1bmN0aW9uIGdldFRvZG9zQnlQcm9qZWN0KHRhc2tMaXN0LCBwcm9qZWN0KSB7XHJcbi8vICAgICByZXR1cm4gdGFza0xpc3QuZmlsdGVyKHRvZG8gPT4gdG9kby5wcm9qZWN0ID09PSBwcm9qZWN0KTtcclxuLy8gfVxyXG5cclxuLy8gLy8gR2V0IHRvZG9zIGZvciB0aGUgXCJIb21lXCIgcHJvamVjdFxyXG4vLyBjb25zdCBob21lVG9kb3MgPSBnZXRUb2Rvc0J5UHJvamVjdCh0YXNrTGlzdCwgJ0hvbWUnKTtcclxuLy8gLy8gY29uc29sZS5sb2coJ0hvbWUgVG9kb3M6JywgaG9tZVRvZG9zKTtcclxuXHJcbi8vIC8vIEdldCB0b2RvcyBmb3IgdGhlIFwiTGVhcm5pbmdcIiBwcm9qZWN0XHJcbi8vIGNvbnN0IGxlYXJuaW5nVG9kb3MgPSBnZXRUb2Rvc0J5UHJvamVjdCh0YXNrTGlzdCwgJ0xlYXJuaW5nJyk7XHJcbi8vIC8vIGNvbnNvbGUubG9nKCdMZWFybmluZyBUb2RvczonLCBsZWFybmluZ1RvZG9zKTtcclxuXHJcbi8vIGNvbnNvbGUudGFibGUodGFza0xpc3QpO1xyXG4vLyBjb25zb2xlLnRhYmxlKHByb2plY3RzTGlzdClcclxuLy8gY29uc29sZS5sb2codGFza0xpc3RbM10uc3RhdHVzKTtcclxuLy8gdGFza0xpc3RbM10uc3RhdHVzID0gZmFsc2U7XHJcbi8vIGNvbnNvbGUubG9nKHRhc2tMaXN0WzNdLnN0YXR1cyk7XHJcbi8vIHRhc2tMaXN0WzFdLnNldFNoZWNrZWQodHJ1ZSk7XHJcbi8vIGNvbnNvbGUubG9nKHRhc2tMaXN0WzFdLmlzQ2hlY2tlZCgpKTtcclxuLy8gY29uc29sZS50YWJsZShwcm9qZWN0TGlzdCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=