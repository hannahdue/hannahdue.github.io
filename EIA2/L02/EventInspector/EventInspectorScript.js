"use strict";
console.log("Script connected");
var EventInspector;
(function (EventInspector) {
    let div0 = document.querySelector("#div0");
    let div1 = document.querySelector("#div1");
    let body = document.querySelector("body");
    let span = document.querySelector("#span");
    //let divElements: NodeListOf<HTMLDivElement> = document.querySelectorAll("div");
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        console.log("handleLoad executed");
        document.addEventListener("mousemove", setInfoBox);
        div0.addEventListener("mousemove", setInfoBox);
        div1.addEventListener("mousemove", setInfoBox);
        body.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        div0.addEventListener("click", logInfo);
        div1.addEventListener("click", logInfo);
        body.addEventListener("click", logInfo);
        /*for (let i: number = 0; i < divElements.length; i++) {
            divElements[i].addEventListener("click", logInfo);
        }*/
        document.addEventListener("keyup", logInfo);
        div0.addEventListener("keyup", logInfo);
        div1.addEventListener("keyup", logInfo);
        body.addEventListener("keyup", logInfo);
    }
    function setInfoBox(_mouseevent) {
        let top = _mouseevent.clientY + 10;
        let left = _mouseevent.clientX + 10;
        let mouseTarget = _mouseevent.target;
        let mouseTargetId = mouseTarget.id;
        if (!mouseTargetId) {
            mouseTargetId = "document";
        }
        span.style.left = left + "px";
        span.style.top = top + "px";
        span.innerHTML = "<b>Current Position:</b><br> Top = " + top + "px | Left = " + left + " px<br>Target: " + mouseTargetId;
    }
    function logInfo(_event) {
        let eventType = _event.type;
        let eventTarget = _event.target;
        let currentTarget = _event.currentTarget;
        let wholeEvent = _event;
        console.group();
        console.log("Event-Type: " + eventType);
        console.log("Event-Target: " + eventTarget);
        console.log("Current Target: " + currentTarget);
        console.log(currentTarget);
        console.log("Whole Event: " + wholeEvent);
        console.log(wholeEvent);
        console.groupEnd();
    }
    //CUSTOM EVENT
    /*let event: CustomEvent = new CustomEvent("hannahsEvent", {
        bubbles: true,
        detail: {
            text: "Event Triggered"
        }
    });

    document.addEventListener("hannahsEvent", triggerEvent(event));

    function triggerEvent (_event: Event) {
        
        let event: CustomEvent = new CustomEvent("hannahsEvent", {
            //bubbles: true,
            detail: {
                text: "Event Triggered"
            }
        });
    
        div0.dispatchEvent(event);

        div0.textContent = _event.detail.text;

    }*/
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=EventInspectorScript.js.map