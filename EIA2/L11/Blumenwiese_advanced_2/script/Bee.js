"use strict";
var Blumenwiese_advanced_2;
(function (Blumenwiese_advanced_2) {
    class Bee extends Blumenwiese_advanced_2.Moveable {
        constructor(_position) {
            super(new Blumenwiese_advanced_2.Vector(Blumenwiese_advanced_2.crc2.canvas.width * 0.59, Blumenwiese_advanced_2.crc2.canvas.height * 0.74), new Blumenwiese_advanced_2.Vector((Blumenwiese_advanced_2.createRandomValueInRange(-150, -100)), (Blumenwiese_advanced_2.createRandomValueInRange(-30, 30))));
            this.beeAction = Blumenwiese_advanced_2.ACTION.FLY;
            this.setDestination = true;
            this.scale = Blumenwiese_advanced_2.createRandomValueInRange(1, 2);
            this.direction = Blumenwiese_advanced_2.createRandomValueInRange(-1, 1);
            this.timer = 0;
            if (_position) {
                this.position = _position;
            }
            //Biene wenn sie umgedreht ist in andere Richtung fliegen lassen
            if (this.direction < 0) {
                this.velocity.x = -this.velocity.x;
            }
            this.draw();
        }
        draw() {
            Blumenwiese_advanced_2.crc2.save();
            Blumenwiese_advanced_2.crc2.translate(this.position.x, this.position.y);
            //Biene spiegeln, wenn ihr Zufallswert für die Richtung kleiner 0 ist
            if (this.direction < 0) {
                Blumenwiese_advanced_2.crc2.scale(-this.scale, this.scale);
            }
            else {
                Blumenwiese_advanced_2.crc2.scale(this.scale, this.scale);
            }
            Blumenwiese_advanced_2.crc2.rotate(Math.PI / 2);
            Blumenwiese_advanced_2.crc2.lineWidth = 1.5;
            Blumenwiese_advanced_2.crc2.strokeStyle = "black";
            //first wing
            Blumenwiese_advanced_2.crc2.beginPath();
            Blumenwiese_advanced_2.crc2.ellipse(-13, 0, 10, 15, 1.2, 0, 2 * Math.PI);
            Blumenwiese_advanced_2.crc2.fillStyle = "#aad5e7b8";
            Blumenwiese_advanced_2.crc2.fill();
            // body
            Blumenwiese_advanced_2.crc2.beginPath();
            Blumenwiese_advanced_2.crc2.ellipse(0, 0, 13, 18, 0, 0, 2 * Math.PI);
            Blumenwiese_advanced_2.crc2.fillStyle = "gold";
            Blumenwiese_advanced_2.crc2.fill();
            Blumenwiese_advanced_2.crc2.stroke();
            // stripes 
            Blumenwiese_advanced_2.crc2.beginPath();
            Blumenwiese_advanced_2.crc2.rect(-13, 1, 26, 6);
            Blumenwiese_advanced_2.crc2.fillStyle = "black";
            Blumenwiese_advanced_2.crc2.fill();
            Blumenwiese_advanced_2.crc2.closePath();
            Blumenwiese_advanced_2.crc2.beginPath();
            Blumenwiese_advanced_2.crc2.rect(-12, -10, 24, 6);
            Blumenwiese_advanced_2.crc2.fillStyle = "black";
            Blumenwiese_advanced_2.crc2.fill();
            Blumenwiese_advanced_2.crc2.closePath();
            //Second wing
            Blumenwiese_advanced_2.crc2.beginPath();
            Blumenwiese_advanced_2.crc2.ellipse(-13, -7, 10, 15, 2.2, 0, 2 * Math.PI);
            Blumenwiese_advanced_2.crc2.fillStyle = "#aad5e7b8";
            Blumenwiese_advanced_2.crc2.fill();
            //eyes
            Blumenwiese_advanced_2.crc2.beginPath();
            Blumenwiese_advanced_2.crc2.arc(-3, 11, 4.5, 0, Math.PI * 2);
            Blumenwiese_advanced_2.crc2.arc(-4, 17, 4.5, 0, Math.PI * 2);
            Blumenwiese_advanced_2.crc2.fillStyle = "black";
            Blumenwiese_advanced_2.crc2.fill();
            //smile
            Blumenwiese_advanced_2.crc2.beginPath();
            Blumenwiese_advanced_2.crc2.moveTo(8, 14);
            Blumenwiese_advanced_2.crc2.quadraticCurveTo(8, 10, 4, 9);
            Blumenwiese_advanced_2.crc2.stroke();
            Blumenwiese_advanced_2.crc2.restore();
        }
        action(_timeslice) {
            switch (this.beeAction) {
                case Blumenwiese_advanced_2.ACTION.FLY:
                    this.flyToFlower(_timeslice);
                    break;
                case Blumenwiese_advanced_2.ACTION.EAT:
                    this.eatNectar();
                    break;
                case Blumenwiese_advanced_2.ACTION.RETURN:
                    this.return(_timeslice);
                    break;
                case Blumenwiese_advanced_2.ACTION.UNLOAD:
                    this.unload();
                    break;
                default:
                    this.fly(_timeslice);
                    break;
            }
        }
        fly(_timeslice) {
            let offset = new Blumenwiese_advanced_2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            //Biene auf und ab schwirren lassen, Inspiration hierfür von Mona
            this.position.y += (Math.random() - 0.5) * 10;
            if (this.position.x < 0)
                this.position.x += Blumenwiese_advanced_2.crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += Blumenwiese_advanced_2.crc2.canvas.height;
            if (this.position.x > Blumenwiese_advanced_2.crc2.canvas.width)
                this.position.x -= Blumenwiese_advanced_2.crc2.canvas.width;
            if (this.position.y > Blumenwiese_advanced_2.crc2.canvas.height)
                this.position.y -= Blumenwiese_advanced_2.crc2.canvas.height;
        }
        flyToFlower(_timeslice) {
            //Bee flies to flower
            if (this.setDestination == true) {
                let i = Math.round(Math.random() * (Blumenwiese_advanced_2.flowers.length - 1));
                this.target = Blumenwiese_advanced_2.flowers[i];
                this.setDestination = false;
            }
            let direction = new Blumenwiese_advanced_2.Vector(this.target.position.x - this.position.x, (this.target.position.y - 100 * this.target.scale) - this.position.y);
            direction.scale(_timeslice);
            this.position.add(direction);
            this.draw();
        }
        eatNectar() {
            //Bee eats nectar
        }
        return(_timeslice) {
            //Bee returns to beehive
        }
        unload() {
            //Bee unloads nactar
        }
    }
    Blumenwiese_advanced_2.Bee = Bee;
})(Blumenwiese_advanced_2 || (Blumenwiese_advanced_2 = {}));
//# sourceMappingURL=Bee.js.map