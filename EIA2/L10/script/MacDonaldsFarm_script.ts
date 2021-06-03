namespace MacDonaldsFarm2 {

    window.addEventListener("load", handleLoad);

    export let hayAmount: number = 80;
    export let grainsAmount: number = 50;
    export let meatAmount: number = 2;

    let animals: Animal[] = [];
    let cow: Animal = new Cow("Cow", "Hay", 5, "Moo");
    let goat: Animal = new Goat("Goat", "Grains", 1, "Baa");
    let dog: Animal = new Dog("Dog", "Meat", 0.5, "Woof");
    let horse: Animal = new Horse("Horse", "Hay", 3, "Whieew");
    let pig: Animal = new Pig("Pig", "Grains", 1.5, "Grunt");
    let donkey: Animal = new Donkey("Donkey", "Hay", 2.5, "Iaaah");
    animals.push(cow, goat, dog, horse, pig, donkey);

    let day: number = 1;
    let display: HTMLElement;

    function handleLoad(): void {
        //console.log("Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg");

        let newDayButton: HTMLElement = <HTMLElement>document.querySelector("div#newDay");
        newDayButton.addEventListener("click", oneDayPasses);

        console.log(animals);

        /*cow.sing();
        goat.sing();
        dog.sing();
        horse.sing();
        pig.sing();
        donkey.sing();

        cow.eat();
        goat.eat();
        dog.eat();
        horse.eat();
        pig.eat();
        donkey.eat();*/

        for (let index: number = 0; index < animals.length; index++) {
            animals[index].sing();
            animals[index].eat();
            animals[index].doSpecialAction();

        }

        //console.log("So today, on Old MacDonald's Farm, ");

        display = <HTMLElement>document.querySelector("div#display");
        display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";
    }

    function oneDayPasses(): void {
        cow.eat();
        goat.eat();
        dog.eat();
        horse.eat();
        pig.eat();
        donkey.eat();

        day++;
        //display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";
        if (meatAmount == 0) {
            let meatInput: string = <string>prompt("You need to buy more meat, otherwise your dog might eat the chicken. Enter Kilograms:", "2");
            meatAmount = parseFloat(meatInput);
            //display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";
        }
        
        if (hayAmount == 0 || hayAmount < 0) {
            let hayInput: string = <string>prompt("You need to buy more hay, otherwise your horse and donkey might graze your hair off. Enter Kilograms:", "80");
            hayAmount = parseFloat(hayInput);
            //display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";
        }
        
        if (grainsAmount == 0 || grainsAmount < 0) {
            let grainsInput: string = <string>prompt("You need to buy more grains, otherwise your goat and pig might eat your breakfast cereals. Enter Kilograms:", "50");
            grainsAmount = parseFloat(grainsInput);
            //display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";
        }
        display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";

    }

}