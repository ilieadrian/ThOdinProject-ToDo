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

        this.todos = [];
    }

    static createTodo(title, description, dueDate, priority, status, category) {
        return new Todo(title, description, dueDate, priority, status, category);
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    getTodos() {
        return this.todos;
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
    }

    getTitle() {
        return this.name;
    }     
}

























const defaultValues  = (function () {
    const defaultProject = new Project('Default');
    let newToDo;

    newToDo = Todo.createTodo('Read daily a pattern', 'https://www.patterns.dev/vanilla/import-on-interaction', '2024-03-20', 'High', 'Unfinished', 'Learing');
    newToDo.addTodo(newToDo);

    newToDo = Todo.createTodo('Write on blog', 'Write about last part from TicTacToe game', '2024-03-21', 'Low', 'Unfinished', 'Learing');
    newToDo.addTodo(newToDo);

    newToDo = Todo.createTodo('New Odin Chapter', 'Start a new OdinProjectChapter', '2024-04-15', 'Normal', 'Unfinished', 'Learing');
    newToDo.addTodo(newToDo);

    newToDo = Todo.createTodo('Repair blog', 'Fix social links on blog header', '2024-03-29', 'High', 'Unfinished', 'Learing');
    newToDo.addTodo(newToDo);

    newToDo = Todo.createTodo('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '2024-03-15', 'Normal', 'Finished', 'Learing');
    newToDo.addTodo(newToDo);
    
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9kbyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7IFxyXG5cclxuICAgICAgICB0aGlzLnRvZG9zID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZVRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBjYXRlZ29yeSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIGNhdGVnb3J5KTtcclxuICAgIH1cclxuXHJcbiAgICBhZGRUb2RvKHRvZG8pIHtcclxuICAgICAgICB0aGlzLnRvZG9zLnB1c2godG9kbyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VG9kb3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9kb3M7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJvamVjdChwcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9qZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3Q7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH0gICAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBkZWZhdWx0VmFsdWVzICA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdEZWZhdWx0Jyk7XHJcbiAgICBsZXQgbmV3VG9EbztcclxuXHJcbiAgICBuZXdUb0RvID0gVG9kby5jcmVhdGVUb2RvKCdSZWFkIGRhaWx5IGEgcGF0dGVybicsICdodHRwczovL3d3dy5wYXR0ZXJucy5kZXYvdmFuaWxsYS9pbXBvcnQtb24taW50ZXJhY3Rpb24nLCAnMjAyNC0wMy0yMCcsICdIaWdoJywgJ1VuZmluaXNoZWQnLCAnTGVhcmluZycpO1xyXG4gICAgbmV3VG9Eby5hZGRUb2RvKG5ld1RvRG8pO1xyXG5cclxuICAgIG5ld1RvRG8gPSBUb2RvLmNyZWF0ZVRvZG8oJ1dyaXRlIG9uIGJsb2cnLCAnV3JpdGUgYWJvdXQgbGFzdCBwYXJ0IGZyb20gVGljVGFjVG9lIGdhbWUnLCAnMjAyNC0wMy0yMScsICdMb3cnLCAnVW5maW5pc2hlZCcsICdMZWFyaW5nJyk7XHJcbiAgICBuZXdUb0RvLmFkZFRvZG8obmV3VG9Ebyk7XHJcblxyXG4gICAgbmV3VG9EbyA9IFRvZG8uY3JlYXRlVG9kbygnTmV3IE9kaW4gQ2hhcHRlcicsICdTdGFydCBhIG5ldyBPZGluUHJvamVjdENoYXB0ZXInLCAnMjAyNC0wNC0xNScsICdOb3JtYWwnLCAnVW5maW5pc2hlZCcsICdMZWFyaW5nJyk7XHJcbiAgICBuZXdUb0RvLmFkZFRvZG8obmV3VG9Ebyk7XHJcblxyXG4gICAgbmV3VG9EbyA9IFRvZG8uY3JlYXRlVG9kbygnUmVwYWlyIGJsb2cnLCAnRml4IHNvY2lhbCBsaW5rcyBvbiBibG9nIGhlYWRlcicsICcyMDI0LTAzLTI5JywgJ0hpZ2gnLCAnVW5maW5pc2hlZCcsICdMZWFyaW5nJyk7XHJcbiAgICBuZXdUb0RvLmFkZFRvZG8obmV3VG9Ebyk7XHJcblxyXG4gICAgbmV3VG9EbyA9IFRvZG8uY3JlYXRlVG9kbygnVGhlT2RpblByb2plY3QgY2hhcHRlciAyJywgJ0ZpbmlzaCB0aGVPZGluUHJvamVjdCBjaGFwdGVyIDInLCAnMjAyNC0wMy0xNScsICdOb3JtYWwnLCAnRmluaXNoZWQnLCAnTGVhcmluZycpO1xyXG4gICAgbmV3VG9Eby5hZGRUb2RvKG5ld1RvRG8pO1xyXG4gICAgXHJcbiAgICAvLyBjb25zdCB0b2RvMSA9IG5ldyBUb2RvKCdUYXNrIDEnLCAnRGVzY3JpcHRpb24gZm9yIFRhc2sgMScsICcyMDI0LTAzLTIwJywgJ0hpZ2gnLCAnVW5maW5pc2hlZCcsICdXb3JrJyk7XHJcbiAgICAvLyBjb25zdCB0b2RvMiA9IG5ldyBUb2RvKCdUYXNrIDInLCAnRGVzY3JpcHRpb24gZm9yIFRhc2sgMicsICcyMDI0LTAzLTIxJywgJ01lZGl1bScsICdVbmZpbmlzaGVkJywgJ1dvcmsnKTtcclxuICAgIFxyXG4gICAgLy8gZGVmYXVsdFByb2plY3QuYWRkVG9kbyh0b2RvMSk7XHJcbiAgICAvLyBkZWZhdWx0UHJvamVjdC5hZGRUb2RvKHRvZG8yKTtcclxuXHJcbiAgICAvLyB0b2RvMS5zZXRQcm9qZWN0KHByb2plY3QxKTtcclxuICAgIC8vIHRvZG8yLnNldFByb2plY3QocHJvamVjdDEpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKHRvZG8xLmdldFByb2plY3QoKSk7XHJcblxyXG4gICAgY29uc29sZS50YWJsZShuZXdUb0RvLmdldFRvZG9zKCkpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGRlZmF1bHRQcm9qZWN0KVxyXG59KSgpO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==