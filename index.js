'use strict';
const btn = document.querySelector('.subscribe-tool')
const navigation = document.querySelector('.main-menu');
console.log(navigation)
const upperNavigation = document.querySelector('.upper-band');
const mainMenu = document.querySelector('.main-menu')

const offsetPosition = mainMenu.offsetTop;
console.log('innerWidth', window.innerWidth, 'some', document.body.clientWidth)

window.onscroll
  = () => {
    scrollNavigation()
  }

const scrollNavigation = () => {
  if (document.body.scrollTop >= offsetPosition || document.documentElement.scrollTop >= offsetPosition) {
    mainMenu.classList.add('sticky')
  }
  else {
    mainMenu.classList.remove('sticky')
  }
}
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
// const hamburger = document.querySelector(".menu-icon")

// hamburger.addEventListener("click", () => {
//   navigation.classList.toggle('open')
// })

// navigation.addEventListener('click', () => {
//   if (document.body.clientWidth < 1000) {
//     // hamburger.classList.remove("close")
//     navigation.classList.add("mobile-menu")
//     console.log('now')
//   }
// })
const mobileNavigator = document.querySelector(".mobile")
const hamburgerMenu = document.querySelector(".menu-icon")
let showMenu = false;

hamburgerMenu.addEventListener("click", () => {
  console.log('click')

  if (showMenu) {
    mobileNavigator.style.display = "none"
    showMenu = false
  }
  else {
    mobileNavigator.style.display = "flex"
    showMenu = true
  }

})