import Project from "./project";
import { getTodosByProject } from "./handletodos";

function handleProject(newToDo, projectsList){
    const defaultProjectExists = projectsList.some(project => project.name === "Default");
    if (!defaultProjectExists) {
        const defaultProject = new Project("Default");
        projectsList.push(defaultProject);
        }
        

    const projectName = newToDo.project;
    const existingProject = projectsList.find(project => project.name === projectName);

    if (!existingProject){
        const newProject = new Project(newToDo.project);
        projectsList.push(newProject);
    }
    // console.log("Handle Project PROJECTLIST", projectsList)
    return projectsList;
}


function getProjects(projectsList, todoList) {
    let ulContent = '';

    projectsList.forEach(element => {
        ulContent += `
            <li data-project-id="${element.id}">
                <a href="#">${element.name}</a>
                <span class="number-of-tasks">${element.items}</span>
            </li>
        `;
    });

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


    countTodoinProject(projectsList, todoList)

        return ulContent;
}


function countTodoinProject(projectsList, todoList){

    let eachProject;

    for (let i = 0; i < projectsList.length; i++) {
        eachProject = projectsList[i].name;
        projectsList[i].calcItem();
        console.log(projectsList[i]);
        yahoo(eachProject, todoList);
    } 

    for (let i = 0; i < todoList.length; i++) {
        console.log("countTodoinProject todoList: ", todoList[i])
    }
}

function yahoo(eachProject, todoList) {
    console.log("Yahoo", eachProject)

    for (let i = 0; i < todoList.length; i++) {
        // console.log("countTodoinProject todoList: ", todoList[i].project)
    }
    
}


// function getProjects(projectsList, todoList) {
//     let ulContent = '';

//     projectsList.forEach(element => {
//         const li = document.createElement("li");


//         ulContent += `
//             <li data-project-id="${element.id}">
//                 <a href="#">${element.name}</a>
//                 <span class="number-of-tasks">${element.items}</span>
//             </li>
//         `;
//     });


//     document.addEventListener("DOMContentLoaded", function() {
//         const projectList = document.querySelectorAll("#projects li");
    
//         projectList.forEach(li => {
//             const anchor = li.querySelector('a');
//             anchor.addEventListener("click", function(event) {
//                 event.preventDefault();
//                 const projectId = li.getAttribute('data-project-id');
//                 const projectName = anchor.textContent;
    
//                 getTodosByProject(todoList, projectName);
    
//                 projectList.forEach(item => {
//                     const link = item.querySelector('a');
//                     link.classList.remove('active');
//                 });
    
//                 anchor.classList.add('active');
//             });
//         });
//     });


//     return ulContent;
// }

export {handleProject, getProjects };

