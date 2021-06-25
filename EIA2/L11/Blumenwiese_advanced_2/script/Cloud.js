"use strict";
var Blumenwiese_advanced_2;
(function (Blumenwiese_advanced_2) {
    class Cloud extends Blumenwiese_advanced_2.Moveable {
        constructor(_position, _size) {
            super(_position, new Blumenwiese_advanced_2.Vector(-20, 0));
            this.size = _size;
            this.velocity.x = this.velocity.x * _size;
            this.draw();
        }
        draw() {
            Blumenwiese_advanced_2.crc2.save();
            Blumenwiese_advanced_2.crc2.translate(this.position.x, this.position.y);
            Blumenwiese_advanced_2.crc2.scale(this.size, this.size);
            Blumenwiese_advanced_2.crc2.beginPath();
            Blumenwiese_advanced_2.crc2.moveTo(170, 80);
            Blumenwiese_advanced_2.crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
            Blumenwiese_advanced_2.crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
            Blumenwiese_advanced_2.crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
            Blumenwiese_advanced_2.crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
            Blumenwiese_advanced_2.crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
            Blumenwiese_advanced_2.crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
            Blumenwiese_advanced_2.crc2.closePath();
            Blumenwiese_advanced_2.crc2.fillStyle = "HSLA(0, 0%, 100%, 0.8)";
            Blumenwiese_advanced_2.crc2.fill();
            Blumenwiese_advanced_2.crc2.restore();
        }
        action(_timeslice) {
            let offset = new Blumenwiese_advanced_2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < -450)
                this.position.x += Blumenwiese_advanced_2.crc2.canvas.width + 450;
            if (this.position.x > Blumenwiese_advanced_2.crc2.canvas.width)
                this.position.x -= Blumenwiese_advanced_2.crc2.canvas.width;
        }
    }
    Blumenwiese_advanced_2.Cloud = Cloud;
})(Blumenwiese_advanced_2 || (Blumenwiese_advanced_2 = {}));
//# sourceMappingURL=Cloud.js.map