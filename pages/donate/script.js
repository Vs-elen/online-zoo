let inputNum = document.querySelector('.help__input');
let inputNumIcon = document.querySelector('.help__input-icon');
let amount = document.querySelectorAll('.help__item');
inputNum.addEventListener("focus", myFocusFunction, true);
inputNum.addEventListener("blur", myBlurFunction, true);



const handleInputClick = (e) => {
  e.preventDefault();
  const active = document.querySelector('.active');
  if(active){
    active.classList.remove('active');
  }
  e.currentTarget.classList.add('active');
}
amount.forEach(item => {
  item.addEventListener("click", handleInputClick, true);
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





