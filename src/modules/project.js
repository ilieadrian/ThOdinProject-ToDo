export default class Project {
    constructor(name) {
        this._name = name;
    }   

    get name() {
        return this._name;
    }

    set name(value) {
        return this._name = value;
    }
}


