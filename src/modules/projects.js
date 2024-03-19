class Todo {
    constructor(title, description, dueDate, priority, status, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = 'unfinished';
        this.project = null; 
    }

    setProject(project) {
        this.project = project;
    }

    getProject() {
        return this.project;
    }
}

class Project {
    constructor(name) {
        this.name = name;
        this.todos = [];
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    getTodos() {
        return this.todos;
    }
}

const todo1 = new Todo('Task 1', 'Description for Task 1', '2024-03-20', 'High');
const todo2 = new Todo('Task 2', 'Description for Task 2', '2024-03-21', 'Medium');
const project1 = new Project('Default');

project1.addTodo(todo1);
project1.addTodo(todo2);

todo1.setProject(project1);
todo2.setProject(project1);

console.log(todo1.getProject());

project1.name = 'New Project';
console.log(todo1.getProject());