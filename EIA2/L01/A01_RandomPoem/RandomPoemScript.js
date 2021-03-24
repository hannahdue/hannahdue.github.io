"use strict";
var RandomPoem;
(function (RandomPoem) {
    //console.log("Skript verknüpft.");
    let subjects = ["Wort1", "Wort2", "Wort3", "Wort4", "Wort5"];
    let verbs = ["verb1", "verb2", "verb3", "verb4", "verb5"];
    let objects = ["object1", "object2", "object3", "object4", "object5"];
    //console.log(subjects);
    //console.log(verbs);
    //console.log(objects);
    for (let index = subjects.length; index > 0; index--) {
        getVerse(subjects, verbs, objects);
        //console.log(index);
    }
    function getVerse(_subject, _verbs, _object) {
        //console.log("Alohamoha");
        let verse1 = "";
        let verse2 = "";
        let verse3 = "";
        let verse4 = "";
        let verse5 = "";
        console.log(verse1);
        console.log(verse2);
        console.log(verse3);
        console.log(verse4);
        console.log(verse5);
    }
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=RandomPoemScript.js.map