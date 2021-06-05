namespace MacDonaldsFarm2 {
    
    export class Horse extends Animal {

        constructor() {
            super("Horse", "Hay", 5, "Whieeew");
        }

        doSpecialAction(): void {
            specialAction = "the horse went for a ride with Old MacDonald, ";
        }
    }

}