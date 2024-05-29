import Project from "./project";
import { getTodosByProject } from "./handletodos";


function handleProject(newToDo, projectsList){
    const defaultProjectExists = projectsList.some(project => project.name === "Default");
    if (!defaultProjectExists) {
        const defaultProject = new Project("Default");
        projectsList.push(defaultProject);
}
    // for (const element of projectsList) {
    //     console.log(element.name)
    // }
    const projectName = newToDo.project;
    const existingProject = projectsList.find(project => project.name === projectName);

    if (!existingProject){
        const newProject = new Project(newToDo.project);
        projectsList.push(newProject);
    }

    tryTO()
    
            // Testground
        // Testground
    // Testground

    // console.log("from handleProject: ");
    // console.log("projectsList length:", projectsList.length);
    // console.table(projectsList);

    //Get the project every time it apears
            //asociate the apearance of a project with the said project
                    //count add the counter to the items section


    // projectsList.forEach(project => project._items = 0);

    


    // projectsList.forEach(project => {
    //     // const existingProject = projectsList.find(project => project.name === projectName);
    //     // const projectNames = project.name;

    //     // console.log(projectNames)

    //     ///
        
    //     // const project = projectsList.find(project => project.name === project.project);
    //     // console.log(project)
    //     // if (project) {
            
    //     //     project.calcItem();
        
    // });

    // Check if projectsList[1] exists before accessing its id
    // if (projectsList.length > 1) {
    //         let curentProject = projectsList.map(project => {
    //         project.calcItem()
    //         })

    //         console.table(projectsList[0].name);
    //         projectsList[0].calcItem()
    // } else {
    //     console.log("projectsList[1] is undefined");
    // }
    // Testground
      // Testground
       // Testground
    

    return projectsList;
}


function tryTO (){
    console.log("Try to")
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

