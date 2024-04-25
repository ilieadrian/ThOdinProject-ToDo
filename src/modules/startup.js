import '../style.css';

import Todo from './todo';
import Project from './project';
import handleProject from './handleproject';

console.log("hello from the beggining of startup")

const defaultValues  = (function () {
    const taskList = [];
    const projectsList = [];
    let newToDo;
    let defaultProject;

    defaultProject = new Project("Default")
    projectsList.push(defaultProject);

    newToDo = new Todo('Read daily a pattern', 'https://www.patterns.dev/vanilla/import-on-interaction', '2024-03-20', 'High', 'Unfinished', 'Learning', false);
    taskList.push(newToDo);
    handleProject(newToDo, projectsList);

    newToDo = new Todo('Write on blog', 'Write about last part from TicTacToe game', '2024-03-21', 'Low', 'Unfinished', 'Home', false);
    taskList.push(newToDo);
    handleProject(newToDo, projectsList);

    newToDo = new Todo('New Odin Chapter', 'Start a new OdinProjectChapter', '2024-04-15', 'Normal', 'Finished', 'Learning', true);
    taskList.push(newToDo);
    handleProject(newToDo, projectsList);

    newToDo = new Todo('Repair blog', 'Fix social links on blog header', '2024-03-29', 'High', 'Unfinished', 'Learning', true);
    taskList.push(newToDo);
    handleProject(newToDo, projectsList);

    newToDo = new Todo('TheOdinProject chapter 2', 'Finish theOdinProject chapter 2', '2024-03-15', 'Normal', 'Finished', 'Home', false);
    taskList.push(newToDo);
    handleProject(newToDo, projectsList);

    newToDo = new Todo('App implementation', 'Add ability to extract the projects from the array', '2024-04-24', 'Normal', 'Finished', 'Active learing', true);
    taskList.push(newToDo);
    handleProject(newToDo, projectsList);

    console.table(projectsList)
    return {
        taskList,
        projectsList,
    };
    
})();

export default defaultValues;
//https://www.google.com/search?q=webpack+import+default+executed+twice&client=firefox-b-d&sca_esv=f753c9bfe240238f&sca_upv=1&ei=8IUqZviXEcCTi-gP6bm-yAY&udm=&ved=0ahUKEwj4z_bR5d2FAxXAyQIHHemcD2kQ4dUDCBA&uact=5&oq=webpack+import+default+executed+twice&gs_lp=Egxnd3Mtd2l6LXNlcnAiJXdlYnBhY2sgaW1wb3J0IGRlZmF1bHQgZXhlY3V0ZWQgdHdpY2UyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogRI8XNQAFiCRHAEeAGQAQCYAZ0BoAG3A6oBAzAuM7gBA8gBAPgBAfgBApgCB6ACwwPCAgkQABiABBgTGA3CAggQABgTGA0YHsICCBAAGBMYFhgewgIKEAAYExgKGA0YHsICChAAGBMYCBgNGB6YAwCSBwM0LjOgB-MR&sclient=gws-wiz-serp

// https://github.com/webpack/webpack/issues/14768



