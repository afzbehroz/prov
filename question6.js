// Hitta det kortaste namnet (3p)
// Skriv en funktion findShortestName som tar en array av
// namn som input och returnerar det kortaste namnet från arrayen.

function findShortestName(names) {
  // Din kod här
  let shortest = names[0];
  for (let i = 0; i < names.length; i++) {
    if (names[i].length < shortest.length) shortest = names[i];
  }
  return shortest;
}

// Exempel på användning:
console.log(findShortestName(["Alexander", "Emma", "Olivia", "Max"]));
// Förväntad utskrift: "Max"

console.log(findShortestName(["John", "Paul", "George", "Ringo"]));
// Förväntad utskrift: "John"
