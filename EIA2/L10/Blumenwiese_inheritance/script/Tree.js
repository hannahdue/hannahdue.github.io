"use strict";
var Blumenwiese_inheritance;
(function (Blumenwiese_inheritance) {
    class Tree {
        constructor(_position, _color) {
            this.position = _position;
            this.color = _color;
            this.draw();
        }
        draw() {
            //console.log("Tree at " + this.position.x + "/" + this.position.y);
            Blumenwiese_inheritance.crc2.save();
            Blumenwiese_inheritance.crc2.translate(this.position.x, this.position.y);
            Blumenwiese_inheritance.crc2.scale(0.9, 1);
            //Trunk
            Blumenwiese_inheritance.crc2.beginPath();
            Blumenwiese_inheritance.crc2.moveTo(40, 10);
            Blumenwiese_inheritance.crc2.lineTo(40, -20);
            Blumenwiese_inheritance.crc2.lineTo(60, -20);
            Blumenwiese_inheritance.crc2.lineTo(60, 10);
            Blumenwiese_inheritance.crc2.closePath();
            Blumenwiese_inheritance.crc2.fillStyle = "#875D3E";
            Blumenwiese_inheritance.crc2.fill();
            //crc2.stroke();
            //Tree
            Blumenwiese_inheritance.crc2.beginPath();
            Blumenwiese_inheritance.crc2.moveTo(40, -20);
            Blumenwiese_inheritance.crc2.lineTo(5, -20);
            Blumenwiese_inheritance.crc2.lineTo(35, -55);
            Blumenwiese_inheritance.crc2.lineTo(18, -55);
            Blumenwiese_inheritance.crc2.lineTo(43, -80);
            Blumenwiese_inheritance.crc2.lineTo(30, -80);
            Blumenwiese_inheritance.crc2.lineTo(50, -105);
            Blumenwiese_inheritance.crc2.lineTo(70, -80);
            Blumenwiese_inheritance.crc2.lineTo(57, -80);
            Blumenwiese_inheritance.crc2.lineTo(82, -55);
            Blumenwiese_inheritance.crc2.lineTo(65, -55);
            Blumenwiese_inheritance.crc2.lineTo(95, -20);
            Blumenwiese_inheritance.crc2.closePath();
            Blumenwiese_inheritance.crc2.fillStyle = this.color;
            Blumenwiese_inheritance.crc2.fill();
            //crc2.stroke();
            Blumenwiese_inheritance.crc2.restore();
        }
    }
    Blumenwiese_inheritance.Tree = Tree;
})(Blumenwiese_inheritance || (Blumenwiese_inheritance = {}));
//# sourceMappingURL=Tree.js.map