function operate(operator, firstNumber, secondNumber) {
    switch(operator) {
        case 'add' :
            return add(firstNumber, secondNumber);
        case 'subtract' :
            return subtract(firstNumber, secondNumber);
        case 'multiply' :
            return multiply(firstNumber, secondNumber);
        case 'divide' :
            return divide(firstNumber, secondNumber);
        default:
            console.log('ERROR');
    }
}

function add(a, b) {
    return a+b;
}
function subtract(a, b) {
    return a-b;
}
function multiply(a, b) {
    return a*b;
}
function divide(a, b) {
    return a/b;
}

