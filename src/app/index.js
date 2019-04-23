/**============= Require all the scss and js files =================== */
import '../../style.scss';
import { makeRequest } from '../app/core/services/sabkabazar.service';
import { headerTemplate, onDrawerIconClick, onDrawerCloseIconClick } from '../../shared/header/header';
import { footerTemplate } from '../../shared/footer/footer';
import { home } from '../app/home/home';
import { products, onClickCategory } from '../app/products/products';
import { login } from '../app/login/login';
import { signup } from '../app/signup/signup';

const WINDOW_CONFIG = window['SABKABAZAR_CONFIG'];

let slideIndex, slides, dots, banners, categories, productList;

/**============= Handling page change on navigation click keeping header/footer fixed =================== */
const routes = {
  'signup': signup,
  'signin': login,
  'home': home,
  'products': products
}

$(document).ready(function() {

  let handlebarsData;

  header.innerHTML = headerTemplate();
  footer.innerHTML = footerTemplate();

  // fetch banners and then categories
  const promiseBanner = makeRequest(
    `${WINDOW_CONFIG.apiUrl}/mock-data/banners/banners.json`,
    'GET'
  );

  const promiseCategory = makeRequest(
    `${WINDOW_CONFIG.apiUrl}/mock-data/categories/categories.json`,
    'GET'
  );

  Promise.all([promiseBanner, promiseCategory])
    .then(function(result) {

      banners = result[0];
      categories = result[1];
      
      slides = document.getElementsByClassName('bannerSlides');
      dots = document.getElementsByClassName('dot');
    
      // creating data for handlebars
      handlebarsData = {
        banners, categories
      }

      // appending content section with home view(by default)
      onNavItemClick('home', handlebarsData);
    })
    .catch(function (error) {
      console.error('Something went wrong in banners', error);
    });

  /**================== Navigation buttons ============================ */

  $('.nav-home').on('click', function() {
    handlebarsData = {
      banners, categories
    }
    onNavItemClick('home', handlebarsData);
    onInitSlider();
    onDrawerCloseIconClick();
  });

  $('.nav-product').on('click', function() {
    makeRequest(`${WINDOW_CONFIG.apiUrl}/mock-data/products/products.json`, 'GET')
      .then(function(products) {

        productList = products;

        handlebarsData = {
          products, categories
        }

        onClickProductOrCategory('products', handlebarsData);
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

  const bannerList = banners.banners;
  bannerList.forEach(function(banner, index) {
    $(`.dot-${index}`).on('click', function() {
      currentSlide(index);
    });
  })
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function plusSlide(n) {
  showSlides(slideIndex += n);
}

function onInitCategories(categories) {

  const allCategories = categories.categories;

  // on mobile screen select is visible
  $('select').on('change', function() {
    onCategorySelection(this.value);
  });

  // on tablet and desktop screen
  allCategories.forEach((category, index) =>  {
    $(`.item-${index}`).on('click', function(el) {
      onCategorySelection(el.target.innerText);
    });
  });
}

function onCategorySelection(selectedCategory) {
  const allCategories = categories.categories;
  const selectedCategoryDetail = allCategories.filter(item => item.name === selectedCategory);

  let products = onClickCategory(selectedCategoryDetail[0].id, productList.allProducts);
  products.allProducts = products;

  const handlebarsData = {
    products, categories
  }
  onClickProductOrCategory('products', handlebarsData)
}

function onClickProductOrCategory(selector, handlebarsData) {
  onNavItemClick(selector, handlebarsData);
  onInitCategories(handlebarsData.categories);
  onDrawerCloseIconClick();
}
