namespace Memory {
    console.log("script connected");

    window.addEventListener("load", handleLoad);

    let pairs: number;
    let values: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let cardDeckValues: string[] = [];
    let turnedCards: number = 0;
    let finishedPairs: number = 0;
    let timer: number;
    let gameDuration: number;
    let pairsDisplay: HTMLElement;
    let startButton: HTMLElement;
    let stopButton: HTMLElement;
    let playingField: HTMLDivElement;
    let link: HTMLElement;
    let clickedCard: HTMLElement;
    let clickedCard1: HTMLElement;
    let singleCard: HTMLElement;
    let pairsInput: string;
    let firstCard: string;
    let secondCard: string;

    function handleLoad(): void {

        console.log("handleLoad executed");

        choosePairAmount();

        startButton = <HTMLElement>document.querySelector("div.startbutton");
        startButton.addEventListener("click", handleStart);
        startButton.addEventListener("pointerup", handleStart);

        link = <HTMLElement>document.querySelector("a");
        link.addEventListener("click", choosePairAmount);
        link.addEventListener("pointerup", choosePairAmount);

    }

    function choosePairAmount(): void {

        pairsDisplay = <HTMLElement>document.querySelector(".pairs");
        pairsInput = <string>prompt("Anzahl der gewünschten Karenpaare:", "Wähle eine Zahl von 5-25");

        pairs = Number(pairsInput);

        if (pairs < 5 || pairs > 25) {
            alert("Bitte gib eine Zahl zwischen 5-25 an.");
            pairs = 5;
        }

        pairsDisplay.innerHTML = "" + pairs;

    }

    function handleStart(): void {

        console.log("game started");
        //select pairs-amount of the card content values (letters A-Y) randomly
        for (let index: number = 0; index <= pairs - 1; index++) {
            cardDeckValues.push(values[index]);
            cardDeckValues.push(values[index]);
        }
       //console.log(cardDeckValues);
        createCards();

        timer = 0;
        gameDuration = setInterval(startTimer, 1000);

        stopButton = <HTMLElement>document.querySelector("div.stopbutton");
        stopButton.addEventListener("click", stopGame);
        stopButton.addEventListener("pointerup", stopGame);

    }

    function createCards(): void {

        console.log("cards created");

        shuffleCards();

        playingField = <HTMLDivElement>document.querySelector("div.playingfield");
    
        for (let index: number = 0; index < cardDeckValues.length; index++) {
            
            singleCard = <HTMLSpanElement>document.createElement("span");
            singleCard.classList.add("turned");
            singleCard.innerHTML = "" + cardDeckValues[index];
            playingField.appendChild(singleCard);
            singleCard.addEventListener("click", turnCards);
            singleCard.addEventListener("pointerup", turnCards);
           
        }

    }

    function startTimer(): void {
        timer += 1;
    }

    function shuffleCards(): void {
        var tmp, rand;
        for (let index: number = 0; index < cardDeckValues.length; index++) {
            rand = Math.floor(Math.random() * cardDeckValues.length);
            tmp = cardDeckValues[index];
            cardDeckValues[index] = cardDeckValues[rand];
            cardDeckValues[rand] = tmp;
        }
        console.log("cards shuffled");
    }

    function turnCards(_event: MouseEvent): void {

        //console.log(_event.target);
        clickedCard = <HTMLElement>_event.target;

        if (clickedCard.classList.contains("turned")) {
            clickedCard.classList.toggle("turned", false);
            clickedCard.classList.toggle("visible", true);
        } else {
            clickedCard.classList.toggle("visible", false);
            clickedCard.classList.toggle("turned", true);
        }

        turnedCards++;

        if (turnedCards == 1) {
            clickedCard1 = <HTMLElement>_event.target;
            firstCard = clickedCard1.innerText;
            console.log("first card: " + firstCard);
        } else if (turnedCards == 2) {
            setTimeout(compareCards, 2000);
            secondCard = clickedCard.innerText;
            console.log("second card: " + secondCard);
        } 

        console.log("first card: " + firstCard);
        console.log("second card: " + secondCard);

    }

    function compareCards(): void {
        console.log("comparing cards...");

        if (firstCard == secondCard) {
            clickedCard1.classList.toggle("visible", false);
            clickedCard1.classList.toggle("invisible", true);
            clickedCard.classList.toggle("visible", false);
            clickedCard.classList.toggle("invisible", true);
            turnedCards = 0;
            finishedPairs++;
            console.log("cards matched.");
        } else if (firstCard != secondCard) {
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

    }

    function stopGame(): void {
        clearInterval(gameDuration);
        resetGame();
        alert("Das Spiel ist beendet. Deine benötigte Zeit war: " + timer + " Sekunden");
        timer = 0;
    }

    function resetGame(): void {
        playingField = <HTMLDivElement>document.querySelector("div.playingfield");
        playingField.innerHTML = "";
        console.log("reset - game duration: " + timer + " s");
        cardDeckValues = [];
    }

}
