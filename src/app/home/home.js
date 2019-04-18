export const home = require('./home.hbs');

  let request = new XMLHttpRequest();
  request.open('GET', 'data/banners/banners.json');
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      banners = JSON.parse(request.responseText);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
  };
  
  request.onerror = function() {
    console.log("Connection error");
  };
  
  request.send();

  let categoriesRequest = new XMLHttpRequest();
  categoriesRequest.open('GET', 'data/categories/categories.json');
  categoriesRequest.onload = function() {
    if (categoriesRequest.status >= 200 && request.status < 400) {
      categories = JSON.parse(categoriesRequest.responseText);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
  };
  
  categoriesRequest.onerror = function() {
    console.log("Connection error");
  };
  
  categoriesRequest.send();

export let banners;
export let categories;