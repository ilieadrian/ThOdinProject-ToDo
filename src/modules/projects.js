class Todo {
    constructor(title, description, dueDate, priority, status, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.project = project; 
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

    getTitle() {
        return this.name;
    }     

    addTodo(todo) {
        this.todos.push(todo);
    }

    getTodos() {
        return this.todos;
    }
}

const defaultValues  = (function () {
    const todo1 = new Todo('Task 1', 'Description for Task 1', '2024-03-20', 'High', 'Unfinished', 'Work');
    const todo2 = new Todo('Task 2', 'Description for Task 2', '2024-03-21', 'Medium', 'Unfinished', 'Work');
    const defaultProject = new Project('Default');

    defaultProject.addTodo(todo1);
    defaultProject.addTodo(todo2);

    // todo1.setProject(project1);
    // todo2.setProject(project1);

    console.log(todo1.getProject());


    console.log(defaultProject.getTitle());
    console.table(defaultProject.getTodos());
})();


