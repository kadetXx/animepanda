// set smooth scroll

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


//activate section scrollers

let scrollBtn = document.querySelectorAll('.scroll__btn');

scrollBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    document.querySelectorAll('.scroll__btn').forEach((icon) => {
      icon.classList.remove('scroll__btn--current');
    })
    e.target.classList.add('scroll__btn--current');
  })
})


//hamburger menu effects

let burger = document.querySelector('.menu-btn__container') 
burger.addEventListener('click', (e) => {
  document.querySelector('.menu-btn__container').classList.toggle('menu-btn__container--open')
})


//form highlight 

document.addEventListener('click', (e) => {
  if (1 == 1) {
    document.querySelector('label').classList.add('label--active')
  } else {
    document.querySelector('label').classList.remove('label--active')
  }
})




//display tabs

let tabs = document.querySelectorAll('.tab');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', (e) => {
    document.querySelectorAll('.tab').forEach((item) => {
      item.classList.remove('tab--active');
    })
    document.querySelectorAll('.tab')[index].classList.add('tab--active');

   let images = [
     'dashboard.png',
     'create-story.png',
     'creation.png',
     'render.png',
     'done-rendering.png'
   ];

   document.querySelector('.screen').setAttribute('src', `assets/img/${images[index]}`)
 
   gsap.to('.screen', {duration:0.7, delay: 0, y:10, ease: 'slow'});
   gsap.to('.screen', {duration:0.7, delay: 0.7, y:0, ease: 'slow'});

  })
})



//footer 

document.querySelector('.footer__button__container button').addEventListener('click', () => {
  document.querySelector('#email').focus();
})


// GSAP animations

gsap.from('.hero', {duration:1, delay: 0.6, y:20, ease: 'slow'});
gsap.from('.hero', {duration:3, delay: 0.6, opacity: 0, ease: 'slow'});
gsap.to('header', {duration:1, y: 0, opacity: "1", delay: 3, ease: 'back'});
gsap.from('.scroll', {duration:2,  opacity: 0, delay: 2.1, ease: 'back'})