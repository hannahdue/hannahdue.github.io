"use strict";
var MacDonaldsFarm2;
(function (MacDonaldsFarm2) {
    class Pig extends MacDonaldsFarm2.Animal {
        constructor(_name, _food, _foodAmount, _sound) {
            super("Pig", "Grains", 4, "Grunt");
        }
        doSpecialAction() {
            MacDonaldsFarm2.specialAction = "the pig rolled around in the mud, ";
        }
    }
    MacDonaldsFarm2.Pig = Pig;
})(MacDonaldsFarm2 || (MacDonaldsFarm2 = {}));
//# sourceMappingURL=Pig.js.map