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

    set setchecked(value) {
        this.checked = value;
        // console.log(this.getTitle() + ' was checked! ' + this.checked + check)
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
    // console.table(Todo.getAllTodos());

    // console.table(Todo.getAllTodos());

    console.table(projectList)
    console.log(projectList[3].getProject())
})();





/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlb2RpbnByb2plY3QtLS10b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBUb2RvIHtcclxuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIHN0YXR1cywgcHJvamVjdCwgaXNDaGVja2VkKSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXR1cztcclxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0OyBcclxuICAgICAgICB0aGlzLmNoZWNrZWQgPSBpc0NoZWNrZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJvamVjdCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wcm9qZWN0O1xyXG4gICAgfVxyXG5cclxuICAgIGdldFRpdGxlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRpdGxlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBzZXRjaGVja2VkKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja2VkID0gdmFsdWU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5nZXRUaXRsZSgpICsgJyB3YXMgY2hlY2tlZCEgJyArIHRoaXMuY2hlY2tlZCArIGNoZWNrKVxyXG4gICAgfVxyXG5cclxuICAgIGlzQ2hlY2tlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGVja2VkO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuY2xhc3MgUHJvamVjdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgIH0gICBcclxufVxyXG5cclxuY29uc3QgZGVmYXVsdFZhbHVlcyAgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgdGFza0xpc3QgPSBbXTtcclxuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gW107XHJcblxyXG4gICAgbmV3VG9EbyA9IG5ldyBUb2RvKCdSZWFkIGRhaWx5IGEgcGF0dGVybicsICdodHRwczovL3d3dy5wYXR0ZXJucy5kZXYvdmFuaWxsYS9pbXBvcnQtb24taW50ZXJhY3Rpb24nLCAnMjAyNC0wMy0yMCcsICdIaWdoJywgJ1VuZmluaXNoZWQnLCAnTGVhcmluZycsIGZhbHNlKTtcclxuICAgIHByb2plY3RMaXN0LnB1c2gobmV3VG9Ebyk7XHJcblxyXG4gICAgbmV3VG9EbyA9IG5ldyBUb2RvKCdXcml0ZSBvbiBibG9nJywgJ1dyaXRlIGFib3V0IGxhc3QgcGFydCBmcm9tIFRpY1RhY1RvZSBnYW1lJywgJzIwMjQtMDMtMjEnLCAnTG93JywgJ1VuZmluaXNoZWQnLCAnTGVhcmluZycsIGZhbHNlKTtcclxuICAgIHByb2plY3RMaXN0LnB1c2gobmV3VG9Ebyk7XHJcblxyXG4gICAgbmV3VG9EbyA9IG5ldyBUb2RvKCdOZXcgT2RpbiBDaGFwdGVyJywgJ1N0YXJ0IGEgbmV3IE9kaW5Qcm9qZWN0Q2hhcHRlcicsICcyMDI0LTA0LTE1JywgJ05vcm1hbCcsICdGaW5pc2hlZCcsICdMZWFyaW5nJywgdHJ1ZSk7XHJcbiAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1RvRG8pO1xyXG5cclxuICAgIG5ld1RvRG8gPSBuZXcgVG9kbygnUmVwYWlyIGJsb2cnLCAnRml4IHNvY2lhbCBsaW5rcyBvbiBibG9nIGhlYWRlcicsICcyMDI0LTAzLTI5JywgJ0hpZ2gnLCAnVW5maW5pc2hlZCcsICdMZWFyaW5nJywgdHJ1ZSk7XHJcbiAgICBwcm9qZWN0TGlzdC5wdXNoKG5ld1RvRG8pXHJcblxyXG4gICAgbmV3VG9EbyA9IG5ldyBUb2RvKCdUaGVPZGluUHJvamVjdCBjaGFwdGVyIDInLCAnRmluaXNoIHRoZU9kaW5Qcm9qZWN0IGNoYXB0ZXIgMicsICcyMDI0LTAzLTE1JywgJ05vcm1hbCcsICdGaW5pc2hlZCcsICdIb21lJywgZmFsc2UpO1xyXG4gICAgcHJvamVjdExpc3QucHVzaChuZXdUb0RvKVxyXG4gICAgLy8gY29uc29sZS50YWJsZShUb2RvLmdldEFsbFRvZG9zKCkpO1xyXG5cclxuICAgIC8vIGNvbnNvbGUudGFibGUoVG9kby5nZXRBbGxUb2RvcygpKTtcclxuXHJcbiAgICBjb25zb2xlLnRhYmxlKHByb2plY3RMaXN0KVxyXG4gICAgY29uc29sZS5sb2cocHJvamVjdExpc3RbM10uZ2V0UHJvamVjdCgpKVxyXG59KSgpO1xyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9