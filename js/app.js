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

// About section
let about = gsap.timeline({
  scrollTrigger: {
    trigger: '.about',
    start: 'top bottom',
  },
});

about.from('.about__object', {
  opacity: 0,
  duration: 2,
  x: -810,
  ease: 'back.inOut(1.7)',
});

// Solutions section
gsap.registerPlugin(DrawSVGPlugin);
var tl = gsap.timeline();
tl.fromTo(
  svgCircleProgressPath1,
  0.4,
  {
    drawSVG: '0',
  },
  {
    drawSVG: '0 20%',
  }
);

tl.fromTo(
  svgCircleProgressPath2,
  0.8,
  {
    drawSVG: '0',
  },
  {
    drawSVG: '0 40%',
  }
);

tl.fromTo(
  svgCircleProgressPath3,
  1.2,
  {
    drawSVG: '0',
  },
  {
    drawSVG: '0 60%',
  }
);

tl.fromTo(
  svgCircleProgressPath4,
  1.6,
  {
    drawSVG: '0',
  },
  {
    drawSVG: '0 80%',
  }
);

tl.fromTo(
  svgCircleProgressPath5,
  2,
  {
    drawSVG: '0',
  },
  {
    drawSVG: '0 100%',
  }
);

let solutions = gsap.timeline({
  scrollTrigger: {
    trigger: '.solutions',
    start: 'top bottom',
  },
});

about.from('.solutions__object', {
  opacity: 0,
  duration: 2,
  x: 810,
  ease: 'back.inOut(2)',
});
