import { compareAsc, startOfToday, parseISO } from "date-fns";
import { clearForm } from "./Dom";
function id(name) {
  return document.getElementById(`${name}`);
}
const todoArray = [];

export const createTodo = () => {
  let title = id("title").value;
  let desc = id("desc").value;
  let date = id("date").value;
  let priority = id("priority").value;
  if (title == "" || desc == "" || date == "") {
    alert("Field can't be empty");
    //add message under input in styling phase
  }

  if (parseISO(date) < startOfToday()) {
    alert("day has already passed");
    //add message under input in styling phase
    
    return;
  }

  const li = document.querySelectorAll("li");
  let checklistArray = [];

  for (let i = 0; i < li.length; i++) {
    let eachList = li[i].textContent.replace("\u00D7", "");
    checklistArray.push(eachList);
  }

  let checklistData = checklistArray.join(", ");
  todoArray.push({ title, desc, date, priority,checklistData });

 // clearForm();
  return { title, desc, priority, date, checklistData };
};
