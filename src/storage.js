import { displayTodo } from "./Dom";
export function setToStorage(name, idName) {
  return localStorage.setItem(
    `${name}`,
    document.getElementById(`${idName}`).value
  );
}
export function fetchFromStorage(name) {
  return localStorage.getItem(`${name}`);
}
export function saveTodo({ title, desc, date, priority, checklistData }) {
  setToStorage("Title", "title");
  setToStorage("Description", "desc");
  setToStorage("Date", "date");
  setToStorage("Priority", "priority");
  localStorage.setItem("Checklist", checklistData);
  displayTodo();
  return { title, desc, date, priority, checklistData };
}
