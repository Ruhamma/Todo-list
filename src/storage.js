import { displayTodo } from "./Dom";
import Todo from "./todo";
import Project from "./project";
import List from "./List";

export default class Storage {
  save(data) {
    localStorage.setItem("List", JSON.stringify(data));
  }
  fetchList() {
    const list = Object.assign(
      new List(),
      JSON.parse(localStorage.getItem("List"))
    );

    list.setList(
      list.getList().map((project) => Object.assign(new Project(), project))
    );

    list.getList().forEach((project) => {
      project.setTodoArray(
        project.getTodos().map((todo) => Object.assign(new Todo(), todo))
      );
    });
    return list;
  }
  addProject(project) {
    const list = Storage.fetchList();
    list.addProject(project);
    save(list);
  }
  addTodo(todo, pName) {
    const list = Storage.fetchList();
    list.getProject(pName).addTodo(todo);
    save(list);
  }
  removeProject(project) {
    const list = Storage.fetchList();
    list.removeProject(project);
    save(list);
  }
  removeTodo(todo, pName) {
    const list = Storage.fetchList();
    list.getProject(pName).removeTodo(todo);
    save(list);
  }
  renameTodo(projectName, todoName, newName) {
    const list = Storage.fetchList();
    list.getProject(projectName).getTodo(todoName).setTitle(newName);
    Storage.saveTodoList(list);
  }
  renameProject(projectName, newName) {
    const list = Storage.fetchList();
    list.getProject(projectName).setName(newName);
    Storage.saveTodoList(list);
  }
  changeDesc(projectName, todoName, newDesc) {
    const list = Storage.fetchList();
    list.getProject(projectName).getTodo(todoName).setDesc(newDesc);
    Storage.saveTodoList(list);
  }
  ChangeDate(projectName, todoName, newDate) {
    const list = Storage.fetchList();
    list.getProject(projectName).getTodo(todoName).setDate(newDate);
    Storage.saveTodoList(list);
  }
  changePriority(projectName, todoName, newPriority) {
    const list = Storage.fetchList();
    list.getProject(projectName).getTodo(todoName).setDesc(newPriority);
    Storage.saveTodoList(list);
  }
  ChangeCheckList(projectName, todoName, newChecklist) {
    const list = Storage.fetchList();
    list.getProject(projectName).getTodo(todoName).setDate(newChecklist);
    Storage.saveTodoList(list);
  }
}
