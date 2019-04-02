var home = `
  <div class="home-container">
  <div class="slideshow-container">

    <div class="mySlides fade">
      <div class="numbertext">1 / 3</div>
      <img src="../../../assets/images/offers/offer1.jpg" style="width:100%">
      <div class="text">Caption Text</div>
    </div>

    <div class="mySlides fade">
      <div class="numbertext">2 / 3</div>
      <img src="../../../assets/images/offers/offer2.jpg" style="width:100%">
      <div class="text">Caption Two</div>
    </div>

    <div class="mySlides fade">
      <div class="numbertext">3 / 3</div>
      <img src="../../../assets/images/offers/offer3.jpg" style="width:100%">
      <div class="text">Caption Three</div>
    </div>

    <div class="mySlides fade">
      <div class="numbertext">3 / 3</div>
      <img src="../../../assets/images/offers/offer4.jpg" style="width:100%">
      <div class="text">Caption Three</div>
    </div>

    <div class="mySlides fade">
      <div class="numbertext">3 / 3</div>
      <img src="../../../assets/images/offers/offer5.jpg" style="width:100%">
      <div class="text">Caption Three</div>
    </div>

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
        <li>
          <div class="products-category">
            <figure class="category">
              <img src="../../../assets/images/category/fruits.png" alt="Korean bibimbap with egg and vegetables">
            </figure>
            <div class="product-detail">
              <h5>Fruits & Vegetables</h5>
              <p>A variety of fresh fruits and vegetables.</p>
              <a class="btn-explore-category" href="#">Explore-fruit-and-veg</a>
            </div>
          </div>
        </li>
        <li>
          <div class="products-category">
            <div class="product-detail">
              <h5>Bakery Cakes and Dairy</h5>
              <p>The best cupcakes, cookies, cakes, pies, cheesecakes, fresh bread, biscotti, muffins, bagels, fresh coffee, milk and more.</p>
              <a class="btn-explore-category" href="#">Explore-bakes-cakes-dairy</a>
            </div>
            <figure class="category">
              <img src="../../../assets/images/category/bakery.png" alt="Simple italian pizza with cherry tomatoes">
            </figure>
          </div>
        </li>
        <li>
          <div class="products-category">
            <figure class="category">
              <img src="../../../assets/images/category/beverages.png" alt="Chicken breast steak with vegetables ">
            </figure>
            <div class="product-detail">
              <h5>Beverages</h5>
              <p>Our beverage department will ensure your fridge is always fully stocked. Shop for soda, juice, beer and more.</p>
              <a class="btn-explore-category" href="#">Explore beverages</a>
            </div>
          </div>
        </li>
        <li>
          <div class="products-category">
            <div class="product-detail">
              <h5>Beauty and Hygiene</h5>
              <p>Buy beauty and personal care products online in India at best prices.</p>
              <a class="btn-explore-category" href="#">Explore beauty-hygiene</a>
            </div>
            <figure class="category">
              <img src="../../../assets/images/category/beauty.png" alt="Autumn pumpkin soup">
            </figure>
          </div>
        </li>
        <li>
          <div class="products-category">
            <figure class="category">
              <img src="../../../assets/images/category/baby.png" alt="Autumn pumpkin soup">
            </figure>
            <div class="product-detail">
              <h5>Baby Care</h5>
              <p>Shop online for Baby Products, Diapers, Skin Care Products,etc.</p>
              <a class="btn-explore-category" href="#">Explore baby</a>
            </div>
          </div>
        </li>
      </ul>
    </section>
  </div>
`
function plusSlides(n) {
  this.showSlides(this.slideIndex += n);
}

function currentSlide(n) {
  this.showSlides(this.slideIndex = n);
}
