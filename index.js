const clockTag = document.getElementsByClassName("clock")[0];
const millisecondTag = document.getElementsByClassName("millisecond")[0];
const startButtonTag = document.getElementsByClassName("startButton")[0];
const pauseButtonTag = document.getElementsByClassName("pauseButton")[0];
const continueButtonTag = document.getElementsByClassName("continueButton")[0];
const restartButtonTag = document.getElementsByClassName("restartButton")[0];

let millisecond = 0,
  seconds = 0,
  minutes = 0,
  hours = 0;

const startTime = () => {
  millisecond += 5;
  if (millisecond === 1000) {
    millisecond = 0;
    seconds += 1;
  }
  if (seconds === 60) {
    seconds = 0;
    minutes += 1;
  }
  if (minutes === 60) {
    minutes = 0;
    hours += 1;
  }
  const secondText = seconds < 10 ? "0" + seconds.toString() : seconds;
  const minuteText = minutes < 10 ? "0" + minutes.toString() : minutes;
  const hourText = hours < 10 ? "0" + hours.toString() : hours;
  const millisecondText = millisecond;

  clockTag.textContent = hourText + ":" + minuteText + ":" + secondText;

  millisecondTag.textContent = millisecondText;
};

let intervalId;
startButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(startTime, 1);
});
pauseButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
});

continueButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(startTime, 1);
});

restartButtonTag.addEventListener("click", () => {
  clearInterval(intervalId);
  (seconds = 0), (minutes = 0), (hours = 0), (millisecond = 0);
  intervalId = setInterval(startTime, 1);
});
