console.log("Skript verknüpft");
let tonA = "A.mp3";
let tonB = "C.mp3";
let tonC = "G.mp3";
let tonD = "hihat.mp3";
let tonE = "kick.mp3";
let buttonA;
let buttonB;
let buttonC;
let buttonD;
let buttonE;
let startbutton;
let grundtoene = [tonA, tonB, tonC, tonD, tonE];
let tonfolgeEinfach = [tonA, tonB, tonC, tonD, tonE];
let tonfolgeMittel = [tonA, tonB, tonC, tonD, tonE, tonA, tonB, tonC, tonD, tonE];
let tonfolgeSchwer = [tonA, tonB, tonC, tonD, tonE, tonA, tonB, tonC, tonD, tonE, tonA, tonB, tonC, tonD, tonE];
let tonfolgeSehrschwer = [tonA, tonB, tonC, tonD, tonE, tonA, tonB, tonC, tonD, tonE, tonA, tonB, tonC, tonD, tonE, tonA, tonB, tonC, tonD, tonE];
function playSound(mp3) {
    var sound = new Audio("sounds/" + mp3);
    sound.play();
}
function spieleTonfolge() {
    let song = setInterval(spielen, 2000);
    function spielen() {
        for (let index = 0; index < tonfolgeEinfach.length; index++) {
            let ton = new Audio("sounds/" + tonfolgeEinfach[index]);
            ton.play();
            console.log(ton);
            if (index > tonfolgeEinfach.length) {
                clearInterval(song);
            }
        }
    }
}
window.addEventListener("load", function () {
    console.log("geladen");
    buttonA = document.querySelector("#buttonA");
    buttonB = document.querySelector("#buttonB");
    buttonC = document.querySelector("#buttonC");
    buttonD = document.querySelector("#buttonD");
    buttonE = document.querySelector("#buttonE");
    startbutton = document.querySelector("#startbutton");
    buttonA.addEventListener("click", function () { playSound(tonA); });
    buttonB.addEventListener("click", function () { playSound(tonB); });
    buttonC.addEventListener("click", function () { playSound(tonC); });
    buttonD.addEventListener("click", function () { playSound(tonD); });
    buttonE.addEventListener("click", function () { playSound(tonE); });
    startbutton.addEventListener("click", function () { spieleTonfolge(); });
});
//# sourceMappingURL=script.js.map