/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
class Todo {

    static todos = [];

    constructor(title, description, dueDate, priority, status, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.project = project; 

        Todo.todos.push(this);
    }

    static create(title, description, dueDate, priority, status, project) {
        return new Todo(title, description, dueDate, priority, status, project);
    }

    static getProject() {
        // return this.project;
        const projects = new Set(); // Using Set to store unique project names
        Todo.todos.forEach(todo => projects.add(todo.project)); // Extracting project names
        return Array.from(projects); // Converting Set back to an array

    }

    static getAllTodos() {
        return Todo.todos;
    }

}

class Project {
    constructor(name) {
        this.name = name;
    }   
}





const defaultValues  = (function () {
    const defaultProject = new Project('Default');
    let newToDo;

    newToDo = Todo.create('Read daily a pattern', 'https://www.patterns.dev/vanilla/import-on-interaction', '2024-03-20', 'High', 'Unfinished', 'Learing');

    newToDo = Todo.create('Write on blog', 'Write about last part from TicTacToe game', '2024-03-21', 'Low', 'Unfinished', 'Learing');

    newToDo = Todo.create('New Odin Chapter', 'Start a new OdinProjectChapter', '2024-04-15', 'Normal', 'Unfinished', 'Learing');

    newToDo = Todo.create('Repair blog', 'Fix social links on blog header', '2024-03-29', 'High', 'Unfinished', 'Learing');

    newToDo = Todo.create('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '2024-03-15', 'Normal', 'Finished', 'Home');

    console.table(Todo.getAllTodos());
    console.log(Todo.getProject());

    console.log(defaultProject)
})();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLGdFQUFnRTtBQUNoRSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9kbyB7XHJcblxyXG4gICAgc3RhdGljIHRvZG9zID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0OyBcclxuXHJcbiAgICAgICAgVG9kby50b2Rvcy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGUodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgcHJvamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFByb2plY3QoKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMucHJvamVjdDtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IG5ldyBTZXQoKTsgLy8gVXNpbmcgU2V0IHRvIHN0b3JlIHVuaXF1ZSBwcm9qZWN0IG5hbWVzXHJcbiAgICAgICAgVG9kby50b2Rvcy5mb3JFYWNoKHRvZG8gPT4gcHJvamVjdHMuYWRkKHRvZG8ucHJvamVjdCkpOyAvLyBFeHRyYWN0aW5nIHByb2plY3QgbmFtZXNcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShwcm9qZWN0cyk7IC8vIENvbnZlcnRpbmcgU2V0IGJhY2sgdG8gYW4gYXJyYXlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEFsbFRvZG9zKCkge1xyXG4gICAgICAgIHJldHVybiBUb2RvLnRvZG9zO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH0gICBcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGRlZmF1bHRWYWx1ZXMgID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQnKTtcclxuICAgIGxldCBuZXdUb0RvO1xyXG5cclxuICAgIG5ld1RvRG8gPSBUb2RvLmNyZWF0ZSgnUmVhZCBkYWlseSBhIHBhdHRlcm4nLCAnaHR0cHM6Ly93d3cucGF0dGVybnMuZGV2L3ZhbmlsbGEvaW1wb3J0LW9uLWludGVyYWN0aW9uJywgJzIwMjQtMDMtMjAnLCAnSGlnaCcsICdVbmZpbmlzaGVkJywgJ0xlYXJpbmcnKTtcclxuXHJcbiAgICBuZXdUb0RvID0gVG9kby5jcmVhdGUoJ1dyaXRlIG9uIGJsb2cnLCAnV3JpdGUgYWJvdXQgbGFzdCBwYXJ0IGZyb20gVGljVGFjVG9lIGdhbWUnLCAnMjAyNC0wMy0yMScsICdMb3cnLCAnVW5maW5pc2hlZCcsICdMZWFyaW5nJyk7XHJcblxyXG4gICAgbmV3VG9EbyA9IFRvZG8uY3JlYXRlKCdOZXcgT2RpbiBDaGFwdGVyJywgJ1N0YXJ0IGEgbmV3IE9kaW5Qcm9qZWN0Q2hhcHRlcicsICcyMDI0LTA0LTE1JywgJ05vcm1hbCcsICdVbmZpbmlzaGVkJywgJ0xlYXJpbmcnKTtcclxuXHJcbiAgICBuZXdUb0RvID0gVG9kby5jcmVhdGUoJ1JlcGFpciBibG9nJywgJ0ZpeCBzb2NpYWwgbGlua3Mgb24gYmxvZyBoZWFkZXInLCAnMjAyNC0wMy0yOScsICdIaWdoJywgJ1VuZmluaXNoZWQnLCAnTGVhcmluZycpO1xyXG5cclxuICAgIG5ld1RvRG8gPSBUb2RvLmNyZWF0ZSgnVGhlT2RpblByb2plY3QgY2hhcHRlciAyJywgJ0ZpbmlzaCB0aGVPZGluUHJvamVjdCBjaGFwdGVyIDInLCAnMjAyNC0wMy0xNScsICdOb3JtYWwnLCAnRmluaXNoZWQnLCAnSG9tZScpO1xyXG5cclxuICAgIGNvbnNvbGUudGFibGUoVG9kby5nZXRBbGxUb2RvcygpKTtcclxuICAgIGNvbnNvbGUubG9nKFRvZG8uZ2V0UHJvamVjdCgpKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdClcclxufSkoKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=