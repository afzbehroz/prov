// 3. Filtrera produkter under en viss prisgräns (3p)
// Skriv en funktion filterProductsByMaxPrice som tar en array av produkter som input
// och en siffra, maxPrice, och returnerar en ny array med produkter som har ett pris
// under eller lika med den givna prisgränsen.

// Exempel: Om input-arrayen är som nedan och maxPrice = 120,
// så ska din funktion returnera produkterna med priserna 80, 100 och 120.

const products = [
  { name: "Headphones", brand: "Sony", price: 80 },
  { name: "Speakers", brand: "Bose", price: 100 },
  { name: "Smartwatch", brand: "Samsung", price: 150 },
  { name: "Tablet", brand: "Apple", price: 120 },
];

function filterProductsByMaxPrice(productList, maxPrice) {
  // Din kod här
  return productList.filter((product) => {
    return product.price <= maxPrice;
  });
}

console.log(filterProductsByMaxPrice(products, 120));
// Ska logga:
// [
//   { name: "Headphones", brand: "Sony", price: 80 },
//   { name: "Speakers", brand: "Bose", price: 100 },
//   { name: "Tablet", brand: "Apple", price: 120 },
// ]
