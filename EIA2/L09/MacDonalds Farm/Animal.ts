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

    eat(_food: string, _foodAmount: number): void {
        console.log(this.name + " eats " + this.foodAmount + "kg of " + this.food);
    }

    sing(_sound: string): void {
        console.log(this.name + " sings " + this.sound);
    }
}