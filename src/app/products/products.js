import { categories } from '../../config/categories';
import { allProducts } from '../../config/products';

const listAllProducts = (product) => {
  return `
    <li>
      <h4>${product.name}</h4>
      <div class="product-box">
        <figure class="product-photo">
          <img src="${product.imageURL}" alt="${product.name}">
        </figure>
        <p>${product.description}</p>
      </div>
      <div class="mrp-buy-wrapper">
        <span>MRP Rs. ${product.price}</span>
        <a class="btn-buy-now" href="#">Buy Now</a>
      </div>
    </li>
  `
}

const listAllProductsInSideNav = (category) => {
  return `
    <li class="side-nav-item">
    <a class="side-nav-link" href="">
      <span>${category.name}</span>
    </a>
  `
}

export const products =
  `<div class="content-container">
    <nav class="sidebar">
      <ul class="side-nav">
        ${categories.map(category => listAllProductsInSideNav(category)).join('')}
      </ul>
    </nav>
    <nav class="topbar">
      <ul class="side-nav">
        ${categories.map(category => listAllProductsInSideNav(category)).join('')}
      </ul>
    </nav>
    <main class="products-container">
      <ul class="products-showcase">
        ${allProducts.map(product => listAllProducts(product)).join('')}
      </ul>
    </main>
  </div>
`
