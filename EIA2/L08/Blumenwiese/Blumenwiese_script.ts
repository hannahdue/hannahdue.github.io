namespace Blumenwiese {

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    interface Vector {
        x: number;
        y: number;
    }

    let golden: number = 0.38;

    function handleLoad(): void {

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        drawSun({ x: 100, y: 50 });
        drawCloud({ x: 680, y: 50 }, { x: 80, y: 20 }, 8, 40);
        drawCloud({ x: 500, y: 100 }, { x: 150, y: 30 }, 30, 50);
        drawFlower(10);
        drawGrassBlade();
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(95, 85%, 28%)");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }

    function drawSun(_position: Vector): void {
        console.log("Sun");

        let r1: number = 20;
        let r2: number = 150;
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(0.1, "HSLA(60, 100%, 90%, 0.5)");
        gradient.addColorStop(0.2, "HSLA(60, 100%, 90%, 0.3)");
        gradient.addColorStop(1, "HSLA(60, 100%, 80%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.fillStyle = gradient;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();

        crc2.restore();

    }

    function drawCloud(_position: Vector, _size: Vector, _nParticles: number, _radiusParticles: number): void {
        console.log("Cloud");

        let nParticles: number = _nParticles;
        let radiusParticle: number = _radiusParticles;
        let particle: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);

        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;

        for (let drawn: number = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x: number = (Math.random() - 0.5) * _size.x;
            let y: number = - (Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }

    function drawFlower(_flowerPetals: number): void {
        console.log("Flower");

        crc2.save();

        //Blumenstiel
        crc2.translate(0, crc2.canvas.height);
        crc2.beginPath();
        crc2.moveTo(50, 0);
        crc2.lineTo(50, -60);
        crc2.closePath();
        crc2.strokeStyle = "brown";
        crc2.stroke();

        crc2.save();
        //Blütenblätter
        crc2.translate(50, -60);

        //Schleife
        for (let flowerPetals: number = 0; flowerPetals < _flowerPetals; flowerPetals++) {
            crc2.rotate(1);
            drawFlowerPetal();
        }
       
        //Blütenblätter Ende
        crc2.restore();

        //Mitte
        crc2.save();
        crc2.translate(50, -60);
        crc2.beginPath();
        crc2.arc(0, 0, 15, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "yellow";
        crc2.fill();
        crc2.restore();


        crc2.restore();
    }

    function drawFlowerPetal(): void {

        //Farbverlauf
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -40);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, "violet");
        //Bluetenblatt
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(-13, -20);
        crc2.bezierCurveTo(-24, -50, 24, -50, 13, -20);
        crc2.closePath();
        crc2.fillStyle = gradient;
        crc2.fill();

    }

    function drawGrassBlade(): void {
        console.log("Grassblade");

        crc2.save();

        crc2.translate(0, crc2.canvas.height);
        crc2.beginPath();
        crc2.moveTo(150, 0);
        crc2.quadraticCurveTo(160, -50, 150, -100);
        crc2.quadraticCurveTo(170, -50, 160, 0);
        crc2.closePath();
        crc2.fillStyle = "darkgreen";
        crc2.fill();

        crc2.restore();
    }

}