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

    console.log(newToDo.setChecked())
    console.table(Todo.getAllTodos());
    
})();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGtEQUFrRDtBQUN2RSx3QkFBd0Isa0RBQWtELEdBQUcsV0FBVztBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxnRUFBZ0U7QUFDaEUscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9kbyB7XHJcblxyXG4gICAgc3RhdGljIHRvZG9zID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0OyBcclxuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmlkID0gYCR7KHRpdGxlIHx8ICdfJykudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIl9cIil9YFxyXG4gICAgICAgIC8vIHRoaXMuaWQgPSBgJHsodGl0bGUgfHwgJ18nKS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKX0tJHtEYXRlLm5vdygpfWBcclxuXHJcbiAgICAgICAgVG9kby50b2Rvcy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGUodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgcHJvamVjdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldFByb2plY3QoKSB7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMucHJvamVjdDtcclxuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IG5ldyBTZXQoKTsgLy8gVXNpbmcgU2V0IHRvIHN0b3JlIHVuaXF1ZSBwcm9qZWN0IG5hbWVzXHJcbiAgICAgICAgVG9kby50b2Rvcy5mb3JFYWNoKHRvZG8gPT4gcHJvamVjdHMuYWRkKHRvZG8ucHJvamVjdCkpOyAvLyBFeHRyYWN0aW5nIHByb2plY3QgbmFtZXNcclxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShwcm9qZWN0cyk7IC8vIENvbnZlcnRpbmcgU2V0IGJhY2sgdG8gYW4gYXJyYXlcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGdldEFsbFRvZG9zKCkge1xyXG4gICAgICAgIHJldHVybiBUb2RvLnRvZG9zO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaWRcclxuICAgIH1cclxuXHJcbiAgICBzZXRDaGVja2VkKGNoZWNrKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmdldFRpdGxlKCkgKyAnIHdhcyBjaGVja2VkISAnICsgdGhpcy5jaGVja2VkICsgY2hlY2spXHJcbiAgICB9XHJcblxyXG4gICAgaXNDaGVja2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrZWRcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmNsYXNzIFByb2plY3Qge1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICB9ICAgXHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCBkZWZhdWx0VmFsdWVzICA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdEZWZhdWx0Jyk7XHJcbiAgICBsZXQgbmV3VG9EbztcclxuXHJcbiAgICBuZXdUb0RvID0gVG9kby5jcmVhdGUoJ1JlYWQgZGFpbHkgYSBwYXR0ZXJuJywgJ2h0dHBzOi8vd3d3LnBhdHRlcm5zLmRldi92YW5pbGxhL2ltcG9ydC1vbi1pbnRlcmFjdGlvbicsICcyMDI0LTAzLTIwJywgJ0hpZ2gnLCAnVW5maW5pc2hlZCcsICdMZWFyaW5nJyk7XHJcblxyXG4gICAgbmV3VG9EbyA9IFRvZG8uY3JlYXRlKCdXcml0ZSBvbiBibG9nJywgJ1dyaXRlIGFib3V0IGxhc3QgcGFydCBmcm9tIFRpY1RhY1RvZSBnYW1lJywgJzIwMjQtMDMtMjEnLCAnTG93JywgJ1VuZmluaXNoZWQnLCAnTGVhcmluZycpO1xyXG5cclxuICAgIG5ld1RvRG8gPSBUb2RvLmNyZWF0ZSgnTmV3IE9kaW4gQ2hhcHRlcicsICdTdGFydCBhIG5ldyBPZGluUHJvamVjdENoYXB0ZXInLCAnMjAyNC0wNC0xNScsICdOb3JtYWwnLCAnVW5maW5pc2hlZCcsICdMZWFyaW5nJyk7XHJcblxyXG4gICAgbmV3VG9EbyA9IFRvZG8uY3JlYXRlKCdSZXBhaXIgYmxvZycsICdGaXggc29jaWFsIGxpbmtzIG9uIGJsb2cgaGVhZGVyJywgJzIwMjQtMDMtMjknLCAnSGlnaCcsICdVbmZpbmlzaGVkJywgJ0xlYXJpbmcnKTtcclxuXHJcbiAgICBuZXdUb0RvID0gVG9kby5jcmVhdGUoJ1RoZU9kaW5Qcm9qZWN0IGNoYXB0ZXIgMicsICdGaW5pc2ggdGhlT2RpblByb2plY3QgY2hhcHRlciAyJywgJzIwMjQtMDMtMTUnLCAnTm9ybWFsJywgJ0ZpbmlzaGVkJywgJ0hvbWUnKTtcclxuXHJcbiAgICBjb25zb2xlLnRhYmxlKFRvZG8uZ2V0QWxsVG9kb3MoKSk7XHJcbiAgICBjb25zb2xlLmxvZyhUb2RvLmdldFByb2plY3QoKSk7XHJcblxyXG4gICAgY29uc29sZS5sb2cobmV3VG9Eby5zZXRDaGVja2VkKCkpXHJcbiAgICBjb25zb2xlLnRhYmxlKFRvZG8uZ2V0QWxsVG9kb3MoKSk7XHJcbiAgICBcclxufSkoKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=