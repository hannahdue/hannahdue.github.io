"use strict";
var Blumenwiese2;
(function (Blumenwiese2) {
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
            Blumenwiese2.crc2.save();
            //crc2.translate(150, crc2.canvas.height);
            Blumenwiese2.crc2.scale(0.09, 0.17);
            Blumenwiese2.crc2.beginPath();
            Blumenwiese2.crc2.moveTo(-5, 0);
            Blumenwiese2.crc2.quadraticCurveTo(this.bend, -this.height / 2, this.sway, -this.height);
            Blumenwiese2.crc2.quadraticCurveTo(this.bend + 10, -this.height / 2, 5, 0);
            Blumenwiese2.crc2.closePath();
            let randomGrassColor = Math.floor(Blumenwiese2.createRandomValueInRange(1, 5));
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
            Blumenwiese2.crc2.fillStyle = grassColor;
            Blumenwiese2.crc2.fill();
            Blumenwiese2.crc2.restore();
        }
    }
    Blumenwiese2.Grassblade = Grassblade;
})(Blumenwiese2 || (Blumenwiese2 = {}));
//# sourceMappingURL=Grassblade.js.map