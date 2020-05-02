let sequences: string[] = ["Gänseblümchen", "Hochhauskomplex", "Bananarama", "Hungerhaken", "Papperlapapp", "Tohuwabohu", "Kaulquappe", "Ratzefummel"]
let watchtime: string;
let playtime: string;
let sequence: string;

let random: HTMLElement;
let playbutton: HTMLElement;
let inputSequence: HTMLInputElement;
let inputSequenceButton: HTMLElement;
let inputWatchtime: HTMLInputElement;
let inputPlaytime: HTMLInputElement;
let currentSequence: HTMLElement;
let memoryCards: HTMLElement;
let showWatchtime: HTMLElement;
let showPlaytime: HTMLElement;


function chooseWord(): void {
    sequence = inputSequence.value;
    memoryCards.innerHTML = "";
    inputSequenceButton.setAttribute("style", "color: darkgreen");
}

function randomWord(): void {
    console.log("Ich wurde geklickt. Jetzt such dir ein Wort aus:");
    console.log(sequences);

    var tmp, rand;
    for (var i: number = 0; i < sequences.length; i++) {
    rand = Math.floor(Math.random() * sequences.length);
    tmp = sequences[i]; 
    sequences[i] = sequences[rand]; 
    sequences[rand] = tmp;
    }
    console.log(sequences);

    sequence = sequences[1];
    memoryCards.innerHTML = "";
}

/*function showPlaybutton(): void {
    if (inputPlaytime.value == "") {
        playbutton.setAttribute("style", "display: none");
    } else {
        playbutton.setAttribute("style", "display: ");
    }
}*/

function startGame(): void {
    console.log("Let's play!");

    currentSequence.innerHTML = sequence;
    watchtime = inputWatchtime.value;
    playtime = inputPlaytime.value;

    var singleLetters: string[] = sequence.split("");
    
    var tmp, rand;
    for (var i: number = 0; i < singleLetters.length; i++) {
        rand = Math.floor(Math.random() * singleLetters.length);
        tmp = singleLetters[i]; 
        singleLetters[i] = singleLetters[rand]; 
        singleLetters[rand] = tmp;
        }
    console.log(singleLetters);

    for (let i: number = 0; i < singleLetters.length; i++) {
        memoryCards.innerHTML += "<span class='cards carddown'>" + singleLetters[i] + "</span>";
    }
    
    memoryCards.addEventListener("click", clickCard);

    showWatchtime.innerHTML = watchtime + " sec";
    showPlaytime.innerHTML = playtime + " sec";

    /*setTimeout(function(): void {
        var cards = memoryCards.childNodes;
        cards.style.backgroundColor = "black";
        
    }, watchtime);*/

    window.setTimeout(alertFunc, 6000);
    function alertFunc(): void {
        alert("Na, auch schon gemerkt, dass das Spiel nicht funktioniert? :) Du kannst wieder gehen. Aufregender wirds nicht. Immerhin das TimeOut hat geklappt, wenn auch nicht so, wie gewollt...");
    }

}

function clickCard(): void {
    console.log(event.target);
    var clickedCard: HTMLElement = event.target;
    clickedCard.setAttribute("class", "cardup");
    
}


window.addEventListener("load", function(): void {

    console.log("script verknüpft");

    random = <HTMLElement>document.querySelector("#randombutton");
    playbutton = <HTMLElement>document.querySelector("#playbutton");
    inputSequence = <HTMLInputElement>document.querySelector("#inputSequence");
    inputSequenceButton = <HTMLElement>document.querySelector(".fas");
    inputWatchtime = <HTMLInputElement>document.querySelector("#inputWatchTime");
    inputPlaytime = <HTMLInputElement>document.querySelector("#inputPlayTime");
    currentSequence = <HTMLElement>document.querySelector("#word");
    memoryCards = <HTMLElement>document.querySelector("#memoryCards");
    showWatchtime = <HTMLElement>document.querySelector("#watchTime");
    showPlaytime = <HTMLElement>document.querySelector("#playTime");

    inputSequenceButton.addEventListener("click", chooseWord);
    random.addEventListener("click", randomWord);
    playbutton.addEventListener("click", startGame);

    //showPlaybutton();
    

});
