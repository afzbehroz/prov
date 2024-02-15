// 1.1 Bedömning av grönsaker (3p)
// Skriv en funktion evaluateVegetable som tar en grönsak (som en sträng)
// och returnerar dess kvalitetsbetyg enligt följande kriterier:

// "Utmärkt" om grönsaken är "Morot" eller "Sparris"
// "Bra" om grönsaken är "Tomat" eller "Broccoli"
// "Acceptabel" om grönsaken är "Potatis" eller "Lök"
// "Dålig" om grönsaken är "Rädisa" eller "Pepparrot"
// "Okänd" för alla andra grönsaker

function evaluateVegetable(vegetable) {
  // Din kod här
  if (vegetable === "carrot" || vegetable === "sparris") {
    return "awesome";
  } else if (vegetable === "Tomtato" || vegetable === "broccoli") {
    return "good";
  } else if (vegetable === "potato" || vegetable === "onion") {
    return "acceptable";
  } else if (vegetable === "radish" || vegetable === "Horseradish") {
    return "bad";
  } else {
    return "unknown";
  }
}

console.log(evaluateVegetable("carrot")); // Ska logga "Utmärkt"
