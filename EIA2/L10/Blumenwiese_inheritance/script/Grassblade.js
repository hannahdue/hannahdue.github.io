"use strict";
var Blumenwiese_inheritance;
(function (Blumenwiese_inheritance) {
    class Grassblade {
        constructor() {
            this.height = 130 + Math.random() * 50;
            this.sway = (Math.random() - 0.5) * 80;
            this.bend = (Math.random() - 0.5) * 60;
            this.draw();
        }
        draw() {
            if (this.sway > 0 && this.bend > 0) {
                this.bend = this.bend * -1;
            }
            Blumenwiese_inheritance.crc2.save();
            //crc2.translate(150, crc2.canvas.height);
            Blumenwiese_inheritance.crc2.scale(0.09, 0.17);
            Blumenwiese_inheritance.crc2.beginPath();
            Blumenwiese_inheritance.crc2.moveTo(-5, 0);
            Blumenwiese_inheritance.crc2.quadraticCurveTo(this.bend, -this.height / 2, this.sway, -this.height);
            Blumenwiese_inheritance.crc2.quadraticCurveTo(this.bend + 10, -this.height / 2, 5, 0);
            Blumenwiese_inheritance.crc2.closePath();
            let randomGrassColor = Math.floor(Blumenwiese_inheritance.createRandomValueInRange(1, 5));
            let grassColor = "#6F8C30";
            switch (randomGrassColor) {
                case 1:
                    grassColor = "#40592E";
                    break;
                case 2:
                    grassColor = "#51732F";
                    break;
                case 3:
                    grassColor = "#82A633";
                    break;
                case 4:
                    grassColor = "#6F8C30";
                    break;
                case 5:
                    grassColor = "#B3BF54";
                    break;
                default:
                    break;
            }
            Blumenwiese_inheritance.crc2.fillStyle = grassColor;
            Blumenwiese_inheritance.crc2.fill();
            Blumenwiese_inheritance.crc2.restore();
        }
    }
    Blumenwiese_inheritance.Grassblade = Grassblade;
})(Blumenwiese_inheritance || (Blumenwiese_inheritance = {}));
//# sourceMappingURL=Grassblade.js.map