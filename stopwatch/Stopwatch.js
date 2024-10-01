var isRunning = false;
var startTime;
var intervalId;

function startStop() {
    if (!isRunning) {
        startTime = new Date().getTime() - (parseInt(document.getElementById("stopwatch").textContent) * 1000);
        intervalId = setInterval(updateTime, 1000);
        document.getElementById("pause").textContent = "Pause";
    } else {
        clearInterval(intervalId);
        document.getElementById("startStop").textContent = "Start";
    }
    isRunning = !isRunning;
}

function updateTime() {
    var currentTime = new Date().getTime() - startTime;
    var seconds = Math.floor(currentTime / 1000);
    document.getElementById("stopwatch").textContent = seconds;
}

function reset() {
    clearInterval(intervalId);
    document.getElementById("reset").textContent = "Reset";
    document.getElementById("stopwatch").textContent = "0";
    isRunning = false;
}