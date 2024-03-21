/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
class Todo {

    static todos = [];

    constructor(title, description, dueDate, priority, status, category, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.category = category;
        this.project = project; 

        Todo.todos.push(this);
    }

    static create(title, description, dueDate, priority, status, category, project) {
        return new Todo(title, description, dueDate, priority, status, category, project);
    }

    getProject() {
        return this.project;
    }

    static getAllTodos() {
        return Todo.todos;
    }

    // addTodo(todo) {
    //     this.todos.push(todo);
    // }

    // getTodos() {
    //     return this.todos;
    // }

    // setProject(project) {
    //     this.project = project;
    // }

    // getProject() {
    //     return this.project;
    // }
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
    // newToDo.addTodo(newToDo);

    newToDo = Todo.create('Write on blog', 'Write about last part from TicTacToe game', '2024-03-21', 'Low', 'Unfinished', 'Learing');
    // newToDo.addTodo(newToDo);

    newToDo = Todo.create('New Odin Chapter', 'Start a new OdinProjectChapter', '2024-04-15', 'Normal', 'Unfinished', 'Learing');
    // newToDo.addTodo(newToDo);

    newToDo = Todo.create('Repair blog', 'Fix social links on blog header', '2024-03-29', 'High', 'Unfinished', 'Learing');
    // newToDo.addTodo(newToDo);

    newToDo = Todo.create('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '2024-03-15', 'Normal', 'Finished', 'Learing');
    // newToDo.addTodo(newToDo);

    console.table(Todo.getAllTodos());
    
    // const todo1 = new Todo('Task 1', 'Description for Task 1', '2024-03-20', 'High', 'Unfinished', 'Work');
    // const todo2 = new Todo('Task 2', 'Description for Task 2', '2024-03-21', 'Medium', 'Unfinished', 'Work');
    
    // defaultProject.addTodo(todo1);
    // defaultProject.addTodo(todo2);

    // todo1.setProject(project1);
    // todo2.setProject(project1);

    // console.log(todo1.getProject());

    console.table(newToDo.getTodos());

    console.log(defaultProject)
})();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUb2RvIHtcclxuXHJcbiAgICBzdGF0aWMgdG9kb3MgPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIGNhdGVnb3J5LCBwcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICB0aGlzLmNhdGVnb3J5ID0gY2F0ZWdvcnk7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDsgXHJcblxyXG4gICAgICAgIFRvZG8udG9kb3MucHVzaCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgY2F0ZWdvcnksIHByb2plY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBjYXRlZ29yeSwgcHJvamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvamVjdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBnZXRBbGxUb2RvcygpIHtcclxuICAgICAgICByZXR1cm4gVG9kby50b2RvcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGRUb2RvKHRvZG8pIHtcclxuICAgIC8vICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZ2V0VG9kb3MoKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMudG9kb3M7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc2V0UHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAvLyAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBnZXRQcm9qZWN0KCkge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLnByb2plY3Q7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9ICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGRlZmF1bHRWYWx1ZXMgID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQnKTtcclxuICAgIGxldCBuZXdUb0RvO1xyXG5cclxuICAgIG5ld1RvRG8gPSBUb2RvLmNyZWF0ZSgnUmVhZCBkYWlseSBhIHBhdHRlcm4nLCAnaHR0cHM6Ly93d3cucGF0dGVybnMuZGV2L3ZhbmlsbGEvaW1wb3J0LW9uLWludGVyYWN0aW9uJywgJzIwMjQtMDMtMjAnLCAnSGlnaCcsICdVbmZpbmlzaGVkJywgJ0xlYXJpbmcnKTtcclxuICAgIC8vIG5ld1RvRG8uYWRkVG9kbyhuZXdUb0RvKTtcclxuXHJcbiAgICBuZXdUb0RvID0gVG9kby5jcmVhdGUoJ1dyaXRlIG9uIGJsb2cnLCAnV3JpdGUgYWJvdXQgbGFzdCBwYXJ0IGZyb20gVGljVGFjVG9lIGdhbWUnLCAnMjAyNC0wMy0yMScsICdMb3cnLCAnVW5maW5pc2hlZCcsICdMZWFyaW5nJyk7XHJcbiAgICAvLyBuZXdUb0RvLmFkZFRvZG8obmV3VG9Ebyk7XHJcblxyXG4gICAgbmV3VG9EbyA9IFRvZG8uY3JlYXRlKCdOZXcgT2RpbiBDaGFwdGVyJywgJ1N0YXJ0IGEgbmV3IE9kaW5Qcm9qZWN0Q2hhcHRlcicsICcyMDI0LTA0LTE1JywgJ05vcm1hbCcsICdVbmZpbmlzaGVkJywgJ0xlYXJpbmcnKTtcclxuICAgIC8vIG5ld1RvRG8uYWRkVG9kbyhuZXdUb0RvKTtcclxuXHJcbiAgICBuZXdUb0RvID0gVG9kby5jcmVhdGUoJ1JlcGFpciBibG9nJywgJ0ZpeCBzb2NpYWwgbGlua3Mgb24gYmxvZyBoZWFkZXInLCAnMjAyNC0wMy0yOScsICdIaWdoJywgJ1VuZmluaXNoZWQnLCAnTGVhcmluZycpO1xyXG4gICAgLy8gbmV3VG9Eby5hZGRUb2RvKG5ld1RvRG8pO1xyXG5cclxuICAgIG5ld1RvRG8gPSBUb2RvLmNyZWF0ZSgnVGhlT2RpblByb2plY3QgY2hhcHRlciAyJywgJ0ZpbmlzaCB0aGVPZGluUHJvamVjdCBjaGFwdGVyIDInLCAnMjAyNC0wMy0xNScsICdOb3JtYWwnLCAnRmluaXNoZWQnLCAnTGVhcmluZycpO1xyXG4gICAgLy8gbmV3VG9Eby5hZGRUb2RvKG5ld1RvRG8pO1xyXG5cclxuICAgIGNvbnNvbGUudGFibGUoVG9kby5nZXRBbGxUb2RvcygpKTtcclxuICAgIFxyXG4gICAgLy8gY29uc3QgdG9kbzEgPSBuZXcgVG9kbygnVGFzayAxJywgJ0Rlc2NyaXB0aW9uIGZvciBUYXNrIDEnLCAnMjAyNC0wMy0yMCcsICdIaWdoJywgJ1VuZmluaXNoZWQnLCAnV29yaycpO1xyXG4gICAgLy8gY29uc3QgdG9kbzIgPSBuZXcgVG9kbygnVGFzayAyJywgJ0Rlc2NyaXB0aW9uIGZvciBUYXNrIDInLCAnMjAyNC0wMy0yMScsICdNZWRpdW0nLCAnVW5maW5pc2hlZCcsICdXb3JrJyk7XHJcbiAgICBcclxuICAgIC8vIGRlZmF1bHRQcm9qZWN0LmFkZFRvZG8odG9kbzEpO1xyXG4gICAgLy8gZGVmYXVsdFByb2plY3QuYWRkVG9kbyh0b2RvMik7XHJcblxyXG4gICAgLy8gdG9kbzEuc2V0UHJvamVjdChwcm9qZWN0MSk7XHJcbiAgICAvLyB0b2RvMi5zZXRQcm9qZWN0KHByb2plY3QxKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZyh0b2RvMS5nZXRQcm9qZWN0KCkpO1xyXG5cclxuICAgIGNvbnNvbGUudGFibGUobmV3VG9Eby5nZXRUb2RvcygpKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdClcclxufSkoKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=