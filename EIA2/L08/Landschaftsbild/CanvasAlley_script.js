"use strict";
console.log("Script connected.");
var CanvasAlley;
(function (CanvasAlley) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let golden = 0.62;
    let randomValue;
    let x;
    let randomEndOfStreet;
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let horizon = crc2.canvas.height * golden;
        //Variables for Trees:
        let streetWidthBack = 100;
        let streetWidthFront = 600;
        let treesOffsetBack = 15;
        let treesOffsetFront = 100;
        let posMountains = { x: 0, y: horizon };
        createRandomValueInRange(-200, 200);
        console.log("Random value for end of street: " + randomValue);
        randomEndOfStreet = crc2.canvas.width / 2 + randomValue;
        let posStreet = { x: randomEndOfStreet, y: horizon };
        let posTreesStart = { x: posStreet.x - streetWidthBack / 2 - treesOffsetBack, y: horizon };
        let posTreesEnd = { x: crc2.canvas.width / 2 - streetWidthFront / 2 - treesOffsetFront, y: crc2.canvas.height };
        drawBackground();
        drawSun({ x: 100, y: 75 });
        drawCloud({ x: 500, y: 125 }, { x: 250, y: 75 });
        drawStreet({ x: crc2.canvas.width / 2, y: horizon }, 100, 600);
        drawMountains(posMountains, 75, 200, "grey", "white");
        drawMountains(posMountains, 50, 120, "darkgreen", "grey");
        drawTrees(8, posTreesStart, posTreesEnd, 0.1, 0.37, 1.4);
        posTreesStart.x = posStreet.x + streetWidthBack / 2 + treesOffsetBack;
        posTreesEnd.x = posTreesEnd.x + streetWidthFront + 2 * treesOffsetFront;
        drawTrees(8, posTreesStart, posTreesEnd, 0.1, 0.37, 1.4);
    }
    function drawTrees(_nTrees, _posStart, _posEnd, _minScale, _stepPos, _stepScale) {
        console.log("Trees", _posStart, _posEnd);
        let transform = crc2.getTransform();
        let step = {
            x: (_posEnd.x - _posStart.x) * _stepPos,
            y: (_posEnd.y - _posStart.y) * _stepPos
        };
        crc2.translate(_posStart.x, _posStart.y);
        crc2.scale(_minScale, _minScale);
        do {
            drawTree();
            crc2.translate(step.x, step.y);
            crc2.scale(_stepScale, _stepScale);
        } while (--_nTrees > 0);
        crc2.setTransform(transform);
    }
    function drawTree() {
        console.log("Tree");
        let nBranches = 50;
        let maxRadius = 60;
        let branch = new Path2D();
        branch.arc(0, 0, maxRadius, 0, 2 * Math.PI);
        crc2.fillStyle = "brown";
        crc2.fillRect(0, 0, 20, -200);
        crc2.save();
        crc2.translate(0, -120);
        do {
            let y = Math.random() * 350;
            let size = 1 - y / 700;
            let x = (Math.random() - 0.5) * 2 * maxRadius;
            crc2.save();
            crc2.translate(0, -y);
            crc2.scale(size, size);
            crc2.translate(x, 0);
            let colorAngle = 120 - Math.random() * 60;
            let color = "HSLA(" + colorAngle + ", 50%, 30%, 0.8)";
            crc2.fillStyle = color;
            crc2.fill(branch);
            crc2.restore();
        } while (--nBranches > 0);
        crc2.restore();
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(100, 80%, 30%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun", _position);
        let r1 = 30;
        let r2 = 180;
        let gradient = crc2.createRadialGradient(0, 0, r1, 0, 0, r2);
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
    function drawCloud(_position, _size) {
        console.log("Cloud", _position, _size);
        let nParticles = 50;
        let radiusParticle = 50;
        let particle = new Path2D();
        let gradient = crc2.createRadialGradient(0, 0, 0, 0, 0, radiusParticle);
        particle.arc(0, 0, radiusParticle, 0, 2 * Math.PI);
        gradient.addColorStop(0, "HSLA(0, 100%, 100%, 0.5)");
        gradient.addColorStop(1, "HSLA(0, 100%, 100%, 0)");
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.fillStyle = gradient;
        for (let drawn = 0; drawn < nParticles; drawn++) {
            crc2.save();
            let x = (Math.random() - 0.5) * _size.x;
            let y = -(Math.random() * _size.y);
            crc2.translate(x, y);
            crc2.fill(particle);
            crc2.restore();
        }
        crc2.restore();
    }
    function drawStreet(_position, _widthBack, _widthFront) {
        console.log("Street");
        /*createRandomValueInRange(-200, 200);
        console.log("Random value for end of street: " + randomValue);
        let randomEndOfStreet: number = _position.x + randomValue;*/
        crc2.beginPath();
        crc2.moveTo(randomEndOfStreet + _widthBack / 2, _position.y); //top right corner
        crc2.lineTo(crc2.canvas.width / 2 + _widthFront / 2, crc2.canvas.height); //line to bottom right corner
        crc2.lineTo(crc2.canvas.width / 2 - _widthFront / 2, crc2.canvas.height); //line to bottom left corner
        crc2.lineTo(randomEndOfStreet - _widthBack / 2, _position.y); //line to top left corner
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, _position.x, 0, crc2.canvas.height);
        gradient.addColorStop(0, "darkgrey");
        gradient.addColorStop(0.6, "black");
        crc2.fillStyle = gradient;
        crc2.fill();
    }
    function createRandomValueInRange(_min, _max) {
        randomValue = _min + Math.random() * (_max - _min);
    }
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh) {
        console.log("Mountains");
        let stepMin = 50;
        let stepMax = 150;
        x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            createRandomValueInRange(stepMin, stepMax);
            x += randomValue;
            createRandomValueInRange(-_min, -_max);
            let y = randomValue;
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.8, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.restore();
    }
})(CanvasAlley || (CanvasAlley = {}));
//# sourceMappingURL=CanvasAlley_script.js.map