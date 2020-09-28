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
gsap.registerPlugin(DrawSVGPlugin, ScrollTrigger);
let tl = gsap.timeline();
tl.pause();

ScrollTrigger.create({
  trigger: '.solutions__list',
  start: 'top bottom',
  onEnter: () =>
    setTimeout(() => {
      tl.resume();
    }, 2500),
});

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
  0.6,
  {
    drawSVG: '0',
  },
  {
    drawSVG: '0 40%',
  }
);

tl.fromTo(
  svgCircleProgressPath3,
  0.8,
  {
    drawSVG: '0',
  },
  {
    drawSVG: '0 60%',
  }
);

tl.fromTo(
  svgCircleProgressPath4,
  1.0,
  {
    drawSVG: '0',
  },
  {
    drawSVG: '0 80%',
  }
);

tl.fromTo(
  svgCircleProgressPath5,
  1.2,
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

solutions.from('.solutions__object', {
  opacity: 0,
  duration: 2,
  x: 810,
  ease: 'back.inOut(3)',
});

solutions.from('.solutions__circle', {
  opacity: 0,
  duration: 2,
  x: 810,
  ease: 'back.inOut(3)',
});

let agile = gsap.timeline({
  scrollTrigger: {
    trigger: '.agile',
    start: 'top bottom',
  },
});

agile.from('.agile__object', {
  duration: 1.5,
  rotate: -20,
  ease: 'back.inOut(3)',
});

agile.from('.agile__circle', {
  opacity: 0,
  duration: 2,
  x: -810,
  ease: 'back.inOut(3)',
});
