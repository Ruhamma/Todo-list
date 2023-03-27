import { startOfToday, parseISO } from "date-fns";

export default class Todo {
  constructor(title, desc, date, priority, checklist) {
    (this.title = title),
      (this.desc = desc),
      (this.date = date),
      (this.priority = priority),
      (this.checklist = checklist);
  }
  setTitle(title) {
    this.title = title;
  }
  setDesc(desc) {
    this.desc = desc;
  }
  setDate(date) {
    this.date = date;
  }
  setPriority(priority) {
    this.priority = priority;
  }
  setChecklist(checklist) {
    this.checklist = checklist;
  }
  getTitle() {
    return this.title;
  }
  getDesc() {
    return this.title;
  }
  getDate() {
    return this.title;
  }
  getPriority() {
    return this.priority;
  }
  compareDate() {
    if (parseISO(this.date) < startOfToday()) {
      alert("day has already passed");
      //add message under input in styling phase
      return;
    }
  }
}

// export const createTodo = () => {
//   let title = id("title").value;
//   let desc = id("desc").value;
//   let date = id("date").value;
//   let priority = id("priority").value;
//   if (title == "" || desc == "" || date == "") {
//     alert("Field can't be empty");
//     //add message under input in styling phase
//   }

//   if (parseISO(date) < startOfToday()) {
//     alert("day has already passed");
//     //add message under input in styling phase

//     return;
//   }

//   const li = document.querySelectorAll("li");
//   let checklistArray = [];

//   for (let i = 0; i < li.length; i++) {
//     let eachList = li[i].textContent.replace("\u00D7", "");
//     checklistArray.push(eachList);
//   }

//   let checklistData = checklistArray.join(", ");
//   todoArray.push({ title, desc, date, priority, checklistData });
//   saveTodo({ title, desc, date, priority, checklistData });
//   // clearForm();
//   return { title, desc, priority, date, checklistData };
// };
