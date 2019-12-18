
var toDos: string [] = ["Kochen", "Putzen", "Training"];

window.addEventListener("load", function(): void {

    document.querySelector("#tasknumber").innerHTML = "" + toDos.length;

    toDoList();
   
    var input: HTMLInputElement = document.querySelector("#input");
    document.querySelector("#add").addEventListener("click", function (): void {
        
            toDos.push(input.value);
            input.value = "";
            console.log("huhu");
            toDoList();
    });

});

function toDoList(): void {
    document.querySelector("#todos").innerHTML = "";
    for (var index: number = 0; index < toDos.length; index++) {
        document.querySelector("#todos").innerHTML += "<p>" + toDos[index] + "</p>";
    }
}