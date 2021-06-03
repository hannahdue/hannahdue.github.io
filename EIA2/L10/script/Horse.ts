namespace MacDonaldsFarm2 {
    
    export class Horse extends Animal {

        constructor(_name: string, _food: string, _foodAmount: number, _sound: string) {
            super("Horse", "Hay", 5, "Whieeew");
        }

        doSpecialAction(): void {
            specialAction = "the horse went for a ride with Old MacDonald, ";
        }
    }

}