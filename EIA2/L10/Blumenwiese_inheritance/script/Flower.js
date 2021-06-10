"use strict";
var Blumenwiese_inheritance;
(function (Blumenwiese_inheritance) {
    class Flower {
        constructor() {
            this.flowerPetals = 5;
            this.petalColor = Math.floor(Math.random() * 10);
            //console.log("Flower");
            this.draw();
        }
        draw() {
            Blumenwiese_inheritance.crc2.save();
            //Blumenstiel
            //crc2.translate(50, crc2.canvas.height);
            Blumenwiese_inheritance.crc2.scale(0.3, 0.3);
            Blumenwiese_inheritance.crc2.beginPath();
            Blumenwiese_inheritance.crc2.moveTo(0, 0);
            Blumenwiese_inheritance.crc2.lineTo(0, -100);
            Blumenwiese_inheritance.crc2.closePath();
            Blumenwiese_inheritance.crc2.lineWidth = 4;
            Blumenwiese_inheritance.crc2.strokeStyle = "#025928";
            Blumenwiese_inheritance.crc2.stroke();
            //Blätter
            Blumenwiese_inheritance.crc2.beginPath();
            Blumenwiese_inheritance.crc2.moveTo(0, -15);
            Blumenwiese_inheritance.crc2.quadraticCurveTo(-20, -25, -20, -42);
            Blumenwiese_inheritance.crc2.quadraticCurveTo(-7, -38, 0, -20);
            Blumenwiese_inheritance.crc2.moveTo(0, -40);
            Blumenwiese_inheritance.crc2.quadraticCurveTo(10, -40, 11, -50);
            Blumenwiese_inheritance.crc2.quadraticCurveTo(8, -50, 0, -45);
            Blumenwiese_inheritance.crc2.closePath();
            Blumenwiese_inheritance.crc2.fillStyle = "#416935";
            Blumenwiese_inheritance.crc2.fill();
            Blumenwiese_inheritance.crc2.stroke();
            Blumenwiese_inheritance.crc2.save();
            //Blütenblätter
            let gradientMiddle = Blumenwiese_inheritance.crc2.createRadialGradient(0, 0, 0, 0, 0, 15);
            gradientMiddle.addColorStop(0.5, "khaki");
            gradientMiddle.addColorStop(1, "gold");
            Blumenwiese_inheritance.crc2.translate(0, -100);
            for (let flowerPetals = 0; flowerPetals < this.flowerPetals; flowerPetals++) {
                Blumenwiese_inheritance.crc2.rotate(1.25);
                this.drawFlowerPetal();
                if (flowerPetals == this.flowerPetals - 1) {
                    Blumenwiese_inheritance.crc2.beginPath();
                    Blumenwiese_inheritance.crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                    Blumenwiese_inheritance.crc2.closePath();
                    Blumenwiese_inheritance.crc2.fillStyle = gradientMiddle;
                    Blumenwiese_inheritance.crc2.fill();
                }
            }
            //Blütenblätter Ende
            Blumenwiese_inheritance.crc2.restore();
            Blumenwiese_inheritance.crc2.restore();
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
            let gradient = Blumenwiese_inheritance.crc2.createLinearGradient(0, 0, 0, -40);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, petalColor);
            //Blütenblatt
            Blumenwiese_inheritance.crc2.beginPath();
            Blumenwiese_inheritance.crc2.moveTo(0, 0);
            Blumenwiese_inheritance.crc2.lineTo(-13, -20);
            Blumenwiese_inheritance.crc2.bezierCurveTo(-24, -50, 24, -50, 13, -20);
            Blumenwiese_inheritance.crc2.closePath();
            Blumenwiese_inheritance.crc2.fillStyle = gradient;
            //crc2.strokeStyle = "violet";
            //crc2.stroke();
            Blumenwiese_inheritance.crc2.fill();
        }
    }
    Blumenwiese_inheritance.Flower = Flower;
})(Blumenwiese_inheritance || (Blumenwiese_inheritance = {}));
//# sourceMappingURL=Flower.js.map