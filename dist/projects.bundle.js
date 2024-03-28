/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
class Todo {

    // static todos = [];

    constructor(title, description, dueDate, priority, status, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.project = project; 
        this.checked = false;
        // this.id = `${(title || '_').toLowerCase().split(" ").join("_")}`
        // this.id = `${(title || '_').toLowerCase().split(" ").join("_")}-${Date.now()}`

        Todo.todos.push(this);
    }

    // static create(title, description, dueDate, priority, status, project) {
    //     return new Todo(title, description, dueDate, priority, status, project);
    // }

    // static getProject() {
    //     // return this.project;
    //     const projects = new Set(); // Using Set to store unique project names
    //     Todo.todos.forEach(todo => projects.add(todo.project)); // Extracting project names
    //     return Array.from(projects); // Converting Set back to an array

    // }

    // static getAllTodos() {
    //     return Todo.todos;
    // }

    getTitle() {
        return this.title
    }

    // getId() {
    //     return this.id
    // }

    // setChecked(check) {
    //     this.checked = true;
    //     console.log(this.getTitle() + ' was checked! ' + this.checked + check)
    // }

    isChecked() {
        return this.checked;
    }

}

class Project {
    constructor(name) {
        this.name = name;
    }   
}

const defaultValues  = (function () {
    //Semy global task and project list aproach    
    const taskList = [];
    const projectList = [];
    // const defaultProject = new Project('Default');
    // let newToDo;

    // newToDo = Todo.create('Read daily a pattern', 'https://www.patterns.dev/vanilla/import-on-interaction', '2024-03-20', 'High', 'Unfinished', 'Learing');

    // newToDo = Todo.create('Write on blog', 'Write about last part from TicTacToe game', '2024-03-21', 'Low', 'Unfinished', 'Learing');

    // newToDo = Todo.create('New Odin Chapter', 'Start a new OdinProjectChapter', '2024-04-15', 'Normal', 'Unfinished', 'Learing');

    // newToDo = Todo.create('Repair blog', 'Fix social links on blog header', '2024-03-29', 'High', 'Unfinished', 'Learing');

    // newToDo = Todo.create('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '2024-03-15', 'Normal', 'Finished', 'Home');

    // console.table(Todo.getAllTodos());
    // console.log(Todo.getProject());

    // console.table(Todo.getAllTodos());
    
})();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFrRDtBQUMxRSx3QkFBd0Isa0RBQWtELEdBQUcsV0FBVztBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxtRUFBbUU7QUFDbkUsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUb2RvIHtcclxuXHJcbiAgICAvLyBzdGF0aWMgdG9kb3MgPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7IFxyXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIC8vIHRoaXMuaWQgPSBgJHsodGl0bGUgfHwgJ18nKS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKX1gXHJcbiAgICAgICAgLy8gdGhpcy5pZCA9IGAkeyh0aXRsZSB8fCAnXycpLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpfS0ke0RhdGUubm93KCl9YFxyXG5cclxuICAgICAgICBUb2RvLnRvZG9zLnB1c2godGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gc3RhdGljIGNyZWF0ZSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIHByb2plY3QpIHtcclxuICAgIC8vICAgICByZXR1cm4gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzdGF0aWMgZ2V0UHJvamVjdCgpIHtcclxuICAgIC8vICAgICAvLyByZXR1cm4gdGhpcy5wcm9qZWN0O1xyXG4gICAgLy8gICAgIGNvbnN0IHByb2plY3RzID0gbmV3IFNldCgpOyAvLyBVc2luZyBTZXQgdG8gc3RvcmUgdW5pcXVlIHByb2plY3QgbmFtZXNcclxuICAgIC8vICAgICBUb2RvLnRvZG9zLmZvckVhY2godG9kbyA9PiBwcm9qZWN0cy5hZGQodG9kby5wcm9qZWN0KSk7IC8vIEV4dHJhY3RpbmcgcHJvamVjdCBuYW1lc1xyXG4gICAgLy8gICAgIHJldHVybiBBcnJheS5mcm9tKHByb2plY3RzKTsgLy8gQ29udmVydGluZyBTZXQgYmFjayB0byBhbiBhcnJheVxyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzdGF0aWMgZ2V0QWxsVG9kb3MoKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIFRvZG8udG9kb3M7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGVcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXRJZCgpIHtcclxuICAgIC8vICAgICByZXR1cm4gdGhpcy5pZFxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIHNldENoZWNrZWQoY2hlY2spIHtcclxuICAgIC8vICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0VGl0bGUoKSArICcgd2FzIGNoZWNrZWQhICcgKyB0aGlzLmNoZWNrZWQgKyBjaGVjaylcclxuICAgIC8vIH1cclxuXHJcbiAgICBpc0NoZWNrZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tlZDtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9ICAgXHJcbn1cclxuXHJcbmNvbnN0IGRlZmF1bHRWYWx1ZXMgID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIC8vU2VteSBnbG9iYWwgdGFzayBhbmQgcHJvamVjdCBsaXN0IGFwcm9hY2ggICAgXHJcbiAgICBjb25zdCB0YXNrTGlzdCA9IFtdO1xyXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBbXTtcclxuICAgIC8vIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQnKTtcclxuICAgIC8vIGxldCBuZXdUb0RvO1xyXG5cclxuICAgIC8vIG5ld1RvRG8gPSBUb2RvLmNyZWF0ZSgnUmVhZCBkYWlseSBhIHBhdHRlcm4nLCAnaHR0cHM6Ly93d3cucGF0dGVybnMuZGV2L3ZhbmlsbGEvaW1wb3J0LW9uLWludGVyYWN0aW9uJywgJzIwMjQtMDMtMjAnLCAnSGlnaCcsICdVbmZpbmlzaGVkJywgJ0xlYXJpbmcnKTtcclxuXHJcbiAgICAvLyBuZXdUb0RvID0gVG9kby5jcmVhdGUoJ1dyaXRlIG9uIGJsb2cnLCAnV3JpdGUgYWJvdXQgbGFzdCBwYXJ0IGZyb20gVGljVGFjVG9lIGdhbWUnLCAnMjAyNC0wMy0yMScsICdMb3cnLCAnVW5maW5pc2hlZCcsICdMZWFyaW5nJyk7XHJcblxyXG4gICAgLy8gbmV3VG9EbyA9IFRvZG8uY3JlYXRlKCdOZXcgT2RpbiBDaGFwdGVyJywgJ1N0YXJ0IGEgbmV3IE9kaW5Qcm9qZWN0Q2hhcHRlcicsICcyMDI0LTA0LTE1JywgJ05vcm1hbCcsICdVbmZpbmlzaGVkJywgJ0xlYXJpbmcnKTtcclxuXHJcbiAgICAvLyBuZXdUb0RvID0gVG9kby5jcmVhdGUoJ1JlcGFpciBibG9nJywgJ0ZpeCBzb2NpYWwgbGlua3Mgb24gYmxvZyBoZWFkZXInLCAnMjAyNC0wMy0yOScsICdIaWdoJywgJ1VuZmluaXNoZWQnLCAnTGVhcmluZycpO1xyXG5cclxuICAgIC8vIG5ld1RvRG8gPSBUb2RvLmNyZWF0ZSgnVGhlT2RpblByb2plY3QgY2hhcHRlciAyJywgJ0ZpbmlzaCB0aGVPZGluUHJvamVjdCBjaGFwdGVyIDInLCAnMjAyNC0wMy0xNScsICdOb3JtYWwnLCAnRmluaXNoZWQnLCAnSG9tZScpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUudGFibGUoVG9kby5nZXRBbGxUb2RvcygpKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKFRvZG8uZ2V0UHJvamVjdCgpKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLnRhYmxlKFRvZG8uZ2V0QWxsVG9kb3MoKSk7XHJcbiAgICBcclxufSkoKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=