
var groceryListItems = [];
var groceryListSubtotal = []
var groceryListTotal = 0;



var groceryList = function(item, price) {
  
  
  
  groceryListItems.push(item, price);
  groceryListSubtotal.push(price);
  groceryListItems = groceryListItems;
  
  for (var i = groceryListSubtotal.length; !!i--;){
groceryListTotal += groceryListSubtotal[i];
}
  
  console.log(item + ': ' + '$' + price + ' added to list');
  console.log(groceryListItems);
  console.log(groceryListSubtotal);
  console.log(groceryListTotal);
}



groceryList('lettuce', 2.49);
groceryList('organic green peppers', 3.29);
groceryList('Ntrs Vlly pb oatml sqrs', 5.00);
groceryList('Oakhrst Mlk 1/2gal', 1.89);