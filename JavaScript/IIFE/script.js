// (function () {
//   var aName = "Barry";
// })();
// // IIFE 내부에서 정의된 변수 외부 범위 접근 X
// console.log(aName);

// var result = (function () {
//   var name = "Barry";
//   return name;
// })();

// console.log(result);

// 이름없는 함수  - 두가지 조건
// 1. 함수를 할당받을 변수 지정
// const minus = function (a, b) {
//   return a - b;
// }

// 2. 함수를 즉시 호출
(function (a, b) {
  return a - b;
})(1, 2);

// IIFE 변수에 할당하면 함수 자체 저장 X
// 함수가 실행된 결과 저장

const Score = (() => {
  let count = 0;
  return {
    current: () => {
      return count;
    },
    increment: () => {
      count++;
    },
    reset: () => {
      count = 0;
    },
  };
})();

console.log(typeof Score);
console.log(Score);
Score.increment();
console.log(Score.current());
Score.increment();
Score.increment();
Score.increment();
Score.increment();
Score.increment();
// Score.reset();
console.log(Score.current());
