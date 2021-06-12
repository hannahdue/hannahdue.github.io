/*
Aufgabe: L10.2
Name: Hannah Dürr
Datum: 12. Juni 2021
Quellen: Für die Animation Teile von Jirkas Android-Code, die Wolken-Form von https://stackoverflow.com/questions/19541192/how-to-draw-cloud-shape-in-html5-canvas
*/

namespace Blumenwiese_inheritance {

    window.addEventListener("load", handleLoad);
    export let crc2: CanvasRenderingContext2D;
    let x: number;
    let golden: number = 0.38;
    let horizon: number;
    let layer: number;
    let backgroundimage: ImageData;
    let cloud1: Moveable;
    let cloud2: Moveable;
    let moveables: Moveable[] = [];

    function handleLoad(): void {

        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");
        horizon = crc2.canvas.height * golden;

        //draw background and two clouds
        drawBackground();
        cloud1 = new Cloud(new Vector(1250, -10), 0.6);
        cloud2 = new Cloud(new Vector(930, 0), 1);
        moveables.push(cloud1, cloud2);
        cloud1.draw();
        cloud2.draw();
        
        //createBees
        for (let index: number = 0; index < 6; index++) {
            window.setTimeout(createBees, 1000 * index);
        }

        //animate image
        window.setInterval(update, 20);
    }

    export function createRandomValueInRange(_min: number, _max: number): number {
        return _min + Math.random() * (_max - _min);
    }

    function drawBackground(): void {
        console.log("Background with mountains and meadow");
        
        //draw backgorund colour
        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.35, "white");
        gradient.addColorStop(0.38, "#B3BF54");
        gradient.addColorStop(1, "#6F8C30");

        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        
        //draw landscape
        drawSun(new Vector(crc2.canvas.width * 0.15, crc2.canvas.height * 0.1));
        drawMountains(new Vector(0, horizon), 40, 100, "grey", "white", "silver");
        drawMountains(new Vector(0, horizon), 20, 60, "saddleBrown", "tan", "sienna");
        drawMeadow();
        
        //save image to use for animation:
        backgroundimage = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);

    }

    function createBees(): void {
        for (let i: number = 0; i < 2; i++) {
            let bee: Moveable = new Bee();
            moveables.push(bee);
        }
    }

    function update(): void {
        //drawBackground();
        crc2.putImageData(backgroundimage, 0, 0);

        //move moveable objects
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }

    function drawSun(_position: Vector): void {

        let r1: number = 40;
        let r2: number = 300;
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

    function drawMountains(_position: Vector, _min: number, _max: number, _colorLow: string, _colorHigh: string, _strokeColor: string): void {

        let stepMin: number = 30;
        let stepMax: number = 70;
        x = 0;

        crc2.save();
        crc2.translate(_position.x, _position.y);

        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);

        do {
            x += createRandomValueInRange(stepMin, stepMax);
            let y: number = createRandomValueInRange(-_min, -_max);

            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);

        crc2.lineTo(x, 0);
        crc2.closePath();

        let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.8, _colorHigh);

        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.strokeStyle = _strokeColor;
        crc2.stroke();

        crc2.restore();
    }

    function drawMeadow(): void {
        crc2.save();

        crc2.translate(0, horizon);

        let yMin: number = 0;
        let yMax: number = 17;
        let scale: number = 0.5;
        let distance: number = 1.8;
        layer = 0;

        do {

            crc2.save();
            crc2.scale(scale, scale);
            drawMeadowLayer(yMin, yMax, distance, layer);

            yMin = yMax * 0.8;
            yMax = yMax * 1.25;
            scale = scale * 1.7;
            distance = distance * 0.8;

            crc2.restore();
            layer++;

        } while (layer < 7);

        crc2.restore();
    }

    function drawMeadowLayer(_yMin: number, _yMax: number, _distance: number, _layer: number): void {

        let y: number;
        layer = _layer;

        //Grasschicht
        for (let step: number = 0; step < crc2.canvas.width * 2; step += _distance) {
            y = createRandomValueInRange(_yMin, _yMax);

            crc2.save();
            crc2.translate(step, y);
            let grassblade: Grassblade = new Grassblade();
            grassblade.draw();
            crc2.restore();
        }

        //Bienenkasten
        if (layer == 5) {
            drawBeehive(_yMax);
        }

        //Blumenschicht
        for (let stepWidth: number = createRandomValueInRange(0, 60); stepWidth < crc2.canvas.width * 2; stepWidth += createRandomValueInRange(20, 100)) {

            //Blumen auf unterschiedlicher Höhe vor dem Gras verteilen
            y = createRandomValueInRange(_yMax * 0.9, _yMax * 1.3);

            //vermeiden, dass Blumen vor dem Bienenkasten stehen
            if (layer == 5 && stepWidth > 85 && stepWidth < 155) {
                continue;
            } else {
                crc2.save();
                crc2.translate(stepWidth, y);
                let flower: Flower = new Flower();
                flower.draw();
                crc2.restore();
            }
        }

        //Bäume
        if (layer == 2) {
            let tree: Tree = new Tree(new Vector(crc2.canvas.width / 2, _yMax), "#0A420E");
            tree.draw();
            let tree2: Tree = new Tree(new Vector(0, _yMax), "#025928");
            tree2.draw();
        } else if (layer == 1) {
            let tree: Tree = new Tree(new Vector(crc2.canvas.width / 2, _yMax), "#015838");
            tree.draw();
        }

    }

    function drawBeehive(_yMax: number): void {

        crc2.save();
        crc2.translate(120, _yMax - 30);
        //dem scale von der Layer (bei layer 5 etwa 12) entgegenwirken:
        crc2.scale(0.2, 0.2);
        crc2.lineWidth = 8;
        crc2.strokeStyle = "sienna";
        crc2.fillStyle = "peru";

        //Beine
        crc2.beginPath();
        crc2.moveTo(-70, 100);
        crc2.lineTo(-90, 160);
        crc2.lineTo(-70, 160);
        crc2.lineTo(-50, 100);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(70, 100);
        crc2.lineTo(90, 160);
        crc2.lineTo(70, 160);
        crc2.lineTo(50, 100);
        crc2.closePath();
        crc2.stroke();
        crc2.fill();

        //Kasten
        crc2.beginPath();
        crc2.rect(-100, -30, 200, 130);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();
        crc2.beginPath();
        crc2.rect(-110, -40, 220, 10);
        crc2.stroke();
        crc2.fill();
        crc2.closePath();

        //Holzmaserung
        crc2.beginPath();
        crc2.moveTo(-100, 30);
        crc2.lineTo(100, 30);
        crc2.moveTo(-100, 65);
        crc2.lineTo(100, 65);
        crc2.lineWidth = 3;
        crc2.stroke();

        //Bienenloch
        crc2.beginPath();
        crc2.arc(0, 0, 20, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fillStyle = "black";
        crc2.fill();

        crc2.restore();
    }
}