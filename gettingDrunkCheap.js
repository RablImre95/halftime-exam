const shortDrinks = [
  {
    name: "Vodka",
    price: 5500,
    abv: 37.5,
    volume: 0.7
  }, 
  {
    name: "Whiskey",
    price: 7000,
    abv: 40,
    volume: 0.7
  }, 
  {
    name: "Pálinka",
    price: 10000,
    abv: 50,
    volume: 1
  }
]
function gettingDrunkCheap(drinks) {

  
  drinks.forEach( drink => {
    drink.pricePerAbv = Math.floor(drink.price / drink.volume/ drink.abv);
  });

  let cheapestDrink = drinks[0];

  for (let i = 1; i < drinks.length; i++) {
    if (drinks[i].pricePerAbv < cheapestDrink.pricePerAbv) {
      cheapestDrink = drinks[i];
    }
  }

  return {
    name: cheapestDrink.name,
    pricePerAbv: cheapestDrink.pricePerAbv
  };

}

console.log(gettingDrunkCheap(shortDrinks))

module.exports = gettingDrunkCheap
