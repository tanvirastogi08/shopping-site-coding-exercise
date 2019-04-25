import { makeRequest } from '../core/services/sabkabazar.service';

const WINDOW_CONFIG = window['SABKABAZAR_CONFIG'];

const homeView = require('./home.hbs');
let slideIndex = 1;

let currentSlide = (n) => {
    showSlides(slideIndex = n);
}

let changeSlide= (n) => {
    showSlides(slideIndex += n);
}

let showSlides= (n) => {
    let i;
    let slides = document.getElementsByClassName('bannerSlides');
    let dots = document.getElementsByClassName('dot');

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

export let Home = {
    render: async () => {
        let data = await Promise.all([
            makeRequest.getRequest( `${WINDOW_CONFIG.apiUrl}/mock-data/banners/banners.json`),
            makeRequest.getRequest(`${WINDOW_CONFIG.apiUrl}/mock-data/categories/categories.json`)
        ]);
       return homeView({
            'banners': data[0].banners,
            'categories': data[1].categories
        });
    },
    after_render: async () => {
        // prev and next slider button
        const prev = document.getElementsByClassName('prev');
        const next = document.getElementsByClassName('next');

        prev[0].addEventListener('click', function() {
            changeSlide(-1);
        });
          
        next[0].addEventListener('click', function() {
            changeSlide(1);
        });

        showSlides(1);
    }
}