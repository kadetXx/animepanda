//prevent form redirect on submit

$(function() {
  $('form').submit(function(e) {
    e.preventDefault()
      $.ajax({
          type: 'POST',
          url: 'subscribe.php',
          data: $(this).serialize(),
      });
  }); 
})

//activate section scrollers

let scrollBtn = document.querySelectorAll('.scroll__btn');

scrollBtn.forEach((btn, index) => {
  btn.addEventListener('click', (e) => {
    if (index == 1) {
      document.querySelector('.scroll').className = 'scroll scroll--light';
    } else if (index == 0) {
      document.querySelector('.scroll').className = 'scroll';
    }

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