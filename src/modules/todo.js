export default class Todo {
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

    getIndex(param){
        return index = Data.map(e => e.title).indexOf(param);
        //https://stackoverflow.com/questions/7176908/how-can-i-get-the-index-of-an-object-by-its-property-in-javascript
    }

    removeItem() {
        // console.log(taskList[i].indexof([i]))
        // return taskList.splice(2, 1);
    }
}
