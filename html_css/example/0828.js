const number = Math.floor(Math.random() * 11); // 0부터 10까지의 랜덤 숫자

for (let i = 0; i <= number; i++) {
  if (i === 11) {
    break;
  }
  if (i % 2 !== 0) {
    continue;
  }
  console.log(`number: ${number}`);
  console.log(i);
}
