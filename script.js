
let displayText = document.getElementById('displaytext');
let numberButtons = Array.from(document.getElementsByClassName('number'));
let displayContainer = document.querySelector('.display');
let operatorButtons = Array.from(document.getElementsByClassName('operator'));
let equalsButton = document.getElementById('equals');
let clearButton = document.getElementById('clear');

let display = "";
let operator = "";

let inputValue = 0;

numberButtons.forEach(button => button.addEventListener('click', populateDisplay));
operatorButtons.forEach(button => button.addEventListener('click', (e) => {
    checkForErrors();
    if (operator != ""){
        operate();
    }
    operator = e.target.textContent;
    inputValue = Number(displayText.textContent);
    display = "";
}));
equalsButton.addEventListener('click', operate);
clearButton.addEventListener('click', () =>{
    operator = "";
    inputValue = 0;
    display = "";
    displayText.textContent = "";
});


function populateDisplay(e){
    checkForErrors();
    if (display.length == 12){
        return;
    }
    display += e.target.textContent;
    displayText.textContent = display;
}


function add(secondValue){
    return inputValue+secondValue;
}

function subtract(secondValue){
    return inputValue-secondValue;
}

function multiply(secondValue){
    return inputValue*secondValue;
}

function divide(secondValue){
    return inputValue/secondValue;
}


function operate(){
    switch(operator){
        case "+":
            inputValue = add(Number(display));
            displayText.textContent = inputValue;
            display = inputValue;
            break;
        case "-":
            inputValue = subtract(Number(display));
            displayText.textContent = inputValue;
            display = inputValue;
            break;
        case "x":
            inputValue = multiply(Number(display));
            displayText.textContent = inputValue;
            display = inputValue;
            break;
        case "/":
            inputValue = divide(Number(display));
            displayText.textContent = inputValue;
            display = inputValue;
            break;
    }
}

function checkForErrors(){
    if (inputValue == "Infinity" || inputValue == NaN){
        clearButton.click();
    }
}