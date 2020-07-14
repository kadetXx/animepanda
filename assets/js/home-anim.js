// set smooth scroll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  document.querySelector('.scroll__btn:nth-child(1)').classList.add('scroll__btn--current')
});


// GSAP animations

gsap.from('.hero', {duration:1, delay: 0.6, y:20, ease: 'slow'});
gsap.from('.hero', {duration:3, delay: 0.6, opacity: 0, ease: 'slow'});
gsap.to('header', {duration:1, y: 0, opacity: "1", delay: 1, ease: 'back'});
gsap.from('.scroll', {duration:2,  opacity: 0, delay: 2.1, ease: 'back'})

//initialise GSAP scroll trigger

gsap.registerPlugin(ScrollTrigger);

function goToSection(i, anim) {
  gsap.to(window, {
    scrollTo: {y: i*innerHeight, autoKill: false},
    duration: 1
  });
  
  if(anim) {
    anim.restart();
  }
}

gsap.utils.toArray(".panel").forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    onEnter: () => goToSection(i)
  });
  
  ScrollTrigger.create({
    trigger: panel,
    start: "bottom bottom",
    onEnterBack: () => goToSection(i),
  });
});
