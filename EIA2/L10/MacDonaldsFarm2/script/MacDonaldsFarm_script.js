"use strict";
var MacDonaldsFarm2;
(function (MacDonaldsFarm2) {
    window.addEventListener("load", handleLoad);
    MacDonaldsFarm2.hayAmount = 80;
    MacDonaldsFarm2.grainsAmount = 50;
    MacDonaldsFarm2.meatAmount = 2;
    let todaysActions = "So today, on Old MacDonald's Farm, ";
    let animals = [];
    let cow = new MacDonaldsFarm2.Cow();
    let goat = new MacDonaldsFarm2.Goat();
    let dog = new MacDonaldsFarm2.Dog();
    let horse = new MacDonaldsFarm2.Horse();
    let pig = new MacDonaldsFarm2.Pig();
    let donkey = new MacDonaldsFarm2.Donkey();
    animals.push(cow, goat, dog, horse, pig, donkey);
    let day = 1;
    let display;
    let specialActionDisplay;
    function handleLoad() {
        //console.log("Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg");
        let newDayButton = document.querySelector("div#newDay");
        newDayButton.addEventListener("click", oneDayPasses);
        for (let animal of animals) {
            animal.sing();
            animal.eat();
            animal.doSpecialAction();
            todaysActions += MacDonaldsFarm2.specialAction;
        }
        console.log(todaysActions);
        specialActionDisplay = document.querySelector("div#specialActions");
        specialActionDisplay.innerHTML = todaysActions;
        display = document.querySelector("div#display");
        display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + MacDonaldsFarm2.hayAmount + "kg, Grains: " + MacDonaldsFarm2.grainsAmount + "kg, Meat: " + MacDonaldsFarm2.meatAmount + "kg";
    }
    function oneDayPasses() {
        todaysActions = "And again, ";
        for (let animal of animals) {
            animal.eat();
            animal.doSpecialAction();
            todaysActions += MacDonaldsFarm2.specialAction;
        }
        specialActionDisplay.innerHTML = todaysActions;
        day++;
        if (MacDonaldsFarm2.meatAmount == 0) {
            let meatInput = prompt("You need to buy more meat, otherwise your dog might eat the chicken. Enter Kilograms:", "2");
            MacDonaldsFarm2.meatAmount = parseFloat(meatInput);
        }
        if (MacDonaldsFarm2.hayAmount == 0 || MacDonaldsFarm2.hayAmount < 0) {
            let hayInput = prompt("You need to buy more hay, otherwise your horse and donkey might graze your hair off. Enter Kilograms:", "80");
            MacDonaldsFarm2.hayAmount = parseFloat(hayInput);
        }
        if (MacDonaldsFarm2.grainsAmount == 0 || MacDonaldsFarm2.grainsAmount < 0) {
            let grainsInput = prompt("You need to buy more grains, otherwise your goat and pig might eat your breakfast cereals. Enter Kilograms:", "50");
            MacDonaldsFarm2.grainsAmount = parseFloat(grainsInput);
        }
        display.innerHTML = "Day " + day + ", Food that's left:<br>Hay: " + MacDonaldsFarm2.hayAmount + "kg, Grains: " + MacDonaldsFarm2.grainsAmount + "kg, Meat: " + MacDonaldsFarm2.meatAmount + "kg";
    }
})(MacDonaldsFarm2 || (MacDonaldsFarm2 = {}));
//# sourceMappingURL=MacDonaldsFarm_script.js.map