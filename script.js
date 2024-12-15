let selectField = document.getElementById("selectField");
let selectText = document.getElementById("selectText");
let options = document.getElementsByClassName("options");
let list = document.getElementById("list");
let arrowIcon = document.getElementById("arrowIcon");

for (let option of options) {
    option.addEventListener("click", () => {
        selectText.textContent = option.textContent;
        list.classList.toggle("hide");
        arrowIcon.classList.toggle("rotate");
    });
}

selectField.addEventListener("click", () => {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
});
