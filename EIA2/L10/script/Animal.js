"use strict";
var MacDonaldsFarm2;
(function (MacDonaldsFarm2) {
    class Animal {
        constructor(_name, _food, _foodAmount, _sound) {
            this.name = _name;
            this.food = _food;
            this.foodAmount = _foodAmount;
            this.sound = _sound;
        }
        eat() {
            //console.log(this.name + " eats " + this.foodAmount + "kg of " + this.food);
            if (this.food == "Hay") {
                MacDonaldsFarm2.hayAmount -= this.foodAmount;
            }
            else if (this.food == "Grains") {
                MacDonaldsFarm2.grainsAmount -= this.foodAmount;
            }
            else if (this.food == "Meat") {
                MacDonaldsFarm2.meatAmount -= this.foodAmount;
            }
        }
        sing() {
            //console.log(this.name + " sings " + this.sound);
            let song = document.createElement("div");
            song.classList.add("song");
            song.innerHTML = "<h3>" + this.name + "</h3><p>Old MacDonald had a farm<br>Ee i ee i o<br>And on his farm he had some " + this.name + "s<br> Ee i ee i oh<br>With a " + this.sound + "-" + this.sound + " here<br>And a " + this.sound + "-" + this.sound + " there<br>Here a " + this.sound + ", there a " + this.sound + "<br> Everywhere a " + this.sound + "-" + this.sound + "<br>Old MacDonald had a farm<br>Ee i ee i o.</p>";
            document.body.appendChild(song);
        }
    }
    MacDonaldsFarm2.Animal = Animal;
})(MacDonaldsFarm2 || (MacDonaldsFarm2 = {}));
//# sourceMappingURL=Animal.js.map