"use strict";
var Memory;
(function (Memory) {
    console.log("script connected");
    window.addEventListener("load", handleLoad);
    let pairs;
    let values = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let cardDeckValues = [];
    let turnedCards = 0;
    let finishedPairs = 0;
    let timer = 0;
    let gameDuration;
    let pairsDisplay;
    let startButton;
    let stopButton;
    let playingField;
    let link;
    let clickedCard;
    let clickedCard1;
    let singleCard;
    let pairsInput;
    let firstCard;
    let secondCard;
    function handleLoad() {
        console.log("handleLoad executed");
        choosePairAmount();
        startButton = document.querySelector("div.startbutton");
        startButton.addEventListener("click", handleStart);
        link = document.querySelector("a");
        link.addEventListener("click", function () {
            choosePairAmount();
        });
    }
    function choosePairAmount() {
        pairsDisplay = document.querySelector(".pairs");
        pairsInput = prompt("Anzahl der gewünschten Karenpaare:", "Wähle eine Zahl von 5-25");
        pairs = Number(pairsInput);
        if (pairs < 5 || pairs > 25) {
            alert("Bitte gib eine Zahl zwischen 5-25 an.");
            pairs = 5;
        }
        pairsDisplay.innerHTML = "" + pairs;
        //Abfrage ob pairs eine number ist und ob es zwischen 5 und 25 liegt, wenn nicht error alert
    }
    function handleStart() {
        console.log("game started");
        //select pairs-amount of the card content values (letters A-Y) randomly
        for (let index = 0; index <= pairs - 1; index++) {
            cardDeckValues.push(values[index]);
            cardDeckValues.push(values[index]);
        }
        //console.log(cardDeckValues);
        createCards();
        gameDuration = setInterval(startTimer, 1000);
        stopButton = document.querySelector("div.stopbutton");
        stopButton.addEventListener("click", stopGame);
    }
    function createCards() {
        console.log("cards created");
        shuffleCards();
        playingField = document.querySelector("div.playingfield");
        for (let index = 0; index < cardDeckValues.length; index++) {
            singleCard = document.createElement("span");
            singleCard.classList.add("turned");
            singleCard.innerHTML = "" + cardDeckValues[index];
            playingField.appendChild(singleCard);
            singleCard.addEventListener("click", turnCards);
        }
    }
    function startTimer() {
        timer += 1;
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
        //console.log(_event.target);
        clickedCard = _event.target;
        if (clickedCard.classList.contains("turned")) {
            clickedCard.classList.toggle("turned", false);
            clickedCard.classList.toggle("visible", true);
        }
        else {
            clickedCard.classList.toggle("visible", false);
            clickedCard.classList.toggle("turned", true);
        }
        turnedCards++;
        if (turnedCards == 1) {
            clickedCard1 = _event.target;
            firstCard = clickedCard1.innerText;
            console.log("first card: " + firstCard);
        }
        else if (turnedCards == 2) {
            setTimeout(compareCards, 2000);
            secondCard = clickedCard.innerText;
            console.log("second card: " + secondCard);
        }
        else if (turnedCards > 2) {
            //turnedCards = 1;
        }
        console.log("first card: " + firstCard);
        console.log("second card: " + secondCard);
    }
    function compareCards() {
        console.log("comparing cards...");
        if (firstCard == secondCard) {
            clickedCard1.classList.toggle("visible", false);
            clickedCard1.classList.toggle("invisible", true);
            clickedCard.classList.toggle("visible", false);
            clickedCard.classList.toggle("invisible", true);
            turnedCards = 0;
            finishedPairs++;
            console.log("cards matched.");
        }
        else if (firstCard != secondCard) {
            clickedCard1.classList.toggle("visible", false);
            clickedCard1.classList.toggle("turned", true);
            clickedCard.classList.toggle("visible", false);
            clickedCard.classList.toggle("turned", true);
            turnedCards = 0;
            console.log("no match!");
        }
        if (finishedPairs == pairs) {
            stopGame();
        }
        console.log(clickedCard);
    }
    function stopGame() {
        clearInterval(gameDuration);
        resetGame();
        alert("Das Spiel ist beendet. Deine benötigte Zeit war: " + timer + " Sekunden");
    }
    function resetGame() {
        playingField = document.querySelector("div.playingfield");
        playingField.innerHTML = "";
        console.log("reset - game duration: " + timer + " s");
        cardDeckValues = [];
    }
})(Memory || (Memory = {}));
//# sourceMappingURL=MemoryScript.js.map