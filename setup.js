function extractCreditCard(input) {
  var sanitizedInput = input.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
  var extractedDigits = sanitizedInput.match(/\d{4,17}/g);

  if (extractedDigits) {
    console.log("Extracted Credit Card Numbers:", extractedDigits);
  }
  return extractedDigits;
}

// Simulated user input containing a credit card number
var userInput = "Card:  4111 1111 1111 1111  Exp: 12/26 CVV: 123";
extractCreditCard(userInput);
