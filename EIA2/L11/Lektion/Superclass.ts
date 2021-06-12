namespace L11_Advanced {
    
    export abstract class Room {

        static house: string = "Bungalow";
        size: string;
        function: string;

        constructor(_size: string, _function: string) {
            console.log("New Room");
            this.size = _size;
            this.function = _function;
        }

        static logHouse(): void {
            console.log("This refers to a " + this.house);
        }

        moveIn(): void {
            //console.log("Someone moved in.");
        }

        //abstract paintWall(): void;
    }
}