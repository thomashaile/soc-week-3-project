console.log('-- load & test replaceSubstring --');
debugger; // step through loading & testing

// replace every occurrence of a substring with a new value
function replaceSubstring(str, oldThing, newThing) {
  var res = str.replace(oldThing, newThing);
  return res;

}

// declare and evaluate test cases for replaceSubstring
const replaceSubstringTests = [
  { name: 'Test 1', args: ['aaaa', 'a', 'b'], expected: 'bbbb' },
  { name: 'Test 2', args: ['They type fast!', 'type', 'talk'], expected: 'They talk fast!' },
  { name: 'Test 3', args: ['They type fast!', 'pe fa', ''], expected: 'They tyst!' },
  { name: 'Test 4', args: ['bbbb', '1', '2'], expected: 'bbbb' },
  { name: 'Test 5', args: ['', 'x', 'y'], expected: '' },
  { name: 'Test 6', args: ['..|..|..', '|.', ','], expected: '..,.,.' },
  { name: 'Test 7', args: ['Brussels, Belgium', 'Brussels, Belgium', 'Ghent, Flanders'], expected: 'Ghent, Flanders' },
];
for (let test of replaceSubstringTests) {
  const expected = test.expected;
  const actual = replaceSubstring(...test.args);
  const passing = actual === expected;
  console.assert(passing, test.name);
  test.actual = actual;
};
console.log(replaceSubstringTests);


// declare handler
function replaceSubstringHandler() {
  debugger; // step through user actions
  const userString = prompt("enter your full word word");
  const oldString = prompt("enter your word or string to be replaced");
  const newString = prompt("enter your new  word or string to replace");
  // read & process user input

  // execute core logic

  // display result to user
  const result = replaceSubstring(userString, oldString, newString);
  // log action for developer
  console.log('\n-- replaceSubstring --');
  // user inputs
  console.log("userString:", "(" + typeof userString + "),", userString);
  console.log("oldString:", "(" + typeof userString + "),", oldString);
  console.log("newString:", "(" + typeof userString + "),", newString);
  console.log("result:", "(" + typeof result + "),", result);
  // result
  alert(result);
}

// attach handler to replaceSubstring button with an event listener
document.getElementById('replaceSubstring-button').addEventListener('click', replaceSubstringHandler);




/* looking for a hint?
  too bad!  no hints for this challenge
*/
