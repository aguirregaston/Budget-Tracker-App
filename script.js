let balance = 0;

function updateBalance() {
    document.getElementById('balance').innerText = balance;
}

function addIncome() {
    const income = parseFloat(document.getElementById('income').value);
    if (!isNaN(income) && income > 0) {
        balance += income;
        document.getElementById('history').innerHTML += `<li>Ingreso: ${income}$</li>`;
        updateBalance();
        document.getElementById('income').value = '';
    } else {
        alert('Por favor, ingresa un monto válido.');
    }
}

function addExpense() {
    const expense = parseFloat(document.getElementById('expense').value);
    if (!isNaN(expense) && expense > 0) {
        balance -= expense;
        document.getElementById('history').innerHTML += `<li>Gasto: ${expense}$</li>`;
        updateBalance();
        document.getElementById('expense').value = '';
    } else {
        alert('Por favor, ingresa un monto válido.');
    } 
}