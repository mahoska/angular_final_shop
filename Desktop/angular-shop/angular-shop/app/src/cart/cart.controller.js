function cartController($scope, shopingCart){
    $scope.order_done = false;

    $scope.getCart = function(){						
        return shopingCart.getCart();
    }

    $scope.total_price = function(){
        var cart = shopingCart.getCart();
        var len = cart.length;
        var total_price = 0;
        for(var i=0 ; i<len; i++){
            total_price += cart[i].count*cart[i].price;
        }
        return total_price;
    }

    $scope.total_count = function(){
        var cart = shopingCart.getCart();
        var len = cart.length;
        var count = 0;
        for(var i=0 ; i<len; i++){
            count += cart[i].count;
        }
        return count;
    },

    $scope.sendDetalls = function() {
        // check to make sure the form is completely valid
        if ($scope.form.$valid) {
            var sum = $scope.total_price() ;
            var client = {
                'first_name': $scope.info.firstname,
                'last_name': $scope.info.lastname,
                'phone': $scope.info.phone,
                'address':$scope.info.address,
                'email': $scope.info.email,
                'total_sum': sum
                }
                //console.log(client)
                var order = {
                    'products' : shopingCart.getCart(),
                    'client': client
                };
                localStorage['order'] = JSON.stringify(order);
                localStorage['bag'] = JSON.stringify([])
                $scope.info = null;
                $scope.order_done = true;
            }
        
    };
    
}