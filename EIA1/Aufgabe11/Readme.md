# Aufgabe 11 - Kartenspiel

**Entwickeln Sie ein Kartenspiel unter Berücksichtigung folgender Anforderungen der Spielregeln:**


- Jeder Spieler kann pro Runde eine Karte spielen, welche entweder die gleiche Farbe oder die gleiche Wertigkeit der letzten gespielten Karte besitzt. Wenn man nicht spielen kann muss man stattdessen eine Karte ziehen. Der erste Spieler ohne Karten gewinnt.

- Jede Farbe besitzt von jeder Wertigkeit eine Karte, alle Karten sind einzigartig und kommen entsprechend nicht doppelt vor.

- Das Spiel soll erst einmal nur aus zwei Spielern bestehen: ein Mensch und ein Computer. Der Spieler spielt gegen einen sehr einfachen Computer. Zu Beginn des Spiels erhalten beide Seiten eine Anzahl von Handkarten vom Kartenstapel. (mindestens 3, maximal 5).

- Eine Karte wird aus dem Kartenstapel genommen und als Startkarte auf den Ablagestapel gesetzt.

- Der Spieler kann dann auf eine seiner Handkarten klicken, woraufhin diese dann gespielt wird (insofern regeltechnisch erlaubt). Wenn er eine Karte spielen konnte ist der Gegner danach dran.

- Sollte jedoch keine Handkarte passen, muss der Spieler stattdesssen auf den Kartenstapel klicken, um eine weitere Karte zu ziehen und den Gegner den Zug zu überlassen.

- Der Gegner versucht immer eine Karte zu spielen. Dies darf die nächstbeste Karte sein. Falls keine Karte spielbar ist muss der Computer eine Karte ziehen. Danach ist der Spieler wieder an der Reihe.

- Das Spiel benötigt keine spezielle Animation bei dem spielen oder ziehen einer Karte. Diese kann einfach "sofort-artig" auf dem Ablagestapel erscheinen.


### Beurteilung

Note der End-Abgabe basiert auf den dafür ausgefüllten Anforderungs-Punkten. Bis zu ein Punkt darf dabei nicht erfüllt sein um die 1 zu erhalten.

Jeder weitere fehlende Punkt verringert die Note um 1. (4.0 >= Bestanden) 

Jedes erfüllte optionale Ziel erhöht die Note um 1. (Maximale Bestnote: 1).

Der Kurs wird im Studi-Portal mit "bestanden" / "nicht bestanden" bewertet.

### Tipps

Machen Sie sich ein Konzept!

Versuchen Sie den Spielfluss dieses Kartenspiels für nur eine Person in einem Flowchart/Anwendungsfalldiagramm darzustellen.
An welchen Punkten werden Entscheidungen gefällt? Muss der Computer gewisse Sachen abfragen?
Wann muss der Spieler interagieren, wie interagiert er, was sind seine Optionen?
Welchen Ablauf hat der Computer, wie wählt er seine Karte aus?
Wie sehen Karten aus? Welche Elemente benötigen beim Erstellen einen Eventlistenener?
Machen Sie sich darüber Gedanken, wann die aktuelle Spielfläche mit dem vorhandenen Karten neu dargestellt werden muss!


### Anforderungspunkte

Gesamt: 25.
(25 = 1.0, 24 = 1.0, 23 = 2.0, 22 = 3.0, 21 = 4.0, <= 20 = NB)

Nach folgenden Kriterien wird Ihre Abgabe bewertet:

**HTML**
- [ ] Ein schlichter Footer der mit Ihrem Namen und Matrikelnummer. 
- [ ] Semantische HTML-Tags wurden genutzt, Tags werden sinnvoll eingesetzt.

Empfohlener Aufbau für das HTML:
Vier generelle Bereiche:
Der Gegner besitzt eine Fläche, in welche seine (verdeckten) Handkarten dargstellt werden können.
Es gibt einen Stapel zum ziehen von Karten.
Es gibt eine Spielfläche, auf welcher die gespielten Karten erscheinen werden.
Eine Fläche für die eigenen Handkarten.

**CSS**
- [ ] Die Spielflächen besitzt eine passende Hintergrundfarbe (oder Hintergrundtextur).
- [ ] Spielflächen für Gegner und den Spieler verändern ihre Größe im Spielverlauf nicht und sind vom restlichen Feldern klar sichtbar getrennt (entweder über sichtbare Border oder andere Hintergrundfarbe).

**CSS-Spielkarten**
- [ ] Die Spielkarten haben eine einheitliche Größe.
- [ ] Die verschiedenen Kartenfarben werden über Klasse definiert.

Sie können auch Bilder nutzen.

TIPP 1: Vielleicht wäre es sinnvoll, erst eine einzelne Karte im HTML und CSS zu designen. Den Aufbau/die Klassen dieser Karte können später über eine Generierungsfunktion im Skript nachempfunden werden.

TIPP 2: Mittels CSS lässt sich ziemlich einfach eine Spielkarte gestalten. Abgerundete Ecken sind sehr einfach umzusetzen, und mittels Rotation kann man das umgedrehte Kartensymbol auf der unteren Seite sehr einfach gestalten.

TIPP 3: Wenn Sie Ihre Wertigkeit der Karten nicht mit Zahlen, sondern Symbolen darstellen wollen, dann können Sie auf die Icon-Font Fontawesome zurückgreifen.

**Grundlegende Programmierung**
- [ ] Das Skript erzeugt keine Fehler in der Konsole.
- [ ] Das Skript bildet 32 Karten ab (8 Wertigkeiten X 4 Farben). Jede Karte kommt nur ein mal vor. Die Karten-Generierung kann statisch, "hardcoded" im Skript sein. Empfehlung ist eine verschachtelte For()-Schleife.
- [ ] Karten-Wertigkeit können nach eigener Wahl definiert werden (Zahlen, Symbole). Das Kartenspiel muss mindestens 8 verschiedene Wertigkeiten besitzen.
Beispiel für Wertigkeiten: Zahlen von 0-9, 10, Bube, Dame, König, Ass. Oder Sie erfinden selbst welche.
- [ ] Karten können dabei ebenfalls die folgenden "Farben" annehmen:
bspw. Herz, Karo, Kreuz, Pik - oder auch einfache Farben wie: Rot, Blau, Grün, Gelb. 
- [ ] Das Skript arbeitet mit mehreren Arrays. Eines für den Karten-Ziehstapel, eines für die Spieler-Hand, eine für die Gegner-Hand und eines für den Karten- Ablagestapel.
- [ ] Das Karten-Array kann mittels einer Funktion gemischt werden. Eigenrecherche möglicherweise Notwendig. Zu Beginn des Spiels werden die Karten gemischt.
- [ ] Karten werden zwischen den verschiedenen Arrays verschoben. Wenn eine Karte gespielt wird, wird sie erst in das neue Array gepusht, danach aus ihrem Ursprungsarray gelöscht. Dafür werden Ihnen Methoden wie push() und splice() nützlich sein.
- [ ] Es gibt eine Funktion, mit welchen der Spieler oder auch der Computer eine Karte vom Stapel ziehen kann.
- [ ] Es gibt eine Funktion, mit welcher die x-te Karte auf der Hand gespielt werden kann. Diese Funktion muss mittels EventListener "click" auf jede HTML- Karte des menschlichen Spielers gelegt werden.

TIPP: Sie werden natürlich noch weitere Funktion benötigen. Bspw. muss der Computer ebenfalls in der Lage sein, Karten zu ziehen.

**HTML Generierung**
- [ ] Das Skript besitzt eine Funktion um eine aufgedeckte Karte aus HTML- Elementen zu erstellen.
- [ ] Das Skript besitzt eine Funktion um eine verdeckte Karte aus HTML- Elementen zu erstellen.

TIPP: Lassen alle Karten zu Beginn offen verteilen, solange Sie das Spiel entwickeln. Wenn Ihr Code funktionstüchtig ist, dann können Sie die Karten des Computers verdeckt darstellen. Dies macht es einfacher zu kontrollieren ob alles soweit funktioniert.


**Computer-Gegner**
- [ ] Der Computer-Gegner versucht nach dem Zug des Spielers automatisch eine eigene Karte auszuspielen.
- [ ] Der Computer versucht dabei nicht "intelligent" den Spieler zu besiegen, sondern wählt die nächstbeste legbare Karte aus - oder Sie entwickeln einen schlauen Algorithmus.
- [ ] Konnte der Computer in seinem Zug keine Karte spielen, so muss er vom Kartenstapel ziehen.

TIPP: Finden Sie Weg, um die oberste Karte auf dem Ablage-Stapel anzuschauen und mit einer Karte auf einer Hand zu vergleichen. Möglicherweise ist eine Funktion hilfreich, welche überprüft ob eine Karte auf den aktuellen Stapel ablegbar ist, und entsprechend WAHR oder FALSCH zurückgibt. Eine solche Funktion könnte sowohl beim menschlichen Spieler als auch Computer praktisch sein.

**Mensch-Spieler**
- [ ] Karten ausspielen: Der Nutzer kann eine auszuspielende Karte mit der obersten Karte des Ablage-Stapels vergleichen. Verglichen wird dabei die Farbe der Karte und die Wertigkeit. Karten können nur dann gespielt werden wenn sie die gleiche Farbe haben ODER eine gleiche Wertigkeit besitzen. Sollte diese Bedingungen erfüllt sein, so verschwindet diese Karte von der "Hand" des Nutzers und der Computer ist am Zug. Diese Aktion kann durch Klick des Spielers auf eine seiner eigenen Karten ausgelöst werden oder automatisch durch den Computer, wenn eine Karte passen sollte.
- [ ] Karte aufnehmen. Sollte der Nutzer keine Karte spielen können, dann muss er eine aufnehmen. Dazu muss der Nutzer auf den Karten-Ziehstapel klicken, wodurch diese Karte dann auf die Spieler-Hand wandert.

**Karten Objekte und Karten Interface**
- [ ] Im Skript wurde ein Interface definiert, dass die Eigenschaften einer Spielkarte abbildet. Jede Karte besitzt die Eigenschaften Wertigkeit und Farbe (bei Bedarf dürfen dem Interface natürlich auch weitere Eigenschaft gegeben werden).
- [ ] Das sichtbare HTML orientiert sich an dem im Hintergrund laufendem Skript. Das aktuelle Spielstand wird also in den Arrays gespeichert und in HTML nur dargestellt.

**Annotationen**
- [ ] Erklären Sie Ihren Code. Die Skript-Datei sollte mit Kommentarblöcken ergänzt sein, um relevante Anwendungsblöcke und Anweisungen beschreiben zu können (vgl. letzte Aufgaben-Vorlage).

**Optional**
Diese Punkte MÜSSEN nicht erfüllt werden! Sie fließen jedoch positiv in die Berwertung mit ein (siehe oben).

- [ ] Ausgewählte Karten besitzen eine Sonderregeln. Beispielsweise: Gegner muss bei einer 7 zwei Karten ziehen.
- [ ] Visuell ansprechende Darstellung der Spielkarte.
- [ ] Das Austeilen und Abheben von Karten ist animiert.
- [ ] Wenn ein Spieler gewinnt, wir eine Nachricht angezeigt.
- [ ] Gegner-KI ist etwas ausgefeilter und plant vorraus, schaut sich die Spieler-Handkarten an und agiert entsprechend.
- [ ] Sollte der Ziehstapel leer sein wird dieser aus dem Ablagestapel neu zusammengemischt.


### Abgabe
Die Abgabe der Arbeit erfolgt diesmal nicht über die Kursseite, sondern per E-Mail. Verpacken Sie also Ihr Ergebnis am Ende als ZIP-Datei und senden Sie diese an gabriel.rausch@hs-furtwangen.de. Sollte Ihre ZIP-Datei Größer als 15MB betragen, dann legen Sie die Datei auf einem Datei-Austauschserver ab (HFU interner FTP oder WeTransfer).

**Abgabe bis Freitag, 07.02.2020 18:00 Uhr**