
//zwei arrays mit farben und wertigkeiten

console.log("gekoppelt");

interface Spielkarte {
    farbe: string;
    wertigkeit: string;
}

var kartenBlatt: Spielkarte = {
    farbe: "rot",
    wertigkeit: "bube"
};

window.addEventListener("load", function(): void {

    function spielkarteInDOM(): void {
        var kartenDOMElement: HTMLElement = document.querySelector(".kartenstapel");
        for (let index: number = 0; index < listObject.length; index++) {
    
            let karte: HTMLElement = document.createElement("div");
            karte.classList.add("karte");
    
        }
    }

})