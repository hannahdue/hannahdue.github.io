"use strict";
var L02_BlackmailerCompanion;
(function (L02_BlackmailerCompanion) {
    console.log("Start");
    let chosenCharacter = "A";
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let mail = document.querySelector("div#mail");
        mail.addEventListener("click", handleClickOnMail);
        document.addEventListener("keydown", chooseCharacter);
    }
    function handleClickOnMail(_event) {
        //console.log("_event");
        let x = _event.offsetX;
        let y = _event.offsetY;
        if (_event.currentTarget != _event.target) {
            deleteLetter(_event);
            return;
        }
        let mail = _event.target;
        let letter = document.createElement("span");
        mail.appendChild(letter);
        letter.textContent = chosenCharacter;
        letter.style.left = x + "px";
        letter.style.top = y + "px";
        //letter.addEventListener("click", deleteLetter);
    }
    function chooseCharacter(_event) {
        //console.log(_event);
        chosenCharacter = _event.key;
    }
    function deleteLetter(_event) {
        let target = _event.target;
        let parent = target.parentNode;
        parent.removeChild(target);
        //Option 1: _event.stopPropagation();
    }
})(L02_BlackmailerCompanion || (L02_BlackmailerCompanion = {}));
//# sourceMappingURL=script.js.map