"use strict";
let sequences = ["Gänseblümchen", "Hochhauskomplex", "Bananarama", "Hungerhaken", "Papperlapapp", "Tohuwabohu", "Kaulquappe", "Ratzefummel"];
let watchtime;
let playtime;
let sequence;
let random;
let playbutton;
let inputSequence;
let inputSequenceButton;
let inputWatchtime;
let inputPlaytime;
let currentSequence;
let memoryCards;
let showWatchtime;
let showPlaytime;
function chooseWord() {
    sequence = inputSequence.value;
    memoryCards.innerHTML = "";
    inputSequenceButton.setAttribute("style", "color: darkgreen");
}
function randomWord() {
    console.log("Ich wurde geklickt. Jetzt such dir ein Wort aus:");
    console.log(sequences);
    var tmp, rand;
    for (var i = 0; i < sequences.length; i++) {
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
function startGame() {
    console.log("Let's play!");
    currentSequence.innerHTML = sequence;
    watchtime = inputWatchtime.value;
    playtime = inputPlaytime.value;
    var singleLetters = sequence.split("");
    var tmp, rand;
    for (var i = 0; i < singleLetters.length; i++) {
        rand = Math.floor(Math.random() * singleLetters.length);
        tmp = singleLetters[i];
        singleLetters[i] = singleLetters[rand];
        singleLetters[rand] = tmp;
    }
    console.log(singleLetters);
    for (let i = 0; i < singleLetters.length; i++) {
        memoryCards.innerHTML += "<span class='cards carddown'>" + singleLetters[i] + "</span>";
    }
    /*memoryCards.addEventListener("click", clickCard);*/
    showWatchtime.innerHTML = watchtime + " sec";
    showPlaytime.innerHTML = playtime + " sec";
    /*setTimeout(function(): void {
        var cards = memoryCards.childNodes;
        cards.style.backgroundColor = "black";
        
    }, watchtime);*/
    window.setTimeout(alertFunc, 6000);
    function alertFunc() {
        alert("Na, auch schon gemerkt, dass das Spiel nicht funktioniert? :) Du kannst wieder gehen. Aufregender wirds nicht. Immerhin das TimeOut hat geklappt, wenn auch nicht so, wie gewollt...");
    }
}
/*function clickCard(): void {
    console.log(event.target);
    var clickedCard: HTMLElement = event.target;
    clickedCard.setAttribute("class", "cardup");
    
}*/
window.addEventListener("load", function () {
    console.log("script verknüpft");
    random = document.querySelector("#randombutton");
    playbutton = document.querySelector("#playbutton");
    inputSequence = document.querySelector("#inputSequence");
    inputSequenceButton = document.querySelector(".fas");
    inputWatchtime = document.querySelector("#inputWatchTime");
    inputPlaytime = document.querySelector("#inputPlayTime");
    currentSequence = document.querySelector("#word");
    memoryCards = document.querySelector("#memoryCards");
    showWatchtime = document.querySelector("#watchTime");
    showPlaytime = document.querySelector("#playTime");
    inputSequenceButton.addEventListener("click", chooseWord);
    random.addEventListener("click", randomWord);
    playbutton.addEventListener("click", startGame);
    //showPlaybutton();
});
//# sourceMappingURL=Sequenzmemory.js.map