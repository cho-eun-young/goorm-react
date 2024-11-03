// call 메소드
// 함수를 호출하는 메소드

// const fullName = function (city, country) {
//   console.log(this.firstName + " " + this.lastName, city, country);
// };

// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// // This will return 'John Doe'
// fullName.call(person1, "Oslo", "Norway");

// Apply() 메소드 - 인수 넣어줄 때 []배열로 넣어주기

const fullName = function (city, country) {
  console.log(this.firstName + " " + this.lastName, city, country);
};

const person1 = {
  firstName: "John",
  lastName: "Doe",
};

// This will return 'John Doe'
fullName.apply(person1, ["Oslo", "Norway"]);

// bind()메소드
//직접 함수를 실행하지 않고 반환만 한다.
function func(language) {
  if (language === "kor") {
    console.log(`language: ${this.korGreeting}`);
  } else {
    console.log(`language: ${this.engGreeting}`);
  }
}

const greeting = {
  korGreeting: "안녕",
  engGreeting: "Hello",
};

const boundFunc = func.bind(greeting);
boundFunc("kor");
