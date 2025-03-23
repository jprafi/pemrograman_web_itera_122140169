const form = document.getElementById('myForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const outputDiv = document.getElementById('output');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

    if (nameInput.value.length <= 3) {
        nameError.textContent = 'Nama harus lebih dari 3 karakter';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    if (!isValidEmail(emailInput.value)) {
        emailError.textContent = 'Email tidak valid';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password minimal 8 karakter';
        isValid = false;
    } else {
        passwordError.textContent = '';
    }

    if (isValid) {
        const output = `Selamat ${nameInput.value}! Email yang diinput benar.`;
        outputDiv.textContent = output;
        outputDiv.style.display = 'block';
    } else {
        outputDiv.style.display = 'none';
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}