import { makeRequest } from '../core/services/sabkabazar.service';

const productView = require('./products.hbs');
const WINDOW_CONFIG = window['SABKABAZAR_CONFIG'];

let products, categories;

let onInitCategories = () => {
  // on mobile screen select is visible
  $('select').on('change', function() {
    onCategorySelection(this.options[this.selectedIndex].dataset.id);
  });
}
   
let onClickCategory = (selectedCategory, allProducts) => {
    console.log('selectedCategory', selectedCategory, allProducts);
    return allProducts.filter(product => product.category === selectedCategory);
}

let onCategorySelection = (categoryId, products) => {
  let filteredProducts = onClickCategory(categoryId, products);
  console.log('categories', categories, this);

  onClickProductOrCategory('products', {
    'products': filteredProducts,
    'categories': categories
  });
}

let onClickProductOrCategory = (selector, handlebarsData) => {
    console.log('selector', selector, handlebarsData);
//   onNavItemClick(selector, handlebarsData);
//   onInitCategories();
//   onDrawerCloseIconClick();
}

export let Product = {
    render: async () => {
        let data = await Promise.all([
            makeRequest.getRequest(`${WINDOW_CONFIG.apiUrl}/mock-data/categories/categories.json`),
            makeRequest.getRequest(`${WINDOW_CONFIG.apiUrl}/mock-data/products/products.json`),
        ]);

        categories = data[0].categories;
        products = data[1].products;

        return productView({
            'categories': data[0].categories,
            'products': data[1].products,
        });
    },
    after_render: async () => {
          // on tablet and desktop screen
        let category = document.getElementsByClassName('nav-item-link');
        category[0].addEventListener('click', (el) => {
            onCategorySelection(el.target.dataset.id, products);
        });
    }
}