
let displayText = document.getElementById('displaytext');
let numberButtons = Array.from(document.getElementsByClassName('number'));
let display = "";
let displayContainer = document.querySelector('.display');
let currentValue = 0;

numberButtons.forEach(button => button.addEventListener('click', populateDisplay));

function populateDisplay(e){
    if (display.length == 12){
        return;
    }
    display += e.target.textContent;
    displayText.textContent = display;
}



function add(a,b){
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply(a,b){
    return a*b;
}

function divide (a,b){
    if (b === 0){
        return "ERROR";
    }
    return a/b;
}

function operate(a,b,operator){
    switch(operator){
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "x":
            return multiply(a,b);
        case "/":
            return divide(a,b);
    }
}