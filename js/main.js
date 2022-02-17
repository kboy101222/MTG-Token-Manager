var numTokens = 0;
var currHealth = 40;
var currPoison = 0;

function testFunction() {
    alert("Hello, World!");
}

function DeleteAllCards() {
    var cardsList = document.querySelectorAll(".tokenCard");
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
    NewCustomToken.id = "NewCustomToken_" + numTokens;
    numTokens++;
    console.log("New Element ID: " + NewCustomToken.id);
}

function NewLifeTracker() {
    if('content' in document.createElement('template')){
        console.log("template element is supported!");
    }
    console.log("Life Tracker Created!");
    var NewItemList = document.querySelector("#newItemList");
    var NewLifeTracker = document.querySelector("#NewLifeTracker");
    NewItemList.removeChild(NewLifeTracker)
    var TokenArea = document.querySelector("#TokenArea");
    var CustomTokenTemplate = document.querySelector('#HealthTrackerTemplate');
    var NewCustomToken = CustomTokenTemplate.content.cloneNode(true);
    TokenArea.insertBefore(NewCustomToken, TokenArea.firstChild);
}

function AdjustHealth(total){
    var currHealthElem = document.querySelector("#currHealth");
    currHealth += total;
    console.log("New Health: " + currHealth);
    currHealthElem.textContent = currHealth;

    if (currHealth <= 0){
        currHealthElem.classList.add("text-danger");
    } else {
        currHealthElem.classList.remove("text-danger");
    }
}
