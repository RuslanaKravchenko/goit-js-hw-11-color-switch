import './styles.css';

const refs = {
  startRef: document.querySelector('[data-action="start"]'),
  stopRef: document.querySelector('[data-action="stop"]'),
  bodyRef: document.querySelector('body'),
};

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeColor = {
  timerId: null,
  isActive: false,

  start() {
    if (this.isActive) {
      return;
    }

    this.isActive = true;
    this.timerId = setInterval(() => {
      refs.bodyRef.style.backgroundColor =
        colors[randomIntegerFromInterval(0, colors.length)];
    }, 1000);
  },

  stop() {
    clearInterval(this.timerId);
    this.intervalId = null;
    this.isActive = false;
  },
};
refs.startRef.addEventListener('click', changeColor.start.bind(changeColor));
refs.stopRef.addEventListener('click', changeColor.stop.bind(changeColor));
