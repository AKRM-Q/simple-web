let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click',function() {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slides').appendChild(items[0])
})

prev.addEventListener('click',function() {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slides').prepend(items[items.length - 1])
})

// <-- -----------------------------------  Log in & Register pup-up ----------------------------------- -->
const warpper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-colse');

registerLink.addEventListener('click', ()=> {
    warpper.classList.add('active');
})

loginLink.addEventListener('click', ()=> {
    warpper.classList.remove('active');
})

btnPopup.addEventListener('click', ()=> {
    warpper.classList.add('active-popup');
})

iconClose.addEventListener('click', ()=> {
    warpper.classList.remove('active-popup');
})

// <-- -----------------------------------  Trailers ----------------------------------- -->
