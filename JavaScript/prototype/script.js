let user = {
  name: "John",
  age: 40,
};

// console.log(user.name);
// console.log(user.hasOwnProperty("email"));

//프로토타입이란?
//자바스크립트 객체 다른 객체 메서드 속성 상속 메커니즘
// -> 프로토타입 체인

// 생성자 함수
// function Person(name, email, birthday){
//   this.name = name;
//   this.email = email;
//   this.birthday = new Date(birthday);
// }

// Person.prototype.calculateAge = function() {
//   const diff = Date.now() = this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970)
// }

// const john = new Person('john', 'john@abc.com', '7-10-91')
// const han = new Person('han', 'han@abc.com', '2-9-91')

// console.log('john', john)
// console.log('han', han)

//------------------------

// function Person(name, email, birthday){
//   let person = Object.create(personPrototype)
//   this.name = name;
//   this.email = email;
//   this.birthday = new Date(birthday);
// }

// const personPrototype = {
//   calculateAge(){
//     const diff = Date.now() = this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970)
//   }
// }

// const john = new Person('john', 'john@abc.com', '7-10-91')
// const han = new Person('han', 'han@abc.com', '2-9-91')

// console.log('john', john)
// console.log('han', han)

//-------------------------

// const testArray = [1, 2, 3];

// Array.prototype.push = function (x) {
//   return "pushed value:" + x;
// };

// testArray.push(4);
// console.log("testArray", testArray);

//-------------------------

// class Person {
//   constructor(name, email, birthday) {
//     this.name = name;
//     this.email = email;
//     this.birthday = new Date(birthday);
//   }

//   introduce() {
//     return `Hello my name is ${this.name}`;
//   }
//   static multipleNumber(x, y) {
//     return x * y;
//   }
// }

// const john = new Person("john", "john@abc.com", "7-10-91");
// console.log(john);
// john.introduce();

//-------------------------

// class Person {
//   constructor(name, email, birthday) {
//     this.name = name;
//     this.email = email;
//   }

//   introduce() {
//     return `Hello my name is ${this.name}`;
//   }
// }

// class Client extends Person {
//   constructor(name, email, phone, address) {
//     super(name, email);

//     this.phone = phone;
//     this.address = address;
//   }
// }

// const john = new Client("john", " john@abc.com", "010-111-2222", "seoul");

//-------------------------

class Car {
  constructor(brand) {
    this.carname = brand;
  }

  present() {
    return "I have a " + this.carname;
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }

  show() {
    return super.present() + ", it is a " + this.model;
  }
}

let mycar = new Model("Ford", "Mustang");
console.log(mycar.show());
