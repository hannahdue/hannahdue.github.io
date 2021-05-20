namespace OldMacdonaldsFarm {

    window.addEventListener("load", handleLoad);

    let cow: Animal = new Animal("Cow", "Hay", 5, "Moo");
    let goat: Animal = new Animal("Goat", "Grains", 1, "Baa");
    let dog: Animal = new Animal("Dog", "Meat", 0.5, "Woof");
    let horse: Animal = new Animal("Horse", "Hay", 3, "Whieew");
    let pig: Animal = new Animal("Pig", "Grains", 1.5, "Grunt");
    let donkey: Animal = new Animal("Donkey", "Hay", 2.5, "Iaaah");
    let day: number = 1;
    let display: HTMLElement;

    function handleLoad(): void {
        console.log("Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg");

        /*hayAmount = 50;
        grainsAmount = 30;
        meatAmount = 2;*/
        let newDayButton: HTMLElement = <HTMLElement>document.querySelector("div#newDay");
        newDayButton.addEventListener("click", oneDayPasses);

        cow.sing();
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
        donkey.eat();

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

        day ++;
        display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";
        if (meatAmount == 0) {
            let meatInput: string = <string>prompt("You need to buy more meat, otherwise your dog might eat the chicken. Enter Kilograms:", "2");
            meatAmount = parseFloat(meatInput);
            display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";

        } else if (hayAmount <= 0) {
            let hayInput: string = <string>prompt("You need to buy more hay, otherwise your horse and donkey might graze your hair off. Enter Kilograms:", "50");
            hayAmount = parseFloat(hayInput);
            display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";

        } else if (grainsAmount <= 0) {
            let grainsInput: string = <string>prompt("You need to buy more grains, otherwise your goat and pig might eat the your breakfast cereals. Enter Kilograms:", "30");
            grainsAmount = parseFloat(grainsInput);
            display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";

        }
    }

}