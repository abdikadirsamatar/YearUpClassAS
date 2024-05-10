function updateClock() {
    var now = new Date();
    var phoenixTime = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours() - 7, now.getUTCMinutes(), now.getUTCSeconds());
    var netherlandsTime = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), now.getUTCHours() + 2, now.getUTCMinutes(), now.getUTCSeconds());

    document.getElementById("phoenixTime").textContent = phoenixTime.toLocaleTimeString();
    document.getElementById("netherlandsTime").textContent = netherlandsTime.toLocaleTimeString();
    setTimeout(updateClock, 1000);
}

function setup() {
    updateClock();  // Start the clock
    window.addEventListener('unload', function() {
        console.log('Unloading the page...');
        // Any additional cleanup tasks can be added here
    });
}