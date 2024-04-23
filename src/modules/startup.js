import defaultValues from './main';

const { taskList, projectList } = defaultValues;

console.table(taskList);
console.log(taskList[3].status);
taskList[3].status = false;
console.log(taskList[3].status);
// taskList[1].setShecked(true);
// console.log(taskList[1].isChecked());
// console.table(projectList)




