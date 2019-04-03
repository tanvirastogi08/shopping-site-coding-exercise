/** banner data for dynamic iteration */
let banners = [
  {
    "bannerImageUrl": "/images/offers/offer1.jpg",
    "bannerImageAlt": "Independence Day Deal - 25% off on shampoo",
    "isActive": true,
    "order": 1,
    "id": "5b6c38156cb7d770b7010ccc"
  },
  {
    "bannerImageUrl": "/images/offers/offer2.jpg",
    "bannerImageAlt": "Independence Day Deal - Rs120 off on surf",
    "isActive": true,
    "order": 2,
    "id": "5b6c38336cb7d770b7010ccd"
  },
  {
    "bannerImageUrl": "/images/offers/offer3.jpg",
    "bannerImageAlt": "Independence Day Deal - Rs99 off on domex",
    "isActive": true,
    "order": 3,
    "id": "5b6c38456cb7d770b7010cce"
  },
  {
    "bannerImageUrl": "/images/offers/offer4.jpg",
    "bannerImageAlt": "Independence Day Deal - Rs99 off on bodywash",
    "isActive": true,
    "order": 4,
    "id": "5b6c38576cb7d770b7010ccf"
  },
  {
    "bannerImageUrl": "/images/offers/offer5.jpg",
    "bannerImageAlt": "Independence Day Deal - Rs70 off on tea",
    "isActive": true,
    "order": 5,
    "id": "5b6c386b6cb7d770b7010cd0"
  }
];

/** categories data for dynamic iteration */
let categories =[  
  {
    "name": "Fruits & Vegetables",
    "key": "fruit-and-veg",
    "description": "A variety of fresh fruits and vegetables.",
    "enabled": true,
    "order": 1,
    "imageUrl": "/images/category/fruits.png",
    "id": "5b6899953d1a866534f516e2"
  },  
  {
    "name": "Bakery Cakes and Dairy",
    "key": "bakery-cakes-dairy",
    "description": "The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.",
    "enabled": true,
    "order": 2,
    "imageUrl": "/images/category/bakery.png",
    "id": "5b6899123d1a866534f516de"
  },
  {
    "name": "Beverages",
    "key": "beverages",
    "description": "Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more. ",
    "enabled": true,
    "order": 3,
    "imageUrl": "/images/category/beverages.png",
    "id": "5b675e5e5936635728f9fc30"
  },
  {
    "name": "Beauty and Hygiene",
    "key": "beauty-hygiene",
    "description": "Buy beauty and personal care products online in India at best prices.",
    "enabled": true,
    "order": 4,
    "imageUrl": "/images/category/beauty.png",
    "id": "5b68994e3d1a866534f516df"
  },
  {
    "name": "Baby Care",
    "key": "baby",
    "description": "Shop online for Baby Products, Diapers, Skin Care Products,etc.",
    "enabled": true,
    "order": 5,
    "imageUrl": "/images/category/baby.png",
    "id": "5b6899683d1a866534f516e0"
  }
];

let listAllBanners = (banner) => {
  return `
    <div class="mySlides fade">
      <img src="${banner.bannerImageUrl}" style="width:100%" alt="${banner.bannerImageAlt}">
    </div>
  `
}

let listAllCategories = (category) => {
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

let home = `
  <div class="home-container">
    <div class="slideshow-container">
      ${banners.map(banner => listAllBanners(banner)).join('')}
      <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a class="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br>
    <div style="text-align:center;">
      <span class="dot" onclick="currentSlide(1)"></span> 
      <span class="dot" onclick="currentSlide(2)"></span> 
      <span class="dot" onclick="currentSlide(3)"></span>
      <span class="dot" onclick="currentSlide(4)"></span> 
      <span class="dot" onclick="currentSlide(5)"></span> 
    </div>
    <section class="products-section">
      <ul class="products-listing">
        ${categories.map(category => listAllCategories(category)).join('')}
      </ul>
    </section>
  </div>
`

/** both functions will be used when dots and next, prev button will be clicked */
function plusSlides(n) {
  this.showSlides(this.slideIndex += n);
}

function currentSlide(n) {
  this.showSlides(this.slideIndex = n);
}
