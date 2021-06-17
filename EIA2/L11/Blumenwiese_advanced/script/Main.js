"use strict";
/*
Aufgabe: L11.1
Name: Hannah Dürr
Datum: Juni 2021
Quellen: Für die Animation Teile von Jirkas Android-Code, die Wolken-Form von https://stackoverflow.com/questions/19541192/how-to-draw-cloud-shape-in-html5-canvas
*/
var Blumenwiese_advanced;
(function (Blumenwiese_advanced) {
    window.addEventListener("load", handleLoad);
    let x;
    let golden = 0.38;
    let horizon;
    let layer;
    let backgroundimage;
    let cloud1;
    let cloud2;
    let moveables = [];
    let flowers = [];
    let grassblades = [];
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        Blumenwiese_advanced.crc2 = canvas.getContext("2d");
        horizon = Blumenwiese_advanced.crc2.canvas.height * golden;
        //draw background and two clouds
        drawBackground();
        cloud1 = new Blumenwiese_advanced.Cloud(new Blumenwiese_advanced.Vector(1250, -10), 0.6);
        cloud2 = new Blumenwiese_advanced.Cloud(new Blumenwiese_advanced.Vector(930, 0), 1);
        moveables.push(cloud1, cloud2);
        cloud1.draw();
        cloud2.draw();
        createFlowers();
        createGrassblades();
        drawFlowers();
        drawBeehive();
        drawGrassblades();
        //createBees
        for (let index = 0; index < 10; index++) {
            window.setTimeout(createBee, 1000 * index);
        }
        //animate image
        //window.setInterval(update, 20);
    }
    function createRandomValueInRange(_min, _max) {
        return _min + Math.random() * (_max - _min);
    }
    Blumenwiese_advanced.createRandomValueInRange = createRandomValueInRange;
    function drawBackground() {
        console.log("Background with mountains and meadow");
        //draw backgorund colour
        let gradient = Blumenwiese_advanced.crc2.createLinearGradient(0, 0, 0, Blumenwiese_advanced.crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.35, "white");
        gradient.addColorStop(0.38, "#B3BF54");
        gradient.addColorStop(1, "#6F8C30");
        Blumenwiese_advanced.crc2.fillStyle = gradient;
        Blumenwiese_advanced.crc2.fillRect(0, 0, Blumenwiese_advanced.crc2.canvas.width, Blumenwiese_advanced.crc2.canvas.height);
        //draw landscape
        drawSun(new Blumenwiese_advanced.Vector(Blumenwiese_advanced.crc2.canvas.width * 0.15, Blumenwiese_advanced.crc2.canvas.height * 0.1));
        drawMountains(new Blumenwiese_advanced.Vector(0, horizon), 40, 100, "grey", "white", "silver");
        drawMountains(new Blumenwiese_advanced.Vector(0, horizon), 20, 60, "saddleBrown", "tan", "sienna");
        drawMeadow();
        //save image to use for animation:
        backgroundimage = Blumenwiese_advanced.crc2.getImageData(0, 0, Blumenwiese_advanced.crc2.canvas.width, Blumenwiese_advanced.crc2.canvas.height);
    }
    function createFlowers() {
        let y = 30;
        for (let i = 0; i < 20; i++) {
            let scale = 0.5;
            //let rand: number = Math.random();
            let x = Math.random() * Blumenwiese_advanced.crc2.canvas.width;
            y += Math.random() * 50;
            if (y > 400) {
                scale = 2.1;
            }
            else if (y > 300) {
                scale = 1.8;
            }
            else if (y > 200) {
                scale = 1.3;
            }
            else if (y > 100) {
                scale = 0.8;
            }
            let flower = new Blumenwiese_advanced.Flower(new Blumenwiese_advanced.Vector(x, y), scale);
            flowers.push(flower);
            if (y > 480)
                break;
        }
    }
    function drawFlowers() {
        for (let flower of flowers) {
            Blumenwiese_advanced.crc2.save();
            Blumenwiese_advanced.crc2.translate(0, horizon);
            flower.draw();
            Blumenwiese_advanced.crc2.restore();
        }
    }
    function createGrassblades() {
        let y = 0;
        let x = 0;
        for (let i = 0; i < 200; i++) {
            x += Math.random() * 35;
            let height;
            if (x > 900 && x < 1200) {
                height = 80 + Math.random() * 40;
            }
            else {
                height = 120 + Math.random() * 80;
            }
            let sway = (Math.random() - 0.5) * 80;
            let bend = (Math.random() - 0.5) * 60;
            let grassblade = new Blumenwiese_advanced.Grassblade(new Blumenwiese_advanced.Vector(x, y), height, sway, bend);
            grassblades.push(grassblade);
            if (x > Blumenwiese_advanced.crc2.canvas.width * 1.3)
                break;
        }
    }
    function drawGrassblades() {
        Blumenwiese_advanced.crc2.save();
        Blumenwiese_advanced.crc2.translate(0, Blumenwiese_advanced.crc2.canvas.height);
        Blumenwiese_advanced.crc2.scale(0.8, 1.5);
        for (let grassblade of grassblades) {
            grassblade.draw();
        }
        Blumenwiese_advanced.crc2.restore();
    }
    function createBee() {
        let bee = new Blumenwiese_advanced.Bee();
        moveables.push(bee);
    }
    function update() {
        //drawBackground();
        Blumenwiese_advanced.crc2.putImageData(backgroundimage, 0, 0);
        drawFlowers();
        drawBeehive();
        drawGrassblades();
        //animate moveables
        for (let moveable of moveables) {
            moveable.move(1 / 50);
            moveable.draw();
        }
    }
    function drawSun(_position) {
        let r1 = 40;
        let r2 = 300;
        let gradient = Blumenwiese_advanced.crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
        gradient.addColorStop(0, "HSLA(60, 100%, 90%, 1)");
        gradient.addColorStop(0.1, "HSLA(60, 100%, 90%, 0.5)");
        gradient.addColorStop(0.2, "HSLA(60, 100%, 90%, 0.3)");
        gradient.addColorStop(1, "HSLA(60, 100%, 80%, 0)");
        Blumenwiese_advanced.crc2.save();
        Blumenwiese_advanced.crc2.translate(_position.x, _position.y);
        Blumenwiese_advanced.crc2.fillStyle = gradient;
        Blumenwiese_advanced.crc2.arc(0, 0, r2, 0, 2 * Math.PI);
        Blumenwiese_advanced.crc2.fill();
        Blumenwiese_advanced.crc2.restore();
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh, _strokeColor) {
        let stepMin = 30;
        let stepMax = 70;
        x = 0;
        Blumenwiese_advanced.crc2.save();
        Blumenwiese_advanced.crc2.translate(_position.x, _position.y);
        Blumenwiese_advanced.crc2.beginPath();
        Blumenwiese_advanced.crc2.moveTo(0, 0);
        Blumenwiese_advanced.crc2.lineTo(0, -_max);
        do {
            x += createRandomValueInRange(stepMin, stepMax);
            let y = createRandomValueInRange(-_min, -_max);
            Blumenwiese_advanced.crc2.lineTo(x, y);
        } while (x < Blumenwiese_advanced.crc2.canvas.width);
        Blumenwiese_advanced.crc2.lineTo(x, 0);
        Blumenwiese_advanced.crc2.closePath();
        let gradient = Blumenwiese_advanced.crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.8, _colorHigh);
        Blumenwiese_advanced.crc2.fillStyle = gradient;
        Blumenwiese_advanced.crc2.fill();
        Blumenwiese_advanced.crc2.strokeStyle = _strokeColor;
        Blumenwiese_advanced.crc2.stroke();
        Blumenwiese_advanced.crc2.restore();
    }
    function drawMeadow() {
        Blumenwiese_advanced.crc2.save();
        Blumenwiese_advanced.crc2.translate(0, horizon);
        let yMin = 0;
        let yMax = 17;
        let scale = 0.5;
        let distance = 1.8;
        layer = 0;
        do {
            Blumenwiese_advanced.crc2.save();
            Blumenwiese_advanced.crc2.scale(scale, scale);
            drawMeadowLayer(yMin, yMax, distance, layer);
            yMin = yMax * 0.8;
            yMax = yMax * 1.25;
            scale = scale * 1.7;
            distance = distance * 0.8;
            Blumenwiese_advanced.crc2.restore();
            layer++;
        } while (layer < 7);
        Blumenwiese_advanced.crc2.restore();
    }
    function drawMeadowLayer(_yMin, _yMax, _distance, _layer) {
        let y;
        layer = _layer;
        //Grasschicht
        for (let step = 0; step < Blumenwiese_advanced.crc2.canvas.width * 2; step += _distance) {
            y = createRandomValueInRange(_yMin, _yMax);
            Blumenwiese_advanced.crc2.save();
            Blumenwiese_advanced.crc2.translate(step, y);
            Blumenwiese_advanced.crc2.scale(0.09, 0.17);
            let grassblade = new Blumenwiese_advanced.Grassblade();
            grassblade.draw();
            Blumenwiese_advanced.crc2.restore();
        }
        //Bäume
        if (layer == 2) {
            let tree = new Blumenwiese_advanced.Tree(new Blumenwiese_advanced.Vector(Blumenwiese_advanced.crc2.canvas.width / 2, _yMax), "#0A420E");
            tree.draw();
            let tree2 = new Blumenwiese_advanced.Tree(new Blumenwiese_advanced.Vector(0, _yMax), "#025928");
            tree2.draw();
        }
        else if (layer == 1) {
            let tree = new Blumenwiese_advanced.Tree(new Blumenwiese_advanced.Vector(Blumenwiese_advanced.crc2.canvas.width / 2, _yMax), "#015838");
            tree.draw();
        }
    }
    function drawBeehive() {
        Blumenwiese_advanced.crc2.save();
        Blumenwiese_advanced.crc2.translate(Blumenwiese_advanced.crc2.canvas.width * 0.59, Blumenwiese_advanced.crc2.canvas.height * 0.74);
        Blumenwiese_advanced.crc2.scale(1.3, 1.3);
        Blumenwiese_advanced.crc2.lineWidth = 8;
        Blumenwiese_advanced.crc2.strokeStyle = "sienna";
        Blumenwiese_advanced.crc2.fillStyle = "peru";
        //Beine
        Blumenwiese_advanced.crc2.beginPath();
        Blumenwiese_advanced.crc2.moveTo(-70, 100);
        Blumenwiese_advanced.crc2.lineTo(-90, 160);
        Blumenwiese_advanced.crc2.lineTo(-70, 160);
        Blumenwiese_advanced.crc2.lineTo(-50, 100);
        Blumenwiese_advanced.crc2.closePath();
        Blumenwiese_advanced.crc2.stroke();
        Blumenwiese_advanced.crc2.fill();
        Blumenwiese_advanced.crc2.beginPath();
        Blumenwiese_advanced.crc2.moveTo(70, 100);
        Blumenwiese_advanced.crc2.lineTo(90, 160);
        Blumenwiese_advanced.crc2.lineTo(70, 160);
        Blumenwiese_advanced.crc2.lineTo(50, 100);
        Blumenwiese_advanced.crc2.closePath();
        Blumenwiese_advanced.crc2.stroke();
        Blumenwiese_advanced.crc2.fill();
        //Kasten
        Blumenwiese_advanced.crc2.beginPath();
        Blumenwiese_advanced.crc2.rect(-100, -30, 200, 130);
        Blumenwiese_advanced.crc2.stroke();
        Blumenwiese_advanced.crc2.fill();
        Blumenwiese_advanced.crc2.closePath();
        Blumenwiese_advanced.crc2.beginPath();
        Blumenwiese_advanced.crc2.rect(-110, -40, 220, 10);
        Blumenwiese_advanced.crc2.stroke();
        Blumenwiese_advanced.crc2.fill();
        Blumenwiese_advanced.crc2.closePath();
        //Holzmaserung
        Blumenwiese_advanced.crc2.beginPath();
        Blumenwiese_advanced.crc2.moveTo(-100, 30);
        Blumenwiese_advanced.crc2.lineTo(100, 30);
        Blumenwiese_advanced.crc2.moveTo(-100, 65);
        Blumenwiese_advanced.crc2.lineTo(100, 65);
        Blumenwiese_advanced.crc2.lineWidth = 3;
        Blumenwiese_advanced.crc2.stroke();
        //Bienenloch
        Blumenwiese_advanced.crc2.beginPath();
        Blumenwiese_advanced.crc2.arc(0, 0, 20, 0, 2 * Math.PI);
        Blumenwiese_advanced.crc2.closePath();
        Blumenwiese_advanced.crc2.fillStyle = "black";
        Blumenwiese_advanced.crc2.fill();
        Blumenwiese_advanced.crc2.restore();
    }
})(Blumenwiese_advanced || (Blumenwiese_advanced = {}));
//# sourceMappingURL=Main.js.map