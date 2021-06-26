"use strict";
var Blumenwiese_advanced_2;
(function (Blumenwiese_advanced_2) {
    class Bee extends Blumenwiese_advanced_2.Moveable {
        constructor(_position) {
            super(new Blumenwiese_advanced_2.Vector(Blumenwiese_advanced_2.crc2.canvas.width * 0.59, Blumenwiese_advanced_2.crc2.canvas.height * 0.74), new Blumenwiese_advanced_2.Vector((Blumenwiese_advanced_2.createRandomValueInRange(-150, -100)), (Blumenwiese_advanced_2.createRandomValueInRange(-30, 30))));
            this.beeAction = Blumenwiese_advanced_2.ACTION.FLY;
            this.nectarLevel = 0;
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
        draw(_mirror) {
            Blumenwiese_advanced_2.crc2.save();
            Blumenwiese_advanced_2.crc2.translate(this.position.x, this.position.y);
            //zufällige Größenunterschiede
            Blumenwiese_advanced_2.crc2.scale(this.scale, this.scale);
            //Biene in die richtige Richtung drehen
            if (_mirror) {
                Blumenwiese_advanced_2.crc2.scale(_mirror, 1);
            }
            Blumenwiese_advanced_2.crc2.rotate(Math.PI / 2);
            //first wing
            Blumenwiese_advanced_2.crc2.beginPath();
            Blumenwiese_advanced_2.crc2.ellipse(-13, 0, 10, 15, 1.2, 0, 2 * Math.PI);
            Blumenwiese_advanced_2.crc2.fillStyle = "#aad5e7b8";
            Blumenwiese_advanced_2.crc2.fill();
            // honey
            Blumenwiese_advanced_2.crc2.beginPath();
            Blumenwiese_advanced_2.crc2.arc(14, 0, 6 * this.nectarLevel, 0, Math.PI * 2);
            Blumenwiese_advanced_2.crc2.fillStyle = "rgb(255, 196, 0)";
            Blumenwiese_advanced_2.crc2.strokeStyle = "saddlebrown";
            Blumenwiese_advanced_2.crc2.lineWidth = 0.5;
            Blumenwiese_advanced_2.crc2.fill();
            Blumenwiese_advanced_2.crc2.stroke();
            Blumenwiese_advanced_2.crc2.closePath();
            Blumenwiese_advanced_2.crc2.lineWidth = 1.5;
            Blumenwiese_advanced_2.crc2.strokeStyle = "black";
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
                if (Blumenwiese_advanced_2.flowers[i].nectarLevel > 0.5) {
                    this.target = Blumenwiese_advanced_2.flowers[i];
                }
                else if (i < Blumenwiese_advanced_2.flowers.length - 1) {
                    this.target = Blumenwiese_advanced_2.flowers[i + 1];
                }
                else {
                    this.beeAction = Blumenwiese_advanced_2.ACTION.FLY;
                }
                this.setDestination = false;
            }
            let direction = new Blumenwiese_advanced_2.Vector(this.target.position.x - this.position.x, (this.target.position.y - 100 * this.target.scale) - this.position.y);
            direction.scale(_timeslice);
            this.position.add(direction);
            this.position.y += (Math.random() - 0.5) * 6;
            if (direction.length < 0.3) {
                this.beeAction = Blumenwiese_advanced_2.ACTION.EAT;
            }
            if (direction.x < 0) {
                this.mirror = 1;
            }
            else {
                this.mirror = -1;
            }
            this.draw(this.mirror);
        }
        eatNectar() {
            //Bee eats nectar
            this.target.nectarLevel -= 0.006;
            this.nectarLevel += 0.006;
            this.draw(this.mirror);
            if (this.setDestination == false) {
                this.setDestination = true;
            }
            if (this.target.nectarLevel <= 0) {
                this.beeAction = Blumenwiese_advanced_2.ACTION.RETURN;
            }
        }
        return(_timeslice) {
            //Bee returns to beehive
            let beehivePosition = new Blumenwiese_advanced_2.Vector(Blumenwiese_advanced_2.crc2.canvas.width * 0.59, Blumenwiese_advanced_2.crc2.canvas.height * 0.74);
            if (this.setDestination == true) {
                this.setDestination = false;
            }
            let direction = new Blumenwiese_advanced_2.Vector(beehivePosition.x - this.position.x, beehivePosition.y - this.position.y);
            direction.scale(_timeslice);
            this.position.add(direction);
            this.position.y += (Math.random() - 0.5) * 6;
            if (direction.length < 0.3) {
                this.beeAction = Blumenwiese_advanced_2.ACTION.UNLOAD;
            }
            if (direction.x < 0) {
                this.mirror = 1;
            }
            else {
                this.mirror = -1;
            }
            this.draw(this.mirror);
        }
        unload() {
            //Bee unloads nactar
            this.timer += 0.02;
            //bee needs longer to unload, the more nectar she collected
            if (this.timer >= 5 + this.nectarLevel) {
                this.nectarLevel = 0;
                this.timer = 0;
                this.beeAction = Blumenwiese_advanced_2.ACTION.FLY;
                this.setDestination = true;
            }
        }
    }
    Blumenwiese_advanced_2.Bee = Bee;
})(Blumenwiese_advanced_2 || (Blumenwiese_advanced_2 = {}));
//# sourceMappingURL=Bee.js.map