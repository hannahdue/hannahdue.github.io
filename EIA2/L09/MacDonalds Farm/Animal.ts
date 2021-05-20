let hayAmount: number;
let grainsAmount: number;
let meatAmount: number;

class Animal {
    name: string;
    food: string;
    foodAmount: number;
    sound: string;

    constructor(_name: string, _food: string, _foodAmount: number, _sound: string) {
        this.name = _name;
        this.food = _food;
        this.foodAmount = _foodAmount;
        this.sound = _sound;
    }

    eat(): void {
        console.log(this.name + " eats " + this.foodAmount + "kg of " + this.food);

        if (this.food == "Hay") {
            hayAmount -= this.foodAmount;
        } else if (this.food == "Grains") {
            grainsAmount -= this.foodAmount;
        } else if (this.food = "Meat") {
            meatAmount -= this.foodAmount;
        }
        
    }

    sing(): void {
        console.log(this.name + " sings " + this.sound);
    }
}