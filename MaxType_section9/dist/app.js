"use strict";
class ProjectInput {
    templateElement;
    hostElement;
    constructor() {
        this.templateElement = document.getElementById("project-input");
        this.hostElement = document.getElementById("app");
        const importedNode = document.importNode(this.templateElement.content, true);
    }
}
