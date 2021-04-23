"use strict";
var Memory;
(function (Memory) {
    console.log("script connected");
    window.addEventListener("load", handleLoad);
    let pairs;
    let values = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let cardDeckValues = [];
    let turnedCards = 0;
    //let finishedPairs: number = 0;
    let timer = 0;
    function handleLoad() {
        console.log("handleLoad executed");
        let pairsDisplay = document.querySelector(".pairs");
        let pairsInput = prompt("Anzahl der gewünschten Karenpaare:", "wähle eine Zahl von 5-25");
        pairs = Number(pairsInput);
        pairsDisplay.innerHTML = "" + pairs;
        let startButton = document.querySelector("div.button");
        startButton.addEventListener("click", handleStart);
    }
    function handleStart() {
        console.log("game started");
        //select pairs-amount of the card content values (letters A-Y) randomly
        for (let index = 0; index <= pairs - 1; index++) {
            cardDeckValues.push(values[index]);
            cardDeckValues.push(values[index]);
        }
        console.log(cardDeckValues);
        createCards();
        setInterval(startTimer(), 1000);
    }
    function createCards() {
        console.log("cards created");
        let playingField = document.querySelector("div.playingfield");
        shuffleCards();
        for (let index = 0; index < cardDeckValues.length; index++) {
            //let randomId: number = Math.random() * 1000;
            //let randomIdText: string = "" + randomId.toFixed(0);
            let idText = "" + index;
            playingField.innerHTML += "<span class='turned' id='" + idText + "'>" + cardDeckValues[index] + "</span>";
            let cardWithId = document.getElementById(idText);
            cardWithId.addEventListener("click", turnCards);
            console.log(idText);
        }
    }
    function startTimer() {
        timer += 1;
        console.log(timer);
    }
    function shuffleCards() {
        var tmp, rand;
        for (let index = 0; index < cardDeckValues.length; index++) {
            rand = Math.floor(Math.random() * cardDeckValues.length);
            tmp = cardDeckValues[index];
            cardDeckValues[index] = cardDeckValues[rand];
            cardDeckValues[rand] = tmp;
        }
        console.log("cards shuffled");
    }
    function turnCards(_event) {
        console.log(_event.target);
        let clickedCard = _event.target;
        if (clickedCard.classList.contains("turned")) {
            clickedCard.classList.toggle("turned", false);
            clickedCard.classList.toggle("visible", true);
        }
        else {
            clickedCard.classList.toggle("visible", false);
            clickedCard.classList.toggle("turned", true);
        }
        turnedCards++;
        if (turnedCards == 2) {
            setTimeout(compareCards, 2000);
        }
        else if (turnedCards >= 2) {
            turnedCards = 1;
        }
    }
    function compareCards() {
        console.log("comparing cards...");
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=MemoryScript.js.map