/*Split a number into its digits*/

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc


// Your solution
function myFunction(a,b) {
let an=a.replace(a[0],a[0].toUpperCase());
    let as = an.split('%').join('');
    let bs = b.split('%').join('').split('').reverse().join('');
return as+bs;
}

// The author's solution
function myFunction(a, b) {
  const func = x => x.replace('%','');
  const first = func(a);
  const second = func(b).split('').reverse().join('');
  return first.charAt(0).toUpperCase() + first.slice(1) + second;
}

console.log(myFunction('java', 'tpi%rcs'));
console.log(myFunction('c%ountry', 'edis'));
console.log(myFunction('down', 'nw%ot'));
