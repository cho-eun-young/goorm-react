function sumUsingForWhile(N) {
  let sum = 0; // 합계를 저장할 변수
  let i = 1; // 반복 변수 초기화

  // for문을 사용하여 1부터 N까지 반복
  for (i; i <= N; i++) {
    sum += i; // 현재 숫자를 합계에 더하기
  }

  // while문을 사용하여 1부터 N까지 반복
  let j = 1; // 반복 변수 초기화
  while (j <= N) {
    sum += j; // 현재 숫자를 합계에 더하기
    j++; // 반복 변수 증가
  }

  return sum; // 최종 합계 반환
}

// 함수 호출 예시
const result = sumUsingForWhile(5);
console.log(result); // 출력: 30 (1+2+3+4+5를 두 번 더함)
