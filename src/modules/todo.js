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

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getDueDate() {
        return this.dueDate;
    }

    getPrority() {
        return this.priority;
    }

    getStatus() {
        return this.status;
    }

    getProject() {
        return this.project;
    }

    isChecked() {
        return this.checked;
    }

    setShecked(value) {
        this.checked = value;
    }

    getItemsByProject(taskList, project){
        var result = taskList.filter(obj => {
            return obj.project === project;
        })
        return result;
    }

        getIndex(param) {
        return this.taskList.findIndex(e => e.title === param);
    }

    // removeItem(param) {
    //     const index = this.getIndex(param);
    //     if (index !== -1) {
    //         this.taskList.splice(index, 1);
    //     }
    // }

}

// https://github.com/Belayne/todo/blob/main/src/model.js
// https://github.com/Ioannis-Bfg/Todo-List/blob/main/src/assets/domproject.js
// https://github.com/youssefKetata/todoist-clone/blob/main/js/project-dialog.js
// https://github.com/Valentin-Sosa/Todo-List/blob/main/src/logic.js





