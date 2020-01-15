/**
 * Die ToDos werden in dem Array todosText gespeichert
 * Jedes ToDo hat aber, neben dem ToDo-Text, einen zweiten
 * Wert, nämlich ob es erledigt ist oder nicht
 * (checked / unchecked). Der Einsatz von einem eindimensionalen
 * Array ermöglicht aber nur, dass wir ein Wert nach dem anderen auflisten.
 * Den zweiten Wert zu einem ToDo speichern wir also in einem
 * zweiten Array. Beide Arrays beinhalten also Infos zu einem ToDo,
 * den ToDo-Text und den Erledigtstatus eines ToDos. Die entsprechende
 * Stelle eines ToDos zeigt jetzt in den Arrays auf die entsprechenden
 * Werte, bspw. Stelle 0 im Array todosText und Stelle 0 im Array
 * todosChecked gehören zusammen zu einem ToDo.
 */

interface ToDoList {
    todosText: string;
    todosChecked: boolean;
}

let index: number = 0;

var listObject: ToDoList[] = [
    {
        todosText: "Lorem",
        todosChecked: true
    },
    {
        todosText: "Ipsum",
        todosChecked: false
    },
    {
        todosText: "Dolor",
        todosChecked: false
    }
];


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


    const artyom: any = new Artyom();
    
    artyom.addCommands({
        indexes: ["erstelle Aufgabe", "neue Aufgabe"],
        smart: true,
        action: function(i: any, wildcard: string): void {
            alert("Erstelle Aufgabe: " +  wildcard);
        }
    });
    
    function startContinuousArtyom(): void {
        artyom.fatality();
    
        setTimeout(
            function(): void {
                artyom.initialize({
                    lang: "de-DE",
                    continuous: true,
                    listen: true,
                    interimResults: true,
                    debug: true
                }).then(function(): void {
                    console.log("Ready!");
                });
            }, 
            250);
    }
    
    startContinuousArtyom();

});

function drawListToDOM(): void {
    todosDOMElement.innerHTML = "";

    for (let index: number = 0; index < listObject.length; index++) {

        let todo: HTMLElement = document.createElement("div");
        todo.classList.add("todo");

        todo.innerHTML =  "<span class='check " + listObject[index].todosChecked + "'><i class='fas fa-check'></i></span>"
                            + listObject[index].todosText +
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
    var toDoDone: number = 0;
    var toDoOpen: number = 0;

    for (let index: number = 0; index < listObject.length; index++) {
        if (listObject[index].todosChecked == true) {
            toDoDone++;
        } else {
            toDoOpen++;
        }
        
    }

    counterDOMElement.innerHTML = listObject.length + " in total | " + toDoDone + " done | " + toDoOpen + " open";
    
}

function addTodo(): void {
   
    if (inputDOMElement.value != "") {
       
    listObject.unshift( 
        {
            todosText: inputDOMElement.value,
            todosChecked: false
        }
    );    
        
    inputDOMElement.value = "";
    drawListToDOM();
    }
}

function toggleCheckState(index: number): void {

    listObject[index].todosChecked = !listObject[index].todosChecked;

    drawListToDOM();
}


function deleteTodo(index: number): void {
    
    listObject.splice(index, 1);
    
    drawListToDOM();
}