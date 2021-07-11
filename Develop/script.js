// Assignment code here


// CHARACTER ARRAYS
const lowCase = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const upCase = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", "|", ",", ".", "<", ">", "/", "?", "§", "~", "`"];

// USER PROMPT VARIABLES
let pwLength = "";
let useLowCase;
let useUpCase;
let useNumbers;
let useSpecial;

// GENERATED PASSWORD
let endResultPw = [];


////////// FUNCTION TO GENERATE PASSWORD

// ask how many characters to use
function generatePassword() {
  pwLength = window.prompt("Your password can have between 8 and 128 characters. Enter the number you would like.");

  // prompt for invalid entry
  while (pwLength < 8 || pwLength > 128) {
    window.alert("That was not a valid entry, please try again.");
    pwLength = window.prompt("Your password can have between 8 and 128 characters. Enter the number you would like.");
  }

  // prompts for character types to use
  useLowCase = confirm("Do you want to use lower case letter?");
  useUpCase = confirm("How about upper case letters?");
  useNumbers = confirm("Should it include numbers?");
  useSpecial = confirm ("And how about special characters/punctuation?")

  // if no character types are chosen
  while (useLowCase === false && useUpCase === false && useNumbers === false && useSpecial == false) {
    window.alert("Please choose at least one type of character to use.");
    useLowCase = confirm("Do you want to use lower case letter?");
    useUpCase = confirm("How about upper case letters?");
    useNumbers = confirm("Should it include numbers?");
    useSpecial = confirm ("And how about special characters/punctuation?")
  }


  ///// DETERMINE WHICH ARRAYS TO USE

  // if all 4 character types are chosen
  if (useLowCase && useUpCase && useNumbers && useSpecial) {
    endResultPw = lowCase.concat(upCase, numbers, special);

  // if 3 types are chosen
  } else if (useLowCase && useUpCase && useNumbers) {
    endResultPw = lowCase.concat(upCase, numbers);  
  } else if (useLowCase && useUpCase && useSpecial) {
    endResultPw = lowCase.concact(upCase, special);
  } else if (useUpCase && useNumbers && useSpecial) {
    endResultPw = upCase.concat(numbers, special);
  } else if (useLowCase && useNumbers && useSpecial) {
    endResultPw = lowCase.concat(numbers, special);
  
  // if 2 types are chosen
  } else if (useLowCase && useUpCase) {
    endResultPw = lowCase.concat(upCase);
  } else if (useLowCase && useNumbers) {
    endResultPw = lowCase.concat(numbers);
  } else if (useLowCase && useSpecial) {
    endResultPw = lowCase.concat(special);
  } else if (useUpCase && useNumbers) {
    endResultPw = upCase.concat(numbers);
  } else if (useUpCase && useSpecial) {
    endResultPw = upCase.concat(special);
  } else if (useNumbers && useSpecial) {
    endResultPw = numbers.concat(special);

  // if 1 is chosen
  } else if (useLowCase) {
    endResultPw = lowCase;
  } else if (useUpCase) {
    endResultPw = upCase;
  } else if (useNumbers) {
    endResultPw = numbers;
  } else if (useSpecial) {
    endResultPw = special;
  }


  ///// RANDOM SELECTION OF PASSWORD CHARACTERS

  // display pw as a string
  let password = "";

  // generate pw by looping through selected arrays
  for (var i = 0; i < pwLength; i++) {
    password = password + endResultPw[Math.floor(Math.random() * endResultPw.length)];
  }
  return password;

}; ////////// END OF "GENERATE" FUNCTION


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
