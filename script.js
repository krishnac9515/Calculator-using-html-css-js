let currentInput = '';
let operator = '';
const history = [];
const maxHistoryLength = 10;

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById('display').value = currentInput;
}

function clearDisplay() {
    currentInput = '';
    document.getElementById('display').value = '';
}

function calculate() {
    if (currentInput === '') return;

    try {
        const result = eval(currentInput);
        if (!isNaN(result)) {
            const calculation = currentInput + ' = ' + result.toString();
            currentInput = result.toString();
            operator = '';
            history.push(calculation);

            if (history.length > maxHistoryLength) {
                history.shift();
            }

            updateHistoryList();
            document.getElementById('display').value = currentInput;
        } else {
            throw 'Invalid input';
        }
    } catch (error) {
        alert('Error: ' + error);
        clearDisplay();
    }
}

function updateHistoryList() {
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';

    for (const calculation of history) {
        const listItem = document.createElement('li');
        listItem.textContent = calculation;
        historyList.appendChild(listItem);
    }
}

function toggleHistory() {
    const historyDiv = document.querySelector('.history');
    historyDiv.style.display = (historyDiv.style.display === 'block') ? 'none' : 'block';
}
