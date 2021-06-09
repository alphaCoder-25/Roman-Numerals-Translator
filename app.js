const btnTranslate = document.querySelector("#btn-translate");

const inputText = document.querySelector("#txt-input");

const outputDiv = document.querySelector("#output");

const serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function clickEventHandler() {
   const txtInput = inputText.value;
  
  fetch(getTranslationURL(txtInput))
  .then(response => response.json())
  .then(json => {
     const translatedText = json.contents.translated;
     outputDiv.innerText = translatedText;
  })
   
};

btnTranslate.addEventListener("click", clickEventHandler)