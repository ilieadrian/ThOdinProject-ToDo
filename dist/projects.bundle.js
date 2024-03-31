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

    // console.table(Todo.getAllTodos());
    
})();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGtEQUFrRDtBQUMxRSx3QkFBd0Isa0RBQWtELEdBQUcsV0FBVztBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxtRUFBbUU7QUFDbkUsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9kbyB7XHJcblxyXG4gICAgLy8gc3RhdGljIHRvZG9zID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0OyBcclxuICAgICAgICB0aGlzLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLmlkID0gYCR7KHRpdGxlIHx8ICdfJykudG9Mb3dlckNhc2UoKS5zcGxpdChcIiBcIikuam9pbihcIl9cIil9YFxyXG4gICAgICAgIC8vIHRoaXMuaWQgPSBgJHsodGl0bGUgfHwgJ18nKS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwiIFwiKS5qb2luKFwiX1wiKX0tJHtEYXRlLm5vdygpfWBcclxuXHJcbiAgICAgICAgVG9kby50b2Rvcy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHN0YXRpYyBjcmVhdGUodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0KSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgcHJvamVjdCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc3RhdGljIGdldFByb2plY3QoKSB7XHJcbiAgICAvLyAgICAgLy8gcmV0dXJuIHRoaXMucHJvamVjdDtcclxuICAgIC8vICAgICBjb25zdCBwcm9qZWN0cyA9IG5ldyBTZXQoKTsgLy8gVXNpbmcgU2V0IHRvIHN0b3JlIHVuaXF1ZSBwcm9qZWN0IG5hbWVzXHJcbiAgICAvLyAgICAgVG9kby50b2Rvcy5mb3JFYWNoKHRvZG8gPT4gcHJvamVjdHMuYWRkKHRvZG8ucHJvamVjdCkpOyAvLyBFeHRyYWN0aW5nIHByb2plY3QgbmFtZXNcclxuICAgIC8vICAgICByZXR1cm4gQXJyYXkuZnJvbShwcm9qZWN0cyk7IC8vIENvbnZlcnRpbmcgU2V0IGJhY2sgdG8gYW4gYXJyYXlcclxuXHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gc3RhdGljIGdldEFsbFRvZG9zKCkge1xyXG4gICAgLy8gICAgIHJldHVybiBUb2RvLnRvZG9zO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGdldFRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0SWQoKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuaWRcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBzZXRDaGVja2VkKGNoZWNrKSB7XHJcbiAgICAvLyAgICAgdGhpcy5jaGVja2VkID0gdHJ1ZTtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyh0aGlzLmdldFRpdGxlKCkgKyAnIHdhcyBjaGVja2VkISAnICsgdGhpcy5jaGVja2VkICsgY2hlY2spXHJcbiAgICAvLyB9XHJcblxyXG4gICAgaXNDaGVja2VkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrZWQ7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfSAgIFxyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0VmFsdWVzICA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICAvL1NlbXkgZ2xvYmFsIHRhc2sgYW5kIHByb2plY3QgbGlzdCBhcHJvYWNoICAgIFxyXG4gICAgY29uc3QgdGFza0xpc3QgPSBbXTtcclxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gW107XHJcbiAgICAvLyBjb25zdCBkZWZhdWx0UHJvamVjdCA9IG5ldyBQcm9qZWN0KCdEZWZhdWx0Jyk7XHJcbiAgICAvLyBsZXQgbmV3VG9EbztcclxuXHJcbiAgICAvLyBuZXdUb0RvID0gVG9kby5jcmVhdGUoJ1JlYWQgZGFpbHkgYSBwYXR0ZXJuJywgJ2h0dHBzOi8vd3d3LnBhdHRlcm5zLmRldi92YW5pbGxhL2ltcG9ydC1vbi1pbnRlcmFjdGlvbicsICcyMDI0LTAzLTIwJywgJ0hpZ2gnLCAnVW5maW5pc2hlZCcsICdMZWFyaW5nJyk7XHJcblxyXG4gICAgLy8gbmV3VG9EbyA9IFRvZG8uY3JlYXRlKCdXcml0ZSBvbiBibG9nJywgJ1dyaXRlIGFib3V0IGxhc3QgcGFydCBmcm9tIFRpY1RhY1RvZSBnYW1lJywgJzIwMjQtMDMtMjEnLCAnTG93JywgJ1VuZmluaXNoZWQnLCAnTGVhcmluZycpO1xyXG5cclxuICAgIC8vIG5ld1RvRG8gPSBUb2RvLmNyZWF0ZSgnTmV3IE9kaW4gQ2hhcHRlcicsICdTdGFydCBhIG5ldyBPZGluUHJvamVjdENoYXB0ZXInLCAnMjAyNC0wNC0xNScsICdOb3JtYWwnLCAnVW5maW5pc2hlZCcsICdMZWFyaW5nJyk7XHJcblxyXG4gICAgLy8gbmV3VG9EbyA9IFRvZG8uY3JlYXRlKCdSZXBhaXIgYmxvZycsICdGaXggc29jaWFsIGxpbmtzIG9uIGJsb2cgaGVhZGVyJywgJzIwMjQtMDMtMjknLCAnSGlnaCcsICdVbmZpbmlzaGVkJywgJ0xlYXJpbmcnKTtcclxuXHJcbiAgICAvLyBuZXdUb0RvID0gVG9kby5jcmVhdGUoJ1RoZU9kaW5Qcm9qZWN0IGNoYXB0ZXIgMicsICdGaW5pc2ggdGhlT2RpblByb2plY3QgY2hhcHRlciAyJywgJzIwMjQtMDMtMTUnLCAnTm9ybWFsJywgJ0ZpbmlzaGVkJywgJ0hvbWUnKTtcclxuXHJcbiAgICAvLyBjb25zb2xlLnRhYmxlKFRvZG8uZ2V0QWxsVG9kb3MoKSk7XHJcblxyXG4gICAgLy8gY29uc29sZS50YWJsZShUb2RvLmdldEFsbFRvZG9zKCkpO1xyXG4gICAgXHJcbn0pKCk7XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9