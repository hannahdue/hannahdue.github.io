window.addEventListener("load", function () {
    document.querySelector(".button1").addEventListener("mousedown", function () { playSample("kick.mp3"); });
    document.querySelector(".button2").addEventListener("mousedown", function () { playSample("snare.mp3"); });
    document.querySelector(".button3").addEventListener("mousedown", function () { playSample("hihat.mp3"); });
    document.querySelector(".button4").addEventListener("mousedown", function () { playSample("F.mp3"); });
    document.querySelector(".button5").addEventListener("mousedown", function () { playSample("G.mp3"); });
    document.querySelector(".button6").addEventListener("mousedown", function () { playSample("A.mp3"); });
    document.querySelector(".button7").addEventListener("mousedown", function () { playSample("C.mp3"); });
    document.querySelector(".button8").addEventListener("mousedown", function () { playSample("laugh-1.mp3"); });
    document.querySelector(".button9").addEventListener("mousedown", function () { playSample("laugh-2.mp3"); });
    document.querySelector(".play").addEventListener("click", playSong);
});
function playSample(mp3) {
    var sound = new Audio("assets/" + mp3);
    sound.play();
}
//Array für Aufgabe 2
var jingleBells = ["assets/A.mp3", "assets/A.mp3", "assets/A.mp3", " ", "assets/A.mp3", "assets/A.mp3", "assets/A.mp3", " ", "assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/G.mp3", "assets/A.mp3", "assets/laugh-1.mp3"];
function playSong() {
    var song = setInterval(startJingleBells, 400);
    var index = 0;
    function startJingleBells() {
        var playAudio = new Audio(jingleBells[index]);
        playAudio.play();
        index += 1;
        if (index > 13) {
            index = 0;
        }
    }
}
//# sourceMappingURL=script.js.map