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
    console.log("todoList from handleProject")
    console.table(todoList)


    const project = todoList[5].project;
    console.table(project)

    console.log(project.items)


    projectsList.forEach(project => project.items = 0);

        todoList.forEach(todo => {
            // console.log(todo.project)
            // console.log("todoList.forEach")
            
            const project = projectsList.find(project => project.id === todo.projectId);
            
                if (project) {
                    project.calcItem();
                    // console.log("todo.projectId", todo.projectId)
                }

                // console.log(project)

        })

    // Reset the items count for each project
    // console.table(projectsList)

    // Increment the items count for each project based on the todoList
    // GPT`s solution
    // todoList.forEach(todo => {
    //     const project = projectsList.find(project => project.id === todo.projectId);
    //     if (project) {
    //         project.calcItem();
    //     }
    // });

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

    return ulContent;
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

