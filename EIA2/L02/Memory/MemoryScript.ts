namespace Memory {
    console.log("script connected");

    window.addEventListener("load", handleLoad);

    let pairs: number;
    let values: string[] = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y"];
    let cardDeckValues: string[] = [];
    let turnedCards: number = 0;
    //let finishedPairs: number = 0;
    let timer: number = 0;

    function handleLoad(): void {

        console.log("handleLoad executed");

        let pairsDisplay: HTMLElement = <HTMLElement>document.querySelector(".pairs");
        let pairsInput: string = <string>prompt("Anzahl der gewünschten Karenpaare:", "wähle eine Zahl von 5-25");

        pairs = Number(pairsInput);
        pairsDisplay.innerHTML = "" + pairs;

        let startButton: HTMLElement = <HTMLElement>document.querySelector("div.button");
        startButton.addEventListener("click", handleStart);

    }

    function handleStart(): void {

        console.log("game started");
        //select pairs-amount of the card content values (letters A-Y) randomly
        for (let index: number = 0; index <= pairs - 1; index++) {
            cardDeckValues.push(values[index]);
            cardDeckValues.push(values[index]);
        }
        console.log(cardDeckValues);
        createCards();

        setInterval(startTimer(), 1000);

    }

    function createCards(): void {

        console.log("cards created");

        let playingField: HTMLDivElement = <HTMLDivElement>document.querySelector("div.playingfield");

        shuffleCards();
        for (let index: number = 0; index < cardDeckValues.length; index++) {
            
            //let randomId: number = Math.random() * 1000;
            //let randomIdText: string = "" + randomId.toFixed(0);
            let idText: string = "" + index;
            playingField.innerHTML += "<span class='turned' id='" + idText + "'>" + cardDeckValues[index] + "</span>";
            
            let cardWithId: HTMLElement = <HTMLElement>document.getElementById(idText);
            cardWithId.addEventListener("click", turnCards);
            console.log(idText);
        }

    }

    function startTimer(): any {
        timer += 1;
        console.log(timer);
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

        console.log(_event.target);
        let clickedCard: HTMLElement = <HTMLElement>_event.target;

        if (clickedCard.classList.contains("turned")) {
            clickedCard.classList.toggle("turned", false);
            clickedCard.classList.toggle("visible", true);
        } else {
            clickedCard.classList.toggle("visible", false);
            clickedCard.classList.toggle("turned", true);
        }

        turnedCards++;

        if (turnedCards == 2) {
            setTimeout(compareCards, 2000);
        } else if (turnedCards >= 2) {
            turnedCards = 1;
        }

    }

    function compareCards(): void {
        console.log("comparing cards...");

        
    }

}
