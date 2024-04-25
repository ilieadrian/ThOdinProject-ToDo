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
/*!**************************************!*\
  !*** ./src/modules/handleproject.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// function handleProject(taskList){
//     const liveProjetList = [...new Set(taskList.map(project => {
//         return project["project"];
//     }))];

//     console.log("Live Project List", liveProjetList);
// }


function handleProject(newToDo, projectList){
    // const projectsList = projectsList;
    console.log("New todo", newToDo);


    if (projectList.includes(newToDo.project)){
        return
    } else{
        projectList.push(newToDo.project);
    }

    // projectList.push(newToDo.project);
    console.log("Project list from HANDLEPROJECT:")
    console.table(projectList)

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handleProject);


// import defaultValues from './modules/startup';

// import '../style.css';
// import Todo from './todo';
// import Project from './project';

// const defaultValues  = (function () {
//     const taskList = [];
//     const projectsList = [];
//     let newToDo;
//     let defaultProject;

//     defaultProject = new Project("default")
//     projectsList.push(defaultProject);

//     newToDo = new Todo('Read daily a pattern', 'https://www.patterns.dev/vanilla/import-on-interaction', '2024-03-20', 'High', 'Unfinished', 'Learning', false);
//     taskList.push(newToDo);
//     // handleProject();

//     newToDo = new Todo('Write on blog', 'Write about last part from TicTacToe game', '2024-03-21', 'Low', 'Unfinished', 'Home', false);
//     taskList.push(newToDo);

//     newToDo = new Todo('New Odin Chapter', 'Start a new OdinProjectChapter', '2024-04-15', 'Normal', 'Finished', 'Learning', true);
//     taskList.push(newToDo);

//     newToDo = new Todo('Repair blog', 'Fix social links on blog header', '2024-03-29', 'High', 'Unfinished', 'Learning', true);
//     taskList.push(newToDo);

//     newToDo = new Todo('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '2024-03-15', 'Normal', 'Finished', 'Home', false);
//     taskList.push(newToDo);

//     newToDo = new Todo('App implementation', 'Add ability to extract the projects from the array', '2024-04-24', 'Normal', 'Finished', 'Active learing', true);
//     taskList.push(newToDo);

//     return {
//         taskList,
//         projectsList,
//     };
    
// })();

// export default defaultValues;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlcHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGFBQWEsRUFBQztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsZ0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaGFuZGxlcHJvamVjdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIGZ1bmN0aW9uIGhhbmRsZVByb2plY3QodGFza0xpc3Qpe1xyXG4vLyAgICAgY29uc3QgbGl2ZVByb2pldExpc3QgPSBbLi4ubmV3IFNldCh0YXNrTGlzdC5tYXAocHJvamVjdCA9PiB7XHJcbi8vICAgICAgICAgcmV0dXJuIHByb2plY3RbXCJwcm9qZWN0XCJdO1xyXG4vLyAgICAgfSkpXTtcclxuXHJcbi8vICAgICBjb25zb2xlLmxvZyhcIkxpdmUgUHJvamVjdCBMaXN0XCIsIGxpdmVQcm9qZXRMaXN0KTtcclxuLy8gfVxyXG5cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVByb2plY3QobmV3VG9EbywgcHJvamVjdExpc3Qpe1xyXG4gICAgLy8gY29uc3QgcHJvamVjdHNMaXN0ID0gcHJvamVjdHNMaXN0O1xyXG4gICAgY29uc29sZS5sb2coXCJOZXcgdG9kb1wiLCBuZXdUb0RvKTtcclxuXHJcblxyXG4gICAgaWYgKHByb2plY3RMaXN0LmluY2x1ZGVzKG5ld1RvRG8ucHJvamVjdCkpe1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfSBlbHNle1xyXG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gobmV3VG9Eby5wcm9qZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBwcm9qZWN0TGlzdC5wdXNoKG5ld1RvRG8ucHJvamVjdCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlByb2plY3QgbGlzdCBmcm9tIEhBTkRMRVBST0pFQ1Q6XCIpXHJcbiAgICBjb25zb2xlLnRhYmxlKHByb2plY3RMaXN0KVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlUHJvamVjdDtcclxuXHJcblxyXG4vLyBpbXBvcnQgZGVmYXVsdFZhbHVlcyBmcm9tICcuL21vZHVsZXMvc3RhcnR1cCc7XHJcblxyXG4vLyBpbXBvcnQgJy4uL3N0eWxlLmNzcyc7XHJcbi8vIGltcG9ydCBUb2RvIGZyb20gJy4vdG9kbyc7XHJcbi8vIGltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdCc7XHJcblxyXG4vLyBjb25zdCBkZWZhdWx0VmFsdWVzICA9IChmdW5jdGlvbiAoKSB7XHJcbi8vICAgICBjb25zdCB0YXNrTGlzdCA9IFtdO1xyXG4vLyAgICAgY29uc3QgcHJvamVjdHNMaXN0ID0gW107XHJcbi8vICAgICBsZXQgbmV3VG9EbztcclxuLy8gICAgIGxldCBkZWZhdWx0UHJvamVjdDtcclxuXHJcbi8vICAgICBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KFwiZGVmYXVsdFwiKVxyXG4vLyAgICAgcHJvamVjdHNMaXN0LnB1c2goZGVmYXVsdFByb2plY3QpO1xyXG5cclxuLy8gICAgIG5ld1RvRG8gPSBuZXcgVG9kbygnUmVhZCBkYWlseSBhIHBhdHRlcm4nLCAnaHR0cHM6Ly93d3cucGF0dGVybnMuZGV2L3ZhbmlsbGEvaW1wb3J0LW9uLWludGVyYWN0aW9uJywgJzIwMjQtMDMtMjAnLCAnSGlnaCcsICdVbmZpbmlzaGVkJywgJ0xlYXJuaW5nJywgZmFsc2UpO1xyXG4vLyAgICAgdGFza0xpc3QucHVzaChuZXdUb0RvKTtcclxuLy8gICAgIC8vIGhhbmRsZVByb2plY3QoKTtcclxuXHJcbi8vICAgICBuZXdUb0RvID0gbmV3IFRvZG8oJ1dyaXRlIG9uIGJsb2cnLCAnV3JpdGUgYWJvdXQgbGFzdCBwYXJ0IGZyb20gVGljVGFjVG9lIGdhbWUnLCAnMjAyNC0wMy0yMScsICdMb3cnLCAnVW5maW5pc2hlZCcsICdIb21lJywgZmFsc2UpO1xyXG4vLyAgICAgdGFza0xpc3QucHVzaChuZXdUb0RvKTtcclxuXHJcbi8vICAgICBuZXdUb0RvID0gbmV3IFRvZG8oJ05ldyBPZGluIENoYXB0ZXInLCAnU3RhcnQgYSBuZXcgT2RpblByb2plY3RDaGFwdGVyJywgJzIwMjQtMDQtMTUnLCAnTm9ybWFsJywgJ0ZpbmlzaGVkJywgJ0xlYXJuaW5nJywgdHJ1ZSk7XHJcbi8vICAgICB0YXNrTGlzdC5wdXNoKG5ld1RvRG8pO1xyXG5cclxuLy8gICAgIG5ld1RvRG8gPSBuZXcgVG9kbygnUmVwYWlyIGJsb2cnLCAnRml4IHNvY2lhbCBsaW5rcyBvbiBibG9nIGhlYWRlcicsICcyMDI0LTAzLTI5JywgJ0hpZ2gnLCAnVW5maW5pc2hlZCcsICdMZWFybmluZycsIHRydWUpO1xyXG4vLyAgICAgdGFza0xpc3QucHVzaChuZXdUb0RvKTtcclxuXHJcbi8vICAgICBuZXdUb0RvID0gbmV3IFRvZG8oJ1RoZU9kaW5Qcm9qZWN0IGNoYXB0ZXIgMicsICdGaW5pc2ggdGhlT2RpblByb2plY3QgY2hhcHRlciAyJywgJzIwMjQtMDMtMTUnLCAnTm9ybWFsJywgJ0ZpbmlzaGVkJywgJ0hvbWUnLCBmYWxzZSk7XHJcbi8vICAgICB0YXNrTGlzdC5wdXNoKG5ld1RvRG8pO1xyXG5cclxuLy8gICAgIG5ld1RvRG8gPSBuZXcgVG9kbygnQXBwIGltcGxlbWVudGF0aW9uJywgJ0FkZCBhYmlsaXR5IHRvIGV4dHJhY3QgdGhlIHByb2plY3RzIGZyb20gdGhlIGFycmF5JywgJzIwMjQtMDQtMjQnLCAnTm9ybWFsJywgJ0ZpbmlzaGVkJywgJ0FjdGl2ZSBsZWFyaW5nJywgdHJ1ZSk7XHJcbi8vICAgICB0YXNrTGlzdC5wdXNoKG5ld1RvRG8pO1xyXG5cclxuLy8gICAgIHJldHVybiB7XHJcbi8vICAgICAgICAgdGFza0xpc3QsXHJcbi8vICAgICAgICAgcHJvamVjdHNMaXN0LFxyXG4vLyAgICAgfTtcclxuICAgIFxyXG4vLyB9KSgpO1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgZGVmYXVsdFZhbHVlczsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=