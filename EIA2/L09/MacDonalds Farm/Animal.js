"use strict";
let hayAmount;
let grainsAmount;
let meatAmount;
class Animal {
    constructor(_name, _food, _foodAmount, _sound) {
        this.name = _name;
        this.food = _food;
        this.foodAmount = _foodAmount;
        this.sound = _sound;
    }
    eat() {
        console.log(this.name + " eats " + this.foodAmount + "kg of " + this.food);
        if (this.food == "Hay") {
            hayAmount -= this.foodAmount;
        }
        else if (this.food == "Grains") {
            grainsAmount -= this.foodAmount;
        }
        else if (this.food = "Meat") {
            meatAmount -= this.foodAmount;
        }
    }
    sing() {
        console.log(this.name + " sings " + this.sound);
    }
}
//# sourceMappingURL=Animal.js.map