'use strict';
const btn = document.querySelector('.subscribe-tool')

// display values on load
const displayValues = document.querySelectorAll('.count');
const speed = 50000;

displayValues.forEach((displayValue) => {
  let startValue = 0;
  let targetValue = +displayValue.getAttribute('data-target');
  let duration = Math.floor(speed / targetValue);
  let counter = setInterval(() => {
    startValue += 10;
    displayValue.textContent = startValue;
    if (startValue === targetValue) {
      clearInterval(counter)
    }
  }, duration)
})

btn.addEventListener('submit', () => {
  alert('Thank you to subscribe our news letter!')
})