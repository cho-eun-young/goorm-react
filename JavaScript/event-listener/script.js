// 1.자바스크립트에서 프로퍼티 등록

window.onload = function () {
  // 문서가 load 될때 이 함수 실행
  // predefined process
  let text = document.getElementById("text");

  text.innerHTML = "HTML 문서 loaded";
};

// 2. HTML Tag 속성 등록
/* <button onclick="alert('버튼이 클릭 되었습니다.')" class="btn">버튼</button> */

// 3. addEventListener 등록
// element.addEventListener('click', () => {

// })

const aElment = document.querySelector("a");
aElment.addEventListener("click", () => {
  alert("a element clicked");
});

const buttonElement = document.querySelector(".btn");
buttonElement.addEventListener("click", handleClick);
function handleClick(event) {
  let val;
  val = event;

  val = event.target;
  val = event.target.id;
  val = event.target.className;
  val = event.target.classList;

  val = event.type;

  val = event.clientY;
  val = event.clientX;

  val = event.offsetY;
  val = event.offsetX;

  console.log(val);
}
