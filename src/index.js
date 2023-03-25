import { blankProject } from "./initProjectLoad";
import { initDom } from "./Dom";
import { todo } from "./todo";
blankProject();

initDom();

const eventModule = (() => {
  //display form
  const newTodo = document.querySelector(".addTodoBtn");
  newTodo.addEventListener("click", displayForm);
  //add item to checklist
  const addCheck = document.querySelector(".addToCheck");
  addCheck.addEventListener("click", displayForm);
  //reset form
  const reset = document.querySelector(".reset");
  reset.addEventListener("click", clearForm);
})();
