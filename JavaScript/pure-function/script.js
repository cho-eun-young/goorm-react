// same input => smae output

// const add = (x, y) => x + y;
// console.log(add(10, 20));

// const fullName = (first, last) => `${first} ${last}`;
// console.log(fullName("John", "Doe"));

// No side Effect
// const z = 1;
// const sum = (x, y) => x + y + z;
// console.log(sum(10, 20));

let x = 0;
// const numberUp = () => (x += 1);
// console.log(numberUp());
// console.log(x);

// const pureNumberUp = (num) => num + 1;
// console.log(pureNumberUp(x));
// console.log(pureNumberUp(x));
// console.log(pureNumberUp(x));
// console.log(pureNumberUp(x));
// console.log(pureNumberUp(x));
// console.log(pureNumberUp(x));
// console.log(x);

// const alphabetArray = ["A", "B"];
// const addItemToArray = (originalArray, newItem) => {
//   originalArray.push(newItem);
//   return originalArray;
// };

// console.log(addItemToArray(alphabetArray, "C"));
// console.log(alphabetArray);

const alphabetArray = ["A", "B"];
const pureAddItemToArray = (originalArray, newItem) => {
  return [...originalArray, newItem];
};

console.log(pureAddItemToArray(alphabetArray, "C"));
console.log(alphabetArray);
