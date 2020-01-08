
var toDos: string [] = ["Kochen", "Putzen"];

window.addEventListener("load", function(): void {

    toDoList();
   
    var input: HTMLInputElement = document.querySelector("#input");
    document.querySelector("#add").addEventListener("click", function (): void {
        
            toDos.push(input.value);
            input.value = "";
            console.log("input");
            toDoList();
    });


    var checkButton: HTMLElement = document.querySelector("#check");
    function taskCheck(): void {

        if (checkButton.getAttribute("style") == "opacity: 1") {
            checkButton.setAttribute("style", "opacity: 0");
        } else {
            checkButton.setAttribute("style", "opacity: 1");
        }

    }    

    document.querySelector("#check").addEventListener("click", function(): void {taskCheck(); });

    document.querySelector("#trash").addEventListener("click", function(): void {deleteTask(); });
});


function toDoList(): void {

    document.querySelector("#todos").innerHTML = "";
    for (var index: number = 0; index < toDos.length; index++) {
        document.querySelector("#todos").innerHTML += "<p>" + "<i class='far fa-circle'></i>" + "<i class='far fa-check' id='check'></i>" + toDos[index] + "<i class = 'far fa-trash-alt' id = 'trash'></i>" + "</p>";
    }

    document.querySelector("#tasknumber").innerHTML = "" + toDos.length;

}


function deleteTask(): void {
    console.log("löschen");
}


