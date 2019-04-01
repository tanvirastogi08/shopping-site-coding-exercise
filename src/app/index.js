// $(document).ready(function() {
//     content.innerHTML = routes['home'];
//     var slideIndex = 1;
//     this.showSlides(slideIndex);
// });
var slideIndex;
window.onload = function() {
  content.innerHTML = routes['home'];
  slideIndex = 1;
  this.showSlides(slideIndex);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
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
console.log('window: ', window);

var routes = {
    'register': register,
    'signin': login,
    'home': home,
    'products': products
}

function onNavItemClick(section) {
    content.innerHTML = routes[section];
}

