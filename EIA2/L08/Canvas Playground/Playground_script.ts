namespace Playground {
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    function handleLoad(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawSunnySky();
        drawGround();
        drawTree();


    }

    function drawGround(): void {

        /*let gradient: CanvasGradient = crc2.createLinearGradient(0, crc2.canvas.height, 0, crc2.canvas.height / 2);
        gradient.addColorStop(0.2, "#573C24");
        gradient.addColorStop(1, "#8F755E");

        let img: HTMLImageElement = <HTMLImageElement>document.querySelector("#earth");
        let pattern: CanvasPattern = <CanvasPattern>crc2.createPattern(img, "repeat");

        crc2.beginPath();
        crc2.moveTo(0, crc2.canvas.height);
        crc2.lineTo(0, crc2.canvas.height * 0.62);
        crc2.quadraticCurveTo(crc2.canvas.width / 2, crc2.canvas.height / 2, crc2.canvas.width, crc2.canvas.height * 0.62);
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
        crc2.closePath();

        crc2.fillStyle = pattern;
        crc2.fill();
        crc2.fillStyle = gradient;
        crc2.fill();*/

        //hinterste Bergkette
        let rand3: number = Math.random() * 50;

        crc2.beginPath();
        crc2.moveTo(0, crc2.canvas.height / 2 + 200);
        for (let i: number = 0; i < crc2.canvas.width; i++) {
            crc2.lineTo(i, crc2.canvas.height / 2 - Math.sin(0.4 * i * (Math.PI / 120) - 2.5) * (rand3 + 20));
        }
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
        crc2.lineTo(0, crc2.canvas.height);
        crc2.closePath();
        crc2.fillStyle = "lightgrey";
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(0, crc2.canvas.height / 2 + 200);
        for (let i: number = 0; i < crc2.canvas.width; i++) {
            crc2.lineTo(i, crc2.canvas.height / 2 - Math.sin(0.4 * i * (Math.PI / 120)) * (rand3 + 50));
        }
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
        crc2.lineTo(0, crc2.canvas.height);
        crc2.closePath();
        crc2.fillStyle = "lightgrey";
        crc2.fill();

        //mittlere Bergkette
        let rand2: number = Math.random() * 50;

        crc2.beginPath();
        crc2.moveTo(0, crc2.canvas.height / 2 + 80);
        for (let i: number = 0; i < crc2.canvas.width; i++) {
            crc2.lineTo(i, crc2.canvas.height / 2 - Math.cos(i * (Math.PI / 180) + 2) * (rand2 + 20));
        }
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
        crc2.lineTo(0, crc2.canvas.height);
        crc2.closePath();
        crc2.fillStyle = "grey";
        crc2.fill();

        //vorderste Bergkette
        let rand: number = Math.random() * 20;
    
        crc2.beginPath();
        crc2.moveTo(0, crc2.canvas.height / 2);
        for (let i: number = 0; i < crc2.canvas.width; i++) {
            crc2.lineTo(i, crc2.canvas.height / 2 - Math.sin(i * (Math.PI / 180) + 0.5) * (rand + 15));
        }
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
        crc2.lineTo(0, crc2.canvas.height);
        crc2.closePath();
        crc2.fillStyle = "darkgreen";
        crc2.fill();

    }

    function drawTree(): void {
        console.log("Tree");

        crc2.save();
        crc2.translate(0, crc2.canvas.height * 0.62 - 10);

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

}