const display = document.querySelector('.timing');
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const numberSpan = document.getElementById("temperature");
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const minutesInput = document.querySelector('#minutes');
const secondsInput = document.querySelector('#seconds');

const w500Button = document.querySelector('#w500');
const w700Button = document.querySelector('#w700');
const w1000Button = document.querySelector('#w1000');

const chickenButton = document.querySelector('#chicken');
const pizzaButton = document.querySelector('#pizza');
const regularButton = document.querySelector('#regular');

const interior = document.querySelector('.interior');

let time = 0;
let watts = 0;
let meal = '';
let countdown;
let number = 0;

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

    startButton.disabled = true;
    minutesInput.disabled = true;
    secondsInput.disabled = true;
    stopButton.disabled = false;
}

function stopTimer() {
    clearInterval(countdown);

    startButton.disabled = false;
    minutesInput.disabled = false;
    secondsInput.disabled = false;
    stopButton.disabled = true;
}


/*
w500Button.addEventListener('click', () => {
  watts = 500;
});

w700Button.addEventListener('click', () => {
  watts = 700;
});

w1000Button.addEventListener('click', () => {
  watts = 1000;
});

chickenButton.addEventListener('click', () => {
  meal = 'Chicken';
});

pizzaButton.addEventListener('click', () => {
  meal = 'Pizza';
});

popcornButton.addEventListener('click', () => {
  meal = 'Popcorn';
});

startButton.addEventListener('click', () => {
  if (time > 0 && watts > '' && meal !== '') {
    interior.classList.add('light-on');
    setTimeout(() => {
      interior.classList.remove('light-on');
    }, time * 1000);
  }
});

*/

plusButton.addEventListener("click", () => {
    if (number < 280) {
        number += 15;
        if (number > 280) {
            number = 280;
        }
        numberSpan.innerText = number;
    }
});

minusButton.addEventListener("click", () => {
    if (number > 0) {
        number -= 15;
        if (number < 0) {
            number = 0;
        }
        numberSpan.innerText = number;
    }
});

numberSpan.innerText = number;

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);