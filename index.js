'use strict';

// selectors
const subscribeButton = document.querySelector('.subscribe-button')
const navigation = document.querySelector('.main-menu');
const upperNavigation = document.querySelector('.upper-band');
const mainMenu = document.querySelector('.main-menu')
const mobileNavigator = document.querySelector(".mobile")
const hamburgerMenu = document.querySelector(".menu-icon")
const displayValues = document.querySelectorAll('.count');
const messageClose = document.querySelector('.message-close-btn');
const messageArea = document.querySelector('.message-container')

let offsetPosition = mainMenu.offsetTop;
// STICKY NAVBAR
window.onscroll
  = () => {
    scrollNavigation()
  }

// const scrollNavigation = () => {
//   if (document.body.scrollTop >= offsetPosition || document.documentElement.scrollTop >= offsetPosition) {
//     mainMenu.classList.add('sticky')
//   }
//   else {
//     mainMenu.classList.remove('sticky')
//   }
// }
const scrollNavigation = () => {
  if (window.pageYOffset >= offsetPosition) {
    console.log('add sticky')
    mainMenu.classList.add('sticky')
  }
  else {
    console.log('remove')
    mainMenu.classList.remove('sticky')
  }
}

// COUNTING VALUES
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

// MOBILE MENU
let showMenu = false;

hamburgerMenu.addEventListener("click", (event) => {
  event.preventDefault()
  if (showMenu) {
    mobileNavigator.style.display = "none"
    showMenu = false
  }
  else {
    mobileNavigator.style.display = "flex"
    showMenu = true
  }

})

// SUBSCRIBE MESSAGE
messageClose.addEventListener('click', (event) => {
  event.preventDefault()
  messageArea.style.display = "none"
})

const close = messageArea.style.display = "none";

subscribeButton.addEventListener('click', (event) => {
  event.preventDefault()
  messageArea.style.display = "flex"
  setTimeout(() => {
    messageArea.style.display = 'none'
  }, 290000)
  //2900
})