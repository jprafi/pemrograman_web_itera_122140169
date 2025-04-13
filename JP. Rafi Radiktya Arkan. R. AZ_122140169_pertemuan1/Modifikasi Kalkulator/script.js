function sapaNama(nama) {
    return `Halo, ${nama}! Selamat datang di kalkulator sederhana!`;
}

document.getElementById("sapa-button").addEventListener("click", function() {
    const nama = document.getElementById("nama-input").value;
    if (nama.trim() === "") {
        document.getElementById("sapa-output").innerHTML = `<p class="text-red-500">Silakan masukkan nama Anda terlebih dahulu!</p>`;
    } else {
        const pesan = sapaNama(nama);
        document.getElementById("sapa-output").innerHTML = `<p class="text-green-500">${pesan}</p>`;
    }
});

let currentInput = '';
let operator = '';
let firstOperand = null;

function appendNumber(number) {
    currentInput += number;
    document.getElementById('result').value = currentInput;
}

function setOperator(op) {
    if (currentInput) {
        firstOperand = parseFloat(currentInput);
        operator = op;
        currentInput = '';
    }
}

function calculate() {
    if (operator && currentInput) {
        const secondOperand = parseFloat(currentInput);
        let result;

        switch (operator) {
            case '+': result = firstOperand + secondOperand; break;
            case '-': result = firstOperand - secondOperand; break;
            case '*': result = firstOperand * secondOperand; break;
            case '/': result = firstOperand / secondOperand; break;
            case '^': result = Math.pow(firstOperand, secondOperand); break;
            case '%': result = firstOperand % secondOperand; break;
        }

        document.getElementById('result').value = result;
        currentInput = result.toString();
        operator = '';
        firstOperand = null;
    }
}

function calculateSquareRoot() {
    if (currentInput) {
        const result = Math.sqrt(parseFloat(currentInput));
        document.getElementById('result').value = result;
        currentInput = result.toString();
    }
}

function clearResult() {
    currentInput = '';
    operator = '';
    firstOperand = null;
    document.getElementById('result').value = '';
}