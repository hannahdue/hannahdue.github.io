"use strict";
var OldMacdonaldsFarm;
(function (OldMacdonaldsFarm) {
    window.addEventListener("load", handleLoad);
    let cow = new Animal("Cow", "Hay", 5, "Moo");
    let goat = new Animal("Goat", "Grains", 1, "Baa");
    let dog = new Animal("Dog", "Meat", 0.5, "Woof");
    let horse = new Animal("Horse", "Hay", 3, "Whieew");
    let pig = new Animal("Pig", "Grains", 1.5, "Grunt");
    let donkey = new Animal("Donkey", "Hay", 2.5, "Iaaah");
    let day = 1;
    let display;
    function handleLoad() {
        console.log("Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg");
        /*hayAmount = 50;
        grainsAmount = 30;
        meatAmount = 2;*/
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
        display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";
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
        if (meatAmount == 0) {
            let meatInput = prompt("You need to buy more meat, otherwise your dog might eat the chicken. Enter Kilograms:", "2");
            meatAmount = parseFloat(meatInput);
            //display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";
        }
        else if (hayAmount <= 0) {
            let hayInput = prompt("You need to buy more hay, otherwise your horse and donkey might graze your hair off. Enter Kilograms:", "50");
            hayAmount = parseFloat(hayInput);
            //display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";
        }
        else if (grainsAmount <= 0) {
            let grainsInput = prompt("You need to buy more grains, otherwise your goat and pig might eat your breakfast cereals. Enter Kilograms:", "30");
            grainsAmount = parseFloat(grainsInput);
            //display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";
        }
        display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";
    }
})(OldMacdonaldsFarm || (OldMacdonaldsFarm = {}));
//# sourceMappingURL=MacDonaldsFarm_script.js.map