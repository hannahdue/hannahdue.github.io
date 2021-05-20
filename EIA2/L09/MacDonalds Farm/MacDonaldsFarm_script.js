"use strict";
var OldMacdonaldsFarm;
(function (OldMacdonaldsFarm) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        console.log("Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg");
        hayAmount = 50;
        grainsAmount = 30;
        meatAmount = 2;
        let cow = new Animal("Cow", "Hay", 5, "Moo");
        let chicken = new Animal("Chicken", "Grains", 1, "Gackgack");
        let dog = new Animal("Dog", "Meat", 1, "Woof");
        let horse = new Animal("Horse", "Hay", 3, "Whieew");
        let pig = new Animal("Pig", "Grains", 1.5, "Grunt");
        let donkey = new Animal("Donkey", "Hay", 2.5, "Iaaah");
        cow.sing();
        chicken.sing();
        dog.sing();
        horse.sing();
        pig.sing();
        donkey.sing();
        cow.eat();
        chicken.eat();
        dog.eat();
        horse.eat();
        pig.eat();
        donkey.eat();
        console.log("Hay: " + hayAmount + "kg, Grains: " + grainsAmount + "kg, Meat: " + meatAmount + "kg");
    }
})(OldMacdonaldsFarm || (OldMacdonaldsFarm = {}));
//# sourceMappingURL=MacDonaldsFarm_script.js.map