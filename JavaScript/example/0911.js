const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers2.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

const numbers3 = [1, 2, 3, 4, 5];
const sum = numbers3.reduce((acc, cur) => acc + cur, 0);
console.log(sum); // 15
