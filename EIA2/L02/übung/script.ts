console.log("Skript verknüpft");

namespace L02_Load {
    document.addEventListener("DOMContentLoaded", handleLoad);

    function handleLoad(_event: Event): void {
        console.log(_event);
    }
}