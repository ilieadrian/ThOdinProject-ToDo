import Project from "./project";
import { getTodosByProject } from "./handletodos";

function handleProject(newToDo, projectsList){
    const projectName = newToDo.project;
    const existingProject = projectsList.find(project => project.name === projectName);

    if (!existingProject){
        const newProject = new Project(newToDo.project);
        projectsList.push(newProject);
    }

    return projectsList;
}

function getProjects(projectsList, todoList) {
    let ulContent = '';

    projectsList.forEach(element => {
        const li = document.createElement("li");

        ulContent += `
            <li data-project-id="${element.id}"><a href="#">${element.name}</a><span class="number-of-tasks">3</span></li>
        `;
    });

    // document.addEventListener("DOMContentLoaded", function(){
    //     const projectList = document.querySelectorAll("#projects li");
    //     console.log(projectList)
        
        
    //     projectList.forEach(li => {
    //         const anchor = li.querySelector('a');
    //         anchor.addEventListener("click", function(event) {
    //             event.preventDefault();
    //             const projectId = li.getAttribute('data-project-id');
    //             const projectName = anchor.textContent; 

    //             getTodosByProject(todoList, projectName);
    //             // to be resolved
    //             const menuLinks = document.querySelectorAll(".menu-links");
            
    //             menuLinks.classList.toggle("active");
    //         });
    //     });
    // })
    document.addEventListener("DOMContentLoaded", function() {
        const projectList = document.querySelectorAll("#projects li");
    
        projectList.forEach(li => {
            const anchor = li.querySelector('a');
            anchor.addEventListener("click", function(event) {
                event.preventDefault();
                const projectId = li.getAttribute('data-project-id');
                const projectName = anchor.textContent;
    
                getTodosByProject(todoList, projectName);
    
                projectList.forEach(item => {
                    const link = item.querySelector('a');
                    link.classList.remove('active');
                });
    
                anchor.classList.add('active');
            });
        });
    });


    return ulContent;
}

export {handleProject, getProjects };

