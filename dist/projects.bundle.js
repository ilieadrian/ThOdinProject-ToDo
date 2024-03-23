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

    newToDo = Todo.create('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '2024-03-15', 'Normal', 'Finished', 'Learing');

    console.table(Todo.getAllTodos());

    console.log(defaultProject)
})();



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RoZW9kaW5wcm9qZWN0LS0tdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgVG9kbyB7XHJcblxyXG4gICAgc3RhdGljIHRvZG9zID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBjYXRlZ29yeSwgcHJvamVjdCkge1xyXG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBzdGF0dXM7XHJcbiAgICAgICAgdGhpcy5jYXRlZ29yeSA9IGNhdGVnb3J5O1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7IFxyXG5cclxuICAgICAgICBUb2RvLnRvZG9zLnB1c2godGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZSh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBzdGF0dXMsIGNhdGVnb3J5LCBwcm9qZWN0KSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgY2F0ZWdvcnksIHByb2plY3QpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByb2plY3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdDtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZ2V0QWxsVG9kb3MoKSB7XHJcbiAgICAgICAgcmV0dXJuIFRvZG8udG9kb3M7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfSAgIFxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IGRlZmF1bHRWYWx1ZXMgID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0ID0gbmV3IFByb2plY3QoJ0RlZmF1bHQnKTtcclxuICAgIGxldCBuZXdUb0RvO1xyXG5cclxuICAgIG5ld1RvRG8gPSBUb2RvLmNyZWF0ZSgnUmVhZCBkYWlseSBhIHBhdHRlcm4nLCAnaHR0cHM6Ly93d3cucGF0dGVybnMuZGV2L3ZhbmlsbGEvaW1wb3J0LW9uLWludGVyYWN0aW9uJywgJzIwMjQtMDMtMjAnLCAnSGlnaCcsICdVbmZpbmlzaGVkJywgJ0xlYXJpbmcnKTtcclxuXHJcbiAgICBuZXdUb0RvID0gVG9kby5jcmVhdGUoJ1dyaXRlIG9uIGJsb2cnLCAnV3JpdGUgYWJvdXQgbGFzdCBwYXJ0IGZyb20gVGljVGFjVG9lIGdhbWUnLCAnMjAyNC0wMy0yMScsICdMb3cnLCAnVW5maW5pc2hlZCcsICdMZWFyaW5nJyk7XHJcblxyXG4gICAgbmV3VG9EbyA9IFRvZG8uY3JlYXRlKCdOZXcgT2RpbiBDaGFwdGVyJywgJ1N0YXJ0IGEgbmV3IE9kaW5Qcm9qZWN0Q2hhcHRlcicsICcyMDI0LTA0LTE1JywgJ05vcm1hbCcsICdVbmZpbmlzaGVkJywgJ0xlYXJpbmcnKTtcclxuXHJcbiAgICBuZXdUb0RvID0gVG9kby5jcmVhdGUoJ1JlcGFpciBibG9nJywgJ0ZpeCBzb2NpYWwgbGlua3Mgb24gYmxvZyBoZWFkZXInLCAnMjAyNC0wMy0yOScsICdIaWdoJywgJ1VuZmluaXNoZWQnLCAnTGVhcmluZycpO1xyXG5cclxuICAgIG5ld1RvRG8gPSBUb2RvLmNyZWF0ZSgnVGhlT2RpblByb2plY3QgY2hhcHRlciAyJywgJ0ZpbmlzaCB0aGVPZGluUHJvamVjdCBjaGFwdGVyIDInLCAnMjAyNC0wMy0xNScsICdOb3JtYWwnLCAnRmluaXNoZWQnLCAnTGVhcmluZycpO1xyXG5cclxuICAgIGNvbnNvbGUudGFibGUoVG9kby5nZXRBbGxUb2RvcygpKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhkZWZhdWx0UHJvamVjdClcclxufSkoKTtcclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=