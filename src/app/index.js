/**============= Require all the scss and js files =================== */
import '../../style.scss';
import { home, banners, categories } from '../app/home/home';
import { products, productList } from '../app/products/products';
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

$(document).ready(function() {

  let data = {
    banners, categories
  }
  slides = document.getElementsByClassName('bannerSlides');
  dots = document.getElementsByClassName('dot');

  // appending content section with home view(by default)
  onNavItemClick('home', data);

  /**================== Navigation buttons ============================ */

  $('.nav-home').on('click', function() {
    data = {
      banners, categories
    }
    onNavItemClick('home', data);
    onInitSlider();
    onDrawerCloseIconClick();
  });

  $('.nav-product').on('click', function() {
    data = {
      productList, categories
    }
    onNavItemClick('products', data);
    onDrawerCloseIconClick();
  });

  $('.btn-signin').on('click', function() {
    onNavItemClick('signin');
    onDrawerCloseIconClick();
  });

  $('.btn-register').on('click', function() {
    onNavItemClick('signup');
    onDrawerCloseIconClick();
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
  
});

function onNavItemClick(section, data) {
  createHTML(section, data);

  if(section === 'home') {
    slideIndex = 1;
    showSlides(slideIndex);
    onInitSlider();
  }
}

function createHTML(section, data) {
  content.innerHTML =  routes[section](data);
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

function onInitSlider() {
  // prev and next slider button
  $('.prev').on('click', function() {
    plusSlide(-1);
  });

  $('.next').on('click', function() {
    plusSlide(1);
  });

  // slider dots button
  $('.dot-1').on('click', function() {
    currentSlide(1);
  });

  $('.dot-2').on('click', function() {
    currentSlide(2);
  });

  $('.dot-3').on('click', function() {
    currentSlide(3);
  });

  $('.dot-4').on('click', function() {
    currentSlide(4);
  });

  $('.dot-5').on('click', function() {
    currentSlide(5);
  });
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function plusSlide(n) {
  showSlides(slideIndex += n);
}
