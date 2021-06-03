"use strict";
var MacDonaldsFarm2;
(function (MacDonaldsFarm2) {
    window.addEventListener("load", handleLoad);
    MacDonaldsFarm2.hayAmount = 80;
    MacDonaldsFarm2.grainsAmount = 50;
    MacDonaldsFarm2.meatAmount = 2;
    let animals = [];
    let cow = new MacDonaldsFarm2.Cow("Cow", "Hay", 5, "Moo");
    let goat = new MacDonaldsFarm2.Goat("Goat", "Grains", 1, "Baa");
    let dog = new MacDonaldsFarm2.Dog("Dog", "Meat", 0.5, "Woof");
    let horse = new MacDonaldsFarm2.Horse("Horse", "Hay", 3, "Whieew");
    let pig = new MacDonaldsFarm2.Pig("Pig", "Grains", 1.5, "Grunt");
    let donkey = new MacDonaldsFarm2.Donkey("Donkey", "Hay", 2.5, "Iaaah");
    animals.push(cow, goat, dog, horse, pig, donkey);
    let day = 1;
    let display;
    function handleLoad() {
        //console.log("Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg");
        let newDayButton = document.querySelector("div#newDay");
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
        for (let animal of animals) {
            animal.sing();
            animal.eat();
            animal.doSpecialAction();
        }
        //console.log("So today, on Old MacDonald's Farm, ");
        display = document.querySelector("div#display");
        display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + MacDonaldsFarm2.hayAmount + "kg, Grains: " + MacDonaldsFarm2.grainsAmount + "kg, Meat: " + MacDonaldsFarm2.meatAmount + "kg";
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
        if (MacDonaldsFarm2.meatAmount == 0) {
            let meatInput = prompt("You need to buy more meat, otherwise your dog might eat the chicken. Enter Kilograms:", "2");
            MacDonaldsFarm2.meatAmount = parseFloat(meatInput);
            //display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";
        }
        if (MacDonaldsFarm2.hayAmount == 0 || MacDonaldsFarm2.hayAmount < 0) {
            let hayInput = prompt("You need to buy more hay, otherwise your horse and donkey might graze your hair off. Enter Kilograms:", "80");
            MacDonaldsFarm2.hayAmount = parseFloat(hayInput);
            //display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";
        }
        if (MacDonaldsFarm2.grainsAmount == 0 || MacDonaldsFarm2.grainsAmount < 0) {
            let grainsInput = prompt("You need to buy more grains, otherwise your goat and pig might eat your breakfast cereals. Enter Kilograms:", "50");
            MacDonaldsFarm2.grainsAmount = parseFloat(grainsInput);
            //display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg";
        }
        display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + MacDonaldsFarm2.hayAmount + "kg, Grains: " + MacDonaldsFarm2.grainsAmount + "kg, Meat: " + MacDonaldsFarm2.meatAmount + "kg";
    }
})(MacDonaldsFarm2 || (MacDonaldsFarm2 = {}));
//# sourceMappingURL=MacDonaldsFarm_script.js.map