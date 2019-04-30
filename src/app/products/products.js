import { makeRequest } from '../core/services/sabkabazar.service';

const productView = require('./products.hbs');
const WINDOW_CONFIG = window['SABKABAZAR_CONFIG'];

let products, categories;
   
let onClickCategory = (selectedCategory, allProducts) => {
    return allProducts.filter(product => product.category === selectedCategory);
}

let onCategorySelection = (categoryId, products) => {
    let filteredProducts = onClickCategory(categoryId, products);
    let content = document.getElementById('page_container');

    content.innerHTML = productView({
        'categories': categories,
        'products': filteredProducts,
    });
      
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
    }
}

export let ProductById = {
    render: async (categoryId) => {
        let data = await Promise.all([
        makeRequest.getRequest(`${WINDOW_CONFIG.apiUrl}/mock-data/categories/categories.json`),
        makeRequest.getRequest(`${WINDOW_CONFIG.apiUrl}/mock-data/products/products.json`, categoryId),
        ]);

        categories = data[0].categories;
        products = data[1].products;

        return productView({
            'categories': data[0].categories,
            'products': data[1].products,
        });
    },
    after_render: async () => {
        let category = document.getElementsByClassName('category-item');
        Array.prototype.forEach.call(category, function(el) {
            el.addEventListener('click', (el) => {
                let selectedCategory = document.getElementsByClassName('default-category');
                selectedCategory[0].innerText = el.target.dataset.name;
            });
        });
    }
}