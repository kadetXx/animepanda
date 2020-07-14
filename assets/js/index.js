//prevent form redirect on submit

$(function() {
  $('form').submit(function(e) {
    e.preventDefault()
      $.ajax({
          type: 'POST',
          url: 'subscribe.php',
          data: $(this).serialize(),
      }).then(res => alert('success'));
  }); 
})

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

//menu button 

let burger = document.querySelector('.menu-btn__container') 
burger.addEventListener('click', (e) => {
  document.querySelector('.menu-btn__container').classList.toggle('menu-btn__container--open')
})

//tabs

let tabs = document.querySelectorAll('.tab');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', (e) => {
    document.querySelectorAll('.tab').forEach((item) => {
      item.classList.remove('tab--active');
    })
    document.querySelectorAll('.tab')[index].classList.add('tab--active');
  })
})