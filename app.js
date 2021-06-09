const btnTranslate = document.querySelector("#btn-translate");

const inputText = document.querySelector("#txt-input");

const outputDiv = document.querySelector("#output");


function clickEventHandler() {
    outputDiv.innerText = "conversion is - " + inputText.value;
};

btnTranslate.addEventListener("click", clickEventHandler);

