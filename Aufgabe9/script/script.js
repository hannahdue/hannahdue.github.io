var toDos = ["Kochen", "Putzen", "Training"];
window.addEventListener("load", function () {
    document.querySelector("#tasknumber").innerHTML = "" + toDos.length;
    toDoList();
    var input = document.querySelector("#input");
    document.querySelector("#add").addEventListener("click", function () {
        toDos.push(input.value);
        input.value = "";
        console.log("huhu");
        toDoList();
    });
});
function toDoList() {
    document.querySelector("#todos").innerHTML = "";
    for (var index = 0; index < toDos.length; index++) {
        document.querySelector("#todos").innerHTML += "<p>" + toDos[index] + "</p>";
    }
}
//# sourceMappingURL=script.js.map