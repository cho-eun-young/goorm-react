const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };

// 깊은 비교 객체의 경우 => 값으로 비교
// loadsh isEqual()
// JSON.stringify()

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); //false
