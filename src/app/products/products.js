export const ProductComponent = require('./products.hbs');

export const onClickCategory = (selectedCategory, allProducts) => {
  return allProducts.filter(product => product.category === selectedCategory);
}
