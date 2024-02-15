// Uppdatera mobiltelefoninformation (3p)
// Skriv en funktion updatePhoneInfo som tar ett mobiltelefonobjekt
// och returnerar en kopia av objektet med uppdaterad information.
// Funktionen ska tillåta att användaren skickar in ny information
// för märke, modell och operativsystem för telefonen. Om någon av dessa
// värden finns med som parameter, ska de ersätta de befintliga värdena i objektet.

const phone = {
  brand: "Apple",
  model: "iPhone 12",
  os: "iOS",
};

function updatePhoneInfo(phoneObject, newBrand, newModel, newOs) {
  // Din kod här
  const { phone: } = phoneObject;
}

console.log(updatePhoneInfo(phone, "Samsung", "Galaxy S21", "Android"));
// Ska logga följande objekt:
// {
//   brand: "Samsung",
//   model: "Galaxy S21",
//   os: "Android"
// }
