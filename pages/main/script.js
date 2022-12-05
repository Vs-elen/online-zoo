let petsSwiper = new Swiper(".backstage__swiper", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.backstage__button_next',
      prevEl: '.backstage__button_prev',
    },
  }); 

  petsSwiper.on('slideChange', function () {
    let slideCards = document.querySelectorAll('.backstage__wrapper')
    slideCards.forEach(item => {
      for (var i = item.children.length; i >= 0; i--) {
        item.appendChild(item.children[Math.random() * i | 0]);
    }
    })
    
  });

  let init = false;

function swiperCard() {
  if (window.innerWidth > 800) {
    if (!init) {
      init = true;
       swiper = new Swiper(".testimonials__table", {
        slidesPerView: 4,
        spaceBetween: 0,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
          },    
          breakpoints: {
            // when window width is >= 1000px
            800: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            // when window width is >= 1280px
            1280: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            
          }
      });
    }
  } else if (init) {
    swiper.destroy();
    init = false;
  }
}
swiperCard();
window.addEventListener("resize", swiperCard);

  document.querySelector('.footer__input').addEventListener('click', function(e) {
    document.querySelector('.footer__form-btn').classList.remove('footer__form-btn_default')
  })
  document.querySelector('.footer__input').addEventListener('blur', function(e) {
    document.querySelector('.footer__form-btn').classList.add('footer__form-btn_default')
  })

  
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

let testimonialSlider = document.querySelectorAll('.testimonials__item');
let testimonialWrapper = document.querySelector('.testimonials__popup-content');
let testimonialPopup = document.querySelector('.testimonials__popup');
let testimonialPopupClose = document.querySelector('.testimonials__popup-close');
let testimonialPopupOverlay = document.querySelector('.testimonials__overlay');

function showTestimonial () {
testimonialSlider.forEach(item => {
  item.addEventListener('click', function() {
   
    if (document.documentElement.clientWidth <= 800) {
    let clodedCard = this.cloneNode(true);
    testimonialWrapper.appendChild(clodedCard)
    testimonialPopup.style.display = 'block'
    document.body.style.overflow = 'hidden'
    }
  })
})

testimonialPopupClose.addEventListener('click', function() {
  
  testimonialPopup.style.display = 'none';
  document.body.style.overflow = 'visible';
  let testimonialChild = document.querySelector('.testimonials__popup-content .testimonials__item');
  testimonialChild.remove();
  
})

testimonialPopupOverlay.addEventListener('click', function() {
  testimonialPopup.style.display = 'none';
  document.body.style.overflow = 'visible';
  let testimonialChild = document.querySelector('.testimonials__popup-content .testimonials__item');
  testimonialChild.remove();
})
window.addEventListener('resize', function() {
  if ((document.documentElement.clientWidth > 800) && (document.querySelector('.testimonials__popup-content .testimonials__item'))) {
    testimonialPopup.style.display = 'none';
    document.body.style.overflow = 'visible';
    let testimonialChild = document.querySelector('.testimonials__popup-content .testimonials__item');
    testimonialChild.remove();
  }
});

}

showTestimonial()