var generateBtn = document.querySelector("#generate");


// add button to the top so that when I click the button it starts the window prompt

// Write password to the #password input
function writePassword() {
  window.alert("Welcome to your personal password generator! Please answer the following prompts for characters you would like to include in your password!")

  window.prompt("How long would you like your password to be? Please choose any number between 8 and 128.")

  window.alert("Would you like lowercase letters?")

  window.alert("Would you like uppercase letters?")

  window.alert("Would you like numbers?")

  window.alert("Would you like special characters?")


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);