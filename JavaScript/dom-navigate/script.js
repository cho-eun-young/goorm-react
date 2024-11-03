let val;
const list = document.querySelector("ul.list-group");
const listItem = document.querySelector("li.list-group-item:first-child");

val = listItem;
val = list;

// child nodes 반환
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[3];
val = list.childNodes[3].nodeType;

// nodeType
// 1 - element
// 2 - attribute
// 3 - text node
// 8 - comment
// 9 - document itself
//10 - doctype

// children element nodes 반환
val = list.children;
val = list.children[1];
list.children[1].textContent = "Hi";

//Frist child
val = list.firstChild;
list.childNodes[0];
val = list.firstElementChild;

val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = listItem.parentNode;
val = listItem.parentElement;
val = listItem.parentElement.parentElement;

val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

val = listItem.previousSibling;
val = listItem.previousElementSibling;

val = list.childNodes; // 배열 아님
// [item, item, item]
// O 가능한것
// for ... of => 배열을 순환할 때
// for Each

for (let node of list.childNodes) {
  console.log(node);
}

// X 불가능한것
// for ... in => 객체를 순환할 때
// map
// filter
// Iterable (반복가능한) collection
// 유사 배열 객체

console.log(Array.from(list.childNodes).filter);
