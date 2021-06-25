/*
Aufgabe: L11.2
Name: Hannah Dürr
Datum: Juni 2021
Quellen: Für die Animation Teile von Jirkas Android-Code, die Wolken-Form von https://stackoverflow.com/questions/19541192/how-to-draw-cloud-shape-in-html5-canvas
*/

namespace Blumenwiese_advanced_2 {

    window.addEventListener("load", handleLoad);
    window.addEventListener("pointerup", handlePointerup);

    export let crc2: CanvasRenderingContext2D;
    export let allFlowers: Flower[] = [];
    export let flowers: Flower[] = [];
    let x: number;
    let golden: number = 0.38;
    let horizon: number;
    let layer: number;
    let backgroundimage: ImageData;
    let cloud1: Moveable;
    let cloud2: Moveable;
    let moveables: Moveable[] = [];
    let grassblades: Grassblade[] = [];

    export enum ACTION {
        FLY,
        EAT,
        RETURN,
        UNLOAD
        }

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

        createFlowers();
        createGrassblades();
        drawFlowers();
        drawBeehive();
        drawGrassblades();

        //createBees
        for (let index: number = 0; index < 1; index++) {
            window.setTimeout(createBee, 1000 * index);
        }

        //animate image
        window.setInterval(update, 20);
    }

    function handlePointerup(_event: PointerEvent): void {
        console.log("custom Bee");
        let bee: Bee = new Bee(new Vector(_event.offsetX, _event.offsetY));
        moveables.push(bee);
    }

    export function createRandomValueInRange(_min: number, _max: number): number {
        return _min + Math.random() * (_max - _min);
    }

    function update(): void {
        //drawBackground();
        crc2.putImageData(backgroundimage, 0, 0);
        drawFlowers();
        drawBeehive();
        drawGrassblades();
        //animate moveables
        for (let moveable of moveables) {
            moveable.action(1 / 50);
        }
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

    function createFlowers(): void {
        let x: number = 0;
        for (let i: number = 0; i < 12; i++) {
            let scale: number = 0.5 + Math.random() * 0.15;
            x += 100 + Math.random() * 80;
            let y: number = (horizon + 30) + createRandomValueInRange(30, 80);
            let flower: Flower = new Flower(new Vector(x, y), scale);
            allFlowers.push(flower);
            if (x > crc2.canvas.width * 1.3)
                break;
        }

        x = 0;
        for (let i: number = 0; i < 9; i++) {
            let scale: number = 1.2 + Math.random() * 0.35;
            x += 100 + Math.random() * 150;
            let y: number = (horizon + 30) + createRandomValueInRange(120, 250);

            let flower: Flower = new Flower(new Vector(x, y), scale);
            allFlowers.push(flower);
            flowers.push(flower);

            if (x > crc2.canvas.width * 1.3)
                break;
        }

        x = 0;
        for (let i: number = 0; i < 7; i++) {
            let scale: number = 2.1 + Math.random() * 0.5;
            if (i == 0) {
                x = 20; //so there's no gap on the left side of the canavs
            }
            let y: number = (horizon + 30) + createRandomValueInRange(380, 470);

            let flower: Flower = new Flower(new Vector(x, y), scale);
            allFlowers.push(flower);
            flowers.push(flower);

            x += 150 + Math.random() * 200;
            if (x > crc2.canvas.width * 1.3)
                break;
        }
    }

    function drawFlowers(): void {
        for (let flower of allFlowers) {
            crc2.save();
            //crc2.translate(0, horizon + 30);
            flower.updateFlower();
            crc2.restore();
        }
    }

    function createGrassblades(): void {
        let y: number = 0;
        let x: number = 0;

        for (let i: number = 0; i < 200; i++) {
            x += Math.random() * 35;
            let height: number;
            if (x > 900 && x < 1200) {
                height = 80 + Math.random() * 40;
            } else {
                height = 120 + Math.random() * 80;
            }
            let grassblade: Grassblade = new Grassblade(new Vector(x, y), height);
            grassblades.push(grassblade);

            if (x > crc2.canvas.width * 1.3)
                break;
        }
    }

    function drawGrassblades(): void {
        crc2.save();
        crc2.translate(0, crc2.canvas.height);
        crc2.scale(0.8, 1.5);

        for (let grassblade of grassblades) {
            grassblade.draw();
        }

        crc2.restore();
    }

    function createBee(): void {
        let bee: Moveable = new Bee();
        moveables.push(bee);
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
            crc2.scale(0.09, 0.17);
            let grassblade: Grassblade = new Grassblade();
            grassblade.draw();
            crc2.restore();
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

    function drawBeehive(): void {

        crc2.save();
        crc2.translate(crc2.canvas.width * 0.59, crc2.canvas.height * 0.74);
        crc2.scale(1.3, 1.3);
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