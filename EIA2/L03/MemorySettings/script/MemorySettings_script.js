"use strict";
console.log("Start");
var MemorySettings;
(function (MemorySettings) {
    let pairs = 5;
    let values = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let cardDeckValues = [];
    let cardSize = "2";
    let turnedCards = 0;
    let finishedPairs = 0;
    let timer;
    let gameDuration;
    let firstCard;
    let secondCard;
    let backgroundColour = "#ffffcc";
    let cardColour = "#3399ff";
    let fontColour = "#ffffff";
    let font = "Impact";
    let playingField;
    let sizePicker;
    let exampleCard;
    let startButton;
    let clickedCard;
    let clickedCard1;
    let singleCard;
    let cardContent;
    let card;
    let card1;
    let comparisonDisplay;
    let cardsInField;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        playingField = document.querySelector("div#playingfield");
        sizePicker = document.querySelector("input#cardsize");
        exampleCard = document.querySelector("div#examplecard");
        startButton = document.querySelector("div#startbutton");
        comparisonDisplay = document.querySelector("div#comparisondisplay");
        let fieldsets = document.querySelectorAll("fieldset");
        sizePicker.addEventListener("input", displayCardsize);
        startButton.addEventListener("click", startGame);
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }
    }
    function displayCardsize(_event) {
        let target = _event.target;
        cardSize = target.value;
        if (cardSize == "1") {
            exampleCard.classList.remove("medium", "big");
            exampleCard.classList.add("small");
        }
        else if (cardSize == "2") {
            exampleCard.classList.remove("small", "big");
            exampleCard.classList.add("medium");
        }
        else if (cardSize == "3") {
            exampleCard.classList.remove("small", "medium");
            exampleCard.classList.add("big");
        }
    }
    function handleChange() {
        let formData = new FormData(document.forms[0]);
        pairs = Number(formData.get("Pairs"));
        cardSize = formData.get("Size");
        backgroundColour = formData.get("Backgroundcolour");
        let body = document.querySelector("body");
        body.style.backgroundColor = backgroundColour;
        cardColour = formData.get("Cardcolour");
        exampleCard.style.backgroundColor = cardColour;
        fontColour = formData.get("Fontcolour");
        exampleCard.style.color = fontColour;
        font = formData.get("Font");
        exampleCard.style.fontFamily = font;
    }
    function startGame() {
        let settings = document.querySelector("div#settings");
        settings.style.display = "none";
        for (let i = 0; i <= pairs - 1; i++) {
            cardDeckValues.push(values[i]);
            cardDeckValues.push(values[i]);
        }
        createCards();
        timer = 0;
        gameDuration = setInterval(startTimer, 1000);
        comparisonDisplay.innerHTML = "Choose two cards.";
    }
    function startTimer() {
        timer += 1;
    }
    function createCards() {
        shuffleCards();
        for (let i = 0; i < cardDeckValues.length; i++) {
            singleCard = document.createElement("span");
            singleCard.classList.add("turned");
            singleCard.style.border = "solid black";
            singleCard.style.borderRadius = "15px";
            singleCard.style.backgroundColor = "#ff7f50";
            cardContent = document.createElement("span");
            cardContent.innerHTML = cardDeckValues[i];
            cardContent.classList.add("cardcontent");
            if (cardSize == "1") {
                singleCard.classList.remove("medium", "big");
                singleCard.classList.add("small");
                cardContent.classList.remove("medium", "big");
                cardContent.classList.add("small");
            }
            else if (cardSize == "2") {
                singleCard.classList.remove("small", "big");
                singleCard.classList.add("medium");
                cardContent.classList.remove("small", "big");
                cardContent.classList.add("medium");
            }
            else if (cardSize == "3") {
                singleCard.classList.remove("small", "medium");
                singleCard.classList.add("big");
                cardContent.classList.remove("small", "medium");
                cardContent.classList.add("big");
            }
            playingField.appendChild(singleCard);
            cardContent.style.opacity = "0";
            cardContent.style.display = "inline-block";
            singleCard.appendChild(cardContent);
            cardContent.addEventListener("click", turnCards);
            cardContent.addEventListener("pointerup", turnCards);
        }
    }
    function shuffleCards() {
        let tmp, rand;
        for (let i = 0; i < cardDeckValues.length; i++) {
            rand = Math.floor(Math.random() * cardDeckValues.length);
            tmp = cardDeckValues[i];
            cardDeckValues[i] = cardDeckValues[rand];
            cardDeckValues[rand] = tmp;
        }
        console.log("cards shuffled");
    }
    function turnCards(_event) {
        clickedCard = _event.target;
        clickedCard.removeEventListener("click", turnCards);
        card = clickedCard.parentElement;
        if (card.classList.contains("turned")) {
            card.classList.toggle("turned", false);
            card.classList.toggle("visible", true);
            clickedCard.style.opacity = "1";
            clickedCard.style.color = fontColour;
            card.style.backgroundColor = cardColour;
            clickedCard.style.fontFamily = font;
        }
        else if (card.classList.contains("visible")) {
            card.classList.toggle("visible", false);
            card.classList.toggle("turned", true);
            clickedCard.style.opacity = "0";
            card.style.backgroundColor = "#ff7f50";
        }
        turnedCards++;
        if (turnedCards == 1) {
            clickedCard1 = _event.target;
            card1 = clickedCard1.parentElement;
            firstCard = clickedCard1.innerText;
            console.log("first card: " + firstCard);
        }
        else if (turnedCards == 2) {
            cardsInField = document.querySelectorAll(".cardcontent");
            for (let index = 0; index < cardsInField.length; index++) {
                cardsInField[index].removeEventListener("click", turnCards);
            }
            setTimeout(compareCards, 2000);
            comparisonDisplay.innerHTML = "Comparing cards...";
            secondCard = clickedCard.innerText;
            console.log("second card: " + secondCard);
        }
    }
    function compareCards() {
        console.log("comparing cards...");
        if (firstCard == secondCard) {
            card1.classList.toggle("visible", false);
            card1.classList.toggle("invisible", true);
            card.classList.toggle("visible", false);
            card.classList.toggle("invisible", true);
            turnedCards = 0;
            finishedPairs++;
            comparisonDisplay.innerHTML = "Match!";
            console.log("cards matched.");
        }
        else if (firstCard != secondCard) {
            clickedCard1.style.opacity = "0";
            card1.classList.toggle("visible", false);
            card1.classList.toggle("turned", true);
            card1.style.backgroundColor = "#ff7f50";
            clickedCard.style.opacity = "0";
            card.classList.toggle("visible", false);
            card.classList.toggle("turned", true);
            card.style.backgroundColor = "#ff7f50";
            turnedCards = 0;
            clickedCard1.addEventListener("click", turnCards);
            clickedCard.addEventListener("click", turnCards);
            comparisonDisplay.innerHTML = "No match!";
            console.log("no match!");
        }
        if (finishedPairs == pairs) {
            stopGame();
            comparisonDisplay.innerHTML = "";
        }
        cardsInField = document.querySelectorAll(".cardcontent");
        for (let index = 0; index < cardsInField.length; index++) {
            cardsInField[index].addEventListener("click", turnCards);
        }
        setTimeout(function () {
            comparisonDisplay.innerHTML = "Choose two cards.";
        }, 1200);
    }
    function stopGame() {
        clearInterval(gameDuration);
        alert("Das Spiel ist beendet. Deine benötigte Zeit war: " + timer + " Sekunden");
        resetGame();
        timer = 0;
    }
    function resetGame() {
        playingField = document.querySelector("div#playingfield");
        playingField.innerHTML = "<a href='MemorySettings.html'>Back to start</a>";
        cardDeckValues = [];
    }
})(MemorySettings || (MemorySettings = {}));
//# sourceMappingURL=MemorySettings_script.js.map