// DON'T TOUCH THE BELOW HELPER FUNCTION!

// It's just a nice function so you don't
// have to deal with arrays yet.

// WE'VE MADE SOME CHANGES!!

// If you call the below function in your
// code, you'll get back the nth thing
// the user typed after `node [filename]`.

// If the user typed in "node nodeimmersives.js 30 5",
// then `getInput(1)` would return "30", and `getInput(2)`
// would return "5".
function getInput(n) {
  return process.argv[n + 1];
}

module.exports = getInput;
  
const firstName = getInput(1);
const lastName = getInput(2); 
const fullName = firstName + " " + lastName;
const email = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@codeimmersives.com"; 

console.log("Hi, " + fullName + "!");
console.log("Your name capitalized is:" + fullName.toUpperCase());
console.log("Your initials:" + firstName[0] + lastName[0] + ".");
console.log("Your Code Immersives email address is" + email);
