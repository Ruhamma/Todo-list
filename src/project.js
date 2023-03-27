export default class Project {
  constructor(name) {
    (this.name = name), (this.todoArray = []);
  }
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setTodoArray(todoArray) {
    this.todoArray = todoArray;
  }
  getTodoArray() {
    return this.todoArray;
  }
  addTodo(todo) {
    this.todoArray.push(todo);
  }
  removeTodo(todoTitle) {
    const found = this.todoArray.find((todo) => todo.getTitle() === todoTitle);
    this.todoArray.splice(found, 1);
  }
  getTodo(todoName) {
    return this.todoArray.find((todo) => {
      todo.getTitle() == todoName;
    });
  }
}
