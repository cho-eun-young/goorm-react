const array1 = [1, 4, 9, 16];

// 새로운 배열 => array1 업데이트, 조작? x
// 원본 배열은 그대로 있음,

// const map1 = array1.map((x) => x * 2);
const map1 = array1.map(
  function (item, index, array) {
    console.log(this);
  },

  { a: "a" }
);

// [2. 8. 18, 32]
console.log(map1);

// filter 주어진 함수 테스트 통과하는 모든 요소를 "새로운 배열" 반환
const words = ["spray", "limit", "elite", "destruction"];
// const result = words.filter((word) => word.length > 6);
const result = words.filter((word, index, array) => word.length > 6);
console.log(result);

//Reducer
// arr.reduce(reducer 함수, initialValue)
