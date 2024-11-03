const numbers = [1, 2, 3, 4, 5]; // 숫자 리스트

// 배열의 합 구하기
const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0); // 초기값 0 설정

console.log(sum); // 출력: 15
