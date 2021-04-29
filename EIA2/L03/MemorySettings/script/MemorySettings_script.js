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
    //let cardContent: HTMLSpanElement;
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        playingField = document.querySelector("div#playingfield");
        sizePicker = document.querySelector("input#cardsize");
        exampleCard = document.querySelector("div#examplecard");
        startButton = document.querySelector("div#startbutton");
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
    }
    function startTimer() {
        timer += 1;
    }
    function createCards() {
        shuffleCards();
        for (let i = 0; i < cardDeckValues.length; i++) {
            singleCard = document.createElement("span");
            singleCard.classList.add("turned");
            //cardContent = document.createElement("span");
            //cardContent.innerHTML = "" + cardDeckValues[i];
            if (cardSize == "1") {
                singleCard.classList.remove("medium", "big");
                singleCard.classList.add("small");
                //cardContent.classList.remove("medium", "big");
                //cardContent.classList.add("small");
            }
            else if (cardSize == "2") {
                singleCard.classList.remove("small", "big");
                singleCard.classList.add("medium");
                //cardContent.classList.remove("small", "big");
                //cardContent.classList.add("medium");
            }
            else if (cardSize == "3") {
                singleCard.classList.remove("small", "medium");
                singleCard.classList.add("big");
            }
            playingField.appendChild(singleCard);
            //cardContent.classList.add("turned");
            //cardContent.style.visibility = "hidden";
            //singleCard.appendChild(cardContent);
            singleCard.innerHTML = "" + cardDeckValues[i];
            singleCard.addEventListener("click", turnCards);
            singleCard.addEventListener("pointerup", turnCards);
            //cardContent.addEventListener("click", turnCards);
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
        if (clickedCard.classList.contains("turned")) {
            clickedCard.classList.toggle("turned", false);
            clickedCard.classList.toggle("visible", true);
            clickedCard.style.color = fontColour;
            clickedCard.style.backgroundColor = cardColour;
            clickedCard.style.fontFamily = font;
            //var cardContent: NodeListOf<ChildNode> = clickedCard.childNodes;
            //cardContent[0].style.display = none;
            //let cardContentElement = cardContent[0];
        }
        else {
            clickedCard.classList.toggle("visible", false);
            clickedCard.classList.toggle("turned", true);
            clickedCard.style.color = "#ff7f50";
            clickedCard.style.backgroundColor = "#ff7f50";
            //get child of clickedCard and add class "contentHidden"
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
            clickedCard1.style.color = "";
            clickedCard1.style.backgroundColor = "";
            clickedCard1.classList.toggle("visible", false);
            clickedCard1.classList.toggle("turned", true);
            clickedCard.style.color = "";
            clickedCard.style.backgroundColor = "";
            clickedCard.classList.toggle("visible", false);
            clickedCard.classList.toggle("turned", true);
            turnedCards = 0;
            console.log("no match!");
        }
        if (finishedPairs == pairs) {
            stopGame();
        }
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