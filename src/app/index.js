/**============= Require all the scss and js files =================== */
import '../../style.scss';
import { makeRequest } from '../app/core/services/sabkabazar.service';
import {
  HeaderComponent,
  onDrawerIconClick,
  onDrawerCloseIconClick
} from '../../shared/header/header';
import { FooterComponent } from '../../shared/footer/footer';
import { HomeComponent } from '../app/home/home';
import { ProductComponent, onClickCategory } from '../app/products/products';
import { LoginComponent } from '../app/login/login';
import { SignupComponent } from '../app/signup/signup';

const WINDOW_CONFIG = window['SABKABAZAR_CONFIG'];

let slideIndex, slides, dots, banners, categories, products;

/**============= Handling page change on navigation click keeping header/footer fixed =================== */
const routes = {
  'signup': SignupComponent,
  'signin': LoginComponent,
  'home': HomeComponent,
  'products': ProductComponent
}

$(document).ready(function() {

  header.innerHTML = HeaderComponent();
  footer.innerHTML = FooterComponent();

  // fetch banners
  const promiseBanner = makeRequest(
    `${WINDOW_CONFIG.apiUrl}/mock-data/banners/banners.json`,
    'GET'
  );
  
  // fetching categories
  const promiseCategory = makeRequest(
    `${WINDOW_CONFIG.apiUrl}/mock-data/categories/categories.json`,
    'GET'
  );

  Promise.all([promiseBanner, promiseCategory])
    .then(function(result) {

      banners = result[0].banners;
      categories = result[1].categories;

      slides = document.getElementsByClassName('bannerSlides');
      dots = document.getElementsByClassName('dot');
    
      // creating data for handlebars
      // appending content section with home view(by default)
      onNavItemClick('home', {
        'banners': banners,
        'categories': categories
      });
    })
    .catch(function (error) {
      console.error('Something went wrong in banners', error);
    });

  /**================== Navigation buttons ============================ */

  $('.nav-home').on('click', function() {
  
    onNavItemClick('home', {
      'banners': banners,
      'categories': categories
    });
    onInitSlider();
    onDrawerCloseIconClick();
  
  });

  $('.nav-product').on('click', function() {
  
    // fetching products
    makeRequest(
      `${WINDOW_CONFIG.apiUrl}/mock-data/products/products.json`,
      'GET'
    )
    .then(function(result) {

      products = result.products;

      onClickProductOrCategory('products', {
        'products': products,
        'categories': categories
      });
    })
    .catch(function(error) {
      console.error('Something went wrong in products', error);
    })
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

  $('.btn-hamburger').on('click', function() {
    onDrawerIconClick();
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

// appending the dynamic html to the main element
function createHTML(section, data) {
  // content is the id of main section of the page
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
    changeSlide(-1);
  });

  $('.next').on('click', function() {
    changeSlide(1);
  });

  banners.forEach(function(banner, index) {
    $(`.dot-${index}`).on('click', function() {
      currentSlide(index);
    });
  })
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function onInitCategories() {

  // on mobile screen select is visible
  $('select').on('change', function() {
    onCategorySelection(this.value);
  });

  // on tablet and desktop screen
  categories.forEach((category, index) =>  {
    $(`.item-${index}`).on('click', function(el) {
      onCategorySelection(el.target.innerText);
    });
  });
}

function onCategorySelection(selectedCategory) {
  const selectedCategoryDetail = categories.filter(item => item.name === selectedCategory);
  let filteredProducts = onClickCategory(selectedCategoryDetail[0].id, products);
  
  onClickProductOrCategory('products', {
    'products': filteredProducts,
    'categories': categories
  });
}

function onClickProductOrCategory(selector, handlebarsData) {
  onNavItemClick(selector, handlebarsData);
  onInitCategories();
  onDrawerCloseIconClick();
}
