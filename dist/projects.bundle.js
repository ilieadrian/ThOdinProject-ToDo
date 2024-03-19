/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
class Todo {
    constructor(title, description, dueDate, priority, status, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.project = project; 
    }

    setProject(project) {
        this.project = project;
    }

    getProject() {
        return this.project;
    }
}

class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    getTitle() {
        return this.name;
    }     

    addTodo(todo) {
        this.todos.push(todo);
    }

    getTodos() {
        return this.todos;
    }
}

const defaultValues  = (function () {
    const todo1 = new Todo('Task 1', 'Description for Task 1', '2024-03-20', 'High', 'Unfinished', 'Work');
    const todo2 = new Todo('Task 2', 'Description for Task 2', '2024-03-21', 'Medium', 'Unfinished', 'Work');
    const defaultProject = new Project('Default');

    defaultProject.addTodo(todo1);
    defaultProject.addTodo(todo2);

    // todo1.setProject(project1);
    // todo2.setProject(project1);

    console.log(todo1.getProject());


    console.log(defaultProject.getTitle());
    console.table(defaultProject.getTodos());
})();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRvZG8ge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0OyBcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9qZWN0KHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLnRvZG9zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH0gICAgIFxyXG5cclxuICAgIGFkZFRvZG8odG9kbykge1xyXG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2RvcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2RvcztcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFZhbHVlcyAgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgdG9kbzEgPSBuZXcgVG9kbygnVGFzayAxJywgJ0Rlc2NyaXB0aW9uIGZvciBUYXNrIDEnLCAnMjAyNC0wMy0yMCcsICdIaWdoJywgJ1VuZmluaXNoZWQnLCAnV29yaycpO1xyXG4gICAgY29uc3QgdG9kbzIgPSBuZXcgVG9kbygnVGFzayAyJywgJ0Rlc2NyaXB0aW9uIGZvciBUYXNrIDInLCAnMjAyNC0wMy0yMScsICdNZWRpdW0nLCAnVW5maW5pc2hlZCcsICdXb3JrJyk7XHJcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdEZWZhdWx0Jyk7XHJcblxyXG4gICAgZGVmYXVsdFByb2plY3QuYWRkVG9kbyh0b2RvMSk7XHJcbiAgICBkZWZhdWx0UHJvamVjdC5hZGRUb2RvKHRvZG8yKTtcclxuXHJcbiAgICAvLyB0b2RvMS5zZXRQcm9qZWN0KHByb2plY3QxKTtcclxuICAgIC8vIHRvZG8yLnNldFByb2plY3QocHJvamVjdDEpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHRvZG8xLmdldFByb2plY3QoKSk7XHJcblxyXG5cclxuICAgIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0LmdldFRpdGxlKCkpO1xyXG4gICAgY29uc29sZS50YWJsZShkZWZhdWx0UHJvamVjdC5nZXRUb2RvcygpKTtcclxufSkoKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=