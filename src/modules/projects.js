export default class ToDoItem {
    constructor(title) {
        this.title = title;
    }
    
    introduce() {
        console.log(`Hello, my name is ${this.title}`);
    }
};

const item = new ToDoItem('da');

item.introduce();