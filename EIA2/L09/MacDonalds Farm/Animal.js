"use strict";
class Animal {
    constructor(_name, _food, _foodAmount, _sound) {
        this.name = _name;
        this.food = _food;
        this.foodAmount = _foodAmount;
        this.sound = _sound;
    }
    eat(_food, _foodAmount) {
        console.log(this.name + " eats " + this.foodAmount + "kg of " + this.food);
    }
    sing(_sound) {
        console.log(this.name + " sings " + this.sound);
    }
}
//# sourceMappingURL=Animal.js.map