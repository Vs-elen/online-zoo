let inputNum = document.querySelector('.help__input');
let inputNumIcon = document.querySelector('.help__input-icon');
let amount = document.querySelectorAll('.help__item');
inputNum.addEventListener("focus", myFocusFunction, true);
inputNum.addEventListener("blur", myBlurFunction, true);

inputNum.value = 100;
console.log(document.querySelector('.active .help__item-number').innerText.slice(1))
const handleInputClick = (e) => {
  e.preventDefault();
  const active = document.querySelector('.active');
  
  if(active){
    active.classList.remove('active');    
  }
  e.currentTarget.classList.add('active');
  let currentNum = e.currentTarget.querySelector('.help__item-number').innerText.slice(1);
  let activeNum = parseInt(currentNum)
  inputNum.value = activeNum
}
amount.forEach(item => {
  item.addEventListener("click", handleInputClick, true);
})

inputNum.addEventListener('input', function() {
  amount.forEach(item => {
    let amountNum = item.querySelector('.help__item-number').innerText.slice(1);
    let curAmount = parseInt(amountNum);
    if (inputNum.value == curAmount) {
      document.querySelector('.active').classList.remove('active')
      item.classList.add('active');
    } 
  })
  
})


function myFocusFunction() {
  inputNum.style.border = "1px solid #4B9200";
  inputNum.style.outline = "1px solid #4B9200";
  inputNumIcon.setAttribute('src', '../../assets/icons/dollar green.svg');
}

function myBlurFunction() {
  inputNum.style.border = "1px solid #929699";
  inputNum.style.outline = "1px solid #929699";
  inputNumIcon.setAttribute('src', '../../assets/icons/dollar.svg');
}

const handleClick = (e) => {
  e.preventDefault();
  const active = document.querySelector('.footer__link_active');
  if(active){
    active.classList.remove('footer__link_active');
  }
  e.currentTarget.classList.add('footer__link_active');
}

const handleHeadClick = (e) => {
  e.preventDefault();
  const active = document.querySelector('.header__link_active');
  if(active){
    active.classList.remove('header__link_active');
  }
  e.currentTarget.classList.add('header__link_active');
}

document.querySelectorAll('.header__link_empty').forEach(item => {
  item.addEventListener('click', handleHeadClick)
})
document.querySelectorAll('.footer__link_empty').forEach(item => {
  item.addEventListener('click', handleClick)
})

let burgerButton = document.querySelector('.header__burger');
let burgerMenu = document.querySelector('.header__inner');
let burgerClose = document.querySelector('.header__inner-close');
let burgerOverlay = document.querySelector('.inner__overlay');

burgerButton.addEventListener('click', function() {
  burgerMenu.style.top = '0';
  document.body.style.overflow = 'hidden'
})

burgerClose.addEventListener('click', function() {
  burgerMenu.style.top = '-100%';
  document.body.style.overflow = 'visible'
})
burgerOverlay.addEventListener('click', function() {
  burgerMenu.style.top = '-150%';
  document.body.style.overflow = 'visible'
})





