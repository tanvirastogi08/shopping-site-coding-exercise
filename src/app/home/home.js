import { banners } from '../../config/banners';
import { categories } from '../../config/categories';

const listAllBanners = (banner) => {
  return `
    <div class="bannerSlides fade">
      <img src="${banner.bannerImageUrl}" style="width:100%" alt="${banner.bannerImageAlt}">
    </div>
  `
}

const listAllCategories = (category) => {
  return `
    <li class="category-list">
      <div class="products-category">
        <figure class="category">
          <img src="${category.imageUrl}" alt="${category.key}">
        </figure>
        <div class="product-detail">
          <h5>${category.name}</h5>
          <p>${category.description}</p>
          <a class="btn-explore-category" href="#">Explore-${category.key}</a>
        </div>
      </div>
    </li>
  `
}

const bannerDots = (index) => {
  return `
    <span class="dot dot-${index}"></span> 
  `
}

export const home = `
  <div class="home-container">
    <div class="slideshow-container">
      ${banners.map(banner => listAllBanners(banner)).join('')}
      <a class="prev">&#10094;</a>
      <a class="next">&#10095;</a>
    </div>
    <br>
    <div style="text-align:center;">
      ${banners.map((banner, index) => bannerDots(index+1)).join('')}
    </div>
    <section class="products-section">
      <ul class="products-listing">
        ${categories.map(category => listAllCategories(category)).join('')}
      </ul>
    </section>
  </div>
`