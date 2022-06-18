/*Remove last n characters of string*/

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result


// Your solution
function myFunction(a){
    letx=Array.from(a);
    for(leti=0;i<3;i++)
    {x.pop();}
    return x.join('');
 }

//  The author's solution
 function myFunction(a){
    return a.slice(0,-3);
 }

console.log(myFunction('abcdefg'));
console.log(myFunction('1234'));
console.log(myFunction('fgedcba'));