namespace Blumenwiese_advanced_2 {

    export class Cloud extends Moveable {
        
        private size: number;

        constructor(_position: Vector, _size: number) {
            super(_position, new Vector(-20, 0));
            
            console.log("Cloud");
    
            this.size = _size;
            this.velocity.x = this.velocity.x * _size;

            this.draw();
        }

        public draw(): void {
            
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.scale(this.size, this.size);

            crc2.beginPath();
            crc2.moveTo(170, 80);
            crc2.bezierCurveTo(130, 100, 130, 150, 230, 150);
            crc2.bezierCurveTo(250, 180, 320, 180, 340, 150);
            crc2.bezierCurveTo(420, 150, 420, 120, 390, 100);
            crc2.bezierCurveTo(430, 40, 370, 30, 340, 50);
            crc2.bezierCurveTo(320, 5, 250, 20, 250, 50);
            crc2.bezierCurveTo(200, 5, 150, 20, 170, 80);
            crc2.closePath();
            crc2.fillStyle = "HSLA(0, 0%, 100%, 0.8)";
            crc2.fill();

            crc2.restore();
        }

        public move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < -450)
                this.position.x += crc2.canvas.width + 450;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
        }

    }

}