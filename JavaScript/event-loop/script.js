// 동기 / 비동기

// console.log("1"); // 동기 (Synchronous)

// setTimeout(() => {
//   // 비동기 (Asynchronous)
//   console.log("2");
// }, 3000);

// console.log("3"); // 동기

// function B() {
//   setTimeout(() => {
//     console.log("B-1...");
//   }, 1500);
// }

// function A() {
//   console.log("A-1...");
//   B();
//   console.log("A-2...");
// }
// A();

// 무한루프
// function foo() {
//   foo();
// }
// foo();
