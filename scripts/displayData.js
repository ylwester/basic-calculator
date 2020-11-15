let pressedValue = 0;

const pressedButton = document.querySelectorAll("div.calculator-buttons button");
const displayResult = document.querySelector("div.main-display");

function displayData() {
    pressedButton.forEach((button) => {
        button.addEventListener('click', () => {
            pressedValue = button.value;
            displayResult.innerHTML = pressedValue;
        });
    });
}

displayData();