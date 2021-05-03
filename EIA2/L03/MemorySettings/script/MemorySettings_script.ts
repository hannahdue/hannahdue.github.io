console.log("Start");

namespace MemorySettings {

    let pairs: number = 5;
    let values: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let cardDeckValues: string[] = [];
    let cardSize: string = "2";
    let turnedCards: number = 0;
    let finishedPairs: number = 0;
    let timer: number;
    let gameDuration: number;
    let firstCard: string;
    let secondCard: string;

    let backgroundColour: string = "#ffffcc";
    let cardColour: string = "#3399ff";
    let fontColour: string = "#ffffff";
    let font: string = "Impact";

    let playingField: HTMLDivElement;
    let sizePicker: HTMLInputElement;
    let exampleCard: HTMLDivElement;
    let startButton: HTMLElement;
    let clickedCard: HTMLElement;
    let clickedCard1: HTMLElement;
    let singleCard: HTMLElement;
    let cardContent: HTMLSpanElement;
    let card: HTMLElement;
    let card1: HTMLElement;
    let comparisonDisplay: HTMLDivElement;

    let cardsInField: NodeList;

    window.addEventListener("load", handleLoad);

    function handleLoad(): void {

        playingField = <HTMLDivElement>document.querySelector("div#playingfield");
        sizePicker = <HTMLInputElement>document.querySelector("input#cardsize");
        exampleCard = <HTMLDivElement>document.querySelector("div#examplecard");
        startButton = <HTMLElement>document.querySelector("div#startbutton");
        comparisonDisplay = <HTMLDivElement>document.querySelector("div#comparisondisplay");
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.querySelectorAll("fieldset");

        sizePicker.addEventListener("input", displayCardsize);
        startButton.addEventListener("click", startGame);

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
        }

    }

    function displayCardsize(_event: Event): void {

        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        cardSize = target.value;

        if (cardSize == "1") {
            exampleCard.classList.remove("medium", "big");
            exampleCard.classList.add("small");
        } else if (cardSize == "2") {
            exampleCard.classList.remove("small", "big");
            exampleCard.classList.add("medium");
        } else if (cardSize == "3") {
            exampleCard.classList.remove("small", "medium");
            exampleCard.classList.add("big");
        }

    }

    function handleChange(): void {

        let formData: FormData = new FormData(document.forms[0]);

        pairs = Number(formData.get("Pairs"));

        cardSize = <string>formData.get("Size");

        backgroundColour = <string>formData.get("Backgroundcolour");
        let body: HTMLElement = <HTMLElement>document.querySelector("body");
        body.style.backgroundColor = backgroundColour;

        cardColour = <string>formData.get("Cardcolour");
        exampleCard.style.backgroundColor = cardColour;

        fontColour = <string>formData.get("Fontcolour");
        exampleCard.style.color = fontColour;

        font = <string>formData.get("Font");
        exampleCard.style.fontFamily = font;

    }

    function startGame(): void {

        let settings: HTMLDivElement = <HTMLDivElement>document.querySelector("div#settings");
        settings.style.display = "none";

        for (let i: number = 0; i <= pairs - 1; i++) {
            cardDeckValues.push(values[i]);
            cardDeckValues.push(values[i]);
        }

        createCards();

        timer = 0;
        gameDuration = setInterval(startTimer, 1000);
        comparisonDisplay.innerHTML = "Choose two cards.";

    }

    function startTimer(): void {
        timer += 1;
    }

    function createCards(): void {

        shuffleCards();

        for (let i: number = 0; i < cardDeckValues.length; i++) {

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
            } else if (cardSize == "2") {
                singleCard.classList.remove("small", "big");
                singleCard.classList.add("medium");

                cardContent.classList.remove("small", "big");
                cardContent.classList.add("medium");
            } else if (cardSize == "3") {
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

        }

    }

    function shuffleCards(): void {

        let tmp, rand;

        for (let i: number = 0; i < cardDeckValues.length; i++) {
            rand = Math.floor(Math.random() * cardDeckValues.length);
            tmp = cardDeckValues[i];
            cardDeckValues[i] = cardDeckValues[rand];
            cardDeckValues[rand] = tmp;
        }

        console.log("cards shuffled");

    }

    function turnCards(_event: Event): void {

        clickedCard = <HTMLElement>_event.target;
        clickedCard.removeEventListener("click", turnCards);
        card = <HTMLElement>clickedCard.parentElement;

        if (card.classList.contains("turned")) {

            card.classList.toggle("turned", false);
            card.classList.toggle("visible", true);

            clickedCard.style.opacity = "1";
            clickedCard.style.color = fontColour;
            card.style.backgroundColor = cardColour;
            clickedCard.style.fontFamily = font;

        } else if (card.classList.contains("visible")) {

            card.classList.toggle("visible", false);
            card.classList.toggle("turned", true);

            clickedCard.style.opacity = "0";
            card.style.backgroundColor = "#ff7f50";

        }

        turnedCards++;

        if (turnedCards == 1) {
            clickedCard1 = <HTMLElement>_event.target;
            card1 = <HTMLElement>clickedCard1.parentElement;
            firstCard = clickedCard1.innerText;
            console.log("first card: " + firstCard);
        } else if (turnedCards == 2) {

            cardsInField = document.querySelectorAll(".cardcontent");
            for (let index: number = 0; index < cardsInField.length; index++) {
                cardsInField[index].removeEventListener("click", turnCards); 
            }

            setTimeout(compareCards, 2000);
            comparisonDisplay.innerHTML = "Comparing cards...";
            secondCard = clickedCard.innerText;
            console.log("second card: " + secondCard);
        }

    }

    function compareCards(): void {

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

        } else if (firstCard != secondCard) {

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
        for (let index: number = 0; index < cardsInField.length; index++) {
            cardsInField[index].addEventListener("click", turnCards); 
        }

        setTimeout(function (): void {
            comparisonDisplay.innerHTML = "Choose two cards.";
        },         1200);
    }

    function stopGame(): void {

        clearInterval(gameDuration);
        alert("Das Spiel ist beendet. Deine benötigte Zeit war: " + timer + " Sekunden");
        resetGame();
        timer = 0;

    }

    function resetGame(): void {

        playingField = <HTMLDivElement>document.querySelector("div#playingfield");
        playingField.innerHTML = "<a href='MemorySettings.html'>Back to start</a>";
        cardDeckValues = [];

    }


}