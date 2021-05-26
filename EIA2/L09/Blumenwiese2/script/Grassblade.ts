namespace Blumenwiese2 {

    export class Grassblade {
        height: number = 130 + Math.random() * 50;
        sway: number = (Math.random() - 0.5) * 80;
        bend: number = (Math.random() - 0.5) * 60;

        constructor() {
            this.draw();
        }

        draw(): void {
            
            if (this.sway > 0 && this.bend > 0) {
                this.bend = this.bend * -1;
            }

            crc2.save();

            //crc2.translate(150, crc2.canvas.height);
            crc2.scale(0.09, 0.17);
            crc2.beginPath();
            crc2.moveTo(-5, 0);
            crc2.quadraticCurveTo(this.bend, -this.height / 2, this.sway, -this.height);
            crc2.quadraticCurveTo(this.bend + 10, -this.height / 2, 5, 0);
            crc2.closePath();

            let randomGrassColor: number = Math.floor(createRandomValueInRange(1, 5));
            let grassColor: string = "#6F8C30";
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
            crc2.fillStyle = grassColor;
            crc2.fill();

            crc2.restore();
        }
    }

}