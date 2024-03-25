class Todo {

    static todos = [];

    constructor(title, description, dueDate, priority, status, project) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.project = project; 

        Todo.todos.push(this);
    }

    static create(title, description, dueDate, priority, status, project) {
        return new Todo(title, description, dueDate, priority, status, project);
    }

    static getProject() {
        // return this.project;
        const projects = new Set(); // Using Set to store unique project names
        Todo.todos.forEach(todo => projects.add(todo.project)); // Extracting project names
        return Array.from(projects); // Converting Set back to an array

    }

    static getAllTodos() {
        return Todo.todos;
    }

}

class Project {
    constructor(name) {
        this.name = name;
    }   
}





const defaultValues  = (function () {
    const defaultProject = new Project('Default');
    let newToDo;

    newToDo = Todo.create('Read daily a pattern', 'https://www.patterns.dev/vanilla/import-on-interaction', '2024-03-20', 'High', 'Unfinished', 'Learing');

    newToDo = Todo.create('Write on blog', 'Write about last part from TicTacToe game', '2024-03-21', 'Low', 'Unfinished', 'Learing');

    newToDo = Todo.create('New Odin Chapter', 'Start a new OdinProjectChapter', '2024-04-15', 'Normal', 'Unfinished', 'Learing');

    newToDo = Todo.create('Repair blog', 'Fix social links on blog header', '2024-03-29', 'High', 'Unfinished', 'Learing');

    newToDo = Todo.create('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '2024-03-15', 'Normal', 'Finished', 'Home');

    console.table(Todo.getAllTodos());
    console.log(Todo.getProject());

    console.log(defaultProject)
})();


