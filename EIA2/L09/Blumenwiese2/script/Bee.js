"use strict";
var Blumenwiese2;
(function (Blumenwiese2) {
    class Bee {
        constructor(_position, _velocity, _scale) {
            console.log("Bee");
            this.position = _position;
            this.velocity = _velocity;
            this.scale = _scale;
        }
        draw() {
            Blumenwiese2.crc2.save();
            Blumenwiese2.crc2.translate(this.position.x, this.position.y);
            Blumenwiese2.crc2.scale(this.scale, this.scale);
            Blumenwiese2.crc2.rotate(Math.PI / 2);
            Blumenwiese2.crc2.lineWidth = 1.5;
            Blumenwiese2.crc2.strokeStyle = "black";
            //first wing
            Blumenwiese2.crc2.beginPath();
            Blumenwiese2.crc2.ellipse(-13, 0, 10, 15, 1.2, 0, 2 * Math.PI);
            Blumenwiese2.crc2.fillStyle = "#aad5e7b8";
            Blumenwiese2.crc2.fill();
            // body
            Blumenwiese2.crc2.beginPath();
            Blumenwiese2.crc2.ellipse(0, 0, 13, 18, 0, 0, 2 * Math.PI);
            Blumenwiese2.crc2.fillStyle = "gold";
            Blumenwiese2.crc2.fill();
            Blumenwiese2.crc2.stroke();
            // stripes 
            Blumenwiese2.crc2.beginPath();
            Blumenwiese2.crc2.rect(-13, 1, 26, 6);
            Blumenwiese2.crc2.fillStyle = "black";
            Blumenwiese2.crc2.fill();
            Blumenwiese2.crc2.closePath();
            Blumenwiese2.crc2.beginPath();
            Blumenwiese2.crc2.rect(-12, -10, 24, 6);
            Blumenwiese2.crc2.fillStyle = "black";
            Blumenwiese2.crc2.fill();
            Blumenwiese2.crc2.closePath();
            //Second wing
            Blumenwiese2.crc2.beginPath();
            Blumenwiese2.crc2.ellipse(-13, -7, 10, 15, 2.2, 0, 2 * Math.PI);
            Blumenwiese2.crc2.fillStyle = "#aad5e7b8";
            Blumenwiese2.crc2.fill();
            //eyes
            Blumenwiese2.crc2.beginPath();
            Blumenwiese2.crc2.arc(-3, 11, 4.5, 0, Math.PI * 2);
            Blumenwiese2.crc2.arc(-4, 17, 4.5, 0, Math.PI * 2);
            Blumenwiese2.crc2.fillStyle = "black";
            Blumenwiese2.crc2.fill();
            //smile
            Blumenwiese2.crc2.beginPath();
            Blumenwiese2.crc2.moveTo(8, 14);
            Blumenwiese2.crc2.quadraticCurveTo(8, 10, 4, 9);
            Blumenwiese2.crc2.stroke();
            Blumenwiese2.crc2.restore();
        }
        move() {
        }
    }
    Blumenwiese2.Bee = Bee;
})(Blumenwiese2 || (Blumenwiese2 = {}));
//# sourceMappingURL=Bee.js.map