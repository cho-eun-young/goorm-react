// 얕은 복사 shallow copy
const aArray = [1, 2, 3];

// spread operator

const bArray = [...aArray, 4];
console.log("aArray", aArray);
console.log("bArray", bArray);
console.log("aArray === bArray", aArray === bArray);

// Object.assing() shallow copy
const cArray = Object.assign([], bArray);
console.log("cArray", cArray);
console.log("bArray === cArray", bArray === cArray);

// depth 1
cArray.push([5, 6, 7]); // push 원본 변경
console.log("cArray", cArray);

const dArray = [...cArray, 10];
console.log("dArray", dArray);
dArray[4].push(8); // push 원본 변경
console.log("cArray", cArray);
console.log("dArray", dArray);

// shallow copy
// spread operator, object assign
// Array.from(). slice
// depth 복사 x

// 얕은 동결 freeze
const aObject = {
  a: "a",
  b: "b",
  cObject: { a: 1, b: 2 },
};

// Object.freeze(aObject);
// aObject.a = "c";
// console.log("aObject", aObject);
// aObject.cObject.a = "3";

// 깊은 복사
// const newAObject = JSON.parse(JSON.stringify(aObject));
const newAObject = {
  ...aObject,
  cObject: {
    ...aObject.cObject,
  },
};
console.log("aObject", aObject);
console.log("newAObject", newAObject);
aObject.cObject.a = 3;
console.log("aObject", aObject);
console.log("newAObject", newAObject);
