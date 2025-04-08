let result;
let num1 = 0;
let num2 = 0;
let operator = '';

let numbers = document.querySelectorAll('.number');
let ops = document.querySelectorAll('.operator');
let equalsButtton = document.querySelector('.js-equals-sign')


export function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
    }
    return result;
}


let resultDisplay;


function updateDisplay() {
    let buttons = document.querySelectorAll('.js-display');

    resultDisplay = document.querySelector('.result-display');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            resultDisplay.textContent += button.textContent;

        })
    })
}

function clearDisplay() {
    let clear = document.querySelector('.js-clear');

    clear.addEventListener('click', () => {
        resultDisplay.textContent = '';
    })
}

function handleOperatorClick() {
    ops.forEach((op) => {
        op.addEventListener('click', () => {
            operator = op.textContent;
        })
    })    
}

function handleNumberClick() {
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            if (operator === '') {
                num1+= number.textContent;
            } else {
                num2 += number.textContent;
            }
        })
    })
}

function equals() {
    equalsButtton.addEventListener('click', () => {
        let result = calculate(parseInt(num1), parseInt(num2), operator);
        resultDisplay.textContent = result;
        num1 = result;
        num2 = 0;
    })
}



handleNumberClick();
handleOperatorClick();
updateDisplay();
clearDisplay();
equals();






