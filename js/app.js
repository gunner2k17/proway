// Slider animation
gsap.from('.slider__title', {
  opacity: 0,
  duration: 2,
  y: -70,
  delay: 0.5,
  ease: 'back.inOut(1.7)',
});
gsap.from('.slider__text', {
  opacity: 0,
  duration: 2,
  y: -70,
  delay: 0.7,
  ease: 'back.inOut(1.7)',
});
gsap.from('.slider__slide .btn', {
  opacity: 0,
  duration: 2,
  y: -70,
  delay: 1.1,
  ease: 'back.inOut(1.7)',
});

// Objects
gsap.from('.objects__1 .elem', {
  opacity: 0,
  duration: 2.5,
  x: 450,
  delay: 1.6,
  ease: 'back.inOut(1.7)',
});

gsap.from('.objects__2 .elem', {
  opacity: 0,
  duration: 2.5,
  x: 810,
  delay: 2,
  ease: 'back.inOut(1.7)',
});
