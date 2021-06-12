"use strict";
var L09_Asteroids;
(function (L09_Asteroids) {
    class Ufo extends L09_Asteroids.Moveable {
        constructor() {
            super();
            this.position = new L09_Asteroids.Vector(0, Math.random() * L09_Asteroids.crc2.canvas.height);
            this.velocity = new L09_Asteroids.Vector(Math.random() < 0.5 ? -1 : 1, Math.floor(Math.random() * 3) - 1);
            this.velocity.scale(Ufo.speed);
            this.hitRadius = 25;
        }
        draw() {
            L09_Asteroids.crc2.save();
            L09_Asteroids.crc2.translate(this.position.x, this.position.y);
            L09_Asteroids.crc2.translate(-30, -17);
            L09_Asteroids.crc2.stroke(L09_Asteroids.ufoPath);
            L09_Asteroids.crc2.restore();
        }
        move(_timeslice) {
            super.move(_timeslice);
            if (Math.random() < 0.01)
                this.shoot();
            if (Math.random() < 0.02)
                this.velocity.y = Ufo.speed * (Math.floor(Math.random() * 3) - 1);
        }
        shoot() {
            console.log("Ufo shoots");
            let event = new CustomEvent("ufoShoots", { detail: { ufo: this } });
            L09_Asteroids.crc2.canvas.dispatchEvent(event);
        }
    }
    Ufo.speed = 50;
    L09_Asteroids.Ufo = Ufo;
})(L09_Asteroids || (L09_Asteroids = {}));
//# sourceMappingURL=Ufo.js.map