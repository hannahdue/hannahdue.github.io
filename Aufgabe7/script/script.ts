
window.addEventListener("load", function (): void {
    document.querySelector(".button1").addEventListener("mousedown", function (): void { playSample("kick.mp3"); });
    document.querySelector(".button2").addEventListener("mousedown", function (): void { playSample("snare.mp3"); });
    document.querySelector(".button3").addEventListener("mousedown", function (): void { playSample("hihat.mp3"); });
    document.querySelector(".button4").addEventListener("mousedown", function (): void { playSample("F.mp3"); });
    document.querySelector(".button5").addEventListener("mousedown", function (): void { playSample("G.mp3"); });
    document.querySelector(".button6").addEventListener("mousedown", function (): void { playSample("A.mp3"); });
    document.querySelector(".button7").addEventListener("mousedown", function (): void { playSample("C.mp3"); });
    document.querySelector(".button8").addEventListener("mousedown", function (): void { playSample("laugh-1.mp3"); });
    document.querySelector(".button9").addEventListener("mousedown", function (): void { playSample("laugh-2.mp3"); });
    document.querySelector(".play").addEventListener("click", playSong);
});


function playSample(mp3: string): void {
    var sound: HTMLAudioElement = new Audio("assets/" + mp3);
    sound.play();
}

//Array für Aufgabe 2

var jingleBells: string[] = ["assets/A.mp3", "assets/A.mp3", "assets/A.mp3", " ", "assets/A.mp3", "assets/A.mp3", "assets/A.mp3", " ", "assets/A.mp3", "assets/C.mp3", "assets/F.mp3", "assets/G.mp3", "assets/A.mp3", "assets/laugh-1.mp3"];

function playSong(): void {
    var song: number = setInterval(startJingleBells, 400);
    var index: number = 0;

    function startJingleBells(): void {
        var playAudio: HTMLAudioElement = new Audio(jingleBells[index]);
        playAudio.play();
        index += 1;
        if (index > 13) {
            index = 0;
        }
    }
}

