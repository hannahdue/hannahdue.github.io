namespace RandomPoem {

    //console.log("Skript verknüpft.");

    let subjects: string[] = ["Wort1", "Wort2", "Wort3", "Wort4", "Wort5"];
    let verbs: string[] = ["verb1", "verb2", "verb3", "verb4", "verb5"];
    let objects: string[] = ["object1", "object2", "object3", "object4", "object5"];

    //console.log(subjects);
    //console.log(verbs);
    //console.log(objects);

    for (let index: number = subjects.length; index > 0; index--) {
        
        getVerse(subjects, verbs, objects);
        //console.log(index);
        
    }

    function getVerse (_subject: string[], _verbs: string[], _object: string[]): void {
        //console.log("Alohamoha");
        let verse1: string = "";
        let verse2: string = "";
        let verse3: string = "";
        let verse4: string = "";
        let verse5: string = "";
        
        console.log(verse1);
        console.log(verse2);
        console.log(verse3);
        console.log(verse4);
        console.log(verse5);
    }

}