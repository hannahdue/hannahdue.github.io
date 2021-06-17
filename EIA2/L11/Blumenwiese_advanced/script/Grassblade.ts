namespace Blumenwiese_advanced {

    export class Grassblade {
        position: Vector;
        height: number = 130 + Math.random() * 50;
        sway: number = (Math.random() - 0.5) * 80;
        bend: number = (Math.random() - 0.5) * 60;
        color: number = Math.floor(createRandomValueInRange(1, 5));

        constructor( _position?: Vector, _height?: number, _sway?: number, _bend?: number) {
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

        draw(): void {
            
            if (this.sway > 0 && this.bend > 0) {
                this.bend = this.bend * -1;
            }

            crc2.save();

            if (this.position) {
                crc2.translate(this.position.x, this.position.y);
            }
            crc2.beginPath();
            crc2.moveTo(-5, 0);
            crc2.quadraticCurveTo(this.bend, -this.height / 2, this.sway, -this.height);
            crc2.quadraticCurveTo(this.bend + 10, -this.height / 2, 5, 0);
            crc2.closePath();

            let grassColor: string = "#6F8C30";
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
            crc2.fillStyle = grassColor;
            crc2.fill();

            crc2.restore();
        }
    }

}