import { blankProject, Project } from "./initProjectLoad";
import { fetchFromStorage } from "./storage";
function element(type) {
  return document.createElement(`${type}`);
}
export function initDom() {
  //heading
  const content = document.querySelector(".content");
  const heading = element("h1");
  heading.textContent = "See ya";
  content.appendChild(heading);

  //project load
  const leftDiv = element("div");
  leftDiv.textContent = blankProject().pe.name;
  content.appendChild(leftDiv);
}

export function displayForm() {
  document.getElementById("addTodo").style.display = "";
}

export function addItemToCheck() {
  const item = document.getElementById("addCheck").value;
  if (item != "") {
    const ul = document.querySelector(".todoUl");
    const li = element("li");
    li.textContent = item;
    const span = element("span");
    span.className = "removeItem";
    const removeSymbol = document.createTextNode("\u00D7");
    li.appendChild(span);
    span.appendChild(removeSymbol);
    ul.appendChild(li);
    document.getElementById("addCheck").value = "";

    console.log(
      document.querySelectorAll("li"),
      document.querySelectorAll("li").length
    );
    document.querySelectorAll("li").forEach((item) => {
      item.addEventListener("click", () => {
        item.remove();
      });
    });
  } else return;
}

export function clearForm() {
  for (let i = 0; i < document.querySelectorAll("li").length; i++) {
    document.getElementById("addCheck")[i].reset();
  }
  document.getElementById("addTodo").reset();
}

export function displayTodo() {
  const removeDivs = document.querySelectorAll(".card");
  for (let i = 0; i < removeDivs.length; i++) {
    removeDivs[i].remove();
  }
  const projects = document.querySelector(".projects");
  const card = element("div");
  card.classList.add("card");
  projects.appendChild(card);

  let Title = fetchFromStorage("Title");
  let Description = fetchFromStorage("Description");
  let Date = fetchFromStorage("Date");
  let Priority = fetchFromStorage("Priority");
  let checklist = fetchFromStorage("Checklist");

  let displayArray = { Title, Description, Date, Priority, checklist };

  for (const key in displayArray) {
    console.log(`${key} : ${displayArray[key]}`);
    const para = element("p");
    para.textContent = `${key} : ${displayArray[key]}`;
    card.appendChild(para);
  }
}
