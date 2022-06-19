/*Split a number into its digits*/

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting


// Your solution
function myFunction(a) {
  let x=Array.from(a.toString());
  return x.map(e=>Number(e));
}

// The author's solution

function myFunction( a ) {
  const string = a + '';
  const strings = string.split('');
  return strings.map(digit => Number(digit))
}

console.log(myFunction(10));
console.log(myFunction(931));
console.log(myFunction(193278));