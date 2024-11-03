// 원시 타입 Primitive types
// String
const name = "Han";
// Number
const age = 30;
// Boolean
const hasJob = false;
// Null (의도적으로 값이 없다)
// 개발자가 넣어주는것
const car = null;
// Undefined
// 안에서 넣어줌
let anything;
// Symbol
const sym = Symbol();

const a = null;
typeof a;
// object
const abe = "han";
typeof abc;
// string

// 참조 타입 Object types
// Array 배열
const hobbies = ["walking", "books"];
// Object Literal 객체 리터럴
const address = {
  povince: "경기도",
  city: "성남시",
};

// 자바스크립트는 동적(Dynamic) 타입 = 느슨한 타입 <-> 정적 (static) 타입 typescript
// 할당 재할당
// let foo = 42 foo => Number
// foo = 'bar'  foo => string
// foo = true   foo =? boolean

// 원시 타입은 Call stack안에 바로 값들이 저장됨
// 참조 타입은 Heap에 저장되는데 주소가 Call stack에 저장된다.
