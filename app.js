const btnTranslate = document.querySelector("#btn-translate");

const inputText = document.querySelector("#txt-input");


function clickEventHandler() {
    console.log("clicked!");
    console.log("input", inputText.value);
};

btnTranslate.addEventListener("click", clickEventHandler);

