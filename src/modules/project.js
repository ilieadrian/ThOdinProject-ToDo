// export default class Project {
//     constructor(name) {
//         this._id = this.calcId;
//         this._name = name;
//     }   

//     static calcId() {
//         id = 0 ? id = 1 : id++;
//         return id;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         return this._name = value;
//     }
// }

export default class Project {
    static idCounter = 0; // Static variable to keep track of IDs

    constructor(name) {
        this._id = Project.calcId(); // Call calcId to get a new ID
        this._name = name;
    }   

    static calcId() {
        return ++Project.idCounter; // Increment the static counter and return the new ID
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


