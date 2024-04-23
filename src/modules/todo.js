export default class Todo {
    constructor(title, description, dueDate, priority, status, project, checked) {
        this._title = title;
        this._description = description;
        this._dueDate = dueDate;
        this._priority = priority;
        this._status = status;
        this._project = project; 
        this._checked = checked;
    }

    get title() {
        return this._title;
    }

    get description() {
        return this._description;
    }

    get dueDate() {
        return this._dueDate;
    }

    get prority() {
        return this._priority;
    }

    get status() {
        return this._status;
    }

    get project() {
        return this._project;
    }

    get status() {
        return this._checked;
    }

    set status(value) {
        this._checked = value;
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





