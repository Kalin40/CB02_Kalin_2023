const display = document.querySelector('.timing');
const interior = document.querySelector('.interior');
const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const startButton = document.querySelector('#start');
const stopButton = document.querySelector('#stop');
const minutesInput = document.querySelector('#minutes');
const secondsInput = document.querySelector('#seconds');
const incrementMinutesButton = document.getElementById("incrementMinutes");
const decrementMinutesButton = document.getElementById("decrementMinutes");
const incrementSecondsButton = document.getElementById("incrementSeconds");
const decrementSecondsButton = document.getElementById("decrementSeconds");

const w400Button = document.querySelector('#w400');
const w600Button = document.querySelector('#w600');
const w900Button = document.querySelector('#w900');

const chickenButton = document.querySelector('#chicken');
const pizzaButton = document.querySelector('#pizza');
const regularButton = document.querySelector('#regular');

incrementMinutesButton.addEventListener('click', incrementMinutes);
decrementMinutesButton.addEventListener('click', decrementMinutes);
incrementSecondsButton.addEventListener('click', incrementSeconds);
decrementSecondsButton.addEventListener('click', decrementSeconds);

let countdown;
let number = 0;
let wattOption = '';
let mealOption = '';
let timeSelected = false;
let wattsSelected = false;
let usingOven = false;

function incrementMinutes() {
  let minutes = parseInt(minutesInput.value);
  if (minutes < 59) {
    minutes++;
  }
  minutesInput.value = minutes;
}

function decrementMinutes() {
  let minutes = parseInt(minutesInput.value);
  if (minutes > 0) {
    minutes--;
  }
  minutesInput.value = minutes;
}

function incrementSeconds() {
  let seconds = parseInt(secondsInput.value);
  if (seconds < 59) {
    seconds++;
  }
  secondsInput.value = seconds;
}

function decrementSeconds() {
  let seconds = parseInt(secondsInput.value);
  if (seconds > 0) {
    seconds--;
  }
  secondsInput.value = seconds;
}


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
    alert('Please select a time option.');
    return;
  }

  if (!wattOption || !mealOption) {
    alert('Please select a watt option and a meal option.');
    return;
  }

  timer(totalSeconds);

  startButton.disabled = true;
  minutesInput.disabled = true;
  secondsInput.disabled = true;
  stopButton.disabled = false;

  interior.classList.add('yellow');
}

function stopTimer() {
  clearInterval(countdown);

  startButton.disabled = false;
  minutesInput.disabled = false;
  secondsInput.disabled = false;
  stopButton.disabled = true;

  interior.classList.remove('yellow');
}

function selectWattOption(option) {
  wattOption = option;
  w400Button.classList.remove('selected');
  w600Button.classList.remove('selected');
  w900Button.classList.remove('selected');
  option.classList.add('selected');
  wattsSelected = true;
  checkStartButtonState();
}

function selectMealOption(option) {
  mealOption = option;
  chickenButton.classList.remove('selected');
  pizzaButton.classList.remove('selected');
  regularButton.classList.remove('selected');
  option.classList.add('selected');
  usingOven = true;
  checkStartButtonState();
}

function checkStartButtonState() {
  if ((timeSelected && (wattsSelected || mealOption)) || (usingOven && mealOption)) {
    startButton.disabled = false;
  } else {
    startButton.disabled = true;
  }
}

w400Button.addEventListener('click', () => {
  if (!timeSelected && !usingOven) {
    selectWattOption(w400Button);
  }
});

w600Button.addEventListener('click', () => {
  if (!timeSelected && !usingOven) {
    selectWattOption(w600Button);
  }
});

w900Button.addEventListener('click', () => {
  if (!timeSelected && !usingOven) {
    selectWattOption(w900Button);
  }
});



chickenButton.addEventListener('click', () => {
  if (startButton.disabled) {
    selectMealOption(chickenButton);
  }
});

pizzaButton.addEventListener('click', () => {
  if (startButton.disabled) {
    selectMealOption(pizzaButton);
  }
});

regularButton.addEventListener('click', () => {
  if (startButton.disabled) {
    selectMealOption(regularButton);
  }
});

w400Button.addEventListener('click', () => selectWattOption(w400Button));
w600Button.addEventListener('click', () => selectWattOption(w600Button));
w900Button.addEventListener('click', () => selectWattOption(w900Button));

chickenButton.addEventListener('click', () => selectMealOption(chickenButton));
pizzaButton.addEventListener('click', () => selectMealOption(pizzaButton));
regularButton.addEventListener('click', () => selectMealOption(regularButton));

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
