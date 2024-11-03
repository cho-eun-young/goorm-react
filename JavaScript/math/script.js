const num1 = 20;
const num2 = 10;

let val;

val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;

val = Math.round(2.4);
// 가장 가까운 integer로 변경
val = Math.ceil(2.3);
// 올려버림
val = Math.floor(2.3);
// 내려버림
val = Math.min(2, 3, 4, 5, 6);
// 가장 작은 값
val = Math.max(2, 3, 4, 5, 6);
// 가장 큰 값
val = Math.floor(Math.random() * 10 + 1);
// 1~ 10까지
console.log(val);
