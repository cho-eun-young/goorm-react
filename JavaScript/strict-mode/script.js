"use strict";

// let greeting = "hello";

// greating = "hi";

// console.log(greeting);
// console.log(greeting, window.greating);

// undefined = 7;
// NaN = 10;

// console.log(undefined);
// console.log(NaN);

// const obj = {
//   readOnly: 7,
// };

// Object.defineProperty(obj, "readOnly", { writable: false, value: 7 });

// console.log(obj);

// obj.readOnly = 10;

// console.log(obj);

// function add(a, a, b) {
//   return a + a + b;
// }

// console.log(add(1, 2, 3));

// "string".prop = 7;
// console.log("string".prop);

function sum(a, b) {
  console.log(this);
  return a + b;
}

console.log(this);

sum.bind(this)(1, 2);
