export default class Project {
    static idCounter = 0;

    constructor(name) {
        this._id = Project.calcId();
        this._name = name;
    }   

    static calcId() {
        return ++Project.idCounter;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get id() {
        return this._id;
    }
}


