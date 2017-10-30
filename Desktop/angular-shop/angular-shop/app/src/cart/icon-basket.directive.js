angular.module('app')
.directive('iconBasket', function(shopingCart){
    return{
        template: '<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true" >{{getItemsCartCount()}} => {{getTotalPrice()}} EUR</span> ',
        controller: function($scope){
            
            $scope.getItemsCartCount = function(){
                var cart = shopingCart.getCart();
                var len = cart.length;
                var count = 0;
                for(var i=0 ; i<len; i++){
                    count += cart[i].count;
                }
                return count;
            }

            $scope.getTotalPrice = function(){
                var cart = shopingCart.getCart();
                var len = cart.length;
                var total_price = 0;
                for(var i=0 ; i<len; i++){
                    total_price += cart[i].count*cart[i].price;
                }
                return total_price;
            }
        }
    }
});