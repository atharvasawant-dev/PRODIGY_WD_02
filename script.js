const display = document.getElementById('display');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const lapBtn = document.getElementById('lap');
const lapList = document.getElementById('lapList');

let [seconds, minutes, hours] = [0, 0, 0];
let timer = null;

function format(unit) {
  return unit < 10 ? "0" + unit : unit;
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  display.textContent = `${format(hours)} : ${format(minutes)} : ${format(seconds)}`;
}

startBtn.addEventListener('click', () => {
  if (!timer) timer = setInterval(updateTime, 1000);
});

pauseBtn.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
});

resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  timer = null;
  [seconds, minutes, hours] = [0, 0, 0];
  display.textContent = "00 : 00 : 00";
  lapList.innerHTML = '';
});

lapBtn.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = `Lap - ${format(hours)}:${format(minutes)}:${format(seconds)}`;
  lapList.appendChild(li);
});
