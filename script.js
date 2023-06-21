// Define arrays for characters, numbers, and letters
var character = ['!', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '<', '>', '+', '=', '@', '{', '}', '~', '.'];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var space = [];

// Variables to store user choices
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

// Function to convert letter to uppercase
var toUpper = function (x) {
    return x.toUpperCase();
};

// Map letters array to uppercase letters
var lettersUp = letters.map(toUpper);

// Get generate button element
var get = document.querySelector('#generate');

// Add event listener to generate button
get.addEventListener('click', function () {
    var pw = generatePassword();
    document.getElementById('password').placeholder = pw;
});

// Function to generate password
function generatePassword() {
    // Get user input for password length
    var enter = parseInt(prompt('How many characters would you like your password? Choose between 8 and 128'));

    // Validate user input for password length
    while (!enter || enter < 8 || enter > 128) {
        enter = parseInt(prompt('You must choose between 8 and 128'));
    }

    // Get user input for password criteria
    confirmNumber = confirm('Will this contain numbers?');
    confirmCharacter = confirm('Will this contain special characters?');
    confirmUppercase = confirm('Will this contain Uppercase letters?');
    confirmLowercase = confirm('Will this contain Lowercase letters?');

    // Validate user input for password criteria
    while (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        alert('You must choose at least one criteria!');
        confirmNumber = confirm('Will this contain numbers?');
        confirmCharacter = confirm('Will this contain special characters?');
        confirmUppercase = confirm('Will this contain Uppercase letters?');
        confirmLowercase = confirm('Will this contain Lowercase letters?');
    }

    // Concatenate arrays based on user choices
    var choices = [];
    if (confirmCharacter) {
        choices = choices.concat(character);
    }
    if (confirmNumber) {
        choices = choices.concat(number);
    }
    if (confirmLowercase) {
        choices = choices.concat(letters);
    }
    if (confirmUppercase) {
        choices = choices.concat(lettersUp);
    }

    // Generate password by randomly selecting characters from choices array
    var password = [];
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

    // Convert password array to string and display in password element
    var pw = password.join('');
    UserInput(pw);
    return pw;
}

// Function to update password element with generated password
function UserInput(pw) {
    document.getElementById('password').textContent = pw;
}
