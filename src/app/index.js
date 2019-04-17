/**============= Require all the scss and js files =================== */
import '../../style.scss';
import { home } from '../app/home/home';
import { products } from '../app/products/products';
import { login } from '../app/login/login';
import { signup } from '../app/signup/signup';

let myTemplate = require('./myHandlebar.hbs');

let slideIndex, slides, dots;

/**============= Handling page change on navigation click keeping header/footer fixed =================== */
const routes = {
  'signup': signup,
  'signin': login,
  'home': home,
  'products': products
}

$(document).ready(function() {
  slides = document.getElementsByClassName('bannerSlides');
  dots = document.getElementsByClassName('dot');

  // appending content section with home view(by default)
  content.innerHTML = routes['home'];

  slideIndex = 1;
  showSlides(slideIndex);

  onInitSlider();

  /**================== Navigation buttons ============================ */

  $('.nav-home').on('click', function() {
    onNavItemClick('home');
    onInitSlider();
    onDrawerCloseIconClick();
  });

  $('.nav-product').on('click', function() {
    onNavItemClick('products');
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

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'data/products/products.json');
ourRequest.onload = function() {
  if (ourRequest.status >= 200 && ourRequest.status < 400) {
    var data = JSON.parse(ourRequest.responseText);
    console.log('products data', data);
    createHTML(data);
  } else {
    console.log("We connected to the server, but it returned an error.");
  }
};

ourRequest.onerror = function() {
  console.log("Connection error");
};

ourRequest.send();

function createHTML(products) {
  content.innerHTML = myTemplate(products);
}