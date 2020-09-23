// Swiper slider

var mySwiper = new Swiper('.swiper-container', {
  speed: 1200,
  loop: true,
  slidesPerView: 1,
  autoplay: {
    delay: 8000,
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
});

// Slider elements animation
gsap.from('.slider__title', {
  opacity: 0,
  duration: 1,
  y: -70,
  delay: 0.2,
});
gsap.from('.slider__text', {
  opacity: 0,
  duration: 1,
  y: -70,
  delay: 0.7,
});
gsap.from('.slider__slide .btn', {
  opacity: 0,
  duration: 1,
  y: -70,
  delay: 1.2,
});
gsap.from('.social', {
  opacity: 0,
  duration: 1.2,
  y: -70,
  delay: 2,
  ease: 'back.inOut(1.7)',
});

// Objects
gsap.from('.objects__1 .elem', {
  opacity: 0,
  duration: 3,
  y: -450,
  delay: 0.5,
  ease: 'back.inOut(1.7)',
});

gsap.from('.objects__2 .elem', {
  opacity: 0,
  duration: 3,
  x: 810,
  delay: 1,
  ease: 'back.inOut(1.7)',
});
