"use strict";
var MacdonaldsFarm2;
(function (MacdonaldsFarm2) {
    window.addEventListener("load", handleLoad);
    MacdonaldsFarm2.hayAmount = 50;
    MacdonaldsFarm2.grainsAmount = 30;
    MacdonaldsFarm2.meatAmount = 2;
    let cow = new Animal("Cow", "Hay", 5, "Moo");
    let goat = new Animal("Goat", "Grains", 1, "Baa");
    let dog = new Animal("Dog", "Meat", 0.5, "Woof");
    let horse = new Animal("Horse", "Hay", 3, "Whieew");
    let pig = new Animal("Pig", "Grains", 1.5, "Grunt");
    let donkey = new Animal("Donkey", "Hay", 2.5, "Iaaah");
    let day = 1;
    let display;
    function handleLoad() {
        console.log("Hay: " + MacdonaldsFarm2.hayAmount + "kg, Grains: " + MacdonaldsFarm2.grainsAmount + "kg, Meat: " + MacdonaldsFarm2.meatAmount + "kg");
        let newDayButton = document.querySelector("div#newDay");
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
        display = document.querySelector("div#display");
        display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + MacdonaldsFarm2.hayAmount + "kg, Grains: " + MacdonaldsFarm2.grainsAmount + "kg, Meat: " + MacdonaldsFarm2.meatAmount + "kg";
    }
    function oneDayPasses() {
        cow.eat();
        goat.eat();
        dog.eat();
        horse.eat();
        pig.eat();
        donkey.eat();
        day++;
        //display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";
        if (MacdonaldsFarm2.meatAmount == 0) {
            let meatInput = prompt("You need to buy more meat, otherwise your dog might eat the chicken. Enter Kilograms:", "2");
            MacdonaldsFarm2.meatAmount = parseFloat(meatInput);
            //display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";
        }
        else if (MacdonaldsFarm2.hayAmount <= 0) {
            let hayInput = prompt("You need to buy more hay, otherwise your horse and donkey might graze your hair off. Enter Kilograms:", "50");
            MacdonaldsFarm2.hayAmount = parseFloat(hayInput);
            //display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";
        }
        else if (MacdonaldsFarm2.grainsAmount <= 0) {
            let grainsInput = prompt("You need to buy more grains, otherwise your goat and pig might eat your breakfast cereals. Enter Kilograms:", "30");
            MacdonaldsFarm2.grainsAmount = parseFloat(grainsInput);
            //display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";
        }
        display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + MacdonaldsFarm2.hayAmount + "kg, Grains: " + MacdonaldsFarm2.grainsAmount + "kg, Meat: " + MacdonaldsFarm2.meatAmount + "kg";
    }
})(MacdonaldsFarm2 || (MacdonaldsFarm2 = {}));
//# sourceMappingURL=MacDonaldsFarm_script.js.map