
var toDos: string [] = ["Go grocery shopping", "Learn how to code"];

var todoFrame: HTMLElement;

window.addEventListener("load", function(): void {
    
    todoFrame = document.querySelector("#todos");
    toDoList();
   
    var input: HTMLInputElement = document.querySelector("#input");
    document.querySelector("#add").addEventListener("click", function (): void {
        
            toDos.push(input.value);
            input.value = "";
            console.log("input");
            toDoList();
    });

    input.addEventListener("keydown", function(e) {
        if (e.keyCode === 13) {
            toDos.push(input.value);
            input.value = "";
            console.log("input");
            toDoList();
        }
    });

});



function toDoList(): void {

    todoFrame.innerHTML = "";
    for (var index: number = 0; index < toDos.length; index++) {
        var todoContainer: HTMLElement = document.createElement("div");
        todoContainer.classList.add("todo");
        todoContainer.innerHTML +=  "<p>" +  "<i class = 'far fa-circle'></i>" + "<label class='container'><input type='checkbox'><span class='checkmark'></span></label>" + "<span class='todotask'>" + toDos[index] + "</span>" + "<i class = 'far fa-trash-alt' ></i>" + "</p>";

        todoContainer.querySelector(".fa-trash-alt").addEventListener("click", function(): void {
                console.log("löschen");
                toDos.splice(index, 1);
                toDoList();
    
        });

        todoFrame.appendChild(todoContainer);
    }

    document.querySelector("#tasknumber").innerHTML = "" + toDos.length;
}


