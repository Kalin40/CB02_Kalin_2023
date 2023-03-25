const display = document.querySelector('.display');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const minutesInput = document.querySelector('#minutes');
const secondsInput = document.querySelector('#seconds');

let countdown;

function timer(seconds) {
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;

    displayTimeLeft(seconds);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);

        if (secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }

        displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    const displayMinutes = `${minutes < 10 ? '0' : ''}${minutes}`;
    const displaySeconds = `${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;

    display.textContent = `${displayMinutes}:${displaySeconds}`;
}

function startTimer() {
    const minutes = parseInt(minutesInput.value);
    const seconds = parseInt(secondsInput.value);
    const totalSeconds = minutes * 60 + seconds;

    if (!totalSeconds) {
        return;
    }

    timer(totalSeconds);

    startBtn.disabled = true;
    minutesInput.disabled = true;
    secondsInput.disabled = true;
    stopBtn.disabled = false;
}

function stopTimer() {
    clearInterval(countdown);

    startBtn.disabled = false;
    minutesInput.disabled = false;
    secondsInput.disabled = false;
    stopBtn.disabled = true;
}

function setPrimaryColor() {
    document.querySelector("body").style.setProperty(
        "--primary-color",
        document.querySelector("input#primaryColorSelector").value
    );
}

function setFontSize() {
    document.querySelector("body").style.setProperty(
        "--font-size",
        document.querySelector("#fontSizeSelector").value + "rem"
    );
}


startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
document.querySelector("input#primaryColorSelector").addEventListener('input', setPrimaryColor);
document.querySelector("#fontSizeSelector").addEventListener('input', setFontSize);