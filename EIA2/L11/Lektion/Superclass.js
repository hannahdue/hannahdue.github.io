"use strict";
var L11_Advanced;
(function (L11_Advanced) {
    class Room {
        constructor(_size, _function) {
            console.log("New Room");
            this.size = _size;
            this.function = _function;
        }
        static logHouse() {
            console.log("This refers to a " + this.house);
        }
        moveIn() {
            //console.log("Someone moved in.");
        }
    }
    Room.house = "Bungalow";
    L11_Advanced.Room = Room;
})(L11_Advanced || (L11_Advanced = {}));
//# sourceMappingURL=Superclass.js.map