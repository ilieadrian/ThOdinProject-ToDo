import Project from "./project";
import { getTodosByProject } from "./handletodos";

function handleProject(newToDo, projectsList){
    const projectName = newToDo.project;
    const existingProject = projectsList.find(project => project.name === projectName);

    // console.log("from handleProject: ");
    // console.log("projectsList length:", projectsList.length);
    console.table(projectsList);
    projectsList.forEach(project => project._items = 0);

    // Check if projectsList[1] exists before accessing its id
    if (projectsList.length > 1) {
            let curentProject = projectsList.map(project => {
            project.calcItem()
        })

        console.table(projectsList[0].name);
        projectsList[0].calcItem()
    } else {
        console.log("projectsList[1] is undefined");
    }
    
    if (!existingProject){
        const newProject = new Project(newToDo.project);
        projectsList.push(newProject);
    }

    return projectsList;
}

function getProjects(projectsList, todoList) {
    // console.log("todoList from handleProject")
    // console.log(todoList)


    // const project = todoList[5].project;
    // console.log("todoList[5].project", project)


    const iterator = todoList.keys();
        for (const key of iterator) {
        compareStuff(todoList[key].project);
        }

     function compareStuff(param){
        // console.log("param in compareStuff: ", param)
        // console.log([param].name)
     }  

    // console.log(project.items)


    // projectsList.forEach(project => project.items = 0);
    // console.log("projectsList from handleProject")
    // console.table(projectsList)

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

