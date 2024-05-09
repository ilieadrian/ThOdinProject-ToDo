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
}





