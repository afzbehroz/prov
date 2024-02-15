// Beräkna medelvärdet av siffror (3p)
// Skriv klart funktionen som tar en array av siffror som input
// och returnerar medelvärdet av alla siffror.
// Medelvärdet beräknas genom att dela totala summan med antalet siffror

function average(numbers) {
  // Din kod här:
  numbers.sort((a, b) => a - b);
  const middle = Math.floor(numbers.length / 2);
  return numbers.length % 2 === 0
    ? numbers[middle - 1] + numbers[middle] / 2
    : numbers[middle];
}

console.log(average([1, 2, 3])); // ska logga 2
