const uname = document.querySelector('#uname');
const pass = document.querySelector('#pass');
const btn = document.querySelector('#login-btn');
const form = document.querySelector('#login-form');
const msg = document.querySelector('.msg');

btn.disabled = true;

// Ativa ou desativa o botão conforme preenchimento
function checkFields() {
    if (uname.value.trim() !== '' && pass.value.trim() !== '') {
        btn.disabled = false;
    } else {
        btn.disabled = true;
    }
}

uname.addEventListener('input', checkFields);
pass.addEventListener('input', checkFields);

// Faz o botão fugir
function shiftButton() {
    showMsg("Usuário ou senha inválidos!");

    const positions = ['shift-left', 'shift-right', 'shift-top', 'shift-bottom'];
    
    // Remove todas classes anteriores
    positions.forEach(dir => btn.classList.remove(dir));
    
    // Escolhe uma nova direção aleatória
    const randomPosition = positions[Math.floor(Math.random() * positions.length)];
    btn.classList.add(randomPosition);
}

// Mostra mensagem
function showMsg(message, color = 'red') {
    msg.textContent = message;
    msg.style.color = color;
}

// Quando clicar no botão (submit do form)
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (uname.value === "admin" && pass.value === "1234") {
        showMsg("Login bem-sucedido!", 'green');
        btn.disabled = true;
    } else {
        shiftButton();
    }
});
