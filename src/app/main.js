
// import products from '../config/products/products.json';
 
var slideIndex, slides, dots;
var routes = {
    'signup': signup,
    'signin': login,
    'home': home,
    'products': products
}
console.log('in main.js', this);

window.onload = function() {

  this.slides = document.getElementsByClassName("mySlides");
  this.dots = document.getElementsByClassName("dot");

  content.innerHTML = routes['home'];
  this.slideIndex = 1;
  this.showSlides(this.slideIndex);
}

function showSlides(n) {
  var i;
  if (n > slides.length) { this.slideIndex = 1; }    
  if (n < 1) {this.slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[this.slideIndex-1].style.display = "block";  
  dots[this.slideIndex-1].className += " active";
}

function onNavItemClick(section) {
  content.innerHTML = routes[section];
  if(section === 'home') {
    this.slideIndex = 1;
    this.showSlides(this.slideIndex);
  }
}

/**============= Login Input =================== */
(function ($) {
    "use strict";
    /*==================================================================
    [ Focus input ]*/
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

    var showPass = 0;
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

})(jQuery);