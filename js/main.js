var NumTokens = 0;
var CurrHealth = 40;
var CurrPoison = 0;

function testFunction() {
    alert("Hello, World!");
}

function insertAfter(NewNode, ExistingNode) {
    ExistingNode.parentNode.insertBefore(NewNode, ExistingNode.nextSibling);
}

function DeleteAllCards() {
    var CardsList = document.querySelectorAll(".tokenCard");
    var TokenArea = document.querySelector("#TokenArea")
    CardsList.forEach((item, i) => {
        TokenArea.removeChild(item);
    });

}

function NewCustomToken() {
    // if('content' in document.createElement('template')){
    //     console.log("template element is supported!");
    // }
    console.log("Custom Token Created!");
    var TokenArea = document.querySelector("#TokenArea");
    var CustomTokenTemplate = document.querySelector('#CustomTokenTemplate');
    var NewCustomToken = CustomTokenTemplate.content.cloneNode(true);
    TokenArea.appendChild(NewCustomToken);
    NewCustomToken.id = "NewCustomToken_" + NumTokens;
    NumTokens++;
    console.log("New Element ID: " + NewCustomToken.id);
}

function NewLifeTracker() {
    // if('content' in document.createElement('template')){
    //     console.log("template element is supported!");
    // }
    console.log("Life Tracker Created!");
    var NewItemList = document.querySelector("#newItemList");
    var NewLifeTracker = document.querySelector("#NewLifeTracker");
    NewItemList.removeChild(NewLifeTracker);
    var TokenArea = document.querySelector("#TokenArea");
    var HealthTrackerTemplate = document.querySelector('#HealthTrackerTemplate');
    var HealthTrackerCard = HealthTrackerTemplate.content.firstElementChild.cloneNode(true);
    TokenArea.insertBefore(HealthTrackerCard, TokenArea.firstChild);
    HealthTrackerCard.classList.add("HealthTracker");
    console.log(HealthTrackerCard);
}

function AdjustHealth(total) {
    var CurrHealthElem = document.querySelector("#currHealth");
    CurrHealth += total;
    // console.log("New Health: " + currHealth);
    CurrHealthElem.textContent = CurrHealth;

    if (CurrHealth <= 0){
        CurrHealthElem.classList.add("text-danger");
    } else {
        CurrHealthElem.classList.remove("text-danger");
    }
}

function AdjustPoison(total) {
    var CurrPoisonElem = document.querySelector("#currPoison");
    CurrPoison += total;
    if (CurrPoison < 0) { CurrPoison = 0; }
    // console.log("New Poison: " + currPoison);
    CurrPoisonElem.textContent = CurrPoison;

    if (CurrPoison >= 10){
        CurrPoisonElem.classList.add("text-danger");
    } else {
        CurrPoisonElem.classList.remove("text-danger");
    }
}

function AdjustMana(color, amount, reset=false) {
    var ManaElement = document.querySelector("#" + color + "Mana");
    var CurrMana = ManaElement.textContent;
    // console.log("Current " + color + " mana: " + CurrMana);
    CurrMana = parseInt(CurrMana) + amount;

    if (CurrMana < 0) { CurrMana = 0; }
    if (reset == true) { CurrMana = 0; }
    // console.log("New Poison: " + currPoison);
    ManaElement.textContent = CurrMana;
}

function ResetMana() {
    var Colors = ["white","blue","black","red","green","colorless"];

    Colors.forEach((item, i) => {
        AdjustMana(item, 0, true);
    });

}

function NewManaTracker() {
    console.log("Mana Tracker Created!");
    var NewItemList = document.querySelector("#newItemList");
    var TokenArea = document.querySelector("#TokenArea");
    var ManaTrackerTemplate = document.querySelector('#ManaTrackerTemplate');
    var ManaTrackerCard = ManaTrackerTemplate.content.firstElementChild.cloneNode(true);

    // Check if the life tracker exists so the mana tracker is put after
    var HealthTrackerCheck = document.querySelectorAll(".HealthTracker");
    var HealthTrackerExists = HealthTrackerCheck.length > 0;

    // Remove the mana checker from the dropdown
    var NewManaTracker = document.querySelector("#NewManaTracker");
    NewItemList.removeChild(NewManaTracker);

    if (HealthTrackerExists){
        insertAfter(ManaTrackerCard, HealthTrackerCheck[0])
    } else {
        TokenArea.insertBefore(ManaTrackerCard, TokenArea.firstChild);
    }
}
