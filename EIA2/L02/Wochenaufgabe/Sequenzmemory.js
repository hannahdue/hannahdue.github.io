"use strict";
let sequences = ["Gänseblümchen", "Hochhauskomplex", "Bananarama", "Hungerhaken", "Papperlapapp", "Tohuwabohu", "Verschlimmbesserung", "Kaulquappe", "Ratzefummel"];
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
function chooseWord() {
    sequence = inputSequence.value;
}
function randomButton() {
    console.log("Ich wurde geklickt. Jetzt such dir ein Wort aus:");
    console.log(sequences);
    shuffleSequences();
}
function shuffleSequences() {
    var tmp, rand;
    for (var i = 0; i < sequences.length; i++) {
        rand = Math.floor(Math.random() * sequences.length);
        tmp = sequences[i];
        sequences[i] = sequences[rand];
        sequences[rand] = tmp;
    }
    console.log(sequences);
    sequence = sequences[1];
}
/*function showPlaybutton(): void {
    if (inputPlaytime.value == "") {
        playbutton.setAttribute("style", "display: none");
    } else {
        playbutton.setAttribute("style", "display: ");
    }
}*/
function playButton() {
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
}
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
    inputSequenceButton.addEventListener("click", chooseWord);
    random.addEventListener("click", randomButton);
    playbutton.addEventListener("click", playButton);
    //showPlaybutton();
});
//# sourceMappingURL=Sequenzmemory.js.map