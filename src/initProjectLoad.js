export default class Project {
  constructor(name) {
    (this.name = name), (this.todoArray = []);
  }
  getName(){
    return this.name;
  }
  getTodo(){
    return this.todoArray;
  }
}
export const blankProject = () => {
  let projectsArray = [];
  let pe = new Project("List");
  projectsArray.push(pe);
  console.log(projectsArray);
  return { projectsArray,pe };
};
