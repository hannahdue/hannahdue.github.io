namespace Blumenwiese_advanced_2 {

    export class Flower {
        public nectarLevel: number = Math.random() * 0.5;
        private position: Vector;
        private scale: number;
        private petalColor: number = Math.floor(Math.random() * 10);
        private flowerPetals: number = 5;

        constructor(_position: Vector, _scale: number) {
            console.log("Flower");
            this.position = _position;
            this.scale = _scale;
            //this.draw();
        }

        public draw(): void {
            crc2.save();

            //Blumenstiel
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.scale, this.scale);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, -100);
            crc2.closePath();
            crc2.lineWidth = 4;
            crc2.strokeStyle = "#025928";
            crc2.stroke();
            //Blätter
            crc2.beginPath();
            crc2.moveTo(0, -15);
            crc2.quadraticCurveTo(-20, -25, -20, -42);
            crc2.quadraticCurveTo(-7, -38, 0, -20);
            crc2.moveTo(0, -40);
            crc2.quadraticCurveTo(10, -40, 11, -50);
            crc2.quadraticCurveTo(8, -50, 0, -45);
            crc2.closePath();
            crc2.fillStyle = "#416935";
            crc2.fill();
            crc2.stroke();
    
            crc2.save();
            //Blütenblätter
            let gradientMiddle: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, 15);
            gradientMiddle.addColorStop(0.5, "hsla(54, 77%, 75%, " + this.nectarLevel + ")");
            gradientMiddle.addColorStop(1, "hsla(51, 100%, 50%, " + this.nectarLevel + ")");
    
            crc2.translate(0, -100);
    
            for (let flowerPetals: number = 0; flowerPetals < this.flowerPetals; flowerPetals++) {
                crc2.rotate(1.25);
                this.drawFlowerPetal();
                if (flowerPetals == this.flowerPetals - 1) {
                    //dark middle 
                    crc2.beginPath();
                    crc2.arc(0, 0, 14.7, 0, 2 * Math.PI);
                    crc2.closePath();
                    crc2.fillStyle = "dimgrey";
                    crc2.fill();
                    //colored middle
                    crc2.beginPath();
                    crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                    crc2.closePath();
                    crc2.fillStyle = gradientMiddle;
                    crc2.fill();
                }
            }
            //Blütenblätter Ende
            crc2.restore();
    
            crc2.restore();
        }

        public updateFlower(): void {
            /*if (this.nectarLevel >= 1) {
                this.nectarLevel = 0;
            }*/
            if (this.nectarLevel < 1) {
                this.refill();
                }
            this.draw();
        }

        private refill(): void {
            //with 50fps, increase level with 0.1 per second -> 10s until full
            this.nectarLevel += 0.002;
        }

        private drawFlowerPetal(): void {
            let petalColor: string = "HSL(" + this.petalColor * 36 + ", 70%, 40%)";
            switch (this.petalColor) {
                case 1:
                case 2:
                    petalColor = "indianRed";
                    break;
                case 4:
                    petalColor = "cornflowerBlue";
                    break;
                case 6:
                    petalColor = "darkOrange";
                    break;
                case 7:
                case 8:
                    petalColor = "orange";
                    break;
                case 10: 
                    petalColor = "mediumOrchid";
                    break;
                default:
                    petalColor = "HSL(" + this.petalColor * 36 + ", 70%, 40%)";
                    break;
            }
            //Farbverlauf
            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -40);
            gradient.addColorStop(0, "white");
            gradient.addColorStop(1, petalColor);
            //Blütenblatt
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(-13, -20);
            crc2.bezierCurveTo(-24, -50, 24, -50, 13, -20);
            crc2.closePath();
            crc2.fillStyle = gradient;
            crc2.fill();
        }


    }

}