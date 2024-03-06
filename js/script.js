"use strict";

// function logger() {
//   console.log(`Hello world`);
// }

// function fruitProcessor(applse, oranges) {
//   console.log(applse, oranges);
//   const juice = `Juice with ${applse} applse and ${oranges} oranges`;
//   return juice;
// }

// const groceryStore = fruitProcessor(5, 4);
// console.log(groceryStore);

// //function declaration
// function caclAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = caclAge1(1991);
// console.log(age1);

// //function expressions
// const caclAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = caclAge2(1991);
// console.log(age2);

// //Function Arrow
// const caclAge3 = (birthYear) => 2037 - birthYear;
// const age3 = caclAge3(1991);
// console.log(age3);

const yearsUntilRetirement = (birthYear) => {
  const age = 2037 - birthYear;
  const retirement = 65 - age;
  return retirement;
};
const ageInput = yearsUntilRetirement(1991);
console.log(ageInput);
ageInput <= 0 ? console.log(`reitred`) : console.log(`not retired`);

// console.log(`Remaining years until you retire is ${ageInput});
//
