export const HeaderComponent = require('./header.hbs');

export function onDrawerIconClick() {
  let drawerIcon = document.getElementById('drawer');
  drawerIcon.classList.toggle('nav-open');
}
  
export function onDrawerCloseIconClick() {
  document.getElementById('drawer').style.display = "none";
}