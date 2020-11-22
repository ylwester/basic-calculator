let operatorsArray = ["+", "-", "*", "/"];
let currentInput = '';
let newValue = '';
let globalOperator = '';
let previousValue = '';
let secondValue = '';
let firstValue = 0;
let result = '';

function updateValues(e) {
    switch (newValue) {
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            if(currentInput.length > 14){
                throw 'Max 14 digits';
            }
            previousValue = newValue;
            currentInput += newValue;
            updateDisplay(currentInput);
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            if(operatorsArray.includes(previousValue)){
                globalOperator = newValue;
            } else if(!operatorsArray.includes(previousValue) && globalOperator === '') {
                manageOperator(newValue);
            } else if(firstValue !== '' && currentInput !== "" && globalOperator !== ""){
                secondValue = currentInput;
                result = operate(globalOperator, firstValue, secondValue);
                if(operatorsArray.includes(newValue)){
                    globalOperator = newValue;
                }
                firstValue = result;
                updateDisplay(result);
                currentInput = '';
                secondValue = '';
            } else if (!operatorsArray.includes(previousValue) && globalOperator !== ''){
                manageOperator(newValue);
            }
            break;
        case "=":
            if(firstValue !== '' && currentInput !== ''){
                if(currentInput !== "" && globalOperator !== ""){
                    secondValue = currentInput;
                    result = operate(globalOperator, firstValue, secondValue);
                    updateDisplay(result);
                    currentInput = result;
                    newValue = '';
                    globalOperator = '';
                    previousValue = '';
                    secondValue = '';
                    firstValue = result;
                }
            }
            break;
        case "clear":
            currentInput = '';
            newValue = '';
            globalOperator = '';
            previousValue = '';
            secondValue = '';
            firstValue = 0;
            result = '';
            updateDisplay('0');

    }
}

function manageOperator(operator) {
    previousValue = operator;
    globalOperator = operator;
    if(result !== ''){
        firstValue = result;
    } else {
        firstValue = currentInput;
    }
    currentInput = '';
    console.log(globalOperator);
}

function updateDisplay(e){
    const displayData = document.querySelector("div.main-display");
    displayData.textContent = `${e}`;
}

function buttonClick() {
    const pressedButton = document.querySelectorAll("div.calculator-buttons button");
    pressedButton.forEach((button) => {
        button.addEventListener('click', (e) => {
            try{
                newValue = button.value;
                updateValues(e);
            } catch (err) {
                console.log(err);
            }

        });
    });
}

updateDisplay('0');
buttonClick();