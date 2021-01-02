// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  let passLength = undefined;
  do {
    passLength = prompt("Choose password length (8 to 128 characters)");
  }
  while (passLength < 8 || passLength > 128 || !Number.isInteger(parseInt(passLength))
  );

  let lower = confirm("Do you want lowercase letters?");
  let upper = confirm("Do you want uppercase letters?");
  let num = confirm("Do you want numbers?");
  let specialChar = confirm("Do you want to include special characters?");
  let pass = "";
  let charOptions = [];

  // If specialChar options, push the hex numbers for password approved special characters to the charOptions array.
  if (specialChar) {
    charOptions.push(0x21, 0x22, 0x23, 0x24, 0x25, 0x26, 0x27, 0x28, 0x29, 0x2A, 0x2B, 0x2C, 0x2D, 0x2E, 0x2F, 0x3A, 0x3B, 0x3C, 0x3D, 0x3e, 0x3F, 0x40, 0x5B, 0x5C, 0x5D, 0x5E, 0x5F, 0x60, 0x7B, 0x7C, 0x7D, 0x7E);
  }

  // Add number decimal numbers.
  if (num) {
    for (let i = 48; i < 58; i++) {
      charOptions.push(i);
    }
  }

  // Add decimal values for upper case letters.
  if (upper) {
    for (let j = 65; j < 91; j++) {
      charOptions.push(j);
    }
  }

  // Add lower case letters.
  if (lower) {
    for (let k = 97; k < 123; k++) {
      charOptions.push(k);
    }
  }

  // If didn't pick any options, alert user and return.
  if (!(specialChar || num || upper || lower)) {
    alert("You didn't pick anything");
    return pass;
  } else {
    // Add characters to password randomly.
    for (let l = 0; l < passLength; l++) {
      pass += String.fromCharCode(charOptions[Math.floor(Math.random() * charOptions.length)]);
    }
  }
  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
