// const submitBtn = document.querySelector(".submit-btn");
// const container = document.querySelector(".form");
// const title = document.querySelector("h2");

// click => 객체 클릭
// submitBtn.addEventListener("click", handleEvent);
// // mousedown => 마우스 클릭
// submitBtn.addEventListener("mousedown", handleEvent);
// // mouseup
// submitBtn.addEventListener("mouseup", handleEvent);
// // mouseenter
// submitBtn.addEventListener("mouseenter", handleEvent);
// // mouseleave
// submitBtn.addEventListener("mouseleave", handleEvent);
// // mousemove
// submitBtn.addEventListener("mousemove", handleEvent);

// function handleEvent(e) {
//   e.preventDefault();
//   console.log(`Event Type: ${e.type}`);
// }

const form = document.querySelector("form");
const emailInput = document.getElementById("email");
const title = document.querySelector("h2");

form.addEventListener("submit", handleEvent);

//keydown =>키를 눌럿을 때
emailInput.addEventListener("keydown", handleEvent);
//keyup => 키를 눌렀다가
emailInput.addEventListener("keyup", handleEvent);
//keypress => 키의 문자가 입력되었을 때
emailInput.addEventListener("keypress", handleEvent);

emailInput.addEventListener("focus", handleEvent);

emailInput.addEventListener("blur", handleEvent);

emailInput.addEventListener("cut", handleEvent);

emailInput.addEventListener("paste", handleEvent);
// input => input요소 값이 달라졌을 때(e.target.value가 달라졌을 때)
emailInput.addEventListener("input", handleEvent);

function handleEvent(e) {
  // e.preventDefault();
  console.log(`Event Type: ${e.type}`);

  if (e.type === "submit") {
    e.preventDefault();
  }

  title.innerText = e.target.value;
}
