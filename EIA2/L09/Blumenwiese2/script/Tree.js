"use strict";
var Blumenwiese2;
(function (Blumenwiese2) {
    class Tree {
        constructor(_position, _color) {
            this.position = _position;
            this.color = _color;
            this.draw();
        }
        draw() {
            //console.log("Tree at " + this.position.x + "/" + this.position.y);
            Blumenwiese2.crc2.save();
            Blumenwiese2.crc2.translate(this.position.x, this.position.y);
            Blumenwiese2.crc2.scale(0.9, 1);
            //Trunk
            Blumenwiese2.crc2.beginPath();
            Blumenwiese2.crc2.moveTo(40, 10);
            Blumenwiese2.crc2.lineTo(40, -20);
            Blumenwiese2.crc2.lineTo(60, -20);
            Blumenwiese2.crc2.lineTo(60, 10);
            Blumenwiese2.crc2.closePath();
            Blumenwiese2.crc2.fillStyle = "#875D3E";
            Blumenwiese2.crc2.fill();
            //crc2.stroke();
            //Tree
            Blumenwiese2.crc2.beginPath();
            Blumenwiese2.crc2.moveTo(40, -20);
            Blumenwiese2.crc2.lineTo(5, -20);
            Blumenwiese2.crc2.lineTo(35, -55);
            Blumenwiese2.crc2.lineTo(18, -55);
            Blumenwiese2.crc2.lineTo(43, -80);
            Blumenwiese2.crc2.lineTo(30, -80);
            Blumenwiese2.crc2.lineTo(50, -105);
            Blumenwiese2.crc2.lineTo(70, -80);
            Blumenwiese2.crc2.lineTo(57, -80);
            Blumenwiese2.crc2.lineTo(82, -55);
            Blumenwiese2.crc2.lineTo(65, -55);
            Blumenwiese2.crc2.lineTo(95, -20);
            Blumenwiese2.crc2.closePath();
            Blumenwiese2.crc2.fillStyle = this.color;
            Blumenwiese2.crc2.fill();
            //crc2.stroke();
            Blumenwiese2.crc2.restore();
        }
    }
    Blumenwiese2.Tree = Tree;
})(Blumenwiese2 || (Blumenwiese2 = {}));
//# sourceMappingURL=Tree.js.map