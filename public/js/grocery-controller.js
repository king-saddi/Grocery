angular.module('groceryJSApp', [])
  .controller('Grocery', [function() {
  var gr = this;
  gr.message = 'Welcome';
  gr.name = 'Kunal';
  gr.cart =[];
 
  gr.fruit = [
    {name: "apple", price: 0.75, quantity:"1", count:0},
    {name: "banana", price: 1.99, quantity:"2 lb", count:0},
    {name: "grapes", price: 3.99, quantity:"1 lb", count:0},
    {name: "orange", price: 2.99, quantity:"2 lb", count:0},
    {name: "rasberries", price: 3.99, quantity:"8 oz", count:0},
    {name: "strawberries", price: 4.99, quantity:"1 lb", count:0}
  ];

  
  gr.add = function(fruit){
    
    var flag = false;
    
    var itemToAdd = angular.copy(fruit);
    for(var i = 0; i<gr.cart.length; i++){
      
      if (itemToAdd.name == gr.cart[i].name)
      {
          gr.cart[i].count++;
          console.log('User added a', itemToAdd.name, 'current count:', gr.cart[i].count);
          var flag = true;
          break;
      }
    }
    
    if(!flag){
      itemToAdd.count++;
      gr.cart.push(itemToAdd);
      console.log('User added a', itemToAdd.name, 'current count:', itemToAdd.count);
    }
  }
  
  
}]);

