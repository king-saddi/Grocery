angular.module('groceryJSApp', [])
  .controller('Grocery', [function() {
  var gr = this;
  gr.message = 'Welcome';
  gr.name = 'Kunal';
  gr.cart =[];
  gr.checkoutPrice=0;

 
  gr.fruit = [
    {name: "apple", price: 0.75, quantity:"1", count:0},
    {name: "banana", price: 1.99, quantity:"2 lb", count:0},
    {name: "grapes", price: 3.99, quantity:"1 lb", count:0},
    {name: "orange", price: 2.99, quantity:"2 lb", count:0},
    {name: "rasberries", price: 3.99, quantity:"8 oz", count:0},
    {name: "strawberries", price: 4.99, quantity:"1 lb", count:0},
    {name: "blackberries", price: 3.99, quantity:"8 oz", count:0},
    {name: "blueberries", price: 3.99, quantity:"8 oz", count:0},
    {name: "kiwi", price: 0.59, quantity:"1", count:0},
    {name: "lemon", price: 0.25, quantity:"1", count:0},
    {name: "lime", price: 0.25, quantity:"1", count:0},
    {name: "pineapple", price: 3.99, quantity:"1", count:0},
    {name: "pear", price: 0.99, quantity:"1", count:0},
    {name: "watermelon", price: 4.99, quantity:"1", count:0},
    {name: "mango", price: 1.99, quantity:"1", count:0},
    {name: "honeydew", price: 2.99, quantity:"1", count:0}
  ];

  
  gr.add = function(fruit){
    
    var flag = false;
    gr.checkoutPrice=0;

    
    var itemToAdd = angular.copy(fruit);
    for(var i = 0; i<gr.cart.length; i++){
      
      if (itemToAdd.name == gr.cart[i].name)
      {
          gr.cart[i].count++;
          var flag = true;
          break;
      }
    }
    
    if(!flag){
      itemToAdd.count++;
      gr.cart.push(itemToAdd);
      }
    
  
    for(var i = 0; i<gr.cart.length; i++){
      gr.checkoutPrice = gr.checkoutPrice + gr.cart[i].price*gr.cart[i].count;
    }
  }


     gr.checkout = function(){

      console.log('User checkingout total amount of: $', gr.checkoutPrice);
      while(gr.cart.length > 0) {
          gr.cart.pop();
        }
      gr.checkoutPrice=0;

   }

     gr.increase = function(fruit){

      for(var i = 0; i<gr.cart.length; i++){
      
      if (fruit.name == gr.cart[i].name)
      {
          gr.cart[i].count++;
          gr.checkoutPrice = gr.checkoutPrice + gr.cart[i].price;
      }
    }


   }

     gr.decrease = function(fruit){

      for(var i = 0; i<gr.cart.length; i++){
      
      if (fruit.name == gr.cart[i].name && gr.cart[i].count>0)
      {
          gr.cart[i].count--;
          gr.checkoutPrice = gr.checkoutPrice - gr.cart[i].price;
      }
    }


   }





}]);

