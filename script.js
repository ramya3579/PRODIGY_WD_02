let minutes = 0;
let seconds = 0;
let centiseconds = 0;
let timer;
let isRunning = false;

const startPauseBtn = document.getElementById('startPauseBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const laps = document.getElementById('laps');

startPauseBtn.addEventListener('click', () => {
    if (isRunning) {
        clearInterval(timer);
        startPauseBtn.textContent = 'Resume';
        isRunning = false;
    } else {
        timer = setInterval(updateTime, 10);
        startPauseBtn.textContent = 'Pause';
        isRunning = true;
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    startPauseBtn.textContent = 'Start';
    minutes = 0;
    seconds = 0;
    centiseconds = 0;
    updateDisplay();
    laps.innerHTML = '';
});

lapBtn.addEventListener('click', () => {
    if (isRunning) {
        const lapTime = document.createElement('div');
        lapTime.textContent = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(centiseconds)}`;
        laps.appendChild(lapTime);
    }
});

function updateTime() {
    centiseconds++;
    if (centiseconds === 100) {
        centiseconds = 0;
        seconds++;
    }
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('seconds').textContent = formatTime(seconds);
    document.getElementById('centiseconds').textContent = formatTime(centiseconds);
}

function formatTime(unit) {
    return unit < 10 ? '0' + unit : unit;
}
