// 2 Räkna förekomsten av bokstaven 'a' (3p)
// Skriv en funktion countA som tar en sträng
// och returnerar antalet gånger bokstaven 'a' förekommer i strängen som en siffra.
// Ledtråd: Använd en loop för att gå igenom strängen och en räknare för att hålla
// koll på antalet 'a'.

function countA(str) {
  // Din kod här
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "a") {
      count++;
    }
  }
  return count;
}

//console.log(countA("bananer och ananas")); // Ska logga 6

console.log(countA("bananer och ananas")); // Ska logga 6
// Det finns bara 5 st "a" i strängen
