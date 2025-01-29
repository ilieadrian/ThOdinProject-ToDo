import Todo from "./todo";
import Project from "./project";
import { handleProject } from "./handleproject";
import { renderUI } from "./index";

const defaultValues = (function () {
  let todoList = JSON.parse(localStorage.getItem("todoList")) || [];
  let projectsList = JSON.parse(localStorage.getItem("projectsList")) || [];
  let renderOnlyContainer = false;

  if (!todoList || todoList.length === 0) {
    todoList = [
      new Todo(
        "Write on blog",
        "Write about last part from TicTacToe game",
        "2025-01-29",
        "low",
        false,
        "Home",
      ),
      new Todo(
        "TheOdinProject chapter 2",
        "Finish theOdinProject chapter 2",
        "2025-01-28",
        "low",
        false,
        "Home",
      ),
      new Todo(
        "New Odin Chapter",
        "Start a new OdinProjectChapter",
        "2025-01-30",
        "medium",
        false,
        "Learning",
      ),
      new Todo(
        "Repair blog",
        "Fix social links on blog header",
        "2025-01-27",
        "high",
        false,
        "Learning",
      ),
      new Todo(
        "Read daily a pattern",
        "https://www.patterns.dev/vanilla/import-on-interaction",
        "2025-01-30",
        "high",
        true,
        "Learning",
      ),
      new Todo(
        "App implementation",
        "Add ability to extract the projects from the array",
        "2025-01-30",
        "low",
        true,
        "Active learning",
      ),
      new Todo(
        "Xyx",
        "Some random text",
        "2025-01-29",
        "low",
        true,
        "Active learning",
      ),
      new Todo(
        "ABC",
        "First three letters from the alphabet",
        "2025-01-29",
        "high",
        false,
        "Active learning",
      ),
    ];

    projectsList = [];
    todoList.forEach((newToDo) => {
      handleProject(newToDo, projectsList);
    });
  } else {
    todoList = JSON.parse(localStorage.getItem("todoList")).map(
      (item) =>
        new Todo(
          item._title,
          item._description,
          item._dueDate,
          item._priority,
          item._status,
          item._project,
        ),
    );

    projectsList = JSON.parse(localStorage.getItem("projectsList")).map(
      (item) => new Project(item._name),
    );
  }

  localStorage.setItem("todoList", JSON.stringify(todoList));
  localStorage.setItem("projectsList", JSON.stringify(projectsList));

  renderUI(projectsList, todoList);

  return {
    todoList,
    projectsList,
    renderOnlyContainer,
    };
})();

export { defaultValues };
