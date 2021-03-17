console.log("Skript verknüpft");

let tonA: string = "A.mp3";
let tonB: string = "C.mp3";
let tonC: string = "G.mp3";
let tonD: string = "hihat.mp3";
let tonE: string = "kick.mp3";

let buttonA: HTMLDivElement;
let buttonB: HTMLDivElement;
let buttonC: HTMLDivElement;
let buttonD: HTMLDivElement;
let buttonE: HTMLDivElement;
let startbutton: HTMLElement;

let grundtoene: string[] = [tonA, tonB, tonC, tonD, tonE];

let tonfolgeEinfach: string[] = [tonA, tonB, tonC, tonD, tonE];
let tonfolgeMittel: string[] = [tonA, tonB, tonC, tonD, tonE, tonA, tonB, tonC, tonD, tonE];
let tonfolgeSchwer: string[] = [tonA, tonB, tonC, tonD, tonE, tonA, tonB, tonC, tonD, tonE,tonA, tonB, tonC, tonD, tonE];
let tonfolgeSehrschwer: string[] = [tonA, tonB, tonC, tonD, tonE, tonA, tonB, tonC, tonD, tonE, tonA, tonB, tonC, tonD, tonE, tonA, tonB, tonC, tonD, tonE];


function playSound(mp3: string): void {
    var sound: HTMLAudioElement = new Audio("sounds/" + mp3);
    sound.play();
}

function spieleTonfolge(): void {
    let song: number = setInterval(spielen, 2000);
    
    function spielen(): void {
        for (let index: number = 0; index < tonfolgeEinfach.length; index++) {
            let ton: HTMLAudioElement = new Audio ("sounds/" + tonfolgeEinfach[index]);
            ton.play();
            console.log(ton);
            if (index > tonfolgeEinfach.length) {
                clearInterval(song);
            }
        } 
    }
}




window.addEventListener("load", function (): void {
    console.log("geladen");

    buttonA = document.querySelector("#buttonA");
    buttonB = document.querySelector("#buttonB");
    buttonC = document.querySelector("#buttonC");
    buttonD = document.querySelector("#buttonD");
    buttonE = document.querySelector("#buttonE");
    startbutton = document.querySelector("#startbutton");

    buttonA.addEventListener("click", function (): void {playSound(tonA); });
    buttonB.addEventListener("click", function (): void {playSound(tonB); });
    buttonC.addEventListener("click", function (): void {playSound(tonC); });
    buttonD.addEventListener("click", function (): void {playSound(tonD); });
    buttonE.addEventListener("click", function (): void {playSound(tonE); });

    startbutton.addEventListener("click", function (): void {spieleTonfolge(); });

});