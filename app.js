const btnTranslate = document.querySelector("#btn-translate");

const inputText = document.querySelector("#txt-input");

const outputDiv = document.querySelector("#output");

const serverURL = "https://api.funtranslations.com/translate/roman-numerals.json"

function getTranslationURL(input){
    return serverURL + "?" + "text=" + input
}

function errorHandler(error){
    console.log("an error occured", error)
    alert("Something went wrong with the server! Try again after some time");
    }

function clickEventHandler() {
   const txtInput = inputText.value;
  
  fetch(getTranslationURL(txtInput))
  .then(response => response.json())
  .then(json => {
     const translatedText = json.contents.translated;
     outputDiv.innerText = translatedText;
  })
  .catch(errorHandler);

};

btnTranslate.addEventListener("click", clickEventHandler)