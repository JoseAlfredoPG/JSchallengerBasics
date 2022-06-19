/*Insert character after every n characters (backwards)*/

// Write a function that takes two strings (a and b) as arguments
// Beginning at the end of 'a', insert 'b' after every 3rd character of 'a'
// Return the resulting string

// Your solution
function myFunction(a, b) {
  let final = [];
  let ca = Array.from(a);
  let con = 1;
  for (let i = ca.length - 1; i >= 0; i--) {
    final.push(ca[i]);
    con++;
    if(con>3)
    {
      final.push(b);
      con=1;
    }
  }
  return final.reverse().join('');
}

// The author's solution
function myFunction(a, b) {
   let result = [];
   let rest = a;
   while (rest.length) {
   	result.push(rest.slice(-3));
   	rest = rest.slice(0, -3);
   }
   return result.reverse().join(b);
}


console.log(myFunction('1234567', '.'));
console.log(myFunction('abcde', '$'));
console.log(myFunction('zxyzxyzxyzxyzxyz', 'w'));
