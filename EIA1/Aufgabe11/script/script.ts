//EIA-Abgabe: Kartenspiel von Hannah Dürr
//Das Kartenspiel ist eine vereinfachte Version von Uno. Abwechselnd wird, wenn möglich, eine Karte gelegt, die der 
//letzten Karte auf dem Stapel in Wertigkeit oder Farbe übereinstimmen muss. Wenn das nicht möglich ist, muss eine 
//Karte aufgenommen werden und der Gegener ist an der Reihe. Das Spiel geht so lange, bis eine Person keine Karten mehr 
//hat. Dann hat diese Person gewonnen. Die Spielkarten werden in Arrays gespeichert und über die Funktionen zwischen
//den Arrays verschoben. Zugeordnete Felder im HTML-Dokument stellen die Karten optisch dar.

//Als erstes wird überprüft, ob das Skript korrekt mit dem HTML-Dokument verknüpft ist.
console.log("skript verknüpft");

//Dann werden einmal die wichtigsten Variablen deklariert, die richtigen Felder werden später zugewiesen, sobald der DOM geladen ist.
//Hier handelt es sich um HTML-Elemente, die mit Klassen dem Kartenstapel, der Spielerhand und der Gegnerhand zugewiesen werden.
let cardDOMElement: HTMLElement;
let playedcardsDOMElement: HTMLElement;
let spielerDOMElement: HTMLElement;
let gegnerDOMElement: HTMLElement;
let startButton: HTMLElement;

//Ausßerdem wird einmal das interface für den Typ Spielkarte deklariert, da dieses später für alle Arrays angewendet wird.
interface Spielkarte {
    farbe: string;
    wertigkeit: string;
    uniqueId: number;
}

//Vier Array-Variablen werden deklariert. Gefüllt werden diese später durch die Funktion AusgangsZustand, da diese auch beim 
//klicken auf den Start-Button abgerufen wird. 
let kartenBlatt: Spielkarte [];

let spielerHand: Spielkarte [];

let gegnerHand: Spielkarte [];

let ablegeStapel: Spielkarte [];

//Die Funktion AusgansZustand legt fest, wie die Verteilung der Karten in den Arrays zum Spielbeginn aussieht. Dafür gibt es eine 
//extra Funktion, damit dieser Zustand beim Klicken auf den Start-Button aufgerufen werden und der AusgangsZustand wieder hergestellt
//werden kann. Zu Beginn liegen alle Karten in dem Array kartenBlatt, dem Ziehstapel.
function AusgangsZustand(): void {
    kartenBlatt = [
        {farbe: "red", wertigkeit: "1", uniqueId: 0},
        {farbe: "red", wertigkeit: "2", uniqueId: 0},
        {farbe: "red", wertigkeit: "3", uniqueId: 0},
        {farbe: "red", wertigkeit: "4", uniqueId: 0},
        {farbe: "red", wertigkeit: "5", uniqueId: 0},
        {farbe: "red", wertigkeit: "6", uniqueId: 0},
        {farbe: "red", wertigkeit: "7", uniqueId: 0},
        {farbe: "red", wertigkeit: "8", uniqueId: 0},
        {farbe: "blue", wertigkeit: "1", uniqueId: 0},
        {farbe: "blue", wertigkeit: "2", uniqueId: 0},
        {farbe: "blue", wertigkeit: "3", uniqueId: 0},
        {farbe: "blue", wertigkeit: "4", uniqueId: 0},
        {farbe: "blue", wertigkeit: "5", uniqueId: 0},
        {farbe: "blue", wertigkeit: "6", uniqueId: 0},
        {farbe: "blue", wertigkeit: "7", uniqueId: 0},
        {farbe: "blue", wertigkeit: "8", uniqueId: 0},
        {farbe: "yellow", wertigkeit: "1", uniqueId: 0},
        {farbe: "yellow", wertigkeit: "2", uniqueId: 0},
        {farbe: "yellow", wertigkeit: "3", uniqueId: 0},
        {farbe: "yellow", wertigkeit: "4", uniqueId: 0},
        {farbe: "yellow", wertigkeit: "5", uniqueId: 0},
        {farbe: "yellow", wertigkeit: "6", uniqueId: 0},
        {farbe: "yellow", wertigkeit: "7", uniqueId: 0},
        {farbe: "yellow", wertigkeit: "8", uniqueId: 0},
        {farbe: "green", wertigkeit: "1", uniqueId: 0},
        {farbe: "green", wertigkeit: "2", uniqueId: 0},
        {farbe: "green", wertigkeit: "3", uniqueId: 0},
        {farbe: "green", wertigkeit: "4", uniqueId: 0},
        {farbe: "green", wertigkeit: "5", uniqueId: 0},
        {farbe: "green", wertigkeit: "6", uniqueId: 0},
        {farbe: "green", wertigkeit: "7", uniqueId: 0},
        {farbe: "green", wertigkeit: "8", uniqueId: 0}
        ];
    spielerHand = [];
    gegnerHand = [];
    ablegeStapel = [];
    cardDOMElement.innerHTML = "";
    playedcardsDOMElement.innerHTML = "";
    spielerDOMElement.innerHTML = "";
    gegnerDOMElement.innerHTML = "";
}

//Diese Funktion mischt die Karten, in dem jedem Objekt im Array ein zufälliger Index zugeteilt wird. 
//Sie wird auch beim Klick auf Start aufgerufen.
function mischeKarten(): void {
    var tmp, rand;
    for (var i: number = 0; i < kartenBlatt.length; i++) {
      rand = Math.floor(Math.random() * kartenBlatt.length);
      tmp = kartenBlatt[i]; 
      kartenBlatt[i] = kartenBlatt[rand]; 
      kartenBlatt[rand] = tmp;
    }
    console.log("gemischt");
}

//Diese Funktion nimmt sich die oberste Karte vom Ziehstapel, also das letzte Objekt im Array kartenBlatt, löscht (pop) es dort und 
//verschiebt (push) es auf den Ablegestapel. Wird auch bei Spielstart aufgerufen.
function deckeObersteKarteAuf(): void {
    let obersteKarte: Spielkarte = kartenBlatt.pop(); //pop löscht nicht nur, sondern gibt auch den gelöschten Wert zurück, womit man weiterarbeiten kann.
    ablegeStapel.push(obersteKarte);
}

//Die Funktion AktualisiereKartenstapel ist nur dafür da, den Ziehstapel im HTML Dokument abzubilden. Da dieser Stapel niemals aufgedeckt 
//ist, reicht es, zu etscheiden, ob dort (mindestens) eine Karte liegt oder nicht.
function AktualisiereKartenstapel(): void {
    //var letzteKarteAufStapel: Spielkarte = kartenBlatt[kartenBlatt.length - 1]; mit dieser Variable wurde gearbeitet, als das Kartenspiel
    //noch aufgedeckt gespielt wurde. Die Wertigkeit und Fareb der obersten Karte wurden mithilfe dieser Variable und innerHTML dargestellt.
    if (kartenBlatt.length == 0) {
        cardDOMElement.innerHTML = "";
    } else {
        cardDOMElement.innerHTML = "<div class='cards cardback'></div>";
    }
}

//Diese Funktion bildet den Ablegestapel im HTML-Dokument ab. Auch hier wird wieder die oberste Karte als Variable deklariert und anhand 
//dieser Variable kann man sich Farbe und Wertigkeit über innerHTML darstellen lassen.
function AktualisiereAblagestapel(): void {
    var obersteKarte: Spielkarte = ablegeStapel[ablegeStapel.length - 1];
    playedcardsDOMElement.innerHTML = "<div class='cards' style='background-image: url(graphics/" + obersteKarte.farbe + "card.jpg)'>" + "<span class='wertigkeit'>" + obersteKarte.wertigkeit + "</span>" + "</div>";
}

//Die Funktion prüft, ob die Karte, die abgelegt werden soll, auch abgelegt werden darf. Es wird also geschaut, ob entweder Wertigkeit oder
//Farbe gleich sind und gibt entweder true oder false zurück. Darauf wird später, wenn der Spieler am Zug ist, gehört. Wenn false zurückgegeben
//wird, kann der Spieler nicht legen. Auch hier wird wieder eine Variable für die letze Karte auf dem Ablegestapel deklariert, auf die man im 
//folgenden zurückgreifen kann.
function pruefeUebereinstimmung(geklickteKarte: Spielkarte): boolean {
    var letzteKarteAufAblegestapel: Spielkarte = ablegeStapel[ablegeStapel.length - 1];
    //wenn wertigkeit gewählte karte == wertigkeit letzte karte auf ablegestapel, true
    if (geklickteKarte.wertigkeit == letzteKarteAufAblegestapel.wertigkeit) {
        return true;
    //wenn farbe gewählte Karte == farbe letzte karte auf ablegestapel, true
    } else if (geklickteKarte.farbe == letzteKarteAufAblegestapel.farbe) {
        return true;
    //ansonsten: false, funktion des ablegens wird nicht ausgeführt
    } else {
        return false;
    }
}

//Spieler
//Nun kommen wir zum eigentlichen Spiel. Sowohl der Spieler als auch der Gegner haben eine Funktion zum ziehen einer Karte, beim Spieler
//steckt in dieser auch gleich noch die Funktion zum ausführen eines Spielzuges. Das kommt daher, dass die Variable "element" innerhalb der
//Funktion deklariert wird. So kann nicht außerhalb davon darauf zugegriffen werden.
function SpielerZiehtKarteVonStapel(): void {
    //Wieder wird eine Variable für die oberste Karte des Ziehstapels deklariert. Dieser wird dann per Zufallszahl eine einzigartige ID-Nummer
    //zugewiesen, um später zum ausspielen der Karten auf genau die geklickte Karte zugreifen zu können. Zum ziehen wird die letzte Karte vom
    //Stapel aus dem kartenBlatt gelöscht (pop) und in die spielerHand gepusht.
    var letzteKarteVomStapel: Spielkarte = kartenBlatt.pop();
    var randomId: number = Math.random() * 10000;
    var randomIdText: string = randomId.toFixed(0);
    letzteKarteVomStapel.uniqueId = randomId;
    spielerHand.push(letzteKarteVomStapel);

    //es wird für jede Karte ein neues, leeres div-Element kreiert, in das dann per innerHTML die Spielkarte gezeichnet werden kann.
    var element: HTMLElement = document.createElement("div");
    element.classList.add(".kartenwrapper");
    element.setAttribute("style", "float: left");

    //Zum Zeichnen der Karte in den DOM wird nun auf Wertigkeit und Farbe der letzten Karte vom Ziehstapel (dafür die Variable) zugegriffen.
    element.innerHTML += "<div class='cards spielerkarten' id='uniqueID" + randomIdText + "' style='background-image: url(graphics/" + letzteKarteVomStapel.farbe + "card.jpg)'>" + "<span class='wertigkeit'>" + letzteKarteVomStapel.wertigkeit + "</span>" + "</div>";

    //das div-Element mit der Spielkarte wird nun an das Spielerkartenelement hinzugefügt und der Ziehstapel aktualisiert.
    spielerDOMElement.appendChild(element);
    AktualisiereKartenstapel();

    //Funktion zum ausführen eines Spielzuges durch den Spieler
    //Damit der Spieler seine Karten ausspielen kann, wird an jede Spielkarte ein Eventlistener gehängt. Hier kommt nun die verher erstellte 
    //ID zum Einsatz. Dann wird die Kartenhand durchlaufen und geschaut, ob die Karte abgelegt werden darf.
    spielerDOMElement.querySelector("#uniqueID" + randomIdText).addEventListener("click", function SpielerSpielt(): void {
        for (var index: number = 0; index < spielerHand.length; index++) {
            //die geklickte Karte wird als Variable deklariert.
            var geklickteKarte: Spielkarte = spielerHand[index];
            //Dann wird geschaut, ob entweder Wertigkeit oder Farbe der geklickten Karte mit der obersten auf dem Ablegestapel übereinstimmen.
            if (pruefeUebereinstimmung(geklickteKarte) == true) {
                //Wenn ja, dann wird die Karte aus der Spielerhand gelöscht, in den Ablegestapel verschoben und dieser aktualisiert.
                spielerHand.splice(index, 1);
                ablegeStapel.push(geklickteKarte);
                spielerDOMElement.removeChild(element);
                AktualisiereAblagestapel();
                //Hier wird geschaut, ob der Spieler noch Karten auf der Hand hat, nachdem er gelegt hat. Wenn nicht, hat er gewonnen.
                if (spielerHand.length == 0) {
                    SpielerSieg();
                    //Hier wird die Funktion davon abgehalten, weiter ausgeführt zu werden.
                    return;
                }
                //Wenn der Spieler noch Karten auf der Hand hat, ist der Spieler jetzt dran.
                GegnerSpielt();
                //Hier wird die aktuelle Schleife beendet.
                break;
            }
        }
    });
    //An dieser Stelle wird noch einmal geprüft, ob weitergespielt werden kann oder das Spie beendet ist.
    SpielBeendet();
    console.log("austeilen");
}

//Gegner
//Zu Beginn und wenn er nicht ablegen kann, muss auch der Gegner Karten ziehen. Das läuft genauso ab, wie das ziehen der Spielerkarten, 
//mit dem Unterschied, dass die Karten verdeckt sind. Hier wird einfach pro Objekt, was in die gegnerHand hinzugefügt wird, eine Karte
//gezeichnet. Diese haben nur eine repräsentative Funktion und geben die Anzahl wieder, nicht aber die genaue Karte, damit der Spieler
//auch nicht einfach schummeln und in den DOM schauen kann. ;-)
function GegnerZiehtKarteVonStapel(): void {
    var letzteKarteVomStapel: Spielkarte = kartenBlatt.pop();
    gegnerHand.push(letzteKarteVomStapel);

    gegnerDOMElement.innerHTML += "<div class='cards cardback gegnerkarten'></div>";
    
    AktualisiereKartenstapel();
    SpielBeendet();
    console.log("austeilen");
}


function GegnerSpielt(): void {
    //damit die SPielzüge von Spieler und Gegner nicht zeitgleich stattfinden (weild er Computer so schnell ist), wird die Funktion
    //hier etwas verzögert ausgeführt. Das Prinzip des Karten-Ausspielens ist das geliche wie beim Spieler, mit dem Unterschied, dass
    //auf keine Karte geklicht wird, sondern die Hand des Gegners durchlaufen wird und die erstmögliche Karte abgelegt wird.
    setTimeout(() => {
        for (let index: number = 0; index < gegnerHand.length; index++) {
            if (pruefeUebereinstimmung(gegnerHand[index]) == true) {
                ablegeStapel.push(gegnerHand[index]);
                gegnerHand.splice(index, 1);
                //Eine Karte wird entfernt. Welche, ist egal, da hie rnur die Kartenanzahl repräsentiert wird.
                gegnerDOMElement.removeChild(gegnerDOMElement.firstChild);
                AktualisiereAblagestapel();
                if (gegnerHand.length == 0) {
                    GegnerSieg();
                }
                //wenn Gegner eine Karte ablegen konnte, soll die Funktion nicht weiter ausgeführt werden.
                return;
            }
        }
        //Wenn der Gegner keine Karte spielen kann, muss er eine Karte aufnehmen.
        GegnerZiehtKarteVonStapel();
        //Auch hier wird wieder geprüft, ob das Spiel noch weiter verlaufen soll.
        SpielBeendet();
    }, 1000);
}


//Das Spiel ist beendet, wenn:
//A: Keine Karten mehr übrig sind, derjenige mit weniger Karten gewinnt, wird über diese Funktion geprüft.
//B: Einer der Spielenden seine letzte Karte legt, was direkt beim Ablegen geprüft wird. Dieser gewinnt dann.

function SpielBeendet(): void {
    if (kartenBlatt.length == 0) {
        if (spielerHand.length < gegnerHand.length) {
            SpielerSieg();
        } else {
            GegnerSieg();
        }
    }
}

function SpielerSieg(): void {
    alert("Herzlichen Glückwunsch! Du hast gewonnen!");
}

function GegnerSieg(): void {
    alert("Dein Gegner hat das Spiel gewonnen.");
}

//Im Window-Eventlistener werden schließlich den zu Beginn deklarierten Variablen Werte zugewiesen (Start-Button oder Spielfeldbereiche).
//Dann wird der Ausgangszustand hergestellt. Wenn man auf Start klickt, werden die Karten gemischt und jedem Spieler 3 Karten ausgeteilt, 
//die oberste Karte aufgedeckt und alle Kartenstapel aktualisiert.
//Auf den Ziehstapel kommt noch ein Eventlistener, damit bei Klick auf die oberste Karte der Spieler eine Karte aufnehmen kann.
window.addEventListener("load", function(): void {

    cardDOMElement = document.querySelector(".kartenblatt");
    playedcardsDOMElement = document.querySelector(".ablegestapel");
    spielerDOMElement = document.querySelector(".spieler");
    gegnerDOMElement = document.querySelector(".gegner");
    startButton = document.querySelector("#start");

    AusgangsZustand();
    AktualisiereKartenstapel();
    
    startButton.addEventListener("click", function(): void {
        AusgangsZustand();
        mischeKarten();
        for (let index: number = 0; index < 3; index++) {
            SpielerZiehtKarteVonStapel();
            GegnerZiehtKarteVonStapel();
        }
        deckeObersteKarteAuf();
        AktualisiereKartenstapel();
        AktualisiereAblagestapel();
    });

    cardDOMElement.addEventListener("click", function(): void {
        SpielerZiehtKarteVonStapel();
        AktualisiereKartenstapel();
        GegnerSpielt();
    });

});