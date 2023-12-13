const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

let addTask = function () {
  if (inputBox.value === "") {
    alert("Please type something to Add task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};

document.querySelector("button").addEventListener("click", addTask);
document.querySelector(".row input").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    addTask();
  }
});

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
  listContainer.innerHTML = localStorage.getItem("data");
}

showData();
