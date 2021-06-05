namespace MacDonaldsFarm2 {
    
    export class Donkey extends Animal {


        constructor() {
            super("Donkey", "Hay", 4, "Iaah");
        }

        doSpecialAction(): void {
            specialAction = "and the donkey got cuddled from Old MacDonald's daughter.";
        }
    }

}