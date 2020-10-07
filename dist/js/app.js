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
if (document.querySelector('.slider')) {
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
}

// Objects
if (document.querySelector('.objects')) {
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
}

// About section
if (document.querySelector('.about')) {
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
}

// Solutions section
if (document.querySelector('.solutions')) {
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
}

// Solutions
if (document.querySelector('.solutions')) {
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
}

// Agile
if (document.querySelector('.agile')) {
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
}

// Projects
if (document.querySelector('.projects')) {
  let projects = gsap.timeline({
    scrollTrigger: {
      trigger: '.projects',
      start: 'top bottom',
    },
  });

  projects.from('.projects__object', {
    opacity: 0,
    duration: 2,
    x: -810,
    ease: 'back.inOut(1.7)',
  });
}

// Team
if (document.querySelector('.team')) {
  let team = gsap.timeline({
    scrollTrigger: {
      trigger: '.team',
      start: 'top bottom',
    },
  });

  team.from('.team__object', {
    opacity: 0,
    duration: 2,
    x: 810,
    ease: 'back.inOut(1.7)',
  });

  team.from('.team__circle', {
    opacity: 0,
    duration: 2,
    x: 810,
    ease: 'back.inOut(3)',
  });
}

// Footer
if (document.querySelector('.footer')) {
  let footer = gsap.timeline({
    scrollTrigger: {
      trigger: '.footer',
      start: 'top bottom',
    },
  });

  footer.from('.footer__circle', {
    opacity: 0,
    duration: 2,
    x: -410,
    ease: 'back.inOut(1.7)',
  });
}

// Date IIFE
{
  const date = document.querySelector('.footer__year');
  const year = new Date().getFullYear();
  date.textContent = year;
}

// Modal
$(document).on('click', '[data-toggle="modal"]', function () {
  var $target = $($(this).data('target'));
  $target.toggleClass('modal--open');
  $('body').addClass('modal--open');
  return false;
});

$(document).on('click', '[data-dismiss="modal"]', function () {
  setTimeout(() => {
    $(this).parents('.modal').toggleClass('modal--open');
    $('body').removeClass('modal--open');
  }, 200);
  return false;
});

$('.modal').click(function (e) {
  if (e.target === e.currentTarget) {
    setTimeout(() => {
      $(this).removeClass('modal--open');
      $('body').removeClass('modal--open');
    }, 200);
  }
});

// Custom file upload
const uploadWrapper = document.querySelector('.form__upload');
if (uploadWrapper) {
  const actualBtn = document.getElementById('actual-btn');
  const removeFileBtn = document.querySelector('.form__remove');
  const fileChosen = document.getElementById('file-chosen');

  actualBtn.addEventListener('change', function () {
    fileChosen.textContent = this.files[0].name;
    uploadWrapper.classList.add('form__upload--uploaded');
  });

  removeFileBtn.addEventListener('click', () => {
    actualBtn.value = null;
    fileChosen.textContent = 'Resume';
    uploadWrapper.classList.remove('form__upload--uploaded');
  });
}

$(document).on('scroll', function () {
  let scrollAmount = window.scrollY;
  if (scrollAmount > 0) {
    $('.header').addClass('header--white');
  } else {
    $('.header').removeClass('header--white');
  }
});

$('.nav__link').click(function () {
  if ($(this).attr('href') === '#about') {
    $('html, body').animate(
      {
        scrollTop: $('.about').offset().top - 200,
      },
      1500
    );
  } else if ($(this).attr('href') === '#projects') {
    console.log($('.projects').offset().top);
    $('html, body').animate(
      {
        scrollTop: $('.projects').offset().top - 300,
      },
      1500
    );
  } else if ($(this).attr('href') === '#team') {
    $('html, body').animate(
      {
        scrollTop: $('.team').offset().top - 200,
      },
      1500
    );
  }
});

$('.header__logo').click(function () {
  $('html, body').animate(
    {
      scrollTop: $('.main').offset().top,
    },
    1500
  );
});

$('#submenu').click(function () {
  $('.submenu').toggleClass('submenu--open');
});

$('.submenu__link').click(function () {
  if ($(this).attr('id') === 'waterfall') {
    $('html, body').animate(
      {
        scrollTop: $('.solutions').offset().top - 50,
      },
      1500
    );
  } else {
    $('html, body').animate(
      {
        scrollTop: $('.agile').offset().top + 500,
      },
      1500
    );
  }
});
