import Project from "./project";

function handleProject(newToDo, projectList){
    const projectName = newToDo.project;
    const existingProject = projectList.find(project => project.name === projectName);

    console.log(projectList)

    if (!existingProject){
        const newProject = new Project(newToDo.project);
        projectList.push(newProject);
    }

    return projectList;
}

function getProjects(projectsList) {
    let ulContent = '';

    projectsList.forEach(element => {
        const li = document.createElement("li");
        ulContent += `
            <li data-project-id="${element.id}"><a href="#">${element.name}</a><span class="number-of-tasks">3</span></li>
        `;
    });

    document.addEventListener("DOMContentLoaded", function(){
        const projectList = document.querySelectorAll("#projects li");
        
        projectList.forEach(li => {
            li.addEventListener("click", function(event) {
                const projectId = li.getAttribute('data-project-id');
                console.log("Clicked on", projectId); 
                // li.classList.toggle("active");
            });
        });

    })

    return ulContent;
}


export {handleProject, getProjects };

