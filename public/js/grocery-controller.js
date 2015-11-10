angular.module('groceryJSApp', [])
  .controller('Grocery', [function() {
  var gr = this;
  gr.message = 'Welcome';
  gr.name = 'Kunal';
  gr.cart;
 
  gr.fruit = [
    {name: "apple", price: 0.75, quantity:"1",},
    {name: "banana", price: 1.99, quantity:"2 lb"},
    {name: "grapes", price: 3.99, quantity:"1 lb"},
    {name: "orange", price: 2.99, quantity:"2 lb"},
    {name: "rasberries", price: 3.99, quantity:"8 oz"},
    {name: "strawberries", price: 4.99, quantity:"1 lb"}
  ];
  gr.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
  
  gr.add = function(name){
    
    console.log('User added a', name);
    
    
  }
  
  
}]);

