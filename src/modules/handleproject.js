import Project from "./project";
// import { renderUI, renderProjectContainer, renderTodoContainer } from "./index";
import { renderUI, renderProjectContainer } from "./index";

// import { setupEventListeners, filteredTodos } from "./manipulateDOM";
import { setupEventListeners, } from "./manipulateDOM";

// import { getTodosByProject } from "./handletodos";
import { isThisWeek, isToday } from "date-fns";

function handleProject(
  newToDo = null,
  projectsList,
  todoList,
  passedProjectName = null,
) {
  let existingProject = null;
  if (passedProjectName) {
    existingProject = projectsList.find(
      (project) => project.name === passedProjectName,
    );

    if (!existingProject) {
      processProject(passedProjectName, projectsList);
      renderProjectContainer(projectsList, todoList);
      setupEventListeners(todoList, projectsList);
    } else {
      alert("Project name cannot be duplicated");
      return;
    }
  } else {
    const defaultProjectExists = projectsList.some(
      (project) => project.name === "Default",
    );

    if (!defaultProjectExists) {
      const defaultProject = new Project("Default");
      projectsList.push(defaultProject);
    }

    const projectName = newToDo.project;
    existingProject = projectsList.find(
      (project) => project.name === projectName,
    );

    if (!existingProject) {
      processProject(projectName, projectsList);
    } else {
      return;
    }
  }
}

function processProject(projectName, projectsList) {
  const newProject = new Project(projectName);
  projectsList.push(newProject);
  localStorage.setItem("projectsList", JSON.stringify(projectsList));

  return projectsList;
}

function getProjects(projectsList, todoList = null, currentProject) {
  // console.log("getProjects fired");

  if (!todoList) {
    let selectContent = "";

    projectsList.forEach((element) => {
      selectContent += `
            <option value="${element.name}" ${currentProject === element.name ? "selected" : ""}>${element.name}</option>
            `;
    });

    return selectContent;
  } else {
    let ulContent = "";

    projectsList.forEach((element) => {
      ulContent += `
                <li data-project-id="${element.id}">
                    <a href="#" class="project-link">${element.name}</a>
                    <span class="number-of-tasks">${countTodoinProject(element.name, todoList)}</span>
                </li>
            `;
    });

    return ulContent;
  }
}

function getProjetsByDueDate(todoList) {
  // console.log("getProjetsByDueDate FIRED");
  const dueTodayTodos = todoList.filter(
    (todo) => isToday(new Date(todo.dueDate)) && !todo._status,
  );
  const dueThisWeekTodos = todoList.filter(
    (todo) => isThisWeek(new Date(todo.dueDate)) && !todo._status,
  );

  return { dueTodayTodos, dueThisWeekTodos };
}

function renderDueTodosContainer(todoList) {
  // console.log("renderDueTodosContainer FIRED");
  const { dueTodayTodos, dueThisWeekTodos } = getProjetsByDueDate(todoList);

  let ulContent = "";
  ulContent = `
        <li><a href="#" id="home-link">Home</a><span class="number-of-tasks">${countIncompleteTodos(todoList)}</span></li>
        <li><a href="#" id="today-link">Due Today</a><span class="number-of-tasks">${dueTodayTodos.length}</span></li>
        <li><a href="#" id="week-link">Due This Week</a><span class="number-of-tasks">${dueThisWeekTodos.length}</span></li>
    `;

  return ulContent;
}

function countIncompleteTodos(todoList) {
  let count = 0;
  todoList.forEach((elemement) => {
    if (!elemement.status) {
      count++;
    }
  });

  return count;
}

function countTodoinProject(element, todoList) {
  let count = 0;

  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].project === element && !todoList[i].status) {
      // console.log("countTodoinProject fired", todoList[i].project, count);
      count++;
    }
  }
  return count;
}

function handleProjectCountNumber() {
  const numberBouble = document.querySelectorAll(".number-of-tasks");

  if (numberBouble.length === 0) {
    console.log(
      "handleProjectCountNumber: No elements found with the class 'number-of-tasks'.",
    );
  }

  numberBouble.forEach((bouble) => {
    if (bouble.innerHTML == 0) {
      bouble.style.display = "none";
    }
  });
}

function deleteProject(idToDelete, projectsList, todoList) {
  
  console.log("idToDelete in deleteProject:", idToDelete, typeof projectsList)
  // console.log("Fired deleteProject");

  console.log("About to call projectsList.findIndex with id To Delete:", idToDelete)
  const projectIndex = projectsList.findIndex(
    (project) => project.id == idToDelete,
  );
  // console.log(idToDelete);
  // console.table(projectsList);
  // console.log("todoList", todoList);
  
  const projectToDelete = projectsList.find(
    (project) => project.id == idToDelete,
  ).name;

  const todosInProject = countTodoinProject(projectToDelete, todoList);
  // console.log(
  //   "projectToDelete, todosInProject",
  //   projectToDelete,
  //   todosInProject,
  // );

  if (projectIndex !== -1 && todosInProject == 0) {
    console.log("projectIndex", projectIndex)
    projectsList.splice(projectIndex, 1);
    localStorage.setItem("projectsList", JSON.stringify(projectsList));

    const jumpToProject = projectIndex+1;
    console.log("jumpToProject", jumpToProject)
    console.table(projectsList)


    
    // renderTodoContainer(filteredTodos, null, jumpToProject)

    
    
  } else {
    

    // setupEventListeners(todoList, projectsList);
  }
  renderUI(projectsList, todoList);
  setupEventListeners(todoList, projectsList);
//   if(statusOfUI) {
//     console.log("Filtered wiev") 
//    } else {
//      console.log("Unfiltered wiev") 
//  }
}


export {
  handleProject,
  getProjects,
  renderDueTodosContainer,
  getProjetsByDueDate,
  deleteProject,
  handleProjectCountNumber,
};
