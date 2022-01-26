//  simple function ...
// function doubleIt (num){
//     return num * 2 
// }
// const result = doubleIt(25);
//  console.log(result)
 

// const doubleIt1= function(num){
//     return num * 3 ;
// }
// const total1 = doubleIt1(30);
// console.log(total1)

  // ES6 arrow function .....shortcut way yea....
  const doubleIt2 = num => num * 5;
  const add = (x, y)=> x + y ;
  const total2 = doubleIt2(3);
  const result = add ( 50, 50);

  console.log ( result )

  const doMath = (x, y) => {
      const sum = x+y ;
      const diff = x - y ;
      const result = sum * diff;
      return result ; 
  }
  const fol = doMath(20, 10);
  console.log( fol)