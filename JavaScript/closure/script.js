function outerFunction(outerVariable) {
  return function innerFunction(innerVariable) {
    console.log("Outer Variable: " + outerVariable);
    console.log("Inner Variable: " + innerVariable);
  };
}

const newFunction = outerFunction("outside");
newFunction("inside");

let a = "a";

function functionA() {
  function functionB() {
    let c = "c";
    console.log(a, b, c);
  }

  let b = "b";
  console.log(a, b);
  functionB();
}

functionA();
