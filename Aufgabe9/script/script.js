var toDos = ["Go grocery shopping", "Learn how to code"];
window.addEventListener("load", function () {
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
    var trash = document.querySelector("#trash");
    function deleteTask() {
        console.log("löschen");
        toDos.splice(1);
    }
    document.querySelector("#trash").addEventListener("click", function () { deleteTask(); });
});
function toDoList() {
    document.querySelector("#todos").innerHTML = "";
    for (var index = 0; index < toDos.length; index++) {
        document.querySelector("#todos").innerHTML += "<p>" + "<i class = 'far fa-circle'></i>" + "<label class='container'><input type='checkbox'><span class='checkmark'></span></label>" + "<span class='todotask'>" + toDos[index] + "</span>" + "<i class = 'far fa-trash-alt' id = 'trash'></i>" + "</p>";
    }
    document.querySelector("#tasknumber").innerHTML = "" + toDos.length;
}
/*window.addEventListener("load", init);

let container: HTMLElement;

function init(): void {
    container = document.createElement("div");
    container.addEventListener("click", handleClick);
    let button: HTMLButtonElement = document.createElement("button");
    button.textContent = "Push me!";
    document.body.appendChild(container);
}

function handleClick(_event: Event) {
    let element: HTMLButtonElement = <HTMLButtonElement>event.target;
    console.log(element);
}*/ 
//# sourceMappingURL=script.js.map