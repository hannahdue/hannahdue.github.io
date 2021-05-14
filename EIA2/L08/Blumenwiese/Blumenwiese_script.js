"use strict";
var Blumenwiese;
(function (Blumenwiese) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let x;
    let golden = 0.38;
    let horizon;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        horizon = crc2.canvas.height * golden;
        let posMountains = { x: 0, y: horizon };
        drawBackground();
        drawSun({ x: crc2.canvas.width * 0.15, y: crc2.canvas.height * 0.1 });
        drawCloud({ x: crc2.canvas.width * 0.8, y: crc2.canvas.height * 0.1 }, { x: 120, y: 40 }, 8, 40);
        drawCloud({ x: crc2.canvas.width * 0.65, y: crc2.canvas.height * 0.2 }, { x: 200, y: 80 }, 30, 50);
        drawMountains(posMountains, 20, 70, "grey", "white", "silver");
        drawMountains(posMountains, 10, 30, "saddleBrown", "tan", "sienna");
        drawMeadow();
    }
    function createRandomValueInRange(_min, _max) {
        return _min + Math.random() * (_max - _min);
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(0.35, "white");
        gradient.addColorStop(0.38, "#B3BF54");
        gradient.addColorStop(1, "#6F8C30");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
    }
    function drawSun(_position) {
        console.log("Sun");
        let r1 = 40;
        let r2 = 300;
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
    function drawCloud(_position, _size, _nParticles, _radiusParticles) {
        console.log("Cloud");
        let nParticles = _nParticles;
        let radiusParticle = _radiusParticles;
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
    function drawMountains(_position, _min, _max, _colorLow, _colorHigh, _strokeColor) {
        console.log("Mountains");
        let stepMin = 20;
        let stepMax = 50;
        x = 0;
        crc2.save();
        crc2.translate(_position.x, _position.y);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -_max);
        do {
            x += createRandomValueInRange(stepMin, stepMax);
            let y = createRandomValueInRange(-_min, -_max);
            crc2.lineTo(x, y);
        } while (x < crc2.canvas.width);
        crc2.lineTo(x, 0);
        crc2.closePath();
        let gradient = crc2.createLinearGradient(0, 0, 0, -_max);
        gradient.addColorStop(0, _colorLow);
        gradient.addColorStop(0.8, _colorHigh);
        crc2.fillStyle = gradient;
        crc2.fill();
        crc2.strokeStyle = _strokeColor;
        crc2.stroke();
        crc2.restore();
    }
    function drawMeadow() {
        console.log("Meadow");
        crc2.save();
        crc2.translate(0, horizon);
        let yMin = 0;
        let yMax = 20;
        let scale = 0.5;
        let distance = 2;
        do {
            crc2.save();
            crc2.scale(scale, scale);
            drawMeadowLayer(yMin, yMax, distance);
            yMin = yMax * 0.8;
            yMax = yMax * 1.25;
            scale = scale * 1.7;
            distance = distance * 0.8;
            //console.log(yMin, yMax);
            crc2.restore();
        } while (yMin < crc2.canvas.height - horizon);
        crc2.restore();
    }
    function drawMeadowLayer(_yMin, _yMax, _distance) {
        let y;
        let randomHeight;
        let randomSway;
        let randomBend;
        //Grasschicht
        for (let step = 0; step < crc2.canvas.width * 2; step += _distance) {
            y = createRandomValueInRange(_yMin, _yMax);
            randomHeight = Math.random() * 50;
            randomSway = (Math.random() - 0.5) * 80;
            randomBend = (Math.random() - 0.5) * 60;
            if (randomSway > 0 && randomBend > 0) {
                randomBend = randomBend * -1;
            }
            crc2.save();
            crc2.translate(step, y);
            drawGrassBlade(130 + randomHeight, randomSway, randomBend);
            crc2.restore();
        }
        //Blumenschicht
        for (let stepWidth = createRandomValueInRange(0, 60); stepWidth < crc2.canvas.width * 2; stepWidth += createRandomValueInRange(20, 100)) {
            y = createRandomValueInRange(_yMax * 0.9, _yMax * 1.3);
            let randomColorPicker = Math.floor(Math.random() * 10);
            crc2.save();
            crc2.translate(stepWidth, y);
            drawFlower(5, randomColorPicker);
            crc2.restore();
        }
    }
    function drawFlower(_flowerPetals, _petalColor) {
        crc2.save();
        //Blumenstiel
        //crc2.translate(50, crc2.canvas.height);
        crc2.scale(0.3, 0.3);
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(0, -100);
        crc2.closePath();
        crc2.lineWidth = 4;
        crc2.strokeStyle = "darkgreen";
        crc2.stroke();
        //Blätter
        crc2.beginPath();
        crc2.moveTo(0, -15);
        crc2.quadraticCurveTo(-20, -25, -20, -42);
        crc2.quadraticCurveTo(-7, -38, 0, -20);
        crc2.moveTo(0, -40);
        crc2.quadraticCurveTo(10, -40, 11, -50);
        crc2.quadraticCurveTo(8, -50, 0, -45);
        crc2.closePath();
        crc2.fillStyle = "green";
        crc2.fill();
        crc2.stroke();
        crc2.save();
        //Blütenblätter
        let gradientMiddle = crc2.createRadialGradient(0, 0, 0, 0, 0, 15);
        gradientMiddle.addColorStop(0.5, "khaki");
        gradientMiddle.addColorStop(1, "gold");
        crc2.translate(0, -100);
        for (let flowerPetals = 0; flowerPetals < _flowerPetals; flowerPetals++) {
            crc2.rotate(1.25);
            drawFlowerPetal(_petalColor);
            if (flowerPetals == _flowerPetals - 1) {
                crc2.beginPath();
                crc2.arc(0, 0, 15, 0, 2 * Math.PI);
                crc2.closePath();
                crc2.fillStyle = gradientMiddle;
                crc2.fill();
            }
        }
        //Blütenblätter Ende
        crc2.restore();
        crc2.restore();
    }
    function drawFlowerPetal(_petalColor) {
        let petalColor = "HSL(" + _petalColor * 36 + ", 70%, 40%)";
        switch (_petalColor) {
            case 1:
            case 2:
                petalColor = "indianRed";
                break;
            case 4:
                petalColor = "cornflowerBlue";
                break;
            case 6:
                petalColor = "darkOrange";
                break;
            case 7:
            case 8:
                petalColor = "orange";
            case 10:
                petalColor = "mediumOrchid";
            default:
                petalColor = "HSL(" + _petalColor * 36 + ", 70%, 40%)";
                break;
        }
        //Farbverlauf
        let gradient = crc2.createLinearGradient(0, 0, 0, -40);
        gradient.addColorStop(0, "white");
        gradient.addColorStop(1, petalColor);
        //Blütenblatt
        crc2.beginPath();
        crc2.moveTo(0, 0);
        crc2.lineTo(-13, -20);
        crc2.bezierCurveTo(-24, -50, 24, -50, 13, -20);
        crc2.closePath();
        crc2.fillStyle = gradient;
        //crc2.strokeStyle = "violet";
        //crc2.stroke();
        crc2.fill();
    }
    function drawGrassBlade(_height, _sway, _bend) {
        crc2.save();
        //crc2.translate(150, crc2.canvas.height);
        crc2.scale(0.09, 0.17);
        crc2.beginPath();
        crc2.moveTo(-5, 0);
        crc2.quadraticCurveTo(_bend, -_height / 2, _sway, -_height);
        crc2.quadraticCurveTo(_bend + 10, -_height / 2, 5, 0);
        crc2.closePath();
        let randomGrassColor = Math.floor(createRandomValueInRange(1, 5));
        let grassColor = "#6F8C30";
        switch (randomGrassColor) {
            case 1:
                grassColor = "#40592E";
                break;
            case 2:
                grassColor = "#51732F";
                break;
            case 3:
                grassColor = "#82A633";
                break;
            case 4:
                grassColor = "#6F8C30";
                break;
            case 5:
                grassColor = "#B3BF54";
                break;
            default:
                break;
        }
        crc2.fillStyle = grassColor;
        crc2.fill();
        crc2.restore();
    }
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=Blumenwiese_script.js.map