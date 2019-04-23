export const headerTemplate = require('./header.hbs');

export function onDrawerIconClick() {
  let drawerIcon = document.getElementById('drawer');
  drawerIcon.style.display = "flex";
  drawerIcon.style.flexDirection = "column";
}
  
export function onDrawerCloseIconClick() {
  document.getElementById('drawer').style.display = "none";
}