// expenses funtion
function calculateExpenses(food, rent, cloth) {
    const sumOfExpenses = food + rent + cloth;
    return sumOfExpenses;
}
// input taking Function
function takeInput(expenseName) {
    const inputText = document.getElementById(expenseName).value;
    const inputValue = parseFloat(inputText);
    if (inputValue < 0) {
        alert('Please provide a positive number.');
        return 0;
    }
    else if (isNaN(inputValue)) {
        alert('Please give a Number in ' + expenseName);
        return 0;
    }
    else {
        return inputValue;
    }
}
// inner text taking
function updateText(textName, setValue) {
    const textDetails = document.getElementById(textName);
    textDetails.innerText = setValue;
}
// savings Calculation
function calculateSavings(amount, saveValue) {
    const savingAmount = (amount * saveValue) / 100;
    return savingAmount;
}
// blance and expense 
document.getElementById('calculate-button').addEventListener('click', function () {
    // taking input
    const incomeAmount = takeInput('income-input');
    const foodAmount = takeInput('food');
    const rentAmount = takeInput('rent');
    const clothesAmount = takeInput('cloth');

    const total = calculateExpenses(foodAmount, rentAmount, clothesAmount);
    if (total > incomeAmount) {
        alert('You cannot spend more than your income.');
        return 0;
    } else {
        updateText('total-used', total);
    }
    const currentBalance = incomeAmount - total;
    updateText('balance', currentBalance);
});

// percentage calculation 
document.getElementById('save-btn').addEventListener('click', function () {
    const savingValue = takeInput('saving-input');
    const currentBalance = document.getElementById('balance').innerText;
    const incomeAmount = takeInput('income-input');

    const savingAmount = calculateSavings(incomeAmount, savingValue);
    if (savingAmount > currentBalance) {
        alert('You cannot saving blance more than you have.');
        return 0;
    } else {
        updateText('save-money', savingAmount);
    }
    const remainingBalance = currentBalance - savingAmount;
    updateText('remain-balance', remainingBalance);
});