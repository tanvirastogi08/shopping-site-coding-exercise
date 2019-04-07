import { categories } from '../home/home';

/** products data for dynamic iteration */
const allProducts = [
  {
    "name": "Fresho Kiwi - Green, 3 pcs",
    "imageURL": "images/products/fruit-n-veg/kiwi-green.jpg",
    "description": "Kiwis are oval shaped with a brownish outer skin. The flesh is bright green and juicy with tiny, edible black seeds.",
    "price": 87,
    "stock": 50,
    "category": "5b6899953d1a866534f516e2",
    "sku": "fnw-kiwi-3",
    "id": "5b6c6a7f01a7c38429530883"
  },
  {
    "name": "Apple - Washington, Regular, 4 pcs",
    "imageURL": "images/products/fruit-n-veg/apple.jpg",
    "description": "The bright red coloured and heart shaped Washington apples are crunchy, juicy and slightly sweet. Washington Apples are a natural source of fibre and are fat free.",
    "price": 187,
    "stock": 50,
    "category": "5b6899953d1a866534f516e2",
    "sku": "fnw-apple-4",
    "id": "5b6c6aeb01a7c38429530884"
  },
  {
    "name": "Fresho Pomegrante Peeled, 500 gm ",
    "imageURL": "images/products/fruit-n-veg/pomegrante.jpg",
    "description": "Pomegranate variety has a glossy, vibrant and soft ruby-red skin. The inside of the fruit is divided into compartments by thin white membranes.",
    "price": 88,
    "stock": 50,
    "category": "5b6899953d1a866534f516e2",
    "sku": "fnw-pomegranate-500",
    "id": "5b6c6b7001a7c38429530885"
  },
  {
    "name": "Capsicum - Green, 1 kg",
    "imageURL": "images/products/fruit-n-veg/capsicum-green.jpg",
    "description": "Leaving a moderately pungent taste on the tongue, Green capsicums, also known as green peppers are bell shaped, medium-sized fruit pods.",
    "price": 137,
    "stock": 50,
    "category": "5b6899953d1a866534f516e2",
    "sku": "fnw-capsicum-1",
    "id": "5b6c6bdc01a7c38429530886"
  },
  {
    "name": "Tomato - Local, Organically Grown, 500 gm",
    "imageURL": "images/products/fruit-n-veg/capsicum-green.jpg",
    "description": "Fresho brings to you an exquisite range of locally grown organic tomatoes, which are now available at bigbasket. These organic tomatoes are free from harmful pesticides and insecticides.",
    "price": 12,
    "stock": 50,
    "category": "5b6899953d1a866534f516e2",
    "sku": "fnw-tomatoes-500",
    "id": "5b6c6c1801a7c38429530887"
  },
  {
    "name": "Sandwich Bread - White, Chemical Free, 400 gm",
    "imageURL": "images/products/bakery-cakes-dairy/bread.jpg",
    "description": "Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we decided to give you just that. We start baking our breads once you order using the finest ingredients available.",
    "price": 32,
    "stock": 50,
    "category": "5b6899123d1a866534f516de",
    "sku": "bcd-bread-400",
    "id": "5b6c6d3201a7c38429530888"
  },
  {
    "name": "Organic Fresh Paneer, 200 gm ",
    "imageURL": "images/products/bakery-cakes-dairy/paneer.jpg",
    "description": "Freshly Baked bread is one of lifes greatest simple pleasures and at Bigbasket we deFresho Organic Milk is sourced from farms that have been certified organic for over 8 years. All feed is naturally grown with no pesticides or fertilizers.",
    "price": 98,
    "stock": 50,
    "category": "5b6899123d1a866534f516de",
    "sku": "bcd-paneer-200",
    "id": "5b6c6d6201a7c38429530889"
  },
  {
    "name": "Epigamia Greek Yogurt - Blueberry, 90 gm Cup",
    "imageURL": "images/products/bakery-cakes-dairy/yogurt-blue.jpg",
    "description": "Epigama means in Ancient Greek meant a way to Formalize the relationship between different nations. Epigamia greek yogurt is one of the most authentic yoghurts which advocates a healthy lifestyle with delicious taste. An excellent source of protein without the added fat.",
    "price": 40,
    "stock": 50,
    "category": "5b6899123d1a866534f516de",
    "sku": "bcd-yogurt-blue",
    "id": "5b6c6d9e01a7c3842953088a"
  },
  {
    "name": "Epigamia Greek Yogurt - Strawberry, 90 gm",
    "imageURL": "images/products/bakery-cakes-dairy/yogurt-red.jpg",
    "description": "Low Fat and High protein delicious and thick Greek Yogurt.",
    "price": 40,
    "stock": 50,
    "category": "5b6899123d1a866534f516de",
    "sku": "bcd-yogurt-red",
    "id": "5b6c6dd701a7c3842953088b"
  },
  {
    "name": "Tata Tea Gold Leaf Tea, 500 gm",
    "imageURL": "images/products/beverages/tata-tea.jpg",
    "description": "Tata Tea Gold is a unique blend of fine Assam tea leaves with special 15%  long leaf.",
    "price": 165,
    "stock": 50,
    "category": "5b675e5e5936635728f9fc30",
    "sku": "bev-tata-tea-500",
    "id": "5b6c6f4a01a7c3842953088c"
  },
  {
    "name": "Red Label Tea, 500 gm Carton",
    "imageURL": "images/products/beverages/red-label.jpg",
    "description": "Brooke Bond Red Label is one of Indias largest selling packaged tea brands. Brooke Bond Red Label Tea is a blend CTC tea with best quality leaves.",
    "price": 205,
    "stock": 50,
    "category": "5b675e5e5936635728f9fc30",
    "sku": "bev-red-label-500",
    "id": "5b6c6f8301a7c3842953088d"
  },
  {
    "name": "Bournvita Pro-Health Drink - Chocolate, 2x750 gm",
    "imageURL": "images/products/beverages/bournvita.jpg",
    "description": "Cadbury Bournvita is a delicious chocolate health drink which is enriched with Vitamin (D,B2,B9,B12). It combines the great taste of chocolate, and goodness of essential nutrients that aid growth and development.",
    "price": 572,
    "stock": 50,
    "category": "5b675e5e5936635728f9fc30",
    "sku": "bev-bournvita-750",
    "id": "5b6c6fbf01a7c3842953088e"
  },
  {
    "name": "Coca Cola Soft Drink, 2x1.75 L",
    "imageURL": "images/products/beverages/bournvita.jpg",
    "description": "Cadbury Bournvita is a delicious chocolate health drink which is enriched with Vitamin (D,B2,B9,B12). It combines the great taste of chocolate, and goodness of essential nutrients that aid growth and development.",
    "price": 150,
    "stock": 50,
    "category": "5b675e5e5936635728f9fc30",
    "sku": "coke-175",
    "id": "5b6c6fed01a7c3842953088f"
  },
  {
    "name": "Listerine Mouthwash - Cool Mint, 250 ml",
    "imageURL": "images/products/beauty-hygiene/listerine.jpg",
    "description": "Listerine Cool mint Antibacterial Mouthwash is rapid & easy to use, a 30 second \"slosh\" with Listerine after brushing and flossing reaches parts of the mouth that may be missed. Used two times daily, Listerine provides 24-hour defence against plaque and lasting bright breath assurance.",
    "price": 109,
    "stock": 50,
    "category": "5b68994e3d1a866534f516df",
    "sku": "bh-listerine-250",
    "id": "5b6c715f01a7c38429530890"
  },
  {
    "name": "TRESemme Shampoo - Keratin Smooth With Argan Oil, 580 ml ",
    "imageURL": "images/products/beauty-hygiene/shampoo.jpg",
    "description": "For the first time, at TRESemme , Our Professional combines luxurious ingredients to give you gorgeously smoother shiny hair every day , infused with keratin protein and lightweight argan oil , our advanced keratin smooth system gently nourishes hair and controls frizz for up to 3 days.",
    "price": 410,
    "stock": 50,
    "category": "5b68994e3d1a866534f516df",
    "sku": "bh-tresemme-580",
    "id": "5b6c71a101a7c38429530891"
  },
  {
    "name": "Dove Intense Repair Shampoo 650ml + Bathing Bar Soap Cream Beauty 100G Pack of 3",
    "imageURL": "images/products/beauty-hygiene/dove.jpg",
    "description": "Dove Cream Beauty Bar combines a gentle cleansing formula with Doves signature 1/4 moisturizing cream to give you softer, smoother and more glowing skin.",
    "price": 622,
    "stock": 50,
    "category": "5b68994e3d1a866534f516df",
    "sku": "bh-dove-combo",
    "id": "5b6c71e601a7c38429530892"
  },
  {
    "name": "Premier Facial Tissue - Special, 400 pcs",
    "imageURL": "images/products/beauty-hygiene/tissues.jpg",
    "description": "Let your beautiful face stay clean Here Premier Special Face Tissues are available, mostly prepared targeting to care for your face which has spongy and delicate skin.",
    "price": 270,
    "stock": 50,
    "category": "5b68994e3d1a866534f516df",
    "sku": "bh-tissue-400",
    "id": "5b6c721d01a7c38429530893"
  },
  {
    "name": "Close Up Ever Fresh Red Hot Gel Toothpaste, 150 gm",
    "imageURL": "images/products/beauty-hygiene/closeup.jpg",
    "description": " Closeup's unique Active Zinc Mouthwash not only cleans deep corners of your mouth of residual germs it also gives you upto 12 Hours Fresh Breath.",
    "price": 82,
    "stock": 50,
    "category": "5b68994e3d1a866534f516df",
    "sku": "bh-closeup-150",
    "id": "5b6c727801a7c38429530894"
  },
  {
    "name": "Pampers Diapers Pants - Large Size, Monthly Box Pack, New, 128's pack",
    "imageURL": "images/products/baby/pampers.jpg",
    "description": "Pampers dry, pants style diapers are the only pants in India with new air channels that provides your baby with breathable dryness overnight.",
    "price": 1999,
    "stock": 50,
    "category": "5b6899683d1a866534f516e0",
    "sku": "baby-pamper-128",
    "id": "5b6c746801a7c38429530895"
  },
  {
    "name": "Mamypoko Pants Style Diapers - Large, 62 pcs",
    "imageURL": "images/products/baby/mamy.jpg",
    "description": "MamyPoko Pants Extra Absorb is a Pant Style diaper that can be used most comfortably for the baby at night Because of Powerful slim core that can absorb up to 12 hours, it prevents leakage till morning.",
    "price": 930,
    "stock": 50,
    "category": "5b6899683d1a866534f516e0",
    "sku": "baby-mamy-62",
    "id": "5b6c74d101a7c38429530896"
  },
  {
    "name": "Johnson & Johnson Baby skincare wipes, 20 pcs",
    "imageURL": "images/products/baby/wipes.jpg",
    "description": "Johnsons Baby wipes gently cleanse and care for babys delicate skin. As mild as pure water, they can be used safely all over the body, even around eyes.",
    "price": 70,
    "stock": 50,
    "category": "5b6899683d1a866534f516e0",
    "sku": "baby-wipes-20",
    "id": "5b6c750701a7c38429530897"
  },
  {
    "name": "Nestle Cerelac Stage - 4 Multi Grain & Fruits, 2x300 gm",
    "imageURL": "images/products/baby/cerelac.jpg",
    "description": "Nestle Multigrain Cerelac enriched with the goodness of five fruits is a complementary food which is given to babies above the age of six months.",
    "price": 478,
    "stock": 50,
    "category": "5b6899683d1a866534f516e0",
    "sku": "baby-cerelac-300",
    "id": "5b6c753c01a7c38429530898"
  },
  {
    "name": "Baby Dove Baby Bar - Rich Moisture, 50 gm",
    "imageURL": "images/products/baby/baby-dove.jpg",
    "description": "Gentler and more nourishing than any other baby soap bar, Baby Dove Rich Moisture Baby Bar has a hypoallergenic and pH neutral formula thats ophthalmologist, dermatologist and pediatrician tested too.",
    "price": 30,
    "stock": 50,
    "category": "5b6899683d1a866534f516e0",
    "sku": "baby-dove-50",
    "id": "5b6c758301a7c38429530899"
  },
  {
    "name": "Johnson's Active Kids Shampoo - Shiny Drops With Argan Oil, 100 ml",
    "imageURL": "images/products/baby/shampoo.jpg",
    "description": "A hair care product range specifically for kids aged 2 years and above. This mild shiny drops shampoo formula has been developed to boost natural shine & help reduce frizz, leaving hair silky smooth and healthy looking.",
    "price": 95,
    "stock": 50,
    "category": "5b6899683d1a866534f516e0",
    "sku": "baby-shampoo-100",
    "id": "5b6c75e101a7c3842953089a"
  },
  {
    "name": "Baby Wipes - Cherry Blossom, 2x80 pcs",
    "imageURL": "images/products/baby/red-wipes.jpg",
    "description": "These Wipes have aloe vera as key ingredient which makes it the best choice for baby hygiene, make-up remover, sanitizing your face and hand after a long drive, sports or any other situation where you need a quick hygiene solution.",
    "price": 300,
    "stock": 50,
    "category": "5b6899683d1a866534f516e0",
    "sku": "baby-wipes-red-80",
    "id": "5b6c761801a7c3842953089b"
  }
]

const listAllProducts = (product) => {
  return `
    <li>
      <h5>${product.name}</h5>
      <figure class="product-photo">
        <img src="${product.imageURL}" alt="${product.name}">
      </figure>
      <p>${product.description}</p>
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
    <main class="products-container">
      <ul class="products-showcase">
        ${allProducts.map(product => listAllProducts(product)).join('')}
      </ul>
    </main>
  </div>
`
