"use strict";
var Blumenwiese_inheritance;
(function (Blumenwiese_inheritance) {
    class Moveable {
        constructor(_position, _velocity) {
            this.position = _position;
            this.velocity = _velocity;
        }
        draw() {
            //console.log("draw");
        }
        move(_timeslice) {
            //console.log("move")
        }
    }
    Blumenwiese_inheritance.Moveable = Moveable;
})(Blumenwiese_inheritance || (Blumenwiese_inheritance = {}));
//# sourceMappingURL=Moveable.js.map