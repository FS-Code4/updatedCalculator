export function calculate(x, y, operator) {
    let result;

    switch (operator) {
        case '+':
            result = x + y;
            break;
        case '-':
            result = x - y;
            break;
        case '*':
            result = x * y;
            break;
        case '/':
            result = x / y;
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
            resultDisplay.textContent += button.textContent
        })
    })
}

function clear() {
    let clear = document.querySelector('.js-clear');

    clear.addEventListener('click', () => {
        resultDisplay.textContent = '';
        console.log(resultDisplay.textContent)
    })
}

updateDisplay();
clear();