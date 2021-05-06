namespace GenerativeArt {

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    interface Vector {
        x: number;
        y: number;
    }

    function handleLoad(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawBackground();
        drawStarrySky(100);
        //drawStars({ x: crc2.canvas.width / 2, y: crc2.canvas.height / 2 }, { x: crc2.canvas.width, y: crc2.canvas.height * 0.7 });
        drawMoon();
        drawGround();
        drawTrees();
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#253D42");
        gradient.addColorStop(0.5, "#5E868F");
        //gradient.addColorStop(0.7, "#8F755E");
        //gradient.addColorStop(1, "#573C24");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    }

    function drawGround(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, crc2.canvas.height, 0, crc2.canvas.height / 2);
        gradient.addColorStop(0.2, "#573C24");
        gradient.addColorStop(1, "#8F755E");

        crc2.beginPath();
        crc2.moveTo(0, crc2.canvas.height);
        crc2.lineTo(0, crc2.canvas.height * 0.62)
        crc2.quadraticCurveTo(crc2.canvas.width / 2, crc2.canvas.height / 2, crc2.canvas.width, crc2.canvas.height * 0.62);
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
        crc2.closePath();

        crc2.fillStyle = gradient;
        crc2.fill();
    }

    function drawStarrySky(_starsAmount: number): void {
        let randomNumber: number;
        for (let n: number = 0; n < _starsAmount; n++) {
            randomNumber = Math.random();
            drawStars({ x: crc2.canvas.width / 2, y: crc2.canvas.height / 2 }, { x: crc2.canvas.width, y: crc2.canvas.height * 0.7 }, 10 + randomNumber * 30);
        }
    }

    function drawStars(_position: Vector, _size: Vector, _radius: number): void {
        console.log("Stars");

        //let nStars: number = 100;
        let radiusStar: number = _radius;
        let star: Path2D = new Path2D();
        let gradient: CanvasGradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusStar);

        star.arc(0, 0, radiusStar, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.8)");
        gradient.addColorStop(0.05, "HSLA(0, 100%, 100%, 0.3)");
        gradient.addColorStop(0.1, "HSLA(0, 100%, 100%, 0.2)");
        gradient.addColorStop(0.15, "HSLA(0, 100%, 100%, 0.1)");

        gradient.addColorStop(0.8, "HSLA(0, 100%, 100%, 0)");

        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        crc2.save();

        let x: number = (Math.random() - 0.5) * _size.x;
        let y: number = - (Math.random() * _size.y);
        crc2.translate(x, y);
        crc2.fill(star);

        crc2.restore();
        crc2.restore();

    }

    function calculateNumber(x1: number, y1: number, x2: number, y2: number): number {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }

    function drawMoon(): void {

        let rand: number = Math.random();
        let rand2: number = Math.random();
        crc2.save(),
        crc2.translate(rand * crc2.canvas.width, rand2 * crc2.canvas.height / 2 - 50);
        crc2.rotate(25 * Math.PI / 180);
        crc2.scale(0.3, 0.3);

        crc2.arc(200, 200, 150, 0.5 * Math.PI, 1.5 * Math.PI, true);
        crc2.moveTo(200, 50);
        crc2.arcTo(600, 200, 200, 350, (200 - 50) * calculateNumber(200, 50, 600, 200) / (600 - 200));
        crc2.fillStyle = "HSLA(60, 80%, 90%, 1)";
        crc2.fill();

        crc2.restore();
    }

    function drawTree(): void {
        console.log("Tree");

        //Trunk
        crc2.beginPath();
        crc2.moveTo(40, 10);
        crc2.lineTo(40, -20);
        crc2.lineTo(60, -20);
        crc2.lineTo(60, 10);
        crc2.closePath();
        crc2.fillStyle = "#783b12";
        crc2.fill();
        crc2.stroke();
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
        crc2.fillStyle = "darkgreen";
        crc2.fill();
        crc2.stroke();

    }

    function drawTrees(): void {

        crc2.save();
        crc2.translate(0, crc2.canvas.height * 0.62);

        let nTrees: number = 10;
        let rand: number;
        let rand2: number;

        for (let n: number = 1; n <= nTrees; n++) {

            rand = Math.random();
            rand2 = Math.random();
            crc2.save();
            crc2.translate(rand * crc2.canvas.width, rand2 * (crc2.canvas.height * 0.38));

            /*if (rand > 0.5) {
                crc2.scale(rand * 10 / 2, rand * 10 / 2);
            } else {
                crc2.scale(rand * 10, rand * 10);
            }*/
            
            drawTree();
            crc2.restore();
        }

        crc2.restore();

    }

}