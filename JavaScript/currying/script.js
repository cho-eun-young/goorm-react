// const sum = (x, y) => x + y;

// const curriedSum = (x) => (y) => x + y;

// console.log(sum(10, 20));
// console.log(curriedSum(10, 20));
// console.log(curriedSum(10)(20));

// const tenPluse = curriedSum(10);
// console.log(tenPluse);
// console.log(tenPluse(103));

// const makeFood = (ingredient1) => {
//   return (ingredient2) => {
//     return (ingredient3) => {
//       return `${ingredient1} ${ingredient2} ${ingredient3}`;
//     };
//   };
// };

// // Bread Ham Tomato
// const hamburger = makeFood("Bread")("Ham")("Tomato");
// console.log(hamburger);

// const cleanerMakeFood = (ingredient1) => (ingredient2) => (ingredient3) =>
//   `${ingredient1} ${ingredient2} ${ingredient3}`;

function log(date, importance, message) {
  alert(`[${date.getHours()}:${date.getMinutes()}] [${importance}] ${message}`);
}

// log(new Date(), "DEBUG", "some debug");

function curry(f) {
  return function (a) {
    return function (b) {
      return function (c) {
        return f(a, b, c);
      };
    };
  };
}

const curriedLog = curry(log);

curriedLog(new Date())("DEBUG")("some debug");
