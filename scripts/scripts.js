let result;
let num1 = 0;
let num2 = 0;
let operator = '';

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

//Make display

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
        console.log(resultDisplay.textContent)
    })
}

//

let numbers = document.querySelectorAll('.number');
let ops = document.querySelectorAll('.operator');
let equalsButtton = document.querySelector('.js-equals-sign')

//Handle number clicks


//Handle operator clicks
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
        console.log(result)
        resultDisplay.textContent = result;
    })
}

handleNumberClick();
handleOperatorClick();
updateDisplay();
clearDisplay();
equals();

//When a number button is pressed, it is assigned to num1

//When an operator button is pressed, it is assigned to operator





