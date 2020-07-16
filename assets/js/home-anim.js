// set smooth scroll animation

$(document).ready(function(){
  
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        window.location.hash = hash;
      });
    } 
  });
  document.querySelector('.scroll__btn:nth-child(1)').classList.add('scroll__btn--current')
});

//activate desktop  section scrollers

window.addEventListener("scroll", function (e) {

  let scroll = this.scrollY;
  let scrollBtn =  document.querySelectorAll('.scroll__btn');

  if (scroll > 1600) {

    scrollBtn.forEach((icon) => {
      icon.classList.remove('scroll__btn--current');
    })
    scrollBtn[2].classList.add('scroll__btn--current');

  } else if (scroll >= 700) {

    scrollBtn.forEach((icon) => {
      icon.classList.remove('scroll__btn--current');
    })
    scrollBtn[1].classList.add('scroll__btn--current');

  } else if (scroll >= 0 && scroll <= 500) {

    scrollBtn.forEach((icon) => {
      icon.classList.remove('scroll__btn--current');
    })
    scrollBtn[0].classList.add('scroll__btn--current');

  }
});


//hamburger menu effects

let burger = document.querySelector('.menu-btn__container') 
burger.addEventListener('click', (e) => {
  burger.classList.toggle('menu-btn__container--open');
  document.querySelector('.devs').classList.toggle('devs--active') 
})


//form highlight on input

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('email')) {
    document.querySelector('label').classList.add('label--active')
    document.querySelector('#submit').classList.add('dance')
  } else {
    document.querySelector('label').classList.remove('label--active')
    document.querySelector('#submit').classList.remove('dance')
  }
})


//iterate through screens on tab changes (desktop)

let tabs = document.querySelectorAll('.tab');

tabs.forEach((tab, index) => {

  //add event listerner on all tabs
  tab.addEventListener('click', (e) => {

    //remove active class from all tabs
    tabs.forEach((item) => {
      item.classList.remove('tab--active');
    })

    //add active class to current tab
    tabs[index].classList.add('tab--active');

    let images = [
      'sign-up.png',
      'create-story.png',
      'select-avatar.png',
      'dashboard.png',
      'detail.png',
      'rendering.png'
    ];

    //switch images per tab change
    document.querySelector('.screen').setAttribute('src', `assets/img/${images[index]}`)
 
    //animate image switch
    gsap.to('.screen', {duration:0.7, delay: 0, y:10, ease: 'slow'});
    gsap.to('.screen', {duration:0.7, delay: 0.7, y:0, ease: 'slow'});

  })
})

//mobile tabs iteration

let navi = document.querySelectorAll('.mobile__tab__nav');
let i = 0;

navi.forEach((btn, index) => btn.addEventListener('click', () => {

  let images = [
    'sign-up.png',
    'create-story.png',
    'select-avatar.png',
    'rendering.png',
    'detail.png',
    'dashboard.png',
  ];

  //check if arrow button is arrow right
  if (index == 1 && i >= 0 && i < 5) {

    //increment i
    i++;

    //collect current image from image array
    document.querySelector('.screen').setAttribute('src', `assets/img/${images[i]}`);

    //remove active text class from all tabs
    document.querySelectorAll('.mobile-tab__text').forEach((item) => {
      item.classList.remove('mobile-tab__text--active');
    });

    //add active text class to current tab
    document.querySelectorAll('.mobile-tab__text')[i].classList.add('mobile-tab__text--active');
    
    //animate image switch
    gsap.to('.screen', {duration:0.7, delay: 0, x:7, ease: 'slow'});
    gsap.to('.screen', {duration:0.7, delay: 0.7, x:0, ease: 'slow'});

  } else if (index == 0 && i > 0 && i <= 5) { //checked if arrow is left

    //decrease i
    i--;

    //collect current image from image array
    document.querySelector('.screen').setAttribute('src', `assets/img/${images[i]}`);

    //remove active tab class from all tabs
    document.querySelectorAll('.mobile-tab__text').forEach((item) => {
      item.classList.remove('mobile-tab__text--active');
    })

    //add active text class to current tab text
    document.querySelectorAll('.mobile-tab__text')[i].classList.add('mobile-tab__text--active');

    gsap.to('.screen', {duration:0.7, delay: 0, x:-4, ease: 'slow'});
    gsap.to('.screen', {duration:0.7, delay: 0.7, x:0, ease: 'slow'});
  }
}));



//footer button scroll to input function

document.querySelector('.footer__button__container button').addEventListener('click', () => {
  document.querySelector('#email').focus();
})


// GSAP animations

// hero text animations
gsap.from('.hero', {duration:1, delay: 0.6, y:20, ease: 'circ'});
gsap.from('.hero', {duration:2, delay: 0.6, opacity: 0, ease: 'circ'});

//form slide down animation
gsap.from('label', {duration:1,  y:-100, delay: 1, ease: 'circ'})

//desktop scrollbars fade in
gsap.from('.scroll', {duration:2,  opacity: 0, delay: 2.1, ease: 'back'}) 

//animate tabs slide in on scroll
// gsap.registerPlugin(ScrollTrigger);

// gsap.from(".tab-left", {
//   scrollTrigger: {
//     trigger: ".tab",
//     toggleActions: "restart none none none"
//   },
//   x: -300,
//   duration: 2,
//   stagger: Math.random()
// });

// gsap.from(".tab-right", {
//   scrollTrigger: {
//     trigger: ".tab",
//     toggleActions: "restart none none none"
//   },
//   x: 300,
//   duration: 2,
//   stagger: Math.random()
// });


//AOS
AOS.init();