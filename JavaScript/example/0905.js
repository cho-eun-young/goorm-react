// stack 스택
function reversedStack(str) {
  const stack = [];
  let reversedStr = "";

  // 문자열의 각 문자를 스택에 push
  for (let char of str) {
    stack.push(char);
  }

  // 스택에서 pop하여 새 문자열 생성
  while (stack.length > 0) {
    reversedStr += stack.pop();
  }

  return reversedStr;
}

const original = "Hello, World!";
console.log(reversedStack(original)); // 출력: "!dlroW ,olleH"

// queue 큐
function reversedQueue(str) {
  const queue = [];
  let reversedStr2 = "";

  // 문자열의 각 문자를 큐에 enqueue
  for (let char of str) {
    queue.push(char);
  }

  // 큐에서 dequeue하여 새 문자열의 앞에 추가
  while (queue.length > 0) {
    reversedStr2 = queue.shift() + reversedStr2;
  }

  return reversedStr2;
}

// 사용 예
const String = "Hello, JavaScript!";
console.log(reversedQueue(String)); // 출력: "!tpircSavaJ ,olleH"
