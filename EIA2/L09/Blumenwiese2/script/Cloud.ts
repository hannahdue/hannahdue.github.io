namespace Blumenwiese2 {

    export class Cloud {
        position: Vector;
        size: Vector;
        nParticles: number;
        radiusParticles: number;
        velocity: Vector = new Vector(10, 0);

        constructor(_position: Vector, _size: Vector, _nParticles: number, _radiusParticles: number) {
            console.log("Cloud");
            this.position = _position;
            this.size = _size;
            this.nParticles = _nParticles;
            this.radiusParticles = _radiusParticles;

            this.draw();
        }

        draw(): void {
            let nParticles: number = this.nParticles;
            let radiusParticle: number = this.radiusParticles;
            let particle: Path2D = new Path2D();
            let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = gradient;

            for (let drawn: number = 0; drawn < nParticles; drawn++) {
                crc2.save();
                let x: number = (Math.random() - 0.5) * this.size.x;
                let y: number = - (Math.random() * this.size.y);
                crc2.translate(x, y);
                crc2.fill(particle);
                crc2.restore();
            }
            crc2.restore();
        }

        move(_timeslice: number): void {
            let offset: Vector = new Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);

            if (this.position.x < 0)
                this.position.x += crc2.canvas.width;
            if (this.position.x > crc2.canvas.width)
                this.position.x -= crc2.canvas.width;
    
        }

    }

}