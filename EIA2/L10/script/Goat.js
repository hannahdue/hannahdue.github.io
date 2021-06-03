"use strict";
var MacDonaldsFarm2;
(function (MacDonaldsFarm2) {
    class Goat extends MacDonaldsFarm2.Animal {
        constructor(_name, _food, _foodAmount, _sound) {
            super("Goat", "Grains", 4, "Baa");
        }
        doSpecialAction() {
            MacDonaldsFarm2.specialAction = "the goat escaped from the stable and went for a walk, ";
        }
    }
    MacDonaldsFarm2.Goat = Goat;
})(MacDonaldsFarm2 || (MacDonaldsFarm2 = {}));
//# sourceMappingURL=Goat.js.map