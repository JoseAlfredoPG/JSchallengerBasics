/*Return the next higher prime number*/

// This challenge is a little bit more complex
// Write a function that takes a number (a) as argument
// If a is prime, return a
// If not, return the next higher prime number


// Your solution
function myFunction(a) {
    let primo = true;
    for (let i = 2; i < a / 2; i++) {
        if (a % i == 0) { primo = false }
    }
    if(primo==false) 
    { 
       
        while(primo==false) {
            a++;
            primo=true;
            for (let i = 2; i < a / 2; i++) {
                if (a % i == 0) { primo = false }
            }
        };
        return a;
    }
    return a;
}

// The author's solution

function myFunction( a ) {
  function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  }
 let n = a;
 while (!isPrime(n)) n++;
return n
}

console.log(myFunction(38));
console.log(myFunction(7));
console.log(myFunction(115));
console.log(myFunction(2000));
