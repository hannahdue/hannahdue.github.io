"use strict";
var Blumenwiese_advanced_2;
(function (Blumenwiese_advanced_2) {
    class Flower {
        constructor(_position, _scale) {
            this.nectarLevel = 1;
            this.petalColor = Math.floor(Math.random() * 10);
            this.flowerPetals = 5;
            this.position = _position;
            this.scale = _scale;
        }
        draw() {
            Blumenwiese_advanced_2.crc2.save();
            //Blumenstiel
            Blumenwiese_advanced_2.crc2.translate(this.position.x, this.position.y);
            Blumenwiese_advanced_2.crc2.scale(this.scale, this.scale);
            Blumenwiese_advanced_2.crc2.beginPath();
            Blumenwiese_advanced_2.crc2.moveTo(0, 0);
            Blumenwiese_advanced_2.crc2.lineTo(0, -100);
            Blumenwiese_advanced_2.crc2.closePath();
            Blumenwiese_advanced_2.crc2.lineWidth = 4;
            Blumenwiese_advanced_2.crc2.strokeStyle = "#025928";
            Blumenwiese_advanced_2.crc2.stroke();
            //Blätter
            Blumenwiese_advanced_2.crc2.beginPath();
            Blumenwiese_advanced_2.crc2.moveTo(0, -15);
            Blumenwiese_advanced_2.crc2.quadraticCurveTo(-20, -25, -20, -42);
            Blumenwiese_advanced_2.crc2.quadraticCurveTo(-7, -38, 0, -20);
            Blumenwiese_advanced_2.crc2.moveTo(0, -40);
            Blumenwiese_advanced_2.crc2.quadraticCurveTo(10, -40, 11, -50);
            Blumenwiese_advanced_2.crc2.quadraticCurveTo(8, -50, 0, -45);
            Blumenwiese_advanced_2.crc2.closePath();
            Blumenwiese_advanced_2.crc2.fillStyle = "#416935";
            Blumenwiese_advanced_2.crc2.fill();
            Blumenwiese_advanced_2.crc2.stroke();
            Blumenwiese_advanced_2.crc2.save();
            //Blütenblätter
            let gradientMiddle = Blumenwiese_advanced_2.crc2.createRadialGradient(0, 0, 0, 0, 0, 15);
            gradientMiddle.addColorStop(0.5, "hsla(54, 77%, 75%, " + this.nectarLevel + ")");
            gradientMiddle.addColorStop(1, "hsla(51, 100%, 50%, " + this.nectarLevel + ")");
            Blumenwiese_advanced_2.crc2.translate(0, -100);
            for (let flowerPetals = 0; flowerPetals < this.flowerPetals; flowerPetals++) {
                Blumenwiese_advanced_2.crc2.rotate(1.25);
                this.drawFlowerPetal();
                if (flowerPetals == this.flowerPetals - 1) {
                    //dark middle 
                    Blumenwiese_advanced_2.crc2.beginPath();
                    Blumenwiese_advanced_2.crc2.arc(0, 0, 14.7, 0, 2 * Math.PI);
                    Blumenwiese_advanced_2.crc2.closePath();
                    Blumenwiese_advanced_2.crc2.fillStyle = "dimgrey";
                    Blumenwiese_advanced_2.crc2.fill();
                    //colored middle
                    Blumenwiese_advanced_2.crc2.beginPath();
                    Blumenwiese_advanced_2.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                    Blumenwiese_advanced_2.crc2.closePath();
                    Blumenwiese_advanced_2.crc2.fillStyle = gradientMiddle;
                    Blumenwiese_advanced_2.crc2.fill();
                }
            }
            //Blütenblätter Ende
            Blumenwiese_advanced_2.crc2.restore();
            Blumenwiese_advanced_2.crc2.restore();
        }
        updateFlower() {
            if (this.nectarLevel < 1) {
                this.refill();
            }
            this.draw();
        }
        refill() {
            //with 50fps, increase level with 0.1 per second -> 10s until full
            this.nectarLevel += 0.002;
        }
        drawFlowerPetal() {
            let petalColor = "HSL(" + this.petalColor * 36 + ", 70%, 40%)";
            switch (this.petalColor) {
                case 1:
                case 2:
                    petalColor = "indianRed";
                    break;
                case 4:
                    petalColor = "cornflowerBlue";
                    break;
                case 6:
                    petalColor = "darkOrange";
                    break;
                case 7:
                case 8:
                    petalColor = "orange";
                    break;
                case 10:
                    petalColor = "mediumOrchid";
                    break;
                default:
                    petalColor = "HSL(" + this.petalColor * 36 + ", 70%, 40%)";
                    break;
            }
            //Farbverlauf
            let gradient = Blumenwiese_advanced_2.crc2.createLinearGradient(0, 0, 0, -40);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, petalColor);
            //Blütenblatt
            Blumenwiese_advanced_2.crc2.beginPath();
            Blumenwiese_advanced_2.crc2.moveTo(0, 0);
            Blumenwiese_advanced_2.crc2.lineTo(-13, -20);
            Blumenwiese_advanced_2.crc2.bezierCurveTo(-24, -50, 24, -50, 13, -20);
            Blumenwiese_advanced_2.crc2.closePath();
            Blumenwiese_advanced_2.crc2.fillStyle = gradient;
            Blumenwiese_advanced_2.crc2.fill();
        }
    }
    Blumenwiese_advanced_2.Flower = Flower;
})(Blumenwiese_advanced_2 || (Blumenwiese_advanced_2 = {}));
//# sourceMappingURL=Flower.js.map