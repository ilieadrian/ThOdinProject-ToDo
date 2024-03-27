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
        this.checked = false;
        this.id = `${(title || '_').toLowerCase().split(" ").join("_")}`
        // this.id = `${(title || '_').toLowerCase().split(" ").join("_")}-${Date.now()}`

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

    getTitle() {
        return this.title
    }

    getId() {
        return this.id
    }

    setChecked(check) {
        this.checked = true;
        console.log(this.getTitle() + ' was checked! ' + this.checked + check)
    }

    isChecked() {
        return this.checked
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

    console.table(Todo.getAllTodos());
    
})();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtEQUFrRDtBQUN2RSx3QkFBd0Isa0RBQWtELEdBQUcsV0FBVztBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxnRUFBZ0U7QUFDaEUscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUb2RvIHtcclxuXHJcbiAgICBzdGF0aWMgdG9kb3MgPSBbXTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIHByb2plY3QpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7IFxyXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaWQgPSBgJHsodGl0bGUgfHwgJ18nKS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKX1gXHJcbiAgICAgICAgLy8gdGhpcy5pZCA9IGAkeyh0aXRsZSB8fCAnXycpLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCIgXCIpLmpvaW4oXCJfXCIpfS0ke0RhdGUubm93KCl9YFxyXG5cclxuICAgICAgICBUb2RvLnRvZG9zLnB1c2godGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIHByb2plY3QpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFRvZG8odGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0KTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0UHJvamVjdCgpIHtcclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5wcm9qZWN0O1xyXG4gICAgICAgIGNvbnN0IHByb2plY3RzID0gbmV3IFNldCgpOyAvLyBVc2luZyBTZXQgdG8gc3RvcmUgdW5pcXVlIHByb2plY3QgbmFtZXNcclxuICAgICAgICBUb2RvLnRvZG9zLmZvckVhY2godG9kbyA9PiBwcm9qZWN0cy5hZGQodG9kby5wcm9qZWN0KSk7IC8vIEV4dHJhY3RpbmcgcHJvamVjdCBuYW1lc1xyXG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHByb2plY3RzKTsgLy8gQ29udmVydGluZyBTZXQgYmFjayB0byBhbiBhcnJheVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0QWxsVG9kb3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIFRvZG8udG9kb3M7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGVcclxuICAgIH1cclxuXHJcbiAgICBnZXRJZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pZFxyXG4gICAgfVxyXG5cclxuICAgIHNldENoZWNrZWQoY2hlY2spIHtcclxuICAgICAgICB0aGlzLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0VGl0bGUoKSArICcgd2FzIGNoZWNrZWQhICcgKyB0aGlzLmNoZWNrZWQgKyBjaGVjaylcclxuICAgIH1cclxuXHJcbiAgICBpc0NoZWNrZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tlZFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH0gICBcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFZhbHVlcyAgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdCgnRGVmYXVsdCcpO1xyXG4gICAgbGV0IG5ld1RvRG87XHJcblxyXG4gICAgbmV3VG9EbyA9IFRvZG8uY3JlYXRlKCdSZWFkIGRhaWx5IGEgcGF0dGVybicsICdodHRwczovL3d3dy5wYXR0ZXJucy5kZXYvdmFuaWxsYS9pbXBvcnQtb24taW50ZXJhY3Rpb24nLCAnMjAyNC0wMy0yMCcsICdIaWdoJywgJ1VuZmluaXNoZWQnLCAnTGVhcmluZycpO1xyXG5cclxuICAgIG5ld1RvRG8gPSBUb2RvLmNyZWF0ZSgnV3JpdGUgb24gYmxvZycsICdXcml0ZSBhYm91dCBsYXN0IHBhcnQgZnJvbSBUaWNUYWNUb2UgZ2FtZScsICcyMDI0LTAzLTIxJywgJ0xvdycsICdVbmZpbmlzaGVkJywgJ0xlYXJpbmcnKTtcclxuXHJcbiAgICBuZXdUb0RvID0gVG9kby5jcmVhdGUoJ05ldyBPZGluIENoYXB0ZXInLCAnU3RhcnQgYSBuZXcgT2RpblByb2plY3RDaGFwdGVyJywgJzIwMjQtMDQtMTUnLCAnTm9ybWFsJywgJ1VuZmluaXNoZWQnLCAnTGVhcmluZycpO1xyXG5cclxuICAgIG5ld1RvRG8gPSBUb2RvLmNyZWF0ZSgnUmVwYWlyIGJsb2cnLCAnRml4IHNvY2lhbCBsaW5rcyBvbiBibG9nIGhlYWRlcicsICcyMDI0LTAzLTI5JywgJ0hpZ2gnLCAnVW5maW5pc2hlZCcsICdMZWFyaW5nJyk7XHJcblxyXG4gICAgbmV3VG9EbyA9IFRvZG8uY3JlYXRlKCdUaGVPZGluUHJvamVjdCBjaGFwdGVyIDInLCAnRmluaXNoIHRoZU9kaW5Qcm9qZWN0IGNoYXB0ZXIgMicsICcyMDI0LTAzLTE1JywgJ05vcm1hbCcsICdGaW5pc2hlZCcsICdIb21lJyk7XHJcblxyXG4gICAgY29uc29sZS50YWJsZShUb2RvLmdldEFsbFRvZG9zKCkpO1xyXG4gICAgY29uc29sZS5sb2coVG9kby5nZXRQcm9qZWN0KCkpO1xyXG5cclxuICAgIGNvbnNvbGUudGFibGUoVG9kby5nZXRBbGxUb2RvcygpKTtcclxuICAgIFxyXG59KSgpO1xyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==