namespace RandomPoem {

    //console.log("Skript verknüpft.");

    let subjects: string[] = ["Lulu", "Leon", "Lara", "Lino", "Lola"];
    let verbs: string[] = ["mag", "streichelt", "reitet", "krault", "beobachtet"];
    let objects: string[] = ["Mäuse", "Läuse", "Affen", "Giraffen", "Schmetterlinge"];

    //console.log(subjects, verbs, objects);

    for (let index: number = subjects.length; index > 0; index--) {
         
        let sentence: string = getVerse(subjects, verbs, objects);
        console.log(sentence);
        //console.log(index);

    }

    function getVerse(_subject: string[], _verbs: string[], _object: string[]): string {
        //console.log("Alohamoha");
        let verseContainer: string = "";

        let randomSubject: number = Math.floor(_subject.length * Math.random());
        let randomVerb: number = Math.floor(_verbs.length * Math.random());
        let randomObject: number = Math.floor(_object.length * Math.random());

        verseContainer = _subject[randomSubject] + " " + _verbs[randomVerb] + " " + _object[randomObject];

        _subject.splice(randomSubject, 1);
        _verbs.splice(randomVerb, 1);
        _object.splice(randomObject, 1);

        return verseContainer;

    }

}