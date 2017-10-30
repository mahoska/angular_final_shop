angular.module('app')
.factory('shopingCart', function($http){
    var items  = [];
    var cart  = [];
    var filter_text = "";
    $http.get('./data.json').then(success, error);
    function success(data){
        items = data.data;
    }
    function error(err){
        console.error(err);
    }
    

    return{
        getItems: function(){
            return items;
        },

        getCart: function(){
            if (localStorage['bag']) {
                cart = JSON.parse(localStorage['bag']);
            }
            //console.log(cart)
            return cart;
        }

    }

})
