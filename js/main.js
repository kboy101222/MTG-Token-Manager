var numTokens = 0;

function testFunction(){
    alert("Hello, World!");
}

function newCustomToken() {
    if('content' in document.createElement('template')){
        console.log("template element is supported!");
    }
    console.log("Custom Token Created!");
    var TokenArea = document.querySelector("#TokenArea");
    var CustomTokenTemplate = document.querySelector('#CustomTokenTemplate');
    TokenArea.appendChild(CustomTokenTemplate);
    numTokens++;
}
