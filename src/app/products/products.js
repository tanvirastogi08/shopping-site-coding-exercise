export const products = require('./products.hbs');

let request = new XMLHttpRequest();
  request.open('GET', 'data/products/products.json');
  request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
      productList = JSON.parse(request.responseText);
    } else {
      console.log("We connected to the server, but it returned an error.");
    }
  };
  
  request.onerror = function() {
    console.log("Connection error");
  };
  
  request.send();

export let productList;