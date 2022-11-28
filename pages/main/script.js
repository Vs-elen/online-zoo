/*let swiper = new Swiper(".testimonials__table", {
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
  }); */

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



