namespace L11_Advanced {
    
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        console.log("Load finished.");

        let livingRoom: Room = new LivingRoom();
        console.log(livingRoom);

        livingRoom.moveIn();

        //let room: Room = new Room();
        //error: cannot create an instance of an abstract class.

        //livingRoom.paintWall();
        //error: Non-abstract class 'LivingRoom' does not implement inherited abstract member 'paintWall' from class 'Room'.

        console.log(Room.house);
        Room.logHouse();
    }

}