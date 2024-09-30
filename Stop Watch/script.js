let timerInterval;
let running = false;
let elapsedTime = 0;
let lapTimes = [];
let previousLapTime = 0;

const timeDisplay = document.getElementById("time-display");
const startPauseButton = document.getElementById("start-pause");
const resetButton = document.getElementById("reset");
const lapButton = document.getElementById("lap");
const clearLapsButton = document.getElementById("clear-laps");
const saveLapsButton = document.getElementById("save-laps");
const lapTableBody = document.querySelector("#lap-table tbody");

function updateTimeDisplay() {
    const milliseconds = elapsedTime % 1000;
    const seconds = Math.floor(elapsedTime / 1000) % 60;
    const minutes = Math.floor(elapsedTime / 60000);
    timeDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
}

function startPauseTimer() {
    if (running) {
        clearInterval(timerInterval);
        running = false;
        startPauseButton.textContent = "Start";
    } else {
        timerInterval = setInterval(() => {
            elapsedTime += 25;
            updateTimeDisplay();
        }, 25);
        running = true;
        startPauseButton.textContent = "Pause";
    }
}

function resetTimer() {
    clearInterval(timerInterval);
    running = false;
    elapsedTime = 0;
    previousLapTime = 0;
    lapTimes = [];
    updateTimeDisplay();
    startPauseButton.textContent = "Start";
    lapTableBody.innerHTML = "";
}

function recordLap() {
    if (!running) return;
    const currentLapTime = elapsedTime - previousLapTime;
    previousLapTime = elapsedTime;

    const lapNumber = lapTimes.length + 1;
    lapTimes.push({
        totalTime: elapsedTime,
        lapTime: currentLapTime,
    });

    const lapRow = document.createElement("tr");
    lapRow.innerHTML = `
        <td>#${lapNumber}</td>
        <td>${formatTime(elapsedTime)}</td>
        <td>${formatTime(currentLapTime)}</td>
    `;
    lapTableBody.appendChild(lapRow);
}

function formatTime(time) {
    const milliseconds = time % 1000;
    const seconds = Math.floor(time / 1000) % 60;
    const minutes = Math.floor(time / 60000);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(3, '0')}`;
}

function clearLaps() {
    lapTableBody.innerHTML = "";
    lapTimes = [];
}

startPauseButton.addEventListener("click", startPauseTimer);
resetButton.addEventListener("click", resetTimer);
lapButton.addEventListener("click", recordLap);
clearLapsButton.addEventListener("click", clearLaps);
