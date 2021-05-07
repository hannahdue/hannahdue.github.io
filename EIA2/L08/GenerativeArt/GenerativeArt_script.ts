namespace GenerativeArt {

    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;
    let horizon: number;
    let horizonMultiplicator: number;
    let dayOrNight: number;

    interface Vector {
        x: number;
        y: number;
    }

    function handleLoad(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        horizonMultiplicator = Math.random();
        if (horizonMultiplicator > 0.7) {
            horizonMultiplicator = 0.7;
        } else if (horizonMultiplicator < 0.5) {
            horizonMultiplicator = 0.5;
        }
        horizon = crc2.canvas.height * horizonMultiplicator;

        dayOrNight = Math.random();

        drawBackground();

        if (dayOrNight > 0.5) {
            drawSunnySky();
        } else {
            drawStarrySky(100);
        }

        drawGround();
        drawTrees(30);
    }

    function drawBackground(): void {
        console.log("Background");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#253D42");
        gradient.addColorStop(0.5, "#5E868F");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

    }

    function drawGround(): void {
        console.log("Earth");

        //hinterste Bergkette
        let rand3: number = Math.random() * 50;

        crc2.beginPath();
        crc2.moveTo(0, horizon + 100);
        for (let i: number = 0; i < crc2.canvas.width; i++) {
            crc2.lineTo(i, (horizon - 100) - Math.sin(0.4 * i * (Math.PI / 120) - 2.5) * (rand3 + 20));
        }
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
        crc2.lineTo(0, crc2.canvas.height);
        crc2.closePath();
        crc2.fillStyle = "lightgrey";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(0, horizon + 100);
        for (let i: number = 0; i < crc2.canvas.width; i++) {
            crc2.lineTo(i, (horizon - 100) - Math.sin(0.4 * i * (Math.PI / 120)) * (rand3 + 50));
        }
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
        crc2.lineTo(0, crc2.canvas.height);
        crc2.closePath();
        crc2.fillStyle = "lightgrey";
        crc2.fill();

        //mittlere Bergkette
        let rand2: number = Math.random() * 50;

        crc2.beginPath();
        crc2.moveTo(0, horizon - 20);
        for (let i: number = 0; i < crc2.canvas.width; i++) {
            crc2.lineTo(i, (horizon - 100) - Math.cos(i * (Math.PI / 180) + 2) * (rand2 + 20));
        }
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
        crc2.lineTo(0, crc2.canvas.height);
        crc2.closePath();
        crc2.fillStyle = "grey";
        crc2.fill();

        //vorderste Bergkette
        let rand: number = Math.random() * 20;

        let gradient: CanvasGradient = crc2.createLinearGradient(0, horizon, 0, horizon - 100);
        gradient.addColorStop(1, "#8F755E");
        gradient.addColorStop(0.4, "#573C24");
        
        crc2.beginPath();
        crc2.moveTo(0, horizon - 100);
        for (let i: number = 0; i < crc2.canvas.width; i++) {
            crc2.lineTo(i, (horizon - 100) - Math.sin(i * (Math.PI / 180) + 0.5) * (rand + 15));
        }
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
        crc2.lineTo(0, crc2.canvas.height);
        crc2.closePath();
        crc2.fillStyle = gradient;
        //crc2.fillStyle = "darkgreen";
        crc2.fill();

        //Ground
        let grass: HTMLImageElement = <HTMLImageElement>document.querySelector("#grass");
        let grassPattern: CanvasPattern = <CanvasPattern>crc2.createPattern(grass, "repeat");

        crc2.beginPath();
        crc2.moveTo(0, crc2.canvas.height);
        crc2.lineTo(0, horizon);
        crc2.quadraticCurveTo(crc2.canvas.width / 2, horizon - 50, crc2.canvas.width, horizon);
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
        crc2.closePath();

        //crc2.fillStyle = gradient;
        crc2.fillStyle = grassPattern;
        crc2.fill();
        crc2.strokeStyle = "#1a3300";
        crc2.stroke();
        crc2.strokeStyle = "black";
    }

    function drawStarrySky(_starsAmount: number): void {
        let randomNumber: number;
        for (let n: number = 0; n < _starsAmount; n++) {
            randomNumber = Math.random();
            drawStars({ x: crc2.canvas.width / 2, y: horizon }, { x: crc2.canvas.width, y: horizon + 50 }, 10 + randomNumber * 30);
        }
        drawMoon();
    }

    function drawStars(_position: Vector, _size: Vector, _radius: number): void {
        console.log("Stars");

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
        console.log("Moon");

        let randX: number = Math.random() * crc2.canvas.width;
        let randY: number = Math.random() * horizon - 200;
        crc2.save();
        if (randX > 700) {
            randX = 700;
        }
        if (randY < -20) {
            randY = -20;
        } else if (randY > 100) {
            randY = 100;
        }
        crc2.translate(randX, randY);
        crc2.rotate(25 * Math.PI / 180);
        crc2.scale(0.3, 0.3);

        crc2.arc(200, 200, 150, 0.5 * Math.PI, 1.5 * Math.PI, true);
        crc2.moveTo(200, 50);
        crc2.arcTo(600, 200, 200, 350, (200 - 50) * calculateNumber(200, 50, 600, 200) / (600 - 200));
        crc2.fillStyle = "HSLA(60, 80%, 90%, 1)";
        crc2.fill();

        crc2.restore();
    }

    function drawSunnySky(): void {
        console.log("Sunny Sky");

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#1fa1f4");
        gradient.addColorStop(0.5, "#eff9f0");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);

        drawSun();
    }

    function drawSun(): void {
        //Code abgeschaut von Jirka :D
        let r1: number = 30;
        let r2: number = 180;
        let gradientSun: CanvasGradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradientSun.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradientSun.addColorStop(0.1, "HSLA(60, 100%, 90%, 0.5)");
        gradientSun.addColorStop(0.2, "HSLA(60, 100%, 90%, 0.3)");
        gradientSun.addColorStop(1, "HSLA(60, 100%, 80%, 0)");

        let randX: number = Math.random() * crc2.canvas.width;
        let randY: number = Math.random() * crc2.canvas.height / 2 - 100;
        
        crc2.save();
        if (randX > 700) {
            randX = 700;
        }
        if (randY < 20) {
            randY = 20;
        } else if (randY > 100) {
            randY = 100;
        }
        crc2.translate(randX, randY);

        crc2.fillStyle = gradientSun;
        crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        crc2.fill();

        crc2.restore();
    }

    function drawTree(_randomColorCode: number, _randomColorCode2: number): void {
        console.log("Trees");

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
        crc2.fillStyle = "HSL(" + _randomColorCode2 + ", 60%, " + _randomColorCode + "%)";
        crc2.fill();
        crc2.stroke();

    }

    function drawTrees(_treesAmount: number): void {

        crc2.save();
        crc2.translate(0, horizon);

        let nTrees: number = _treesAmount;
        let rand: number;
        let rand2: number;
        let rand3: number;
        let rand4: number;
        let x: number = 0;
        let y: number = 0;

        for (let n: number = 1; n <= nTrees; n++) {

            rand = Math.random();
            rand2 = Math.random();
            rand3 = Math.random() * 100;
            rand4 = 140 + (Math.random() * 10 - 5);

            if (rand3 < 20) {
                rand3 = rand3 + 20;
            } else if (rand3 > 70) {
                rand3 = rand3 / 2;
            } else if (rand3 > 50) {
                rand3 = rand3 - 30;
            }

            x = rand * crc2.canvas.width;
            y += rand2 * 30;

            crc2.save();
            crc2.translate(x, y);

            if (y > 200) {
                crc2.scale(1.8 + rand2, 1.8 + rand2);
            } else if (y > 150) {
                crc2.scale(1.5 + rand2, 1.5 + rand2);
            } else if (y > 100) {
                crc2.scale(1.2 + rand2, 1.2 + rand2);
            } else if (y > 50) {
                crc2.scale(1 + rand2, 1 + rand2);
            }

            drawTree(rand3, rand4);
            crc2.restore();
        }

        crc2.restore();

    }

}