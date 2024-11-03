// This 참조

// Method this  => 해당 객체 참조

// const audio = {
//   title: "a",
//   play() {
//     console.log("play this", this);
//   },
// };

// audio.play();

// audio.stop = function () {
//   console.log("stop this", this);
// };

// audio.stop();

// // function this => Window 객체
// function playAudio() {
//   console.log(this);
// }

// playAudio();

// //Constructor (생성자) 함수 this => 빈 객체
// function Audio(title) {
//   this.title = title;
//   console.log(this);
// }

// const audioA = new Audio("a");
// const audioB = new Audio("b");
// const audioC = new Audio("c");
// const audioD = new Audio("d");

// const audio = {
//   title: "audio",
//   categories: ["rock", "pop", "hiphop", "jazz"],
//   displayCategories() {
//     this.categories.forEach(function (category) {
//       console.log(`title: ${this.title}, category: ${category}`);
//     });
//   },
// };

// audio.displayCategories();

const audio = {
  title: "audio",
  categories: ["rock", "pop", "hiphop", "jazz"],
  displayCategories() {
    this.categories.forEach((category) => {
      console.log(`title: ${this.title}, category: ${category}`);
      // 화살표 함수 안에 있는 this는 항상 상위 스코프 this 참조.
      // lexical this
    });
  },
};

audio.displayCategories();
