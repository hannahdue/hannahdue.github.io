namespace Playground {
    window.addEventListener("load", handleLoad);
    let crc2: CanvasRenderingContext2D;

    function handleLoad(): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        crc2.fillStyle = "#253D42";
        crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        drawGround();
        drawTree();


    }

    function drawGround(): void {

        let gradient: CanvasGradient = crc2.createLinearGradient(0, crc2.canvas.height, 0, crc2.canvas.height / 2);
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

}