const listParent = document.querySelector("ul");
const list = document.querySelectorAll("li");

// listParent.removeChild(list[0]);

//replace
const oldElement = document.getElementById("A");
const newElement = document.createElement("span");
newElement.textContent = "Hi";
oldElement.parentNode.replaceChild(newElement, oldElement);
