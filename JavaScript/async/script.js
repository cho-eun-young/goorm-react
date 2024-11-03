function fetchData() {
  return new Promise((resolve, reject) => {
    const success = false;
    if (success) {
      resolve("성공");
    } else {
      reject("실패");
    }
  });
}

// fetchData()
//   .then(function (result) {
//     console.log(result);
//   })
//   .catch(function (error) {
//     console.error(error);
//   })
//   .finally(() => {
//     console.log("----모든 작업 끝----");
//   });

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response1) => response1.json())
//   .then((json) => console.log(json))
//   .then(() => fetch("https://jsonplaceholder.typicode.com/todos/2"))
//   .then((response2) => response2.json())
//   .then((json) => console.log(json))
//   .catch((err) => console.log(err));

// Promise.all();
// const Promise1 = Promise.resolve(3);
// const Promise2 = Promise.reject("실패");
// const Promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 3000, "foo");
// });

// Promise.all([Promise1, Promise2, Promise3]).then((value) => {
//   console.log(value);
// });

// Promise.race()
// const promise1 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 500, "one");
// });
// const promise2 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 100, "two");
// });

// Promise.race([promise1, promise2]).then((value) => {
//   console.log(value);
// });

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response1) => response1.json())
  .then((json) => console.log(json))
  .then(() => fetch("https://jsonplaceholder.typicode.com/todos/2"))
  .then((response2) => response2.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));

async function makeRequests() {
  try {
    const response1 = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const jsonResponse1 = await response1.json();
    console.log(jsonResponse1);

    const response2 = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const jsonResponse2 = await response1.json();
    console.log(jsonResponse2);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("------");
  }
}
