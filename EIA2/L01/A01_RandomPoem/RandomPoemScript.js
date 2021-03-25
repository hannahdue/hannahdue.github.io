"use strict";
var RandomPoem;
(function (RandomPoem) {
    //console.log("Skript verknüpft.");
    let subjects = ["Lulu", "Leon", "Lara", "Lino", "Lola"];
    let verbs = ["mag", "streichelt", "reitet", "krault", "beobachtet"];
    let objects = ["Mäuse", "Läuse", "Affen", "Giraffen", "Schmetterlinge"];
    //console.log(subjects, verbs, objects);
    for (let index = subjects.length; index > 0; index--) {
        let sentence = getVerse(subjects, verbs, objects);
        console.log(sentence);
        //console.log(index);
    }
    function getVerse(_subject, _verbs, _object) {
        //console.log("Alohamoha");
        let verseContainer = "";
        let randomSubject = Math.floor(_subject.length * Math.random());
        let randomVerb = Math.floor(_verbs.length * Math.random());
        let randomObject = Math.floor(_object.length * Math.random());
        verseContainer = _subject[randomSubject] + " " + _verbs[randomVerb] + " " + _object[randomObject];
        _subject.splice(randomSubject, 1);
        _verbs.splice(randomVerb, 1);
        _object.splice(randomObject, 1);
        return verseContainer;
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=RandomPoemScript.js.map