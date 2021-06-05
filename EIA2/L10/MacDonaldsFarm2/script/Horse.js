"use strict";
var MacDonaldsFarm2;
(function (MacDonaldsFarm2) {
    class Horse extends MacDonaldsFarm2.Animal {
        constructor() {
            super("Horse", "Hay", 5, "Whieeew");
        }
        doSpecialAction() {
            MacDonaldsFarm2.specialAction = "the horse went for a ride with Old MacDonald, ";
        }
    }
    MacDonaldsFarm2.Horse = Horse;
})(MacDonaldsFarm2 || (MacDonaldsFarm2 = {}));
//# sourceMappingURL=Horse.js.map