/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************************!*\
  !*** ./src/modules/projects.js ***!
  \*********************************/
class Todo {
    constructor(title, description, dueDate, priority, status, project, isChecked) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.project = project; 
        this.checked = isChecked;
    }

    getProject() {
        return this.project;
    }

    getTitle() {
        return this.title;
    }

    setchecked(value) {
        this.checked = value;
    }

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
    const taskList = [];
    const projectList = [];

    newToDo = new Todo('Read daily a pattern', 'https://www.patterns.dev/vanilla/import-on-interaction', '2024-03-20', 'High', 'Unfinished', 'Learing', false);
    projectList.push(newToDo);

    newToDo = new Todo('Write on blog', 'Write about last part from TicTacToe game', '2024-03-21', 'Low', 'Unfinished', 'Learing', false);
    projectList.push(newToDo);

    newToDo = new Todo('New Odin Chapter', 'Start a new OdinProjectChapter', '2024-04-15', 'Normal', 'Finished', 'Learing', true);
    projectList.push(newToDo);

    newToDo = new Todo('Repair blog', 'Fix social links on blog header', '2024-03-29', 'High', 'Unfinished', 'Learing', true);
    projectList.push(newToDo)

    newToDo = new Todo('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '2024-03-15', 'Normal', 'Finished', 'Home', false);
    projectList.push(newToDo)


    console.table(projectList)
    // console.log(projectList[3].getProject())
    console.log(projectList[1].setchecked(true))
    console.table(projectList)
})();





/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90aGVvZGlucHJvamVjdC0tLXRvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFRvZG8ge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgc3RhdHVzLCBwcm9qZWN0LCBpc0NoZWNrZWQpIHtcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICAgICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7IFxyXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IGlzQ2hlY2tlZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRQcm9qZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGl0bGU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Y2hlY2tlZCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ2hlY2tlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja2VkO1xyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBQcm9qZWN0IHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgfSAgIFxyXG59XHJcblxyXG5jb25zdCBkZWZhdWx0VmFsdWVzICA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCB0YXNrTGlzdCA9IFtdO1xyXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBbXTtcclxuXHJcbiAgICBuZXdUb0RvID0gbmV3IFRvZG8oJ1JlYWQgZGFpbHkgYSBwYXR0ZXJuJywgJ2h0dHBzOi8vd3d3LnBhdHRlcm5zLmRldi92YW5pbGxhL2ltcG9ydC1vbi1pbnRlcmFjdGlvbicsICcyMDI0LTAzLTIwJywgJ0hpZ2gnLCAnVW5maW5pc2hlZCcsICdMZWFyaW5nJywgZmFsc2UpO1xyXG4gICAgcHJvamVjdExpc3QucHVzaChuZXdUb0RvKTtcclxuXHJcbiAgICBuZXdUb0RvID0gbmV3IFRvZG8oJ1dyaXRlIG9uIGJsb2cnLCAnV3JpdGUgYWJvdXQgbGFzdCBwYXJ0IGZyb20gVGljVGFjVG9lIGdhbWUnLCAnMjAyNC0wMy0yMScsICdMb3cnLCAnVW5maW5pc2hlZCcsICdMZWFyaW5nJywgZmFsc2UpO1xyXG4gICAgcHJvamVjdExpc3QucHVzaChuZXdUb0RvKTtcclxuXHJcbiAgICBuZXdUb0RvID0gbmV3IFRvZG8oJ05ldyBPZGluIENoYXB0ZXInLCAnU3RhcnQgYSBuZXcgT2RpblByb2plY3RDaGFwdGVyJywgJzIwMjQtMDQtMTUnLCAnTm9ybWFsJywgJ0ZpbmlzaGVkJywgJ0xlYXJpbmcnLCB0cnVlKTtcclxuICAgIHByb2plY3RMaXN0LnB1c2gobmV3VG9Ebyk7XHJcblxyXG4gICAgbmV3VG9EbyA9IG5ldyBUb2RvKCdSZXBhaXIgYmxvZycsICdGaXggc29jaWFsIGxpbmtzIG9uIGJsb2cgaGVhZGVyJywgJzIwMjQtMDMtMjknLCAnSGlnaCcsICdVbmZpbmlzaGVkJywgJ0xlYXJpbmcnLCB0cnVlKTtcclxuICAgIHByb2plY3RMaXN0LnB1c2gobmV3VG9EbylcclxuXHJcbiAgICBuZXdUb0RvID0gbmV3IFRvZG8oJ1RoZU9kaW5Qcm9qZWN0IGNoYXB0ZXIgMicsICdGaW5pc2ggdGhlT2RpblByb2plY3QgY2hhcHRlciAyJywgJzIwMjQtMDMtMTUnLCAnTm9ybWFsJywgJ0ZpbmlzaGVkJywgJ0hvbWUnLCBmYWxzZSk7XHJcbiAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1RvRG8pXHJcblxyXG5cclxuICAgIGNvbnNvbGUudGFibGUocHJvamVjdExpc3QpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdFszXS5nZXRQcm9qZWN0KCkpXHJcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdFsxXS5zZXRjaGVja2VkKHRydWUpKVxyXG4gICAgY29uc29sZS50YWJsZShwcm9qZWN0TGlzdClcclxufSkoKTtcclxuXHJcblxyXG5cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==