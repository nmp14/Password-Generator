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
  while (passLength < 8 || passLength > 128);

  let lower = confirm("Do you want lowercase letters?");
  let upper = confirm("Do you want uppercase letters?");
  let num = confirm("Do you want numbers?");
  let specialChar = confirm("Do you want to include special characters?");
  let pass = "";
  let charOptions = [];


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
