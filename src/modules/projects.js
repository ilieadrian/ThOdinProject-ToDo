class Todo {
    constructor(title, description, dueDate, priority, status, project, isChecked) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.status = status;
        this.project = project; 
        this.checked = isChecked;
    }

    getProject() {
        return this.project;
    }

    getTitle() {
        return this.title;
    }

    set setchecked(value) {
        this.checked = value;
        // console.log(this.getTitle() + ' was checked! ' + this.checked + check)
    }

    isChecked() {
        return this.checked;
    }

}

class Project {
    constructor(name) {
        this.name = name;
    }   
}

const defaultValues  = (function () {
    const taskList = [];
    const projectList = [];

    newToDo = new Todo('Read daily a pattern', 'https://www.patterns.dev/vanilla/import-on-interaction', '2024-03-20', 'High', 'Unfinished', 'Learing', false);
    projectList.push(newToDo);

    newToDo = new Todo('Write on blog', 'Write about last part from TicTacToe game', '2024-03-21', 'Low', 'Unfinished', 'Learing', false);
    projectList.push(newToDo);

    newToDo = new Todo('New Odin Chapter', 'Start a new OdinProjectChapter', '2024-04-15', 'Normal', 'Finished', 'Learing', true);
    projectList.push(newToDo);

    newToDo = new Todo('Repair blog', 'Fix social links on blog header', '2024-03-29', 'High', 'Unfinished', 'Learing', true);
    projectList.push(newToDo)

    newToDo = new Todo('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '2024-03-15', 'Normal', 'Finished', 'Home', false);
    projectList.push(newToDo)
    // console.table(Todo.getAllTodos());

    // console.table(Todo.getAllTodos());

    console.table(projectList)
    console.log(projectList[3].getProject())
})();




