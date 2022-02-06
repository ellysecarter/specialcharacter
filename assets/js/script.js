var generateBtn = document.querySelector("#generate");

function writePassword() {
  var passwordText = document.querySelector("#password");
  window.alert(
    "Welcome to your personal password generator! Please answer the following prompts for characters you would like to include in your password!"
  );

  var passwordLength = window.prompt(
    "How long would you like your password to be? Please choose any number between 8 and 128."
  );
  if (passwordLength >= 8 && passwordLength <= 128) {
    function generatePassword() {
      var lowercaseLetters = window.confirm(
        "Would you like lowercase letters?"
      );
      var uppercaseLetters = window.confirm(
        "Would you like uppercase letters?"
      );
      var numbers = window.confirm("Would you like numbers?");
      var specialCharacters = window.confirm(
        "Would you like special characters?"
      );

      // local variables
      var userSelected = "";
      var stringUpper = "ABCDEFGHIJKLMNOPQRSTUVQYXZ";
      var stringLower = "abcdefghijklmnopqrstuvwxyz";
      var stringNumeric = "0987654321";
      var stringSpecial = '!@#$%^&*()_+={}[]|?/><:;"';

      if (lowercaseLetters === true) {
        userSelected += stringUpper;
      }
      if (uppercaseLetters === true) {
        userSelected += stringLower;
      }
      if (numbers === true) {
        userSelected += stringNumeric;
      }
      if (specialCharacters === true) {
        userSelected += stringSpecial;
      }

      var password = "";
      for (var i = 0; i < passwordLength; i++) {
        console.log("the user selected " + userSelected)
        console.log("the length of the user selected is " + userSelected.length)


        password +=  userSelected.charAt(Math.floor(Math.random() * userSelected.length));
      }
      console.log(password);
      passwordText.textContent = password;
      return password;
    }
    generatePassword();
  } else {
    window.alert("Your password needs to be between 8 and 128 characters");
    writePassword();
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
