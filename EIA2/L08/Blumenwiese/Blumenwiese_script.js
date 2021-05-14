"use strict";
var Blumenwiese;
(function (Blumenwiese) {
    window.addEventListener("load", handleLoad);
    let crc2;
    let randomValue;
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
        drawSun({ x: 100, y: 50 });
        drawCloud({ x: 680, y: 50 }, { x: 80, y: 20 }, 8, 40);
        drawCloud({ x: 500, y: 100 }, { x: 150, y: 30 }, 30, 50);
        drawMountains(posMountains, 20, 70, "grey", "white", "silver");
        drawMountains(posMountains, 10, 30, "saddleBrown", "tan", "sienna");
        drawManyFlowers(30);
        drawGrassBlade(150, 20, -10);
    }
    function createRandomValueInRange(_min, _max) {
        randomValue = _min + Math.random() * (_max - _min);
    }
    function drawBackground() {
        console.log("Background");
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "lightblue");
        gradient.addColorStop(golden, "white");
        gradient.addColorStop(1, "HSL(95, 85%, 28%)");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
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
        crc2.strokeStyle = _strokeColor;
        crc2.stroke();
        crc2.restore();
    }
    function drawSun(_position) {
        console.log("Sun");
        let r1 = 20;
        let r2 = 150;
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
    function drawFlower(_flowerPetals, _petalColor) {
        console.log("Flower");
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
            crc2.rotate(1.05);
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
        let petalColor = "violet";
        switch (_petalColor) {
            case 1:
            case 2:
                petalColor = "indianRed";
                break;
            case 3:
            case 4:
                petalColor = "cornflowerBlue";
                break;
            case 5:
            case 6:
                petalColor = "darkOrange";
                break;
            case 7:
            case 8:
                petalColor = "darkOrange";
            case 9:
            case 10:
                petalColor = "mediumOrchid";
            default:
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
        console.log("Grassblade");
        crc2.save();
        //crc2.translate(150, crc2.canvas.height);
        crc2.beginPath();
        crc2.moveTo(-5, 0);
        crc2.quadraticCurveTo(_bend, -_height / 2, _sway, -_height);
        crc2.quadraticCurveTo(_bend + 10, -_height / 2, 5, 0);
        crc2.closePath();
        crc2.fillStyle = "forestGreen";
        crc2.fill();
        crc2.restore();
    }
    function drawManyFlowers(_flowersAmount) {
        crc2.save();
        crc2.translate(0, horizon + 20);
        let nFlowers = _flowersAmount;
        let rand;
        let rand2;
        let rand3;
        let rand4;
        let x = 0;
        let y = 0;
        for (let n = 1; n <= nFlowers; n++) {
            rand = Math.random();
            rand2 = Math.random() / 2;
            rand3 = Math.random() * 100;
            rand4 = Math.floor(Math.random() * 10);
            if (rand3 < 20) {
                rand3 = rand3 + 20;
            }
            else if (rand3 > 70) {
                rand3 = rand3 / 2;
            }
            else if (rand3 > 50) {
                rand3 = rand3 - 30;
            }
            x = rand * crc2.canvas.width;
            y += rand2 * 30;
            crc2.save();
            crc2.translate(x, y);
            if (y > 200) {
                crc2.scale(2.2 + rand2, 2.2 + rand2);
            }
            else if (y > 150) {
                crc2.scale(1.5 + rand2, 1.5 + rand2);
            }
            else if (y > 100) {
                crc2.scale(1.2 + rand2, 1.2 + rand2);
            }
            else if (y > 50) {
                crc2.scale(0.8, 0.8);
            }
            else {
                crc2.scale(0.5, 0.5);
            }
            for (let grassBlades = 0; grassBlades < 50; grassBlades++) {
                crc2.save();
                let rand = (Math.random() - 0.5) * 100;
                let rand2 = (Math.random() - 0.5) * 100;
                let rand3 = (Math.random() - 0.5) * 10;
                crc2.translate(rand, rand2);
                crc2.scale(0.2, 0.2);
                drawGrassBlade(150 + rand3, 20 + rand3, -10 + rand3);
                crc2.restore();
            }
            drawFlower(6, rand4);
            crc2.restore();
        }
        crc2.restore();
    }
})(Blumenwiese || (Blumenwiese = {}));
//# sourceMappingURL=Blumenwiese_script.js.map