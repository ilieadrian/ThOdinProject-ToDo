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

function getProjects(projectsList) {
    let ulContent = '';

    projectsList.forEach(element => {
        const li = document.createElement("li");
        ulContent += `
            <li><a href="#">${element.name}</a><span class="number-of-tasks">3</span></li>
        `;
    });

    document.addEventListener("DOMContentLoaded", function(){
        const projectList = document.querySelectorAll("#projects li");
        projectList.forEach(li => {
            li.addEventListener("click", function(event) {
                console.log("Clicked on", a.textContent.trim()); 
                li.classList.toggle("active");
            });
        });

    })

    return ulContent;
}


export {handleProject, getProjects };

