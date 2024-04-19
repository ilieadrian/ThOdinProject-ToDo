import defaultValues from './main';

const { taskList, projectList } = defaultValues;

console.table(taskList);
console.log(projectList[0].getName());


