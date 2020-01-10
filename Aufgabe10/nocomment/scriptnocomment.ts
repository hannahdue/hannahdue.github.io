
var todosText: string[] =       ["Lorem" , "Ipsum" , "Dolor"];
var todosChecked: boolean[] =    [true    , false   , false];

var inputDOMElement: HTMLInputElement;
var addButtonDOMElement: HTMLElement;
var todosDOMElement: HTMLElement;
var counterDOMElement: HTMLElement;


window.addEventListener("load", function(): void {

    
    inputDOMElement = document.querySelector("#inputTodo");
    addButtonDOMElement = document.querySelector("#addButton");
    todosDOMElement = document.querySelector("#todos");
    counterDOMElement = document.querySelector("#counter");
   
    addButtonDOMElement.addEventListener("click", addTodo);

    drawListToDOM();
});


function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < todosText.length; index++) {
        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + todosChecked[index] + "'><i class='fas fa-check'></i></span>"
                            + todosText[index] +
                            "<span class='trash fas fa-trash-alt'></span>";

        todo.querySelector(".check").addEventListener("click", function(): void {
            toggleCheckState(index);
        });

        todo.querySelector(".trash").addEventListener("click", function(): void {
            deleteTodo(index);
        });

        todosDOMElement.appendChild(todo);
    }

    updateCounter();
}


function updateCounter(): void {
    counterDOMElement.innerHTML = todosText.length + " in total";
}


function addTodo(): void {
   
    if (inputDOMElement.value != "") {
        todosText.push(inputDOMElement.value);
        todosChecked.push(false);
        inputDOMElement.value = "";

        drawListToDOM();
    }
}


function toggleCheckState(index: number): void {
    todosChecked[index] = !todosChecked[index];
    drawListToDOM();
}


function deleteTodo(index: number): void {
    todosText.splice(index, 1);
    todosChecked.splice(index, 1);
    drawListToDOM();
}