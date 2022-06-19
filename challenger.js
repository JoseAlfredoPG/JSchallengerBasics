/*How many times does a character occur?*/

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b


// Your solution
function myFunction(a,b){
    let convertido=Array.from(b);
    let contador=0;
    convertido.map(e=>{
       if(e===a){contador++;}
    })
    return contador;
 }

//    The author's solution
// info: el metodo esplit divide una cadena y toma como pivote de particion el argumento pasado como parametro.
 function myFunction(a,b){
  return b.split(a).length-1
}
                                    



console.log(myFunction('m', 'how many times does the character occur in this sentence?'));
console.log(myFunction('h', 'how many times does the character occur in this sentence?'));
console.log(myFunction('?', 'how many times does the character occur in this sentence?'));
console.log(myFunction('z', 'how many times does the character occur in this sentence?'));