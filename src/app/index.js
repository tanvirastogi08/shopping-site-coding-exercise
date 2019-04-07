/**============= Require all the scss and js files =================== */
import '../../style.scss';
import { home } from '../app/home/home';
import { products } from '../app/products/products';
import { login } from '../app/login/login';
import { signup } from '../app/signup/signup';

let slideIndex, slides, dots;

/**============= Handling page change on navigation click keeping header/footer fixed =================== */
const routes = {
  'signup': signup,
  'signin': login,
  'home': home,
  'products': products
}

const elements = {  
  btnSignin: document.getElementsByClassName("btn-signin"),
  btnRegister: document.getElementsByClassName("btn-register"),
  navHome: document.getElementsByClassName("nav-home"),
  navProduct: document.getElementsByClassName("nav-product"),
  sliderPrev: document.getElementsByClassName("prev"),
  sliderNext: document.getElementsByClassName("next"),
  dotOne: document.getElementsByClassName('dotOne'),
  dotTwo: document.getElementsByClassName('dotTwo'),
  dotThree: document.getElementsByClassName('dotThree'),
  dotFour: document.getElementsByClassName('dotFour'),
  dotFive: document.getElementsByClassName('dotFive')
}

window.onload = function() {
  slides = document.getElementsByClassName("mySlides");
  dots = document.getElementsByClassName("dot");

  content.innerHTML = routes['home'];
  slideIndex = 1;
  showSlides(slideIndex);
  
  // TODO: need some guidance for onclick method to call from template literal
  elements.sliderPrev[0].addEventListener('click', function() {
    plusSlide(-1);
  });

  elements.sliderNext[0].addEventListener('click', function() {
    plusSlide(1)
  });

  elements.dotOne[0].addEventListener('click', function() {
    currentSlide(1);
  });

  elements.dotTwo[0].addEventListener('click', function() {
    currentSlide(2);
  });
  
  elements.dotThree[0].addEventListener('click', function() {
    currentSlide(3);
  });
  
  elements.dotFour[0].addEventListener('click', function() {
    currentSlide(4);
  });
  
  elements.dotFive[0].addEventListener('click', function() {
    currentSlide(5);
  });

  elements.btnSignin[0].addEventListener('click', function() {
    onNavItemClick('signin');
  });

  elements.btnRegister[0].addEventListener('click', function() {
    onNavItemClick('signup')
  });

  elements.navHome[0].addEventListener('click', function() {
    onNavItemClick('home')
  });

  elements.navProduct[0].addEventListener('click', function() {
    onNavItemClick('products')
  });

  /**================== Login/Signup focus ============================ */
  $('.input100').each(function(){
    $(this).on('blur', function(){
      if($(this).val().trim() != "") {
        $(this).addClass('has-val');
      }
      else {
        $(this).removeClass('has-val');
      }
    })    
  });

  let showPass = 0;
  $('.btn-show-pass').on('click', function(){
    if(showPass == 0) {
      $(this).next('input').attr('type','text');
      showPass = 1;
    }
    else {
      $(this).next('input').attr('type','password');
      showPass = 0;
    }
  });
}

/**============= Slider show functionality on home page =================== */
function showSlides(n) {
  let i;
  if (n > slides.length) { slideIndex = 1; }    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

function plusSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function onNavItemClick(section) {
  content.innerHTML = routes[section];
  if(section === 'home') {
    slideIndex = 1;
    showSlides(slideIndex);
  }
}