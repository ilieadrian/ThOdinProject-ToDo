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
        "2024-10-15",
        "low",
        false,
        "Home",
      ),
      new Todo(
        "TheOdinProject chapter 2",
        "Finish theOdinProject chapter 2",
        "2024-10-17",
        "low",
        true,
        "Home",
      ),
      new Todo(
        "New Odin Chapter",
        "Start a new OdinProjectChapter",
        "2024-10-16",
        "medium",
        true,
        "Learning",
      ),
      new Todo(
        "Repair blog",
        "Fix social links on blog header",
        "2024-03-29",
        "high",
        false,
        "Learning",
      ),
      new Todo(
        "Read daily a pattern",
        "https://www.patterns.dev/vanilla/import-on-interaction",
        "2024-03-20",
        "high",
        false,
        "Learning",
      ),
      new Todo(
        "App implementation",
        "Add ability to extract the projects from the array",
        "2024-12-24",
        "low",
        true,
        "Active learning",
      ),
      new Todo(
        "Xyx",
        "Some random text",
        "2024-09-31",
        "low",
        true,
        "Active learning",
      ),
      new Todo(
        "ABC",
        "First three letters from the alphabet",
        "2024-10-16",
        "high",
        false,
        "Active learning",
      ),
      //surplus
      // new Todo(
      //   "XYZ",
      //   "Some letters from the alphabet",
      //   "2024-10-18",
      //   "high",
      //   false,
      //   "Learning",
      // ),
      // new Todo(
      //   "TheOdinProject chapter 15",
      //   "Finish theOdinProject chapter 15",
      //   "2024-10-17",
      //   "medium",
      //   true,
      //   "Home",
      // ),
      // new Todo("Zee projects", "lorem20", "2024-10-13", "high", true, "Zee"),
      // new Todo(
      //   "Zee3 projects",
      //   "lorem20",
      //   "2024-10-15",
      //   "low",
      //   false,
      //   "Learning",
      // ),
      // new Todo(
      //   "Zee4 projects",
      //   "lorem20",
      //   "2024-10-15",
      //   "high",
      //   true,
      //   "Learning",
      // ),
      // new Todo("Zee5projects", "lorem20", "2024-10-16", "low", true, "Zee"),
      // new Todo("Zee6 projects", "lorem20", "2024-10-17", "high", false, "Zee"),
      // new Todo("Zee7 projects", "lorem20", "2024-10-18", "high", true, "Home"),
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
