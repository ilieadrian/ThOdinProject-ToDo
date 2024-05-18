import Project from "./project";
import { getTodosByProject } from "./handletodos";

function handleProject(newToDo, projectList){
    const projectName = newToDo.project;
    const existingProject = projectList.find(project => project.name === projectName);

    //!!!!!!
    // Take a look in detail, it logs 6 times
    // console.log(projectList)
    //!!!!!!

    if (!existingProject){
        const newProject = new Project(newToDo.project);
        projectList.push(newProject);
    }

    return projectList;
}

function getProjects(projectsList, taskList) {
    let ulContent = '';
    // console.log(taskList);


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

            anchor.addEventListener("click", function(event) {
                const projectId = li.getAttribute('data-project-id');
                const projectName = anchor.textContent; 

                getTodosByProject(taskList, projectName);
                // to be resolved
                li.classList.toggle("active");
            });
    });

    })

    return ulContent;
}


export {handleProject, getProjects };

