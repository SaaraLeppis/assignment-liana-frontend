'use strict';

const displayValues = document.querySelectorAll('.count');
console.log('counts:', displayValues)
const speed = 50000;

displayValues.forEach((displayValue) => {
  let startValue = 0;
  let targetValue = +displayValue.getAttribute('data-target');
  console.log('target: ', targetValue)
  let duration = Math.floor(speed / targetValue);
  console.log('duration', duration)
  let counter = setInterval(() => {
    startValue += 10;
    displayValue.textContent = startValue;
    if (startValue === targetValue) {
      clearInterval(counter)
    }
  }, duration)
})