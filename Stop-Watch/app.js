let hours = 0;
let minutes = 0;
let seconds = 0;
let interval;

function updateDisplay() {
  const display = document.getElementById("display");
  display.textContent =
    (hours < 10 ? "0" + hours : hours) +
    ":" +
    (minutes < 10 ? "0" + minutes : minutes) +
    ":" +
    (seconds < 10 ? "0" + seconds : seconds);
}

function startStopwatch() {
  clearInterval(interval);
  interval = setInterval(function () {
    seconds = seconds + 1;

    if (seconds === 60) {
      seconds = 0;
      minutes = minutes + 1;
    }

    if (minutes === 60) {
      minutes = 0;
      hours = hours + 1;
    }

    updateDisplay();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(interval);
  interval = null;
}

function resetStopwatch() {
  stopStopwatch();
  hours = 0;
  minutes = 0;
  seconds = 0;
  updateDisplay();
}
