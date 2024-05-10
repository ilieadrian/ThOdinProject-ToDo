import Project from "./project";

function handleProject(newToDo, projectList){
    const projectName = newToDo.project;

    const existingProject = projectList.find(project => project.name === projectName);

    if (!existingProject){
        const newProject = new Project(newToDo.project);
        projectList.push(newProject);
    }

    return projectList;
}

export default handleProject;