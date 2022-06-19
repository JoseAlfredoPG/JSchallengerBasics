/*Find the correct word by incrementing letters in alphabet*/

// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

// Your solution
function myFunction(str) {
let res='';
for(let i=0; i<str.length; i++) {
  let x=String.fromCharCode(str.charCodeAt(i)+1);
  res+=x;
}
  return res;
}

// The author's solution
function myFunction(str) {
  const arr = [...str];
  const correctedArray = arr.map(e => String.fromCharCode(e.charCodeAt()+1));
  return correctedArray.join('');
}

console.log(myFunction('bnchmf'));
console.log(myFunction('bgddrd'));
console.log(myFunction('sdrshmf'));
