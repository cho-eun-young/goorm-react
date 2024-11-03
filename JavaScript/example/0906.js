function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i; // 타겟을 찾았을 때 해당 인덱스 반환
    }
  }
  return -1; // 타겟을 찾지 못했을 때
}

// 테스트
let array = [5, 2, 9, 1, 7, 6, 3];

console.log(linearSearch(array, 7)); // 출력: 4
console.log(linearSearch(array, 8)); // 출력: -1

// 추가 기능: 탐색 과정 출력
function linearSearchWithSteps(arr, target) {
  console.log("탐색 시작:", arr.join(", "));
  for (let i = 0; i < arr.length; i++) {
    console.log(`${i + 1}번째 단계: ${arr[i]} 확인 중`);
    if (arr[i] === target) {
      console.log(`타겟 ${target}을(를) 인덱스 ${i}에서 찾았습니다.`);
      return i;
    }
  }
  console.log(`타겟 ${target}을(를) 찾지 못했습니다.`);
  return -1;
}

console.log("--- 탐색 과정 ---");
linearSearchWithSteps(array, 7);
