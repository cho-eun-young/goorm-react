// // var
// var greeting = "hello";
// console.log(greeting);

// var greeting = "hi";
// console.log(greeting);

// 중복 선언 가능, 재할당 가능

// let
// 중복 선언 불가능, 재할당 가능
// let greeting = "hello";
// console.log(greeting);

// let greeting = "hi";

//const
// 중복 선언 불가능, 재할당 불가능
// const gretting = "hello";
// console.log(gretting);

// gretting = "how are you?";
// console.log(gretting);

// 배열,객체의 값 변경 가능
// [], {}

// 참조범위 (scope)
//  var => 함수 레벨 스코프
// let/const => 블록 레벨 스코프

// function func() {
//   if (true) {
//     var a = "a";
//     console.log(a);
//   }
//   console.log(a);
// }

// func();
// console.log(a); // 참조할수 없음

// function func() {
//   if (true) {
//     let a = "a";
//     console.log(a);
//   }
// console.log(a);
// 참조 x
// }
// func();
// console.log(a);
// 참조 x

// 호이스팅 Hoisting

// 인터프리터 (위에서 부터 아래)

// console.log(greeting);
// var greeting = "hello";
// undefined

// 변수 생성 =>
//   1. 선언 단계
// (코드가 실행되기 전에 현재 범위 맨 위로 호이스팅)
// undefined
// 2. 할당 단계

// func();
// 함수도 호이스팅 된다

// function func() {
//   console.log("hoisting test");
// }

// var / function => Hoisting 된다
// let / const => Hoisting 된다
// 차이점 = undefined가 되느냐 안되느냐의 차이점

// console.log(greeting);
// 참조 에러
// const greeting = "hello";

//   1. 선언 단계
// (코드가 실행되기 전에 현재 범위 맨 위로 호이스팅)
// TDZ Temporary Dead Zone console 출력 에러
// undefined 할당 해주지 않음
// 2. 할당 단계

// var / let / const
// var는 사용 x
// const 가장 우선순위로 사용
// 재할당 필요할 경우에만 let으로 수정하는 것이 좋다.
