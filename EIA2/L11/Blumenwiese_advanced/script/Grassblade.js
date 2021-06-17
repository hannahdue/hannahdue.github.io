"use strict";
var Blumenwiese_advanced;
(function (Blumenwiese_advanced) {
    class Grassblade {
        constructor(_position, _height, _sway, _bend) {
            this.height = 130 + Math.random() * 50;
            this.sway = (Math.random() - 0.5) * 80;
            this.bend = (Math.random() - 0.5) * 60;
            this.color = Math.floor(Blumenwiese_advanced.createRandomValueInRange(1, 5));
            if (_position)
                this.position = _position;
            if (_height)
                this.height = _height;
            if (_sway)
                this.sway = _sway;
            if (_bend)
                this.bend = _bend;
            this.draw();
        }
        draw() {
            if (this.sway > 0 && this.bend > 0) {
                this.bend = this.bend * -1;
            }
            Blumenwiese_advanced.crc2.save();
            if (this.position) {
                Blumenwiese_advanced.crc2.translate(this.position.x, this.position.y);
            }
            Blumenwiese_advanced.crc2.beginPath();
            Blumenwiese_advanced.crc2.moveTo(-5, 0);
            Blumenwiese_advanced.crc2.quadraticCurveTo(this.bend, -this.height / 2, this.sway, -this.height);
            Blumenwiese_advanced.crc2.quadraticCurveTo(this.bend + 10, -this.height / 2, 5, 0);
            Blumenwiese_advanced.crc2.closePath();
            let grassColor = "#6F8C30";
            switch (this.color) {
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
            Blumenwiese_advanced.crc2.fillStyle = grassColor;
            Blumenwiese_advanced.crc2.fill();
            Blumenwiese_advanced.crc2.restore();
        }
    }
    Blumenwiese_advanced.Grassblade = Grassblade;
})(Blumenwiese_advanced || (Blumenwiese_advanced = {}));
//# sourceMappingURL=Grassblade.js.map