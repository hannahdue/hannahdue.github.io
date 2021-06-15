"use strict";
var Blumenwiese_advanced;
(function (Blumenwiese_advanced) {
    class Bee extends Blumenwiese_advanced.Moveable {
        constructor() {
            super(new Blumenwiese_advanced.Vector(Blumenwiese_advanced.crc2.canvas.width * 0.59, Blumenwiese_advanced.crc2.canvas.height * 0.57), new Blumenwiese_advanced.Vector((Blumenwiese_advanced.createRandomValueInRange(-150, -100)), (Blumenwiese_advanced.createRandomValueInRange(-30, 30))));
            this.scale = Blumenwiese_advanced.createRandomValueInRange(1, 2);
            this.direction = Blumenwiese_advanced.createRandomValueInRange(-1, 1);
            console.log("Bee");
            //Biene wenn sie umgedreht ist in andere Richtung fliegen lassen
            if (this.direction < 0) {
                this.velocity.x = -this.velocity.x;
            }
            this.draw();
        }
        draw() {
            Blumenwiese_advanced.crc2.save();
            Blumenwiese_advanced.crc2.translate(this.position.x, this.position.y);
            //Biene spiegeln, wenn ihr Zufallswert für die Richtung kleiner 0 ist
            if (this.direction < 0) {
                Blumenwiese_advanced.crc2.scale(-this.scale, this.scale);
            }
            else {
                Blumenwiese_advanced.crc2.scale(this.scale, this.scale);
            }
            Blumenwiese_advanced.crc2.rotate(Math.PI / 2);
            Blumenwiese_advanced.crc2.lineWidth = 1.5;
            Blumenwiese_advanced.crc2.strokeStyle = "black";
            //first wing
            Blumenwiese_advanced.crc2.beginPath();
            Blumenwiese_advanced.crc2.ellipse(-13, 0, 10, 15, 1.2, 0, 2 * Math.PI);
            Blumenwiese_advanced.crc2.fillStyle = "#aad5e7b8";
            Blumenwiese_advanced.crc2.fill();
            // body
            Blumenwiese_advanced.crc2.beginPath();
            Blumenwiese_advanced.crc2.ellipse(0, 0, 13, 18, 0, 0, 2 * Math.PI);
            Blumenwiese_advanced.crc2.fillStyle = "gold";
            Blumenwiese_advanced.crc2.fill();
            Blumenwiese_advanced.crc2.stroke();
            // stripes 
            Blumenwiese_advanced.crc2.beginPath();
            Blumenwiese_advanced.crc2.rect(-13, 1, 26, 6);
            Blumenwiese_advanced.crc2.fillStyle = "black";
            Blumenwiese_advanced.crc2.fill();
            Blumenwiese_advanced.crc2.closePath();
            Blumenwiese_advanced.crc2.beginPath();
            Blumenwiese_advanced.crc2.rect(-12, -10, 24, 6);
            Blumenwiese_advanced.crc2.fillStyle = "black";
            Blumenwiese_advanced.crc2.fill();
            Blumenwiese_advanced.crc2.closePath();
            //Second wing
            Blumenwiese_advanced.crc2.beginPath();
            Blumenwiese_advanced.crc2.ellipse(-13, -7, 10, 15, 2.2, 0, 2 * Math.PI);
            Blumenwiese_advanced.crc2.fillStyle = "#aad5e7b8";
            Blumenwiese_advanced.crc2.fill();
            //eyes
            Blumenwiese_advanced.crc2.beginPath();
            Blumenwiese_advanced.crc2.arc(-3, 11, 4.5, 0, Math.PI * 2);
            Blumenwiese_advanced.crc2.arc(-4, 17, 4.5, 0, Math.PI * 2);
            Blumenwiese_advanced.crc2.fillStyle = "black";
            Blumenwiese_advanced.crc2.fill();
            //smile
            Blumenwiese_advanced.crc2.beginPath();
            Blumenwiese_advanced.crc2.moveTo(8, 14);
            Blumenwiese_advanced.crc2.quadraticCurveTo(8, 10, 4, 9);
            Blumenwiese_advanced.crc2.stroke();
            Blumenwiese_advanced.crc2.restore();
        }
        move(_timeslice) {
            let offset = new Blumenwiese_advanced.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            //Biene auf und ab schwirren lassen, Inspiration hierfür von Mona
            this.position.y += (Math.random() - 0.5) * 10;
            if (this.position.x < 0)
                this.position.x += Blumenwiese_advanced.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Blumenwiese_advanced.crc2.canvas.height;
            if (this.position.x > Blumenwiese_advanced.crc2.canvas.width)
                this.position.x -= Blumenwiese_advanced.crc2.canvas.width;
            if (this.position.y > Blumenwiese_advanced.crc2.canvas.width)
                this.position.y -= Blumenwiese_advanced.crc2.canvas.height;
        }
    }
    Blumenwiese_advanced.Bee = Bee;
})(Blumenwiese_advanced || (Blumenwiese_advanced = {}));
//# sourceMappingURL=Bee.js.map