namespace Blumenwiese_inheritance {

    export class Tree {
        position: Vector;
        color: string;

        constructor(_position: Vector, _color: string) {
            this.position = _position;
            this.color = _color;
            this.draw();
        }

        draw(): void {
            //console.log("Tree at " + this.position.x + "/" + this.position.y);

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(0.9, 1);
            //Trunk
            crc2.beginPath();
            crc2.moveTo(40, 10);
            crc2.lineTo(40, -20);
            crc2.lineTo(60, -20);
            crc2.lineTo(60, 10);
            crc2.closePath();
            crc2.fillStyle = "#875D3E";
            crc2.fill();
            //crc2.stroke();
            //Tree
            crc2.beginPath();
            crc2.moveTo(40, -20);
            crc2.lineTo(5, -20);
            crc2.lineTo(35, -55);
            crc2.lineTo(18, -55);
            crc2.lineTo(43, -80);
            crc2.lineTo(30, -80);
            crc2.lineTo(50, -105);
            crc2.lineTo(70, -80);
            crc2.lineTo(57, -80);
            crc2.lineTo(82, -55);
            crc2.lineTo(65, -55);
            crc2.lineTo(95, -20);
            crc2.closePath();
            crc2.fillStyle = this.color;
            crc2.fill();
            //crc2.stroke();

            crc2.restore();
        }

    }

}