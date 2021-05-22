let hayAmount: number = 50;
let grainsAmount: number = 30;
let meatAmount: number = 2;

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
        } else if (this.food == "Meat") {
            meatAmount -= this.foodAmount;
        }

    }

    sing(): void {
        console.log(this.name + " sings " + this.sound);
        let song: HTMLDivElement = document.createElement("div");
        song.classList.add("song");
        song.innerHTML = "<h3>" + this.name + "</h3><p>Old MacDonald had a farm<br>Ee i ee i o<br>And on his farm he had some " + this.name + "s<br> Ee i ee i oh<br>With a " + this.sound + "-" + this.sound + " here<br>And a " + this.sound + "-" + this.sound + " there<br>Here a " + this.sound + ", there a " + this.sound + "<br> Everywhere a " + this.sound + "-" + this.sound + "<br>Old MacDonald had a farm<br>Ee i ee i o.</p>"
        document.body.appendChild(song);
    }
}