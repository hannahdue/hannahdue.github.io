"use strict";
var MacDonaldsFarm2;
(function (MacDonaldsFarm2) {
    class Cow extends MacDonaldsFarm2.Animal {
        constructor() {
            super("Cow", "Hay", 5, "Moo");
        }
        doSpecialAction() {
            MacDonaldsFarm2.specialAction = "the cow gave 10 liters of milk, ";
        }
    }
    MacDonaldsFarm2.Cow = Cow;
})(MacDonaldsFarm2 || (MacDonaldsFarm2 = {}));
//# sourceMappingURL=Cow.js.map