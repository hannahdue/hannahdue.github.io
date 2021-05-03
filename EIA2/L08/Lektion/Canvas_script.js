"use strict";
console.log("Script connected");
var CanvasPlayground;
(function (CanvasPlayground) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        let crc2 = canvas.getContext("2d");
        crc2.fillStyle = "#FF0000";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        //GRADIENT
        let gradient = crc2.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "black");
        gradient.addColorStop(0.3, "black");
        gradient.addColorStop(0.4, "red");
        gradient.addColorStop(0.6, "red");
        gradient.addColorStop(0.7, "gold");
        gradient.addColorStop(1, "gold");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, 600, 200);
        //ARC
        crc2.beginPath();
        crc2.arc(220, 100, 20, 0, 1 * Math.PI);
        crc2.lineWidth = 5;
        crc2.strokeStyle = "white";
        crc2.closePath();
        crc2.stroke();
        //ELLIPSE
        // Draw the ellipse
        crc2.beginPath();
        crc2.ellipse(100, 100, 50, 75, Math.PI / 4, 0, 2 * Math.PI);
        crc2.stroke();
        // Draw the ellipse's line of reflection
        crc2.beginPath();
        //crc2.setLineDash([5, 5]);
        crc2.moveTo(0, 200);
        crc2.lineTo(200, 0);
        crc2.stroke();
        //TRIANGLE
        crc2.beginPath();
        crc2.moveTo(250, 40);
        crc2.lineTo(300, 120);
        crc2.lineTo(350, 40);
        crc2.lineTo(250, 40);
        crc2.lineJoin = "round";
        crc2.stroke();
        //TEXT
        crc2.font = "30px Verdana bold";
        crc2.fillStyle = "white";
        crc2.fillText("Big smile!", 200, 170);
        //crc2.strokeText("Big smile!", 200, 170);
        //PATH
        let path = new Path2D();
        path.arc(450, 100, 50, 0, 2 * Math.PI);
        crc2.stroke(path);
        crc2.beginPath();
        crc2.moveTo(2.1, 1);
        crc2.lineTo(2.1, 10);
        crc2.moveTo(4.5, 1);
        crc2.lineTo(4.5, 10);
        crc2.moveTo(7.5, 1);
        crc2.lineTo(10.5, 10);
        crc2.lineWidth = 1;
        crc2.strokeStyle = "black";
        crc2.stroke();
        //PATTERN
        let pattern = document.createElement("canvas").getContext("2d");
        pattern.canvas.width = 40;
        pattern.canvas.height = 20;
        pattern.fillStyle = "#fec";
        pattern.fillRect(0, 0, pattern.canvas.width, pattern.canvas.height);
        pattern.moveTo(0, 10);
        pattern.lineTo(10, 10);
        pattern.lineTo(20, 0);
        pattern.lineTo(30, 0);
        pattern.lineTo(40, 10);
        pattern.lineTo(30, 20);
        pattern.lineTo(20, 20);
        pattern.lineTo(10, 10);
        pattern.stroke();
        crc2.fillStyle = crc2.createPattern(pattern.canvas, "repeat");
        crc2.fillRect(0, 0, canvas.width, canvas.height);
    }
})(CanvasPlayground || (CanvasPlayground = {}));
//# sourceMappingURL=Canvas_script.js.map