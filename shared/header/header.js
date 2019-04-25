const headerView = require('./header.hbs');

export const Header = {
  render: async () => {
    return headerView();
  },
  after_render: async () => {
    const hamburgerMenu = document.getElementsByClassName('btn-hamburger');

    hamburgerMenu[0].addEventListener('click', () => {
      let drawerIcon = document.getElementById('drawer');
      drawerIcon.classList.toggle('nav-open');
    });
  },
  onDrawerCloseIconClick: () => {
    document.getElementById('drawer').style.display = "none";
  }
}

// export function onDrawerIconClick() {
//   let drawerIcon = document.getElementById('drawer');
//   drawerIcon.classList.toggle('nav-open');
// }