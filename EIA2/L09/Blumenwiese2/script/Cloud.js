"use strict";
var Blumenwiese2;
(function (Blumenwiese2) {
    class Cloud {
        constructor(_position, _size, _nParticles, _radiusParticles) {
            this.velocity = new Blumenwiese2.Vector(10, 0);
            console.log("Cloud");
            this.position = _position;
            this.size = _size;
            this.nParticles = _nParticles;
            this.radiusParticles = _radiusParticles;
            this.draw();
        }
        draw() {
            let nParticles = this.nParticles;
            let radiusParticle = this.radiusParticles;
            let particle = new Path2D();
            let gradient = Blumenwiese2.crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
            particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
            gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
            gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
            Blumenwiese2.crc2.save();
            Blumenwiese2.crc2.translate(this.position.x, this.position.y);
            Blumenwiese2.crc2.fillStyle = gradient;
            for (let drawn = 0; drawn < nParticles; drawn++) {
                Blumenwiese2.crc2.save();
                let x = (Math.random() - 0.5) * this.size.x;
                let y = -(Math.random() * this.size.y);
                Blumenwiese2.crc2.translate(x, y);
                Blumenwiese2.crc2.fill(particle);
                Blumenwiese2.crc2.restore();
            }
            Blumenwiese2.crc2.restore();
        }
        move(_timeslice) {
            let offset = new Blumenwiese2.Vector(this.velocity.x, this.velocity.y);
            offset.scale(_timeslice);
            this.position.add(offset);
            if (this.position.x < 0)
                this.position.x += Blumenwiese2.crc2.canvas.width;
            if (this.position.x > Blumenwiese2.crc2.canvas.width)
                this.position.x -= Blumenwiese2.crc2.canvas.width;
        }
    }
    Blumenwiese2.Cloud = Cloud;
})(Blumenwiese2 || (Blumenwiese2 = {}));
//# sourceMappingURL=Cloud.js.map