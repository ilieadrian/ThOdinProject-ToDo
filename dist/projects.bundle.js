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
        this.status = 'unfinished';
        this.project = null; 
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

    addTodo(todo) {
        this.todos.push(todo);
    }

    getTodos() {
        return this.todos;
    }
}

const todo1 = new Todo('Task 1', 'Description for Task 1', '2024-03-20', 'High');
const todo2 = new Todo('Task 2', 'Description for Task 2', '2024-03-21', 'Medium');
const project1 = new Project('Default');

project1.addTodo(todo1);
project1.addTodo(todo2);

todo1.setProject(project1);
todo2.setProject(project1);

console.log(todo1.getProject());

project1.name = 'New Project';
console.log(todo1.getProject());
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgcHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSAndW5maW5pc2hlZCc7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gbnVsbDsgXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9qZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy50b2RvcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIGFkZFRvZG8odG9kbykge1xyXG4gICAgICAgIHRoaXMudG9kb3MucHVzaCh0b2RvKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRUb2RvcygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b2RvcztcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdG9kbzEgPSBuZXcgVG9kbygnVGFzayAxJywgJ0Rlc2NyaXB0aW9uIGZvciBUYXNrIDEnLCAnMjAyNC0wMy0yMCcsICdIaWdoJyk7XHJcbmNvbnN0IHRvZG8yID0gbmV3IFRvZG8oJ1Rhc2sgMicsICdEZXNjcmlwdGlvbiBmb3IgVGFzayAyJywgJzIwMjQtMDMtMjEnLCAnTWVkaXVtJyk7XHJcbmNvbnN0IHByb2plY3QxID0gbmV3IFByb2plY3QoJ0RlZmF1bHQnKTtcclxuXHJcbnByb2plY3QxLmFkZFRvZG8odG9kbzEpO1xyXG5wcm9qZWN0MS5hZGRUb2RvKHRvZG8yKTtcclxuXHJcbnRvZG8xLnNldFByb2plY3QocHJvamVjdDEpO1xyXG50b2RvMi5zZXRQcm9qZWN0KHByb2plY3QxKTtcclxuXHJcbmNvbnNvbGUubG9nKHRvZG8xLmdldFByb2plY3QoKSk7XHJcblxyXG5wcm9qZWN0MS5uYW1lID0gJ05ldyBQcm9qZWN0JztcclxuY29uc29sZS5sb2codG9kbzEuZ2V0UHJvamVjdCgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=