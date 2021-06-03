"use strict";
var MacDonalsFarm2;
(function (MacDonalsFarm2) {
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
            else if (this.food == "Meat") {
                meatAmount -= this.foodAmount;
            }
        }
        sing() {
            console.log(this.name + " sings " + this.sound);
            let song = document.createElement("div");
            song.classList.add("song");
            song.innerHTML = "<h3>" + this.name + "</h3><p>Old MacDonald had a farm<br>Ee i ee i o<br>And on his farm he had some " + this.name + "s<br> Ee i ee i oh<br>With a " + this.sound + "-" + this.sound + " here<br>And a " + this.sound + "-" + this.sound + " there<br>Here a " + this.sound + ", there a " + this.sound + "<br> Everywhere a " + this.sound + "-" + this.sound + "<br>Old MacDonald had a farm<br>Ee i ee i o.</p>";
            document.body.appendChild(song);
        }
    }
    MacDonalsFarm2.Animal = Animal;
})(MacDonalsFarm2 || (MacDonalsFarm2 = {}));
//# sourceMappingURL=Animal.js.map