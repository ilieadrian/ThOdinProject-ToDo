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

    getIndex(param) {
        return this.taskList.findIndex(e => e.title === param);
    }

    removeItem(param) {
        const index = this.getIndex(param);
        if (index !== -1) {
            this.taskList.splice(index, 1);
        }
    }
}
