"use strict";
var L11_Advanced;
(function (L11_Advanced) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        console.log("Load finished.");
        let livingRoom = new L11_Advanced.LivingRoom();
        console.log(livingRoom);
        livingRoom.moveIn();
        //let room: Room = new Room();
        //error: cannot create an instance of an abstract class.
        //livingRoom.paintWall();
        //error: Non-abstract class 'LivingRoom' does not implement inherited abstract member 'paintWall' from class 'Room'.
        console.log(L11_Advanced.Room.house);
        L11_Advanced.Room.logHouse();
    }
})(L11_Advanced || (L11_Advanced = {}));
//# sourceMappingURL=Advanced.js.map