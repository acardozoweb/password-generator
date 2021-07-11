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


// ASK USER HOW MANY CHARACTERS
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

  





}



//////// STARTER CODE BELOW 

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
