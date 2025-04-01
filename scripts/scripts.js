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

console.log(calculate(1, 2, '+'))
console.log(calculate(5, 4, '-'))
console.log(calculate(5, 5, '*'))
console.log(calculate(20, 2, '/'))