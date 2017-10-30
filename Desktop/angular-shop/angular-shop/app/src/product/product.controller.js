function productController($scope, shopingCart, $stateParams){
    var id = $stateParams.productId
    $scope.getItems = function(){
        return shopingCart.getItems();
    }
    //console.log($scope.getItems())
    var product_item;
    $scope.getItems().forEach(function(product) {
    if(product.id == id){
        product_item = product;
        return;
    }
    }, this);
    $scope.product = product_item;
    //console.log($scope.product);

    $scope.add_cart = function (){
        var bag = [];							
		if (localStorage['bag']) {
			bag = JSON.parse(localStorage['bag']);
        }
   
        var product_buy = {}
		var index = null
		var len = bag.length
		if(len >= 1 ){
			var  prod_id = $scope.product.id
			for(var i=0 ; i<len; i++){
				if (bag[i].id == prod_id){
					index = i
					break;
				}
			}
		}	
		if(index != null) {
			product_buy = bag[index]
			product_buy.count++
			bag.splice(index,1)
		}
		else{
			 product_buy = {
				"id" : $scope.product.id,
				"img" : $scope.product.img, 
				"name" : $scope.product.name, 
				"price" : $scope.product.price,
				"category" : $scope.product.category,
				"size" : $scope.product.size,
				"color" : $scope.product.color, 
				"count": 1
			}
		}
		bag.push(product_buy);
		localStorage['bag'] = JSON.stringify(bag);
    }
}