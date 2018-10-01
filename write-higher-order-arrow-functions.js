//find integer numbers in an array and return array of squares of these numbers

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34];
const squareList = (arr) => {
  "use strict";
  // change code below this line
  
  let isInteger = (number) => 
  { return number % 1 === 0 }

  let squared = (number) =>
  { return number*number}

    let integers = arr.filter(isInteger);    

    const squaredIntegers = integers.filter(val => val > 0).map(squared)

  // change code above this line
  return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);