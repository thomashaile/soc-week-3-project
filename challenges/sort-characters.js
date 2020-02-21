console.log('-- load & test sortCharacters --');
debugger; // step through loading & testing

/* sort the characters in a string
  each character in a javascript string has a "charCode" number
  no two strings have the same charCode
  you can find a character's charCode like this:
    https://www.w3schools.com/jsref/jsref_charCodeAt.asp
  to sort strings you rearrange the characters in charCode order
*/
function sortCharacters(str) {
  var char = str.split('').sort().join(' ');
 return char;
}



// declare and evaluate test cases for sortCharacters
const sortCharactersTests = [
  { name: 'Test 1', args: ['fedcba'], expected: 'abcdef' },
  { name: 'Test 2', args: ['54321'], expected: '12345' },
  { name: 'Test 3', args: [''], expected: '' },
  { name: 'Test 4', args: ['aAbBcC'], expected: 'ABCabc' },
  { name: 'Test 5', args: [';:,.'], expected: ',.:;' },
  { name: 'Test 6', args: ['a1b2c3'], expected: '123abc' },
  { name: 'Test 7', args: ['Walk fast.'], expected: ' .Waafklst' },
];
for (let test of sortCharactersTests) {
  const expected = test.expected;
  const actual = sortCharacters(...test.args);
  const passing = actual === expected;
  console.assert(passing, test.name);
  test.actual = actual;
};
console.log(sortCharactersTests);


// declare handler
function sortCharactersHandler() {
  debugger; // step through user actions

  // read & process user input

  const userString = prompt("enter your word to sort");
  // execute core logic


  // display result to user
  const result = sortCharacters(userString);

  // log action for developer
  console.log('\n-- sortCharacters --');
  // user inputs
  console.log("userString:", "(" + typeof userString + "),", userString);
  console.log("result:", "(" + typeof result + "),", result);
  /// result
  alert(result);
  // result
}

// attach handler to sortCharacters button with an event listener
document.getElementById('sortCharacters-button').addEventListener('click', sortCharactersHandler);




/* looking for a hint?
  try solving the challenge in 3 steps:
    step 1, separate the string into characters
    step 2, sort the characters by comparing their charCodes
    step 3, join the sorted characters into the final string
*/
