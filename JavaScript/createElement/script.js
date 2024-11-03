// element 생성
const li = document.createElement("li");

// class 생성
li.className = "list-group-item";

// id 추가
li.id = "new-item";

// name추가
li.setAttribute("name", "New list item");

// text 추가
li.appendChild(document.createTextNode("New list Item"));

// a 추가
const link = document.createElement("a");

link.className = "alarm-item";

link.innerHTML = '<i class="bi-alarm"></i>';

li.appendChild(link);
// 내용
// textContent innerText innerHTML

document.querySelector("ul.list-group").appendChild(li);

console.log(li);
