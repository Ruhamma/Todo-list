import { blankProject } from "./initProjectLoad";
import { initDom, displayForm, addItemToCheck, clearForm } from "./Dom";
import { createTodo } from "./todo";
blankProject();

initDom();

const eventModule = (() => {
  //display form
  const newTodo = document.querySelector(".addTodoBtn");
  newTodo.addEventListener("click", displayForm);
  //add item to checklist
  const addCheck = document.querySelector(".addToCheck");
  addCheck.addEventListener("click", addItemToCheck);
  //reset form
  const reset = document.querySelector(".reset");
  reset.addEventListener("click", clearForm);
  //submit todo
  const submit = document.querySelector(".submit");
  submit.addEventListener("click", createTodo);
})();
