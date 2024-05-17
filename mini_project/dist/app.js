"use strict";
const btn = document.getElementById("btn");
const form = document.querySelector("Form");
const input = document.getElementById("ipt");
const TodoDiv = document.getElementById("target");
function deleteFunc() {
    const index = todoList.findIndex((item) => item.idx === this.idx);
    if (index !== -1) {
        todoList.splice(index, 1);
    }
}
const saveToLocalStorage = () => {
    localStorage.setItem("todo", JSON.stringify(todoList));
};
const getLocalStorage = () => {
    const todo = localStorage.getItem("todo");
    return todo
        ? JSON.parse(todo).map((e) => {
            return { ...e, deleteTodo: deleteFunc };
        })
        : [];
};
//리스트
const todoList = getLocalStorage();
const createTodo = () => {
    TodoDiv.textContent = "";
    todoList.forEach((el) => {
        const div = document.createElement("div");
        const button = document.createElement("button");
        const checkbox = document.createElement("input");
        div.textContent = el.todo;
        checkbox.type = "checkbox";
        checkbox.checked = el.complete;
        checkbox.addEventListener("change", () => {
            el.complete = checkbox.checked;
            saveToLocalStorage();
        });
        button.textContent = "삭제";
        button.onclick = () => {
            el.deleteTodo();
            div.remove();
            saveToLocalStorage();
        };
        div.appendChild(checkbox);
        div.appendChild(button);
        TodoDiv.appendChild(div);
    });
};
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newObj = {
        idx: todoList.length > 0 ? todoList[todoList.length - 1].idx + 1 : 1,
        todo: input.value,
        complete: false,
        deleteTodo: deleteFunc,
    };
    todoList.push(newObj);
    localStorage.setItem("todo", JSON.stringify(todoList));
    createTodo();
    //  초기화
    input.value = "";
});
createTodo();
