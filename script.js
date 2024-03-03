let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");

let list = document.getElementById("list");

for (option of options) {
  option.onclick = function () {
    selectText.innerHTML = this.textContent;
    list.classList.toggle("hide");

  };
}

selectField.onclick=function () {
  list.classList.toggle("hide");
};
