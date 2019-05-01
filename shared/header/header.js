const headerView = require('./header.hbs');

export const Header = {
  render: async () => {
    return headerView();
  },
  after_render: async () => {
    const hamburgerMenu = document.getElementsByClassName('btn-hamburger');

    document.onclick = function(event){
      let modal = document.getElementById("myModal");
        // on-click cart icon
        if (event.target.closest("a") &&
          event.target.closest("a").classList.value == "cart-link"
        ) {
          modal.style.display = "block";
    
          let modalHeight = document.querySelector(".modal-content").clientHeight;
          let modalHeader = document.querySelector(".cart-header").clientHeight;
          let modalFooter = document.querySelector(".checkout-container").clientHeight;
    
          let height = modalHeight - modalHeader - modalFooter;
    
          document.querySelector(".items-container").style.height = height + "px";
        }
    
        // Get the <span> element that closes the modal
        if (event.target.classList.value == "close") {
          modal.style.display = "none";
        }
      
        // When the user clicks anywhere outside of the modal, close it
        if (event.target == modal) {
          modal.style.display = "none";
        }
      
        if (event.target.classList.value == "checkout-button") {
          modal.style.display = "none";
          window.location.href = "/#/";
        }
    };   
    
      hamburgerMenu[0].addEventListener('click', () => {
      let drawerIcon = document.getElementById('drawer');
      drawerIcon.classList.toggle('nav-open');
    });
  },

  onDrawerCloseIconClick: () => {
    document.getElementById('drawer').style.display = "none";
  }
}

export const cartInit = () => {
  let html = `<h4 class="empty-cart-header">No Items in the cart</h4>
    <p class="empty-cart-sub-header">Your favorite items are just a click away</p>`;

  document.querySelector(".items-container").innerHTML = html;
  document.querySelector(".promo-banner").classList.add("hide");

  document.querySelector(".items-container").classList.add("items-container-bg");
  document.querySelector(".checkout-button").innerHTML = "Start Shopping";
}