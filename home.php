<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, shrink-to-fit=no">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link rel="stylesheet" href="assets/css/style.css">
  <title>Sass Tester</title>
</head>
<body>

  <header>
    <div class="logo-container">
      <a href="#"><h2 class="logo-container__logo">AnimePanda</h2></a>
    </div>

    <div class="menu-btn">
      <div class="menu-btn__container">
        <div class="menu-btn__bar"></div>
        <div class="menu-btn__bar"></div>
        <!-- <div class="menu-btn__bar"></div> -->
      </div>
    </div>
  </header>

  <div class="scroll">
    <a href="#top" class="scroll__btn"></a>
    <a href="#second" class="scroll__btn"><div></div></a>
    <a href="#third" class="scroll__btn"></a>
    <!-- <a href="#top" class="scroll__btn"></a> -->
  </div>

  <section id="top" class="panel">
  
    <div class="hero">
      <div class="hero__left">
        <div class="hero__left__text-container">
          <h1 class="hero__left__text--big">
            Convert written stories to <br> <b>Animated </b> videos!
          </h1>
          <p class="hero__left__text--small">
            Ever thought of making your own animated movies? AnimePanda is a user friendly software that automatically converts written text/stories into animated movies in simple steps</div>
        
        <div class="hero__right">
          <!-- <img src="./assets/img/undraw_videographer_nnc7.svg" alt="game" class="hero__right__img"> -->
          <div class="form-box">
            <form id="early-bird">
              <div class="form-group">
                <label for="email">
                  <input type="email" id="email" placeholder="Enter your email..." name="email" required>
                  <input type="submit" value="Notify me" id="submit">
                </label>
              </div>
            </form>
            <small>Get early access when we launch</small>
          </div>
        </div>
  
        <div class="hero__social">
          <i class="fab fa-twitter"></i>
          <i class="fab fa-instagram"></i>
          <i class="fab fa-facebook-f"></i>
          <i class="fab fa-dribbble"></i>
        </div>
      </div>
    </div>

    <img src="assets/img/topimage.png" alt="" class="hero__image">
  </section>

  <section id="second" class="panel">
    <div class="showcase">
      <div class="showcase__header">
        <h2>How It Works</h2>
        <p>We have provided a fully automated software solution for anime lovers, video ad makers, movie script writers, Vlogers and the general public at large</p>
      </div>

      <div class="display">
        <div class="tabs">
          <div class="tab tab--active">
            <div class="tab__sn"><h3>1.</h3></div>
            <div class="tab__content">
              <h2>Sign Up</h2>
              <p>One click sign up with google, apple, or microsoft</p>
            </div>
          </div>
          <div class="tab">
          <div class="tab__sn"><h3>2.</h3></div>
            <div class="tab__content">
              <h2>Submit story</h2>
              <p>Write text or add google doc/evernote link</p>
            </div>
          </div>
          <div class="tab">
          <div class="tab__sn"><h3>3.</h3></div>
            <div class="tab__content">
              <h2>Select Character Type</h2>
              <p>One click sign up with google, apple, or microsoft</p>
            </div>
          </div>
        </div>
        <div class="screens">
          <div class="screen__container">
            <img src="assets/img/tabimg.png" alt="" class="screen">
          </div>
        </div>
      </div>
    </div>
  </section>

  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.4.0/gsap.min.js"></script>
  <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/gsap-latest-beta.min.js?r=5426"></script>
  <script src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/ScrollTrigger.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.3.1/ScrollToPlugin.min.js"></script>
  <script type="text/javascript" src="assets/js/home-anim.js"></script>
  <script type="text/javascript" src="assets/js/index.js"></script>
</body>
</html>