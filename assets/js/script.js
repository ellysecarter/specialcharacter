var generateBtn = document.querySelector("#generate");


function writePassword() {
  window.alert("Welcome to your personal password generator! Please answer the following prompts for characters you would like to include in your password!")

  var length = window.prompt("How long would you like your password to be? Please choose any number between 8 and 128.")
  if (length >= 8 || length <= 128){
    // add it to the password


  } else (window.prompt("Your password needs to be between 8 and 128 characters!"))
  (writePassword)
  

  var lowercaseLetters = window.confirm("Would you like lowercase letters?")
  if (lowercaseLetters){
      // add it to the password

  }


  var uppercaseLetters = window.confirm("Would you like uppercase letters?")
  if (uppercaseLetters){
      // add it to the password

  }


  var numbers = window.confirm("Would you like numbers?")
  if (numbers){
      // add it to the password

  }


  var specialCharacters = window.confirm("Would you like special characters?")
  if (specialCharacters) {
     // add it to the password

  }


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);