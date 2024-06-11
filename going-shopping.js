//Initialize array
let shoppingList = ['pop tarts', 'ramen noodles', 'chips', 'salsa', 'coffee'];
// Add fruit loops
shoppingList.push('fruit loops');
// Update coffee
shoppingList[4] = 'fair trade coffee';
// Replace chips and salsa with rice and beans
shoppingList.splice(shoppingList.indexOf('chips'), 2, 'rice', 'beans');
// Create empty shopping cart array
let shoppingCart = [];
// Remove last item and add to cart
shoppingCart.push(shoppingList.pop());
// Remove first item and add to cart
shoppingCart.push(shoppingList.shift());
// Write while loop takes items from shopping list and moves them to cart till empty
do{
    shoppingCart.push(shoppingList.pop());
}while(
    shoppingList.length != 0
)
// Sort items alphabetically
shoppingCart.sort();
// Then backwards
shoppingCart.reverse();
// Print as comma separated string
console.log(shoppingCart.toString());
