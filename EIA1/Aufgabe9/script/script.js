"use strict";
var toDos = ["Go grocery shopping", "Learn how to code"];
var todoFrame;
window.addEventListener("load", function () {
    todoFrame = document.querySelector("#todos");
    toDoList();
    var input = document.querySelector("#input");
    document.querySelector("#add").addEventListener("click", function () {
        toDos.push(input.value);
        input.value = "";
        console.log("input");
        toDoList();
    });
    input.addEventListener("keydown", function (e) {
        if (e.keyCode === 13) {
            toDos.push(input.value);
            input.value = "";
            console.log("input");
            toDoList();
        }
    });
});
function toDoList() {
    todoFrame.innerHTML = "";
    for (let index = 0; index < toDos.length; index++) {
        var todoContainer = document.createElement("div");
        todoContainer.classList.add("todo");
        todoContainer.innerHTML += "<p>" + "<i class = 'far fa-circle'></i>" + "<label class='container'><input type='checkbox'><span class='checkmark'></span></label>" + "<span class='todotask'>" + toDos[index] + "</span>" + "<i class = 'far fa-trash-alt' ></i>" + "</p>";
        todoContainer.querySelector(".fa-trash-alt").addEventListener("click", function () {
            console.log("löschen");
            toDos.splice(index, 1);
            toDoList();
        });
        todoFrame.appendChild(todoContainer);
    }
    document.querySelector("#tasknumber").innerHTML = "" + toDos.length;
}
//# sourceMappingURL=script.js.map