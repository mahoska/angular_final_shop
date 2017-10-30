function productsController($scope, shopingCart){
   $scope.getItems = function(){
        return shopingCart.getItems();
    }

    $scope.search = function(){
        alert($scope.search_text);
        shopingCart.setFilter($scope.search_text);
    }
    
}