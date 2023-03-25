import { blankProject, Project } from "./initProjectLoad";
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
