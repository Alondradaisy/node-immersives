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
  
const str = getInput();
  getInput(1); "Hi" + str;
  getInput(2).toUpperCase; "Daisy" + "Warren";
  getInput(3); "D " + "W";
  getInput(4); "daisy.warren@codeimmersives.com";

console.log("Hi" + str1);
console.log("daisy" + "warren");
console.log("D" + "W");
console.log("daisywarren@codeimmersives.com");
