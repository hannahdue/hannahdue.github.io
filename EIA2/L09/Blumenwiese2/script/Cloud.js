"use strict";
var Blumenwiese2;
(function (Blumenwiese2) {
    class Cloud {
        constructor(_position, _size) {
            this.velocity = new Blumenwiese2.Vector(-20, 0);
            console.log("Cloud");
            this.position = _position;
            this.size = _size;
            this.velocity.x = this.velocity.x * _size;
            this.draw();
        }
        draw() {
            Blumenwiese2.crc2.save();
            Blumenwiese2.crc2.translate(this.position.x, this.position.y);
            Blumenwiese2.crc2.scale(this.size, this.size);
            Blumenwiese2.crc2.beginPath();
            Blumenwiese2.crc2.moveTo(170, 80);
            Blumenwiese2.crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
            Blumenwiese2.crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
            Blumenwiese2.crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
            Blumenwiese2.crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
            Blumenwiese2.crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
            Blumenwiese2.crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
            Blumenwiese2.crc2.closePath();
            Blumenwiese2.crc2.fillStyle = "HSLA(0, 0%, 100%, 0.8)";
            Blumenwiese2.crc2.fill();
            Blumenwiese2.crc2.restore();
        }
        move(_timeslice) {
            let offset = new Blumenwiese2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < -450)
                this.position.x += Blumenwiese2.crc2.canvas.width + 450;
            if (this.position.x > Blumenwiese2.crc2.canvas.width)
                this.position.x -= Blumenwiese2.crc2.canvas.width;
        }
    }
    Blumenwiese2.Cloud = Cloud;
})(Blumenwiese2 || (Blumenwiese2 = {}));
//# sourceMappingURL=Cloud.js.map