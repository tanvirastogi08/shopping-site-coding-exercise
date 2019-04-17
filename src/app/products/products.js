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
        <a class="btn-buy-now" href="#" data-mrp=" @ MRP Rs. ${product.price}">Buy Now</a>
      </div>
    </li>
  `
}

const listAllProductsInSideNav = (category) => {
  return `
    <li class="nav-item">
      <a class="nav-item-link" href="">
        <span>${category.name}</span>
      </a>
    </li>
  `
}

const listAllProductsInTopNav = (category) => {
  return `
    <option class="nav-item">
      <span class="nav-item-link">${category.name}</span>
    </option>
  `
}

export const products =
  `<div class="products-container">
    <nav class="sidebar">
      <ul class="navbar">
        ${categories.map(category => listAllProductsInSideNav(category)).join('')}
      </ul>
    </nav>
    <nav class="topbar">
      <select class="navbar selected">
        ${categories.map(category => listAllProductsInTopNav(category)).join('')}
      </select>
    </nav>
    <ul class="products-showcase">
      ${allProducts.map(product => listAllProducts(product)).join('')}
    </ul>
  </div>
`
