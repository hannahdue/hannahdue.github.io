namespace MacDonaldsFarm2 {
    
    export class Cow extends Animal {

        constructor(_name: string, _food: string, _foodAmount: number, _sound: string) {
            super("Cow", "Hay", 5, "Moo");
        }

        doSpecialAction(): void {
            specialAction = "the cow gave 10 liters of milk, ";
        }
    }

}