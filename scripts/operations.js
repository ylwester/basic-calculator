function operate(operator, firstNumber, secondNumber) {
    switch(operator) {
        case '+' :
            return add(firstNumber, secondNumber);
        case '-' :
            return subtract(firstNumber, secondNumber);
        case '*' :
            return Math.round(multiply(firstNumber, secondNumber).toFixed(2) * 100) / 100;
        case '/' :
            if(firstNumber === '0' || secondNumber === '0'){
                return "ERROR";
            }
            return Math.round(divide(firstNumber, secondNumber).toFixed(2) * 100) / 100;
        default:
            console.log('ERROR');
    }
}

function add(a, b) {
    return parseFloat(a)+parseFloat(b);
}
function subtract(a, b) {
    return parseFloat(a)-parseFloat(b);
}
function multiply(a, b) {
    return parseFloat(a)*parseFloat(b);
}
function divide(a, b) {
    return parseFloat(a)/parseFloat(b);
}
