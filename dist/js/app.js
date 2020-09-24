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
// let tl = gsap.timeline({
//   // yes, we can add it to an entire timeline!
//   scrollTrigger: {
//     trigger: '.about__object',
//     pin: true, // pin the trigger element while active
//     start: 'top top', // when the top of the trigger hits the top of the viewport
//     end: '+=500', // end after scrolling 500px beyond the start
//     scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
//     snap: {
//       snapTo: 'labels', // snap to the closest label in the timeline
//       duration: { min: 0.2, max: 3 }, // the snap animation should be at least 0.2 seconds, but no more than 3 seconds (determined by velocity)
//       delay: 0.2, // wait 0.2 seconds from the last scroll event before doing the snapping
//       ease: 'power1.inOut', // the ease of the snap animation ("power3" by default)
//     },
//   },
// });
