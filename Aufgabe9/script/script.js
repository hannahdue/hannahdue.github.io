var toDos = ["Kochen", "Putzen"];
window.addEventListener("load", function () {
    toDoList();
    var input = document.querySelector("#input");
    document.querySelector("#add").addEventListener("click", function () {
        toDos.push(input.value);
        input.value = "";
        console.log("huhu");
        toDoList();
    });
    var checkButton = document.querySelector("#check");
    function taskCheck() {
        if (checkButton.getAttribute("style") == "opacity: 1") {
            checkButton.setAttribute("style", "opacity: 0");
        }
        else {
            checkButton.setAttribute("style", "opacity: 1");
        }
    }
    document.querySelector("#check").addEventListener("click", function () { taskCheck(); });
    document.querySelector("#trash").addEventListener("click", function () { deleteTask(); });
});
function toDoList() {
    document.querySelector("#todos").innerHTML = "";
    for (var index = 0; index < toDos.length; index++) {
        document.querySelector("#todos").innerHTML += "<p>" + "<i class='far fa-circle'></i>" + "<i class='far fa-check' id='check'></i>" + toDos[index] + "<i class = 'far fa-trash-alt' id = 'trash'></i>" + "</p>";
    }
    document.querySelector("#tasknumber").innerHTML = "" + toDos.length;
}
function deleteTask() {
    console.log("löschen");
}
//# sourceMappingURL=script.js.map