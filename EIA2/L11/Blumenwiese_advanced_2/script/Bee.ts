namespace Blumenwiese_advanced_2 {

    export class Bee extends Moveable {

        public beeAction: ACTION = ACTION.FLY;
        public target: Flower;
        private setDestination: boolean = true;
        private scale: number = createRandomValueInRange(1, 2);
        private direction: number = createRandomValueInRange(-1, 1);
        private timer: number = 0;

        constructor(_position?: Vector) {
            super(new Vector(crc2.canvas.width * 0.59, crc2.canvas.height * 0.74), new Vector((createRandomValueInRange(-150, -100)), (createRandomValueInRange(-30, 30))));
            
            if (_position) {
                this.position = _position;
            }

            //Biene wenn sie umgedreht ist in andere Richtung fliegen lassen
            if (this.direction < 0) {
                this.velocity.x = -this.velocity.x;
            }

            this.draw();
        }

        public draw(): void {
            crc2.save();

            crc2.translate(this.position.x, this.position.y);

            //Biene spiegeln, wenn ihr Zufallswert für die Richtung kleiner 0 ist
            if (this.direction < 0) {
                crc2.scale(-this.scale, this.scale);
            } else {
                crc2.scale(this.scale, this.scale);
            }
            crc2.rotate(Math.PI / 2);

            crc2.lineWidth = 1.5;
            crc2.strokeStyle = "black";

            //first wing
            crc2.beginPath();
            crc2.ellipse(-13, 0, 10, 15, 1.2, 0, 2 * Math.PI);
            crc2.fillStyle = "#aad5e7b8";
            crc2.fill();

            // body
            crc2.beginPath();
            crc2.ellipse(0, 0, 13, 18, 0, 0, 2 * Math.PI);
            crc2.fillStyle = "gold";
            crc2.fill();
            crc2.stroke();

            // stripes 
            crc2.beginPath();
            crc2.rect(-13, 1, 26, 6);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();
            crc2.beginPath();
            crc2.rect(-12, -10, 24, 6);
            crc2.fillStyle = "black";
            crc2.fill();
            crc2.closePath();

            //Second wing
            crc2.beginPath();
            crc2.ellipse(-13, -7, 10, 15, 2.2, 0, 2 * Math.PI);
            crc2.fillStyle = "#aad5e7b8";
            crc2.fill();

            //eyes
            crc2.beginPath();
            crc2.arc(-3, 11, 4.5, 0, Math.PI * 2);
            crc2.arc(-4, 17, 4.5, 0, Math.PI * 2);
            crc2.fillStyle = "black";
            crc2.fill();
            //smile
            crc2.beginPath();
            crc2.moveTo(8, 14);
            crc2.quadraticCurveTo(8, 10, 4, 9);
            crc2.stroke();

            crc2.restore();
        }

        public action(_timeslice: number): void {
            switch (this.beeAction) {
                case ACTION.FLY:
                    this.flyToFlower(_timeslice);
                    break;
                case ACTION.EAT:
                    this.eatNectar();
                    break;
                case ACTION.RETURN:
                    this.return(_timeslice);
                    break;
                case ACTION.UNLOAD:
                    this.unload();
                    break;
                default:
                    this.fly(_timeslice);
                    break;
            }
        }

        private fly(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            //Biene auf und ab schwirren lassen, Inspiration hierfür von Mona
            this.position.y += (Math.random() - 0.5) * 10;

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.y < 0)
                this.position.y += crc2.canvas.height;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
            if (this.position.y > crc2.canvas.height)
                this.position.y -= crc2.canvas.height;
        }

        private flyToFlower(_timeslice: number): void {
            //Bee flies to flower
            if (this.setDestination == true) {
                let i: number = Math.round(Math.random() * (flowers.length - 1));
                this.target = flowers[i];
                this.setDestination = false;
            }

            let direction: Vector = new Vector(this.target.position.x - this.position.x, (this.target.position.y - 100) * this.target.scale - this.position.y);
            direction.scale(_timeslice);
            this.position.add(direction);

            this.draw();
        }

        private eatNectar(): void {
            //Bee eats nectar
        }

        private return(_timeslice: number): void {
            //Bee returns to beehive
        }

        private unload(): void {
            //Bee unloads nactar
        }
    }

}