// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercaseletters =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseletters =["A", "B", "C", "D", "E", "F", "G", "HY", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V,", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "="]
var userInput;
var uppercaseChoice;
var lowercaseChoice;
var numberChoice;
var specialcharChoice;

//debugger
function generatePassword(){
  userInput = window.prompt("Choose password length **must be between 8 and 36 characters**")
  var length = Number(userInput)
  if (!userInput) {
    alert("Value is Required");
    return;
  }
  else if (isNaN(length)) {
    alert("value must be a number");
    return;
  }
  else if (length < 8 || length > 36) {
    alert("must be between 8 and 36 characters");
  }
  else if (length >= 8 && length <= 36) {
    uppercaseChoice = window.confirm ("Do you want to include uppercase letters");
    lowercaseChoice = window.confirm ("Do you want to include lowercase letters");
    numberChoice =  window.confirm("Do you want to include numbers");
    specialcharChoice = window.confirm("Do you want to include special characters");

    if (!uppercaseChoice && !lowercaseChoice && !numberChoice && !specialcharChoice) {
      alert("Areas are required");
      return;
    }
  
  }
  //groups together and picks the confirmed characters requested.

  var usersPicks = []
  if (lowercaseletters){
    usersPicks = usersPicks.concat(lowercaseletters);
  }
  if (uppercaseletters){
  usersPicks = usersPicks.concat(uppercaseletters);
  }
  if (numbers) {
    usersPicks = usersPicks.concat(numberChoice);
    }
 if (specialChar){
      usesrPicks = usersPicks.concat(specialcharChoice);
      }
      var newpassword =[];
      for (var i = 0; i < length; i++) {
        newpassword.push(usersPicks[Math.floor(Math.random() * usersPicks.length)]);
      }
      //array is gathered together and omitts commas

      return newpassword.join('');
}
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
