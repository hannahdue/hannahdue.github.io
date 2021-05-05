"use strict";
var GenerativeArt;
(function (GenerativeArt) {
    window.addEventListener("load", handleLoad);
    let crc2;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawBackground();
        drawStarrySky(100);
        //drawStars({ x: crc2.canvas.width / 2, y: crc2.canvas.height / 2 }, { x: crc2.canvas.width, y: crc2.canvas.height * 0.7 });
        drawMoon({ x: 550, y: 0 });
        drawGround();
        drawTree();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "#253D42");
        gradient.addColorStop(0.5, "#5E868F");
        //gradient.addColorStop(0.7, "#8F755E");
        //gradient.addColorStop(1, "#573C24");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawGround() {
        let gradient = crc2.createLinearGradient(0, crc2.canvas.height, 0, crc2.canvas.height / 2);
        gradient.addColorStop(0.2, "#573C24");
        gradient.addColorStop(1, "#8F755E");
        crc2.beginPath();
        crc2.moveTo(0, crc2.canvas.height);
        crc2.lineTo(0, crc2.canvas.height * 0.62);
        crc2.quadraticCurveTo(crc2.canvas.width / 2, crc2.canvas.height / 2, crc2.canvas.width, crc2.canvas.height * 0.62);
        crc2.lineTo(crc2.canvas.width, crc2.canvas.height);
        crc2.closePath();
        crc2.fillStyle = gradient;
        crc2.fill();
    }
    function drawStarrySky(_starsAmount) {
        let randomNumber;
        for (let n = 0; n < _starsAmount; n++) {
            randomNumber = Math.random();
            drawStars({ x: crc2.canvas.width / 2, y: crc2.canvas.height / 2 }, { x: crc2.canvas.width, y: crc2.canvas.height * 0.7 }, 10 + randomNumber * 30);
        }
    }
    function drawStars(_position, _size, _radius) {
        console.log("Stars");
        //let nStars: number = 100;
        let radiusStar = _radius;
        let star = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusStar);
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
        let x = (Math.random() - 0.5) * _size.x;
        let y = -(Math.random() * _size.y);
        crc2.translate(x, y);
        crc2.fill(star);
        crc2.restore();
        crc2.restore();
    }
    function calculateNumber(x1, y1, x2, y2) {
        return Math.sqrt((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2));
    }
    function drawMoon(_position) {
        crc2.save(),
            crc2.translate(_position.x, _position.y);
        crc2.rotate(25 * Math.PI / 180);
        crc2.scale(0.3, 0.3);
        crc2.arc(200, 200, 150, 0.5 * Math.PI, 1.5 * Math.PI, true);
        crc2.moveTo(200, 50);
        crc2.arcTo(600, 200, 200, 350, (200 - 50) * calculateNumber(200, 50, 600, 200) / (600 - 200));
        crc2.fillStyle = "HSLA(60, 80%, 90%, 1)";
        crc2.fill();
        crc2.restore();
    }
    function drawTree() {
        console.log("Tree");
        let nTrees = 5;
        let rand;
        for (let n = 1; n < nTrees; n++) {
            rand = Math.random() * 20;
            console.log(rand);
            crc2.save();
            crc2.translate((n + 10) * rand, rand * (n * 5));
            if (rand > 0.5) {
                crc2.scale(rand / 2, rand / 2);
            }
            else {
                crc2.scale(rand, rand);
            }
            crc2.beginPath();
            crc2.moveTo(200, 50);
            crc2.lineTo(150, 100);
            crc2.lineTo(180, 100);
            crc2.lineTo(120, 160);
            crc2.lineTo(160, 160);
            crc2.lineTo(90, 240);
            crc2.lineTo(310, 240);
            crc2.lineTo(240, 160);
            crc2.lineTo(280, 160);
            crc2.lineTo(220, 100);
            crc2.lineTo(250, 100);
            crc2.lineTo(200, 50);
            crc2.fillStyle = "green";
            crc2.fill();
            crc2.lineWidth = 3;
            crc2.stroke();
            crc2.closePath();
            //Draw the canopy
            crc2.beginPath();
            crc2.fillStyle = "#783b12";
            crc2.fillRect(180, 240, 40, 50);
            crc2.lineWidth = 3;
            crc2.strokeRect(180, 240, 40, 50); //rectangular second border
            crc2.closePath();
            //Draw the trunk
            crc2.beginPath();
            crc2.moveTo(200, 50);
            crc2.lineTo(183, 70);
            crc2.lineTo(195, 65);
            crc2.lineTo(200, 80);
            crc2.lineTo(205, 65);
            crc2.lineTo(218, 70);
            crc2.fillStyle = "#fff";
            crc2.fill();
            crc2.closePath();
            //Draw the snow on the top of the tree
            crc2.restore();
        }
    }
})(GenerativeArt || (GenerativeArt = {}));
//# sourceMappingURL=GenerativeArt_script.js.map