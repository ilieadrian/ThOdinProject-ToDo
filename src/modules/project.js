export default class Project {
    constructor(name) {
        this._name = name;
    }   

    get name() {
        return this.name;
    }

    set name(value) {
        return this.name = value;
    }
}