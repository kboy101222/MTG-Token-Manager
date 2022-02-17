var numTokens = 0;

function testFunction() {
    alert("Hello, World!");
}

function DeleteAllCards() {
    var cardsList = document.querySelectorAll(".card");
    var TokenArea = document.querySelector("#TokenArea")
    cardsList.forEach((item, i) => {
        TokenArea.removeChild(item);
    });

}

function NewCustomToken() {
    if('content' in document.createElement('template')){
        console.log("template element is supported!");
    }
    console.log("Custom Token Created!");
    var TokenArea = document.querySelector("#TokenArea");
    var CustomTokenTemplate = document.querySelector('#CustomTokenTemplate');
    var NewCustomToken = CustomTokenTemplate.content.cloneNode(true);
    TokenArea.appendChild(NewCustomToken);
    numTokens++;
}

function NewLifeTracker() {
    if('content' in document.createElement('template')){
        console.log("template element is supported!");
    }
    console.log("Life Tracker Created!");
    var TokenArea = document.querySelector("#TokenArea");
    var CustomTokenTemplate = document.querySelector('#HealthTrackerTemplate');
    var NewCustomToken = CustomTokenTemplate.content.cloneNode(true);
    TokenArea.insertBefore(NewCustomToken, TokenArea.firstChild);
}
