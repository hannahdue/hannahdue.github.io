"use strict";
var MacDonaldsFarm2;
(function (MacDonaldsFarm2) {
    class Dog extends MacDonaldsFarm2.Animal {
        constructor() {
            super("Dog", "Meat", 0.5, "Woof");
        }
        doSpecialAction() {
            MacDonaldsFarm2.specialAction = "the dog napped in the shade instead of watching the goat, ";
        }
    }
    MacDonaldsFarm2.Dog = Dog;
})(MacDonaldsFarm2 || (MacDonaldsFarm2 = {}));
//# sourceMappingURL=Dog.js.map