"use strict";
var L11_Advanced;
(function (L11_Advanced) {
    class LivingRoom extends L11_Advanced.Room {
        constructor() {
            super("9 sqm", "Living Room");
            this.wallColor = "pastel green";
            console.log("The " + this.function + " is " + this.size + " big and has " + this.wallColor + " walls.");
        }
    }
    L11_Advanced.LivingRoom = LivingRoom;
})(L11_Advanced || (L11_Advanced = {}));
//# sourceMappingURL=Subclass.js.map