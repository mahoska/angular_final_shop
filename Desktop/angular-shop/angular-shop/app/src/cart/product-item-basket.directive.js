angular.module('app')
.directive('productItemBasket', function(shopingCart){
    return{
        templateUrl: './src/cart/item-basket.html',
        controller: function($scope){
            $scope.changeCount = function(flag){
                if(flag){
                    $scope.product_item_cart.count++;
                    //console.log( $scope.product_item_cart.count)
                }else{
                if( $scope.product_item_cart.count >= 2){
                    $scope.product_item_cart.count--;
                }
               
            }
            var cart =  shopingCart.getCart();
            var len = cart.length
            for(var i=0 ; i<len; i++){
                if (cart[i].id == $scope.product_item_cart.id){
                   cart[i].count =  $scope.product_item_cart.count
                   localStorage['bag'] = JSON.stringify(cart)
                   break;
                }
            }
            }

            $scope.delProduct = function(){
                var cart =  shopingCart.getCart();
                var len = cart.length
                    for(var i=0 ; i<len; i++){
                         if (cart[i].id == $scope.product_item_cart.id){
                            cart.splice(i,1);
                            localStorage['bag'] = JSON.stringify(cart);
                            break;
                        }
                    }


            }
        },

        
    }
});