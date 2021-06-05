"use strict";
var MacDonaldsFarm2;
(function (MacDonaldsFarm2) {
    class Donkey extends MacDonaldsFarm2.Animal {
        constructor(_name, _food, _foodAmount, _sound) {
            super("Donkey", "Hay", 4, "Iaah");
        }
        doSpecialAction() {
            MacDonaldsFarm2.specialAction = "and the donkey got cuddled from Old MacDonald's daughter.";
        }
    }
    MacDonaldsFarm2.Donkey = Donkey;
})(MacDonaldsFarm2 || (MacDonaldsFarm2 = {}));
//# sourceMappingURL=Donkey.js.map