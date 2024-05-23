import Project from "./project";
import { getTodosByProject } from "./handletodos";

function handleProject(newToDo, projectsList){
    const projectName = newToDo.project;
    const existingProject = projectsList.find(project => project.name === projectName);

    // console.log("projectlist HANDLPROJECT", projectList)

    if (!existingProject){
        const newProject = new Project(newToDo.project);
        projectsList.push(newProject);
    }

    return projectsList;
}

function getProjects(projectsList, todoList) {
    let ulContent = '';

    console.log("projectlist GETPROJECTS", projectsList)

    projectsList.forEach(element => {
        const li = document.createElement("li");

        ulContent += `
            <li data-project-id="${element.id}"><a href="#">${element.name}</a><span class="number-of-tasks">3</span></li>
        `;
    });

    document.addEventListener("DOMContentLoaded", function(){
        const projectList = document.querySelectorAll("#projects li");
        
        projectList.forEach(li => {
            const anchor = li.querySelector('a');
            // console.log("projectlist GETPROJECTS Interior", projectsList)

            anchor.addEventListener("click", function(event) {
                event.preventDefault();
                const projectId = li.getAttribute('data-project-id');
                const projectName = anchor.textContent; 

                getTodosByProject(todoList, projectName, projectsList);
                // to be resolved
                li.classList.toggle("active");
            });
        });
    })

    return ulContent;
}

export {handleProject, getProjects };

