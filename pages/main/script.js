let swiper = new Swiper(".testimonials__table", {
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
      },    
  });

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

  document.querySelectorAll('.header__link').forEach(item => {
    item.addEventListener('click', handleHeadClick)
  })
  document.querySelectorAll('.footer__link').forEach(item => {
    item.addEventListener('click', handleClick)
  })



