class Todo {
    constructor(title, description, dueDate, priority, status, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.project = project; 

        this.todos = [];
    }

    static createTodo(title, description, dueDate, priority, status, category) {
        return new Todo(title, description, dueDate, priority, status, category);
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    getTodos() {
        return this.todos;
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
    }

    getTitle() {
        return this.name;
    }     
}

























const defaultValues  = (function () {
    const defaultProject = new Project('Default');
    let newToDo;

    newToDo = Todo.createTodo('Read daily a pattern', 'https://www.patterns.dev/vanilla/import-on-interaction', '2024-03-20', 'High', 'Unfinished', 'Learing');
    newToDo.addTodo(newToDo);

    newToDo = Todo.createTodo('Write on blog', 'Write about last part from TicTacToe game', '2024-03-21', 'Low', 'Unfinished', 'Learing');
    newToDo.addTodo(newToDo);

    newToDo = Todo.createTodo('New Odin Chapter', 'Start a new OdinProjectChapter', '2024-04-15', 'Normal', 'Unfinished', 'Learing');
    newToDo.addTodo(newToDo);

    newToDo = Todo.createTodo('Repair blog', 'Fix social links on blog header', '2024-03-29', 'High', 'Unfinished', 'Learing');
    newToDo.addTodo(newToDo);

    newToDo = Todo.createTodo('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '2024-03-15', 'Normal', 'Finished', 'Learing');
    newToDo.addTodo(newToDo);
    
    // const todo1 = new Todo('Task 1', 'Description for Task 1', '2024-03-20', 'High', 'Unfinished', 'Work');
    // const todo2 = new Todo('Task 2', 'Description for Task 2', '2024-03-21', 'Medium', 'Unfinished', 'Work');
    
    // defaultProject.addTodo(todo1);
    // defaultProject.addTodo(todo2);

    // todo1.setProject(project1);
    // todo2.setProject(project1);

    // console.log(todo1.getProject());

    console.table(newToDo.getTodos());

    console.log(defaultProject)
})();


