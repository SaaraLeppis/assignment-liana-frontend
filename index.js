'use strict';
const btn = document.querySelector('.subscribe-tool')
const navigation = document.querySelector('.main-menu');
console.log(navigation)
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

// mobile menu 
const hamburger = document.querySelector(".menu-icon")

hamburger.addEventListener("click", () => {
  navigation.classList.toggle('open')
})

navigation.addEventListener('click', () => {
  if (document.body.clientWidth < 1000) {
    // hamburger.classList.remove("close")
    navigation.classList.add("mobile-menu")
    console.log('now')
  }
})