// Assignment code here

var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

character = ['!', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '<', '>', '+', '=', '@', '{', '}', '~', '.'];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
space = [];

var choices;

var toUpper = function (x) {
  return x.toUpperCase();
};

lettersUp = letters.map(toUpper);

var get = document.querySelector('#generate');

get. addEventListener('click', function () {
  pw = generatePassword();
  document.getElementById('password').placeholder = pw;
});

function generatePassword() {
  enter = parseInt(prompt('How many characters would you like your password? Choose between 8 and 128'));

  if (!enter) {
    alert('This needs a value');
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt('You must choose between 8 and 128'));

  } else {
    confirmNumber = confirm('Will this contain numbers?');
    confirmCharacter = confirm('Will this contain special characters?');
    confirmUppercase = confirm('Will this contain Uppercase letters?');
    confirmLowercase = confirm('Will this contain Lowercase letters?');
  };

  if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
    choices = alert('You must choose a criteria!');
  }

  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
    choices = character.concat(number, letters, lettersUp);
  }
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
    choices = character.concat(number, lettersUp);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
    choices = character.concat(number, letters);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
    choices = character.concat(letters, lettersUp);
  }
  else if (confirmNumber &&  confirmLowercase && confirmUppercase) {
    choices = number.concat(letters, lettersUp);
  }
  else if (confirmCharacter && confirmNumber) {
    choices = character.concat(number);
  }
  else if (confirmCharacter && confirmLowercase) {
    choices = character.concat(letters);
  }
  else if (confirmCharacter && confirmUppercase) {
    choices = character.concat(lettersUp);
  } 
  else if (confirmLowercase && confirmNumber) {
    choices = letters.concat(number);
  }
  else if (confirmLowercase && confirmUppercase) {
    choices = letters.concat(lettersUp);
  }
  else if (confirmNumber && confirmUppercase) {
    choices = number.concat(lettersUp);
  }
  else if (confirmCharacter) {
    choices = character;
  }
  else if (confirmNumber) {
    choices = number;
  }
  else if (confirmLowercase) {
    choices = letters;
  }
  else if (confirmUppercase) {
    choices = space.concat(lettersUp);
  };

  var password = [];

  for (var i = 0; i < enter; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
  }
  var pw = password.join('');
  UserInput(pw);
  return pw;

  function UserInput(pw) {
    document.getElementById('password').textContent = pw;
  }
};

// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");




 

// Write password to the #password input



//function writePassword() {
 // var password = generatePassword();
 // var passwordText = document.querySelector("#password");

//  passwordText.value = password;

//}

// Add event listener to generate button


//generateBtn.addEventListener("click", writePassword);



// 1. prompt the user
  // a. PW length btwn 8 and 128
  // b. lowercase, uppercase, numbers, special characters
  // 2. validate input
  // 3. generate
  // 4. display PW