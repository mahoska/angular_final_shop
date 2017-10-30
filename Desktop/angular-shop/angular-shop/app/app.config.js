angular.module('app')
.config(function($stateProvider) {
  var productsState = {
    name: 'products',
    url: '/',
    component: 'products'
  },

  productState = {
    name: 'product',
    url: '/product/{productId}',
    component: 'product'
},

cartState = {
  name: 'cart',
  url: '/cart',
  component: 'cart'
}
  $stateProvider.state(productsState);
  $stateProvider.state(productState);
  $stateProvider.state(cartState);
 
  });