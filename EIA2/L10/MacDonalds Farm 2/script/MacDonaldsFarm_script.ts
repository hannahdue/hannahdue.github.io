namespace MacDonaldsFarm2 {

    window.addEventListener("load", handleLoad);

    export let hayAmount: number = 80;
    export let grainsAmount: number = 50;
    export let meatAmount: number = 2;

    export let specialAction: string;
    let todaysActions: string = "So today, on Old MacDonald's Farm, ";

    let animals: Animal[] = [];
    let cow: Animal = new Cow();
    let goat: Animal = new Goat();
    let dog: Animal = new Dog();
    let horse: Animal = new Horse();
    let pig: Animal = new Pig();
    let donkey: Animal = new Donkey();
    animals.push(cow, goat, dog, horse, pig, donkey);

    let day: number = 1;
    let display: HTMLElement;
    let specialActionDisplay: HTMLElement;

    function handleLoad(): void {
        //console.log("Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg");

        let newDayButton: HTMLElement = <HTMLElement>document.querySelector("div#newDay");
        newDayButton.addEventListener("click", oneDayPasses);

        for (let animal of animals) {
            animal.sing();
            animal.eat();
            animal.doSpecialAction();
            todaysActions += specialAction;
        }
        console.log(todaysActions);

        specialActionDisplay = <HTMLElement>document.querySelector("div#specialActions");
        specialActionDisplay.innerHTML = todaysActions;
        display = <HTMLElement>document.querySelector("div#display");
        display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";
    }

    function oneDayPasses(): void {
        
        todaysActions = "And again, ";

        for (let animal of animals) {
            animal.eat();
            animal.doSpecialAction();
            todaysActions += specialAction;
        }

        specialActionDisplay.innerHTML = todaysActions;

        day++;
        if (meatAmount == 0) {
            let meatInput: string = <string>prompt("You need to buy more meat, otherwise your dog might eat the chicken. Enter Kilograms:", "2");
            meatAmount = parseFloat(meatInput);
        }
        
        if (hayAmount == 0 || hayAmount < 0) {
            let hayInput: string = <string>prompt("You need to buy more hay, otherwise your horse and donkey might graze your hair off. Enter Kilograms:", "80");
            hayAmount = parseFloat(hayInput);
        }
        
        if (grainsAmount == 0 || grainsAmount < 0) {
            let grainsInput: string = <string>prompt("You need to buy more grains, otherwise your goat and pig might eat your breakfast cereals. Enter Kilograms:", "50");
            grainsAmount = parseFloat(grainsInput);
        }
        
        display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";

    }

}