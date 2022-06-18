/*Remove first n characters of string*/

// Write a function that takes a string (a) as argument
// Remove the first 3 characters of a
// Return the result

function myFunction (a,n) {
    return a.slice(3);
}

console.log(myFunction('abcdefg'));
console.log(myFunction('1234'));
console.log(myFunction('fgedcba'));