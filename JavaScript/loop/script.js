// JS Loop
// 코드 블록 여러 번 실행

// For => 코드 블록 여러 번 반복
// For in => 객체의 속성을 따라 반복
// While => 지정된 조건이 True 코드 블록 반복
// do While => 지정된 조건이 True, Do

// for (let i = 0; i < 10; i++) {
//   // for(statement1 시작전, statement2 조건, statement3 싦행후)
//   if (i === 3) {
//     console.log("It is 3");
//     continue;
//   }

//   if (i === 5) {
//     console.log("It is 5");
//   }

//   console.log("Number" + i);
// }

// for in
// const user = {
//   name: "Han",
//   province: "경기도",
//   city: "성남시",
// };
// for (let x in user) {
//   console.log(`${x} : ${user[x]}`);
// }

// while
let i = 0;
while (i < 10) {
  console.log("Number " + i);
  i++;
}

// do/while
// let i = 100;
// do {
//   console.log("Number" + i);
//   i++;
// } while (i < 10);

//배열 Loop 컨트롤
const locations = ["서울", "부산", "경기도", "대구"];
// for (let i = 0; i < locations.length; i++) {
//   console.log(locations[i]);
// }

// forEach
// locations.forEach(function (location, index, array) {
//   console.log(`${index} : ${location}`);
//   console.log(array);
// });

locations.map(function (location, index, array) {
  console.log(`${index} : ${location}`);
  console.log(array);
});

// Browser 에서 제공 => window
// Nodejs         => Global
