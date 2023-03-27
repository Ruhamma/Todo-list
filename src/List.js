export default class List {
  constructor() {
    this.projectArray = [];
  }
  setList(projectArray){
    this.projectArray=projectArray;
  }
  getList() {
    return this.projectArray;
  }
  addProject(project) {
    this.projectArray.push(project);
  }
  removeProject(ProjectName) {
    const found = this.projectArray.find((project) => {
      project.getName() == ProjectName;
    });

    this.projectArray.splice(found, 1);
  }
  getProject(projectName) {
    return this.projectArray.find((project) => {
      project.getName() == projectName;
    });
  }
}
